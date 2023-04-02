import stays from './stays.js'
const apartmentsSection = document.getElementById('apartments-section');



    stays.forEach((apartment) => {
      const cardContents = `
            <img src=${apartment.photo} alt="">
            <div class="description">
              ${apartment.superHost ? '<button class="superhost">SUPER HOST</button>' : ''}
              <p class="entire-apartment">
                ${apartment.type}
                <span class="beds">. ${apartment.beds} beds</span>
              </p>
            </div>
            <div class="name">
              <p class='title'>${apartment.title}</p>
            </div>
      `;
      const cardDiv = document.createElement('div');
      cardDiv.innerHTML = cardContents;
      cardDiv.classList.add('card')
      apartmentsSection.append(cardDiv);

    })
  