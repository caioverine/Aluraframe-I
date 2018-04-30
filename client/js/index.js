var campos = [
	document.querySelector('#data'),
	document.querySelector('#valor'),
	document.querySelector('#quantidade')
];
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){

	var tr = document.createElement('tr');
	var tdVolume = document.createElement('td');

	campos.forEach(function(campo){

		event.preventDefault();

		var td = document.createElement('td');
		td.textContent = campo.value;
		tr.appendChild(td);
	})

	tdVolume.textContent = campos[1].value * campos[2].value;

	tr.appendChild(tdVolume);
	tbody.appendChild(tr);

	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;

	campos[0].focus();
});
