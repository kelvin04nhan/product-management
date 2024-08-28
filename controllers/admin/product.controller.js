const Product = require("../../models/product.model");









// [get] /admin/products
module.exports.index = async (req, res) => {
    console.log(req.query.status);
    let filterStatus = [
        {
            name:"Tất cả",
            status:"",
            class:""
        },
        {
            name:"Hoạt động",
            status:"active",
            class:""

        },
        {
            name:"Dừng hoạt động",
            status:"inactive",
            class:""

        }
    ];
    if(req.query.status) {
        const index = filterStatus.findIndex(item => item.status == req.query.status)
        filterStatus[index].class = "active";
        // filterStatus[index-1].class="";
    } else {
        const index = filterStatus.findIndex(item => item.status == "")
        filterStatus[index].class = "active";

    }
    const products = await Product.find({

    })
    res.render("admin/pages/products/index.pug",{
        pageTitle:"Danh sách sản phẩm",
        products: products,
        filterStatus: filterStatus

    })
}
