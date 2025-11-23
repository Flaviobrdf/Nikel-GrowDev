const myModal = new bootstrap.Modal("#register-modal")

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.lenght < 5) {
        alert("preencha o campo com e-mail válido")
        return //Para aqui
    }

    if(password.lenght < 4) {
        alert("preencha a senha com no mínimo 4 dígitos")
        return //Para aqui
    }

    saveAccount({
        login: email,
        password: password,
        transaction:[]
    });

    myModal.hide();
    alert("Conta criada com sucesso")
})

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data))
}