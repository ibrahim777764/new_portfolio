function cards(name, technologies, img, index) {
  const gridContainer = document.querySelector('.grid');

  gridContainer.innerHTML += `
  <div class="stories-card" style='background-image: url(${img});'>
    <div class="white-back">
      <h3 class="card-title">${name}</h3>
      <ul class="list technologies-list-${index}">
      </ul>
      <p class="seepr-button">See Project</p>
    </div>
  </div>`;

  const technologiesContainer = document.querySelector(`.technologies-list-${index}`);

  technologies.forEach((tech) => {
    technologiesContainer.innerHTML += `<li class="lang-name">${tech}</li>`;
  });
}

export default cards;
