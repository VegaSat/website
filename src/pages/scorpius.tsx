export default function ScorpiusComingSoon() {
  return (
    <div className="scorpius-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,400&display=swap');

        .scorpius-root{
          --midnight:#0a0a0a;
          --starlight:#f5f5f5;
          --antares:#b31e3d;
          margin: 0;
          padding: 0;
          background: var(--midnight);
          color: var(--starlight);
          font-family: 'Source Sans Pro', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          text-align: center;
          overflow: hidden;
        }

        /* Header wrapper with animation */
        .scorpius-root .header-wrapper{
          display:inline-block;
          position:relative;
          padding:6px;
          border-radius:8px;
          margin-bottom:0.5rem;
        }

        /* Pulsing glow behind the header */
        .scorpius-root .header-wrapper::after{
          content: "";
          position: absolute;
          inset: -18%;
          border-radius: 12px;
          background: radial-gradient(circle at 30% 20%, rgba(179,30,61,0.24), rgba(179,30,61,0.06) 14%, transparent 36%);
          filter: blur(12px);
          opacity: 0.95;
          z-index: -1;
          transform: scale(0.95);
          animation: pulseGlow 2.6s ease-in-out infinite;
          pointer-events:none;
        }

        @keyframes pulseGlow {
          0%   { transform: scale(0.95); opacity: 0.72; }
          50%  { transform: scale(1.12); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.76; }
        }

        /* Header SVG */
        .scorpius-root #scorpius-header {
          display:block;
          width: min(680px, 78vw);
          height: auto;
          user-select: none;
          -webkit-user-drag: none;
        }

        /* Subtitle */
        .scorpius-root h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 400;
          color: #f5f5f5;
          margin: 0.6rem 0 2rem 0;
          opacity: 0.95;
        }

        /* Floating stars */
        .scorpius-root .scorpion {
          width: 180px;
          height: auto;
          animation: float 4s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(179, 30, 61, 0.6));
          display:block;
          margin: 0 auto;
          -webkit-user-drag: none;
        }

        /* Coming Soon in Playfair Display */
        .scorpius-root .coming {
          margin-top: 3rem;
          font-size: 1.2rem;
          color: #aaa;
          letter-spacing: 0.05em;
          font-family: 'Playfair Display', serif;
          animation: fade 2s ease-in-out infinite alternate;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes fade {
          from { opacity: 0.45; }
          to   { opacity: 1; }
        }

        @media (max-width:520px) {
          .scorpius-root #scorpius-header { width: min(420px, 92vw); }
          .scorpius-root .scorpion { width: 140px; }
        }
      `}</style>

      {/* Header SVG with pulsing wrapper */}
      <div className="header-wrapper" aria-hidden="false">
        <img id="scorpius-header" src="img/SCORPIUS-Header-COLORED.svg" alt="SCORPIUS" />
      </div>

      {/* Subtitle */}
      <h2>CanSat team 2025/26</h2>

      {/* Floating stars */}
      <img src="img/SCORPIUS-Stars-COLORED.svg" className="scorpion" alt="Scorpius emblem" />

      {/* Coming Soon */}
      <p className="coming">Coming Soon</p>
    </div>
  );
}
