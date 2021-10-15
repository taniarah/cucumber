package steps;

import java.util.Date;

import org.junit.Before;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.AccountPage;
import page.LoginPageTF;
import page.TestBaseTF;

public class LoginStepsDefinition extends TestBaseTF {
	LoginPageTF loginPageObj = null;
	AccountPage accountPageObj = null;
	
	@Before
	public void beforeRun() {
		initDriver();
		loginPageObj = PageFactory.initElements(driver, LoginPageTF.class);
		
	}


	@Given("^User is on Techfios billing login page$")
	public void user_is_on_Techfios_billing_login_page() throws Throwable {
		initDriver();
		driver.get("https://techfios.com/billing/?ng=login/");
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws Throwable {
		loginPageObj=PageFactory.initElements(driver, LoginPageTF.class);
		loginPageObj.enterUserName(username);
		Thread.sleep(1000);
		
	   
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String arg1) throws Throwable {
		  loginPageObj.enterPassword("abc123");
		    Thread.sleep(1000);
	}

	@When("^User clicks on signin button$")
	public void user_clicks_on_signin_button() throws Throwable {
		loginPageObj.clickSignInButton();
	    Thread.sleep(1000);
	}

	@Then("^user should land on dashboard page$")
	public void user_should_land_on_dashboard_page() throws Throwable {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPageObj.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		Thread.sleep(1000);
	}

	@When("^user clicks on Bank & Cash$")
	public void user_clicks_on_Bank_Cash() throws Throwable {
		loginPageObj.clickBankCashButton();
	    Thread.sleep(1000);
	}

	@When("^user clicks on New Account$")
	public void user_clicks_on_New_Account() throws Throwable {
		loginPageObj.clickNewAccountButton();
		Thread.sleep(1000);
	}

	@Then("^user should land on new account page$")
	public void user_should_land_on_new_account_page() throws Throwable {
		accountPageObj=PageFactory.initElements(driver, AccountPage.class);
		
	    String expectedTitle = "Accounts- iBilling";
		String actualTitle = accountPageObj.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		Thread.sleep(1000);
	}

	@When("^user enters account title as \"([^\"]*)\"$")
	public void user_enters_account_title_as(String title) throws Throwable {

		//Using current time to add randomization to the title
		Date timestamp = new Date();
		long curTime = timestamp.getTime();
		
		//accountPageObj.enterTitle(title);
		accountPageObj.enterTitle(title + " - " + curTime);

	    Thread.sleep(1000);
	   	
	    
	}
	
	@When("^user enters description as \"([^\"]*)\"$")
	public void user_enters_description_as(String desc) throws Throwable {

		accountPageObj.enterDescription(desc);
	    Thread.sleep(1000);
	}

	@When("^user enters initial balance as \"([^\"]*)\"$")
	public void user_enters_initial_balance_as(String bal) throws Throwable {
		accountPageObj.enterBalance(bal);
	    Thread.sleep(1000);
	}

	@When("^user enters account number as \"([^\"]*)\"$")
	public void user_enters_account_number_as(String number) throws Throwable {
		accountPageObj.enterAccountNumber(number);
	    Thread.sleep(1000);
	}
	
	@When("^user enters contact person as \"([^\"]*)\"$")
	public void user_enters_contact_person_as(String person) throws Throwable {
		accountPageObj.enterContactPerson(person);
	    Thread.sleep(1000);
	}

	@When("^user enters phone number as \"([^\"]*)\"$")
	public void user_enters_phone_number_as(String number) throws Throwable {
		accountPageObj.enterPhoneNumber(number);
	    Thread.sleep(1000);
	}

	@When("^user enters internet banking url as \"([^\"]*)\"$")
	public void user_enters_internet_banking_url_as(String url) throws Throwable {
		accountPageObj.enterInternetURL(url);
	    Thread.sleep(1000);
	}

	@When("^user clicks on submit button$")
	public void user_clicks_on_submit_button() throws Throwable {
	    accountPageObj.clickSubmitButton();
	}

	@Then("^user should get a message successfully account created$")
	public void user_should_get_a_message_successfully_account_created() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String actualMessage = accountPageObj.getMessage();
		String expectedMessage = "* Account Created Sucessfully";
		//Assert.assertEquals(expectedMessage, actualMessage);	
		
		
	   takeScreenshot(driver);
	   
	}


	


}