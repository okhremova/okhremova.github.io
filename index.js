const homeLink = document.getElementById('homeLink');
const mapLink = document.getElementById('mapLink');
const instagramLink = document.getElementById('instagramLink');
const diplomaLink = document.getElementById('diplomaLink');

const homeSection = document.getElementById('homeSection');
const mapSection = document.getElementById('mapSection');
const instagramSection = document.getElementById('instagramSection');
const diplomaSection = document.getElementById('diplomaSection');

homeLink.addEventListener('click', navigateToHome);
mapLink.addEventListener('click', navigateToMap);
instagramLink.addEventListener('click', navigateToInst);
diplomaLink.addEventListener('click', navigateToDiploma);

function hideAll() {
  homeSection.style.display = 'none';
  mapSection.style.display = 'none';
  instagramSection.style.display = 'none';
  diplomaSection.style.display = 'none';
}

function navigateToHome() {
  navigate('homeSection');
}

function navigateToMap() {
  navigate('mapSection');
}

function navigateToInst() {
  navigate('instagramSection');
}

function navigateToDiploma() {
  navigate('diplomaSection');
}

function navigate(id) {
  hideAll();
  displaySection(id);
}

function displaySection(id) {
  const section = document.getElementById(id);
  section.style.display = 'flex';
}