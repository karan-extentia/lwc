import { LightningElement } from "lwc";

export default class C2pModalComponent extends LightningElement {
  handleModalClose() {
    const modalCloseEvent = new CustomEvent("close");
    this.dispatchEvent(modalCloseEvent);
  }
}
