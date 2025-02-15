import React, { useState, useEffect } from 'react';
import '../styles/SorryCard.css';

function SorryCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="sorry-bg">
      <div 
        className={`sorry-card ${isOpen ? 'open' : ''}`}
        onClick={handleClick}
      >
        <div className="card-front">
          <div className="heart-broken"></div>
          <h2 className="front-text">I'm Really Sorry...🥹</h2>
          {isMobile && <p className="flip-instruction">Tap to open ❤️‍🩹</p>}
          {!isMobile && <p className="flip-instruction">Hover to open ❤️‍🩹</p>}
        </div>
        <div className="card-inside">
          <div className="card-content">
            <h1 className="card-title">I'm Truly Sorry🥹</h1>
            <h3 className="card-subtitle">My Dearest Manu,</h3>
            <p className="card-text">
              I know words might not be enough, but my heart aches knowing I've hurt you. 
              You mean the world to me, and seeing you sad because of my actions breaks my heart.
            </p>
            <p className="card-text">
              I know mi nit samjl nahi tula, majh chukla ani mi jara vichar nahi kela. 
              You deserve so much better, and I promise to be more mindful and caring.
              Tuzya feelings mala saglyat jast important ahet.
            </p>
            <div className="promises-section">
              <p className="card-text">
              Apla prem majhyasathi khup precious ahe, ani mala sagl nit karaychay.
              Mi promise karto ki:</p>
              <ul className="promises-list">
              <li>Mi sagla aikel ani samjun gheil</li>
              <li>Miss karat jari aslo tri study important</li>
              <li>Think before I act or speak</li>
              <li>Mi doghanchi kiti care karto he pn dakhvat jael</li>
              <li>Never take you for granted</li>
              </ul>
            </div>
            <p className="card-text highlight">
              Please give me a chance to make it up to you. You're the best 
              thing that's ever happened to me, and I can't imagine my life 
              without you.
            </p>
            <div className="signature">
              With sincere regret and all my love,<br />
              Always yours<br />
              Rasmalai <br/>
              Abhi 🧸
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SorryCard;