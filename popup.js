document.getElementById('scrape').addEventListener('click', function() {
  chrome.tabs.executeScript({
    code: `(${inContent.toString()})();` // This injects the scraping function
  });
});

function inContent() {
  const address = document.querySelector('.address')?.innerText;
  const jobs = Array.from(document.querySelectorAll('.job-listing li')).map(el => el.innerText);
  console.log('Address:', address);
  console.log('Jobs:', jobs);
  return { address, jobs };
}
