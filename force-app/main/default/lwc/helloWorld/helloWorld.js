import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = 'Karan Tondare';
    title = 'Salesforce Developer';
    @track address = {
        city: 'Pune',
        pinCode: 411061,
        state: 'Maharashtra'
    }

    updateTitle(event) {
        this.title = event.target.value;
    }

    handleAddressChange(event) {
        this.address.city = event.target.value;
    }
}
