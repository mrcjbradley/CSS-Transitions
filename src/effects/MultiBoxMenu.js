import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import content from '../HTMLComponent';
import demoNav from '../demoNav';
import buildEffectSelection from '../buildEffectSelection';
import buildDemoSections from '../buildDemoSections';
import loadingAnimation from '../BuildLoadingAnimation'

library.add(fas, far, fab); 

const markupCode = `
<h1> the html </h1>
<pre class="language-markup">
    <code class="language-markup">
&lt;div class="demo"&gt;
    &lt;div class="Demo_MainNav"&gt;
        &lt;div class="DemoMenuToggle js-menu-toggle"&gt;
            &lt;span class="test" id="menuIcon"&gt;
                &lt;i class="fas fa-box"&gt; &lt;/i&gt;
            &lt;/span&gt;
        &lt;/div&gt;
        &lt;ul class="MainNav_MenuList"&gt;
            &lt;li class="MainNav_MenuListItem js-menu-li"&gt;
                &lt;div class="" style="visibility: visible;"&gt;
                    &lt;a class="effect-btn" 
                        data-body-class="collapsing-menu-effect"&gt;
                            collapsing menu&lt;/a&gt;
                    &lt;a class="effect-btn" 
                        data-body-class="sliding-box-menu-effect"&gt;
                            sliding box menu&lt;/a&gt;
                    &lt;a class="effect-btn" 
                        data-body-class="multi-box-menu-effect"&gt;
                            multi box menu&lt;/a&gt;
                    &lt;a class="effect-btn" 
                        data-body-class="hover-reveal-effect"&gt;
                            hover reveal&lt;/a&gt;
                    &lt;a class="effect-btn" 
                        data-body-class="slide-show-effect"&gt;
                            slide show&lt;/a&gt;
                    &lt;a class="effect-btn" 
                        data-body-class="card-flip-effect"&gt;
                            card flip&lt;/a&gt;
                &lt;/div&gt;
            &lt;/li&gt;
            &lt;li class="MainNav_MenuListItem js-menu-li bg-overlay-blue"&gt;
                &lt;a class="featured-link" href="#"&gt;this is a featured link...&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="MainNav_MenuListItem js-menu-li"&gt;
                &lt;blockquote&gt;
                    &lt;span class="quoteIcon"&gt;"&lt;/span&gt;
                    &lt;span class="quote"&gt;
                        This is a quote that will make you think...
                    &lt;/span&gt;
                &lt;/blockquote&gt;
            &lt;/li&gt;
            &lt;li class="MainNav_MenuListItem js-menu-li"&gt;
                &lt;a class="contact-link"&gt;Get in touch now →&lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="MainNav_MenuListItem js-menu-li"&gt;
                &lt;div class="demo-nav"&gt;
                    &lt;a class="nav-link effect-element-link" 
                        id="nav-link-section-1" href="#section-1"&gt;
                        &lt;span class="ol-super-number"&gt;01&lt;/span&gt;
                        section-1&lt;/a&gt;
                    &lt;a class="nav-link effect-element-link" 
                        id="nav-link-section-2" href="#section-2"&gt;
                        &lt;span class="ol-super-number"&gt;02&lt;/span&gt;
                        the section-2&lt;/a&gt;
                    &lt;a class="nav-link effect-element-link" 
                        id="nav-link-section-3" href="#section-3"&gt;
                        &lt;span class="ol-super-number"&gt;03&lt;/span&gt;
                        the section-3&lt;/a&gt;
                    &lt;a class="nav-link effect-element-link" 
                        id="nav-link-section-4" href="#section-4"&gt;
                        &lt;span class="ol-super-number"&gt;04&lt;/span&gt;
                        the section-4&lt;/a&gt;
                    &lt;a class="nav-link effect-element-link" 
                        id="nav-link-section-5" href="#section-5"&gt;
                        &lt;span class="ol-super-number"&gt;05&lt;/span&gt;
                        the section-5&lt;/a&gt;&lt;/div&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class="bg bg-cosmic-city"&gt;&lt;/div&gt;
&lt;div class="demo-section-contatiner"&gt;
    &lt;section class="demo-section" id="section-1"&gt;
        ...
    &lt;/section&gt;
    &lt;section class="demo-section" id="section-2"&gt;
        ...
    &lt;/section&gt;
    &lt;section class="demo-section" id="section-3"&gt;
        ...
    &lt;/section&gt;
    &lt;section class="demo-section" id="section-4"&gt;
        ...
    &lt;/section&gt;
    &lt;section class="demo-section" id="section-5"&gt;
        ...
    &lt;/section&gt;
&lt;/div&gt;
    </code>
</pre>`;

