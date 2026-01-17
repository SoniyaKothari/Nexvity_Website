'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('default');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Snake game refs
  const canvasRef = useRef(null);
  const animationRef = useRef(0);
  const snakeRef = useRef([{x: 10, y: 10}]);
  const foodRef = useRef({x: 15, y: 15});
  const dxRef = useRef(0);
  const dyRef = useRef(0);
  const gameSpeedRef = useRef(150);
  const lastUpdateRef = useRef(0);

  const contentData = {
    services: { title: 'Our Services', body: 'We provide comprehensive IT solutions including web development, mobile app development, cloud infrastructure, cybersecurity, and AI integration. Our team delivers cutting-edge technology tailored to your business needs.' },
    about: { title: 'About Us', body: 'We are a team of passionate innovators dedicated to transforming ideas into reality. Founded with a vision to push technological boundaries.' },
    portfolio: { title: 'Our Portfolio', body: 'Explore our diverse range of successful projects across multiple industries. From startups to enterprise solutions.' }
  };

  const resetGame = useCallback(() => {
    snakeRef.current = [{x: 10, y: 10}];
    dxRef.current = 0;
    dyRef.current = 0;
    lastUpdateRef.current = 0;
    foodRef.current = {x: 15, y: 15};
    setScore(0);
    setLevel(1);
    gameSpeedRef.current = 150;
  }, []);

  const drawGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    snakeRef.current.forEach((segment, index) => {
      ctx.fillStyle = '#00ff9d';
      if (index === 0) {
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00ff9d';
      }
      ctx.fillRect(segment.x * 20, segment.y * 20, 18, 18);
      ctx.shadowBlur = 0;
    });

    // Draw food
    ctx.fillStyle = '#ff006e';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#ff006e';
    ctx.fillRect(foodRef.current.x * 20, foodRef.current.y * 20, 18, 18);
    ctx.shadowBlur = 0;
  }, []);

  const gameLoop = useCallback((timestamp) => {
    if (isPaused || (dxRef.current === 0 && dyRef.current === 0)) {
      animationRef.current = requestAnimationFrame(gameLoop);
      return;
    }

    if (timestamp - lastUpdateRef.current < gameSpeedRef.current) {
      animationRef.current = requestAnimationFrame(gameLoop);
      return;
    }

    lastUpdateRef.current = timestamp;

    const head = { x: snakeRef.current[0].x + dxRef.current, y: snakeRef.current[0].y + dyRef.current };
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Wall collision
    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
      resetGame();
      animationRef.current = requestAnimationFrame(gameLoop);
      return;
    }

    // Self collision
    if (snakeRef.current.some(segment => segment.x === head.x && segment.y === head.y)) {
      resetGame();
      animationRef.current = requestAnimationFrame(gameLoop);
      return;
    }

    snakeRef.current.unshift(head);

    // Food collision
    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      const newScore = score + 10;
      setScore(newScore);
      const newLevel = Math.floor(newScore / 50) + 1;
      setLevel(newLevel);
      gameSpeedRef.current = Math.max(50, 150 - newLevel * 10);
      
      foodRef.current = {
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20)
      };
    } else {
      snakeRef.current.pop();
    }

    // draw the updated state
    drawGame();

    animationRef.current = requestAnimationFrame(gameLoop);
  }, [isPaused, score, resetGame]);

  useEffect(() => {
    if (currentSection === 'game') {
      drawGame();
      animationRef.current = requestAnimationFrame(gameLoop);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentSection, gameLoop, drawGame]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentSection !== 'game') return;

      if ((e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') && dyRef.current !== 1) {
        dxRef.current = 0;
        dyRef.current = -1;
      } else if ((e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') && dyRef.current !== -1) {
        dxRef.current = 0;
        dyRef.current = 1;
      } else if ((e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') && dxRef.current !== 1) {
        dxRef.current = -1;
        dyRef.current = 0;
      } else if ((e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') && dxRef.current !== -1) {
        dxRef.current = 1;
        dyRef.current = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  return (
    <div className="w-full overflow-hidden bg-black text-white border border-[#00ff9d]/30 rounded-xl pt-10 pb-10">
      {currentSection === 'game' ? (
        // Game layout: canvas on left, controls on right
        <div className="flex flex-col lg:flex-row">
          <section className="lg:w-1/2 flex items-center justify-center p-0">
            <div className="w-full max-w-md p-4">
              <canvas 
                ref={canvasRef} 
                width={400} 
                height={400} 
                className="w-full h-auto max-w-[400px] border border-[#00ff9d]/30 rounded-lg shadow-[0 0 20px_rgba(0,255,157,0.2)] block mx-auto"
              />
            </div>
          </section>
          
          <div className="h-px lg:h-full lg:w-px w-full lg:w-auto bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-[#00ff9d]/30 to-transparent lg:via-[#00ff9d]/30" />
          
          <section className="lg:w-1/2 flex items-center justify-center p-0">
            <div className="w-full max-w-sm space-y-6 mx-auto p-4">
              <div className="space-y-3 text-center">
                <h2 className="text-3xl font-light" style={{color: '#00ff9d'}}>Snake Game</h2>
                <p className="text-base" style={{color: '#a0a0a0'}}>Arrow keys or WASD to play</p>
              </div>
              <div className="flex justify-between gap-6">
                <div className="text-center flex-1"><span className="text-sm block" style={{color: '#a0a0a0'}}>Score</span><span className="text-2xl font-bold block" style={{color: '#00ff9d'}}>{score}</span></div>
                <div className="text-center flex-1"><span className="text-sm block" style={{color: '#a0a0a0'}}>Level</span><span className="text-2xl font-bold block" style={{color: '#00ff9d'}}>{level}</span></div>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  className="w-full px-6 py-3 rounded-full font-medium text-base bg-[#00ff9d] text-black"
                  onClick={() => {
                    resetGame();
                    dxRef.current = 1;
                    dyRef.current = 0;
                    setIsPaused(false);
                    lastUpdateRef.current = 0;
                    animationRef.current = requestAnimationFrame(gameLoop);
                  }}
                >
                  Start Game
                </button>

                <button
                  className="w-full px-6 py-3 rounded-full font-medium text-base border border-[#00ff9d]/30 bg-[rgba(255,255,255,0.05)] text-white backdrop-blur-sm"
                  onClick={() => {
                    setIsPaused(prev => {
                      const next = !prev;
                      if (next) {
                        if (animationRef.current) cancelAnimationFrame(animationRef.current);
                      } else {
                        lastUpdateRef.current = 0;
                        animationRef.current = requestAnimationFrame(gameLoop);
                      }
                      return next;
                    });
                  }}
                >
                  {isPaused ? 'Resume' : 'Pause'}
                </button>
                
                <button
                  className="w-full px-6 py-3 rounded-full font-medium text-base border border-[#ff006e]/30 bg-[rgba(255,255,255,0.05)] text-white backdrop-blur-sm"
                  onClick={() => {
                    setCurrentSection('default');
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </section>
        </div>
      ) : (
        // Normal layout
        <div className="flex flex-col lg:flex-row">
          {/* LEFT SECTION - RESPONSIVE */}
          <section className="flex-1 flex items-center justify-center p-0 order-2 lg:order-1">
            {currentSection === 'default' && (
              <div className="max-w-lg w-full space-y-4 sm:space-y-6 p-4">
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight" style={{color: '#e0e0e0'}}>
                    <span className="text-animate inline-block" style={{animationDelay: '0.1s'}}>Why are you visiting our website?</span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed" style={{color: '#e0e0e0'}}>
                    <span className="text-animate inline-block" style={{animationDelay: '0.3s'}}>Is it just for </span>
                    <span className="text-animate inline-block font-semibold" style={{color: '#ff006e', textShadow: '0 0 15px rgba(255, 0, 110, 0.5)', animationDelay: '0.4s'}}>time pass</span>
                    <span className="text-animate inline-block" style={{animationDelay: '0.5s'}}> - or are you here to </span>
                    <span className="text-animate inline-block font-semibold" style={{color: '#00ff9d', textShadow: '0 0 15px rgba(0, 255, 157, 0.5)', animationDelay: '0.6s'}}>grow?</span>
                  </p>
                  <div className="h-px w-16 sm:w-20 bg-[#00ff9d]"></div>
                </div>
              </div>
            )}

            {currentSection !== 'default' && currentSection !== 'game' && (
              <div className="max-w-sm sm:max-w-lg w-full space-y-4 sm:space-y-6 mx-auto p-4">
                <div className="space-y-2 sm:space-y-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-center sm:text-left" style={{color: '#00ff9d'}}>
                    {contentData[currentSection]?.title}
                  </h2>
                  <div className="h-px w-16 sm:w-20 bg-[#00ff9d] mx-auto sm:mx-0"></div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center sm:text-left" style={{color: '#e0e0e0'}}>
                    {contentData[currentSection]?.body}
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* MOBILE DIVIDER */}
          <div className="h-px lg:h-full lg:w-px w-full lg:w-auto order-2 lg:order-2 bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-[#00ff9d]/30 to-transparent lg:via-[#00ff9d]/30" />

          {/* RIGHT SECTION - CARDS GRID - RESPONSIVE */}
          <section className="flex-1 flex items-center justify-center p-0 order-1 lg:order-3">
            <div className="w-full max-w-md fade-in-up p-4" style={{animationDelay: '0.2s'}}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              
              {/* Game Card */}
              <div
                data-section="game"
                className={`card-node rounded-lg p-3 text-center cursor-pointer transition-all duration-300 icon-card bg-gradient-to-br from-[#8B4513]/20 to-[#654521]/30 border border-[#D4A574]/50 backdrop-blur-sm shadow-lg ${currentSection === 'game' ? 'active' : ''}`}
                onClick={() => setCurrentSection('game')}
              >
                <div className="text-xl sm:text-2xl lg:text-3xl mb-1">🎮</div>
                <h3 className="text-xs sm:text-sm font-medium">Game</h3>
              </div>

              {/* Services Card */}
              <div
                data-section="services"
                className={`card-node rounded-lg p-3 text-center cursor-pointer transition-all duration-300 icon-card bg-gradient-to-br from-[#8B4513]/20 to-[#654521]/30 border border-[#D4A574]/50 backdrop-blur-sm shadow-lg ${currentSection === 'services' ? 'active' : ''}`}
                onClick={() => setCurrentSection('services')}
              >
                <div className="text-xl sm:text-2xl lg:text-3xl mb-1">⚙️</div>
                <h3 className="text-xs sm:text-sm font-medium">Services</h3>
              </div>

              {/* About Card */}
              <div
                data-section="about"
                className={`card-node rounded-lg p-3 text-center cursor-pointer transition-all duration-300 icon-card bg-gradient-to-br from-[#8B4513]/20 to-[#654521]/30 border border-[#D4A574]/50 backdrop-blur-sm shadow-lg ${currentSection === 'about' ? 'active' : ''}`}
                onClick={() => setCurrentSection('about')}
              >
                <div className="text-xl sm:text-2xl lg:text-3xl mb-1">👥</div>
                <h3 className="text-xs sm:text-sm font-medium">About</h3>
              </div>

              {/* Portfolio Card */}
              <div
                data-section="portfolio"
                className={`card-node rounded-lg p-3 text-center cursor-pointer transition-all duration-300 icon-card bg-gradient-to-br from-[#8B4513]/20 to-[#654521]/30 border border-[#D4A574]/50 backdrop-blur-sm shadow-lg ${currentSection === 'portfolio' ? 'active' : ''}`}
                onClick={() => setCurrentSection('portfolio')}
              >
                <div className="text-xl sm:text-2xl lg:text-3xl mb-1">💼</div>
                <h3 className="text-xs sm:text-sm font-medium">Portfolio</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes textSlideIn { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        .text-animate { display: inline-block; opacity: 0; animation: textSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .icon-card { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; }
        .icon-card:hover { 
          transform: translateY(-4px) scale(1.05) !important; 
          box-shadow: 0 12px 35px rgba(212, 165, 116, 0.4) !important;
          border-color: rgba(212, 165, 116, 0.9) !important;
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.4), rgba(101, 67, 33, 0.5)) !important;
        }
        /* Map panel and nodes styling to match design */
        .map-panel {
          --node-size: clamp(80px, 12vw, 120px);
          background: linear-gradient(135deg, rgba(20,15,10,0.95), rgba(40,30,20,0.9));
          border: 2px solid rgba(139,69,19,0.4);
          box-shadow: inset 0 0 50px rgba(0,0,0,0.5);
          border-radius: 1rem;
          position: relative;
          overflow: visible;
          padding: clamp(12px, 3vw, 32px);
        }

        .map-node {
          background: rgba(65,45,30,0.45);
          backdrop-filter: blur(6px);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #D4A574;
          border: 2px solid rgba(212,165,116,0.25);
          transition: transform 220ms cubic-bezier(.16,1,.3,1), box-shadow 220ms, border-color 220ms;
          z-index: 5;
          width: var(--node-size);
          height: var(--node-size);
        }

        .map-node h3 { margin: 0; margin-top: 6px; color: #D4A574; }

        .map-node .text-2xl { filter: drop-shadow(0 6px 18px rgba(0,0,0,0.4)); }

        .map-node:hover { transform: translateY(-6px) scale(1.03); box-shadow: 0 18px 40px rgba(0,0,0,0.6); }

        .map-node.active {
          box-shadow: 0 8px 40px rgba(255,200,60,0.12), 0 0 36px rgba(255,200,60,0.35) inset, 0 0 30px rgba(255,200,60,0.12);
          border: 3px solid rgba(255,200,60,0.95);
          border-color: rgba(255,200,60,0.95);
          transform: translateY(-8px) scale(1.08);
          z-index: 20;
        }

        /* Game-specific outer highlight (yellow rounded square behind node) */
        .map-node[data-section="game"].active::after {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 14px;
          border: 4px solid rgba(255,200,60,0.95);
          box-shadow: 0 18px 40px rgba(255,200,60,0.25), 0 0 40px rgba(255,200,60,0.25) inset;
          filter: blur(2px);
          z-index: 10;
          pointer-events: none;
        }

        /* Portfolio specific styling to match right-side box (responsive) */
        .map-node[data-section="portfolio"] {
          width: var(--node-size);
          height: var(--node-size);
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(60,40,30,0.72), rgba(36,26,20,0.6));
          padding: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 2px solid rgba(212,165,116,0.7);
          position: absolute;
          overflow: visible;
          z-index: 30;
        }

        .map-node[data-section="portfolio"] .text-3xl,
        .map-node[data-section="portfolio"] .text-4xl,
        .map-node[data-section="portfolio"] .text-6xl {
          filter: drop-shadow(0 10px 30px rgba(255,200,60,0.12));
        }

        .map-node[data-section="portfolio"]::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 8px;
          border-radius: 12px;
          border: 1px solid rgba(212,165,116,0.25);
          pointer-events: none;
        }

        .map-node[data-section="portfolio"].active {
          z-index: 40;
        }

        /* Positioning hook for responsive offsets (avoid inline styles) */
        .portfolio-node {
          top: clamp(6px, 4%, 40px);
          right: clamp(6px, 4%, 40px);
          z-index: 60;
          transform: translateZ(0);
        }

        .map-node[data-section="about"] { z-index: 10; }

        @media (min-width: 640px) {
          .map-panel { --node-size: clamp(90px, 10vw, 120px); }
          .map-node h3 { font-size: 1rem; }
          .portfolio-node { top: clamp(8px, 5%, 48px); right: clamp(8px, 5%, 48px); }
          .map-panel { overflow: visible; }
        }

        @media (min-width: 1024px) {
          .map-panel { --node-size: 120px; }
          .map-panel { padding: 2rem; overflow: visible; }
          .portfolio-node { top: clamp(12px, 6%, 64px); right: clamp(12px, 6%, 64px); }
        }
      `}</style>
      <style jsx global>{`
        .card-node {
          background: rgba(65,45,30,0.45);
          backdrop-filter: blur(6px);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #D4A574;
          border: 2px solid rgba(212,165,116,0.25);
          transition: transform 220ms cubic-bezier(.16,1,.3,1), box-shadow 220ms, border-color 220ms;
          z-index: 5;
          height: 120px;
        }

        .card-node h3 { margin: 0; margin-top: 4px; color: #D4A574; }

        .card-node .text-xl { filter: drop-shadow(0 6px 18px rgba(0,0,0,0.4)); }

        .card-node:hover { transform: translateY(-6px) scale(1.03); box-shadow: 0 18px 40px rgba(0,0,0,0.6); }

        .card-node.active {
          box-shadow: 0 8px 40px rgba(255,200,60,0.12), 0 0 36px rgba(255,200,60,0.35) inset, 0 0 30px rgba(255,200,60,0.12);
          border: 3px solid rgba(255,200,60,0.95);
          transform: translateY(-8px) scale(1.08);
          z-index: 20;
        }
        
        
      `}</style>
    </div>
  );
}
