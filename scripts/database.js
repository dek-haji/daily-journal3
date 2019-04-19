let dom = document.querySelector(".entryLog")
    let btn = document.getElementById("save")
    





fetch("http://localhost:3000/dailyJournals") // Fetch from the API
    .then(journal => journal.json())  // Parse as JSON
    .then(entries => {
        entries.forEach(entry => {
            console.log(entry)
        

        btn.addEventListener("click",()=> {
            dom.innerHTML += `
            <div class= "daily">
            <p> ${entry.date} </p>
            <h2> ${entry.concepts} </h2>
            <h5> ${entry.entry} </h5>
            <p> ${entry.mood} </p>
            </div>
            `
        }

)
});
        // What should happen when we finally have the array?
    })
    