@Library('shared') _
pipeline {
    agent any

    environment {
        SONAR_HOME     = tool "Sonar"
        EC2_USER       = "ubuntu"
        EC2_HOST       = "3.225.221.208"
        IMAGE_NAME     = "soniya06/nexvity-website"
        IMAGE_TAG      = "v1"
        CONTAINER_NAME = "nexvity-website"
    }

    stages {
        stage("Workspace Cleanup") {
            steps {
                cleanWs()
            }
        }

        stage("Git: Code Checkout") {
            steps {
                script {
                    clone2(
                        "https://github.com/SoniyaKothari/Nexvity_Website.git",
                        "main"
                    )
                }
            }
        }

        stage("OWASP: Dependency Check") {
            steps {
                dependencyCheck additionalArguments: '--scan ./', odcInstallation: 'dc'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }

        stage("SonarQube: Code Analysis") {
            steps {
                withSonarQubeEnv("Sonar") {
                    sh """
                    ${SONAR_HOME}/bin/sonar-scanner \
                    -Dsonar.projectName=Nexvity-Website \
                    -Dsonar.projectKey=nexvity-website
                    """
                }
            }
        }

        stage("Docker: Build Image") {
            steps {
                script {
                    build("nexvity-website", IMAGE_TAG, "soniya06")
                }
            }
        }

        stage("Trivy: Filesystem Scan") {
            steps {
                sh "trivy fs --format table -o code-fs-scan.html ."
            }
        }

        stage("Docker: Push to DockerHub") {
            steps {
                script {
                    push("nexvity-website", IMAGE_TAG, "soniya06")
                }
            }
        }

        stage("Deploy: AWS EC2") {
            steps {
                echo "--------------------------------------------------------"
                echo "IMAGE PUSHED TO DOCKER HUB: ${IMAGE_NAME}:${IMAGE_TAG}"
                echo "ACTION REQUIRED: Please log in to ${EC2_HOST} and run the container."
                echo "--------------------------------------------------------"
            }
        }
    }

    post {
        success {
            echo "Pipeline success! CI part is complete. Go ahead with manual deployment."
        }
        failure {
            echo "Pipeline failed during CI stages. Check the logs."
        }
    }
}
