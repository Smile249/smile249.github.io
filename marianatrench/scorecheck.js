let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("username");

    if (username.value == "") {
        alert("Please input a username!");
    } else {
        // perform operation with form input
        alert("Username applied!");
        console.log(
            `${username.value}`
        );

        //const ldb_id = ['3517191', '3516f91', '3517091', '3517291', '3516991', '3517671', '3517391', '34b4991', '3517491', '3517591', '3516891', '3518191', '3518091', '3517791', '3517891', '3518291']

                const ldb_id = ['3518091']

        ldb_id.forEach(id => {
            const url = `https://api.beatleader.xyz/leaderboard/${id}?page=1&count=10&sortBy=rank&search=${username.value}&friends=false&voters=false`
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const pElement = document.getElementById(`p${id}`);

                    // Process the data and extract relevant information
                    const scoresData = processData(data); // You need to define this function

                    // Update the paragraph content
                    pElement.textContent = scoresData;

                    if (!data.errorMessage || data.errorMessage !== "No scores found") {
                        // Apply the green text shadow style
                        pElement.classList.add("green-shadow");
                    }

                })
                .catch(error => {
                    console.error(`Error fetching data for ID ${id}:`, error);
                });
        });








    }
});
