
// -------PARTE 1-------

// 1.creo un eventlistener su bottone 
// 2. al clic sul bottone genero un ciclo che mi produce 10 elementi per riga per 10 righe (10 * 10 = 100)
// 3. ogni cella avra al suo interno stampato il suo numero identificativo
// 4. per ogni cella creo un event listener che toggla una classe con BG azzurro
//    e stampa il suo numero in console

// ------PARTE 2--------


// 1.creo un ciclo che genera 16 numeri random diversi
//   tra loro in un array compresi tra 1 e x(x=input) 
// 2.creo un array dei numeri contenuti nelle celle 
//   -se i numeri dell'array bombe corrispondono ai numeri
//    dell'array numeri celle sostituisco con una bomba
// 3.se clicco su una bomba o clicco tutte le caselle non bomba rimuovo l'event listener da tutti i bottoni
//   e mostro un messaggio e il numero di caselle corrette cliccate
//   -se è una bomba termino e mostro hai perso
//   -se non è una bomba o lo rimuovo dall'array e quando l'array è vuoto termino la partita oppure
//    creo un contro-array e controllo quando i due array sono uguali




// const gridGeneratorButton = document.getElementById("grid-generator");

// gridGeneratorButton.addEventListener("click", function(){
    
    
    const difficultySetting = document.getElementById("difficulty-setting");

    const endGameScreen = document.getElementById("end-game")

    const gameOver = document.querySelector(".game-over")

    const restartBtn = document.getElementById("restart")

    const myContainer = document.getElementById("grid-container");

  
    
    difficultySetting.addEventListener("submit", function(event){
        
        event.preventDefault();

        
    const userDifficultyChoice = document.getElementById("user-difficulty-choice");
    
    
    myContainer.innerHTML="";
    
    const difficultyChoiceValue = parseInt (userDifficultyChoice.value);
    
    const bombArray = uniqueRandomNumberArray(16, difficultyChoiceValue**2);
        
    let row;
    
    const contentArray = [];
    
    let activeCellCounter = null;
    
    let bombCounter = null;

    let flag = false;
    
    for(let i=1;i <= (difficultyChoiceValue**2); i++){
        
        
        
        if(i === 1 || ((i-1) % difficultyChoiceValue === 0 && i != (difficultyChoiceValue**2))){

            row = document.createElement("div");
            
            row.classList.add("row", `row-cols-${difficultyChoiceValue}`, "g-0");
            
            myContainer.append(row);
            
        }
        
        const col = document.createElement("div");
        
        col.classList.add( "cell",`cell-${difficultyChoiceValue}` );
        
        row.append(col);
        
        const content = document.createElement("div")
        contentArray.push(content)
        content.classList.add("content")
        
        col.append(content);
        
        content.append(i);

        const overlayTop = document.createElement("div");
        overlayTop.classList.add("overlay-top");
        col.append(overlayTop) 

        const overlayBottom = document.createElement("div");
        overlayBottom.classList.add("overlay-bottom");
        col.append(overlayBottom) 
   
        const trigger = document.createElement("div");
        trigger.classList.add("trigger");
        col.append(trigger) 
        
        
        
        let index=0;
        
        while( index < bombArray.length){

            if( parseInt(content.innerHTML) == bombArray[index]){
                
                trigger.addEventListener("click", function(){

                   overlayTop.classList.add("my-collapse");
                   overlayBottom.classList.add("my-collapse");

                   
                    
                    if( content.parentElement.classList.contains("active")){

                         content.parentElement.classList.remove("active")

                    }

                    content.innerHTML=`<img src="img/pngwing.com.png" alt="">`;
                    
                    
                     content.parentElement.classList.add("bomb");

                    activeCellCounter = document.querySelectorAll(".active")
                    
                    bombCounter = document.querySelectorAll(".bomb")
                    
                    if(bombCounter.length > 0 && bombCounter.length != null){

                        console.log(activeCellCounter)

                        gameOver.append(`You lose
                        your score is:
                        ${activeCellCounter.length} `)

                        setTimeout(function(){
                            
                            endGameScreen.classList.add("show")
                            
        
                        },400);
                        
                               
                    }

                }
                
                )
                
                break;
            }
            
            else{ 
                
                
                trigger.addEventListener("click", function(){

                    overlayTop.classList.add("my-collapse");
                    overlayBottom.classList.add("my-collapse");

                    content.innerHTML=`<img src="img/872_generated.jpg" alt="">`;
                    
                    if( content.parentElement.classList.contains("active")){
                        
                         content.parentElement.classList.remove("active")

                    }

                     content.parentElement.classList.add("active")
                    
                    activeCellCounter = document.querySelectorAll(".active")
                    
                    if(activeCellCounter.length == ((difficultyChoiceValue**2) - bombArray.length)){
                        console.log(activeCellCounter)

                        gameOver.append(`You win
                        your score is:
                        ${activeCellCounter.length}`)

                        setTimeout(function(){
                          
                            endGameScreen.classList.add("show")
                           
                        },400);
                        
                            
                                    
                    }
                }
                
                )
                index++;
                
            }
        }
        
        
        
    }
    
    console.log(bombArray);
    console.log(contentArray);
   
    

    



})

restartBtn.addEventListener("click", function(){
    endGameScreen.classList.remove("show");
    gameOver.innerHTML = "";
    myContainer.innerHTML ="";
    
})
