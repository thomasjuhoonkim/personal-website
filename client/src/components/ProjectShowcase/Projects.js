const images = require.context("../../assets/side-projects", true);
const Projects = [
  {
    img: images("./default.png"),
    title: "Coming Soon",
    description:
      "These projects are currently in the works! Check back again to see if they are done!",
    skills: "React Native, Golang, Docker",
    skillsArray: ["React Native", "Golang", "Docker"],
    link: "/",
  },
  {
    img: images("./dasam-bot.png"),
    title: "Dasam Discord Bot",
    description:
      "The Dasam Bot is a Discord Bot that allows users to fetch Valorant player statistics directly from the Discord app.",
    skills: "Node, Discord, MongoDB",
    skillsArray: ["All", "Node", "Discord", "MongoDB"],
    link: "https://github.com/LiAlex-CS/DasamDiscordBot",
  },
  {
    img: images("./goose-game.png"),
    title: "Goose Game",
    description:
      "The Goose Game is a game written in C++ using the BearLibTerminal. The objective is to escape the goose while avoiding the walls.",
    skills: "C++, BearLibTerminal",
    skillsArray: ["All", "C++"],
    link: "https://github.com/thomasjuhoonkim/goose-game",
  },
  {
    img: images("./tic-tac-toe.png"),
    title: "Tic-Tac-Toe",
    description:
      "This project was done in pure JavaScript to touch up on JavaScript fundamentals.",
    skills: "HTML, CSS, JavaScript",
    skillsArray: ["All", "JavaScript"],
    link: "https://thomasjuhoonkim.github.io/js-tic-tac-toe/",
  },
  {
    img: images("./login-system.png"),
    title: "Login-System",
    description:
      "A login system with registration, login, and JSON web tokens.",
    skills:
      "Express, JSON Web Tokens, Cookies, Sessions, MySQL, React, Firebase, Heroku",
    skillsArray: ["All", "Express", "MySQL", "React", "Firebase", "Heroku"],
    link: "https://login-system-1010.web.app",
  },
  {
    img: images("./e-commerce.png"),
    title: "E-Commerce Website",
    description:
      "Made a fully functioning e-commerce website with API backend and stripe payments.",
    skills: "React, MUI, Commerce.js, Web APIs, Firebase",
    skillsArray: ["All", "React", "Firebase"],
    link: "https://www.e-commerce-1010.web.app",
  },
  {
    img: images("./personal-website.png"),
    title: "Personal Website",
    description:
      "The personal website was made to apply all my knowledge in React.js and frontend development.",
    skills: "Node, React, Express, Firebase",
    skillsArray: ["All", "Node", "React", "Express", "Firebase"],
    link: "https://www.thomasjuhoonkim.me",
  },
  {
    img: images("./warepair.png"),
    title: "Warepair",
    description:
      "Warepair is a web app that bridges the gap between contractors and homeowners.",
    skills: "Node, React, Flask, PostgreSQL, Google Maps API, Heroku",
    skillsArray: ["All", "Node", "React", "Flask", "PostgreSQL", "Heroku"],
    link: "https://warepair.herokuapp.com",
  },
  {
    img: images("./calculator.png"),
    imgStyle: { imageRendering: "crisp-edges" },
    title: "Calculator",
    description:
      "The calculator project was made to compile all my HTML/CSS/JavaScript knowledge from the Odin Project.",
    skills: "HTML, CSS, Javascript",
    skillsArray: ["All", "JavaScript"],
    link: "https://thomasjuhoonkim.github.io/odin-calculator",
  },
  {
    img: images("./etch-a-sketch.png"),
    title: "Etch-a-Sketch",
    description:
      "The etch-a-sketch project was made to compile all my HTML/CSS/JavaScript knowledge from the Odin Project.",
    skills: "HTML, CSS, Javascript",
    skillsArray: ["All", "JavaScript"],
    link: "https://thomasjuhoonkim.github.io/odin-etch-a-sketch",
  },
  {
    img: images("./cryptopals.jpeg"),
    title: "Cryptopals Challenges",
    description:
      "Cryptopals is a collection of exercises that demonstrate attacks on real-world cryptography",
    skills: "Cryptology, Data Analysis, C++, Python, Crypto.Cipher",
    skillsArray: ["All", "C++", "Python"],
    link: "https://github.com/thomasjuhoonkim/cryptopals-challenges",
  },
  {
    img: images("./tetris.jpg"),
    title: "C++ Tetris",
    description: "Tetris game made with SFML interface and C++.",
    skills: "C++, SFML",
    skillsArray: ["All", "C++"],
    link: "https://github.com/thomasjuhoonkim/cpp-tetis",
  },
  {
    img: images("./absorbing-markov-chains.jpg"),
    title: "Absorbing Markov Chains",
    description:
      "Python 2.7 module for matrix operations and absorbing markov chain determination. Used module for the Google Foobar challenge.",
    skills: "Python, Graphs",
    skillsArray: ["All", "Python"],
    link: "https://github.com/thomasjuhoonkim/absorbing-markov-chains",
  },
  {
    img: images("./hydroponics.png"),
    title: "Hydroponics Store Scraper",
    description:
      "A webscraper that scrapes all hydroponics store information from Google Maps using the Selenium Library from Python.",
    skills: "Python, Selenium",
    skillsArray: ["All", "Python"],
    link: "https://github.com/thomasjuhoonkim/hydroponics-database",
  },
];

export default Projects;
