import { Dashboard } from '../pages/dashboardPage';
import { test } from '@playwright/test'
test('select random list item', async ({ page }) => {
  const dashboardPage = new Dashboard(page);
  await dashboardPage.navigate();
  await dashboardPage.clickToShowListCities();
  await dashboardPage.selectRandomListCities();
});
