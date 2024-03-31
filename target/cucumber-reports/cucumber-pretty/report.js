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
  "line": 5,
  "name": "Open Chrome and start EaseMyTrip",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter source \"Kolkata\" and destination \"Pune\" and Departure date",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on Search button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate user is in FLightbooking page",
  "keyword": "And "
});
formatter.step({
  "line": 9,{
  "line": 26,
  "name": "find the \"Most\" Expensive product",
  "k);
formatter.step({
  "line": 10,
  {
  "line": 27,
  "name": "validate price is lessthan \"100\"",
  "keyword": "Andformatter.match({
  "location": "ClearTripHomePage.open_Chrome_and_start_EaseMyTrip()"
});
formatter.result({
  "duration": 34421797700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kolkata",
      "offset": 19
    },
    {
      "val": "Pune",
      "offset": 45
    }
  ],
  "location": "ClearTripHomePage.user_enter_source_and_destination_and_Departure_date(String,String)"
});
formatter.result({
  "duration": 6863976100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027FromTag\u0027]\"}\n  (Session info: chrome\u003d123.0.6312.86)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00274.0.0-alpha-1\u0027, revision: \u0027d1d3728cae\u0027, time: \u00272019-04-24T13:42:21\u0027\nSystem info: host: \u0027DESKTOP-ODQ4RN5\u0027, ip: \u0027192.168.1.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_302\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 123.0.6312.86, chrome: {chromedriverVersion: 123.0.6312.86 (9b72c47a0536..., userDataDir: C:\\Users\\Anantaa\\AppData\\Lo...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50923}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 15287424ba66264d1a79d9f7a0f0f5aa\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027FromTag\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:190)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:124)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:577)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:328)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:446)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:320)\r\n\tat stepDefinitions.ClearTripHomePage.user_enter_source_and_destination_and_Departure_date(ClearTripHomePage.java:107)\r\n\tat ✽.When user enter source \"Kolkata\" and destination \"Pune\" and Departure date(Parallel.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ClearTripHomePage.user_click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClearTripHomePage.validate_user_is_in_FLightbooking_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClearTripHomePage.book_fastest_and_cheapest_flight()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ClearTripHomePage.validate_right_flight_is_selected_for_booking()"
});
formatter.result({
  "status": "skipped"
});
});{
  "location": "HashedinAddToCartPage.click_Add_to_Cart()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_Cart_value_increased()"
});
formatter.result({
  "duration": 34800,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_on_Cart_Button()"
});
formatter.result({
  "duration": 19900,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_Item_count_is_same_as_Cart_value()"
});
formatter.result({
  "duration": 25500,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_on_Checkout_button()"
});
formatter.result({
  "duration": 26500,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_user_is_in_Checkout_page()"
});
formatter.result({
  "duration": 26400,
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
  "duration": 115400,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_on_Continue_button()"
});
formatter.result({
  "duration": 171000,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_user_is_in_Checkout_Overview_page()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_Total_amount_is_displayed()"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.click_on_Finish_button()"
});
formatter.result({
  "duration": 30500,
  "status": "passed"
});
formatter.match({
  "location": "HashedinAddToCartPage.validate_success_messege_is_displaying()"
});
formatter.result({
  "duration": 37300,
  "status": "passed"
});
});