Feature:  Flight Search 

	@chrome
	Scenario: Flight Search From Chrome
		Given Open Chrome and start EaseMyTrip
		When user enter source "Kolkata" and destination "Pune" and Departure date
		Then user click on Search button
		And validate user is in FLightbooking page
		Then book fastest and cheapest flight 
		And validate right flight is selected for booking
		
		@firefox	 
	Scenario: Flight Search From FireFox
		Given Open Firefox and start EaseMyTrip
		When user enter source "Delhi" and destination "Pune" and Departure date
		Then user click on Search button
		And validate user is in FLightbooking page
		Then book fastest and cheapest flight 
		And validate right flight is selected for booking
		@hashedin
	Scenario: BDD Cucumber Assignment 
		Given Open Chrome and open Url "https://www.saucedemo.com/"
		When user enter loginId "standard_user" and password "secret_sauce"
		Then user click on Login button
		And validate user is in Products page
		Then find the "Most" Expensive product
		And validate price is lessthan "100" 
		And click Add to Cart
		Then Validate Remove button is enable and remove the item
		And click Add to Cart
		Then click on Cart Button
		Then click Continue Shopping
		Then find the "Least" Expensive product 
		And click Add to Cart
		Then Validate Cart value increased
		Then click on Cart Button
		And validate Item count is same as Cart value
		Then click on Checkout button
		And validate user is in Checkout page
		Then User provide Firstname "Anantaa" Lastname "Mitra" Zip "70014"
		Then click on Continue button
		And validate user is in Checkout Overview page
		And Validate Total amount is displayed
		Then click on Finish button
		And validate success messege is displaying
		
		