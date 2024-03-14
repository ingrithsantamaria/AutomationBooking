export class Dashboard {
  constructor(page) {
    this.page = page;
    this.calendarBtn = 'div[data-testid="searchbox-dates-container"]';
    this.bodyCalendar = 'div[data-testid="searchbox-datepicker-calendar"]';
    this.nextMonthBtn =
      'div[data-testid="searchbox-datepicker-calendar"] >> button';
    this.closeDismissSignInfoBtn = 'button[aria-label="Dismiss sign-in info."]';
    this.closeSignPopup = 'button[data-command="noop"]';
    this.submitBtn = 'button[type="submit"]';
    this.filterCheckbox = 'div input[type="checkbox"]';
    this.availabilityBtn = 'button[data-testid="reviews-block-availability"]'
  }
  async navigate() {
    await this.page.goto("https://www.booking.com");
  }
  async closeDismissSignInfo() {
    await this.page.click(this.closeDismissSignInfoBtn);
  }
  async clickIfVisiblePopupSign() {
    if (await this.page.isVisible(this.closeSignPopup)) {
      await this.page.click(this.closeSignPopup);
    }
  }
  async clickToShowListCities() {
    await this.page.click("input[name=ss]");
    await this.page.waitForSelector("div > ul", { state: "visible" });
  }
  async selectRandomListCities() {
    const cities = await this.page.$$('div > ul > li[role="option"]');
    const randomIndex = Math.floor(Math.random() * cities.length);
    const randomCity = cities[randomIndex];
    await randomCity.click();
  }
  async openCalendar() {
    await this.page.click(this.calendarBtn);
  }
  async selectNextMonth() {
    await this.page.click(this.nextMonthBtn);
  }
  async selectDate(day) {
    await this.page.click(`table tbody tr td:has-text("${day}")`);
  }
  async selectStartDate() {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const startDay = nextMonth.getDate();
    // await this.openCalendar()
    await this.selectNextMonth();
    await this.selectDate(startDay);
  }
  async selecEndDate(daysAfterStart = 7) {
    const today = new Date();
    const endDate = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      daysAfterStart
    );
    const endDay = endDate.getDate();
    await this.selectDate(endDay);
  }
  async clickOnSubmitButton() {
    await this.page.click(this.submitBtn);
    await this.page.waitForTimeout(1000);
  }
  async selectRandomFilter() {
    const checkbox = await this.page.$$(this.filterCheckbox);
    const randonIndex = Math.floor(Math.random() * checkbox.length);
    await checkbox[randonIndex].click();
    await this.page.waitForTimeout(4000);
  }
  async selectFirstElement() {
    await page.locator('div[data-testid="property-card"]').nth(0).click()
  }
  async clickOnAvailabilityButton() {
    await this.page.click(this.availabilityBtn)
  }
}
