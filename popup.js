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
    title: "Daily Life Todo List will make your life worthy.",
    description:
      "To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. One of the most important reasons for keeping a to-do list is the organization. Organizing your tasks with a list can make everything much more manageable and make you feel grounded. Seeing a clear outline of your completed and uncompleted tasks will help you feel organized and stay mentally focused.",
    imageUrl: "./images/todolist.png",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    title: "Multi-Post Stories Gain+Glory card 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: "./images/popup-mobile-pic.svg",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    title: "Multi-Post Stories Gain+Glory card 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: "./images/popup-mobile-pic.svg",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    title: "Multi-Post Stories Gain+Glory card 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: "./images/popup-mobile-pic.svg",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    title: "Multi-Post Stories Gain+Glory card 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: "./images/popup-mobile-pic.svg",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    title: "Multi-Post Stories Gain+Glory card 6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: "./images/popup-mobile-pic.svg",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  },
];

for (let i = 0; i < projects.length; i += 1) {
  cards(
    projects[i].title,
    projects[i].description,
    projects[i].technologies,
    projects[i].imageUrl
  );
}

const createPopup = (name, img, desc, tech) => {
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
  live.innerHTML = `<a class="live" href="https://abdulali3468.github.io/Daily-life-TODO-LIST/">See Live</a>`;
  // const plive = document.createElement('p');
  // plive.innerText = 'See Live';
  const imglive = document.createElement("img");
  imglive.src = "./images/live-icon.svg";
  imglive.alt = "";

  const source = document.createElement("div");
  source.classList.add("live-button");
  source.classList.add("ml");
  source.innerHTML = `<a class="live" href="https://github.com/ABDULALI3468/Daily-life-TODO-LIST">See Source</a>`;
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
    createPopup(
      projects[i].title,
      projects[i].imageUrl,
      projects[i].description,
      projects[i].technologies
    );
    popupcontainer.classList.remove("display-none");
    popupcontainer.classList.add("display-flex");
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
