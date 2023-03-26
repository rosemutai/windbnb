
const form = document.getElementById('navForm');
const formSection = document.getElementById('formSection');
const editClose = document.getElementById('editClose');
let searchedLocation = document.getElementById('location-input');
const guests = document.getElementById('guests-input');


searchedLocation.addEventListener('click', () => {
  formSection.classList.add('active');
  searchBtn.classList.add('activebutton');
  editClose.style.display = 'block';
  
});


const searchStays = () => {

  fetch('./stays.json')
    .then(data => data.json())
    .then(results => {

      const filteredData = results.filter((item) => {
        const cityMatch = searchedLocation.value ? item.city.toLowerCase().includes(searchedLocation.value.toLowerCase()) : true;
        const maxGuestsMatch = guests.value ? item.maxGuests == guests.value : true;
        return cityMatch && maxGuestsMatch;
      });
      console.log(filteredData);

    })
  

}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  searchStays();
})