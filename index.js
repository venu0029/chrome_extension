let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function () {
    if(inputEl.value==""){
        alert("enter something!")
    }
    else{
    let goto = inputEl.value
    let link = `https://${goto}.com`
    myLeads.push(link)
    window.open(link)
    inputEl.value = ""

    renderLeads()
    }
    
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
       
    }
    ulEl.innerHTML = listItems
}
