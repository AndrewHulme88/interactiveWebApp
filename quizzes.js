let questions = {
  music: [
      {
          question: "Who was the lead singer of the rock band Queen?",
          options: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
          correct: 0
      },
      {
          question: "Which American singer-songwriter is known for his distinctive voice and hit songs like 'Purple Rain'?",
          options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
          correct: 2
      },
      {
          question: "Which British rock band, formed in 1960, is known for hits like 'I Want to Hold Your Hand' and 'Yesterday'?",
          options: ["The Rolling Stones", "The Who", "The Beatles", "The Kinks"],
          correct: 2
      },
      {
          question: "Who is the American singer-songwriter behind hits like 'Respect' and 'Chain of Fools'?",
          options: ["Aretha Franklin", "Tina Turner", "Janis Joplin", "Patti LaBelle"],
          correct: 0
      },
      {
          question: "Which American rock band, formed in 1973, is known for hits like 'Sweet Emotion' and 'Walk This Way'?",
          options: ["Aerosmith", "Van Halen", "Guns N' Roses", "AC/DC"],
          correct: 0
      }
  ],
  history: [
      {
          question: "Who was the first President of the United States?",
          options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Franklin D. Roosevelt"],
          correct: 0
      },
      {
          question: "The Great Pyramid of Giza is located in which country?",
          options: ["Egypt", "Mexico", "China", "India"],
          correct: 0
      },
      {
          question: "The Renaissance was a cultural and intellectual movement that took place in which century?",
          options: ["15th", "16th", "17th", "18th"],
          correct: 0
      },
      {
          question: "The Rosetta Stone is a ancient artifact that helped decipher which language?",
          options: ["Egyptian hieroglyphs", "Greek", "Latin", "Sumerian"],
          correct: 0
      },
      {
          question: "The Battle of Waterloo was fought in which year?",
          options: ["1805", "1812", "1815", "1820"],
          correct: 2
      }
  ],
  art: [
      {
          question: "Who painted the famous painting 'The Starry Night'?",
          options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Johannes Vermeer"],
          correct: 0
      },
      {
          question: "The famous sculpture 'David' was created by which artist?",
          options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
          correct: 0
      },
      {
          question: "The art movement 'Impressionism' was founded by which artist?",
          options: ["Claude Monet", "Pierre-Auguste Renoir", "Camille Pissarro", "Alfred Sisley"],
          correct: 0
      },
      {
          question: "The famous painting 'The Scream' was created by which artist?",
          options: ["Edvard Munch", "Egon Schiele", "Oskar Kokoschka", "Franz Marc"],
          correct: 0
      },
      {
          question: "The art movement 'Cubism' was founded by which artist?",
          options: ["Pablo Picasso", "Georges Braque", "Juan Gris", "Albert Gleizes"],
          correct: 0
      }
  ],
  technology: [
      {
          question: "Who is credited with inventing the first computer?",
          options: ["Charles Babbage", "Ada Lovelace", "Alan Turing", "Steve Jobs"],
          correct: 0
      },
      {
          question: "The first web browser was called:",
          options: ["WorldWideWeb", "Netscape Navigator", "Internet Explorer", "Mosaic"],
          correct: 0
      },
      {
          question: "The programming language 'Python' was created by:",
          options: ["Guido van Rossum", "Brendan Eich", "Dennis Ritchie", "Brian Kernighan"],
          correct: 0
      },
      {
          question: "The first smartphone was the:",
          options: ["IBM Simon", "Apple iPhone", "Google Pixel", "Samsung Galaxy"],
          correct: 0
      },
      {
          question: "The social media platform 'Facebook' was founded by:",
          options: ["Mark Zuckerberg", "Bill Gates", "Steve Jobs", "Elon Musk"],
          correct: 0
      }
  ],
  celebrities: [
      {
          question: "Who is the American actress known for her roles in 'The Princess Bride' and 'When Harry Met Sally'?",
          options: ["Meg Ryan", "Julia Roberts", "Sandra Bullock", "Reese Witherspoon"],
          correct: 0
      },
      {
          question: "Who is the American actor known for his roles in 'Top Gun' and 'Jerry Maguire'?",
          options: ["Tom Cruise", "Tom Hanks", "Denzel Washington", "Leonardo DiCaprio"],
          correct: 0
      },
      {
          question: "Who is the British singer-songwriter known for hits like 'Space Oddity' and 'Changes'?",
          options: ["David Bowie", "Elton John", "Paul McCartney", "Rod Stewart"],
          correct: 0
      },
      {
          question: "Who is the American actress known for her roles in 'The Hunger Games' and 'Silver Linings Playbook'?",
          options: ["Jennifer Lawrence", "Shailene Woodley", "Emma Stone", "Scarlett Johansson"],
          correct: 0
      },
      {
          question: "Who is the American actor known for his roles in 'The Matrix' and 'John Wick'?",
          options: ["Keanu Reeves", "Tom Cruise", "Dwayne 'The Rock' Johnson", "Leonardo DiCaprio"],
          correct: 0
      }
  ]
};

let currentCategory = null;

document.querySelectorAll('.category-button').forEach(button => {
  button.addEventListener('click', () => {
      currentCategory = button.id;
      displayQuestions();
  });
});

function displayQuestions() {
  let questionsContainer = document.querySelector('.questions-container');
  questionsContainer.style.display = 'block';

  let questionsElement = questions[currentCategory];

  for (let i = 1; i <= 5; i++) {
      let questionText = document.querySelector(`#question-text-${i}`);
      questionText.textContent = questionsElement[i - 1].question;

      for (let j = 1; j <= 4; j++) {
          let optionText = document.querySelector(`#option-${i}-${j}-text`);
          optionText.textContent = questionsElement[i - 1].options[j - 1];
      }
  }
}

document.querySelector('#submit-button').addEventListener('click', () => {
  let score = 0;

  for (let i = 1; i <= 5; i++) {
      let correctOption = questions[currentCategory][i - 1].correct;
      let selectedOption = document.querySelector(`input[name="question-${i}"]:checked`);

      if (selectedOption === null) {
          continue;
      }

      let selectedOptionId = selectedOption.id;
      let selectedOptionNumber = parseInt(selectedOptionId.split('-')[1]);

      if (selectedOptionNumber === correctOption + 1) {
          score++;
      }
  }

  let resultElement = document.querySelector('#result');
  resultElement.textContent = `You scored ${score} out of 5`;
});

document.getElementById('rotating-star').addEventListener('click', function() {
  this.classList.add('rotate');
  setTimeout(() => {
      this.classList.remove('rotate');
  }, 2000);
});

document.getElementById('bouncing-heart').addEventListener('click', function() {
  this.classList.add('bounce');
  setTimeout(() => {
      this.classList.remove('bounce');
  }, 2000);
});
