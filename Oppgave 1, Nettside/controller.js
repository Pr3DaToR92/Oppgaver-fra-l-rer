//Controller

function setNewProjects(){
    let newText = "";
   

    newText+= `
        <div>
    <br>
        <label for="newText"></label>
        <input type="text" placeholder="Skriv inn prosjekt her" onchange="inputs = this.value">
        <button type="submit" onclick="confirm()">Bekreft</button>
    </div>
    `;
 
    content = newText;
    updateView();
}
function setToChange(index){
    selectedIndex = index;
    changeMode = true;
    setNewProjects()
}

// function changeNewProject(){
 
//     let newText = "";    
//     newText+= `
//             <div>
//         <br>
//         <form>
//             <label for="newText"></label>
//             <input type="text" placeholder="Endre her" onchange="inputs = this.value">
//             <button type="submit" onclick="confirmChange()">Bekreft</button>
//         </form>
//         </div>
//     `;
 
//     content = newText;
//     updateView();
// }

// function confirmChange(){
//     if(inputs != ''){
//         projects[selectedIndex] = inputs;
//     }
//     else {
//         alert("Vennligst skriv inn tekst");
//     }
//     drawProjects();
// }



function confirm(){
    if (inputs != '') {
        if(changeMode == false){
            projects.push(inputs)
        }
        else{
            projects[selectedIndex] = inputs;
            changeMode = false;
        }
    } else {
       alert('Skriv inn tekst')
    }
    drawProjects();
}


//--------------------Eksempel----------------------//
// function drawProjects(){
//     let html = ""
//     for(let i = 0; i < projects.length; i++) {
//         //projects += drawArea;
//         html += projects;
//     }
//     createArea();
//     updateView();
//     return html;
// };

// function drawJSinfo(){
//     let html = ""
//     for(let i = 0; i < jsInfo.length; i++)
//     return html;
//     jsInfo += drawArea;
//     createArea();
// updateView();
// };

// function drawHTMLinfo(){
//     let html = ""
//     for(let i = 0; i < htmlInfo.length; i++)
//     return html;
//     htmlInfo += drawArea;
//     createArea();
// updateView();
// };

