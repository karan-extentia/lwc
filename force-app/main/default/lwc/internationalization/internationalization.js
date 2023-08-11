import { LightningElement } from "lwc";
import internationalizationPropertyName from "@salesforce/i18n/internationalizationProperty";
import LOCALE from "@salesforce/i18n/locale";
import CURRENCY from "@salesforce/i18n/currency";

export default class Internationalization extends LightningElement {
  number = 4234223.45;
  formattedNumber = new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency: CURRENCY,
    currencyDisplay: "symbol"
  }).format(this.number);
}
