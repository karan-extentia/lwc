import { LightningElement, api } from "lwc";

export default class LwcAuraCommunication extends LightningElement {
  @api title;

  callAura() {
    const event = new CustomEvent("sendmsg", {
      detail: {
        msg: "this data is passed from lwc to aura"
      }
    });
    this.dispatchEvent(event);
  }
}
