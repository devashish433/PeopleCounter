let count=0;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count1")
function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let countStr = count + "-"
    saveEl.innerHTML += countStr
    countEl.textContent = 0
    count =0

}
 console.log(count)
