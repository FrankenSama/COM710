
document.addEventListener('DOMContentLoaded', function () {
    const placesBtn = document.getElementById('placesBtn');
    const creaturesBtn = document.getElementById('creaturesBtn');
    const dataDisplay = document.getElementById('dataDisplay');
    const defaultMessage = document.getElementById('defaultMessage');

    // Null checks for required DOM elements
    if (!placesBtn || !creaturesBtn || !dataDisplay || !defaultMessage) {
        console.error('Required DOM elements not found.');
        return;
    }

    // Helper: Show error message in dataDisplay
    function showError(message) {
        defaultMessage.style.display = 'none';
        dataDisplay.innerHTML = `<p class="error">${message}</p>`;
    }

    // XMLHttpRequest for Places
    placesBtn.addEventListener('click', function () {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'data/places.json', true);

        xhr.onload = function () {
            if (this.status === 200) {
                try {
                    const places = JSON.parse(this.responseText);
                    displayData(places, 'location', 'Places of Skyrim', false);
                } catch (e) {
                    showError('Failed to parse places data.');
                    console.error('JSON parse error:', e);
                }
            } else {
                showError('Error loading places data.');
                console.error('Error loading places data. Status:', this.status);
            }
        };

        xhr.onerror = function () {
            showError('Request failed. Please check your connection.');
            console.error('Request failed');
        };

        xhr.send();
    });

    // Fetch API for Creatures
    creaturesBtn.addEventListener('click', function () {
        fetch('data/creature.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(creatures => {
                displayData(creatures, 'description', 'Magical Creatures', true);
            })
            .catch(error => {
                showError('Error fetching creatures data.');
                console.error('Error fetching creatures data:', error);
            });
    });

    /**
     * Display data as a table or list.
     * @param {Array} items - Array of objects to display.
     * @param {string} propertyKey - Key to display as the second column/property.
     * @param {string} title - Title for the section.
     * @param {boolean} asTable - Whether to display as a table.
     */
    function displayData(items, propertyKey, title, asTable = false) {
        defaultMessage.style.display = 'none';
        dataDisplay.innerHTML = '';

        if (!Array.isArray(items) || items.length === 0) {
            dataDisplay.innerHTML = `<p>No data available.</p>`;
            return;
        }

        if (asTable) {
            // Table display
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');

            // More robust header logic
            let nameHeaderText = 'Name';
            let propHeaderText = propertyKey.charAt(0).toUpperCase() + propertyKey.slice(1);

            if (title.toLowerCase().includes('creature')) {
                nameHeaderText = 'Creature';
                propHeaderText = 'Description';
            } else if (title.toLowerCase().includes('place')) {
                nameHeaderText = 'Place';
                propHeaderText = 'Location';
            }

            const nameHeader = document.createElement('th');
            nameHeader.textContent = nameHeaderText;
            const propHeader = document.createElement('th');
            propHeader.textContent = propHeaderText;

            headerRow.appendChild(nameHeader);
            headerRow.appendChild(propHeader);
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            items.forEach(item => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                nameCell.textContent = item.name || 'Unknown';
                const propCell = document.createElement('td');
                propCell.textContent = item[propertyKey] || 'N/A';
                row.appendChild(nameCell);
                row.appendChild(propCell);
                tbody.appendChild(row);
            });
            table.appendChild(tbody);
            dataDisplay.appendChild(table);
        } else {
            // List display
            const titleElement = document.createElement('h3');
            titleElement.textContent = title;
            dataDisplay.appendChild(titleElement);

            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'data-item';

                const namePara = document.createElement('p');
                namePara.innerHTML = `<strong>Name:</strong> ${item.name || 'Unknown'}`;

                const propPara = document.createElement('p');
                propPara.innerHTML = `<strong>${propertyKey.charAt(0).toUpperCase() + propertyKey.slice(1)}:</strong> ${item[propertyKey] || 'N/A'}`;

                itemDiv.appendChild(namePara);
                itemDiv.appendChild(propPara);
                dataDisplay.appendChild(itemDiv);
            });
        }
    }
});
