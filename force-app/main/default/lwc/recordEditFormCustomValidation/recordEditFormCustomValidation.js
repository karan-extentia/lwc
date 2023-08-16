import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class RecordEditFormCustomValidation extends LightningElement {
  objectName = ACCOUNT_OBJECT;
  inputValue = "";

  handleChange(event) {
    this.inputValue = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    const inputComponent = this.template.querySelector("lightning-input");
    const inputValue = inputComponent.value;

    if (!inputValue.includes("India")) {
      inputComponent.setCustomValidity("The account name must include 'India'");
    } else {
      inputComponent.setCustomValidity("");
      const fields = event.detail.fields;
      fields.Name = inputValue;
      this.template.querySelector("lightning-record-edit-form").submit(fields);
    }
    inputComponent.reportValidity();
  }

  successHandler(event) {
    const successToast = new ShowToastEvent({
      title: "Account Created Successfully.",
      message: "Record ID: " + event.detail.id,
      variant: "success"
    });
    this.dispatchEvent(successToast);
  }

  errorHandler(event) {
    const errorToast = new ShowToastEvent({
      title: "Error Occurred While Creating Account.",
      message: event.detail.message,
      variant: "error"
    });
    this.dispatchEvent(errorToast);
  }
}
