import { LightningElement } from "lwc";

export default class C2pModalComponent extends LightningElement {
  handleModalClose() {
    const modalCloseEvent = new CustomEvent("close", {
      bubbles: true,
      detail: {
        message: "modal closed successfully"
      }
    });
    this.dispatchEvent(modalCloseEvent);
  }

  footerEvent() {
    console.log("footer event called");
  }
}
