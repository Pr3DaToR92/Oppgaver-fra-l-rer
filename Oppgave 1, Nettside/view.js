//View

updateView()
function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
        
    <div>
        <button onclick="drawProjects()">Prosjekter</button>
        <button onclick="drawJSinfo()">Javascript Info</button>
        <button onclick="drawHTMLinfo()">HTML Info</button>
        <hr>
        <button onclick="setNewProjects()">Legg til</button>
        <button onclick="setNewSearch()">Søk</button>
        <br>
        ${content}
        ${foundIndex}

    </div>
    `;
};

function drawProjects(){
    let html = "";
    
    for(let i = 0; i < model.data.projects.length; i++){
        html += /*HTML*/`
        <div>
            <h3>
            ${model.data.projects[i]}
            </h3>
            <button onclick="setToChange(${i})">Endre</button>
            <hr>
        </div>
        `;
    }
    content = html;
    updateView();
}

function drawJSinfo(){
    let html = "";

    for(let i = 0; i < model.data.jsInfo.length; i++){
        html += `
        <div>
        <ul>
            <li><h5>
            ${model.data.jsInfo[i]}
            </h5></li>
        </ul>
        `;
    }
    content = html;
    updateView();
}

function drawHTMLinfo(){
    let html = "";

    for(let i = 0; i < model.data.htmlInfo.length; i++){
        html += `
        <div>
        <p>
        ${model.data.htmlInfo[i]}
        </p>
        </div>
        `
    }
    content = html;
    updateView();
}
function drawSearchArea(){
    updateView();
    return foundIndex;
}

//--------------------Eksempel----------------------//
//Eksempel hvordan ett array kan tegnes//
// function drawProjects(){
//     let html = '';

//     for(let i = 0; i < person.length; i++){
//         html += `
//         <div>
//             <h3>Navn: ${person[i].navn}</h3>
//             <p>Bosted: ${person[i].bosted}</p>
//             <tt>Alder: ${person[i].age}</tt>
//         </div>
//         <hr>
//         `
//     }

//     content = html;
//     updateView(); 
// }    


    // ${drawArea}

    // ${drawProjects}
    // ${drawJSinfo}
    // ${drawHTMLinfo}