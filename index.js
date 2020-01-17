const mobileNavigationEvents = (function() {
  const homeBttn = document.querySelector('#home');
  const menuBttn = document.querySelector('#menu');
  const contactBttn = document.querySelector('#contact');
  const sideMenu = document.querySelector('.side-menu');
  const navTabs = document.querySelectorAll('.nav-link');
  const navBttns = [homeBttn, menuBttn, contactBttn];

  const updateSelectedTab = function(selectedTab) {
    menuBttn.classList.remove('selected');
    homeBttn.classList.remove('selected');
    contactBttn.classList.remove('selected');

    document.querySelector(`#${selectedTab}`).classList.add('selected');
  };

  const addEventListenersToTabs = function() {
    navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        updateSelectedTab(tab.getAttribute('id'));
      });
    });
  };

  const addSideMenuEvents = function() {
    menuBttn.addEventListener('click', () => {
      sideMenu.classList.remove('off-screen');
    });
  };

  const closeSideMenu = function() {
    sideMenu.classList.add('off-screen');
  };

  homeBttn.addEventListener('click', closeSideMenu);
  contactBttn.addEventListener('click', closeSideMenu);

  return { addEventListenersToTabs, updateSelectedTab, addSideMenuEvents };
})();

mobileNavigationEvents.addEventListenersToTabs();
mobileNavigationEvents.updateSelectedTab('home');
mobileNavigationEvents.addSideMenuEvents();
