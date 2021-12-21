using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtividadeAPI.Repository
{
    public class Vencedor
    {
        public int DefinirVencedor(int[] arr)
        {
            //Condição na horizontal  
            if (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != 0)
            {
                return 1;
            } 
            else if (arr[3] == arr[4] && arr[4] == arr[5] && arr[3] != 0)
            {
                return 1;
            } 
            else if (arr[6] == arr[7] && arr[7] == arr[8] && arr[6] != 0)
            {
                return 1;
            }
            //Condição na vertical      
            else if (arr[0] == arr[3] && arr[3] == arr[6] && arr[0] != 0)
            {
                return 1;
            } 
            else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != 0)
            {
                return 1;
            }
            else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != 0)
            {
                return 1;
            }
            //Condição cruzada
            else if (arr[0] == arr[4] && arr[4] == arr[8] && arr[0] != 0)
            {
                return 1;
            }
            else if (arr[2] == arr[4] && arr[4] == arr[6] && arr[2] != 0)
            {
                return 1;
            }
            //Empate
            else if (arr[0] != 0 && arr[1] != 0 && arr[2] != 0 && arr[3] != 0 && arr[4] != 0 && arr[5] != 0 && arr[6] != 0 && arr[7] != 0 && arr[8] != 0)
            {
                return -1;
            }
            //Vencedor ainda não definido
            else
            {
                return 0;
            }
        }
    }
}
