import { LightningElement } from "lwc";
import CONTENT_ASSET from "@salesforce/contentAssetUrl/contentAssetFilesjs";

export default class ContentAssetFiles extends LightningElement {
  file = CONTENT_ASSET;
}
