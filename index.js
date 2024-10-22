/*
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura 
de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/


// Criando o nome do herói

let NomeHeroi = "RelampagoMarquin";
let NivelHeroi = "";
let Xp = "9000" //Digite o número desejado para ver qual o nível do seu herói :)

if (Xp <= 1000){
    NivelHeroi = ("Ferro.");
    }else if(Xp <= 2000){
        NivelHeroi = ("bronze.");
        }else if(Xp <= 5000){
            NivelHeroi = ("Prata.");
            }else if(Xp <= 7000){
                NivelHeroi = ("Ouro.");
                }else if(Xp <= 8000){
                    NivelHeroi = ("Platina.");
                    }else if(Xp <= 9000){
                        NivelHeroi = ("Ascendente.");
                        }else if(Xp <= 10000){
                            NivelHeroi = ("Imortal.");
                            }else if(Xp >= 10001){
                                NivelHeroi = ("Radiante.")
}

console.log("O herói " + NomeHeroi + " está no nível: " + NivelHeroi);