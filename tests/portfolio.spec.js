// @ts-check
const { test, expect } = require('@playwright/test');

const portfolioURL='http://localhost:3000';

//Expected costants
const expectedresumelink = 'https://jjames24.github.io/classresume/';



test.beforeEach(async ({ page }) => {
    await page.goto(portfolioURL);
  });

  
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



