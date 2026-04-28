function About() {
  return (
    <div className="page">
      {/* ============================================================
          ABOUT HEADER
          TODO: Change the heading and subtitle for YOUR restaurant.
          ============================================================ */}
      <div className="about-header">
        <h1>About La Carina Grill</h1>
        <p className="subtitle">Fresh, authentic Mexican flavors served in a vibrant and welcoming atmosphere.</p>
      </div>

      {/* ============================================================
          YOUR STORY
          TODO: Write 2-3 paragraphs telling YOUR restaurant's story.
          Be creative! You can make it all up. Think about:
          - How did the restaurant start?
          - Who founded it and why?
          - What is the restaurant's mission or philosophy?
          ============================================================ */}
      <div className="about-story">
        <p>
          La Catrina Grill began as the vision of a passionate chef who wanted to share authentic Mexican flavors with the local community in a way that felt both bold and welcoming. The inspiration came from growing up around traditional family recipes and cultural celebrations where food played a central role in bringing people together. One defining moment came during a local community event where the chef served homemade dishes and received overwhelming praise and encouragement from guests who kept coming back for more. That experience sparked the idea of turning a lifelong passion into something bigger than pop-up cooking. From there, La Catrina Grill was created as a place that blends tradition, flavor, and atmosphere offering food that honors heritage while creating a warm space for everyone who walks through the door.
        </p>
        <p>
          After its early success at local events, La Catrina Grill quickly grew through word of mouth as more people came to try the food and recommended it to others. This growing popularity led to the opening of a small permanent location. As the restaurant expanded, it faced challenges like limited space, long work hours, and keeping up with demand while maintaining consistent quality. Despite these obstacles, the focus on authentic recipes and fresh ingredients helped it stay strong. Today, La Catrina Grill is known for its bold Mexican flavors, especially its grilled specialties, fresh salsas, and a warm, welcoming atmosphere that keeps customers coming back.
        </p>
        <p>
          The mission of La Catrina Grill is to share authentic Mexican cuisine while honoring tradition, culture, and fresh, high-quality ingredients in every dish. The goal is to create more than just a meal, but a full experience that brings people together through flavor and atmosphere. When guests visit, the restaurant wants them to feel welcomed, comfortable, and part of a celebration, as if they are sharing a home-cooked meal with friends. What keeps people coming back is the consistency of the food, the bold and memorable flavors, and the warm, friendly environment that makes every visit feel special and familiar.
        </p>
      </div>

      <div className="about-divider"></div>

      {/* ============================================================
          MEET THE TEAM
          TODO: Create 2-3 fictional team members for YOUR restaurant.
          Change the emoji, name, role, and bio for each person.
          ============================================================ */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>[Team Member 1 Name]</h3>
            <p className="role">[Their Role]</p>
            <p>[A 1-2 sentence bio about this person.]</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👩‍💼</div>
            <h3>[Team Member 2 Name]</h3>
            <p className="role">[Their Role]</p>
            <p>[A 1-2 sentence bio about this person.]</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍🍳</div>
            <h3>[Team Member 3 Name]</h3>
            <p className="role">[Their Role]</p>
            <p>[A 1-2 sentence bio about this person.]</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
