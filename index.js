const updateSelectedTab = function(selectedTab) {
  document.querySelector('#menu').classList.remove('selected');
  document.querySelector('#home').classList.remove('selected');
  document.querySelector('#contact').classList.remove('selected');

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

document.querySelector('#menu').addEventListener('click', () => {
  document.querySelector('.side-menu').classList.remove('off-screen');
})