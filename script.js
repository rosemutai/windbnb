import stays from './stays.js'
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

  const filteredData = stays.filter((item) => {
        return (item.city.toLowerCase().includes(searchedLocation.value.toLowerCase())&&
        item.maxGuests >= guests.value)
  }); 
  return filteredData;
  
}

const displayFilteredStays = async () => {

  const staysSection = document.getElementById('mainContent');
  staysSection.innerHTML = ''
  const stays = await searchStays()
  console.log(stays);
  await stays.forEach(stay => {

    const content = `
      <section class="location-days">
        <h2 class="location">Stays in ${stay.city}</h2>
        <p class="days">
          ${stay.maxGuests} Guests
        </p>
      </section>
      <section class="apartments" id="apartments-section">
        <div class='card'>
          <img src=${stay.photo} alt="">
            <div class="description">
              ${stay.superHost ? '<button class="superhost">SUPER HOST</button>' : ''}
              <p class="entire-apartment">
                ${stay.type}
                ${stay.beds ? '<span class="beds">.{{stays.bed}} beds</span>' : '0 beds' }
              </p>
              <div class="rating">
                <i class="material-icons star-icon">star</i>
                <span class="rate">${stay.rating}</span>
              </div>
            </div>
            <div class="name">
              <p class='title'>${stay.title}</p>
            </div>
        </div>
      </section>
    `;

    const section = document.createElement('section');
    section.innerHTML = content;
    staysSection.append(section)
  })
  
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  displayFilteredStays();
  formSection.classList.remove('active');
  editClose.style.display = 'none';
})

const closeIcon = document.getElementById('closeIcon');
closeIcon.addEventListener('click', () => {
  formSection.classList.remove('active');
  editClose.style.display = 'none';

})