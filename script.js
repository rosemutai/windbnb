
const form = document.getElementById('navForm');
const formSection = document.getElementById('formSection');
const editClose = document.getElementById('editClose');

form.addEventListener('submit', (e) => {

  let searchBtn = document.getElementById('searchBtn');
  let searchedLocation = document.getElementById('location-input').value.toLowerCase();
  let guests = Number(document.getElementById('guests-input').value);

  e.preventDefault();
  console.log(searchedLocation);
  console.log(guests);
  formSection.classList.add('active');
  searchBtn.classList.add('activebutton');
  editClose.style.display = 'block';
});
