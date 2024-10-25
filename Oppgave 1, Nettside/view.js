//View

updateView()
function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
        
    <div>
        <button onclick="drawProjects()">Prosjekter</button>
        <button onclick="drawJSinfo()">Javascript Info</button>
        <button onclick="drawHTMLinfo()">HTML Info</button>
        <hr>

        ${content}

    </div>
    `
};

function drawProjects(){
    let html = "";

    for(let i = 0; i < projects.length; i++){
        html += `
        <div>
            <h3>
            ${projects[i]}
            </h3>
        </div>
        <hr>
        `
    }
    content = html;
    updateView();
}

function drawJSinfo(){
    let html = "";

    for(let i = 0; i < jsInfo.length; i++){
        html += `
        <div>
        <ul>
            <li><h5>
            ${jsInfo[i]}
            </h5></li>
        </ul>
        `
    }
    content = html;
    updateView();
}

function drawHTMLinfo(){
    let html = "";

    for(let i = 0; i < htmlInfo.length; i++){
        html += `
        <div>
        <p>
        ${htmlInfo[i]}
        </p>
        </div>
        `
    }
    content = html;
    updateView();
}

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