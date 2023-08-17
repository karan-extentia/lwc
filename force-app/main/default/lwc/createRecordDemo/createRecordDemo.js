import { LightningElement } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CreateRecordDemo extends LightningElement {
  formFields = {};

  onChangeHandler(event) {
    const { name, value } = event.target;
    this.formFields[name] = value;
  }

  createContact() {
    const recordInput = {
      apiName: CONTACT_OBJECT.objectApiName,
      fields: this.formFields
    };
    createRecord(recordInput)
      .then((result) => {
        this.showToast("Success!!", `Contact created with Id - ${result.id}`);
        this.template.querySelector("form.createForm").reset();
        this.formFields = {};
      })
      .catch((error) => {
        this.showToast("Error creating a record", error.body, "error");
      });
  }

  showToast(title, message, variant) {
    this.dispatchEvent(
      new ShowToastEvent({
        title,
        message,
        variant: variant || "success"
      })
    );
  }
}
