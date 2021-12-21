const apiUrljogo = 'https://localhost:5001/api/jogo';
const apiService = {

    addJogo() {
        let jogoCadastro = {
            BaseDoJogo: BaseDoJogo
        }

        const promiseAdd = (resolve, reject) => {
        fetch(apiUrljogo, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(jogoCadastro),
        })
        .then(resolve)
        .catch(reject);
        }
        return new Promise(promiseAdd);
    },

    updateJogo() {
        let jogoRodando = {
            Escolha: escolha
        }
        const promiseUpdate = (resolve, reject) => {
          fetch(apiUrljogo, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(jogoRodando),
          })
          .then(resolve)
          .catch(reject);
        }
        return new Promise(promiseUpdate);
    },

    getJogo() {
        const promiseList = (resolve, reject) => {
          fetch(apiUrljogo, {
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

      botJogo() {
        const promiseList = (resolve, reject) => {
          const apiUrljogo = 'https://localhost:5001/api/jogo/bot';
          fetch(apiUrljogo, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
          })
          .then(resolve)
          .catch(reject);
        }
        return new Promise(promiseList);
      },

    reseteJogo() {
        fetch(apiUrljogo, {
            method: 'DELETE',
            headers: {
            "Content-Type": "application/json",
            },
        })
        .then((resp) => resp)
        .catch((error) => console.log(error));
    },

    vencedorJogo() {
      const promiseList = (resolve, reject) => {
        const apiUrljogo = 'https://localhost:5001/api/jogo/vencedor';
        fetch(apiUrljogo, {
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
}