import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = 'Karan Tondare';
    title = 'Salesforce Developer';

    updateTitle(event) {
        this.title = event.target.value;
    }
}
