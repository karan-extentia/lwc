import { LightningElement } from "lwc";

export default class C2pParentComponent extends LightningElement {
  showModal = false;

  handleClick() {
    this.showModal = true;
  }

  handleClose(event) {
    let message = event.detail.message;
    console.log(message);
    this.showModal = false;
  }
}
