import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      {/* ============================================================
          HERO SECTION
          TODO: Replace the name, tagline, and button text with yours.
          ============================================================ */}
      <section className="hero">
        <h1>LA Catrina Grill</h1>
        <p className="tagline">“Bold Flavors. Mexican Soul.” </p>
        <Link to="/menu" className="cta-button">
          View Our Menu
        </Link>
      </section>

    
      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome</h2>
          <p>
            La Catrina Grill serves authentic Mexican cuisine with a focus on bold, fresh, and traditional flavors. The menu includes grilled meats, tacos, burritos, and house-made salsas that highlight classic recipes with high-quality ingredients. What makes the restaurant special is its commitment to authentic taste and a welcoming atmosphere that feels both vibrant and comforting. Every dish is prepared with care to reflect cultural tradition while still offering a modern dining experience. People should eat here because it offers more than just food—it provides a flavorful experience that brings people together and leaves them satisfied, welcomed, and eager to return.
            </p>
            <p style={{ marginTop: "1rem" }}>
            At La Catrina Grill, we serve bold and authentic Mexican cuisine made fresh with high-quality ingredients. Our menu includes flavorful favorites like street-style tacos, savory burritos, enchiladas, and delicious starters like queso dip and loaded nachos, along with refreshing drinks like horchata and agua de jamaica. What makes us special is our combination of traditional Mexican recipes and a modern, vibrant dining atmosphere inspired by Día de los Muertos. With colorful décor, warm lighting, and a welcoming vibe, we create an experience that's perfect for families, friends, and date nights. People should choose La Catrina Grill not just for the food, but for the full experience—great flavors, great energy, and a place that feels both exciting and comfortable.
            </p>
          </div>
          <div className="welcome-image">
            <img src="/ChatGPT Image Apr 21, 2026, 04_06_41 PM.png" alt="Vibrant La Catrina Grill dining space featuring colorful Día de los Muertos-inspired décor with warm lighting, inviting diners to an authentic Mexican culinary experience" />
          </div>
          </section>

          {/* ============================================================
            FEATURE CARDS
            TODO: Change the icons, titles, and descriptions below
            to highlight 3 things that make YOUR restaurant special.
            ============================================================ */}
      <section>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Authentic Mexican Flavors</h3>
            <p>La Catrina Grill brings the true taste of Mexico with traditional recipes, bold spices, and fresh ingredients in every dish.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Grilled to Perfection</h3>
            <p>From sizzling fajitas to flame-grilled meats, every meal is cooked over an open grill for rich, smoky flavor you can’t resist.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Vibrant Atmosphere</h3>
            <p>Inspired by Mexican culture and La Catrina tradition, our restaurant offers a lively, colorful space perfect for friends and family.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
