let boxes  = document.querySelectorAll(".box");
let reseetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new_game");
let magcontaner = document.querySelector(".msg_container");
let msg = document.querySelector("#new_btn");
let  count = 0;
let turnO = true;
const wining = [ [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]] ;
                const disabled = ()=>{
                    for(let box of boxes){
                    box.disabled = true;
                }
            };
            const anabled = ()=>{
                for(let box of boxes){
                box.disabled = false;
                box.innerText="";
            }
         };
                const showwinner = (winner)=>{
                    msg.innerText= `congrstulations , winner is ${winner} `;
                    magcontaner.classList.remove("hide");
                    disabled();
                }
                const showDrow = ()=>{
                    msg.innerText =`SORRY , THIS MATCH IS DROW `;
                    magcontaner.classList.remove("hide");
                    disabled();
                };
                const chackWiner =()=>{
                    for(let patten of wining){
                      let pas1Val = boxes[patten[0]].innerText;
                      let pas2Val = boxes[patten[1]].innerText;
                      let pas3Val = boxes[patten[2]].innerText;
                      if(pas1Val != ""&& pas2Val !=""&& pas3Val!=""){
                        if(pas1Val=== pas2Val && pas2Val === pas3Val){
                            showwinner(pas1Val);
                            return true;
                      }
                    }
                }};
                boxes.forEach((box)=> {
                    box.addEventListener(("click"),() =>{
                        if(turnO===true){
                     box.innerText = "O";
                        turnO= false;
                        }
                        else{
                            box.innerText = "X";
                            turnO =true;
                        }
                        box.disabled =true;
                        count++;
                         let isWinner = chackWiner();
                         if( count=== 9 &&!isWinner){
                            showDrow();
                         }
                    });
                });
             
                const resetGame = ()=> {
                    count = 0; 
                     turnO = true;
                     anabled();
                    magcontaner.classList.add("hide");
                };
                newGameBtn.addEventListener("click",resetGame);
                reseetBtn.addEventListener("click", resetGame);