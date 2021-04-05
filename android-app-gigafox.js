import 'babel-polyfill'
import 'colors'
import wd from 'wd'
import {assert} from 'chai'

const config = {
  protocol: 'http',
  host: '192.168.36.47',
  // host: '127.0.0.1:4723',
  pathname: '/webdriver'
}



const desiredCaps = {
  'gigafox:device': '137b2746-a15f-47be-9b1b-80a5c49a8c3d',
  'gigafox:application': 'API Demos',
  'gigafox:username': 'admin',
  'gigafox:apiKey': 'f619219b-0de5-4e3b-a9f7-326bec843358',
  //'browser': '',
  'browserName': ''
}

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
    await driver // eslint-disable-line babel/no-await-in-loop
      .source()
      .waitForElementByXPath("//android.widget.TextView[@content-desc='Animation')]")
      .sleep(1000)
      .click()
      .sleep(1000)
      .elementByXPath("//android.widget.TextView[@content-desc='Bouncing Balls']")
      .click()
      .sleep(5000)
      .back()
      .back()
      //.flick(defaultXOffset, Math.floor(getHeight/-2), defaultSpeed)
      .waitForElementByXPath("//android.widget.TextView[@content-desc='Views']")
      .click()
      .sleep(5000)
      .element('xpath', "//android.widget.TextView[@index=4]")
      // .flick(defaultXOffset, Math.floor(getHeight/-2), defaultSpeed)
      // .flick(defaultXOffset, Math.floor(getHeight/-2), defaultSpeed)
      .waitForElementByXPath("//android.widget.TextView[@content-desc='WebView']")
      .click()
      .sleep(2000)
      .contexts()
  })

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
