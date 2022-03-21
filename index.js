const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector(".close-btn");
const themeToggler = document.querySelector(".theme-toggler");


// Show sidebar
menuBtn.addEventListener('click' , () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// Fill orders in table

Orders.forEach(order => {
    const tr = document.createElement('tr')
    const trContent = `
                    <td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'panding' ? 'warning' : 'primary' }">${order.shipping}</td>
                    <td class="primary">Detils</td>`;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})