import { LightningElement, wire } from "lwc";
import Id from "@salesforce/user/Id";
import { getRecord } from "lightning/uiRecordApi";
import NAME_FIELD from "@salesforce/schema/User.Name";
import EMAIL_FIELD from "@salesforce/schema/User.Email";

export default class WireDemoUserDetail extends LightningElement {
  userDetails;
  userId = Id;
  // 0055j0000087otcAAA

  //   @wire(adapter, {adapterConfig})
  //   property or function

  @wire(getRecord, {
    recordId: "0055j0000087otcAAA",
    fields: [NAME_FIELD, EMAIL_FIELD]
  })
  userDetailHandler({ data, error }) {
    console.log("response - ", data);
    if (data) {
      this.userDetails = data.fields;
    }

    if (error) {
      console.log(error);
    }
  }

  @wire(getRecord, {
    recordId: "0055j0000087otcAAA",
    fields: [NAME_FIELD, EMAIL_FIELD]
  })
  userDetailProperty;
}
