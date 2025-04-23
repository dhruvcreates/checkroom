fetch("availability.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("scheduleGrid");
    data.forEach(({ room, event, start, end }) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="room">${room}</div>
        <div class="event">${event}</div>
        <div class="time">
          <span class="badge">${start}</span> to <span class="badge">${end}</span>
        </div>
      `;
      grid.appendChild(card);
    });
  })
  .catch(() => {
    document.getElementById("scheduleGrid").innerHTML =
      "<p style='text-align:center;'>Could not load data.</p>";
  });
