
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