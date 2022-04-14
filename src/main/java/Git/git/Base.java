package resources;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Base {
	public Properties pro;
	FileInputStream fis;
	public static WebDriver driver;
	String browser;
	// ThreadLocal<WebDriver> driver = new ThreadLocal<WebDriver>();

	@Parameters({ "browser" })
	@BeforeClass
	public void ZparameterfromXML(String browser) {
		this.browser = browser;
	}

	@SuppressWarnings("deprecation")
	public WebDriver setUp() throws IOException {

		pro = new Properties();
		String path = System.getProperty("user.dir") + "\\src\\main\\java\\Resources\\PropFile.Properties";

		fis = new FileInputStream(path);
		pro.load(fis);
		System.out.println(browser + Thread.currentThread().getId());

		// String browser = pro.getProperty("browser");

		if (browser.contains("chrome")) {

			WebDriverManager.chromedriver().setup();

			ChromeOptions co = new ChromeOptions();

			if (browser.contains("headless")) {
				co.addArguments("headless");
			}
			driver = new ChromeDriver(co);
			// driver.set(driver1);
		} else if (browser.contains("edge")) {
			WebDriverManager.edgedriver().setup();
			EdgeOptions eo = new EdgeOptions();
			if (browser.contains("headless")) {
				eo.addArguments("headless");
			}

			driver = new EdgeDriver(eo);
			// driver.set(driver1);

		}

		else {

			System.out.println("Browser Not found");
		}
	
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
		driver.manage().window().maximize();
		return driver;
	}

	// ..........................................................................................//

	@AfterClass
	public void teardown() {
		driver.quit();
	}

	// --------------------------------------------------------------------------------------------//
	public String getScreenshot(String TestName, WebDriver driver) throws IOException {
		String timeStamp = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());// time stamp
		String repName = TestName+ "-" + timeStamp + ".png";

		String FilePath = System.getProperty("user.dir") + "//Reports//Screenshots//" + repName;

		TakesScreenshot ts = (TakesScreenshot) driver;
		File src = ts.getScreenshotAs(OutputType.FILE);

		FileUtils.copyFile(src, new File(FilePath));
		return FilePath;
	}

}