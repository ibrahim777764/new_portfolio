const closePop = document.querySelector(".cross-popup-icon");
const popupcontainer = document.createElement("section");
const diviconimage = document.createElement("div");
const divbackcross = document.createElement("div");
const imgcross = document.createElement("img");
const divpopupimage = document.createElement("div");
const popupimage = document.createElement("img");
const titleandtech = document.createElement("div");
const divtitle = document.createElement("div");
const popuptitle = document.createElement("h1");
const description = document.createElement("div");

function cards(name, desc, tech, img) {
  const gridContainer = document.querySelector(".grid");

  const divStoriesCard = document.createElement("div");
  divStoriesCard.classList.add("stories-card");
  divStoriesCard.style.backgroundImage = `url(${img})`;

  const divWhiteBack = document.createElement("div");
  divWhiteBack.classList.add("white-back");

  const h3CardTitle = document.createElement("h3");
  h3CardTitle.classList.add("card-title");
  h3CardTitle.innerText = name;

  const ulList = document.createElement("ul");
  ulList.classList.add("list");

  for (let i = 0; i < tech.length; i += 1) {
    const liLangName = document.createElement("li");
    liLangName.classList.add("lang-name");
    liLangName.innerText = tech[i];
    ulList.appendChild(liLangName);
  }

  const pseeprbutton = document.createElement("p");
  pseeprbutton.classList.add("seepr-button");
  pseeprbutton.innerText = "See Project";

  divWhiteBack.appendChild(h3CardTitle);
  divWhiteBack.appendChild(ulList);
  divWhiteBack.appendChild(pseeprbutton);
  divStoriesCard.appendChild(divWhiteBack);
  gridContainer.appendChild(divStoriesCard);
}

const projects = [
  {
    title: "pak wheels car show",
    description: "** PakWheels has been hosting auto shows in Karachi since 2015. Every year, we arrange this exciting event and call out all car lovers. An auto show, also known as a motor show or car show, is a public exhibition of current automobile models, debuts, concept cars, or out-of-production classics. It is attended by automotive industry representatives, dealers, auto journalists and car enthusiasts. Most auto shows occur once or twice a year**.",
    imageUrl: "./images/project_images/pak2.jpeg",
    technologies: ["JavaScript", "Webpack", "CSS", "Html"],
    liveVersion: "https://ibrahim777764.github.io/project-capstone/",
    source: "https://github.com/ibrahim777764/project-capstone",
  },

  {
    title: "Awesome books",
    description: "Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list. see how to manage data using JavaScript. built with medium-fidelity wireframe for UI..",
    imageUrl: "./images/project_images/aws.jpeg",
    technologies: ["MEALDB API", "JavaScript", "Webpack", "CSS", "Html", "ES6 modules"],
    liveVersion: "https://ibrahim777764.github.io/ES6-books-project/",
    source: "https://github.com/ibrahim777764/ES6-books-project",
  },

  {
    title: "IBflex",
    description: "It is a single page application named ibnas , we are fetching the tvMazaAPI to get all the data and displaying it on screen, the data is in the form of movies. The users can like, comments on movies and also can put reservation for future.",
    imageUrl: "./images/project_images/ibflix.png",
    technologies: ["JavaScript", "Webpack", "CSS", "Html", "ES6 modules"],
    liveVersion: "https://dapper-centaur-abc8d2.netlify.app",
    source: "https://github.com/ibrahim777764/java-capstone",
  },

  {
    title: "Manage Their Daily Task",
    description: "An application that allow users to manage their daily task. They can add and delete a specific task, and even delete all those which already completed buiilt with JavaScript, webpack and experiment….",
    imageUrl: "./images/project_images/manage.jpeg",
    technologies: ["React", "Redux", "Jest", "JavaScript", "CSS", "Html"],
    liveVersion: "https://thriving-caramel-8477aa.netlify.app",
    source: "https://github.com/ABDULALI3468/crypto-capstone",
  },

  {
    title: "game leaderboard",
    description: "JavaScript project for the Leaderboard list app, built using webpack and ES6 features. The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved using the external Leaderboard API service..",
    imageUrl: "./images/project_images/lead.jpeg",
    technologies: ["Nodejs", "npm", "JavaScript", "Webpack", "CSS", "Html"],
    liveVersion: "",
    source: "https://ibrahim777764.github.io/leaderboard-es6/",
  },

  {
    title: "Math Magicians",
    description: "In this project I am creating a Single Page App using React regarding basic Calculator and its functionalities.",
    imageUrl: "./images/project_images/mayhs.jpeg",
    technologies: ["React", "JavaScript", "CSS", "ES6 modules", "JSX",],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/ibrahim777764/Maths-magic",
  },
];

