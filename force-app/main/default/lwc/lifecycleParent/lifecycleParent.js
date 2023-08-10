import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {
    name;
    showChild = false;

    constructor() {
        super();
        console.log('parent constructor called');
    }

    connectedCallback() {
        console.log('parent connectedCallback called');
    }

    renderedCallback() {
        console.log('parent renderedCallback called');
    }

    changeHandler(event) {
        this.name = event.target.value;
    }

    handleClick() {
        this.showChild = !this.showChild;
    }

    errorCallback(error, stack) {
        console.log(error.message);
        console.log(stack);
    }
}
