let dom = document.querySelector(".entryLog")
let btn = document.getElementById("save")

btn.addEventListener("click", (e)=> {
    let date = document.querySelector("#dailyJournal").value
    let concepts = document.querySelector("#concepts").value
    let journal = document.getElementById("entry").value
    let mood = document.getElementById("mood1").value

    e.preventDefault();

    dom.innerHTML += `
    <div class="journals">
    <h3> Topic: ${concepts} </h3>
    <p> Entry: ${journal} </p>
    <p> Mood of the day: ${mood} </p>
    <p> Date: ${date} </p>
    </div>
    `

    console.log(dom)
})