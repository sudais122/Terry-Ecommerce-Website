const url  = 'http://localhost:3000/cart';
let increseNum = 0;
let DecreseNum = 0;
const Allcontent = document.querySelector('.Allcontent');
const MainCart = document.querySelector('.cart-Main');

function calculateTotal(){
    const total = document.querySelectorAll('#Total p');
    let totalValue = 0;
    total.forEach(item => {
        const price = parseFloat(item.innerText.replace('$',''));
        totalValue += price;
    });
    return `$${totalValue}`;
}

async function ReceiveData() {
    try{
        const Response = await fetch(url,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        });
        if(!Response.ok){throw new Error('Network response was not ok');}
        const Data = await Response.json();
        console.log('Success:', Data);

        if(Data.length === 0){
            document.querySelector('.empty-cart').style.display = 'flex';
            return;
        }

        Allcontent.style.display = 'block';
        MainCart.style.display = 'flex';
        document.querySelector('.empty-cart').style.display = 'none';
        const top = document.createElement('div');
        top.classList.add('cart-Main');
        top.innerHTML = `
          <div class="cart">
            <div class="Cart-item" id="image"><p>IMAGE</p></div>
            <div class="Cart-item" id="product-name"><P>RODUCT</P></div>
            <div class="Cart-item" id="price"><P>PRICE</P></div>
            <div class="Cart-item" id="quantity"><P>Quantity</P></div>
            <div class="Cart-item" id="total"><P>TOTAL</P></div>
            <div class="Cart-item" id="remove">REMOVE</div>
          </div>
        `;
        MainCart.appendChild(top);


        function ProductCart(){
            Data.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('main-item');
    
                let currqantity = 1;
                let pricevalues = parseFloat(item.price.replace('$',''));
                let total = pricevalues * currqantity;
                cartItem.innerHTML = `     
                    <div class="main-item">
                        <div class="cart-item" id="Image"><a href=""><img src="${item.image}" alt=""></a></div>
                        <div class="cart-item" id="Product-name"><a href=""><p>${item.tittle}</p></a></div>
                        <div class="cart-item" id="Price"><P>${item.price}</P></div>
                        <div class="cart-item" id="Quantity">
                            <div class="Quan-count">
                                <div class="dcrse">-</div>
                                <div class="count">1</div>
                                 <div class="Incse">+</div>
                            </div>
                        </div>
                    <div class="cart-item" id="Total"><P>$${total}</P></div>
                    <div class="cart-item" id="Remove"><i class="fa fa-remove"></i></div>
                </div> 
                `;
                //update quantity function
                function udateQuantiy(){
                    const count = cartItem.querySelector('.count');
                    console.log(count.innerText);
                }
                udateQuantiy();
                MainCart.appendChild(cartItem);
    
                //logic to increse the quantity and decrease quantity
                const Increse = cartItem.querySelector('.Incse');
                const Decrese = cartItem.querySelector('.dcrse');
                const Count = cartItem.querySelector('.count');
    
                Increse.addEventListener('click', () => {
                    increseNum++;
                    Count.innerText = increseNum;
                });
    
                Decrese.addEventListener('click', () => {
                    if(increseNum > 0){
                        increseNum--;
                        Count.innerText = increseNum;
                    }
                });
    
            })     //remove item functionality added later
        }
        ProductCart();

        const Options = document.querySelector('.option-main');
            Options.style.display = 'flex';

            // calculate total function
            calculateTotal();

            const overallTotal = document.createElement('div');
            overallTotal.classList.add('other-options');
            overallTotal.innerHTML = `
                <div class="other-options">
                    <div class="Shipping">
                        <p>Get shipping estimates</p>
                        <input type="text" id="country" placeholder="---">
                        <input type="text" id="Zip" placeholder="Zip/Postal Code">
                        <a href=""><button style = "width: 15rem;"><p>CALCULATE SHIPPING</p></button></a>
                    </div>
            <div class="totals">
                <p>Cart Totals</p>
                <div class="main-table">
                    <div class="row">
                    <div class="cell"><p>Subotal</p></div>
                    <div class="cell"><p>Total</p></div>
                </div>
        <div class="row">
            <div class="cell"><p>${calculateTotal()}</p></div>
            <div class="cell"><p>${calculateTotal()}</p></div>
          </div>
      </div>
          <a href="Custamerdetail.html"><button>Proceed to Checkout</button></a>
        </div>
      </div>
            `;
            MainCart.appendChild(overallTotal);
            const ClearCart = document.querySelector('.Clear');
            //clear cart functionality to be added later
        
            const update = document.querySelector('.second');
            update.addEventListener('click', () => {
                udateQuantiy();
                calculateTotal();
            });
    }catch(error){
        console.log('Error:', error);
    }
}
ReceiveData();

MainCart.addEventListener('click', async (event) => {
    event.stopPropagation();
    event.preventDefault();

    if(event.target.classList.contains('fa-remove')) {
        const Item = event.target.closest('.main-item');
        const id = Item.dataset.id; 

        try {
            const Response = await fetch(`http://localhost:3000/cart/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!Response.ok) throw new Error('Network response was not ok');

            const Data = await Response.json();
            console.log(Data.message);
            Item.remove();

            const newTotal = calculateTotal();
            document.querySelector('#Total p').innerText = newTotal;


        } catch (error) {
            console.log('Error:', error);
        }
    }
});
