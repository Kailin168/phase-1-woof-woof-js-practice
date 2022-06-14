const dogNavBar = document.querySelector('#dog-bar');
const dogInfo = document.querySelector('#dog-summary-container');
const button = document.createElement('button');
const doggieImage = document.createElement('img');

fetch('http://localhost:3000/pups')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const doggieSpan = document.createElement('span');
      doggieSpan.textContent = element.name;
      dogNavBar.append(doggieSpan);

      doggieSpan.addEventListener('click', (event) => {
        doggieImage.src = element.image;
        dogInfo.appendChild(doggieImage);
        const dogName = document.createElement('h2');
        dogName.textContent = element.name;
        doggieImage.append(dogName);
      });
    });
  });
