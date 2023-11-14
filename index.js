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

    let otroProducto = {
        title : 'mouse',
        description : 'mouse inalambrico',
        price : 8000,
        thumbnail : '#',
        code : '324565',
        stock : 100
    }

    // let productos = await manager.addProduct(producto)
    // console.log(productos)

    // let updateProductos = await manager.updateProduct(2, otroProducto)
    // console.log(updateProductos)

    // let segundaConcultaId = await manager.getProductById(1)
    // console.log(`El producto consulta es ${segundaConcultaId.title}`)

    let consultaEliminarProducto = await manager.deleteProduct(4)
    console.log(consultaEliminarProducto)
};

env();


// title, description, price, thumbnail, code, stock