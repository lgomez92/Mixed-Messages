const quotesArray = ["Success is not final; failure is not fatal: It is the courage to continue that counts -- Winston S. Churchil",
                      "It is better to fail in originality than to succeed in imitation. -- Herman Melville",
                      "The road to success and the road to failure are almost exactly the same. -- Colin R. Davis",
                      "Success usually comes to those who are too busy to be looking for it. -- Henry David Thoreau",
                      "Opportunities don't happen. You create them. -- Chris Grosser",
                      "Don't be afraid to give up the good to go for the great. --John D. Rockefeller",
                      "I find that the harder I work, the more luck I seem to have. -- Thomas Jefferson",
                      "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed. -- Ray Goforth",
                      "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better. -- Jim Rohn",
                      "Try not to become a man of success. Rather become a man of value. -- Albert Einstein"];
                      
const confidentQuote = ["he lives the poetry she cannot write. –  Oscar Wilde",
                        "Well behaved women seldom make history. –  Laurel Thatcher Ulrich",
                        "No one is you and that is your superpower. –  Unknown",
                        "No one can make you feel inferior without your consent. –  Eleanor Roosevelt",
                        "You have to believe in your heart what you know to be true about yourself. And let that be that. –  Mary J. Blige",
                        "I'm a big believer in accepting yourself and not really worrying about it. –  Jennifer Lawrence",
                        "In life there is no real safety except for self-belief. –  Madonna",
                        "My courage always rises at every attempt to intimidate me. –  Jane Fonda",
                        "Authenticity is the daily practice of letting go of who we think we're supposed to be and embracing who we are. –  Brene Brown",
                        "Bravery is to stand up for what you believe in. –  Sophie Turner"];
                        
const lettingGoQuote = ["It does not do to dwell on dreams and forget to live. – J.K. Rowling",
                        "There are things in life that you can't control, and aren't supposed to.",
                        "Let go and let the flow. – Jenna Dewan",
                        "Whatever happens around you, don't take it personally... Nothing other people do is because of you. It's because of themselves. – Don Miguel Ruiz",
                        "You can’t truly heal from a loss until you allow yourself to really feel the loss. – Mandy Hale",
                        "Trust the wait. Enjoy not knowing.",
                        "Let go and let the universe do its thing.",
                        "Everything's gonna be cool.",
                        "Love bad things from a good distance.",
                        "Some things are just too heavy to haul around."];

// Generates random number to use as index for the result
const generateRandomIndex = () => { 
  randomIndex = Math.floor(Math.random() * 10 + 1);
  return randomIndex;
}

// Prints out the three messages
const printsOutput = (quotesArray, confidentQuote, lettingGoQuote) => {
  let genQuote = quotesArray[generateRandomIndex()];
  let confQuote = confidentQuote[generateRandomIndex()];
  let letgoQuote = lettingGoQuote[generateRandomIndex()];
  console.log(`General Quotes\n -${genQuote}\n Confidence Quote\n -${confQuote}\n letting Go Quote\n ${letgoQuote}`);
  
}

printsOutput(quotesArray, confidentQuote, lettingGoQuote);
