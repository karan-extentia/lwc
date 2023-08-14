import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";

export default class NavigateToObjectPage extends NavigationMixin(
  LightningElement
) {
  navigateToNewRecord() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Contact",
        actionName: "new"
      }
    });
  }

  navigateToNewRecordWithDefaultValues() {
    const defaultValue = encodeDefaultFieldValues({
      FirstName: "Karan",
      LastName: "Tondare",
      LeadSource: "Other"
    });

    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Contact",
        actionName: "new"
      },
      state: {
        defaultFieldValues: defaultValue
      }
    });
  }
}
