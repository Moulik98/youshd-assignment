const puppeteer = require('puppeteer');


(async () => {
  const phNo = '9876543210';
  const countryName = 'india'
  const delay = (time) => {
      return new Promise(function (resolve) { setTimeout(resolve, time) });
  }

  const browser = await puppeteer.launch({ "headless": false});
  const page = await browser.newPage();
  await page.goto('http://app-staging.youshd.com/');

  // login & signup
  const loginButton = await page.$('button:contains("Login/Signup")')[0];
  await loginButton.click();
  await page.waitForNetworkIdle();
  const featureArticle = (await page.$("div[@title='United States: + 1']"))[0];
  await featureArticle.click();
  const country = (await page.$("input[@placeholder='search']"))[0];
  await country.type(countryName);
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  const mobile = (await page.$("input[@placeholder='+91 87778-63028']"))[0];
  await mobile.type(phNo);
  const cont = (await page.$("button[normalize-space()='Continue']"))[0];
  await cont.click();
  await page.waitForNetworkIdle()
  const digitOne = (await page.$("input[@aria-label='Please enter verification code. Digit 1']"))[0];
  await digitOne.click();
  await digitOne.type('1');
  const digitTwo = (await page.$("input[@aria-label='Digit 2']"))[0];
  await digitTwo.type('2');
  const digitThree = (await page.$("input[@aria-label='Digit 3']"))[0];
  await digitThree.type('3');
  const digitFour = (await page.$("input[@aria-label='Digit 4']"))[0];
  await digitFour.type('4');
  const digitFive = (await page.$("input[@aria-label='Digit 5']"))[0];
  await digitFive.type('5');
  const digitSix = (await page.$("input[@aria-label='Digit 6']"))[0];
  await digitSix.type('6');
  await page.waitForNetworkIdle();

  //social media account verification after login
  const cont1 = (await page.$("button[normalize-space()='Continue']"))[0];
  await cont1.click();
  await delay(1000);
  await cont1.click();
  await delay(1000);
  await cont1.click();
  await delay(1000);
  await cont1.click();
  await page.waitForNetworkIdle()

  // link the insta account 
  const insta = (await page.$x("//div[@class='social-bx cursor']"))[0];
  await insta.click();
  await page.waitForNetworkIdle()
  const cont2 = (await page.$x("//button[normalize-space()='Continue']"))[0];
  await cont2.click();
  // enter insta ac
  await page.waitForXPath("//input[contains(@name,'username')]", { visible: true })
  const user = (await page.$x("//input[contains(@name,'username')]"))[0];
  await user.type(userName);
  const pass = (await page.$x("//input[@name='password']"))[0];
  await pass.type(passWord);
  const login = (await page.$x("//div[contains(text(),'Log in')]"))[0];
  await login.click()
  // save insta information 
  await page.waitForXPath("//button[normalize-space()='Save information']", { visible: true })
  const detail = (await page.$x("//button[normalize-space()='Save information']"))[0];
  await detail.click()
  // allow youshd to take information from insta aacount
  await page.waitForXPath("//button[normalize-space()='Allow']", { visible: true })
  const acess = (await page.$x("//button[normalize-space()='Allow']"))[0];
  await acess.click()
  // skip for now part
  await page.waitForXPath("//button[normalize-space()='Skip for now']", { visible: true })
  const auth = (await page.$x("//button[normalize-space()='Skip for now']"))[0];
  await auth.click()
  // redirected to dashboard
  await page.waitForNavigation()
  await delay(10000);
  await browser.close();

  } catch (error) {
    console.log(error);
};

  
})();
