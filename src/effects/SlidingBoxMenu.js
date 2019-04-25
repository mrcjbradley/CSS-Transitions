
import demoNav from '../demoNav';
import buildDemoSections from '../buildDemoSections';

const SlidingBoxMenu = () => {
    const slidingDemoNav = new demoNav();
    const sections = new buildDemoSections("Sliding-Box Menu");
const markupCode = `
<h1> the html </h1>
<pre class="language-markup">
    <code class="language-markup">
        &lt;div class="demo-super-nav lightblue" &gt;
            &lt;div class="demo-nav" &gt;
                &lt;a class="nav-link" 
                    id="nav-link-section-1" 
                    href="#section-1"&gt;section-1&lt;/a&gt;
                &lt;a class="nav-link" 
                    id="nav-link-section-2" 
                    href="#section-2"&gt;section-2&lt;/a&gt;
                &lt;a class="nav-link" 
                    id="nav-link-section-3" 
                    href="#section-3"&gt;section-3&lt;/a&gt;
                &lt;a class="nav-link" 
                    id="nav-link-section-4" 
                    href="#section-4"&gt;section-4&lt;/a&gt;
                &lt;a class="nav-link" 
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
<h1>
    the css
</h1>
<pre class="language-css">
    <code class="language-css">
    .demo-super-nav {
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: -1; }
      .demo-super-nav.open {
        z-index: 100; }
    
    .nav-link {
      position: absolute;
      display: block;
      top: 0;
      font-family: boucherie-sans, sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 1.5em;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: 225ms ease-in-out both; }
      .nav-link:first-child {
        background: blue;
        right: 150px;
        top: 0%;
        width: calc(35% - 150px);
        height: 150px;
        animation-delay: 1125ms; }
      .nav-link:nth-child(2) {
        background: red;
        top: 150px;
        right: 0;
        width: 35%;
        height: calc(65vh - 150px);
        animation-delay: 900ms; }
      .nav-link:nth-child(3) {
        background: orange;
        right: 35%;
        height: 65%;
        width: 40%;
        animation-delay: 675ms; }
      .nav-link:nth-child(4) {
        background: pink;
        top: 65%;
        right: 0%;
        width: 75%;
        height: 35%;
        animation-delay: 450ms; }
      .nav-link:nth-child(5) {
        background: green;
        right: 75%;
        height: 100%;
        width: 25%;
        animation-delay: 500ms;
        animation-delay: 225ms; }
      .nav-link:nth-child(odd) {
        transform: scale(0, 1);
        transform-origin: right; }
      .nav-link:nth-child(even) {
        transform: scale(1, 0);
        transform-origin: top; }
      .nav-link::after {
        content: '';
        position: absolute;
        top: calc(50% + 0.5em);
        transform: scale(0, 1);
        width: 70%;
        border-top: 2px solid white;
        transition: all 300ms; }
    
    .demo-super-nav .nav-link:hover,
    .demo-super-nav .nav-link.active {
      font-size: 3em; }
      .demo-super-nav .nav-link:hover::after,
      .demo-super-nav .nav-link.active::after {
        transform: scale(1, 1); }
    
    .demo-super-nav .nav-link:nth-child(odd) {
      animation-name: fold-odd; }
    
    .demo-super-nav .nav-link:nth-child(even) {
      animation-name: fold-even; }
    
    .demo-super-nav.open .nav-link:nth-child(odd) {
      animation-name: unfold-odd; }
    
    .demo-super-nav.open .nav-link:nth-child(even) {
      animation-name: unfold-even; }
    
    .demo-super-nav.open .nav-link:first-child {
      animation-delay: 225ms; }
    
    .demo-super-nav.open .nav-link:nth-child(2) {
      animation-delay: 450ms; }
    
    .demo-super-nav.open .nav-link:nth-child(3) {
      animation-delay: 675ms; }
    
    .demo-super-nav.open .nav-link:nth-child(4) {
      animation-delay: 900ms; }
    
    .demo-super-nav.open .nav-link:nth-child(5) {
      animation-delay: 1125ms; }
    
    @keyframes unfold-odd {
      0% {
        transform: scale(0, 1); }
      100% {
        transform: scale(1, 1); } }
    
    @keyframes unfold-even {
      0% {
        transform: scale(1, 0); }
      100% {
        transform: scale(1, 1); } }
    
    @keyframes fold-odd {
      0% {
        transform: scale(1, 1); }
      100% {
        transform: scale(0, 1); } }
    
    @keyframes fold-even {
      0% {
        transform: scale(1, 1); }
      100% {
        transform: scale(1, 0); } }
    
    .demo-div-container {
      display: flex;
      height: 100%;
      width: 100vw;
      flex-direction: column; }
    
    #burger-box {
      position: fixed;
      background: brown;
      top: 0;
      right: 0;
      height: 150px;
      width: 150px;
      z-index: 100;
      font-family: boucherie-sans, sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 1.5em;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999; }
    
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
    
    hook.innerHTML = '';
    slidingDemoNav.render(hook);
    const startingSect = location.hash.length > 1 ? location.hash.slice(1) : 'home';
    slidingDemoNav.toggleActive(startingSect);
    sections.render(hook);
    slidingDemoNav.activateListeners();
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

export default SlidingBoxMenu;