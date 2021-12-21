const apiUrl = 'https://localhost:5001/api/jogo';
const apiService = {
    getJogo() {
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

      botJogo() {
        const promiseList = (resolve, reject) => {
          const apiUrl = 'https://localhost:5001/api/jogo/bot';
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

    addJogo() {
        let jogoCadastro = {
            SelectionsPlayer: player1Selections,
            SelectionsBot: player2Selections,
            PotuacaoPlayer: points1,
            PontuacaoBot: points2,
            Jogador: currentPlayer
        }
    
        const promiseAdd = (resolve, reject) => {
          fetch(apiUrl, {
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
            SelectionsPlayer: player1Selections,
            SelectionsBot: player2Selections,
            PotuacaoPlayer: points1,
            PontuacaoBot: points2,
            Jogador: currentPlayer
        }
        const promiseUpdate = (resolve, reject) => {
          fetch(apiUrl, {
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

      reseteJogo() {
        fetch(apiUrl, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((resp) => resp)
        .catch((error) => console.log(error));
    },

    clearJogo() {
      const apiUrl = 'https://localhost:5001/api/jogo/clear';
      fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((resp) => resp)
      .catch((error) => console.log(error));
  },
}