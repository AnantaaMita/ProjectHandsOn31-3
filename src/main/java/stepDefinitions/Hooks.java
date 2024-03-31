package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Reporter;
import org.testng.annotations.BeforeClass;

public class Hooks {
	public WebDriver driver;
	@BeforeClass
	public void setUp() {
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir") + "\\Chrome_Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		Reporter.log(" \nChrome is opening");
		driver.manage().window().maximize();
		
	}

}
