    document.getElementById("inputText").addEventListener("input", function() {
        var novoTexto = document.getElementById("inputText").value;
        document.getElementById("output").textContent = novoTexto;
    });

