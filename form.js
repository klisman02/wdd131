    // Product list
    const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    // Useful features list
    const features = [
    "Durability",
    "Ease of Use",
    "Energy Efficiency",
    "Design",
    "Performance",
    "Price"
    ];

    // Populate product select field
    function populateProductOptions() {
    const select = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
    }

    // Generate rating stars using radio buttons
    function generateRatingStars() {
    const container = document.querySelector('form div:nth-of-type(2)'); // second div is rating
    const ratingWrapper = document.createElement('div');
    ratingWrapper.classList.add('rating');

    for (let i = 5; i >= 1; i--) {
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = `star${i}`;
        input.name = 'rating';
        input.value = i;
        input.required = true;

        const label = document.createElement('label');
        label.htmlFor = `star${i}`;
        label.innerHTML = '★'; // Unicode filled star

        ratingWrapper.appendChild(input);
        ratingWrapper.appendChild(label);
    }

    container.appendChild(ratingWrapper);
    }

    // Generate useful feature checkboxes
    function generateCheckboxes() {
    const container = document.querySelector('form div:nth-of-type(4)'); // fourth div is checkbox
    const wrapper = document.createElement('div');
    wrapper.classList.add('checkbox-group');

    features.forEach((feature, index) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `feature${index}`;
        checkbox.name = 'features';
        checkbox.value = feature;

        const label = document.createElement('label');
        label.htmlFor = `feature${index}`;
        label.textContent = feature;

        const pair = document.createElement('div');
        pair.appendChild(checkbox);
        pair.appendChild(label);
        wrapper.appendChild(pair);
    });

    container.appendChild(wrapper);
    }

    // Run all generators on page load
    document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
    generateRatingStars();
    generateCheckboxes();
    });
