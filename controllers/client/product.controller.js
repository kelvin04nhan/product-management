const Product = require("../../models/product.model")

module.exports.index = async (req, res)=>{



    const products = await Product.find({
        status: "active",
        deleted: false
    })

    const newProduct = products.forEach(item => {
        item.priceNew = item.price *(100 - item.discountPercentage) 
    });
    console.log(products)
    res.render('client/pages/products/index', {
        pageTitle: "TRANG DANH SACH SAN PHAM",
        products: products
    })

}