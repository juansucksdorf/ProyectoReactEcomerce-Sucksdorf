
const products =[
    {
        id: "1",
        name: "samsung s21",
        price: 1000,
        category: "celulares",
        img: "https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png",
        stock: 5,
        description: "description de samsung s21"
    },
    {
        id: "2",
        name: "samsung s22",
        price: 1000,
        category: "celulares",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJ7X0UzSKFCneStwKUcB8eBbeAdaAW2C_Cj2CF3ABDniTGuP5J-G_ZElLkc9gNh0P_Zc&usqp=CAU",
        stock: 5,
        description: "Sobre este producto: Fotografía profesional al alcance de tu mano con el nuevo Samsung Galaxy S22; con cámara de 50+10+12 MP para explorar tu creatividad. Obtené los mejores resultados gracias a su procesador Octa-Core (2.99GHz,2.4GHz,1.7GHz) y su memoria interna de 128 GB. Disfrutá de jugar; ver series o trabajar en una pantalla de full vision de 6.1"
    },
    {
        id: "3",
        name: "samsung s23",
        price: 1000,
        category: "celulares",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_658279-MLU72553090950_112023-F.webp",
        stock: 5,
        description: "Capacidad y eficiencia Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras"
    },{
        id: "4",
        name: "Notebook legion 5",
        price: 1000,
        category: "notebooks",
        img: "https://www.lenovo.com/medias/LEN101G0015-gallery.png?context=bWFzdGVyfHJvb3R8NDAxODc4fGltYWdlL3BuZ3xoMTIvaGRhLzE0MTQ0Mzc3MjkwNzgyLnBuZ3wyMzFjNmExNWJjZjFiYmYxZjA1YzRmOTBjYmI1NzBmYzY2NmQxMmQxMWZjNzA4OWE4ZWRmZGNiZTdkN2NhZGRh",
        stock: 5,
        description: "Procesadores Intel® Core™ de hasta 12va generación Hasta los últimos gráficos NVIDIA® GeForce RTX™ Pantalla de 16” hasta WQXGA, 500 nits, 100% sRGB y 165hz refresh rate Hasta 32 GB de memoria Laptop perfecta para liberar al gamer que hay en ti"
    },
    {
        id: "5",
        name: "Notebook thinkpack",
        price: 1000,
        category: "notebooks",
        img: "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MTY4MzIwfGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbXxoZTcvaDc2LzE2OTc0MDM3ODc2NzY2LmpwZ3xkMzBiY2Y3MGM4OTY5Mjk5MWYyZDQwZDk2ZmQ2YTQ4OGQ5NjViNDFiNjkzMzI5YmYxZDFiYWIwMjJhYzI0ODMx",
        stock: 5,
        description: "Ultraliviana. Ultrapotente. Ultraposibilidades Certificada Intel® Evo™ con hasta Intel® vPro® y procesamiento hasta Intel® Core™ de 13ra generación Pantalla 2K de 13″ con imágenes ricas en color, con o sin función táctil Seguridad de vanguardia y pruebas MIL-SPEC para mayor fiabilidad Barra de comunicaciones preparada para mejorar la colaboración Cancelación de ruido basada en IA y Dolby Voice® Compuesta por materiales reciclados con contenido postconsumo (PCC) y packaging sin plástico"
    },
    {
        id: "6",
        name: "Notebook Yoga",
        price: 1000,
        category: "notebooks",
        img: "https://www.lenovo.com/medias/lenovo-laptops-yoga-7i-gen-7-14-intel-gallery-1.png?context=bWFzdGVyfHJvb3R8NzMzNDkzfGltYWdlL3BuZ3xoMDcvaDc2LzEzMjM0ODcxMTA3NjE0LnBuZ3xiYzY3NmQzODRhNzBmNDI1Y2FiODhiZGQ3OGM3YWMzYmE0YjczYTE1ZjYyZjdiODYzYzc5ZjJmZjVjMjFmY2Rj",
        stock: 5,
        description: "dCombinación de productividad y pasiónvLa Yoga 7i 7ma Gen 14 Intel te permite aprovechar el poder de la creatividad con hasta procesadores Intel® Core™ i7 de 12va generación y batería de larga duración. Además de la versatilidad multimodo de 360 grados y un chasis compacto de una sola pieza, este elegante dispositivo cuenta con un diseño Comfort-Edge. Transmite, crea, trabaja y actúa con pasión gracias a la tecnología Dolby Vision™, además de cuatro altavoces optimizados con Dolby Atmos®, y hasta una brillante pantalla táctil OLED de 2,8 k."
    },
    {
        id: "7",
        name: "Tablet galaxy s6",
        price: 1000,
        category: "tablets",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_648187-MLU69687576943_052023-F.webp",
        stock: 5,
        description: "Sistema operativo: Android. Con procesador Octa-Core de 2.3GHz. Resolución de pantalla de 2000px x 1200px. Con lector micro-SD. Cuenta con GPS. Memoria interna expandible hasta 1 TB con fuente externa. Incluye book cover. Con entrada para auriculares.   Pesa tan solo 465g. La duración de la batería depende del uso que se le dé al producto. Diseñada para llevar a todas partes."
    },
    {
        id: "8",
        name: "Tablet samsung A7",
        price: 1000,
        category: "tablets",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_949825-MLU72561171367_102023-F.webp",
        stock: 5,
        description: "Con procesador Octa-Core Cortex-A53 de 2.3GHz. Resolución de pantalla de 1340px x 800px. Con lector micro-SD. Cuenta con GPS. Memoria interna expandible hasta 1 TB con fuente externa. Incluye adaptador usb. Con entrada para auriculares. Pesa tan solo 366g.   La duración de la batería depende del uso que se le dé al producto. Diseñada para llevar a todas partes."
    },
    {
        id: "9",
        name: "Tablet Lenovo M10",
        price: 1000,
        category: "tablets",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_685192-MLA52680401803_122022-F.webp",
        stock: 5,
        description: "Con procesador Dual-Core Cortex-A75 de 1.8GHz. Resolución de pantalla de 1920px x 1200px. Con lector micro-SD. Cuenta con GPS. Incluye 1 notebook y cable de energía. Con entrada para auriculares. Pesa tan solo 460g. La duración de la batería depende del uso que se le dé al producto. Diseñada para llevar a todas partes."
    },


]
export const getProducts =()=> {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}
export const getProductsById =(productsId) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productsId))
        }, 500)
    })
}
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === category));
      }, 500);
    });
  };
  