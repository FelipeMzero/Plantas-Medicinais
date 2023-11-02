document.addEventListener("DOMContentLoaded", function () {
    fetch('/static/data/plants.csv', { credentials: "same-origin" })
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n').slice(1); // Remove a primeira linha (cabeçalho)

            // Dividir as plantas em grupos de 5
            const plantsGroups = [];
            for (let i = 0; i < lines.length; i += 5) {
                plantsGroups.push(lines.slice(i, i + 5));
            }

            // Cria um card para cada planta e exibe em fila de 5x5
            plantsGroups.forEach(group => {
                const plantRow = document.createElement('div');
                plantRow.classList.add('plant-row');

                group.forEach(line => {
                    const parts = line.split(',');

                    // Certifique-se de que há dados suficientes na linha
                    if (parts.length >= 2) {
                        const name = parts[1];
                        const image = `/static/img/${name}.jpg`; // Verifique o caminho da imagem
                        const description = parts[2];

                        // Cria os elementos HTML do card
                        const card = document.createElement('div');
                        card.classList.add('card');

                        const img = document.createElement('img');
                        img.setAttribute('src', image);
                        img.classList.add('card-img-top');
                        img.style.display = 'block';
                        img.style.margin = '0 auto';

                        const cardBody = document.createElement('div');
                        cardBody.classList.add('card-body');

                        const cardTitle = document.createElement('h5');
                        cardTitle.classList.add('card-title');
                        cardTitle.textContent = name;

                        const cardText = document.createElement('p');
                        cardText.classList.add('card-text');
                        cardText.textContent = description;

                        // Adiciona os elementos ao card
                        cardBody.appendChild(cardTitle);
                        cardBody.appendChild(cardText);

                        card.appendChild(img);
                        card.appendChild(cardBody);

                        plantRow.appendChild(card);
                    }
                });

                // Adiciona a fila de cards à página
                const plantsContainer = document.querySelector('#plants-container');
                plantsContainer.appendChild(plantRow);
            });
        });
});
