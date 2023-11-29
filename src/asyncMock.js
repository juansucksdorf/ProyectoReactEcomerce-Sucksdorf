
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
        img: "https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png",
        stock: 5,
        description: "description de samsung s22"
    },
    {
        id: "3",
        name: "samsung s23",
        price: 1000,
        category: "celulares",
        img: "https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png",
        stock: 5,
        description: "description de samsung s23"
    },{
        id: "4",
        name: "Notebook",
        price: 1000,
        category: "notebooks",
        img: "https://media.istockphoto.com/id/1478920632/es/foto/pantalla-en-blanco-de-la-computadora-port%C3%A1til-en-la-mesa-de-madera-con-fondo-de-cafeter%C3%ADa-de.jpg?s=2048x2048&w=is&k=20&c=n_Wfhw4jHQvsLocuMT_xw8w5Tej_qb2bWn5a-7JB3EU=",
        stock: 5,
        description: "description de samsung s21"
    },
    {
        id: "5",
        name: "Notebook",
        price: 1000,
        category: "notebooks",
        img: "https://media.istockphoto.com/id/1478920632/es/foto/pantalla-en-blanco-de-la-computadora-port%C3%A1til-en-la-mesa-de-madera-con-fondo-de-cafeter%C3%ADa-de.jpg?s=2048x2048&w=is&k=20&c=n_Wfhw4jHQvsLocuMT_xw8w5Tej_qb2bWn5a-7JB3EU=",
        stock: 5,
        description: "description de samsung s21"
    },
    {
        id: "6",
        name: "Notebook",
        price: 1000,
        category: "notebooks",
        img: "https://media.istockphoto.com/id/1478920632/es/foto/pantalla-en-blanco-de-la-computadora-port%C3%A1til-en-la-mesa-de-madera-con-fondo-de-cafeter%C3%ADa-de.jpg?s=2048x2048&w=is&k=20&c=n_Wfhw4jHQvsLocuMT_xw8w5Tej_qb2bWn5a-7JB3EU=",
        stock: 5,
        description: "description de samsung s21"
    },
    {
        id: "7",
        name: "Tablet Lenovo",
        price: 1000,
        category: "tablets",
        img: "https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_640.jpg",
        stock: 5,
        description: "description de samsung s21"
    },
    {
        id: "8",
        name: "Tablet samsung",
        price: 1000,
        category: "tablets",
        img: "https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_640.jpg",
        stock: 5,
        description: "description de samsung s21"
    },
    {
        id: "9",
        name: "Tablet HP",
        price: 1000,
        category: "tablets",
        img: "https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_640.jpg",
        stock: 5,
        description: "description de samsung s21"
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
  