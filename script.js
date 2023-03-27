
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
        return (item.city.toLowerCase().includes(searchedLocation.value.toLowerCase())&&
        item.maxGuests == guests.value)
      }); 
      return filteredData;

    })
}


const displayFilteredStays = async () => {

  const staysSection = document.getElementById('mainContent');
  staysSection.innerHTML = ''
  const stays = await searchStays()
  await stays.forEach(stay => {

    const content = `
      <section class="location-days">
        <h2 class="location">Stays in ${stay.city}</h2>
        <p class="days">
          Math.min(${stay.maxGuests})+ stays
        </p>
      </section>
      <section class="apartments" id="apartments-section">
        <div class='card'>
          <img src=${stay.photo} alt="">
            <div class="description">
              ${stay.superHost ? '<button class="superhost">SUPER HOST</button>' : ''}
              <p class="entire-apartment">
                ${stay.type}
                <span class="beds">. ${stay.beds} beds</span>
              </p>
              <div class="rating">
                <p class="rating-num">
                  <i class="material-icons star-icon">star</i>
                  <span class="rate">${stay.rating}</span>
                </p>
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