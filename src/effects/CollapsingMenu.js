import demoNav from '../demoNav';
import buildDemoSections from '../buildDemoSections';
import content from '../HTMLComponent';
import Prism from '../prism';


const CollapsingMenu = () => {
    const collapsingDemoNav = new demoNav();
    const sections = new buildDemoSections("Collapsable Menu");

const markupCode = `
<h1> the html </h1>
<pre class="language-markup">
    <code class="language-markup">
        &lt;div class="demo-super-nav lightblue" &gt;
            &lt;div class="demo-nav" &gt;
                &lt;a class="nav-link"
                    data-super-nav-color="white" 
                    id="nav-link-section-1" 
                    href="#section-1"&gt;section-1&lt;/a&gt;
                &lt;a class="nav-link" 
                    data-super-nav-color="blue" 
                    id="nav-link-section-2" 
                    href="#section-2"&gt;section-2&lt;/a&gt;
                &lt;a class="nav-link" 
                    data-super-nav-color="white" 
                    id="nav-link-section-3" 
                    href="#section-3"&gt;section-3&lt;/a&gt;
                &lt;a class="nav-link" 
                    data-super-nav-color="blue" 
                    id="nav-link-section-4" 
                    href="#section-4"&gt;section-4&lt;/a&gt;
                &lt;a class="nav-link" 
                    data-super-nav-color="white" 
                    id="nav-link-section-5" 
                    href="#section-5"&gt;section-5&lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div id="burger-box"&gt;menu&lt;/div&gt;
        &lt;div class="demo-section-contatiner" &gt;
            &lt;section class="demo-section" 
                id="section-1"&gt; ... &lt;/section&gt;
            &lt;section class="demo-section" 
                id="section-2"&gt; ... &lt;/section&gt;
            &lt;section class="demo-section" 
                id="section-3"&gt; ... &lt;/section&gt;
            &lt;section class="demo-section" 
                id="section-4"&gt; ... &lt;/section&gt;
            &lt;section class="demo-section" 
                id="section-5"&gt; ... &lt;/section&gt;
        &lt;/div&gt;
    </code>
</pre>`;

  const styleCode = `
  <h1>the css</h1>
<pre class="language-css">
        <code class="language-css">
        .demo-super-nav {
        position: fixed;
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        transition: background 500ms ease-in-out;
        }

        /* Javascript will take care of toggling these 
        two classes to ensure the navigation container 
        contrasts the color of the current section */
        
        .demo-super-nav.white { background: white; }
        .demo-super-nav.lightblue { background: lightblue; }
        
        .demo-nav {
        top: 0px;
        display: flex;
        justify-content: space-between;
        width: 80%;
        }
        
        .nav-link {
        padding: 2em;
        font-weight: 200;
        position: relative;
        width: 20%;
        transition: 
            background 300ms 0ms ease-in-out, 
            color 300ms ease-in-out;
        text-align: center;
        }
        .nav-link:hover, 
        .nav-link.active {
        font-weight: 600;
        }
        /* the current section nav link 
        takes it's style cue from the 
        class of its parent element  */
        
        .white .nav-link {
        color: #4baac8;
        }

        .white .nav-link:hover, 
        .white .demo-nav .nav-link.active {
        background: lightblue;
        color: white;
        }
        .lightblue .nav-link {
        color: white;
        }
        .lightblue .nav-link:hover, 
        .lightblue .nav-link.active {
        background: white;
        color: lightblue;
        }
        
        .demo-div-container {
        display: flex;
        height: 100%;
        width: 100vw;
        flex-direction: column;
        }
        
        .demo-section {
        height: calc(100vh - 3rem);
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1em;
        }
        .demo-section h1 {
        font-size: 8vmax;
        }
        .demo-section:nth-child(odd) {
        background: lightblue;
        }

        /* hide the menu button while 
        full menu is displayed */
        
        #burger-box {
        display: none;
        }

        /* Styling for smaller screen size */
        @media only screen and (max-width: 800px) {

        #burger-box {
            display: block;
            position: fixed;
            top: 1vmax;
            right: 1vmax;
            z-index: 100; 
        }

        .demo-super-nav {
            height: 0vh;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: scale(1, 0);
            transform-origin: top;
            transition: transform 300ms ease-in-out; 
        }

        .demo-super-nav.open {
            transform: scale(1, 1);
            height: 100vh; 
        }

        .demo-nav {
            display: flex;
            flex-direction: column;
            width: 100%; 
        }

        .nav-link {
            width: 100%; 
        } 
    }

        </code>
</pre>
`;


const scriptCode = `
<h1> the javascript </h1>
<pre class="language-javascript">
    <code class="language-javascript">

    const navLinks = document.querySelectorAll('.nav-link');
    const demoSuperNav = document.querySelector('.demo-super-nav');
    const burgerBox = document.querySelector("#burger-box");
    let open = false;

    const toggleActive = (target) => {
        const color = target.getAttribute("data-super-nav-color");
        const open = demoSuperNav.classList.contains("open") ? " open" : "";
        demoSuperNav.className = "demo-super-nav " + color + open;

        navLinks.forEach(link => link.classList.remove('active'));

        target.classList.add('active');
    };

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            toggleActive(e.target);
            demoSuperNav.classList.remove("open");
            burgerBox.innerText = "X";
            open = !open;
        }); 
    });

    burgerBox.addEventListener("click", (e) => {
        if (open){
            demoSuperNav.classList.remove("open");
            burgerBox.innerText = "menu";
        } else {
            demoSuperNav.classList.add("open");
            burgerBox.innerText = "X";
        }
        open = !open;
    });


    </code>
</pre>`;

    const hook = document.getElementById("effect-render-container");
    const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home';
    
    hook.innerHTML = '';
    collapsingDemoNav.render(hook);
    collapsingDemoNav.toggleActive(startingSect);
    collapsingDemoNav.activateListeners();
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
    

};

export default CollapsingMenu;