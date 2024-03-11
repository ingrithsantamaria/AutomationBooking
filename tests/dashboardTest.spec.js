import { test, expect } from '@playwright/test';
import { Dashboard } from '../pages/dashboardPage'
test('User click on the field "Where are you going"', async ({page}) => {
    const dashboardPage = new Dashboard(page)
    await dashboardPage.navigate()
    await dashboardPage.clickLocationField()
    await dashboardPage.clickRandomListCities()
})