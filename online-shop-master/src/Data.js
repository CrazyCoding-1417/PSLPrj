// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "John Deere E130 22-HP V-twin Side by Side",
    category: "Outdoor",
    price: 1999,
    description:
      "John Deere E130 22-HP V-twin Side by Side",
    popular: true,
    imageUrls: [
      "/Images/Product_LawnMower2.jpg",
      "/Images/Product_LawnMower2.jpg"
    ]
  },
  {
    id: 2,
    name: "CRAFTSMAN T110 17.5-HP Manual/ Gear 42-i",
    category: "Outdoor",
    price: 1299,
    description:
      "CRAFTSMAN T110 17.5-HP Manual/ Gear 42-i",

    popular: true,
    imageUrls: [
      "/Images/Product_LawnMower1.jpg",
      "/Images/Product_LawnMower1.jpg"
    ]
  },
  {
    id: 3,
    name: "Frigidaire 22.4-cu ft Counter-Depth French Door",
    category: "Refrigerators",
    price: 1399,
    description:
      "Frigidaire 22.4-cu ft Counter-Depth French Door",
    popular: true,
    imageUrls: [      
      "/Images/Product_Fridge1.jpg",
      "/Images/Product_Fridge1.jpg"
    ]
  },
  {
    id: 4,
    name: "Weber Genesis II E-310 Mocha 3-Burner Liquid",
    category: "Outdoor",
    price: 699,
    description:
      "Weber Genesis II E-310 Mocha 3-Burner Liquid",

    popular: true,
    imageUrls: [
      "/Images/Product_Grill1.jpg"
    ]
  },
  {
    id: 5,
    name: "Premium 2-cu ft Dark Brown Hardwood Mulch",
    category: "Lawn And Garden",
    price: 2.50,
    description:
      "Premium 2-cu ft Dark Brown Hardwood Mulch",

    popular: true,
    imageUrls: [
      "/Images/Product_Mulch1.jpg",
      "/Images/Product_Mulch1.jpg"
    ]
  },

  {
    id: 7,
    name: "Swatch Skin",
    category: "Jewelry and Watches",
    price: 200,
    description: "",
    popular: false,
    imageUrls: [
      "https://static.swatch.com/images/product/SVUN105/sa000/SVUN105_sa000_sr8.jpg"
    ]
  },
  {
    id: 8,
    name: "Adidas Gazelle",
    category: "Clothing and Shoes",
    price: 55,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.adidas.co.uk/dis/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/zoom/BB5480_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false",
      "https://images-na.ssl-images-amazon.com/images/I/71pqv%2BgdgzL._UL1500_.jpg"
    ]
  },
  {
    id: 9,
    name: "Bluetooth Keyboard, Vive Comb Rechargeable",
    category: "Computers",
    price: 55,
    description: "",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71qNNgYCHYL._SL1500_.jpg"
    ]
  },
  {
    id: 10,
    name: "Swatch Blue Suit Mens Watch YGS747 Wrist Watch",
    category: "Jewelry and Watches",
    price: 120,
    description: "",

    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/418I4xAlUHL.jpg"
    ]
  },
  {
    id: 11,
    name: "DELL 23 S2340L 1920X1080 FULL HD",
    category: "Computers",
    price: 220,
    description:
      "This Certified Refurbished product is tested and certified to look and work like new. The refurbishing process includes functionality testing, basic cleaning, inspection, and repackaging. The product ships with all relevant accessories, a minimum 90-day warranty, and may arrive in a generic box. Only select sellers who maintain a high performance bar may offer Certified Refurbished products on Amazon.com",
    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/61NAgk5KMHL._SL1500_.jpg"
    ]
  },
  {
    id: 12,
    name: "Invicta Men's Pro Diver Collection Watch -Black",
    category: "Jewelry and Watches",
    price: 130,
    description:
      "Water resistant to 200 m (660 ft): In general, suitable for professional marine activity and serious surface water sports, but not scuba diving",

    popular: false,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/71Wq1pmITgL._UY550_.jpg",
      "https://cdn2.jomashop.com/media/catalog/product/i/n/invicta-mako-pro-diver-automatic-men_s-watch-8926.jpg"
    ]
  }
];

// List of item categories.
const categories = [
  {
    name: "Appliances",
    icon: "fas fa-list"
  },
  {
    name: "Bathroom",
    icon: "fas fa-tshirt"
  },
  {
    name: "Building Supplies",
    icon: "far fa-gem"
  },
  {
    name: "Doors & Windows",
    icon: "fas fa-book"
  },
  {
    name: "Electrical",
    icon: "fas fa-desktop"
  }
];

// Generate data for rendering menu on the left.
const dataForRenderingMenu = ((categories) => {
  let menuData = [
    /* { type: "item", name: "Home page", url: "/", id: 0, icon: "fas fa-home" },
    { type: "title", name: "Departments", id: 1 } */
  ];

  let initialLength = menuData.length;

  menuData = menuData.concat(
    categories.map((x, i) => {
      return {
        name: x.name,
        url: "/search/?category=" + x.name,
        id: initialLength + i,
        type: "item",
        parentID: 0
        //icon: x.icon
      };
    })
  );

  return menuData;
})(categories)

export { sampleProducts, categories, dataForRenderingMenu };
