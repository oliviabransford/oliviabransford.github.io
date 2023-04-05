const newQuoteButton = document.querySelector('#js-new-quote');

newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
  console.log('Button clicked');
  
  const apiUrl = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.question);
      displayQuote(data.question);
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      alert('Error fetching quote. Please try again later.');
    });
}

function displayQuote(quoteText) {
  const quoteElement = document.querySelector('#js-quote-text');
  quoteElement.textContent = quoteText;
}

// display a quote when the page loads
getQuote();