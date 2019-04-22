import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import content from '../HTMLComponent';
import demoNav from '../demoNav';
import buildEffectSelection from '../buildEffectSelection';
import buildDemoSections from '../buildDemoSections';

library.add(fas, far, fab); 

const blockQuote = new content('blockquote', {});
    blockQuote.append(new content('span', { klass: "quoteIcon", content: '"'}));
    blockQuote.append(new content('span', { klass: "quote", content: "This is a quote that will make you think..." }));

const featuredLink = new content('a',{klass:'featured-link', content: "this is a featured link..."});
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

const menuOptions = [ 
    effectLinks.render(), 
    featuredLink, 
    blockQuote,
    new content('a', {klass:"contact-link", content: "Get in touch now →" }), innerLinksWrapper ];


const DemoMenuToggle = new content('div', {klass: "DemoMenuToggle js-menu-toggle"});
    const menuIcon = new content('span', {id:'menuIcon'});
    menuIcon.element.innerHTML = `<i class="fas fa-box"> </i>`;
    DemoMenuToggle.append(menuIcon); 

const mainNavList = new content('ul', {klass: "MainNav_MenuList"});
    for (let idx = 0; idx < 5; idx++) {
        const klass = idx === 1 ? "MainNav_MenuListItem js-menu-li bg-overlay-blue" : "MainNav_MenuListItem js-menu-li";
        const listItem = new content('li', {klass});
        listItem.append(menuOptions[idx]);
        mainNavList.append(listItem);
    }
    
    
    class buildMovingBackground {
        constructor(klassList) {
            this.movingBackground = new content('div', {
                klass: 'bg'
            });
            this.movingBackground.addClass(klassList);
        }
        render(hook) {
            hook.appendChild(this.movingBackground.element);
        }
    }
    
    const movingBG = new buildMovingBackground('bg-cosmic-city', 'bg-overlay-black');

const multiBoxContent = new content('div', {klass: "Demo_MainNav"});
        multiBoxContent.append(DemoMenuToggle);
        multiBoxContent.append(mainNavList);


class MultiBoxMenu {
    constructor(effectContent){
        this.effectContent = effectContent;
        this.activateBGMotion = this.activateBGMotion.bind(this);
    }

    activateListeners(toggleLoading){
        const menuLis = Array.from(document.getElementsByClassName('js-menu-li'));
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
                    menuIcon.element.innerHTML = `<i class="fas fa-box"> </i>`;
                    setTimeout(() => {
                        Array.from(element.children).forEach(childEl => childEl.style.visibility = "hidden");}, 1000);
                } else {
                    Array.from(element.children).forEach(childEl => childEl.style.visibility = "visible");
                    switch(idx){
                        case 0: element.style.width = '25%'; break;
                        case 1: element.style.height = '60%'; break;
                        case 2: element.style.width = '25%';  break;
                        case 3: element.style.height = '40%'; break;
                        case 4: element.style.width = '50%'; break;
                    }
                    menuIcon.element.innerHTML = `<i class="fas fa-box-open"> </i>`;
                }
            }

            Array.from(document.getElementsByClassName('effect-element-link')).forEach(eleLink => {
                    eleLink.addEventListener("click", (e) => {setTimeout(toggleMultiBoxMenu,100);});
            });
            
            effectLinks.activateListeners(toggleLoading);

            openMenu = !openMenu;
            dom.i2svg();
    };

    DemoMenuToggle.element.onclick = toggleMultiBoxMenu;

    dom.i2svg();
    this.activateBGMotion("on");
    }

    activateBGMotion(active) {
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

        this.handleMouseMove = function(e) {
            const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
            const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
            lFollowX = (20 * lMouseX) / 150;
            lFollowY = (10 * lMouseY) / 150;
            moveBackground();
        }
        
        if (active === "on"){
            window.addEventListener('mousemove', this.handleMouseMove);
        } else {
            window.removeEventListener('mousemove', this.handleMouseMove);
    }
    }
    render(toggleLoading){
        const hook = document.getElementById('effect-render-container');
        hook.innerHTML = '';
        const sections = new buildDemoSections("Multi-Box Menu");
        
            hook.append(this.effectContent);
            movingBG.render(hook);
            this.activateListeners(toggleLoading);
            sections.render(hook);
           
    }
}

const startDemo = new content('div', {klass: 'demo'});
startDemo.append(multiBoxContent);

export default new MultiBoxMenu(startDemo.element);