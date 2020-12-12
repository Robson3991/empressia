export default class Collapse {

    constructor(className = '') {
        this.className = className;
        if (!this.setVars()) return false;
        this.init();
    }

    setVars() {
        if(this.items = document.querySelectorAll('[data-collapse]')) return true;
        return true;
    }

    init() {
        this.items.forEach(item => {
            new CollapseWrapper(item, this.className);
        });
    }
}

class CollapseWrapper {
    constructor(collapse, className) {
        this.collapse = collapse;
        this.className = className;

        this.classActive = !!this.className ? `${this.className}--active` : 'active';
        if (!this.setVars()) return false;
        this.setEvents();        
    }

    setVars() {
        if(this.items = this.collapse.querySelectorAll('[data-collapse-item]')) return true;
    }

    setEvents() {
        this.items.forEach(item => {
            item.addEventListener('click', () => this.collapseItem(item))
        })
    }

    collapseItem(element) {
        this.items.forEach(item => {

            if(item == element) {
                element.classList.toggle(this.classActive);
                return false;
            }

            item.classList.remove(this.classActive);
        })

    }
}