import demoNav from '../demoNav';
import buildDemoSections from '../buildDemoSections';
import content from '../HTMLComponent';
import Prism from '../prism';


const CollapsingMenu = () => {
    const collapsingDemoNav = new demoNav();
    const sections = new buildDemoSections("Collapsable Menu");
    const markupCode = document.createElement('pre');
    // const styleCode = document.createElement('pre');
    // const codeTag = document.createElement('code');
markupCode.innerHTML = `
<code class=" language-markup">
    &lt;div class="demo-super-nav lightblue" &gt;
        &lt;div class="demo-nav" &gt;
            &lt;a class="nav-link" id="nav-link-section-1" href="#section-1"&gt;section-1&lt;/a&gt;
            &lt;a class="nav-link" id="nav-link-section-2" href="#section-2"&gt;section-2&lt;/a&gt;
            &lt;a class="nav-link" id="nav-link-section-3" href="#section-3"&gt;section-3&lt;/a&gt;
            &lt;a class="nav-link" id="nav-link-section-4" href="#section-4"&gt;section-4&lt;/a&gt;
            &lt;a class="nav-link" id="nav-link-section-5" href="#section-5"&gt;section-5&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div id="burger-box"&gt;menu&lt;/div&gt;
    &lt;div class="demo-section-contatiner" &gt;
        &lt;section class="demo-section" id="section-1"&gt; ... &lt;/section&gt;
        &lt;section class="demo-section" id="section-2"&gt; ... &lt;/section&gt;
        &lt;section class="demo-section" id="section-3"&gt; ... &lt;/section&gt;
        &lt;section class="demo-section" id="section-4"&gt; ... &lt;/section&gt;
        &lt;section class="demo-section" id="section-5"&gt; ... &lt;/section&gt;
    &lt;/div&gt;
</code>`;

// codeTag.innerHTML = `
// .demo-super-nav {
//   position: fixed;
//   width: 100%;
//   height: fit-content;
//   display: flex;
//   justify-content: center;
//   transition: background 500ms ease-in-out;
// }
// /* Javascript will take care of toggling these two classes to ensure the navigation container contrasts the color of the current section */

// .demo-super-nav.white { background: white; }
// .demo-super-nav.lightblue { background: lightblue; }

// .demo-nav {
//   top: 0px;
//   display: flex;
//   justify-content: space-between;
//   width: 80%;
// }

// .nav-link {
//   padding: 2em;
//   font-weight: 200;
//   position: relative;
//   width: 20%;
//   transition: background 300ms 0ms ease-in-out, color 300ms ease-in-out;
//   text-align: center;
// }
// .nav-link:hover, 
// .nav-link.active {
//   font-weight: 600;
// }
// /* the current section nav link takes it's style cue from the class of its parent element  */

// .white .nav-link {
//   color: #4baac8;
// }
// .white .nav-link:hover, .white .demo-nav .nav-link.active {
//   background: lightblue;
//   color: white;
// }
// .lightblue .nav-link {
//   color: white;
// }
// .lightblue .nav-link:hover, 
// .lightblue .nav-link.active {
//   background: white;
//   color: lightblue;
// }

// .demo-div-container {
//   display: flex;
//   height: 100%;
//   width: 100vw;
//   flex-direction: column;
// }

// .demo-section {
//   height: calc(100vh - 3rem);
//   width: 100vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1em;
// }
// .demo-section h1 {
//   font-size: 8vmax;
// }
// .demo-section:nth-child(odd) {
//   background: lightblue;
// }
// /* hide the menu button while full menu is displayed */

// #burger-box {
//   display: none;
// }
// `;

    const hook = document.getElementById("effect-render-container");
    const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home';
    
    hook.innerHTML = '';
    collapsingDemoNav.render(hook);
    collapsingDemoNav.toggleActive(startingSect);
    collapsingDemoNav.activateListeners();
    sections.render(hook);
    document.getElementsByClassName("html-section-wrapper")[0].append(markupCode);
    // styleCode.className = "language-css";
    // styleTag.append(styleCode);
    // const styleWrapper = document.getElementsByClassName("css-section-wrapper")[0];
    // styleWrapper.append(styleTag);
    Prism.highlightElement(markupCode);
    // Prism.highlightElement(styleTag);

    
    

};

export default CollapsingMenu;