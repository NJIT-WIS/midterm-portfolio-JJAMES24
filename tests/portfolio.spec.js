// @ts-check
const { test, expect } = require('@playwright/test');

const portfolioURL='http://localhost:3000';

//Expected costants
const expectedresumelink = 'https://jjames24.github.io/classresume/';
const expectedgithublink ='https://github.com/JJAMES24';
const expectedlinkedinlink ='https://www.linkedin.com/in/jarod-james-b41833232/';

//Test resume link on homepage.
test('Resume Links', async ({ page }) => {
    // Replace with the URL of the webpage you want to test
    
    await page.goto(portfolioURL);
  
    // Find the first link with the text "resume"
    const resumeLink = await page.locator('text=resume').nth(0);
    await resumeLink.click(); 
    const currentURL = page.url();
    expect(currentURL).toBe(expectedresumelink);
    
  });

  test('Github Links', async ({ page }) => {
    // Replace with the URL of the webpage you want to test
    
    await page.goto(portfolioURL);
  
    // Find the first link with the text "github"
    const resumeLink = await page.locator('text=github').nth(0);
    await resumeLink.click(); 
    const currentURL = page.url();
    expect(currentURL).toBe(expectedgithublink);
    
  });

  test('LinkedIn Links', async ({ page }) => {
    // Replace with the URL of the webpage you want to test
    
    await page.goto(portfolioURL);
  
    // Find the first link with the text "linkedin"
    const resumeLink = await page.locator('text=linkedin').nth(0);
    await resumeLink.click(); 
    const currentURL = page.url();
    expect(currentURL).toBe(expectedlinkedinlink);
    
  });

  test('Check Profile Image', async ({ page }) => {
    await page.goto(portfolioURL);
    await expect(page.locator('.aboutsection')).toBeVisible();
  });

  test('Check SEO Meta Description', async ({ page }) => {
    await page.goto(portfolioURL);
    const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
    await expect(metaDescription).not.toBe('');
  });

  test('Check SEO Meta Keywords', async ({ page }) => {
    await page.goto(portfolioURL);
    const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
    await expect(metaKeywords).not.toBe('');
  });


test('Check Responsive Meta Tag', async ({ page }) => {
  await page.goto(portfolioURL);
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content');
  await expect(viewportMeta).toBe('width=device-width, initial-scale=1');
});

test('check that UTF-8 meta tag is present', async ({ page }) => {
    //Arrange: Go to the site homepage
  await page.goto(portfolioURL); 
    //Act: Get the content attribute of the meta charset tag
    const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));
  
    //Assert: Check if the charset is set to UTF-8
    await expect(metaCharset).toBe('UTF-8');
  });

  test('Check Page Title', async ({ page }) => {
    await page.goto(portfolioURL);
    const title = await page.title();
    await expect(title).not.toBe('');
  });