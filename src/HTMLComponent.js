const div = 'div';
const h1 = 'h1';
const h2 = 'h2';
const h3 = 'h3';
const span = 'span';
const aside = 'aside';

const htmlElemStore = {
    1: {
        element: h1,
        cssClass: 'test',
        jsClass: 'js-test',
        content: 'this is a test',
        dataVar: 'h1-1',
        children: null
    },
    2: {
        
    }
};

class HTMLComponent {
    constructor({element, cssClass, jsClass, content, dataVar, children}){
        this.element = element;
        this.cssClass = cssClass;
        this.content = content ? content : '' ;
        this.jsClass = jsClass;
        this.dataVar = dataVar;
        this.children = children;
    }
    
    render(){
        const newElem = document.createElement(this.element);
        if (typeof this.cssClass !== 'string') {
            this.cssClass.forEach(klass => newElem.classList.add(klass));
        } else {
            newElem.classList.add(this.cssClass);
        }
        if (typeof this.jsClass !== 'string') {
            this.jsClass.forEach(klass => newElem.classList.add(klass));
        } else {
            newElem.classList.add(this.jsClass);
        }
        newElem.innerHTML = this.content;
        if (this.children) {this.children.forEach(child => {
            newElem.append(new HTMLComponent(htmlElemStore[child]).render());
        });}
        return newElem;
    }
}