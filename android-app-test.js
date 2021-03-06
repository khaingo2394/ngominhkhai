import 'babel-polyfill'
import 'colors'
import wd from 'wd'
import {assert} from 'chai'
import { WebDriver } from 'selenium-webdriver'
const waitingTime = 60000
const config = {
  protocol: 'http',
  host: '192.168.36.47',
  pathname: '/webdriver'
}


// const config = {
//   protocol: 'http',
//   host: '127.0.0.1:4723',  
// } 


const desiredCaps = {
  'gigafox:device': 'ec646ea5-6c9d-4f85-a915-1dad2f19b056',
  'gigafox:application': 'API Demos',
  'gigafox:username': 'admin',
  'gigafox:apiKey': 'f619219b-0de5-4e3b-a9f7-326bec843358',
  //'browser': '',
  'browserName': '',
  'gigafox:existingSession': 'delete'
}


// const desiredCaps = {
//   'platformName': 'Android',
//   'platformVersion': '10.0.0',
//   'deviceName': 'Samsung Galaxy S10+',
//   'automationName': 'Appium',
//   'app': 'https://s3-ap-southeast-1.amazonaws.com/kobiton-devvn/apps-test/ApiDemos-debug.apk',
//   'appPackage': 'io.appium.android.apis',
//   'appActivity': '.ApiDemos',
//   }

let driver


