const apartmentsSection = document.getElementById('apartments-section');

fetch('./stays.json')
  .then((apartments) => apartments.json())
  .then((Apartments) => {
    Apartments.forEach((apartment) => {
      const cardContents = `
            <img src=${apartment.photo} alt="">
            <div class="description">
              <button class="superhost">SUPER HOST</button>
              <p class="entire-apartment">
                ${apartment.type}
                <span class="beds">. ${apartment.beds} beds</span>
              </p>
              <div class="rating">
                <p class="rating-num">${apartment.rating}</p>
              </div>
            </div>
            <div class="name">
              <p class='title'>${apartment.title}</p>
            </div>
      `;
      const cardDiv = document.createElement('div');
      cardDiv.innerHTML = cardContents;
      cardDiv.classList.add('card')
      apartmentsSection.append(cardDiv);

    })}
)