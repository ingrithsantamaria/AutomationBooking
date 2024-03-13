export class Dashboard {
  constructor(page) {
    this.page = page;
  }
  async navigate() {
    await this.page.goto('https://www.booking.com');
  }
  async clickToShowListCities() {
    await this.page.click('input[name=ss]');
    await this.page.waitForSelector('div > ul', { state: 'visible' });
  }
  async selectRandomListCities() {
    const items = await this.page.$$('div > ul > li');
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    await randomItem.click();
  }
}

