// src/questions.js
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Jane Austen", "Mark Twain", "J.K. Rowling"],
    answer: "Harper Lee",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: "Diamond",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    answer: "Tokyo",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Marie Curie",
      "Albert Einstein",
      "Alexander Fleming",
      "Isaac Newton",
    ],
    answer: "Alexander Fleming",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Iron"],
    answer: "Oxygen",
  },
  {
    question: "What is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    answer: "Nile River",
  },
  {
    question: "Who wrote '1984'?",
    options: [
      "George Orwell",
      "Aldous Huxley",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
    ],
    answer: "George Orwell",
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Venus", "Mars", "Mercury", "Earth"],
    answer: "Mercury",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "Who was the first President of the United States?",
    options: [
      "Abraham Lincoln",
      "Thomas Jefferson",
      "John Adams",
      "George Washington",
    ],
    answer: "George Washington",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Pb", "Fe"],
    answer: "Au",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "Which planet is known as the Earth's twin?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Venus",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Onion", "Avocado", "Pepper"],
    answer: "Avocado",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    answer: "Japan",
  },
  {
    question: "What is the chemical formula for water?",
    options: ["CO2", "H2O", "O2", "CH4"],
    answer: "H2O",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Guglielmo Marconi",
    ],
    answer: "Alexander Graham Bell",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: "Jupiter",
  },
  {
    question: "Who was the first person to walk on the moon?",
    options: [
      "Buzz Aldrin",
      "Michael Collins",
      "Yuri Gagarin",
      "Neil Armstrong",
    ],
    answer: "Neil Armstrong",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Venice", "Milan", "Rome", "Naples"],
    answer: "Rome",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "United Kingdom", "Japan"],
    answer: "Brazil",
  },
  {
    question: "What is the primary language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "English", "French"],
    answer: "Portuguese",
  },
  {
    question: "Which artist painted the ceiling of the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
    answer: "Michelangelo",
  },
  {
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "K", "S", "Si"],
    answer: "Na",
  },
  {
    question: "What is the name of the longest river in South America?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    answer: "Amazon River",
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    options: [
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
      "John Steinbeck",
      "Mark Twain",
    ],
    answer: "F. Scott Fitzgerald",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    answer: "Canberra",
  },
  {
    question: "What is the largest desert in the world?",
    options: [
      "Sahara Desert",
      "Gobi Desert",
      "Kalahari Desert",
      "Arabian Desert",
    ],
    answer: "Sahara Desert",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
    answer: "Mitochondria",
  },
  {
    question: "Which ocean is the Bermuda Triangle located in?",
    options: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Indian Ocean",
      "Southern Ocean",
    ],
    answer: "Atlantic Ocean",
  },
  {
    question: "Who painted 'Starry Night'?",
    options: [
      "Vincent van Gogh",
      "Claude Monet",
      "Pablo Picasso",
      "Leonardo da Vinci",
    ],
    answer: "Vincent van Gogh",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
    answer: "Vatican City",
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
    answer: "300,000 km/s",
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Nikola Tesla",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "What is the capital of Spain?",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    answer: "Madrid",
  },
  {
    question: "What is the primary ingredient in chocolate?",
    options: ["Sugar", "Milk", "Cocoa", "Vanilla"],
    answer: "Cocoa",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the tallest building in the world as of 2021?",
    options: [
      "Shanghai Tower",
      "Burj Khalifa",
      "One World Trade Center",
      "Taipei 101",
    ],
    answer: "Burj Khalifa",
  },
  {
    question: "What is the main gas found in the Earth's atmosphere?",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
    answer: "Nitrogen",
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    options: [
      "Charlotte Bronte",
      "Jane Austen",
      "Mary Shelley",
      "Emily Bronte",
    ],
    answer: "Jane Austen",
  },
  {
    question: "What is the most abundant gas in the Earth's atmosphere?",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
    answer: "Nitrogen",
  },
];

export default questions;
