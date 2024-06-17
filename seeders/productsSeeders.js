const { Products } = require("../models");

async function productsSeeder() {
  const products = [
    {
      name: "Disco Olimpico de Goma 10kg",
      description:
        "El pase central esta hecho de acero inoxidable, permite la colocación sencilla de la barra.",
      price: 690,
      stock: 25,
      categoryId: 1,
      featured: false,
      photo: "Disco10.png",
    },
    {
      name: "Disco Olimpico de Goma 15kg",
      description:
        "El pase central esta hecho de acero inoxidable, permite la colocación sencilla de la barra.",
      price: 3.89,
      stock: 25,
      categoryId: 1,
      featured: false,
      photo: "Disco15.jpg",
    },
    {
      name: "Disco Olimpico de Goma 20kg",
      description:
        "El pase central esta hecho de acero inoxidable, permite la colocación sencilla de la barra.",
      price: 3.89,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "Disco20.png",
    },
    {
      name: "Step para Fitness",
      description:
        "Step de aeróbic profesional ideal para hacer ejercicios en casa o en el gimnasio. Ayuda a definir la musculatura, mejorar la flexibilidad y la estabilidad, y también mejora la resistencia cardiovascular",
      price: 890,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "Step.png",
    },
    {
      name: "Rueda Abdominal",
      description:
        "La secuencia del movimiento está optimizado para trabajar todo el abdomen, pero además también los músculos de apoyo en los brazos, la parte posterior de las piernas, los hombros y la espalda sin correr el riesgo de dolor o incluso lesiones. Además, esta rueda cuenta con pedales que permiten más ejercicios para el abdomen, la espalda y las piernas.",
      price: 499,
      stock: 10,
      categoryId: 1,
      featured: false,
      photo: "RuedaAbdominal.png",
    },
    {
      name: "Bandas Elásticas de Resistencia",
      description:
        "Este pack contiene 4 bandas de latex en 4 niveles de resistencia: ligero, medio, pesado.",
      price: 549,
      stock: 20,
      categoryId: 1,
      featured: true,
      photo: "bandaElastica.jpg",
    },
    {
      name: "Mancuernas de 1kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 210,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "mancuerna1.png",
    },
    {
      name: "Mancuernas de 2kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 300,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "mancuerna2.png",
    },
    {
      name: "Mancuernas de 3kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 399,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "mancuerna3.jpg",
    },
    {
      name: "Mancuernas de 5kg",
      description:
        "Mancuernas revestidas en vinilo. Hechas de hierro fundido de alta calidad.",
      price: 500,
      stock: 15,
      categoryId: 1,
      featured: true,
      photo: "mancuerna5.jpg",
    },
    {
      name: "Cuerda de saltar",
      description:
        "Ligera, ajustable y duradera, es ideal para mejorar tu resistencia y agilidad. ¡Hazte con ella y eleva tu rutina de ejercicio!",
      price: 499,
      stock: 20,
      categoryId: 1,
      featured: false,
      photo: "cuerdaSalto.png",
    },
    {
      name: "Cuerda de trepar",
      description:
        "Nuestra cuerda de escalada es fabricada con sisal resistente. Tiene una longitud de 5 metros y un diámetro de 5.0cm. Es perfecta para Crossfit y otros ejercicios de entrenamiento.",
      price: 2000,
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
      name: "Pelota Medicinal de Yoga",
      description:
        "Pelota de yoga de PVC. Incluye 1 tapón de aire, 1 tapón de aire de repuesto, Inflador",
      price: 890,
      stock: 10,
      categoryId: 1,
      featured: false,
      photo: "pelotaPilates.png",
    },
    {
      name: "Whey Protein 1kg",
      description:
        "Este es un suplemento proteico-energético para deportistas a base de Whey Protein y Maltodextrina.",
      price: 1999,
      stock: 15,
      categoryId: 2,
      featured: false,
      photo: "wheyProtein.png",
    },
    {
      name: "Whey Protein 2kg Chocolate",
      description:
        "Es una combinación ultra premium del Isolado, Concentrado e Hidrolizado de proteína de suero de la más alta calidad para un desarrollo muscular óptimo, soporte y recuperación.",
      price: 4800,
      stock: 10,
      categoryId: 2,
      featured: false,
      photo: "WheyProteinChoc.jpg",
    },
    {
      name: "Guantes Musculación Negro",
      description:
        "Excelentes guantes de entrenamiento. La almohadilla de la palma amortigua el impacto del aparato deportivo y te protege las manos de callos y ampollas.",
      price: 390,
      stock: 15,
      categoryId: 1,
      featured: false,
      photo: "GuantesNeopreno.png",
    },
    {
      name: "Rodilleras de Neopreno",
      description:
        "Hechas de tela de neopreno de 7mm y costuras reforzadas hacen que nuestra rodillera sea resistente y duradera. Obtendrás seguridad y fuerza durante los entrenamientos de alta intensidad.",
      price: 1690,
      stock: 5,
      categoryId: 1,
      featured: true,
      photo: "rodillera.jpg",
    },
    {
      name: "Botella Agua 1lt",
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
