/**
 * OurWorkBackground — Luminous Golden Aurora & Radiant Celestial Ring System
 * Rich, vibrant, high-contrast luxury background exclusively for Our Work & Portfolio.
 * Features deep obsidian noir (#0c0c0c), a bold radiant golden eclipse ring,
 * warm champagne aurora sweeps, and luminous golden starlight embers.
 */
export default function OurWorkBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#F3E4D6]"
      aria-hidden="true"
    >
      {/* ─── Layer 1: Rich Champagne & Blush Aurora Light Veil ─── */}
      <div
        className="absolute top-[-10%] left-[5%] w-[80vw] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.75) 0%, rgba(248, 239, 231, 0.55) 35%, rgba(215, 122, 145, 0.18) 65%, transparent 85%)',
          filter: 'blur(70px)',
          animation: 'bokehDrift1 20s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute bottom-[-15%] right-[5%] w-[70vw] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 70%, rgba(215, 122, 145, 0.25) 0%, rgba(255, 255, 255, 0.6) 40%, transparent 80%)',
          filter: 'blur(75px)',
          animation: 'bokehDrift2 24s ease-in-out infinite alternate',
        }}
      />

      {/* ─── Layer 2: Center Stage Radiant Luminous Core (Behind Circular Marquee) ─── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[880px] h-[580px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.85) 0%, rgba(248, 239, 231, 0.65) 30%, rgba(215, 122, 145, 0.2) 60%, rgba(212, 161, 58, 0.12) 80%, transparent 92%)',
          filter: 'blur(45px)',
        }}
      />

      {/* ─── Layer 3: Bold Luminous Golden & Blush Celestial Arc ─── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[920px] pointer-events-none">
        {/* Outer Radiant Gold & Blush Ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: '2px solid rgba(212, 161, 58, 0.45)',
            boxShadow:
              '0 0 80px rgba(215, 122, 145, 0.25), inset 0 0 60px rgba(212, 161, 58, 0.2), 0 0 25px rgba(255, 255, 255, 0.6)',
            animation: 'astrolabeClockwise 90s linear infinite',
          }}
        >
          {/* Luminous Diamond Star Nodes on the Ring */}
          <span
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4A13A]"
            style={{
              boxShadow: '0 0 20px #D4A13A, 0 0 40px #D77A91, 0 0 60px #FFFFFF',
            }}
          />
          <span
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#D77A91]"
            style={{
              boxShadow: '0 0 16px #D77A91, 0 0 30px #FAF4EE',
            }}
          />
        </div>

        {/* Inner Counter-Rotating Golden Ring */}
        <div
          className="absolute inset-[90px] rounded-full"
          style={{
            border: '1.5px dashed rgba(212, 161, 58, 0.45)',
            boxShadow:
              '0 0 50px rgba(212, 161, 58, 0.25), inset 0 0 40px rgba(215, 122, 145, 0.18)',
            animation: 'astrolabeCounter 65s linear infinite',
          }}
        >
          <span
            className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-[#D77A91]"
            style={{
              boxShadow: '0 0 14px #D77A91, 0 0 28px #FFFFFF',
            }}
          />
        </div>
      </div>

      {/* ─── Layer 4: Luminous Golden & Blush Embers / Starlight Sparks ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <span
          className="absolute top-[18%] left-[15%] w-2.5 h-2.5 rounded-full bg-[#D4A13A]"
          style={{
            boxShadow: '0 0 16px #D4A13A, 0 0 30px #FFFFFF',
            animation: 'starTwinkle 3.5s ease-in-out infinite',
          }}
        />
        <span
          className="absolute top-[28%] right-[18%] w-2 h-2 rounded-full bg-[#D77A91]"
          style={{
            boxShadow: '0 0 14px #D77A91, 0 0 24px #FAF4EE',
            animation: 'starTwinkle 4s ease-in-out infinite 1s',
          }}
        />
        <span
          className="absolute bottom-[22%] left-[22%] w-2.5 h-2.5 rounded-full bg-[#FFFFFF]"
          style={{
            boxShadow: '0 0 16px #FFFFFF, 0 0 32px #D77A91',
            animation: 'starTwinkle 5s ease-in-out infinite 0.5s',
          }}
        />
        <span
          className="absolute bottom-[26%] right-[14%] w-2 h-2 rounded-full bg-[#D77A91]"
          style={{
            boxShadow: '0 0 14px #D77A91, 0 0 25px #D4A13A',
            animation: 'starTwinkle 4s ease-in-out infinite 2s',
          }}
        />
      </div>

      {/* ─── Layer 5: Molten Golden Horizon Light Beam ─── */}
      <div
        className="absolute top-[55%] left-0 right-0 h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.15) 15%, rgba(242, 202, 80, 0.7) 50%, rgba(212, 175, 55, 0.15) 85%, transparent 100%)',
          boxShadow: '0 0 24px rgba(242, 202, 80, 0.4), 0 0 8px rgba(212, 175, 55, 0.6)',
        }}
      />

      {/* ─── Layer 6: Soft Nude & Champagne Ambient Peripheral Glow ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(215, 122, 145, 0.08) 85%, rgba(243, 228, 214, 0.6) 100%)',
        }}
      />
    </div>
  )
}
