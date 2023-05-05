function solve() {
  const infoText = document.querySelector(".info");
  const arriveBtn = document.getElementById("arrive");
  const departBtn = document.getElementById("depart");

  async function depart() {
    try {
      const response = await fetch(
        "http://localhost:3030/jsonstore/bus/schedule/depot"
      );
      const data = await response.json();
      infoText.textContent = `Next stop ${data.name}`;
      departBtn.disabled = true;
      arriveBtn.disabled = false;
    } catch (error) {
      infoText.textContent = "Error";
    }
  }

  async function arrive() {
    try {
      const response = await fetch(
        "http://localhost:3030/jsonstore/bus/schedule/depot"
      );
      const data = await response.json();
      infoText.textContent = `Arriving at ${data.name}`;
      departBtn.disabled = false;
      arriveBtn.disabled = true;
    } catch (error) {
      infoText.textContent = "Error";
    }
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
