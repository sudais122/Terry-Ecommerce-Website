
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
        id : Date.now(),
        message: 'Cart Updated Successfully',
        Array: Cart.length,
        Cart: Cart
    })
}

const getcart = (req,res)=>{
    res.send(Cart);
}

const DeleteItem = (req,res)=>{
    const id = req.params.id;
    Cart = Cart.filter(item => item.id !== parseInt(id));
    res.json({message: 'Item deleted successfully'});
}

module.exports = {
    AddtoCart,
    getcart,
    DeleteItem
};