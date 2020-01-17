const homeBttn = document.querySelector('#home');
const menuBttn = document.querySelector('#menu');
const contactBttn = document.querySelector('#contact');
const sideMenu = document.querySelector('.side-menu');
const navBttns = [homeBttn, menuBttn, contactBttn];

const updateSelectedTab = function(selectedTab) {
  menuBttn.classList.remove('selected');
  homeBttn.classList.remove('selected');
  contactBttn.classList.remove('selected');

  document.querySelector(`#${selectedTab}`).classList.add('selected');
};

updateSelectedTab('home');

const navTabs = document.querySelectorAll('.nav-link');

const addEventListenersToTabs = function() {
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      updateSelectedTab(tab.getAttribute('id'));
    });
  });
};

addEventListenersToTabs();

const addSideMenuEvents = function() {
  menuBttn.addEventListener('click', () => {
    sideMenu.classList.remove('off-screen');
  });
  // add event listener to other two tabs
};

addSideMenuEvents();

const closeSideMenu = function() {
  sideMenu.classList.add('off-screen');
};

homeBttn.addEventListener('click', closeSideMenu);
contactBttn.addEventListener('click', closeSideMenu);
