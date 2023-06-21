$(document).ready(() => {
    let array = JSON.parse(localStorage.getItem("questions"))
    if(!array){
        window.localStorage.setItem("questions", JSON.stringify([]))
    }
    
    
})

/** Logica de preguntas */
const saveQuestions = (color, question, href) => {
    let objecto = {color, question};
    let array = JSON.parse(localStorage.getItem("questions"))
    array.push(objecto)
    window.localStorage.setItem("questions", JSON.stringify(array))
    window.location.href = href
}