function solve() {
  const infoText = document.querySelector(".info");
  const arriveBtn = document.getElementById("arrive");
  const departBtn = document.getElementById("depart");
  let nextStopId = "depot";
  let stopName;

  async function depart() {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`
      );
      const data = await response.json();
      stopName = data.name;
      infoText.textContent = `Next stop ${stopName}`;
      nextStopId = data.next;
      departBtn.disabled = true;
      arriveBtn.disabled = false;
    } catch (error) {
      infoText.textContent = "Error";
    }
  }

  function arrive() {
    infoText.textContent = `Arriving at ${stopName}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
