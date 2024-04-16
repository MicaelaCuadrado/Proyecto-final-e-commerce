const { Products } = require("../models");

async function productsSeeder() {
  const products = [
    {
      name: "Musculosa Rosada",
      description:
        "Remera de algodón rosada con negro. Lavable a maquina. Ideal para entrenar.",
      price: 690,
      stock: 25,
      category: "PENDIENTE",
      featured: true,
    },
    {
      name: "Musculosa Gris",
      description:
        "Remera de algodón gris. Lavable a maquina. Ideal para entrenar.",
      price: 690,
      stock: 25,
      category: "PENDIENTE",
      featured: true,
    },
    {
      name: "Remera Negra",
      description:
        "Remera de poliester negra. Lavable a maquina. Ideal para entrenar.",
      price: 720,
      stock: 15,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Remera Celeste",
      description:
        "Remera de algodón celeste. Lavable a maquina. Ideal para entrenar.",
      price: 720,
      stock: 15,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Remera Naranja",
      description:
        "Remera de algodón naranja. Lavable a maquina. Ideal para entrenar.",
      price: 500,
      stock: 10,
      category: "PENDIENTE",
      featured: true,
    },
    {
      name: "Bandas Elásticas de Resistencia",
      description:
        "Este pack contiene 4 bandas de latex en 4 niveles de resistencia: ligero, medio, pesado.",
      price: 549,
      stock: 20,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Mancuernas de 1kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 210,
      stock: 15,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Mancuernas de 2kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 300,
      stock: 15,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Mancuernas de 3kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 399,
      stock: 15,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Mancuernas de 5kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 500,
      stock: 15,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Cuerda de saltar",
      description:
        "Ligera, ajustable y duradera, es ideal para mejorar tu resistencia y agilidad. ¡Hazte con ella y eleva tu rutina de ejercicio!",
      price: 499,
      stock: 20,
      category: "PENDIENTE",
      featured: true,
    },
    {
      name: "Cuerda de trepar",
      description:
        "Nuestra cuerda de escalada es fabricada con sisal resistente. Tiene una longitud de 5 metros y un diámetro de 5.0cm. Es perfecta para Crossfit y otros ejercicios de entrenamiento.",
      price: 2000,
      stock: 5,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Colchoneta de Yoga",
      description:
        "Pose material de dos superficies, una para entrenar otra para evitar el deslizamiento. Medidas 61cm x 183cm. Espesor: 6mm",
      price: 790,
      stock: 20,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Pelota Medicinal de Yoga",
      description:
        "Pelota de yoga de PVC. Incluye 1 tapón de aire, 1 tapón de aire de repuesto, Inflador",
      price: 890,
      stock: 10,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Whey Protein 1kg",
      description:
        "Este es un suplemento proteico-energético para deportistas a base de Whey Protein y Maltodextrina.",
      price: 1999,
      stock: 15,
      category: "PENDIENTE",
      featured: true,
    },
    {
      name: "Whey Protein 3kg",
      description:
        "Este es un suplemento proteico-energético para deportistas a base de Whey Protein y Maltodextrina.",
      price: 4800,
      stock: 10,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Musculosa de mujer",
      description:
        "Remera de algodón rosada con negro. Lavable a maquina. Ideal apra entrenar.",
      price: 690,
      stock: 10,
      category: "PENDIENTE",
      featured: True,
    },
    {
      name: "Guantes Musculación Negro",
      description:
        "Excelentes guantes de entrenamiento. La almohadilla de la palma amortigua el impacto del aparato deportivo y te protege las manos de callos y ampollas.",
      price: 390,
      stock: 15,
      category: "PENDIENTE",
      featured: true,
    },
    {
      name: "Rodilleras de Neopreno",
      description:
        "Hechas de tela de neopreno de 7mm y costuras reforzadas hacen que nuestra rodillera sea resistente y duradera. Obtendrás seguridad y fuerza durante los entrenamientos de alta intensidad.",
      price: 1690,
      stock: 5,
      category: "PENDIENTE",
      featured: false,
    },
    {
      name: "Botella Agua 1lt",
      description:
        "Hecha de Tritán de alta calidad, reutilizable y 100% libre de BPA. Disfrutá la durabilidad y la facilidad de una botella libre de sabores y olores a plástico.",
      price: 499,
      stock: 10,
      category: "PENDIENTE",
      featured: true,
    },
  ];
  await Products.create(productos);
}

module.exports = productsSeeder;
