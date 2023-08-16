import { LightningElement, wire } from "lwc";
import { getObjectInfo, getObjectInfos } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import OPPORTUNITY_OBJECT from "@salesforce/schema/Opportunity";

export default class GetObjectInfoDemo extends LightningElement {
  //   defaultRecordTypeId;

  //   @wire(getObjectInfo, {
  //     objectApiName: ACCOUNT_OBJECT
  //   })
  //   objectInfo({ data, error }) {
  //     if (data) {
  //       console.log("data = ", data);
  //       this.defaultRecordTypeId = data.defaultRecordTypeId;
  //     }
  //     if (error) {
  //       console.log("error = ", error);
  //     }
  //   }
  @wire(getObjectInfo, {
    objectApiName: ACCOUNT_OBJECT
  })
  objectInfo;

  //
  objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];
  objectInfos;
  @wire(getObjectInfos, {
    objectApiNames: "$objectApiNames"
  })
  objectInfosHandler({ data, error }) {
    if (data) {
      console.log("objectApiNames data = ", data);
      this.objectInfos = data;
    }
    if (error) {
      console.log("objectApiNames error = ", error);
    }
  }
}
