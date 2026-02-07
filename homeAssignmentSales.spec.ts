import { chromium, test } from "@playwright/test";


test(`Test to learn CSS Selectors`, async ({ page }) => { // {page}--> page    


    await page.goto(`https://login.salesforce.com/`)

    await page.locator(`input[id=username]`).fill(`dilipkumar.rajendran@testleaf.com`)

    await page.locator(`input[id=password]`).fill(`TestLeaf@2025`)
   
    await page.locator(`input[id=Login]`).click()
    await page.locator(`//div [@class="slds-icon-waffle"]`).click();
    await page.locator(`//button[@aria-label ="View All Applications"]`).click();
    await page.locator(`(//div[@class='slds-truncate'])[7]`).click();
    await page.locator(`(//span[@class="slds-truncate"])[4]`).click();
    await page.locator(`//div[@title="New"]`).click();
    await page.locator("//button[@name='salutation']").click();
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    
    await page.locator(`//input[@name="lastName"]`).fill("Nitin");
    await page.locator(`//input[@name="Company"]`).fill("fdfsfdfdffdfd")
    await page.locator(`//button[@name="SaveEdit"]`).click();
    
    //*const dropdown = page.locator(`//button[@id="combobox-button-276"]`); 
   // console.log("dropdown element ");                                  
    //const dropDownCount = await dropdown.count();
    //console.log(dropDownCount);
    
    //console.log("count print ");
    //for (let index = 0; index < dropDownCount; index++) {
       
      //  console.log( await dropdown.nth(index).innerText());


       
   // }



    
})