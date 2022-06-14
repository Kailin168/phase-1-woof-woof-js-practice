const doggieNavBar = document.querySelector('#dog-bar');
const dogImageTag = document.createElement('img');
const doggieInfo = document.querySelector('#dog-info');
const smallDoggieNameTitle = document.createElement('h2');
const filterButton = document.querySelector('#good-dog-filter');
let dogData = {};

fetch('http://localhost:3000/pups')
  .then((res) => res.json())
  .then((data) => {
    dogImageTag.src = data[0].image;
    doggieInfo.append(dogImageTag);
    smallDoggieNameTitle.textContent = data[0].name;
    doggieInfo.appendChild(smallDoggieNameTitle);
    const button = document.createElement('button');
    button.innerText = 'Good Dog?';
    doggieInfo.appendChild(button);

    data.forEach((element) => {
      const doggieSpanTag = document.createElement('span');
      doggieSpanTag.append(element.name);
      doggieNavBar.appendChild(doggieSpanTag);
      dogData = data;

      filterButton.addEventListener('click', (event) => {
        if (element.isGoodDog) {
          filterButton.textContent = 'Filter good dogs: ON';
          const goodList = [];
          for (i=0; element.isGoodDog.length===4 ;i++) {

          }
          // const goodDogList = [element.isGoodDog].filter;
          doggieNavBar.append(goodList);
        } else {
          filterButton.textContent = 'Filter good dogs: OFF';
          doggieNavBar.append(doggieSpanTag);
        }
      });

      doggieSpanTag.addEventListener('click', (event) => {
        dogImageTag.src = element.image;
        doggieInfo.append(dogImageTag);
        smallDoggieNameTitle.textContent = element.name;
        doggieInfo.append(smallDoggieNameTitle);
        button.innerText = 'Good Dog?';
        doggieInfo.appendChild(button);

        button.addEventListener('click', (event) => {
          if (element.isGoodDog === true) {
            button.textContent = 'Good Dog!';
          } else {
            button.textContent = 'Bad Dog!';
          }
        });
      });
    });
  });
