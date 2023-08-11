import { LightningElement } from "lwc";
import MOMENT from "@salesforce/resourceUrl/moment";
import ANIMATE from "@salesforce/resourceUrl/animate";
import { loadScript, loadStyle } from "lightning/platformResourceLoader";

export default class ThirdPartyFiles extends LightningElement {
  currentDate = "";
  isLibraryLoaded = false;

  renderedCallback() {
    if (!this.isLibraryLoaded) {
      // for multiple
      Promise.all([
        loadStyle(this, ANIMATE + "/animate/animate.min.css"),
        loadScript(this, MOMENT + "/moment/moment.min.js")
      ])
        .then(() => this.setDataOnScreen())
        .catch((error) => console.log(error));

      //   loadScript(this, MOMENT + "/moment/moment.min.js")
      //     .then(() => this.setDataOnScreen())
      //     .catch((error) => console.log(error));

      this.isLibraryLoaded = true;
    }
  }

  setDataOnScreen() {
    // eslint-disable-next-line no-undef
    this.currentDate = moment().format("LLLL");
  }
}
