import { LightningElement } from "lwc";
import MOMENT from "@salesforce/resourceUrl/moment";
import { loadScript } from "lightning/platformResourceLoader";

export default class ThirdPartyFiles extends LightningElement {
  currentDate = "";
  isLibraryLoaded = false;

  renderedCallback() {
    if (!this.isLibraryLoaded) {
      // for multiple
      //   Promise.all([loadScript(this, MOMENT + "/moment/moment.min.js")])
      //     .then(() => this.setDataOnScreen())
      //     .catch((error) => console.log(error));

      loadScript(this, MOMENT + "/moment/moment.min.js")
        .then(() => this.setDataOnScreen())
        .catch((error) => console.log(error));
      this.isLibraryLoaded = true;
    }
  }

  setDataOnScreen() {
    // eslint-disable-next-line no-undef
    this.currentDate = moment().format("LLLL");
  }
}
