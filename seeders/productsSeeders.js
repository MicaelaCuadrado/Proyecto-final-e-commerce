const { Products } = require("../models");

async function productsSeeder() {
  const products = [
    {
      name: "Disco olímpico crossfit 10kg",
      description:
        "El pase central es de acero inoxidable, ésto permite una colocación sencilla de la barra.",
      price: 4290,
      stock: 25,
      categoryId: 1,
      featured: false,
      photo: "Disco10.png",
    },
    {
      name: "Disco olímpico de goma 15kg",
      description:
        "El pase central es de acero inoxidable, ésto permite la colocación sencilla de la barra.",
      price: 6290,
      stock: 25,
      categoryId: 1,
      featured: false,
      photo: "Disco15.jpg",
    },
    {
      name: "Disco olímpico de goma 20kg",
      description:
        "El pase central es de acero inoxidable, ésto permite la colocación sencilla de la barra.",
      price: 7190,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "Disco20.png",
    },
    {
      name: "Step para fitness",
      description:
        "Step de aeróbic profesional, ideal para hacer ejercicios en casa o en el gimnasio. Ayuda a definir la musculatura, mejorar la flexibilidad y la estabilidad, tendrás una notable mejora en la resistencia cardiovascular",
      price: 1390,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "Step.png",
    },

    {
      name: "Rueda abdominales",
      description:
        "La secuencia de movimientos está diseñada para trabajar todo el abdomen y también los músculos de apoyo en brazos, piernas posteriores, hombros y espalda, minimizando el riesgo de dolor o lesiones. Además, la rueda incluye pedales que permiten realizar más ejercicios para el abdomen, la espalda y las piernas. ",
      price: 397,
      stock: 10,
      categoryId: 1,
      featured: false,
      photo: "RuedaAbdominal.png",
    },

    {
      name: "Bandas elásticas",
      description:
        "Set 3 bandas de latex. Incluye 3 niveles de resistencia: ligero, medio y pesado.",
      price: 499,
      stock: 20,
      categoryId: 1,
      featured: true,
      photo: "bandaElastica.jpg",
    },
    {
      name: "Mancuernas de 1kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 249,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "mancuerna1.png",
    },
    {
      name: "Mancuernas de 2kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 549,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "mancuerna2.png",
    },
    {
      name: "Mancuernas de 3kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 789,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "mancuerna3.jpg",
    },
    {
      name: "Mancuernas de 5kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 1090,
      stock: 15,
      categoryId: 1,
      featured: true,
      photo: "mancuerna5.jpg",
    },
    {
      name: "Cuerda de saltar",
      description:
        "Ligera, ajustable y duradera, es ideal para mejorar tu resistencia y agilidad. ¡Hazte con ella y eleva tu rutina de ejercicio!",
      price: 549,
      stock: 20,
      categoryId: 1,
      featured: false,
      photo: "cuerdaSalto.png",
    },
    {
      name: "Cuerda de trepar",
      description:
        "Nuestra cuerda de escalada es fabricada con sisal resistente. Tiene una longitud de 5 metros y un diámetro de 5.0cm. Es perfecta para Crossfit y otros ejercicios de entrenamiento.",
      price: 4190,
      stock: 5,
      categoryId: 1,
      featured: false,
      photo: "cuerdaTrepar.png",
    },
    {
      name: "Colchoneta de Yoga",
      description:
        "Pose material de dos superficies, una para entrenar otra para evitar el deslizamiento. Medidas 61cm x 183cm. Espesor: 6mm",
      price: 790,
      stock: 20,
      categoryId: 1,
      featured: false,
      photo: "colchonetaYoga.png",
    },
    {
      name: "Pelota de Pilates",
      description:
        "Pelota de yoga de PVC. Incluye 1 tapón de aire, 1 tapón de aire de repuesto, Inflador",
      price: 990,
      stock: 10,
      categoryId: 1,
      featured: false,
      photo: "pelotaPilates.png",
    },
    {
      name: "Whey Protein 1kg",
      description:
        "Este es un suplemento proteico-energético para deportistas a base de Whey Protein y Maltodextrina.",
      price: 2290,
      stock: 15,
      categoryId: 2,
      featured: false,
      photo: "wheyProtein.png",
    },
    {
      name: "Whey Protein 2kg Chocolate",
      description:
        "Es una combinación ultra premium del Isolado, Concentrado e Hidrolizado de proteína de suero de la más alta calidad para un desarrollo muscular óptimo, soporte y recuperación.",
      price: 3590,
      stock: 10,
      categoryId: 2,
      featured: false,
      photo: "WheyProteinChoc.jpg",
    },
    {
      name: "Guantes musculación negro",
      description:
        "Excelentes guantes de entrenamiento. La almohadilla de la palma amortigua el impacto del aparato deportivo y te protege las manos de callos y ampollas.",
      price: 890,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "GuantesNeopreno.png",
    },
    {
      name: "Rodilleras de neopreno",
      description:
        "Hechas de tela de neopreno de 7mm y costuras reforzadas hacen que nuestra rodillera sea resistente y duradera. Obtendrás seguridad y fuerza durante los entrenamientos de alta intensidad.",
      price: 1390,
      stock: 5,
      categoryId: 1,
      featured: true,
      photo: "rodillera.jpg",
    },
    {
      name: "Botella agua 1lt",
      description:
        "Hecha de Tritán de alta calidad, reutilizable y 100% libre de BPA. Disfrutá la durabilidad y la facilidad de una botella libre de sabores y olores a plástico.",
      price: 499,
      stock: 10,
      categoryId: 1,
      featured: true,
      photo: "botella1.jpg",
    },
  ];
  await Products.bulkCreate(products);
}

module.exports = productsSeeder;
