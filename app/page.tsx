import React from 'react';

export default function HomePage() {
  return (
    <main style={{
      backgroundColor: '#050505',
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      margin: 0
    }}>
      {/* Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 5%',
        background: '#000',
        borderBottom: '1px solid #333'
      }}>
        <div style={{ color: '#ffd700', fontWeight: 'bold', fontSize: '1.5rem' }}>SPORTSX</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span>Home</span>
          <span>Leaderboards</span>
          <span>Leagues</span>
          <button style={{
            background: 'linear-gradient(45deg, #d35400, #f39c12)',
            border: 'none',
            padding: '5px 15px',
            color: '#000',
            fontWeight: '800',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '80px 20px',
        background: 'radial-gradient(circle, rgba(255,140,0,0.15) 0%, rgba(0,0,0,1) 70%)'
      }}>
        <h1 style={{ fontSize: '3rem', margin: 0, letterSpacing: '2px' }}>SPORTSX - THE FIRST MULTI-LEAGUE</h1>
        <h2 style={{ color: '#f39c12', marginTop: '5px' }}>SPORTS PERFORMANCE EXCHANGE</h2>
        <p>Trade structured performance indexes. Build your sports portfolio.</p>
        <button style={{
          background: 'linear-gradient(45deg, #d35400, #f39c12)',
          border: 'none',
          padding: '12px 30px',
          color: '#000',
          fontWeight: '800',
          cursor: 'pointer',
          margin: '10px',
          borderRadius: '3px'
        }}>CREATE FREE ACCOUNT</button>
      </section>

      {/* Grid Sections */}
      <div style={{ borderTop: '1px solid #444', borderBottom: '1px solid #444', padding: '15px', letterSpacing: '3px', fontWeight: 'bold' }}>
        LIVE INDEX PERFORMANCE
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        padding: '40px 10%'
      }}>
        {['SX-NBA', 'SX-ESPORTS', 'SX-NFL'].map((item) => (
          <div key={item} style={{ background: 'rgba(20, 20, 20, 0.9)', border: '1px solid #555', padding: '30px', borderRadius: '4px' }}>
            <h3>{item}</h3>
            <span style={{ color: '#888', fontSize: '0.8rem' }}>INDEX</span>
          </div>
        ))}
      </div>

      {/* Ticker Bar */}
      <div style={{ background: '#000', padding: '10px', fontSize: '0.9rem', borderTop: '1px solid #222' }}>
        LIVE INDEX PERFORMANCE: <span style={{ color: '#00ff00' }}>SX-NBA +18.82%</span> | <span style={{ color: '#00ff00' }}>SX-ESPORTS +12.47%</span>
      </div>
    </main>
  );
}