describe('Android App sample', () => {

  before(async () => {
    driver = wd.promiseChainRemote(config)

    driver.on('status', (info) => {
      console.log(info.cyan)
    })
    driver.on('command', (meth, path, data) => {
      console.log(' > ' + meth.yellow, path.grey, data || '')
    })
    driver.on('http', (meth, path, data) => {
      console.log(' > ' + meth.magenta, path, (data || '').grey)
    })

    try {
      await driver.init(desiredCaps)
    }
    catch (err) {
      if (err.data) {
        console.error(`init driver: ${err.data}`)
      }
    throw err
    }
  })

  it('should show the app label', async () => {
    console.error(`Run TC`)
    await driver 
    //driver.installApp('/Volumes/Macintosh\ HD\ -\ Data/ApiDemos-debug.apk')
    // .waitForElementByXPath("//android.widget.TextView[@content-desc='App']", waitingTime)
    //     .elementByXPath("//android.widget.TextView[@content-desc='App']")
        //.elementByAccessibilityId("App")
        .noop()
        .click()
        // .waitForElementByXPath("//android.widget.TextView[@content-desc='Activity']", waitingTime)
        // .elementByXPath("//android.widget.TextView[@content-desc='Activity']")
        // .click()
        // .elementByXPath("//android.widget.TextView[@content-desc='Intent Activity Flags']")
        // .flick(0, -700, 200)
        // .flick(0, -700, 200)
        // .elementByXPath("//android.widget.TextView[@content-desc='Soft Input Modes']")
        // .click()
        // .elementById('saved')
        // .click()
        // .isKeyboardShown()
        // .hideDeviceKeyboard()
        // .elementById('saved')
        // .click()
        // .clear()
        // .type('Tab')
        // .currentContext()
        // .contexts()
        // .context('NATIVE_APP')
        // .availableIMEEngines()
        // .activeIMEEngine()
        // //.deactivateIMEEngine()
        // .activeIMEEngine()
        // .elementByClassName('android.widget.TextView')
        // .elementByClassNameOrNull('android.widget.TextView')
        // .hideDeviceKeyboard()
        // .element('xpath', "//android.widget.TextView[@content-desc='Resize mode:']").then((ele) => {
        //   driver
        //   .isEnabled(ele)
        //   .isSelected(ele)
        //   .getAttribute(ele)
        // })
        // .elements('xpath', '//android.widget.TextView')
        // .sessions()
        // .sessionCapabilities()
        // .setCommandTimeout(waitingTime)
        // .setImplicitWaitTimeout(waitingTime)
        // .takeScreenshot()
        // .saveScreenshot('screenshot.png')
        // .back()
        // .back()
        // .back()
        // .sleep(2)
        // .execute('mobile: shell', {command: 'echo', args: ['hello']}) //appium --relaxed-security
        // .execute('mobile: shell', {command: 'echo', args: ['hello']}) //appium --relaxed-security
        // // eslint-disable-next-line babel/no-await-in-loop
        // //let hasEle = await driver.hasElementByXPath("//*[@content-desc='Accessibility']")
        // let hasEle = await driver.elementByAccessibilityId("Accessibility")
        // if (!hasEle) {
        //   await driver // eslint-disable-line babel/no-await-in-loop
        //     .back()
        //     //.waitForElementByXPath("//*[@content-desc='Accessibility']", waitingTime)
        //     .waitForElementByXPath("~Accessibility", waitingTime)
        // }
        // await driver // eslint-disable-line babel/no-await-in-loop
        //   .waitForElementByXPath("//*[@content-desc='Accessibility']", waitingTime)
        //   .elementByXPath("//*[@content-desc='Accessibility']").text()
        //   .elementByXPath("//*[@content-desc='Accessibility']")
        //   .click()
        //   // .elementByAccessibilityId("Accessibility").click
        //   .back()
        //   .source()
        //   .hasElementById('android:id/list')
        //   .elementById('android:id/list')
        //   .flick(0, -700, 200)
        //   .elementById('android:id/list')
        //   .flick(300, 700, 200)
        //   .getWindowSize()
        //   .waitForElementByXPath("//android.widget.TextView[@content-desc='Animation']", waitingTime)
        //   .click()
        //   .waitForElementByXPath("//android.widget.TextView[@content-desc='Bouncing Balls']",
        //   waitingTime)
        //   .click()
        //   .elementById('container')
        //   .flick(getRandomInt(1, 1000),
        //     getRandomInt(-200, 200), getRandomInt(100, 1000))
        //   .sleep(5)
        //   .flick(getRandomInt(-200, 200),
        //     getRandomInt(-1000, 0), getRandomInt(100, 1000))
        //   .back()
        //   .back()
        //   .waitForElementByXPath("//android.widget.TextView[@content-desc='Animation']")
        //   .flick(0, -700, 200)
        //   .waitForElementByXPath("//android.widget.TextView[@content-desc='Views']")
        //   .click()
        //   .element('xpath', "//android.widget.TextView[@content-desc='Controls']")
        //   .flick(0, -700, 200)
        //   .flick(0, -700, 200)
        //   .waitForElementByXPath("//android.widget.TextView[@content-desc='WebView']")
        //   .click()
        //   .execute('mobile: getPermissions', {type: 'granted', appPackage: 'io.appium.android.apis'})
        //   // eslint-disable-next-line max-len
        //   .execute('mobile: changePermissions', {action: 'grant', appPackage: 'io.appium.android.apis', permissions: 'android.permission.READ_CONTACTS'})
        //   .contexts()
        //   .context('WEBVIEW_io.appium.android.apis')
        let touchAction = new wd.TouchAction(driver)
        touchAction.press({x: 483, y: 464})
        touchAction.moveTo({x: 405, y: 639})
        touchAction.release()
        console.error(`Run touch`)
        // await touchAction.perform() // eslint-disable-line babel/no-await-in-loop
        // let secondTouchAction = new wd.TouchAction(driver)
        // secondTouchAction.press({x: 10, y: 10})
        // secondTouchAction.moveTo({x: 10, y: 100})
        // secondTouchAction.release()
        // let multiTouchAction = new wd.MultiAction(driver)
        // multiTouchAction.add(touchAction)
        // multiTouchAction.add(secondTouchAction)
        // await multiTouchAction.perform() // eslint-disable-line babel/no-await-in-loop
        // await driver.context('NATIVE_APP') // eslint-disable-line babel/no-await-in-loop
        //   .getOrientation()
        //   .setOrientation('PORTRAIT')
        //   .setOrientation('LANDSCAPE')
        //   .setOrientation('PORTRAIT')
        //   .openNotifications()
        //   .toggleData()
        //   .logTypes()
        //   .currentContext()
        //   .startActivity({
        //     appPackage: 'io.appium.android.apis',
        //     appActivity: '.accessibility.AccessibilityNodeProviderActivity'
        //   })
      
   })
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  after(async () => {
    if (driver != null) {
    try {
      await driver.quit()
    }
    catch (err) {
      console.error(`quit driver: ${err}`)
    }
  }
  })
})
