import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import content from '../HTMLComponent';
import demoNav from '../demoNav';
import buildEffectSelection from '../buildEffectSelection';

// import { toggleLoading } from '../index';

library.add(fas, far, fab); 

const blockQuote = new content('blockquote', {});
blockQuote.append(new content('span', {
    klass: "quoteIcon",
    content: '"'
}));
blockQuote.append(new content('span', {
    klass: "quote",
    content: "This is a quote that will make you think..."
}));

const featuredLink = new content('a',{klass:'featured-link'});
        featuredLink.addAttr('href', '#');

const innerLinksWrapper = document.createDocumentFragment();
const innerNavLinks = new demoNav();
innerLinksWrapper.appendChild(innerNavLinks.demoNavDiv.element);
Object.values(innerNavLinks.navLinkElements).forEach((navL,idx) => { 
	const numSpan = new content("span", {klass:"ol-super-number", content:`0${idx+1}`});
	navL.addClass("effect-element-link");
    navL.element.prepend(numSpan.element);
    innerNavLinks.demoNavDiv.append(navL);
});

const effectLinks = new buildEffectSelection('collapsing menu', 'sliding box menu', 'multi box menu', 'hover reveal', 'slide show', 'card flip');
effectLinks.effectSelection.removeClass('effect-selection');

const menuOptions = [ effectLinks.render(), featuredLink, blockQuote, new content('a', {klass:"contact-link", content: "Get in touch now →" }), innerLinksWrapper ];

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

class MultiBoxMenu {
    constructor(effectContent){
        this.effectContent = effectContent;
        // this.populated = false;
    }

    activateListeners(toggleLoading){
        const menuLis = Array.from(document.getElementsByClassName('js-menu-li'));
        const menuUl = menuLis[0].parentElement;
        const toggleButton = document.getElementsByClassName('js-menu-toggle')[0];
        let openMenu = false;
        
        menuLis.forEach((li, idx) => {
                if (typeof menuOptions[idx] === "string") {
                    li.innerHTML = menuOptions[idx];
                } else if (idx === 4) {
                    li.append(menuOptions[idx]);
                } else {
                    li.append(menuOptions[idx].element);
                }
            });

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
                    setTimeout(() => {
                        Array.from(element.children).forEach(childEl => childEl.style.opacity = "0");}, 1000);
                } else {
                    Array.from(element.children).forEach(childEl => childEl.style.opacity = "1");
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
        hook.innerHTML = this.effectContent;
    }
}


export default new MultiBoxMenu(multiBoxContent);