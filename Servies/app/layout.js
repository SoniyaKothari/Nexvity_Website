import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import LenisScroll from "@/components/lenis-scroll";
import Footer from "@/components/footer";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata = {
    title: {
  default:
    "NEXVITY – Best IT, Software Development & Consulting Company in Rajkot, Gujarat | Nexvity Infotech",
  template: "%s | Nexvity Infotech",
},

description:
  "Nexvity is a trusted, full-service IT, software development, and consulting company in Rajkot, Gujarat. We specialize in strategy & consultation, UI/UX design, web and mobile app development, SaaS platforms, cloud & DevOps engineering, quality assurance, digital marketing, and emerging technologies including AI, machine learning, blockchain, Web3, and IoT solutions for startups and enterprises.",

keywords: [
  "best IT company in Rajkot",
  "software development company Rajkot",
  "IT consulting company Gujarat",
  "web and mobile app development Gujarat",
  "UI UX design company Rajkot",
  "SaaS development company India",
  "cloud DevOps services Gujarat",
  "AI ML development company India",
  "blockchain Web3 development company",
  "digital marketing and SEO company Rajkot",
  "startup MVP development company Gujarat",
  "Nexvity Infotech IT solutions",
  ],
  alternates: {
    canonical: "https://nexvity.com",
  },
    appleWebApp: {
        title: "Nexvity",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}