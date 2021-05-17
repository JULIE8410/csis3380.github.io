/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/
var quotes = [{
    quote: 'Remember you are the one who can fill the world with sunshine',
    source: 'Snow White and the Seven Dwarfs',
    citation: 'Movie',
    year: 1937
  },
  {
    quote: 'Our greatest weakneww liks in giving up. The most certain way to succeed is always to try just one more time',
    source: 'Thomas Edison',
    citation: 'Book',
    year: 1910
  },
  {
    quote: 'The only thing worse starting something and failing..is not starting something.',
    source: 'Seth Godin',
    year: 2009
  },
  {
    quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    source: 'Jin Rohn',
    citation: 'Movie'
  },
  {
    quote: 'One important key to success is self-confidence. An important key to self-confidence is preparation.',
    source: 'Arthur Ashe',
    year: 1970
  }

];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {

  //generate a random number which is less than the length of an array and save it in randomNumber variable
  const randomNumber = Math.floor(Math.random() * quotes.length);
  
  //get an object from the quotes array by using randomNumber
  const randomQuoteObject = quotes[randomNumber];

  //return the object
  return randomQuoteObject;
}


/***
 * `printQuote` function
 ***/
function printQuote() {

  // 1. Create a variable that calls the getRandomQuote()
  // call getRandomQuote() function and save the result
  let randomQuote = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with
  // the first two <p></p> elements, their classNames,
  // and the quote and source properties, but leave off
  // the second closing `</p>` tag for now
  
  // A randomQuote is from the quotes array
  // A quote of randomQuote is surrounded with <p></p> element and source is after that
  // The above code is saved in ProHTML1
  let ProHTML1 = '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source;


  // 3. Use an if statement to check if the citation property
  // exists, and if it does, concatenate a <span></span>
  // element, appropriate className, and citation property
  // to the HTML string

  // If randomQuote has a citation 
  if (randomQuote.citation) {
    // citation and <span></span> element is added to ProHTML1
    ProHTML1 += ', <span>' + randomQuote.citation + '</span>';
  }

  // 4. Use an if statement to check of the year property exists,
  // and if it does, concatenate a <span></span> element,
  // appropriate className, and year property to the HTML
  //string

  // If randomQuote has year
  if (randomQuote.year) {
    
    // year and <span></span> element is added to ProHTML1
    ProHTML1 += ', <span>' + randomQuote.year + '</span>';
    
  }

  // 5. After the two if statements, concatenate the closing </p>
  // tag to the HTML string

  ProHTML1 += '</p>';

  // 6. set the innerHTML of the quote-box div to equal the
  // complete HTML string

  document.getElementById('quote-box').innerHTML = ProHTML1;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
// If a click event occurs on an element whose id is load-quote, then
// execute printQute function
document.getElementById('load-quote').addEventListener("click", printQuote, false);