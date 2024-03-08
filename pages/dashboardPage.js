import { expect } from '@playwright/test';
export class Dashboard {
    async navigate(){
        await this.page.goto('https://www.booking.com')
    }
    constructor(page) {
        this.page = page
        this.locationField = page.locator('input[name=ss]')
    }
    async clickLocationField() {
        await this.locationField.click()
    }
    async isButtonVisible() {
        return await this.clickLocationField.isVisible()
    }
}
