import { deleteRecord } from "lightning/uiRecordApi";
import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class DeleteRecordDemo extends LightningElement {
  idToDelete;

  handleChange(event) {
    this.idToDelete = event.target.value;
  }

  showToast(title, message, variant) {
    this.dispatchEvent(
      new ShowToastEvent({
        title,
        message,
        variant
      })
    );
  }

  handleDelete() {
    deleteRecord(this.idToDelete)
      .then(() => {
        console.log("Account deleted successfully.");
        this.showToast("Success!!", "Account deleted successfully", "success");
        this.idToDelete = "";
      })
      .catch((error) => {
        console.log(error);
        this.showToast("Error!!", "Error Occurred", "error");
      });
  }
}
