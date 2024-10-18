//View
updateView()
function updateView(){
document.getElementById("app").innerHTML = /*HTML*/`
    
<div>
    <button onclick="drawProjects()" >Prosjekter</button>
    <button onclick="drawJSinfo()" >Javascript Info</button>
    <button onclick="drawHTMLinfo()" >HTML Info</button>
    <hr>

    ${drawArea}

</div>
    `
}

    // ${drawProjects}
    // ${drawJSinfo}
    // ${drawHTMLinfo}