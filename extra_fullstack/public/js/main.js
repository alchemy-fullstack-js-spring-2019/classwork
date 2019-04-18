document
  .getElementById('create-dragon')
  .addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('/api/v1/dragons', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        type: formData.get('type'),
        wings: formData.get('wings'),
        image: formData.get('image')
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(fetchDragons);
  });

window.onload = fetchDragons;


function fetchDragons() {
  fetch('/api/v1/dragons')
    .then(res => res.json())
    .then(dragons => {
      const tbody = document
        .getElementById('dragons')
        .querySelector('tbody');

      tbody.innerHTML = '';


      dragons.forEach(({ _id, name, type, wings }) => {
        const template = document.createElement('template');
        template.innerHTML = `
        <tr>
          <td><a href="/dragon.html?id=${_id}">${name}</a></td>
          <td>${type}</td>
          <td>${wings}</td>
        </tr>
        `;
        tbody.appendChild(template.content);
      });

    });
}
