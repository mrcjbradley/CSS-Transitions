import HelloWorld from './components/HelloWorld';
import HTMLComponent from './components/HTMLComponent';
import './styles/app.scss';

const el = {
    div: 'div',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    span: 'span',
    aside: 'aside',
};

window.HTMLComponent = HTMLComponent;
window.el = el;

const demo = document.getElementById('demo');
const title = document.getElementsByClassName('js-title')[0];
const aside = document.getElementsByClassName('js-aside')[0];
const controlls = document.getElementsByClassName('js-controlls')[0];
const contacts = document.getElementsByClassName('js-contacts')[0];

