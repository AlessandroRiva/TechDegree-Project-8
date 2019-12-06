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
.then(function(data) {
    let employees = data.results;

    return authors.map(function(employee) {

        let li = createNode('li'),
        img = createNode('img')
        span = createNode('span')

        img.src=employee.picture.medium;

        span.innerHTML = `${employee.name.first} ${employee.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);
    })
})

.catch(function(error){
    console.log(JSON.stringify(error));
})