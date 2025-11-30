const NavBarMAIN = document.querySelector('.resposive-navbar');
const Navbar = document.querySelector('.Navbar');
const Navbarlinks = document.querySelectorAll('.Navbarlinks');

const Navicon = document.querySelector('.Open');
const NaviconClose = document.querySelector('.close')

Navicon.addEventListener('click', () => {
    NavBarMAIN.style.display = 'flex';
    Navbar.style.display = 'flex';

    Navbarlinks.forEach(link => {
        link.style.display = 'flex';
    });

    NaviconClose.style.display = 'flex';
    Navicon.style.display = 'none';
});
 NaviconClose.addEventListener('click', () =>{
    NavBarMAIN.style.display = 'none';
    Navbar.style.display = 'none';

    Navbarlinks.forEach(link => {
        link.style.display = 'none';
    });

    NaviconClose.style.display = 'none';
    Navicon.style.display = 'flex';
 });
 

const homeLink     = document.querySelector('.Home');
const shopLink     = document.querySelector('.Shop');
const productLink  = document.querySelector('.Product');
const blogLink     = document.querySelector('.Blog');
const currencyLink = document.querySelector('.Currecy');   
const settingLink  = document.querySelector('.Setting');    

const homeMenu     = document.querySelector('.Home-Menu');
const shopMenu     = document.querySelector('.Shop-Menu');
const productMenu  = document.querySelector('.Product-menu');
const blogMenu     = document.querySelector('.Blog-Menu');
const currencyMenu = document.querySelector('.Currecy-con');
const settingMenu  = document.querySelector('.Setting-Menu');  // new setting menu


function setupDropdown(link, menu) {

    link.addEventListener('mouseover', () => {
        menu.style.display = 'block';
    });

    menu.addEventListener('mouseover', () => {
        menu.style.display = 'block';
    });

    link.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!menu.matches(':hover') && !link.matches(':hover')) {
                menu.style.display = 'none';
            }
        }, 120);
    });

    menu.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!menu.matches(':hover') && !link.matches(':hover')) {
                menu.style.display = 'none';
            }
        }, 120);
    });
}

setupDropdown(homeLink, homeMenu);
setupDropdown(shopLink, shopMenu);
setupDropdown(productLink, productMenu);
setupDropdown(blogLink, blogMenu);
setupDropdown(currencyLink, currencyMenu);
setupDropdown(settingLink, settingMenu);

const MainCurrency = document.querySelector('.Currecy p'); 
const currencyItemList = document.querySelectorAll('.Currecy-con ul li');

currencyItemList.forEach(item => {
    item.addEventListener('click', () => {
        const Fulltext = item.innerText;
        const ShortText  = Fulltext.split('-')[0];
        MainCurrency.innerText = ShortText;
    });
});

const MainProduct  = document.querySelectorAll('.Grid-item');

// Whishlist Functionality
const svgicon = document.querySelectorAll('.addtowhishlost svg');

const WhistlistIcon = function() {
    svgicon.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.stopPropagation();
            if (icon.style.fill === 'rgb(0, 0, 0)' || icon.style.fill === '#000000ff') {
                icon.style.fill = '';
                icon.style.stroke = '';
            } else 
                icon.style.fill = '#000000ff';
                icon.style.stroke = '#000000ff';
            
        });
    });
};
WhistlistIcon();

let WhlishtArray = [];
svgicon.forEach(icon =>{
    icon.addEventListener('click' , (event) =>{
        event.stopPropagation();
        const MainBox = icon.closest('#product-wrapper');
        const image = MainBox.querySelector('.Item-image img');
        const title = MainBox.querySelector('.tittle');
        const price = MainBox.querySelector('.price');

        const WhishlistObj = {
            imageSrc: image.src,
            titleText: title.innerText,
            priceText: price.innerText
        };

        const NewWhishlist = document.createElement('div');
        NewWhishlist.classList.add('product-card');
        NewWhishlist.innerHTML = `
        <div class="product-card">
            <div class="product-image-box">
                <a href="#" class="product-link-img"><img src="${image}"></a>
                <!-- Hover Action Buttons -->
                <div class="product-action-bar">
                    <button class="action-btn search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    </button>
                    <button class="action-btn cart-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                    </button>
                </div>
                <div class="product-action-bar">
                    <button class="action-btn search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    </button>
                    <button class="action-btn cart-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                    </button>
                </div>
                </div>
                <div class="product-info">
                <a href="#"><h5 class="product-title">${title.innerText}</h5></a>
                <p class="product-price"><span>¥</span>${price.innerText}</p>
                </div>
        </div>
        `;
        WhlishtArray.push(WhishlistObj);
        const ProductWhishlistContainer = document.querySelector("#product-wrapper")
        ProductWhishlistContainer.appendChild(NewWhishlist);
    });
});

// add to cart code only popup start here
const cartIcons = document.querySelectorAll('.addtocart');
cartIcons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    const mainContainer = event.currentTarget.closest('.Grid-item');
    const image = mainContainer.querySelector('.Item-image img');
    const title = mainContainer.querySelector('.tittle');

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
        <a href="Terry-Ecommerce-Website/Accoounts/ShoppingCart.html"><button>VIEW CART</button></a>
        <a href=""><button>CHECKOUT</button></a>
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
});
});
// actually add to the cart popup end here
const Cart  = document.getElementById('Shoppingcart')
console.log(Cart);
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
const Totals = document.querySelector('.totals');
console.log(Totals);