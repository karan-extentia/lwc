import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToVfPage extends NavigationMixin(
  LightningElement
) {
  navigateToVFPage() {
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: "/apex/navigateVfPage"
      }
    }).then((generatedUrl) => window.open(generatedUrl, "_blank"));
  }
}
