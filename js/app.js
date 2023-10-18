function validacao(inputElementId, erroElementId) {
    const tag = document.getElementById(inputElementId);
    const erro = document.getElementById(erroElementId);

    tag.addEventListener("change", function () {
        if (tag.value === "") {
            tag.classList.add("erro");
            tag.classList.remove("valido");

            erro.style.display = "block";
            erro.innerText = 'Campo Vazio(a)';
        } else {
            tag.classList.add("valido");
            tag.classList.remove("erro");

            erro.style.display = "none";
        }
    });
}

validacao("cpf", "erro");
validacao("nome", "erro");
validacao("email", "erro");
validacao("sexo", "erro");
validacao("data", "erro");
validacao("idade", "erro");
validacao("bairro", "erro");
validacao("cidade", "erro");
validacao("rg", "erro");
validacao("estado", "erro");
validacao("pai", "erro");
validacao("mae", "erro");
validacao("signo", "erro");
validacao("celular", "erro");
validacao("senha", "erro");
validacao("cep", "erro");
validacao("telefone", "erro");
validacao("endereco", "erro");
validacao("casa", "erro");
validacao("altura", "erro");
validacao("peso", "erro");
validacao("cor", "erro");
validacao("sangue", "erro");








