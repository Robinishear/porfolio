// File: data/cars.js

const DETAILED_CARS_DATA = [
    {
        id: 1,
        title: "Lamborghini Aventador SVJ",
        price: "₹ 8.5 Crore",
        image: "https://i.ibb.co/NgjyPTvV/1753940448036.jpg",
        description: "The Aventador SVJ is a track-focused beast with unparalleled aerodynamics and a screaming V12 engine. The pinnacle of Lamborghini engineering.",
        specs: [{ icon: "FaGears", label: "Engine", value: "6.5L V12" }, { icon: "FaRoad", label: "0-100 km/h", value: "2.8s" }, { icon: "FaGaugeHigh", label: "Top Speed", value: "351 km/h" }],
        fuel: "Petrol", 
        mileage: "5 kmpl",
        externalLink: "https://www.lamborghini.com/en-en/models/aventador/aventador-svj", // নতুন এক্সটার্নাল লিঙ্ক
        keyFeatures: [
            "Limited Production Model (900 Units)",
            "ALA 2.0 Active Aerodynamics System",
            "Carbon Fiber Monocoque Chassis",
            "Exclusive Ad Personam Customization"
        ]
    },
    {
        id: 2,
        title: "Ferrari F8 Tributo",
        price: "₹ 4.02 Crore",
        image: "https://i.ibb.co/1NDHGzr/1753941327185.jpg",
        description: "A celebration of Ferrari's V8 engine, the F8 Tributo combines blistering performance with remarkable driving pleasure. A true modern classic.",
        specs: [{ icon: "FaGears", label: "Engine", value: "3.9L V8 Twin-Turbo" }, { icon: "FaRoad", label: "0-100 km/h", value: "2.9s" }, { icon: "FaGaugeHigh", label: "Top Speed", value: "340 km/h" }],
        fuel: "Petrol", 
        mileage: "7 kmpl",
        externalLink: "https://www.ferrari.com/en-EN/auto/f8-tributo",
        keyFeatures: [
            "710 Horsepower Output",
            "Advanced Side Slip Control System",
            "High-performance ceramic brakes",
            "Lightweight construction"
        ]
    },
    {
        id: 3,
        title: "Rolls-Royce Ghost",
        price: "₹ 6.95 Crore",
        image: "https://i.ibb.co/Y5scVbp/1753941326895.jpg",
        description: "The 'Post Opulence' design philosophy defines the Ghost, offering an incredibly smooth, silent, and refined luxury experience.",
        specs: [{ icon: "FaGears", label: "Engine", value: "6.75L V12" }, { icon: "FaRoad", label: "Torque", value: "850 Nm" }, { icon: "FaGaugeHigh", label: "Transmission", value: "8-speed Auto" }],
        fuel: "Petrol", 
        mileage: "6.5 kmpl",
        externalLink: "https://www.rolls-roycemotorcars.com/en-GB/ghost.html",
        keyFeatures: [
            "Planar Suspension System",
            "Illuminated Grille",
            "Starlight Headliner (Customizable)",
            "Self-closing doors"
        ]
    },
    {
        id: 4,
        title: "Porsche 911 Turbo S",
        price: "₹ 3.31 Crore",
        image: "https://i.ibb.co/rK5nQ81/car-4.jpg",
        description: "The all-rounder supercar. Daily drivable yet capable of dominating the track. Features legendary grip and relentless power delivery.",
        specs: [{ icon: "FaGears", label: "Engine", value: "3.7L Flat-six" }, { icon: "FaRoad", label: "0-100 km/h", value: "2.7s" }, { icon: "FaGaugeHigh", label: "Horsepower", value: "650 hp" }],
        fuel: "Petrol", 
        mileage: "8 kmpl",
        keyFeatures: [
            "Porsche Active Suspension Management (PASM)",
            "Dynamic Chassis Control (PDCC)",
            "Exclusive Design Wheels",
            "Rear-axle steering"
        ]
    },
    {
        id: 5,
        title: "Mercedes-Benz G63 AMG",
        price: "₹ 2.55 Crore",
        image: "https://i.ibb.co/T1J2h7t/car-5.jpg",
        description: "An iconic off-roader infused with AMG performance. Boxy, imposing, and incredibly luxurious inside.",
        specs: [{ icon: "FaGears", label: "Engine", value: "4.0L V8 Bi-turbo" }, { icon: "FaRoad", label: "Power", value: "577 hp" }, { icon: "FaGaugeHigh", label: "Drivetrain", value: "AWD" }],
        fuel: "Petrol", 
        mileage: "6 kmpl",
        keyFeatures: [
            "Three differential locks",
            "Exclusive Interior Plus Package",
            "AMG RIDE CONTROL suspension",
            "Off-road reduction gear"
        ]
    },
    {
        id: 6,
        title: "McLaren 720S",
        price: "₹ 4.65 Crore",
        image: "https://i.ibb.co/Wc4B1P0/car-6.jpg",
        description: "Lightweight, aerodynamic perfection. The 720S offers a visceral driving experience with a clear focus on the driver.",
        specs: [{ icon: "FaGears", label: "Engine", value: "4.0L V8 Twin-Turbo" }, { icon: "FaRoad", label: "Weight", value: "1283 kg" }, { icon: "FaGaugeHigh", label: "Horsepower", value: "710 hp" }],
        fuel: "Petrol", 
        mileage: "8.5 kmpl",
        keyFeatures: [
            "Proactive Chassis Control II",
            "Carbon fibre MonoCage II chassis",
            "Electro-hydraulic steering",
            "Drift Control Function"
        ]
    },
];

export default DETAILED_CARS_DATA;