class content {
    constructor(elementType, {klass = 'test' , id = "", content = ""}){
        this.klass = klass ? klass : undefined;
        this.id = id ? id : "";
        this.content = content ? content : "";
        this.element = document.createElement(elementType);
        this.element.className = klass;
        this.element.setAttribute('id', id);
        this.element.append(content);

        this.addClass = this.addClass.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
        this.append = this.append.bind(this);
        this.addAttr = this.addAttr.bind(this);
        this.addData = this.addData.bind(this);
    }

    addClass(...klassList){
        // debugger
        klassList.forEach(klass => this.element.classList.add(klass));
    }

    removeClass(klass){
        this.element.classList.remove(klass);
    }

    toggleClass(klass, klass2){
        if (this.element.classList.contains(klass)){
            this.element.classList.remove(klass);
            this.element.classList.add(klass2 ? klass2 : "");
        } else {
            this.element.classList.add(klass);
            this.element.classList.remove(klass2);
        }
    }

    append(innerContent){
        // debugger
        if (Array.isArray(innerContent)){
            innerContent.forEach(inner => {
                this.element.append(inner.constructor === content ? inner.element : inner);
            });
        } else {
            this.element.append(innerContent.constructor === content ? innerContent.element : innerContent);
        }
    }
    
    addAttr(type, detail){
        this.element.setAttribute( type, detail);
    }

    addData(type, detail){
        this.addAttr(`data-${type}`, detail);
    }

} 

export default content;