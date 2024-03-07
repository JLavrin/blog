import { test, expect } from '@playwright/test';

const productionURL = 'http://localhost:3000'

test.describe('/', () => {
  test('redirect to /blog when visit homepage', async ({ page }) => {
    await page.goto(productionURL);
    const url = page.url();
    expect(url)
      .toBe(`${productionURL}/blog`);
  });
})

test.describe('/form', () => {
  test('positive branch ', async ({
    page,
  }) => {
    await page.goto(`${productionURL}/form`);
    // accept cookies
    await page.getByTestId('firstName')
      .click()
    // fill form
    await page.getByTestId('firstName')
      .fill('John');
    await page.getByTestId('lastName')
      .fill('Doe');
    await page.getByTestId('email')
      .fill('test@email.com');
    await page.getByTestId('phoneNumber')
      .fill('123456789');
    await page.getByTestId('message')
      .fill('E2E testing');
    await page.getByTestId('checkbox')
      .check();

    // submit
    await page.click('button[type=submit]');

    // wait for redirect
    await page.waitForURL(`${productionURL}/form/thank-you`);

    const url = page.url();
    expect(url)
      .toBe(`${productionURL}/form/thank-you`);

    // latest posts are visible
    const threeLatestPosts = await Promise.all([
      page.getByTestId('blog-article-0').isVisible(),
      page.getByTestId('blog-article-1').isVisible(),
      page.getByTestId('blog-article-2').isVisible(),
    ])

    expect(threeLatestPosts)
      .toEqual([true, true, true])
  })

  test('negative branch', async ({ page }) => {
    await page.goto(`${productionURL}/form`);

    await page.getByTestId('firstName')
      .click()
    // fill form
    await page.getByTestId('firstName')
      .fill('');
    await page.getByTestId('lastName')
      .fill('');
    await page.getByTestId('email')
      .fill('testemail.com');
    await page.getByTestId('phoneNumber')
      .fill('zsd');
    await page.getByTestId('message')
      .fill('');
    await page.getByTestId('checkbox')
      .check();

    // submit
    await page.click('button[type=submit]');

    // wait for errors
    const errorMessages = await page.getByTestId('error-message')
      .all();

    expect(errorMessages.length)
      .toBe(5)
  })
})

test.describe('/blog', () => {
  test('contact us - button click', async ({ page }) => {
    await page.goto(`${productionURL}/blog`);

    // check if button is visible
    await page.isVisible('a[href="/form"]');

    // click the button
    await page.click('a[href="/form"]');

    await page.waitForURL(`${productionURL}/form`);

    const url = page.url();
    expect(url)
      .toBe(`${productionURL}/form`);
  });
});
