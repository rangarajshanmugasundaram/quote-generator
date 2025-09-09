async function getQuote() {
  try {
    const response = await fetch("https://programming-quotesapi.vercel.app/api/random");
    const data = await response.json();

    document.getElementById('quote').textContent = `"${data.en}"`;
    document.getElementById('author').textContent = `— ${data.author}`;
  } catch (error) {
    document.getElementById('quote').textContent = "Failed to fetch quote.";
    document.getElementById('author').textContent = "";
    console.error("Error:", error);
  }
}

document.getElementById('newQuote').addEventListener('click', getQuote);
window.onload = getQuote;
