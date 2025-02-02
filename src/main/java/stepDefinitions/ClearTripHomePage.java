package stepDefinitions;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ClearTripHomePage {
	public WebDriver driver;
	public String exResult;
	public String acResult;
	public String actual = "false";
	public String expected = "true";
	By fromCity = By.xpath("//input[@id='FromTag']");
	By destCity = By.xpath("//input[@id='ToTag']");
	By calIcon = By.xpath("//a[@class='calendarIcon']");
	By nextMonthArrow = By.xpath("//a[@class='nextMonth ']");
	By date = By.xpath("(//a[(@class='ui-state-default ')and(text()='1')])[1]");
	By search = By.xpath("//input[@id='SearchBtn']");
	By cityList = By.xpath("(//ul[@class='autoComplete']/li)[1]");
	By flightHomePage = By.xpath("//div[@class='sticky__parent']//span[text()='Airlines']");
	By duration = By.xpath("//span[text()='Duration']");
	By flightDuration = By.xpath("//div[@class='ms-grid-column-3 ms-grid-row-1']/p");
	String flightFare = "(//div[@class='flex flex-column pl-2 flex-bottom']/p)[*]";
	String Departure = "(//div[@class='ms-grid-column-1 ms-grid-row-1']/p)[*]";
	String book = "(//button[text()='Book'])[*]";
	By DDate = By.xpath("//input[@id='FromDate']");
	By journey = By.xpath("//div[@class='itinerary clearFix onwBlock']/h1");
	By journeyDate = By.xpath("//div[@class='itinerary clearFix onwBlock']/h1/small[@class='weak']");
	By journeyTime = By.xpath("//li[@class='start']//span[@class='placeTime']/strong");
	Boolean actualResult = true;public String source, destination, departDate, departFlightTime;

	@Given("^Open Chrome and start EaseMyTrip$")
	public void open_Chrome_and_start_EaseMyTrip() throws Throwable {
		Reporter.log("Method: Open Chrome and start EaseMyTrip");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-notifications");
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir") + "\\Chrome_Driver\\chromedriver.exe");
		driver = new ChromeDriver(options);
		Reporter.log(" \nChrome is opening");
		driver.manage().window().maximize();
		driver.get("https://www.cleartrip.com/");
		System.out.println(driver.getTitle());
		String title = "#1 Site for Booking Flights, Hotels, Packages, Trains & Local activities.";
		Boolean expectedResult;
		if (driver.getTitle().contains(title)) {
			Reporter.log(" \nPage Titile is as expected");
			expectedResult = true;
			Assert.assertEquals(actualResult, expectedResult);
		}
	}

	@Given("^Open Firefox and start EaseMyTrip$")
	public void open_Firefox_and_start_EaseMyTrip() throws Throwable {
		Reporter.log("Method: Open Firefox and start EaseMyTrip");
		FirefoxOptions options = new FirefoxOptions();
		options.setProfile(new FirefoxProfile());
		options.addPreference("dom.webnotifications.enabled", false);

		System.setProperty("webdriver.gecko.driver",
				System.getProperty("user.dir") + "\\Gecko_Driver\\geckodriver.exe");

		driver = new FirefoxDriver(options);
		Reporter.log(" \nFire Fox opening");
		driver.manage().window().maximize();
		driver.get("https://www.cleartrip.com/");
		String title = "#1 Site for Booking Flights, Hotels, Packages, Trains & Local activities.";
		Boolean expectedResult;
		if (driver.getTitle().contains(title)) {
			Reporter.log(" \nPage Titile is as expected");
			expectedResult = true;
			Assert.assertEquals(actualResult, expectedResult);
		}

	}

	

	@When("^user enter source \"([^\"]*)\" and destination \"([^\"]*)\" and Departure date$")
	public void user_enter_source_and_destination_and_Departure_date(String src, String dest) throws Throwable {
		Reporter.log("  \n Method : user_enter_source_and_destination_and_Departure_date");
		Actions act = new Actions(driver);
		WebDriverWait wait = new WebDriverWait(driver, 30);
		source = src;
		destination = dest;
		//wait.until(ExpectedConditions.visibilityOfElementLocated(fromCity));
		Thread.sleep(4000);
		driver.findElement(fromCity).sendKeys(src);
		Thread.sleep(5000);
		act.sendKeys(Keys.ENTER).build().perform();
		Reporter.log("Scurce City :" + src);

		// driver.findElement(destCity).clear();
		driver.findElement(destCity).sendKeys(dest);
		Thread.sleep(5000);
		act.sendKeys(Keys.ENTER).build().perform();
		Reporter.log("Destination City :" + dest);

		Thread.sleep(3000);
		driver.findElement(nextMonthArrow).click();
		driver.findElement(nextMonthArrow).click();
		driver.findElement(date).click();
		departDate = driver.findElement(DDate).getAttribute("Value").toString();
		Reporter.log("Departure Date :" + departDate);
	}

	@Then("^user click on Search button$")
	public void user_click_on_Search_button() throws Throwable {
		Reporter.log("Method:user_click_on_Search_button");
		driver.findElement(search).click();
		Reporter.log("user clicked on Search button");
	}

	@Then("^validate user is in FLightbooking page$")
	public void validate_user_is_in_FLightbooking_page() throws Throwable {
		Reporter.log("Method: validate_user_is_in_FLightbooking_page");
		WebDriverWait wait = new WebDriverWait(driver, 30);
		//wait.until(ExpectedConditions.visibilityOfElementLocated(flightHomePage));
		Boolean expectedResult = false;
		if (driver.findElement(flightHomePage).isDisplayed()) {
			Reporter.log("User in on Flight Booking Page");
			expectedResult = true;
			// assertion.assertAll();
		}
		Assert.assertEquals(actualResult, expectedResult);
	}

	@Then("^book fastest and cheapest flight$")
	public void book_fastest_and_cheapest_flight() throws Throwable {
		Reporter.log(" \n book fastest and cheapest flight");
		int minTime = 0, minFare = 0;
		int timeVal = 0, Fare = 0;
		driver.findElement(duration).click();
		List<WebElement> ele = new ArrayList<WebElement>();
		List<WebElement> ele2 = new ArrayList<WebElement>();
		ele = driver.findElements(flightDuration);

		// finding fastest flight
		for (int i = 0; i < ele.size(); i++) {
			String[] time = ele.get(i).getText().replaceAll("[A-Za-z]", "").split(" ");
			if (i < 1) {
				minTime = (Integer.parseInt(time[0]) * 60) + (Integer.parseInt(time[1]));
				By flightFareFinal = By.xpath(flightFare.replace("*", String.valueOf((i + 1))));
				minFare = Integer
						.parseInt(driver.findElement(flightFareFinal).getText().replace("₹", "").replace(",", ""));
				ele2.add(ele.get(i));
			} else {
				timeVal = (Integer.parseInt(time[0]) * 60) + (Integer.parseInt(time[1]));
				By flightFareFinal = By.xpath(flightFare.replace("*", String.valueOf((i + 1))));
				Fare = Integer
						.parseInt(driver.findElement(flightFareFinal).getText().replace("₹", "").replace(",", ""));

			}
			if (i > 0) {
				if (minTime < timeVal) {
					break;
				} else {
					if (minFare < Fare) {
						break;
					} else {
						ele2.add(ele.get(i));
					}
				}

			}
		}

		Boolean flag = false;
		// finding evening flight
		if (ele2.size() > 1) {
			for (int i = 0; i < ele2.size(); i++) {
				By flightDepart = By.xpath(Departure.replace("*", String.valueOf((i + 1))));
				String[] depart = (driver.findElement(flightDepart).getText().split(":"));
				int departTime = Integer.parseInt(depart[0]);
				if (departTime >= 16 && departTime <= 20) {
					departFlightTime = String.valueOf(departTime);
					Reporter.log("Fight going to book of time : " + departFlightTime);
					By bookButton = By.xpath(book.replace("*", String.valueOf((i + 1))));
					driver.findElement(bookButton).click();
					flag = true;
					break;
				}
			}
		}
		if (!flag) {
			By flightDepart = By.xpath(Departure.replace("*", String.valueOf(1)));
			String[] depart = (driver.findElement(flightDepart).getText().split(":"));
			int departTime = Integer.parseInt(depart[0]);
			departFlightTime = String.valueOf(departTime);
			Reporter.log("Fight going to book of time : " + departFlightTime);
			By bookButton = By.xpath(book.replace("*", String.valueOf(1)));
			driver.findElement(bookButton).click();
		}

	}

	@Given("^validate right flight is selected for booking$")
	public void validate_right_flight_is_selected_for_booking() throws Throwable {
		Reporter.log("validate right flight is selected for booking");
		ArrayList<String> tabs2 = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs2.get(1));
		Reporter.log("Tab Change");
		WebDriverWait wait = new WebDriverWait(driver, 30);
		//wait.until(ExpectedConditions.visibilityOfElementLocated(journey));

		String DpartPlace = driver.findElement(journey).getText().toLowerCase();
		Reporter.log("Journey Route : "+ DpartPlace.trim());
		String DpartDate = driver.findElement(journeyDate).getText().trim();
		Reporter.log("Journey Date : "+ DpartDate);
		String DpartTime = driver.findElement(journeyTime).getText().trim();
		Reporter.log("Journey Time : "+ DpartTime);
		String[] jdate = departDate.split("/");
		Boolean expectedResult = false;
		/*check right flight is booked or not*/
		if (DpartPlace.contains(source.toLowerCase()) && DpartPlace.contains(destination.toLowerCase())) {
			if (DpartDate.contains(jdate[0]) && DpartDate.contains(jdate[2])&&DpartTime.contains(departFlightTime)) {
				expectedResult = true;
				Assert.assertEquals(actualResult, expectedResult);
				Reporter.log("Test Case Run Successfully");
			}
		} else {
			Assert.assertFalse(false);
			Reporter.log("Test Case Failed");
		}
		driver.quit();
	}
}
