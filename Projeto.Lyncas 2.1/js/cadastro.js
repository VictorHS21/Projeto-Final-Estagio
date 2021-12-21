var buttom = document.getElementById("button_footer");

popularAnos();
popularDias();
popularMeses();

// confere se tem algo na URL
if (location.search != "") {
  getUser();
}

//faz a verificação quando clica no botão
window.buttom.addEventListener("click", (e) => {
  e.preventDefault();

  /* pegar os valores */
  firstName = document.getElementById("first_name");
  last_name = document.getElementById("last_name");
  email = document.getElementById("email");
  phone = document.getElementById("phone");
  password = document.getElementById("password");
  checkPassword = document.getElementById("check_password");
  day = document.getElementById("day");
  month = document.getElementById("month");
  year = document.getElementById("year");

  /* padronização dos campos para não validos */
  var validName = false;
  var validLastName = false;
  var validEmail = false;
  var validPhone = false;
  var validPassword = false;
  var validCheckPassword = false;
  var validDay = false;
  var validMonth = false;
  var validYear = false;

  /* validação de campo vazio*/
  if (firstName.value == "") {
    firstName.classList.add("errorInput");
  }

  if (last_name.value == "") {
    last_name.classList.add("errorInput");
  }

  if (email.value == "") {
    email.classList.add("errorInput");
  }

  if (phone.value == "") {
    phone.classList.add("errorInput");
  }

  if (day.value == "") {
    day.classList.add("errorInput");
  } else {
    day.classList.remove("errorInput");
    validDay = true;
  }

  if (month.value == "") {
    month.classList.add("errorInput");
  } else {
    month.classList.remove("errorInput");
    validMonth = true;
  }

  if (year.value == "") {
    year.classList.add("errorInput");
  } else {
    year.classList.remove("errorInput");
    validYear = true;
  }

  /* validação do conteudo */
  if (isNaN(firstName.value) == true) {
    firstName.classList.remove("errorInput");
    validName = true;
  } else {
    firstName.classList.add("errorInput");
  }

  if (isNaN(last_name.value) == true) {
    last_name.classList.remove("errorInput");
    validLastName = true;
  } else {
    last_name.classList.add("errorInput");
  }

  if (
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1 ||
    email.value.indexOf(".") - email.value.indexOf("@") == 1
  ) {
    email.classList.add("errorInput");
  } else {
    email.classList.remove("errorInput");
    validEmail = true;
  }

  if (phone.value.length == 15) {
    phone.classList.remove("errorInput");
    validPhone = true;
  } else {
    phone.classList.add("errorInput");
  }

  if (password.value.length < 8 || password.value.length > 16) {
    password.classList.add("errorInputPassword");
  } else {
    password.classList.remove("errorInputPassword");
    validPassword = true;
  }

  if (checkPassword.value.length < 8 || checkPassword.value.length > 16) {
    checkPassword.classList.add("errorInputPassword");
  } else {
    checkPassword.classList.remove("errorInputPassword");
    validCheckPassword = true;
  }

  /* verificação da senha */
  if (
    password.value == checkPassword.value &&
    password.value != "" &&
    checkPassword != ""
  ) {
    password.classList.remove("errorInput");
    checkPassword.classList.remove("errorInput");
    validCheckPassword = true;
  } else {
    password.classList.add("errorInput");
    checkPassword.classList.add("errorInput");
    validCheckPassword = false;
  }
  // gera um ID aleatório
  UUID = uuidv4();
  //foi necessário chamar para funcionar o if abaixo
  let url = new URLSearchParams(location.search);
  let urlID = url.get("ID");

  // verifica para adicionar ou atualizar no localStorage
  if (
    validName &&
    validLastName &&
    validEmail &&
    validPhone &&
    validPassword &&
    validCheckPassword &&
    validDay &&
    validMonth &&
    validYear
  ) {
    save(urlID);
  }
});

async function save(urlID) { 
  if (location.search != "") {
    await usuarioService.updateUser(urlID)
      .then((resp) => resp)
      .catch((error) => console.log(error));
    alert("User successfully edited");
    window.location.href = "registro.html";
  } else {
    await usuarioService.addUser()
      .then((resp) => resp)
      .catch((error) => console.log(error));
    window.location.href = "registro.html";
  }
}

