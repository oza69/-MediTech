
const ProductDetails = require('../models/ProductDetails');

exports.getAllProducts = (req, res) => { 
    
    ProductDetails.find().then((product) => {
        if(product) {
            return res.status(200).json({data: product, status: 200});
        }
    })
    
        
}

exports.getSpecificProduct = (req, res) => {

    const name = req.params.name;
    ProductDetails.findOne({product_name: { $regex : new RegExp(name, "i") }}).then((product) => {

        if(product) {
            return res.status(200).json({data: [product], status: 200});
        } else {
            return res.status(200).json({data: [], status: 200});
        }

    })

   

   

}