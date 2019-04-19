import demoNav from '../demoNav';
import buildDemoSections from '../buildDemoSections';
import content from '../HTMLComponent';
import Prism from '../prism';


const CollapsingMenu = () => {
    const collapsingDemoNav = new demoNav();
    const sections = new buildDemoSections("Collapsable Menu");
    const testCodeBlock = document.createElement('pre');
    // testCodeBlock.className = " language-markup";
    testCodeBlock.innerHTML = `
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
    const hook = document.getElementById("effect-render-container");
    const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home';
    
    hook.innerHTML = '';
    collapsingDemoNav.render(hook);
    collapsingDemoNav.toggleActive(startingSect);
    collapsingDemoNav.activateListeners();
    sections.render(hook);
    document.getElementsByClassName("html-section-wrapper")[0].append(testCodeBlock);
    Prism.highlightElement(testCodeBlock);
    
    

};

export default CollapsingMenu;