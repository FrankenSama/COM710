document.addEventListener('DOMContentLoaded', function() {
    const placesBtn = document.getElementById('placesBtn');
    const creaturesBtn = document.getElementById('creaturesBtn');
    const dataDisplay = document.getElementById('dataDisplay');
    const defaultMessage = document.getElementById('defaultMessage');

    // XMLHttpRequest for Places
    placesBtn.addEventListener('click', function() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'data/places.json', true);
        
        xhr.onload = function() {
            if (this.status === 200) {
                const places = JSON.parse(this.responseText);
                displayData(places, 'location', 'Places of Skyrim');
            } else {
                console.error('Error loading places data');
            }
        };
        
        xhr.onerror = function() {
            console.error('Request failed');
        };
        
        xhr.send();
    });

    // Fetch API for Creatures
    creaturesBtn.addEventListener('click', function() {
        fetch('data/creature.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(creatures => {
                displayData(creatures, 'description', 'Magical Creatures', true); // true for table display
            })
            .catch(error => {
                console.error('Error fetching creatures data:', error);
            });
    });

    function displayData(items, propertyKey, title, asTable = false) {
        defaultMessage.style.display = 'none';
        dataDisplay.innerHTML = '';

        if (asTable) {
            // Create table display
            const table = document.createElement('table');
            
            // Create table header
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            
            const nameHeader = document.createElement('th');
            nameHeader.textContent = title.includes('Creature') ? 'Creature' : 'Name';
            
            const descHeader = document.createElement('th');
            descHeader.textContent = title.includes('Creature') ? 'Description' : 'Location';
            
            headerRow.appendChild(nameHeader);
            headerRow.appendChild(descHeader);
            thead.appendChild(headerRow);
            table.appendChild(thead);
            
            // Create table body
            const tbody = document.createElement('tbody');
            
            items.forEach(item => {
                const row = document.createElement('tr');
                
                const nameCell = document.createElement('td');
                nameCell.textContent = item.name;
                
                const propCell = document.createElement('td');
                propCell.textContent = item[propertyKey];
                
                row.appendChild(nameCell);
                row.appendChild(propCell);
                tbody.appendChild(row);
            });
            
            table.appendChild(tbody);
            dataDisplay.appendChild(table);
        } else {
            // Create simple list display
            const titleElement = document.createElement('h3');
            titleElement.textContent = title;
            dataDisplay.appendChild(titleElement);
            
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'data-item';
                
                const namePara = document.createElement('p');
                namePara.innerHTML = `<strong>Name:</strong> ${item.name}`;
                
                const propPara = document.createElement('p');
                propPara.innerHTML = `<strong>${propertyKey.charAt(0).toUpperCase() + propertyKey.slice(1)}:</strong> ${item[propertyKey]}`;
                
                itemDiv.appendChild(namePara);
                itemDiv.appendChild(propPara);
                dataDisplay.appendChild(itemDiv);
            });
        }
    }
});