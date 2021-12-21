const listPosition = document.getElementById("tableBody");

async function showUsers() {
  arrayUser = await usuarioService.listAllUser()
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
  if (arrayUser != null) {
    let tr = "";
    j = 0;
    arrayUser.map((object) => {
      j++;
      tr += `
        <tr class="tr">
            <td class="line_td first_colum">${j}</td>
            <td class="line_td"><div class="center_table bold_table"><img class="img_table" src="https://img00.deviantart.net/7f4e/i/2014/147/9/a/netero_by_felipedarkzz-d7k1cc6.jpg" 
            alt="Real Netero"> ${object.firstName} ${object.lastName}</div></td>
            <td class="line_td">${object.birthDayUser}</td>
            <td class="line_td">Admin</td>
            <td class="line_td"><div class="center_table"><i class="fas fa-circle margin_icom point_green"></i> Active</div></td>
            <td class="line_td last_colum"><i class="fas fa-dice cursor dice" onclick="callGame('${object.id}')"></i>
            <i class="fas fa-cog cursor gear" onclick="editionHeld('${object.id}')"></i> 
            <i class="fas fa-times-circle cursor close" onclick="ExclusionRealized('${object.id}')"></i></td>
        </tr>`;
    });
    listPosition.innerHTML = tr;
  }
}

async function callGame(id){
  var objctUser = await usuarioService.searchUserById(id)
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
  var confirmEdit = confirm(
    "You really want to challenge " +
    objctUser.firstName +
    " " +
    objctUser.lastName +
    "?"
  );
  if (confirmEdit == true) {
    window.location.href = "jogo.html?ID=" + objctUser.id;
  }
}

//para trocar de página e pedir uma confirmação para editar
async function editionHeld(id) {
  var objctUser = await usuarioService.searchUserById(id)
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
  var confirmEdit = confirm(
    "Want to really edit the user " +
    objctUser.firstName +
    " " +
    objctUser.lastName +
    "?"
  );
  if (confirmEdit == true) {
    window.location.href = "cadastro.html?ID=" + objctUser.id;
  }
}

async function ExclusionRealized(id) {
  var objctUser = await usuarioService.searchUserById(id)
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
  var confirmRemove = confirm("Want to really delete the user " + objctUser.firstName + " " + objctUser.lastName + "?");
  if (confirmRemove == true) {
    usuarioService.deleteUser(objctUser.id);
    exclusionPerformed(objctUser.firstName, objctUser.lastName);
  };
}

//uma mensagem para mostrar que fou excluido com sucesso
function exclusionPerformed(fnameUser, lnameUser) {
  alert(
    "The user " +
      fnameUser +
      " " +
      lnameUser +
      " has been successfully deleted."
  );
  showUsers();
}
