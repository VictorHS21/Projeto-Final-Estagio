using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtividadeAPI.Repository
{
    public class BotRandom
    {
        Random random = new Random();
        public void JogadaDoBot(int[] arr)
        {
            var numerovalido = false;
            do
            {
                var bot = random.Next(0, 9);
                if (arr[bot] == 0)
                {
                    arr[bot] = 2;
                    numerovalido = true;
                }
            } while (numerovalido == false);
        }
    }
}
