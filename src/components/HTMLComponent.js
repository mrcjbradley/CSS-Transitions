

export default class HTMLComponent {
    constructor(element, klass, content=''){
        this.element = element;
        this.klass = klass;
        this.content = content;
        return this.render();
    }
    
    render(){
        const newElem = document.createElement(this.element);
        newElem.classList.add(this.klass);
        newElem.innerText = this.content;
        return newElem;
    }
}