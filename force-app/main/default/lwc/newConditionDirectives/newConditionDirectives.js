import { LightningElement } from 'lwc';

export default class NewConditionDirectives extends LightningElement {
    showText = false;
    country;

    get buttonLabel() {
        return this.showText ? 'Hide Text' : 'Show Text';
    }

    handleTextVisibility() {
        this.showText = !this.showText;
    }

    get isCountryAustralia() {
        return this.country === 'Australia';
    }
    get isCountryCanada() {
        return this.country === 'Canada';
    }

    handleTextUpdate(event) {
        this.country = event.target.value;
    }
}
