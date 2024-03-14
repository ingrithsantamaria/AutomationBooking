import { Dashboard } from '../pages/dashboardPage';
import { test } from '@playwright/test'
test('select random list item', async ({ page }) => {
  const dashboardPage = new Dashboard(page);
  await dashboardPage.navigate();
  await dashboardPage.closeDismissSignInfo()
  await dashboardPage.clickToShowListCities();
  await dashboardPage.selectRandomListCities();
  await dashboardPage.clickIfVisiblePopupSign()
  await dashboardPage.selectStartDate()
  await dashboardPage.selecEndDate()
//   await dashboardPage.selectDates("10", "20")
});
