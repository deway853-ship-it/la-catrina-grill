import { useState, useEffect } from "react";

// ============================================================
// WEEK 3: Uncomment these two imports AFTER setting up Firebase:
// ============================================================
 import { collection, getDocs } from "firebase/firestore";
 import { db } from "../firebase";

// ============================================================
// SAMPLE MENU DATA
// This lets the menu page work BEFORE Firebase is set up.
// In Week 3, you will delete this and load from Firebase instead.
//
// TODO (Week 2): You can update these items to match YOUR
// restaurant if you want, but it's not required yet.
// ============================================================
const sampleMenuItems = [
  {
    id: "1",
    name: "Catrina Queso Dip",
    description: "Creamy melted cheese blended with roasted peppers and served with fresh tortilla chips.",
    price: 7.99,
    category: "Appetizers",
  },
  {
    id: "2",
    name: "Loaded Nachos de la Casa",
    description: "Crispy tortilla chips topped with queso, beans, pico de gallo, jalapeños, and your choice of protein.",
    price: 10.99,
    category: "Appetizers",
  },
  {
    id: "3",
    name: "Birria Burrito",
    description: "A delicious placeholder entree. Your items will look much better!",
    price: 14.99,
    category: "Entrees",
  },
  {
    id: "4",
    name: "Enchiladas Verdes",
    description: "Three enchiladas filled with chicken and topped with tangy green tomatillo sauce and queso fresco.",
    price: 13.49,
    category: "Entrees",
  },
  {
    id: "5",
    name: "Street-Style Carne Asada Tacos",
    description: "Grilled marinated steak served on warm corn tortillas with onions, cilantro, and lime.",
    price: 12.99,
    category: "Tacos",
  },
  {
    id: "6",
    name: "Pollo al Pastor Tacos",
    description: "Juicy marinated chicken cooked on a vertical spit, served with pineapple, onions, and cilantro on corn tortillas.",
    price: 11.99,
    category: "Tacos",
  },
  {
    id: "7",
    name: "Mexican Street Corn (Elote)",
    description: "Grilled corn coated in mayo, cotija cheese, chili powder, and lime",
    price: 5.99,
    category: "Sides",
  },
  { id: "8",
    name: "Churro Bites with Chocolate Sauce",
    description: "Warm cinnamon sugar churros served with rich chocolate dipping sauce.",
    price: 6.49,
    category: "Desserts",
  },
  {id: "10",
    name: "Tres Leches Cake",
    description: "A moist sponge cake soaked in three types of milk and topped with whipped cream and fresh berries.",
    price: 6.99,
    category: "Desserts",
  },
  {id: "9",
    name: "Horchata",
    description: "A refreshing traditional Mexican drink made with rice, milk, vanilla, and cinnamon.",
    price: 3.99,
    category: "Drinks",
  },
  {id: "11",
    name: "Agua de Jamaica",
    description: "A tangy and sweet hibiscus flower drink, served chilled.",
    price: 3.49,
    category: "Drinks",
  },
  
];

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        // ==========================================================
        // WEEK 3: FIREBASE VERSION
        // Uncomment the block below and DELETE the sample data block
        // AFTER you set up Firebase and add your menu items.
        // ==========================================================
        // const querySnapshot = await getDocs(collection(db, "menuItems"));
        // const items = querySnapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }));
        // setMenuItems(items);

        // ==========================================================
        // SAMPLE DATA VERSION (delete this block in Week 3)
        // ==========================================================
        await new Promise((resolve) => setTimeout(resolve, 500));
        setMenuItems(sampleMenuItems);
      } catch (err) {
        console.error("Error fetching menu:", err);
        setError("Failed to load menu. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);

  if (loading) {
    return (
      <div className="page">
        <p className="loading-message">Loading menu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  // Group items by category
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <div className="page">
      <div className="menu-header">
        {/* TODO: Customize this heading for YOUR restaurant */}
        <h1>Our Menu</h1>
        <p>Our menu at La Catrina Grill features a delicious variety of authentic Mexican dishes, from sizzling fajitas and street-style tacos to flavorful enchiladas and fresh guacamole. Each meal is made with bold spices, fresh ingredients, and traditional recipes to deliver a true taste of Mexico in every bite.</p>
      </div>

      {categories.map((category) => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <div key={item.id} className="menu-item">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">${item.price.toFixed(2)}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
