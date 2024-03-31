package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Reporter;

import MyRunner.HashedinTestRunner;
import cucumber.api.java.en.*;

public class HashedinAddToCartPage extends HashedinTestRunner {
	By LoginID = By.xpath("//input[@id='user-name']");
	By Password = By.xpath("//input[@id='password']");
	By LoginButton = By.xpath("//input[@id='login-button']");
	public WebDriver driver;
		@Given("^Open Chrome and open Url \"([^\"]*)\"$")
		public void open_Chrome_and_open_Url(String URL) throws Throwable {
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir") + "\\Chrome_Driver\\chromedriver.exe");
			driver = new ChromeDriver();
			Reporter.log(" \nChrome is opening");
			driver.manage().window().maximize();
			driver.get(URL);
		}

		@When("^user enter loginId \"([^\"]*)\" and password \"([^\"]*)\"$")
		public void user_enter_loginId_and_password(String id, String password) throws Throwable {
		    driver.findElement(LoginID).sendKeys(id);
		    driver.findElement(Password).sendKeys(password);
		}

		@Then("^user click on Login button$")
		public void user_click_on_Login_button() throws Throwable {
			 driver.findElement(LoginButton).click();
		}

		@Then("^validate user is in Products page$")
		public void validate_user_is_in_Products_page() throws Throwable {
		    
		}

		@Then("^find the \"([^\"]*)\" Expensive product$")
		public void find_the_Expensive_product(String arg1) throws Throwable {
		    
		}

		@Then("^validate price is lessthan \"([^\"]*)\"$")
		public void validate_price_is_lessthan(String arg1) throws Throwable {
		    
		}

		@Then("^click Add to Cart$")
		public void click_Add_to_Cart() throws Throwable {
		    
		}

		@Then("^Validate Remove button is enable and remove the item$")
		public void validate_Remove_button_is_enable_and_remove_the_item() throws Throwable {
		  
		}

		@Then("^click on Cart Button$")
		public void click_on_Cart_Button() throws Throwable {
		   
		}

		@Then("^click Continue Shopping$")
		public void click_Continue_Shopping() throws Throwable {
		    
		}

		@Then("^Validate Cart value increased$")
		public void validate_Cart_value_increased() throws Throwable {
		    
		}

		@Then("^validate Item count is same as Cart value$")
		public void validate_Item_count_is_same_as_Cart_value() throws Throwable {
		    
		}

		@Then("^click on Checkout button$")
		public void click_on_Checkout_button() throws Throwable {
		    
		}

		@Then("^validate user is in Checkout page$")
		public void validate_user_is_in_Checkout_page() throws Throwable {
		   
		}

		@Then("^User provide Firstname \"([^\"]*)\" Lastname \"([^\"]*)\" Zip \"([^\"]*)\"$")
		public void user_provide_Firstname_Lastname_Zip(String arg1, String arg2, String arg3) throws Throwable {
		    
		}

		@Then("^click on Continue button$")
		public void click_on_Continue_button() throws Throwable {
		   
		}

		@Then("^validate user is in Checkout Overview page$")
		public void validate_user_is_in_Checkout_Overview_page() throws Throwable {
		    
		}

		@Then("^Validate Total amount is displayed$")
		public void validate_Total_amount_is_displayed() throws Throwable {
		    
		}

		@Then("^click on Finish button$")
		public void click_on_Finish_button() throws Throwable {
		   
		}

		@Then("^validate success messege is displaying$")
		public void validate_success_messege_is_displaying() throws Throwable {
		   
		}

}
