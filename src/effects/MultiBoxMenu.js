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
                element.innerHTML = menuOptions[idx];
                if (openMenu){
                    switch(idx){
                    case 0: element.style.width = '0%'; break;
                    case 1: element.style.height = '0%';  break;
                    case 2: element.style.width = '0%'; break;
                    case 3:  element.style.height = '0%'; break;
                    case 4: element.style.width = '0%';  break;
                    }
                    document.getElementById("menuIcon").classList.replace("fa-box", "fa-box-open");
                } else {
                switch(idx){
                    case 0: element.style.width = '25%'; break;
                    case 1: element.style.height = '60%'; break;
                    case 2: element.style.width = '25%';  break;
                    case 3: element.style.height = '40%'; break;
                    case 4: element.style.width = '50%'; break;
                }
                document.getElementById("menuIcon").classList.replace("fa-box-open", "fa-box");
            }

        }
        openMenu = !openMenu;
        dom.i2svg();

        let lFollowX = 0;
        let lFollowY = 0;
        let x = 0;
        let y = 0;
        let friction = 1 / 20;

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

    });

    dom.i2svg();
    }

    render(hook){
        hook.innerHTML = this.content;

        
    }
}

const fillMenuOptions = () => {

};

const menuOptions = [
    `   <ul>
        <li><a href="#" class="effect-link">effect 1</a></li>
        <li><a href="#" class="effect-link">effect 2</a></li>
        <li><a href="#" class="effect-link">effect 3</a></li>
        <li><a href="#" class="effect-link">effect 4</a></li>
        <li><a href="#" class="effect-link">effect 5</a></li>
        <li><a href="#" class="effect-link">effect 6</a></li>
        </ul>
    `,
    `
        <a class="featured-link">Featured Link</a>
    `,
    `
        <blockquote>This is a quote that will make you think...</blockquote>
    `,
    `
        <a href="" class="contact-link">contact us now</a>
    `,
    `   <ul>
        <li><a href="" class="effect-element-link">Menu Animation</a></li>
        <li><a href="" class="effect-element-link">Background Animation</a></li>
        <li><a href="" class="effect-element-link">Content Styling</a></li>
        <li><a href="" class="effect-element-link">More...</a></li>
        </ul>
    `
];

const multiBoxContent = `
 <div class="bg bg-cosmic-city bg-overlay-black"></div>
 <header class="Demo_Header">
    <nav class="Demo_MainNav">
        <span class="DemoMenuToggle js-menu-toggle" > <i id="menuIcon" class="fas fa-box"> </i></span >
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