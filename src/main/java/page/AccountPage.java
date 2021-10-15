package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountPage extends TestBaseTF {

	WebDriver driver;

	public AccountPage(WebDriver driver) {
		this.driver = driver;
	}

//	// Element Library
	@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")
	WebElement Title;
	@FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")
	WebElement Description;
	@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
	WebElement Balance;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")
	WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")     
	WebElement PhoneNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")     
	WebElement InternetURL;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement SubmitButton;
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]")
	WebElement SuccessMessage;
	

	public String getMessage() {
		return SuccessMessage.getText();		
	}
	
	
	public void enterInternetURL(String url) {
		InternetURL.sendKeys(url);
	}
	
//	@FindBy(how = How.XPATH, using = )
//	@FindBy(how = How.XPATH, using = )
//			

// Methods to interact with the elements
	public void enterTitle(String title) {
		// this.Title.sendKeys(title);
		Title.sendKeys(title);

	}

	public void enterDescription(String description) {
		Description.sendKeys(description);

	}

	public void enterBalance(String balance) {
		Balance.sendKeys(balance);
	}

	public void enterAccountNumber(String number) {
		AccountNumber.sendKeys(number);
	}

	public void enterContactPerson(String person) {
		ContactPerson.sendKeys(person);

	}

	public String getPageTitle() {
		return driver.getTitle();
	}

	public void enterPhoneNumber(String number) {
		PhoneNumber.sendKeys(number);

	}

	public void clickSubmitButton() {
		SubmitButton.click();
		
	}
}
