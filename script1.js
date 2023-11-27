const input=document.getElementById("input")
const nameinput=document.querySelector(".name")
const surnameinput=document.querySelector(".surname")
const ageinput=document.querySelector(".age")
const buttoninputElement=document.querySelector(".button")
const tableElement=document.getElementById("table")

function table(){
    var tr=document.createElement("tr")
    var td1=document.createElement("td")
    td1.innerHTML=nameinput.Value
    var td2=document.createElement("td")
    td2.innerHTML=surname.Value
    var td3=document.createElement("td")
    td3.innerHTML=ageinput.Value
    if(nameinput.value.trim() && surnameinput.value.trim() && ageinput.value.trim()){
        tableElement.appendChild(tr)
        tr.append(td1,td2,td3)
    }
    nameinput.Value=""
    surnameinput.Value=""
    ageinput.Value=""
}