
async function getLeetcode() {
    try {

        const response = await fetch("https://leetcode-stats-api.herokuapp.com/finwatling");

        const data = await response.json();


        return data;
    } catch (error) {
        console.error('Error fetching Leetcode data:', error);
    }
}

getLeetcode();

