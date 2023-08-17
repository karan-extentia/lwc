import { LightningElement, wire } from "lwc";
import {
  getPicklistValuesByRecordType,
  getObjectInfo
} from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {
  ratingOptions;
  selectedRating;
  industryOptions;
  selectedIndustry;

  @wire(getObjectInfo, {
    objectApiName: ACCOUNT_OBJECT
  })
  objectInfo;

  @wire(getPicklistValuesByRecordType, {
    objectApiName: ACCOUNT_OBJECT,
    recordTypeId: "$objectInfo.data.defaultRecordTypeId"
  })
  picklistHandler({ data, error }) {
    if (data) {
      console.log("getPicklistValuesByRecordType data - ", data);
      this.ratingOptions = this.picklistGenerator(
        data.picklistFieldValues.Rating
      );
      this.industryOptions = this.picklistGenerator(
        data.picklistFieldValues.Industry
      );
    }
    if (error) {
      console.log("getPicklistValuesByRecordType error - error", error);
    }
  }

  picklistGenerator(data) {
    return data.values.map((item) => ({
      label: item.label,
      value: item.value
    }));
  }

  handleChangeRating(event) {
    this.selectedRating = event.detail.value;
  }
  handleChangeIndustry(event) {
    this.selectedIndustry = event.detail.value;
  }
}
