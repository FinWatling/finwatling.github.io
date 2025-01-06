async function getLeetcodeData() {
    try {
        const response = await fetch("https://leetcode-stats-api.herokuapp.com/finwatling");
        const data = await response.json();

        if (data.status === "error") {
            document.getElementById("error-message").innerText = data.message;
        } else {
            document.getElementById("totalSolved").innerText = data.totalSolved;
            document.getElementById("acceptanceRate").innerText = `${data.acceptanceRate}%`;
            document.getElementById("easySolved").innerText = data.easySolved;
            document.getElementById("mediumSolved").innerText = data.mediumSolved;
            document.getElementById("hardSolved").innerText = data.hardSolved;
        }
    } catch (error) {
        console.error('Error fetching Leetcode data:', error);
        document.getElementById("error-message").innerText = "Failed to load data.";
    }
}

getLeetcodeData();