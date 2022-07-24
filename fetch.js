
const btn = document.querySelector('#btn');
const table = document.querySelector('#table');

btn.addEventListener('click', buscar);

function buscar (){
	fetch('https://randomuser.me/api/')
.then((response) =>{return response.json()})
.then((user) =>{
	let resul = user.results[0];
	const nombre = resul.name.first;
	const apellido = resul.name.last;
	const edad = resul.dob.age;
	const email = resul.email;
	 let template =   `
			<td>${nombre}</td>
			<td>${apellido}</td>
			<td>${edad}</td>
			<td>${email}</td>`
	 // table.appendChild(element);
	 console.log(resul)
	 let tr = document.createElement('tr');
	 tr.innerHTML = template
	 // tr.innerHTML = td;
	 // tr.appendChild(td)
	 // td.innerHTML = element;
	 // tr.appendChild(td)
	 // td.innerHTML = edad;
	 // tr.appendChild(td);
	 table.appendChild(tr);	 

	
})
}

