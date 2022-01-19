const Order = require('../models/orderDetails');

exports.insert = (req, res) => {

    try {
        const {sender_name, sender_address, sender_phone, receiver_name, receiver_address, receiver_phone } = req.body;

        const order = new Order({
            sender_name, sender_address, sender_phone, receiver_name, receiver_address, receiver_phone
        })
        order.isActive = "1";
        order.email = "";
        
        order.save().then((data) => {
            return res.status(200).json({id:data._id, status:200});
        }).catch(() => {
            return res.status(400).json({message: "Problem Saving Data!", status:400});
        })
    } catch(err) {
        return res.status(500).json({message: "Server Error!", status:500});
    }

}

exports.getAllActive = (req, res) => {

    try {
        Order.find({isActive: "1"}).then((orders) => {
            if(orders) {
                return res.status(200).json({data:orders, status: 200})
            }
        }).catch(() => {
            return res.status(400).json({message: "Error Fetching all the active data!", status:400});
        })
    } catch(err) {
        return res.status(500).json({message: "Server Error!", status:500});
    }

}



exports.getAllPast = (req, res) => {

    try {
        const emailID = req.body.emailID;
        Order.find({emailID:emailID , isActive:"0"}).then((orders) => {
            if(orders) {
                return res.status(200).json({data:orders, status: 200})
            }
        }).catch(() => {
            return res.status(400).json({message: "Error Fetching all the past data!", status:400});
        })
    } catch(err) {
        return res.status(500).json({message: "Server Error!", status:500});
    }


}



exports.updateStatus = (req, res) => {

    try {
        const {_id, emailID } = req.body;
        Order.findByIdAndUpdate({_id}, {emailID:emailID, isActive:"0"}).then((data) => {
            return res.status(200).json({data: data._id, status:200});
        }).catch(() => {
            return res.status(400).json({message: "Error Fetching all the past data!", status:400});
        })
    } catch(err) {
        return res.status(500).json({message: "Server Error!", status:500});
    }

}

exports.getByID = (req, res) => { 
    const _id = req.params.id
    Order.findOne({_id}).then((order) => {
        if(order) {
            return res.status(200).json({data: order, status: 200});
        } else {
            return res.status(400).json({message: "Error getting an order by ID!", status:400});
        }
    })
}