import { LightningElement } from "lwc";
import hasViewAllData from "@salesforce/userPermission/ViewAllData";

export default class CheckPermission extends LightningElement {
  get hasViewAllDataAvailable() {
    return hasViewAllData;
  }
}
