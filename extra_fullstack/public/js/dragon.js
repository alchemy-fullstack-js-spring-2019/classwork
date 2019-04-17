const params = new URLSearchParams(window.location.search);

window.onload = fetchDragon;

function fetchDragon() {
  const id = params.get('id');
  fetch(`/api/v1/dragons/${id}`)
    .then(res => res.json())
    .then(dragon => {
      const main = document.getElementById('main');

      const template = document.createElement('template');

      const image = dragon.image ? `<img src=${dragon.image} />` : '';
      template.innerHTML = `
        <p>${dragon.name}</p>
        <p>${dragon.type}</p>
        <p>${dragon.wings}</p>
        ${image}
        `;

      main.appendChild(template.content);
    });

}
