// Function to extract data from the page
function scrapeData() {
  const address = document.querySelector('.address')?.innerText; // Query for address
  const jobs = Array.from(document.querySelectorAll('.job-listing li')).map(el => el.innerText); // Query for job listings
  return { address, jobs };
}

// Send the scraped data back to the background script
chrome.runtime.sendMessage({ action: "dataScraped", data: scrapeData() });
