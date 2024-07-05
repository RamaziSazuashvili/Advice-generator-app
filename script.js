document.getElementById("advice-button").addEventListener("click", fetchAdvice);

async function fetchAdvice() {
    try {
        const response = await axios.get("https://api.adviceslip.com/advice")
        const data = response.data;
        document.querySelector(".advice-id span").textContent = data.slip.id;
        document.querySelector(".advice-text").textContent = `"${data.slip.advice}"`;
    } catch (error) {
        document.querySelector(".advice-text").textContent = "Failed to fetch advice. Please try again.";
    }
};