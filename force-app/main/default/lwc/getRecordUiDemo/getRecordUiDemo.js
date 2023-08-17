import { getRecordUi } from "lightning/uiRecordApi";
import { LightningElement, api, wire } from "lwc";

export default class GetRecordUiDemo extends LightningElement {
  @api recordId;
  recordUiData;

  @wire(getRecordUi, {
    recordIds: "$recordId",
    layoutTypes: "Full",
    modes: "Edit"
  })
  accountRecordUiHandler({ data, error }) {
    if (data) {
      console.log("getRecordUi data - ", data);
      this.recordUiData = Object.values(data.records);
    }
    if (error) {
      console.log("getRecordUi error - ", error);
    }
  }
}
