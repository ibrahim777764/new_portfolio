window.onload = () => {
  const menuBtn = document.querySelector('.menu-btn');
  const headerNavMobile = document.querySelector('.nav-mobile');
  const btnCloseNav = document.querySelector('.btn-close-nav');
  const linkPortfolio = document.querySelector('.link-portfolio');
  const linkAbout = document.querySelector('.link-about');
  const linkContact = document.querySelector('.link-contact');
  const closeDetailBtn = document.querySelector('#close-detail');
  const detailModal = document.querySelector('#mobile-details-modal');
  const seeProjectButtons = document.querySelectorAll('.see-project');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('hidden');
    headerNavMobile.classList.remove('hidden');
  });

  btnCloseNav.addEventListener('click', () => {
    menuBtn.classList.remove('hidden');
    headerNavMobile.classList.add('hidden');
  });

  linkPortfolio.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden');
    menuBtn.classList.remove('hidden');
  });

  linkAbout.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden');
    menuBtn.classList.remove('hidden');
  });

  linkContact.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden');
    menuBtn.classList.remove('hidden');
  });

  seeProjectButtons.forEach((mybutton) => {
    mybutton.addEventListener('click', () => {
      detailModal.classList.remove('hidden');
      // eslint-disable-next-line no-console
      console.log(detailModal);
    });
  });

  closeDetailBtn.addEventListener('click', () => {
    detailModal.classList.add('hidden');
  });

  const projects = [{
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://ibrahim777764.github.io/new_portfolio/',
    link_to_source: 'https://github.com/ibrahim777764/new_portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://ibrahim777764.github.io/new_portfolio/',
    link_to_source: 'https://github.com/ibrahim777764/new_portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://ibrahim777764.github.io/new_portfolio/',
    link_to_source: 'https://github.com/ibrahim777764/new_portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://ibrahim777764.github.io/new_portfolio/',
    link_to_source: 'https://github.com/ibrahim777764/new_portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://ibrahim777764.github.io/new_portfolio/',
    link_to_source: 'https://github.com/ibrahim777764/new_portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured_image: 'images/Snapshoot Portfolio_1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    link_to_live: 'https://ibrahim777764.github.io/new_portfolio/',
    link_to_source: 'https://github.com/ibrahim777764/new_portfolio/',
  },
  ];

  const gridTemplate = document.getElementById('grid-template');
  const recentWorks = document.getElementById('Recent-id');
  const detailsPopUpHeading = document.querySelector('.detail-popup-heading');
  const popupWindow = document.getElementById('mobile-details-modal');
  projects.forEach((project) => {
    const clonedNode = gridTemplate.children[0].cloneNode(true);
    clonedNode.children[1].innerText = project.name;
    recentWorks.appendChild(clonedNode);

    detailsPopUpHeading.textContent = project.name;

    const btnPopups = recentWorks.querySelectorAll('.btn-popup');
    btnPopups.forEach((button) => {
      button.addEventListener('click', () => {
        popupWindow.classList.remove('hidden');
      });
    });
  });
};