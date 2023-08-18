import { LightningElement, api } from "lwc";

import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ID_FIELD from "@salesforce/schema/Account.Id";
import NAME_FIELD from "@salesforce/schema/Account.Name";

import { updateRecord } from "lightning/uiRecordApi";

export default class UpdateRecordDemo extends LightningElement {
  @api recordId;

  name;
  industry;
  rating;

  handleChange(event) {
    this.name = event.target.value;
  }

  handleClick() {
    const fields = {};

    fields[ID_FIELD.fieldApiName] = this.recordId;
    fields[NAME_FIELD.fieldApiName] = this.name;

    const recordInput = {
      fields: fields
    };

    updateRecord(recordInput).then((record) => {
      console.log(record);
    });
  }
}
