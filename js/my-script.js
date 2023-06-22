
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
    
    difficultySetting.addEventListener("submit", function(event){
        
        event.preventDefault()
        
        const userDifficultyChoice = document.getElementById("user-difficulty-choice");
        
        const myContainer = document.getElementById("grid-container");
        
        myContainer.innerHTML="";
        
        const difficultyChoiceValue = parseInt (userDifficultyChoice.value);
        
        const bombArray = uniqueRandomNumberArray(16, difficultyChoiceValue**2);
        
    let row;
    
    const contentArray = [];
    
    let activeCellCounter = null;
    
    let bombCounter = null;
    
    for(let i=1;i <= (difficultyChoiceValue**2); i++){
        
        
        
        if(i === 1 || ((i-1) % difficultyChoiceValue === 0 && i != (difficultyChoiceValue**2))){

            row = document.createElement("div");
            
            row.classList.add("row", `row-cols-${difficultyChoiceValue}`, "g-0");
            
            myContainer.append(row);
            
        }
        
        const col = document.createElement("div");
        
        col.classList.add("col", "cell", "align-middle");
        
        row.append(col);
        
        const content = document.createElement("div")
        contentArray.push(content)
        content.classList.add("content")
        
        col.append(content);
        
        content.append(i);
        
        let index=0;
        
        while( index < bombArray.length){
            
            if( parseInt(content.innerHTML) == bombArray[index]){
                
                content.parentElement.addEventListener("click", function(){
                    
                    if(this.classList.contains("active")){

                        this.classList.remove("active")

                    }
                    
                    
                    this.classList.add("bomb");

                    activeCellCounter = document.querySelectorAll(".active")
                    
                    bombCounter = document.querySelectorAll(".bomb")
                    
                    if(bombCounter.length > 0 && bombCounter.length != null){
                        console.log(activeCellCounter)
                        alert(`You lose
                                your score is:
                                ${activeCellCounter.length} `)
                        
                        location.reload(true)
                    }

                }
                
                )
                
                break;
            }
            
            else{ 
                
                
                content.parentElement.addEventListener("click", function(){
                    
                    if(this.classList.contains("active")){
                        
                        this.classList.remove("active")

                    }

                    this.classList.add("active")
                    
                    activeCellCounter = document.querySelectorAll(".active")
                    
                    if(activeCellCounter.length == ((difficultyChoiceValue**2) - bombArray.length)){
                        console.log(activeCellCounter)
                        alert(`You win 
                                your score is:
                                ${activeCellCounter.length} `)

                        location.reload(true)
                                
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
