import Order from '../models/order.model.js';


//se pude hacer mas de una order?
export const getOrder = async(req,res)=>{
    const order = await Order.findById(req.params.id).populate("user")

    if(!order) return res.status(404).json({message:"order not found"});

    res.status(200).json(order)
}


// order para usuarios loggeados
export const myOrders = async(req,res) => {
    const orders = await Order.find({ user: req.user._id }).populate("user");
  
    res.status(200).json(orders)
    
}

export const createOrder =async(req,res)=>{
    
    const{ shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice}=req.body

        const newOrder =  new Order({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paidAt:Date.now(),//wq
            user:req.user._id
})
    let orderSaved = await newOrder.save()
    res.status(200).json(orderSaved)
}

export const updateOrder = async(req,res)=>{
    const order = await Order.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })//es findById solo o update? lleva el req.body?



    if(!order) return res.status(404).json({message:"order not found"})
    
    res.status(200).json(order.status)

    //falta validacion dependiendo del estado de la orden
    //.......

    //actualzar stock
    //eliminar orden
}