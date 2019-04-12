import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab); 



// const box = findIconDefinition({ prefix: 'fas', iconName: 'box' });



class MultiBoxMenu {
    constructor(content){
        this.content = content;
    }

    jsRecognize(){
        const menuLis = Array.from(document.getElementsByClassName('js-menu-li'));
        const menuUl = menuLis[0].parentElement;
        const toggleButton = document.getElementsByClassName('js-menu-toggle')[0];
        let openMenu = false;
        toggleButton.addEventListener("click", () => {
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
                    element.innerHTML = '';
                } else {
                    switch(idx){
                        case 0: element.style.width = '25%'; break;
                        case 1: element.style.height = '60%'; break;
                        case 2: element.style.width = '25%';  break;
                        case 3: element.style.height = '40%'; break;
                        case 4: element.style.width = '50%'; break;
                    }
                    element.innerHTML = menuOptions[idx];
                    document.getElementById("menuIcon").innerHTML = `<i class="fas fa-box-open"> </i>`;
                }
            }
            openMenu = !openMenu;
            dom.i2svg();
    }); 
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
            // console.log(translate);
        };

        // debugger
        document.getElementsByClassName('bg')[0].addEventListener('mousemove', (e) => {
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
        <li><a href="#" class="effect-link txt-tf-upper ls-7 fs-1">Card Flip Grid Menu</a></li>
        <li><a href="#" class="effect-link txt-tf-upper ls-7 fs-1">Slide Show Reveal</a></li>
        <li><a href="#" class="effect-link txt-tf-upper ls-5 fs-1">HoverGrid Expand</a></li>
        <li><a href="#" class="effect-link txt-tf-upper ls-4 fs-1">Multi Box Menu</a></li>
        <li><a href="#" class="effect-link txt-tf-upper ls-3 fs-1">Hover Image</a></li>
        <li><a href="#" class="effect-link txt-tf-upper ls-2 fs-1">Glitch</a></li>
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
        <li><a href="" class="effect-element-link fs-3-5 txt-tf-lower"><span class="ol-super-number">01</span> <span>Menu Animation</span></a></li>
        <li><a href="" class="effect-element-link fs-3-5 txt-tf-lower"><span class="ol-super-number">02</span> <span>Background Animation</span></a></li>
        <li><a href="" class="effect-element-link fs-3-5 txt-tf-lower"><span class="ol-super-number">03</span> <span>Content Styling</span></a></li>
        <li><a href="" class="effect-element-link fs-3-5 txt-tf-lower"><span class="ol-super-number">04</span> <span>More...</span></a></li>
        </ul>
    `
];

const multiBoxContent = `
 <div class="bg bg-cosmic-city bg-overlay-black"></div>
 <header class="Demo_Header">
    <nav class="Demo_MainNav">
        <span class="DemoMenuToggle js-menu-toggle" > <span id="menuIcon"><i class="fas fa-box"> </i></span></span>
        <ul class="MainNav_MenuList">
            <li class="MainNav_MenuListItem js-menu-li">Menu Item 1</li>
            <li class="MainNav_MenuListItem js-menu-li bg-overlay-blue">Menu Item 2</li>
            <li class="MainNav_MenuListItem js-menu-li">Menu Item 3</li>
            <li class="MainNav_MenuListItem js-menu-li">Menu Item 4</li>
            <li class="MainNav_MenuListItem js-menu-li">Menu Item 5</li>
        </ul>
    </nav>
    <!-- <article class="DemoMain">
            <h1 class="DemoMain_Title">Demo Title</h1>
            <h2 class="DemoMain_Subtitle">Demo Subtitle</h1>
    </article> -->   
</header>
`;

export default new MultiBoxMenu(multiBoxContent);