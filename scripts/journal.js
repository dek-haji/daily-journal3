document.querySelector(".htmlEl").innerHTML =
    `
<form id="main">
<fieldset>
    <label for="dailyJournal">Date Of Entry</label>
    <input type="date" name="" id="dailyJournal">
</fieldset>
<fieldset>
    <label for="concepts">Concepts Covered</label>
    <input type="text" name="" id="concepts">
</fieldset>
<fieldset>
    <label for="entry">Journal Entry</label>
    <input type="text" name="" id="entry">
</fieldset>
<fieldset>
    <label id="mood" for="mood">Mood For The Day</label>
    <select id="mood1">
        <option>Excited</option>
        <option>Happy</option>
        <option>confused</option>
        <option>motivated</option>
        <option> Chilling</option>
    </select>
</fieldset>
</form>
<button id="save">Record Daily journal</button>`


// let dom = document.querySelector(".entryLog")
// let btn = document.getElementById("save")

// btn.addEventListener("click", domee=(e) => {
//     let date = document.querySelector("#dailyJournal").value
//     let concepts = document.querySelector("#concepts").value
//     let journal = document.getElementById("entry").value
//     let mood = document.getElementById("mood1").value

//     e.preventDefault();

//     dom.innerHTML += `
//     <div class="journals">
//     <h3> ${concepts} </h3>
//     <p> ${journal} </p>
//     <p> ${mood} </p>
//     <p> ${date} </p>
//     </div>
//     `

//     console.log(dom)
// })