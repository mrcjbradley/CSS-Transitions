import MultiBoxMenu from './effects/MultiBoxMenu';
import './styles/app.scss';





document.addEventListener("DOMContentLoaded", () => {
    
    // window.HTMLComponent = HTMLComponent;
    // window.el = el;



    window.body = document.querySelector("body");
    
    const demo = document.getElementById('demo');
    const title = document.getElementsByClassName('js-title')[0];
    const aside = document.getElementsByClassName('js-aside')[0];
    const controlls = document.getElementsByClassName('js-controlls')[0];
    const contacts = document.getElementsByClassName('js-contacts')[0];

    MultiBoxMenu.render(demo);
    MultiBoxMenu.jsRecognize();

    const menuLis = Array.from(document.getElementsByClassName('js-menu-li'));
    const menuUl = menuLis[0].parentElement;


    
});





