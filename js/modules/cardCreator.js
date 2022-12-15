import cards from './cards.js';

const cardCreator = (projects) => {
  for (let i = 0; i < projects.length; i += 1) {
    cards(projects[i].title, projects[i].technologies, projects[i].imageUrl, i);
  }
};

export default cardCreator;
