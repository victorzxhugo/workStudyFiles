document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const tableBody = document.getElementById("tbody");

    userForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const sexo = document.querySelector('input[name="sexo"]:checked').id;

      
        const newRow = document.createElement("tr");

  
        const nomeCell = document.createElement("td");
        nomeCell.textContent = nome;

        const emailCell = document.createElement("td");
        emailCell.textContent = email;

        const sexoCell = document.createElement("td");
        sexoCell.textContent = sexo;

    
        newRow.appendChild(nomeCell);
        newRow.appendChild(emailCell);
        newRow.appendChild(sexoCell);

        
        tableBody.appendChild(newRow);
        userForm.reset();
    });
});
