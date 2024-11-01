//Controller

function setNewProjects(){
    let newText = "";
    for(let i = 0; i < projects.length; i++){ 
    newText += /*HTML*/`
    <div>
    <br>
    <form>
        <label for="newText">${i}:</label>
        <input type="text" placeholder="Skriv inn endring her">
        <button type="submit">Bekreft</button>
    </form>
    </div>
    `;
    }
        if (newText) {
            projects.push(newText)
        } else {
            alert("Vennligst skriv inn tekst");
    }
    newText= "";
    updateView();
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

