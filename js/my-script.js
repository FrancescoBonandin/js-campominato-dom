// 1.creo un eventlistener su bottone 
// 2. al clic sul bottone genero un ciclo che mi produce 10 elementi per riga per 10 righe (10 * 10 = 100)
// 3. ogni cella avra al suo interno stampato il suo numero identificativo
// 4. per ogni cella creo un event listener che toggla una classe con BG azzurro
//    e stampa il suo numero in console






// const gridGeneratorButton = document.getElementById("grid-generator");

// gridGeneratorButton.addEventListener("click", function(){


const difficultySetting = document.getElementById("difficulty-setting");


difficultySetting.addEventListener("submit", function(event){

    event.preventDefault()

    const myContainer = document.getElementById("grid-container");

    myContainer.innerHTML="";

   const userDifficultyChoice = document.getElementById("user-difficulty-choice");

   const difficultyChoiceValue = parseInt (userDifficultyChoice.value);

    let row;
    

    for(let i=1;i <= (difficultyChoiceValue**2); i++){

        

        if(i === 1 || ((i-1) % difficultyChoiceValue === 0 && i != (difficultyChoiceValue**2))){

            row = document.createElement("div");

            row.classList.add("row", `row-cols-${difficultyChoiceValue}`, "g-0");

            myContainer.append(row);
            
        }
        
        const col = document.createElement("div");

        col.addEventListener("click", function(){
            this.classList.toggle("active")
            console.log(this.innerHTML)
        })

        col.classList.add("col", "cell", "align-middle");
        
        row.append(col);

        const content = document.createElement("div")
        content.classList.add("content")
    
        col.append(content);

        content.append(i);
    
        // console.log(i);
    
    
    }

})