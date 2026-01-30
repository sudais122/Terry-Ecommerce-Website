const { Existingitem } = require('../Helper/Helper');
let Cart = [];

const AddtoCart = (req,res)=>{
    const Details = {...req.body};

    const Existingitem = Cart.find(item => item.tittle === Details.tittle);
    
    if(Existingitem){
        return res.json({message: 'item already in cart'});
    }else{
        Cart.push(Details);
    }

    res.json({
        message: 'Cart Updated Successfully',
        Array: Cart.length,
        Cart: Cart
    })
}

const getcart = (req,res)=>{
    res.send(Cart);
}

const Deketecart = (req,res)=>{

}
module.exports = {
    AddtoCart,
    getcart
};