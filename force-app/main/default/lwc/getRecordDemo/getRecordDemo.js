import { LightningElement, api, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import OWNER_FIELD from "@salesforce/schema/Account.Owner.Name";
import ANNUAL_REVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";

export default class GetRecordDemo extends LightningElement {
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
      this.accountName = data.fields.Name.displayValue
        ? data.fields.Name.displayValue
        : data.fields.Name.value;
      this.accountOwner = data.fields.Owner.displayValue
        ? data.fields.Owner.displayValue
        : data.fields.Owner.value.apiName;
      this.accountAnnualRevenue = data.fields.AnnualRevenue.displayValue
        ? data.fields.AnnualRevenue.displayValue
        : data.fields.AnnualRevenue.value;
    } else {
      console.log("getRecord error - ", error);
    }
  }

  /*
    using layoutTypes instead of fields
    returns all the fields
   */
  //   @wire(getRecord, {
  //     recordId: "0015j000017XCRWAA4",
  //     layoutTypes: ["Full"],
  //     modes: ["View"]
  //   })
  //   accountHandler({ data, error }) {
  //     if (data) {
  //       console.log("getRecord data - ", data);
  //       this.accountName = data.fields.Name.displayValue
  //         ? data.fields.Name.displayValue
  //         : data.fields.Name.value;
  //       this.accountOwner = data.fields.Owner.displayValue
  //         ? data.fields.Owner.displayValue
  //         : data.fields.Owner.value.apiName;
  //       this.accountAnnualRevenue = data.fields.AnnualRevenue.displayValue
  //         ? data.fields.AnnualRevenue.displayValue
  //         : data.fields.AnnualRevenue.value;
  //     } else {
  //       console.log("getRecord error - ", error);
  //     }
  //   }
}
