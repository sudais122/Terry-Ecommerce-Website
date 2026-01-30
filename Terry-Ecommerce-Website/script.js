// add to cart code only popup start here
const cartIcons = document.querySelectorAll('.addtocart');
let count  = 0;
count++;
document.querySelector('.Count p').innerText = count;

cartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
    count++;
    document.querySelector('.Count p').innerText = count;
});

  icon.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    
    const mainContainer = event.currentTarget.closest('.Grid-item');
    const image = mainContainer.querySelector('.Item-image img');
    const title = mainContainer.querySelector('.tittle');
    const price = mainContainer.querySelector('.price span');

    const ShoppingCart = {
        image: image.src,
        tittle: title.innerText,
        price: price.innerText
    };

    const Popup = document.createElement('div');
    Popup.classList.add('confirm-main');
    Popup.innerHTML = `
  <div class="confirm-box">
    <div class="item-image">
      <img src="${image.src}" alt="">
    </div>

    <div class="item-text">
      <button class="remove">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
        </svg>
      </button>

      <div class="text-item">
        <h3>${title.innerText}</h3>
        <p class="message">Added to Cart Successfully!</p>
      </div>

      <div class="buttons">
        <a href="Accoounts/Shopping Cart/ShoppingCart.html"><button>VIEW CART</button></a>
        <a href="Accoounts/Customer Details/Custamerdetail.html"><button>CHECKOUT</button></a>
      </div>
    </div>
  </div>`;
    document.body.appendChild(Popup);
    const removeBtn = Popup.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
      document.body.removeChild(Popup);
    });
    setTimeout(() => Popup.remove(), 3000);
    setTimeout(() => Popup.classList.add('show'), 10);

    //pop up end here
});
});

//send reponse to the server using fetch api fot add to cart functionality

const url = 'http://localhost:3000/cart';
async function SendData(Details) {
  try{
    const Reponse = await fetch(url,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Details)
    });
    if(!Reponse.ok){throw new Error('Network response was not ok');}
    const Data = await Reponse.json();
    console.log('Success:', Data);

  }catch(error){
    console.log('Error:', error);
  }
}

const Addtocartbutton = document.querySelectorAll('.addtocart');

Addtocartbutton.forEach(button =>{
  button.addEventListener('click', (event)=>{
    event.stopPropagation();
    event.preventDefault();

    const mainContainer = button.closest('.Grid-item');
    const image = mainContainer.querySelector('.Item-image img');
    const title = mainContainer.querySelector('.tittle');
    const price = mainContainer.querySelector('.price');

    const ShoppingCart = {
        image: image.src,
        tittle: title.innerText,
        price: price.innerText
    };

    SendData(ShoppingCart);
  })
});

// user move to top button styling start here
const Toptodown = document.querySelector('.Toptodown');
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    Toptodown.style.display = "flex";

    setTimeout(() => {
      Toptodown.classList.add("show");
    }, 100);
  } else {
    Toptodown.classList.remove("show");

    setTimeout(() => {
      Toptodown.style.display = "none";
    }, 100); // 
  }
});

const Setting = document.querySelector('.Setting');
const SettingMenu = document.querySelector('.Setting-Menu');

Setting.addEventListener('click', (e) => {
    e.stopPropagation();
    SettingMenu.classList.toggle('active');
});
document.addEventListener('click', (e) => {
    if (!SettingMenu.contains(e.target) && !Setting.contains(e.target)) {
        SettingMenu.classList.remove('active');
    }
});

