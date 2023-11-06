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


