$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Parallel.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Search",
  "description": "",
  "id": "flight-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 21,
  "name": "BDD Cucumber Assignment",
  "description": "",
  "id": "flight-search;bdd-cucumber-assignment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@hashedin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Open Chrome and open Url \"https://www.saucedemo.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user enter loginId \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "validate user is in Products page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "find the \"Most\" Expensive product",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "validate price is lessthan \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Validate Remove button is enable and remove the item",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click on Cart Button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "click Continue Shopping",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "find the \"Least\" Expensive product",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "click Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Validate Cart value increased",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "click on Cart Button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "validate Item count is same as Cart value",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "click on Checkout button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "validate user is in Checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User provide Firstname \"Anantaa\" Lastname \"Mitra\" Zip \"70014\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on Continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "validate user is in Checkout Overview page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Validate Total amount is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "click on Finish button",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "validate success messege is displaying",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 26
    }
  ],
  "location": "HashedinAddToCartPage.open_Chrome_and_open_Url(String)"
});
formatter.result({
  "duration": 46895292208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 20
    },
    {
      "val": "secret_sauce",
      "offset": 49
    }
  ],
  "location": "HashedinAddToCartPage.user_enter_loginId_and_password(String,String)"
});
formatter.result({
  "duration": 610654417,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.user_click_on_Login_button()"
});
formatter.result({
  "duration": 420510000,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_user_is_in_Products_page()"
});
formatter.result({
  "duration": 15709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Most",
      "offset": 10
    }
  ],
  "location": "HashedinAddToCartPage.find_the_Expensive_product(String)"
});
formatter.result({
  "duration": 138083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 28
    }
  ],
  "location": "HashedinAddToCartPage.validate_price_is_lessthan(String)"
});
formatter.result({
  "duration": 32291,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_Add_to_Cart()"
});
formatter.result({
  "duration": 14083,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_Remove_button_is_enable_and_remove_the_item()"
});
formatter.result({
  "duration": 10708,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_Add_to_Cart()"
});
formatter.result({
  "duration": 10916,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_on_Cart_Button()"
});
formatter.result({
  "duration": 12083,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_Continue_Shopping()"
});
formatter.result({
  "duration": 21875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Least",
      "offset": 10
    }
  ],
  "location": "HashedinAddToCartPage.find_the_Expensive_product(String)"
});
formatter.result({
  "duration": 41041,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_Add_to_Cart()"
});
formatter.result({
  "duration": 7500,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_Cart_value_increased()"
});
formatter.result({
  "duration": 93708,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_on_Cart_Button()"
});
formatter.result({
  "duration": 5834,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_Item_count_is_same_as_Cart_value()"
});
formatter.result({
  "duration": 21042,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_on_Checkout_button()"
});
formatter.result({
  "duration": 10584,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_user_is_in_Checkout_page()"
});
formatter.result({
  "duration": 9250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anantaa",
      "offset": 24
    },
    {
      "val": "Mitra",
      "offset": 43
    },
    {
      "val": "70014",
      "offset": 55
    }
  ],
  "location": "HashedinAddToCartPage.user_provide_Firstname_Lastname_Zip(String,String,String)"
});
formatter.result({
  "duration": 276666,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_on_Continue_button()"
});
formatter.result({
  "duration": 6625,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_user_is_in_Checkout_Overview_page()"
});
formatter.result({
  "duration": 42792,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_Total_amount_is_displayed()"
});
formatter.result({
  "duration": 10083,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_on_Finish_button()"
});
formatter.result({
  "duration": 7375,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_success_messege_is_displaying()"
});
formatter.result({
  "duration": 5750,
  "status": "passed"
});
});