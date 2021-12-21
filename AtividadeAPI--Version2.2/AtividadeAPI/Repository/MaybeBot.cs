using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtividadeAPI.Repository
{
    public class MaybeBot
    {
        public int rightChoice = 10;
        public int[] imagination;
        public int SmartMove(int[] arr)
        {
            imagination = arr;
            Vencedor winner = new Vencedor();
            for (var i = 0; i < imagination.Length; i++)
            {
                if (imagination[i] == 0)
                {
                    imagination[i] = 1;
                    int reality = winner.DefinirVencedor(imagination);
                    if (reality == 1)
                    {
                        rightChoice = i;
                    }
                    imagination[i] = 0;
                }
            }
            return rightChoice;
        }
    }
}
