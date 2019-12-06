function createNode(element)
{
    return document.createElement(element);
}

function append(parent, el)
{
    return parent.appendChild(el);
}

const ul = document.getElementById('employees');

const url = 'https://randomuser.me/api/?results=12';

fetch(url)
.then((resp) => resp.json())
.then((data) => {
    let employees = data.results;

    return employees.map((employee) => {

        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span'),
        name = createNode('div'),
        email = createNode('div'),
        city = createNode('div');

        name.classList.add('name');
        email.classList.add('email');
        city.classList.add('city');

        img.src = employee.picture.large;

        name.innerHTML = `${employee.name.first} ${employee.name.last}`;
        email.innerHTML = `${employee.email}`;
        city.innerHTML = `${employee.location.city}`;


        append(li, img);
        append(li, name);
        append(li, email);
        append(li, city);
        append(ul, li);
    })
})

.catch((error) => {
    console.log(JSON.stringify(error));
})