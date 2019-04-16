import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { toggleLoading } from '../index';

library.add(fas, far, fab); 

class MultiBoxMenu {
    constructor(content){
        this.content = content;
    }

    jsRecognize(toggleLoading){
        const menuLis = Array.from(document.getElementsByClassName('js-menu-li'));
        const menuUl = menuLis[0].parentElement;
        const toggleButton = document.getElementsByClassName('js-menu-toggle')[0];
        let openMenu = false;
        
        
        const toggleMultiBoxMenu = () => {
            for (let idx = 0; idx < menuLis.length; idx++) {
                const element = menuLis[idx];
                if (openMenu){
                    switch(idx){
                        case 0: element.style.width = '0%'; break;
                        case 1: element.style.height = '0%';  break;
                        case 2: element.style.width = '0%'; break;
                        case 3:  element.style.height = '0%'; break;
                        case 4: element.style.width = '0%';  break;
                    }
                    document.getElementById("menuIcon").innerHTML = `<i class="fas fa-box"> </i>`;
                    setTimeout(() => (element.innerHTML = ''), 1000);
                } else {
                    switch(idx){
                        case 0: element.style.width = '25%'; break;
                        case 1: element.style.height = '60%'; break;
                        case 2: element.style.width = '25%';  break;
                        case 3: element.style.height = '40%'; break;
                        case 4: element.style.width = '50%'; break;
                    }
                    document.getElementById("menuIcon").innerHTML = `<i class="fas fa-box-open"> </i>`;
                }
            }

            menuLis.forEach((li, idx) => li.innerHTML = menuOptions[idx]);

            Array.from(document.getElementsByClassName('effect-element-link')).forEach(eleLink => {
                    eleLink.addEventListener("click", (e) => {setTimeout(toggleMultiBoxMenu,100);});
            });
            
            Array.from(document.getElementsByClassName('effect-btn')).forEach(btn => btn.addEventListener("click", (e) => {
                e.preventDefault();
                toggleLoading();
                setTimeout(() => {
                    toggleMultiBoxMenu();
                    document.querySelector('body').classList = btn.getAttribute("data-body-class");
                }, 1000);
                setTimeout(() => {
                    toggleLoading();
                }, 2000);
            }));

            openMenu = !openMenu;
            dom.i2svg();
    };
    
    toggleButton.addEventListener("click", toggleMultiBoxMenu);


    dom.i2svg();
    this.activateBGMotion();
    }

    activateBGMotion() {
        let lFollowX = 0;
        let lFollowY = 0;
        let x = 0;
        let y = 0;
        let friction = 1 / 30;

        const moveBackground = () => {
            x += (lFollowX - x) * friction;
            y += (lFollowY - y) * friction;
            const translate = "translate(" + x + "px, " + y + "px) scale(1.1)";
            document.getElementsByClassName('bg')[0].style.transform = translate;
        };
        window.addEventListener('mousemove', (e) => {
            const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
            const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
            lFollowX = (20 * lMouseX) / 150;
            lFollowY = (10 * lMouseY) / 150;
            moveBackground();
        });
    }
    render(hook){
        hook.innerHTML = this.content;
    }
}


const menuOptions = [
    `   <ul>
        <li class="efftect-link-lable">
            for menus
        </li>
        <li><a href="#" class="effect-btn effect-link txt-tf-upper" data-body-class="sliding-box-menu-effect">Sliding Box Menu</a></li>
        <li><a href="#" class="effect-btn effect-link txt-tf-upper" data-body-class="collapsing-menu-effect">Collapsing Menu</a></li>
        <li><a href="#" class="effect-btn effect-link txt-tf-upper" data-body-class="multi-box-menu-effect">Multi Box Menu</a></li>
        <li class="efftect-link-lable">
            for content
        </li>
        <li><a href="#" class="effect-btn effect-link txt-tf-upper" data-body-class="">Hover Reveal</a></li>
        <li><a href="#" class="effect-btn effect-link txt-tf-upper" data-body-class="">Slide Show</a></li>
        <li><a href="#" class="effect-btn effect-link txt-tf-upper" data-body-class="">Card Flip</a></li>
        </ul>
    `,
    `
        <a class="featured-link">Featured Link</a>
    `,
    `
        <blockquote><span class="quoteIcon">&#8220; </span><span class="quote">This is a quote that will make you think...</span></blockquote>
    `,
    `
        <a href="" class="contact-link">Get in touch now →</a>
    `,
    `   <ul>
        <li><a href="#home" class="effect-element-link txt-tf-lower"><span class="ol-super-number">01</span> <span>home</span></a></li>
        <li><a href="#about" class="effect-element-link txt-tf-lower"><span class="ol-super-number">02</span> <span>about</span></a></li>
        <li><a href="#services" class="effect-element-link txt-tf-lower"><span class="ol-super-number">03</span> <span>services</span></a></li>
        <li><a href="#products" class="effect-element-link txt-tf-lower"><span class="ol-super-number">04</span> <span>products</span></a></li>
        <li><a href="#contact" class="effect-element-link txt-tf-lower"><span class="ol-super-number">05</span> <span>contact</span></a></li>
        </ul>
    `
];

const multiBoxContent = `

    <nav class="Demo_MainNav">
        <span class="DemoMenuToggle js-menu-toggle" > <span id="menuIcon"><i class="fas fa-box"> </i></span></span>
        <ul class="MainNav_MenuList">
            <li class="MainNav_MenuListItem js-menu-li"></li>
            <li class="MainNav_MenuListItem js-menu-li bg-overlay-blue"></li>
            <li class="MainNav_MenuListItem js-menu-li"></li>
            <li class="MainNav_MenuListItem js-menu-li"></li>
            <li class="MainNav_MenuListItem js-menu-li"></li>
        </ul>
    </nav>
`;

export default new MultiBoxMenu(multiBoxContent);