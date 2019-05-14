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
    icon: "fas fa-list",
    subCategory: [
      {
        name: "Refrigerators"
      },
      {
        name: "Washers & Dryers"
      },
      {
        name: "Ranges"
      },
      {
        name: "Dishwashers"
      },
      {
        name: "Microwaves"
      },
      {
        name: "Vacuum Cleaners & Floor Care"
      },
      {
        name: "Appliance Parts & Accessories"
      },
      {
        name: "Range Hoods"
      },
      {
        name: "Freezers & Ice Makers"
      },
      {
        name: "Wall Ovens"
      },
      {
        name: "Cooktops"
      },
      {
        name: "Small Appliances"
      },
      {
        name: "Beverage Centers & Wine Chillers"
      },
      {
        name: "Garbage Disposals"
      },
      {
        name: "Trash Compactors"
      },
      {
        name: "Commercial Appliances"
      }
    ]
  },
  {
    name: "Bathroom",
    icon: "fas fa-tshirt",
    subCategory: [
      {
        name: "Bathroom Vanities"
      }, {
        name: "Bathroom Faucets & Shower Heads"
      }, {
        name: "Toilets & Toilet Seats"
      }, {
        name: "Bathtubs & Whirlpool Tubs"
      }, {
        name: "Bathroom Accessories & Hardware"
      }, {
        name: "Bathroom Storage"
      }, {
        name: "Bathroom & Pedestal Sinks"
      }, {
        name: "Bathroom Mirrors"
      }, , {
        name: "Bathroom Exhaust Fans & Parts"
      }, {
        name: "Bathroom Safety"
      }, {
        name: "Bathroom Handles"
      }, {
        name: "Saunas & Components"
      }, {
        name: "Commercial Bathroom Components"
      }, {
        name: "Showers & Shower Doors"
      }
    ]
  },
  {
    name: "Building Supplies",
    icon: "far fa-gem",
    subCategory: [
      { name: "Building Supplies" },
      { name: "Lumber & Composites" },
      { name: "Fencing & Gates" },
      { name: "Decking & Porches" },
      { name: "Siding & Stone Veneer" },
      { name: "Roofing" },
      { name: "Concrete, Cement & Masonry" },
      { name: "Insulation & Accessories" },
      { name: "Stairs & Railings" },
      { name: "Drywall" },
      { name: "Ventilation" }
      ,
      { name: "Ceilings" }
      ,
      { name: "Gutters & Accessories" }
      ,
      { name: "Asphalt Repair & Tools" }
      ,
      { name: "Glass & Acrylic" }
      ,
      { name: "Erosion Control" }
      ,
      { name: "Columns & Accessories" }
      ,
      { name: "Shop All Building Supplies" }
    ]
  },
  {
    name: "Doors & Windows",
    icon: "fas fa-book",
    subCategory: [
      { name: "Windows & Doors" },
      { name: "Exterior Doors" },
      { name: "Interior Doors" },
      { name: "Windows" },
      { name: "Exterior Shutters & Accessories" },
      { name: "Garage Doors & Openers" },
      { name: "Awnings & Accessories" },
      { name: "Weatherstripping" },
      { name: "Replacement Screens" },
      { name: "Hurricane Shutter Panels" }
      ,
      { name: "Screen Tools" }
    ]
  },
  {
    name: "Electrical",
    icon: "fas fa-desktop",
    subCategory: [
      { name: "Electrical" },
      { name: "Circuit Breakers, Breaker Boxes & Fuses" },
      { name: "Wall Plates & Jacks" },
      { name: "Electrical Wire & Cable" },
      { name: "Electrical Boxes & Covers" },
      { name: "Light Switches & Dimmers" },
      { name: "Cords & Surge Protectors" },
      { name: "Home Automation & Security" },
      { name: "Conduit & Conduit Fittings" },
      { name: "Electrical Outlets & Adapters" }
      ,
      { name: "Electrical Testers & Tools" }
      ,
      { name: "Cable & Wire Connectors" }
      ,
      { name: "Home Audio & Video" }
      ,
      { name: "Doorbells" }
      ,
      { name: "Smoke, Carbon Monoxide & Radon Detectors" }
      ,
      { name: "Generators" }
      ,
      { name: "Batteries" }
      ,
      { name: "Shop All Electrical" }
    ]
  }, {
    name: "Flooring",
    subCategory: [
      { name: "Flooring" },
      { name: "Tile & Tile Accessories" },
      { name: "Vinyl Flooring" },
      { name: "Laminate Flooring & Accessories" },
      { name: "Floor Moulding & Trim" },
      { name: "Hardwood Flooring & Accessories" },
      { name: "Carpet & Carpet Tile" },
      { name: "Grout & Mortar" },
      { name: "Flooring Underlayment" },
      { name: "Surface Preparation" }
      ,
      { name: "Wall Base" }
      ,
      { name: "Multipurpose Flooring" }
      ,
      { name: "Underfloor Heating" }
      ,
      { name: "Garage Flooring" }
      ,
      { name: "Attic Flooring Panels" }
    ]
  }
  , {
    name: "Hardware",
    subCategory: [
      ,
      { name: "Hardware" },
      { name: "Door Hardware" },
      { name: "Fasteners" },
      { name: "Cabinet Hardware" },
      { name: "Structural Hardware" },
      { name: "Chains, Ropes & Tie-Downs" },
      { name: "Mailboxes & Mailbox Posts" },
      { name: "Furniture Hardware" },
      { name: "Signs, Letters & Numbers" },
      { name: "Gate Hardware" }
      ,
      { name: "Safes" }
      ,
      { name: "Window Hardware" }
      ,
      { name: "Keys & Key Safes" }
      ,
      { name: "Picture Hangers" }
      ,
      { name: "Specialty Hardware" }
      ,
      { name: "Locks" }
      ,
      { name: "Hardware Lubricants" }
      ,
      { name: "Shop All Hardware" }
    ]
  }, {
    name: "Heating & Cooling",
    subCategory: [
      { name: "Heating & Cooling" },
      { name: "Air Conditioners & Fans" },
      { name: "Fireplaces & Stoves" },
      { name: "Registers & Grilles" },
      { name: "Air Filters & Accessories" },
      { name: "Portable & Space Heaters" },
      { name: "HVAC Duct & Fittings" },
      { name: "Humidifiers & Dehumidifiers" },
      { name: "Thermostats" },
      { name: "Air Purifiers & Accessories" }
      ,
      { name: "Furnaces & Furnace Accessories" }
      ,
      { name: "Heat Pumps" }
      ,
      { name: "Radiator Covers" }
    ]
  }, {
    name: "Home Decor & Furniture",
    subCategory: [
      { name: "Home Decor" },
      { name: "Area Rugs & Mats" },
      { name: "Blinds & Window Treatments" },
      { name: "Furniture" },
      { name: "Mirrors & Mirror Accessories" },
      { name: "Wallpaper & Wallpaper Accessories" },
      { name: "Home Accents" },
      { name: "Wall Art & Decor" },
      { name: "Pillows & Throws" },
      { name: "Bedding" }
    ]
  }, {
    name: "Kitchen",
    subCategory: [
      { name: "Kitchen" },
      { name: "Kitchen & Bar Sinks" },
      { name: "Kitchen Cabinetry" },
      { name: "Kitchen Faucets & Water Dispensers" },
      { name: "Kitchen Countertops & Accessories" },
      { name: "Backsplash Panels" },
      { name: "Kitchenware" }
    ]
  }, {
    name: "Lawn & Garden",
    subCategory: [
      { name: "Lawn & Garden" },
      { name: "Mulch" },
      { name: "Garden Center" },
      { name: "Lawn Mowers" },
      { name: "Pavers & Retaining Walls" },
      { name: "Patio Furniture" },
      { name: "Lawn & Garden Hand Tools" },
      { name: "Fertilizer" },
      { name: "Weed Killers & Preventers" },
      { name: "Trimmers & Edgers" }
      ,
      { name: "Fencing & Gates" }
      ,
      { name: "Landscaping" }
      ,
      { name: "Plants, Bulbs & Seeds" }
      ,
      { name: "Planters, Stands & Window Boxes" }
      ,
      { name: "Grills & Outdoor Cooking" }
      ,
      { name: "Outdoor Tools & Equipment" }
      ,
      { name: "Insect & Pest Control" }
      ,
      { name: "Shop All " }
    ]
  }, {
    name: "Lighting & Ceiling Fans",
    subCategory: [
      { name: "Lighting & Ceiling Fans" },
      { name: "Ceiling Fans & Accessories" },
      { name: "Outdoor Lighting" },
      { name: "Bathroom & Wall Lighting" },
      { name: "Flush Mount Lighting" },
      { name: "Pendant Lighting" },
      { name: "Light Bulbs" },
      { name: "Chandeliers" },
      { name: "Lamps & Lamp Shades" },
      { name: "Lighting Parts & Accessories" }
      ,
      { name: "Commercial Lighting" }
      ,
      { name: "Recessed Lighting" }
      ,
      { name: "Under Cabinet Lighting" }
      ,
      { name: "Track Lighting" }
      ,
      { name: "Kitchen Island Lighting" }
      ,
      { name: "Novelty Lighting" }
      ,
      { name: "Night Lights" }
      ,
      { name: "Pool Table Lighting" }
    ]
  }, {
    name: "Moulding & Millwork",
    subCategory: [
      { name: "Moulding & Millwork" },
      { name: "Moulding" },
      { name: "Wall Panels & Planks" },
      { name: "Dowels & Dowel Pins" }
    ]
  }, {
    name: "Outdoor Living",
    subCategory: [
      { name: "Outdoor Living" },
      { name: "Patio Furniture" },
      { name: "Grills & Outdoor Cooking" },
      { name: "Gazebos, Pergolas & Canopies" },
      { name: "Fire Pits & Patio Heaters" },
      { name: "Outdoor Tools & Equipment" },
      { name: "Fencing & Gates" },
      { name: "Outdoor Lighting" },
      { name: "Pavers & Retaining Walls" },
      { name: "Lawn Mowers" }
      ,
      { name: "Pressure Washers" }
      ,
      { name: "Decking & Porches" }
      ,
      { name: "Landscaping" }
      ,
      { name: "Playsets" }
      ,
      { name: "Sheds & Outdoor Storage" }
      ,
      { name: "Garden Center" }
      ,
      { name: "Pools" }
      ,
      { name: "Garden Décor" }
    ]
  }, {
    name: "Paint",
    subCategory: [
      { name: "Paint" },
      { name: "Paints & Primers" },
      { name: "Paint Supplies" },
      { name: "Paint Sprayers" },
      { name: "Paint Brushes & Rollers" },
      { name: "Exterior Stains & Floor Coatings" },
      { name: "Caulking" },
      { name: "Interior Stains & Finishes" },
      { name: "Spray Paint & Accessories" },
      { name: "Patching & Repair" }
      ,
      { name: "Cleaners & Chemicals" }
      ,
      { name: "Rubberized Coatings" }
      ,
      { name: "Resurfacing Kits" }
    ]
  }, {
    name: "Plumbing",
    subCategory: [
      { name: "Plumbing" },
      { name: "Pipe & Fittings" },
      { name: "Plumbing Parts & Repair" },
      { name: "Water Heaters" },
      { name: "Valves & Valve Repair" },
      { name: "Water Pumps & Tanks" },
      { name: "Water Filtration & Water Softeners" },
      { name: "Supply Lines" },
      { name: "Plumbing Tools & Cements" },
      { name: "Utility Sinks & Faucets" }
      ,
      { name: "Augers, Plungers & Drain Openers" }
    ]
  }, {
    name: "Smart Home & Security",
    subCategory: []
  }, {
    name: "Storage & Organization",
    subCategory: [
      { name: "Storage & Organization" }, { name: "Shelves & Shelving" }, { name: "Closet Organization" }, { name: "Garage Organization" }, { name: "Kitchen Organization" }, { name: "Baskets & Storage Containers" }, { name: "Moving Boxes & Supplies" }, { name: "Hooks & Racks" }, { name: "Utility Storage Cabinets" }, { name: "Laundry Organization" }
      , { name: "Small Parts Organizers" }
      , { name: "Lockers" }
    ]
  }, {
    name: "Tools",
    subCategory: [
      { name: "Tools" },
      { name: "Power Tools" },
      { name: "Power Tool Accessories" },
      { name: "Hand Tools" },
      { name: "Tool Storage & Work Benches" },
      { name: "Ladders & Scaffolding" },
      { name: "Air Tools & Compressors" },
      { name: "Levels & Measuring Tools" },
      { name: "Shop Vacuums & Accessories" },
      { name: "Flashlights & Flashlight Bulbs" }
      ,
      { name: "Welding & Soldering" }
      ,
      { name: "Jobsite Radios" }
      ,
      { name: "Home 3D Printers & Filament" }
      ,
      { name: "Clothing & Footwear" }
      ,
      { name: "Safety Equipment" }
    ]
  }, {
    name: "Gift Cards",
    subCategory: [
    ]
  }, {
    name: "Savings",
    subCategory: [
    ]
  }, {
    name: "Weekly Ad",
    subCategory: [
    ]
  }


];

// Generate data for rendering menu on the left.
const dataForRenderingMenu = ((categories) => {
  let menuData = [
    /* { type: "item", name: "Home page", url: "/", id: 0, icon: "fas fa-home" },
    { type: "title", name: "Departments", id: 1 } */
  ];

  let initialLength = menuData.length;
  let iter = 0;
  menuData = menuData.concat(
    categories.map((x, i) => {
      iter = iter + i;
      return {
        name: x.name,
        url: "/search/?category=" + x.name,
        id: initialLength + i,
        type: "item",
        parentID: 0,
        subCategory: x.subCategory
      };
    })
  );

  return menuData;
})(categories)

export { sampleProducts, categories, dataForRenderingMenu };