// function que substitui os valores dos inputs para editar
async function getUser() {
  let url = new URLSearchParams(location.search);
  let id = url.get("ID");
  var user = await usuarioService.searchUserById(id)
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
  var dateTest = user.birthDayUser.split("/", 3);
  first_name.value = user.firstName;
  last_name.value = user.lastName;
  email.value = user.emailUser;
  phone.value = user.phoneUser;
  day.value = dateTest[0];
  month.value = dateTest[1];
  year.value = dateTest[2].trim();
  password.value = user.passwordUser;
  check_password.value = user.passwordUser;

  //demostra que o input já esta prenchido
  day.style.color = "black";
  month.style.color = "black";
  year.style.color = "black";
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}


function popularDias() {
  let day_selected = new Date();
  var option = "";
  option = '<option value="" hidden>Day</option>'; // opção pre seleciona

  for (let i = 1; i < 32; i++) {
    let daySelect = i <= 9 ? "0" + i : i;

    let selected = i === day_selected ? " selected" : "";
    option +=
      '<option value="' +
      daySelect +
      '"' +
      selected +
      ">" +
      daySelect +
      "</option>";
  }
  document.getElementById("day").innerHTML = option;
}

function popularMeses() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var monthSelected = new Date();
  var option = "";
  option = '<option value="" hidden>Month</option>'; // opção pre seleciona

  for (let i = 0; i < months.length; i++) {
    let selected = i == monthSelected ? " selected" : "";
    option +=
      '<option value="' +
      months[i] +
      '"' +
      selected +
      ">" +
      months[i] +
      "</option>";
  }
  document.getElementById("month").innerHTML = option;
}


function popularAnos() {
    let year_start = 1950;
    let year_end = new Date().getFullYear();
    let year_selected = "";
  
    let option = "";
    option = '<option value="" hidden>Year</option>'; // opção pre selecionada
  
    for (let i = year_start; i <= year_end; i++) {
      let selected = i === year_selected ? " selected" : "";
      option += '<option value="' + i + '"' + selected + ">" + i + "</option>";
    }
  
    document.getElementById("year").innerHTML = option;
  }
  

/* aplica uma mascara no telefone */
function mask(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execMask()", 1);
}
function execMask() {
  v_obj.value = v_fun(v_obj.value);
}
function maskPhone(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id("phone").onkeyup = function () {
    mask(this, maskPhone);
  };
};

/* limita os inputs relacionados ao nome para ter apenas letras */
function preventeNumber(o, f) {
  p_obj = o;
  p_fun = f;
  setTimeout("execpreventeNumber()", 1);
}
function execpreventeNumber() {
  p_obj.value = p_fun(p_obj.value);
}
function pNumber(v) {
  v = v.replace(/\d/g, ""); //Remove tudo o que não é letra
  return v;
}
function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id("first_name").onkeyup = function () {
    preventeNumber(this, pNumber);
  };
  id("last_name").onkeyup = function () {
    preventeNumber(this, pNumber);
  };
};

//aguns toques na estética
function selectColorDay() {
  if (day.value != "") {
    day.style.color = "black";
  }
}
function selectColorMonth() {
  if (month.value != "") {
    month.style.color = "black";
  }
}
function selectColorYear() {
  if (year.value != "") {
    year.style.color = "black";
  }
}

// teste para visualização da senha. Deu meio certo, porque só funciona na parte de editar.
if (location.search != "") {
  let testeSenha = document.getElementById("labelPassword");
  let testeConfereSenha = document.getElementById("labelCheck_password");

  testeSenha.addEventListener("click", () => {
    let inputSenha = document.getElementById("password");

    if (inputSenha.getAttribute("type") == "password") {
      inputSenha.setAttribute("type", "text");
    } else {
      inputSenha.setAttribute("type", "password");
    }
  });

  testeConfereSenha.addEventListener("click", () => {
    let inputSenha = document.getElementById("check_password");

    if (inputSenha.getAttribute("type") == "password") {
      inputSenha.setAttribute("type", "text");
    } else {
      inputSenha.setAttribute("type", "password");
    }
  });
}

//video de exemplo: https://www.youtube.com/watch?v=u0SFSKnIMUw
//mais um de exemplo para validação: https://www.youtube.com/watch?v=THQujIyE7Tg&list=LL&index=2
