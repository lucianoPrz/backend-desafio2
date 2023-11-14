import ProductManager from "./managers/ProductManager.js";

const path = './files/Products.json'

const manager = new ProductManager(path);

const env = async () => {
    // getProducts
    // =================================================================

    // let primerConsulta = await manager.getProducts();
    // console.log(primerConsulta)
    

    let producto = {
        title : 'producto prueba',
        description : 'Esto es un producto prueba',
        price : 200,
        thumbnail : 'Sin imagen',
        code : 'abc123',
        stock : 25
    }

    // addProducts
    // =================================================================

    // let productos = await manager.addProduct(producto)
    // console.log(productos)
    
    // let productos = await manager.addProduct(producto)
    // console.log(productos)

    let otroProducto = {
         title : 'producto prueba 2',
        description : 'Esto es otro producto prueba',
        price : 300,
        thumbnail : 'Sin img',
        code : 'abc124',
        stock : 50
    }

    // updateProducts
    // =================================================================


    // let updateProductos = await manager.updateProduct(2, otroProducto)
    // console.log(updateProductos)

    // getProductsById
    // =================================================================


    // let segundaConcultaId = await manager.getProductById(1)
    // console.log(`El producto consulta es ${segundaConcultaId.title}`)

    // deleteProducts
    // =================================================================


    // let consultaEliminarProducto = await manager.deleteProduct(4)
    // console.log(consultaEliminarProducto)
};

env();


// title, description, price, thumbnail, code, stock