using AtividadeAPI.Models;
using AtividadeAPI.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace AtividadeAPI.Controllers
{
    [Route("api/jogo")]
    [ApiController]
    public class JogoController : ControllerBase
    {
        public static List<Jogo> _jogo = new List<Jogo>();
        Random random = new Random();

        [HttpGet]
        public int[] Get()
        {
            var jogo = _jogo[0];
            return jogo.BaseDoJogo;
        }

        [HttpGet("vencedor")]
        public int Vitoria()
        {
            var jogo = _jogo[0];

            Vencedor definirVencedor = new Vencedor();
            int retorno = definirVencedor.DefinirVencedor(jogo.BaseDoJogo);
            return retorno;
        }

        [HttpPost("bot")]
        public ActionResult BotRandom()
        {
            var jogo = _jogo[0];
            var array = jogo.BaseDoJogo;

            MaybeBot move = new MaybeBot();
            var rightChoice = move.SmartMove(array);

            if (rightChoice == 10)
            {
                BotRandom jogada = new BotRandom();
                jogada.JogadaDoBot(array);
            }
            else
            {
                array[rightChoice] = 2;
            }

            return Ok();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Jogo jogo)
        {
            if(_jogo.Count > 0)
            {
                _jogo.RemoveAt(0);
            }
            _jogo.Add(jogo);
            return Ok();
        }

        [HttpPut]
        public ActionResult Put(Jogo jogando)
        {
            var jogo = _jogo[0];
            var array = jogo.BaseDoJogo;
            array[jogando.Escolha] = 1;

            return Ok();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            var jogo = _jogo[0];

            Array.Clear(jogo.BaseDoJogo, 0, jogo.BaseDoJogo.Length);

            return Ok();
        }
    }
}
