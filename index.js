
const btn = document.querySelector('#btn');
const table = document.querySelector('#table');

btn.addEventListener('click', buscar);

function buscar (){
	fetch('https://randomuser.me/api/')
.then(response => {return response.json()})
.then(user =>{
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
	 //console.log(resul)
	 // table.style.right = '150px';
	 btn.style.right = '40px'; 
	 let tr = document.createElement('tr');
	 tr.innerHTML = template;
	 table.append(tr);	 

	
})
}

