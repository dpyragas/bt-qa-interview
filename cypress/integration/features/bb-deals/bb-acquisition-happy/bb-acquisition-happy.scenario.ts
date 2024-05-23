import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";

import {
  visitBroadbandAcquisitionDealsPage,
} from "../../../../support/utils";
import {
  getCookiesPopup,
  getCookiesPopupAcceptButton,
} from "../../../../support/page-objects";

Given(
  "User visits Broadband Acquisition Deals Page",
  () => {
    visitBroadbandAcquisitionDealsPage();
  },
);

When("User waits for Cookie Popup", () => {
  getCookiesPopup().should("be.visible");
});

And("User accepts Cookies", () => {
  getCookiesPopupAcceptButton().should("be.visible").click();
});


