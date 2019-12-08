const containerEmployees = document.querySelector('.container-employees');
let employees = [];
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const ul = document.getElementById('employees');
const url = 'https://randomuser.me/api/?results=12';
const li = document.querySelector('.employee-card');

function createNode(element)
{
    return document.createElement(element);
}

function append(parent, el)
{
    return parent.appendChild(el);
}

fetch(url)
.then((resp) => resp.json())
.then((data) => {
    let employees = data.results;

    return employees.map((employee) => {

        let li = createNode('li'),
        img = createNode('img'),
        name = createNode('div'),
        email = createNode('div'),
        city = createNode('div'),
        containerInfo = createNode('div');

        li.classList.add('employee-card');
        containerInfo.classList.add('container-info');
        name.classList.add('name');
        email.classList.add('email');
        city.classList.add('city');

        img.src = employee.picture.large;

        name.innerHTML = `${employee.name.first} ${employee.name.last}`;
        email.innerHTML = `${employee.email}`;
        city.innerHTML = `${employee.location.city}`;

        append(li, img);
        append(containerInfo, name);
        append(containerInfo, email);
        append(containerInfo, city);
        append(li, containerInfo)
        append(ul, li);
    });
})

.catch((error) => {
    console.log(JSON.stringify(error));
})

function displayModal(index) {
    // use object destructuring make our template literal cleaner
    let { name, dob, phone, email, location: { city, street, state, postcode
    }, picture } = employees[index];
    let date = new Date(dob.date);
    const modalHTML = `
    <img class="avatar" src="${picture.large}" />
    <div class="text-container">
    <h2 class="name">${name.first} ${name.last}</h2>
    <p class="email">${email}</p>
    <p class="address">${city}</p>
    <hr />
    <p>${phone}</p>
    <p class="address">${street}, ${state} ${postcode}</p>
    <p>Birthday:
    ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
    `;
    overlay.classList.remove("hidden");
    modalContainer.innerHTML = modalHTML;
}


containerEmployees.addEventListener('click', e => {
    const card = e.target.closest(".employee-card");
    const index = card.getAttribute('data-index');
    displayModal(index);
    });
    modalClose.addEventListener('click', () => {
        overlay.classList.add("hidden");
        });


