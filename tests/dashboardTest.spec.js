import { Dashboard } from '../pages/dashboardPage';
import { test } from '@playwright/test'
test('User select a city', async ({ page }) => {
  const dashboardPage = new Dashboard(page);
  await dashboardPage.navigate();
  await dashboardPage.closeDismissSignInfo()
  await dashboardPage.clickToShowListCities();
  await dashboardPage.selectRandomListCities();
});
test('User select dates', async ({ page }) => {
    const dashboardPage = new Dashboard(page);
    await dashboardPage.navigate();
    await dashboardPage.closeDismissSignInfo()
    await dashboardPage.clickToShowListCities();
    await dashboardPage.selectRandomListCities();
    await dashboardPage.clickIfVisiblePopupSign()
    await dashboardPage.selectStartDate()
    await dashboardPage.selecEndDate()
  });
  test('User clicks on Submit', async ({ page }) => {
    const dashboardPage = new Dashboard(page);
    await dashboardPage.navigate();
    await dashboardPage.closeDismissSignInfo()
    await dashboardPage.clickToShowListCities();
    await dashboardPage.selectRandomListCities();
    await dashboardPage.clickIfVisiblePopupSign()
    await dashboardPage.selectStartDate()
    await dashboardPage.selecEndDate()
    await dashboardPage.clickOnSubmitButton()
    await dashboardPage.selectRandomFilter()
  });
  test('User clicks on filter', async ({ page }) => {
    const dashboardPage = new Dashboard(page);
    await dashboardPage.navigate();
    await dashboardPage.closeDismissSignInfo()
    await dashboardPage.clickToShowListCities();
    await dashboardPage.selectRandomListCities();
    await dashboardPage.clickIfVisiblePopupSign()
    await dashboardPage.selectStartDate()
    await dashboardPage.selecEndDate()
    await dashboardPage.clickOnSubmitButton()
    await dashboardPage.selectRandomFilter()
  });
  test('User clicks on the first result', async ({ page }) => {
    const dashboardPage = new Dashboard(page);
    await dashboardPage.navigate();
    await dashboardPage.closeDismissSignInfo()
    await dashboardPage.clickToShowListCities();
    await dashboardPage.selectRandomListCities();
    await dashboardPage.clickIfVisiblePopupSign()
    await dashboardPage.selectStartDate()
    await dashboardPage.selecEndDate()
    await dashboardPage.clickOnSubmitButton()
    await dashboardPage.selectRandomFilter()
    await dashboardPage.selectFirstElement()
  });
