import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {
    constructor() {
        super();
        console.log('child constructor called');
    }

    connectedCallback() {
        console.log('child connectedCallback called');
        throw new Error('loading of child component failed');
    }

    renderedCallback() {
        console.log('child renderedCallback called');
    }

    disconnectedCallback() {
        // eslint-disable-next-line no-alert
        alert('child disconnectedCallback called');
    }
}
