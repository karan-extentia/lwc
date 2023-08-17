import {
  getRecord,
  getFieldValue,
  getFieldDisplayValue
} from "lightning/uiRecordApi";
import { LightningElement, api, wire } from "lwc";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import OWNER_FIELD from "@salesforce/schema/Account.Owner.Name";
import ANNUAL_REVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";
export default class GetFieldValueDemo extends LightningElement {
  @api recordId;
  accountName;
  accountOwner;
  accountAnnualRevenue;

  @wire(getRecord, {
    // recordId: "$recordId",
    recordId: "0015j000017XCRWAA4",
    fields: [NAME_FIELD, OWNER_FIELD, ANNUAL_REVENUE_FIELD]
  })
  accountHandler({ data, error }) {
    if (data) {
      console.log("getRecord data - ", data);
      this.accountName = getFieldValue(data, NAME_FIELD);
      this.accountOwner = getFieldValue(data, OWNER_FIELD);
      this.accountAnnualRevenue = getFieldDisplayValue(
        data,
        ANNUAL_REVENUE_FIELD
      );
    } else {
      console.log("getRecord error - ", error);
    }
  }
}
