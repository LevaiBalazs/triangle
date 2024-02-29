/*
* File: app.js
* Author: Lévai Balázs
* Copyright: 2024, Lévai Balázs
* Group: Szoft V
* Date: 2021-09-03
* Github: https://github.com/janos12345/
* Licenc: GNU GPL
*/

const baseInput = document.querySelector("#base")
const heightInput = document.querySelector("#height")
const areaInput = document.querySelector("#area")
const calcButton = document.querySelector("#calcButton")


calcButton.addEventListener('click', ()=>{
    startCalc()
});


function startCalc(){
    const base = Number(baseInput.value) 
    const height = Number(heightInput.value) 
    const area = calcArea(base,height)
    console.log("Terület:", area )
    areaInput.value=area 
}   




function calcArea(base, height){
    return base*height/2
}