import ProductManager from "./managers/ProductManager.js";

const path = './files/Products.json'

const manager = new ProductManager(path);

const env = async () => {
    let primerConsulta = await manager.getProducts();
    console.log(primerConsulta)
    let existeProduct = await manager.getProductById(1)
    console.log(existeProduct)

    let producto = {
        title : 'auriculares',
        description : 'auriculares Bluetooth',
        price : 15000,
        thumbnail : '#',
        code : '324568',
        stock : 50
    }

    let productos = await manager.addProduct(producto)
    console.log(productos)
};

env();


// title, description, price, thumbnail, code, stock