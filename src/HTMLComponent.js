class content {
    constructor( elementType, { klass = "" , id = "", content = "" }){
        this.klass = klass ? klass : undefined;
        this.id = id ? id : "";
        this.content = content ? content : "";
        this.element = document.createElement(elementType);
        this.element.className = klass;
        this.element.setAttribute('id', id);
        this.element.append(content);
    }

    addClass(...klassList){
        klassList.forEach(klass => this.element.classList.add(klass));
        return this;
    }

    removeClass(klass){
        this.element.classList.remove(klass);
        return this;
    }

    toggleClass(klass, klass2){
        if (this.element.classList.contains(klass)){
            this.element.classList.remove(klass);
            this.element.classList.add(klass2 ? klass2 : "");
        } else {
            this.element.classList.add(klass);
            this.element.classList.remove(klass2);
        }
        return this;
    }

    append(innerContent){
        if (Array.isArray(innerContent)){
            innerContent.forEach(inner => {
                this.element.append(inner.constructor === content ? inner.element : inner);
            });
        } else {
            this.element.append(innerContent.constructor === content ? innerContent.element : innerContent);
        }
        return this;
    }
    
    addAttr(type, detail){
        this.element.setAttribute( type, detail);
        return this;
    }

    addData(type, detail){
        this.addAttr(`data-${type}`, detail);
        return this;
    }

} 

export default content;