for (let i = 0; i < projects.length; i += 1) {
  cards(projects[i].title, projects[i].description, projects[i].technologies, projects[i].imageUrl);
}

const createPopup = (name, img, desc, tech, liveVersion, project_source) => {
  const divul = document.createElement("ul");
  popupcontainer.classList.add("mobile-popup-container");
  popupcontainer.classList.add("display-none");

  diviconimage.classList.add("icon-image");

  divbackcross.classList.add("back-cross");

  imgcross.classList.add("cross-popup-icon");
  imgcross.src = "./images/cross-icon.png";
  imgcross.alt = "";

  divpopupimage.classList.add("popup-image");

  popupimage.src = img;

  titleandtech.classList.add("title-and-tech");

  popuptitle.innerText = name;
  popuptitle.classList.add("popup-title");

  for (let i = 0; i < tech.length; i += 1) {
    const divli = document.createElement("li");
    divli.innerText = tech[i];
    divli.classList.add("popup-tech-li");
    divul.appendChild(divli);
  }

  description.classList.add("popup-description");
  description.innerText = desc;

  const divtech = document.createElement("div");

  divul.classList.add("popup-tech");

  const buttons = document.createElement("div");
  buttons.classList.add("popup-buttons");

  const live = document.createElement("div");
  live.classList.add("live-button");
  live.innerHTML = `<a class="live" href="${liveVersion}">See Live</a>`;
  // const plive = document.createElement('p');
  // plive.innerText = 'See Live';
  const imglive = document.createElement("img");
  imglive.src = "./images/live-icon.svg";
  imglive.alt = "";

  const source = document.createElement("div");
  source.classList.add("live-button");
  source.classList.add("ml");
  source.innerHTML = `<a class="live" href="${project_source}">See Source</a>`;
  // const psource = document.createElement("p");
  // psource.innerText = "See Source";
  const imgsource = document.createElement("img");
  imgsource.src = "./images/source-icon.svg";
  imgsource.alt = "";

  document.body.appendChild(popupcontainer);
  popupcontainer.appendChild(diviconimage);
  diviconimage.appendChild(divbackcross);
  divbackcross.appendChild(imgcross);
  diviconimage.appendChild(divpopupimage);
  divpopupimage.appendChild(popupimage);

  popupcontainer.appendChild(titleandtech);
  titleandtech.appendChild(divtitle);
  divtitle.appendChild(popuptitle);
  divtech.appendChild(divul);
  titleandtech.appendChild(divtech);

  popupcontainer.appendChild(description);
  popupcontainer.appendChild(buttons);
  buttons.appendChild(live);
  // live.appendChild(plive);
  live.appendChild(imglive);
  buttons.appendChild(source);
  // source.appendChild(psource);
  source.appendChild(imgsource);
};

const storybutton = document.querySelectorAll(".seepr-button");

for (let i = 0; i < storybutton.length; i += 1) {
  storybutton[i].addEventListener("click", () => {
    createPopup(projects[i].title, projects[i].imageUrl, projects[i].description, projects[i].technologies, projects[i].liveVersion, projects[i].source);
    popupcontainer.classList.remove("display-none");
    popupcontainer.classList.add("display-flex");
    // document.body.classList.add("overflow");
  });
}

divbackcross.addEventListener("click", () => {
  const popup = document.querySelector(".mobile-popup-container");
  // remove children elements...
  const techDiv = popup.querySelector(".title-and-tech");
  const popupTech = popup.querySelector(".popup-tech");
  techDiv.childNodes.forEach((tech) => {
    techDiv.removeChild(tech);
  });
  techDiv.parentElement.removeChild(techDiv);

  popupTech.childNodes.forEach((tech) => {
    popupTech.removeChild(tech);
  });
  popupTech.parentElement.removeChild(popupTech);

  // remove children elements...
  popup.childNodes.forEach((child) => {
    popup.removeChild(child);
  });
  popup.parentElement.removeChild(popup);
});
