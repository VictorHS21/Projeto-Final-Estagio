const apiUrl = 'https://localhost:5001/api/atividade';
const usuarioService = {
  addUser() {
    let userCadastro = {
      Id: uuidv4(),
      FirstName: firstName.value,
      LastName: last_name.value,
      EmailUser: email.value,
      PhoneUser: phone.value,
      BirthDayUser: day.value + "/" + month.value + "/" + year.value,
      PasswordUser: password.value,
    }

    const promiseAdd = (resolve, reject) => {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userCadastro),
      })
      .then(resolve)
      .catch(reject);
    }
    return new Promise(promiseAdd);
  },

  searchUserById(id) {
    const promiseSearch = (resolve, reject) => {
      let apiUrlId = apiUrl + "/" + id;
      fetch(apiUrlId, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(resolve)
      .catch(reject);
    }
    return new Promise(promiseSearch);
  },

  listAllUser() {
    const promiseList = (resolve, reject) => {
      fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(resolve)
      .catch(reject);
    }
    return new Promise(promiseList);
  },

  updateUser(id) {
    let userUpdate = {
      Id: id,
      FirstName: firstName.value,
      LastName: last_name.value,
      EmailUser: email.value,
      PhoneUser: phone.value,
      BirthDayUser: day.value + "/" + month.value + "/" + year.value,
      PasswordUser: password.value,
    }
    const promiseUpdate = (resolve, reject) => {
      let apiUrlId = apiUrl + "/" + id;
      fetch(apiUrlId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userUpdate),
      })
      .then(resolve)
      .catch(reject);
    }
    return new Promise(promiseUpdate);
  },

  deleteUser(id) {
    let apiUrlId = apiUrl + "/" + id;
    fetch(apiUrlId, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((resp) => resp)
    .catch((error) => console.log(error));
  },
};