import { expect } from '@playwright/test';
export class Dashboard {
    async navigate(){
        await this.page.goto('https://www.booking.com')
    }
    constructor(page) {
        this.page = page
        this.locationField = page.locator('input[name=ss]'),
        this.listCities = 'div > ul > li'
     }
    async clickLocationField() {
        await this.locationField.click()
    }
    listCitiesLocator() {
        return this.page.locator(this.listCities)
    }
    async clickRandomListCities() {
        console.log(typeof this.listCities)
        const cities = await this.listCitiesLocator().elementHandles()
        if(cities.length === 0) {
            throw new Error('No se encontraron elementos li.')
        }
        const randomIndex = Math.floor(Math.random() * cities.length)
        await cities[randomIndex].click()
    }
}