const styleCode = `
<h1>
    the css
</h1>
<pre class="language-css">
    <code class="language-css">
    body {
        position: relative;
        width: 100vw;
        height: 100vh;
        max-height: 100vh;
    }
    .bg-overlay-blue {
        background-color: rgba(0, 30, 255, 0.3);
        background-blend-mode: overlay;
    }
    #demo {
        position: absolute;
        width: 100%;
        height: calc(100% - 3em);
        overflow: hidden;
    }
    .MainNav_MenuListItem {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: soleil, sans-serif;
        text-decoration: none;
        color: white;
    }
    .MainNav_MenuListItem .demo-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 45%;
        justify-content: space-evenly;
    }
    .MainNav_MenuListItem blockquote {
        font-family: 'Times New Roman', Times, serif;
        font-size: 3vmax;
        position: relative;
    }
    .MainNav_MenuListItem blockquote .quote {
        display: flex;
        position: relative;
        z-index: 1000;
        margin: 0 auto;
        padding: 1.5vmax;
        overflow: hidden;
    }
    .quoteIcon {
        font-size: 5em;
        z-index: 999;
        color: #0033ff;
        position: absolute;
        opacity: 0.7;
        z-index: 1;
        top: -.15em;
        left: 0em;
    }
    .featured-link {
        visibility: hidden;
        font-size: 1em;
        letter-spacing: 0.1em;
        text-transform: lowercase;
        line-height: 1.2;
        opacity: 0;
        transition-property: visibility, opacity;
        transition: 0.45s ease-in-out 0.1s;
    }
    li:hover>.featured-link {
        visibility: visible;
        opacity: 1;
        text-decoration: underline;
    }
    .contact-link {
        font-size: 0.95em;
    }
    .ol-super-number {
        font-size: 0.4em;
        font-weight: 100;
        vertical-align: super;
        color: #0033ff;
    }
    .effect-element-link {
        position: relative;
        font-size: 3.5vmax;
    }
    .effect-element-link::after {
        content: '';
        width: 100%;
        top: 60%;
        height: 6px;
        position: absolute;
        right: -15px;
        background: blue;
        opacity: 0;
        transform: scale3d(0, 1, 1);
        transition: transform 0.3s, opacity 0.3s;
        transform-origin: left;
    }
    .effect-element-link:hover {
        color: #0033ff;
    }
    .effect-element-link:hover::after {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }
    .DemoMain {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.5s ease-in-out;
        transition: visibility 0.7s 1s ease-in-out;
    }
    .DemoMain_Title {
        font-family: boucherie-block, sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 8.5em;
        color: #0033ff;
        letter-spacing: .1em;
        opacity: .5;
    }
    .DemoMain_Subtitle {
        font-family: boucherie-flared, sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5em;
        color: white;
        text-transform: lowercase;
        letter-spacing: 0.15em;
        opacity: 0.45;
    }
    .effect-link {
        font-size: 1.2em;
        letter-spacing: 0.1em;
        display: block;
        margin: .5vmin;
    }
    .efftect-link-lable {
        font-size: 1.2em;
        font-weight: 200;
        letter-spacing: 0.1em;
        display: block;
        margin: 3vmin;
    }
    .demo-section:first-child {
        background: none;
        font-family: boucherie-block, sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 8.5em;
        color: #007bff;
        letter-spacing: .1em;
    }
        
        </code>
    </pre>
    `;

const scriptCode = `
<h1> the javascript </h1>
<pre class="language-javascript">
    <code class="language-javascript">
let open = false;
const toggleMenu = () => {
    const menuLis = document.querySelectorAll('.js-menu-li');
    const menuIcon = document.querySelector('#menuIcon');
    for (let idx = 0; idx < menuLis.length; idx++) {
        const element = menuLis[idx];
        if (open){
            switch(idx){
                case 0: element.style.width = '0%'; break;
                case 1: element.style.height = '0%';  break;
                case 2: element.style.width = '0%'; break;
                case 3:  element.style.height = '0%'; break;
                case 4: element.style.width = '0%';  break;
            }
            menuIcon.innerHTML = '<i class="fas fa-box"> </i>';
            setTimeout(() => {
               element.children.forEach(childEl => {
                   childEl.style.visibility = "hidden";
                });}, 1000);
        } else {
            element.children.forEach(childEl => {
                childEl.style.visibility = "visible";
            });
            switch(idx){
                case 0: element.style.width = '25%'; break;
                case 1: element.style.height = '60%'; break;
                case 2: element.style.width = '25%';  break;
                case 3: element.style.height = '40%'; break;
                case 4: element.style.width = '50%'; break;
            }
            menuIcon.innerHTML = '<i class="fas fa-box-open"> </i>';
        }
    }
    
    open = !open;
    dom.i2svg();
};
document.addEventListener("DOMContentLoaded", () => {
    dom.i2svg();
    const menuToggle = document.querySelector('.js-menu-toggle');
    menuToggle.addEventListener("click", toggleMenu);
})
    </code>
</pre>`;

const loading = new loadingAnimation();
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

const effectLinks =    buildEffectSelection(loading.loader, false) 
// effectLinks.effectSelection && effectLinks.effectSelection.rem;oveClass('effect-selection');

const menuOptions = [ 
    effectLinks,
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
        this.activateListeners = this.activateListeners.bind(this)
    }

    activateListeners(toggleLoading){
        const menuLis = Array.from(document.getElementsByClassName('js-menu-li'));
        let openMenu = false;
        const toggleMultiBoxMenu = (e) => {
            document.querySelector('.js-menu-toggle').classList.remove('bouncer');
            
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
            
            // effectLinks.activateListeners(toggleLoading);

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
            if (document.querySelectorAll('.bg').length === 0) return null;
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
        };
        
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
        document.querySelector('.js-menu-toggle').classList.add('bouncer');
        movingBG.render(hook);
        this.activateListeners(toggleLoading);
        sections.render(hook);
        const htmlSectionWrapper = document.getElementsByClassName("html-section-wrapper")[0];
        htmlSectionWrapper.innerHTML = markupCode;
        const cssSectionWrapper = document.getElementsByClassName("css-section-wrapper")[0];
        cssSectionWrapper.innerHTML = styleCode;
        const javascriptSectionWrapper = document.getElementsByClassName("javascript-section-wrapper")[0];
        javascriptSectionWrapper.innerHTML = scriptCode;
        Prism.highlightElement(htmlSectionWrapper.children[1]);
        Prism.highlightElement(cssSectionWrapper.children[1]);
        Prism.highlightElement(javascriptSectionWrapper.children[1]);
           
    }
}

const startDemo = new content('div', {klass: 'demo'});
startDemo.append(multiBoxContent);

export default new MultiBoxMenu(startDemo.element)
