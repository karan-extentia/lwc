import { LightningElement } from "lwc";

export default class CustomLightningCard extends LightningElement {
  handleFooterChange() {
    const footerElement = this.template.querySelector("footer");
    if (footerElement) {
      footerElement.classList.remove("slds-hide");
    }
  }
}
