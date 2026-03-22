<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SportsX - Sports Performance Exchange</title>
    <style>
        :root {
            --gold-gradient: linear-gradient(to bottom, #ffd700, #b8860b);
            --dark-bg: #050505;
            --accent-orange: #ff4500;
            --card-bg: rgba(20, 20, 20, 0.9);
        }

        body {
            background-color: var(--dark-bg);
            color: #ffffff;
            font-family: 'Rajdhani', sans-serif; /* Recommended for sports-tech look */
            margin: 0;
            text-align: center;
        }

        /* Navigation Bar */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 5%;
            background: #000;
            border-bottom: 1px solid #333;
        }

        .logo { color: var(--gold-gradient); font-weight: bold; font-size: 1.5rem; }

        /* Hero Section */
        .hero {
            padding: 80px 20px;
            background: radial-gradient(circle, rgba(255,140,0,0.15) 0%, rgba(0,0,0,1) 70%);
        }

        .hero h1 { font-size: 3rem; margin: 0; color: #fff; letter-spacing: 2px; }
        .hero h2 { color: #f39c12; margin-top: 5px; }

        .btn-gold {
            background: linear-gradient(45deg, #d35400, #f39c12);
            border: none;
            padding: 12px 30px;
            color: #000;
            font-weight: 800;
            cursor: pointer;
            margin: 10px;
            border-radius: 3px;
        }

        /* Performance Grid Section */
        .section-header {
            border-top: 1px solid #444;
            border-bottom: 1px solid #444;
            padding: 15px;
            letter-spacing: 3px;
            font-weight: bold;
        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            padding: 40px 10%;
        }

        .card {
            background: var(--card-bg);
            border: 1px solid #555;
            padding: 30px;
            border-radius: 4px;
            position: relative;
            transition: 0.3s;
        }

        .card:hover {
            border-color: #f39c12;
            box-shadow: 0 0 20px rgba(243, 156, 18, 0.4);
        }

        .card h3 { color: #fff; margin-bottom: 5px; }
        .card .subtext { color: #888; font-size: 0.8rem; }
        
        .status-tag {
            color: #f39c12;
            font-size: 0.7rem;
            margin-top: 10px;
            display: block;
        }

        /* Ticker Bar */
        .ticker {
            background: #000;
            padding: 10px;
            font-size: 0.9rem;
            border-top: 1px solid #222;
        }
    </style>
</head>
<body>

    <nav>
        <div class="logo">SPORTSX</div>
        <div class="nav-links">Home &nbsp; Leaderboards &nbsp; Leagues &nbsp; <button class="btn-gold" style="padding: 5px 15px;">Login</button></div>
    </nav>

    <div class="hero">
        <h1>SPORTSX - THE FIRST MULTI-LEAGUE</h1>
        <h2>SPORTS PERFORMANCE EXCHANGE</h2>
        <p>Trade structured performance indexes. Build your sports portfolio.</p>
        <button class="btn-gold">CREATE FREE ACCOUNT</button>
        <button class="btn-gold" style="background: #111; color: #fff; border: 1px solid #444;">VIEW LIVE INDEXES</button>
    </div>

    <div class="section-header">LIVE INDEX PERFORMANCE</div>
    
    <div class="grid-container">
        <div class="card">
            <h3>SX-NBA</h3>
            <span class="subtext">INDEX</span>
        </div>
        <div class="card">
            <h3>SX-ESPORTS</h3>
            <span class="subtext">INDEX</span>
        </div>
        <div class="card">
            <h3>SX-NFL</h3>
            <span class="subtext">INDEX</span>
        </div>
    </div>

    <div class="ticker">
        LIVE INDEX PERFORMANCE: <span style="color: #00ff00;">SX-NBA +18.82%</span> | <span style="color: #00ff00;">SX-ESPORTS +12.47%</span> | <span style="color: #ff0000;">SX-15.80%</span>
    </div>

    <div class="section-header" style="margin-top: 40px;">TRADE PERFORMANCE INDEXES</div>

    <div class="grid-container">
        <div class="card">
            <h3>Pro Football</h3>
            <span class="status-tag">(COMING SOON)</span>
        </div>
        <div class="card">
            <h3>Pro Baseball</h3>
            <span class="status-tag">(COMING SOON)</span>
        </div>
        <div class="card">
            <h3>Global Soccer</h3>
            <span class="status-tag">(FUTURE)</span>
        </div>
    </div>

</body>
</html>
