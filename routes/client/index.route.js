const productRoutes = require("./product.route")
const homeRoutes = require("./home.route")
const testPageRoutes = require("./testPage.route")
module.exports = (app) => {
    app.use("/", homeRoutes)
    app.use("/products", productRoutes)
    app.use("/testpage", testPageRoutes)
    
}