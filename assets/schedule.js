const weekSchedule = {
  1: [
    { order: 1, exercise: "squat", sets: "3 x 12 reps" },
    { order: 2, exercise: "plank", sets: "3 x 30 sec" },
    { order: 3, exercise: "lunges", sets: "3 x 10 reps each leg" },
    { order: 4, exercise: "armCircles", sets: "2 x 30 sec each direction" }
  ],
  2: [
    { order: 1, exercise: "pushups", sets: "3 x 10 reps" },
    { order: 2, exercise: "mountainClimbers", sets: "3 x 30 sec" },
    { order: 3, exercise: "legRaises", sets: "3 x 12 reps" },
    { order: 4, exercise: "gluteBridges", sets: "3 x 15 reps" }
  ],
  3: [
    { order: 1, exercise: "squat", sets: "3 x 15 reps" },
    { order: 2, exercise: "plank", sets: "3 x 45 sec" },
    { order: 3, exercise: "lunges", sets: "3 x 12 reps each leg" },
    { order: 4, exercise: "armCircles", sets: "3 x 30 sec each direction" }
  ],
  4: [
    { order: 1, exercise: "pushups", sets: "3 x 12 reps" },
    { order: 2, exercise: "bicycleCrunches", sets: "3 x 15 reps each side" },
    { order: 3, exercise: "gluteBridges", sets: "3 x 20 reps" },
    { order: 4, exercise: "hanging", sets: "2 x 20-30 sec" }
  ],
  5: [
    { order: 1, exercise: "mountainClimbers", sets: "4 x 30 sec" },
    { order: 2, exercise: "legRaises", sets: "3 x 15 reps" },
    { order: 3, exercise: "lunges", sets: "3 x 15 reps each leg" },
    { order: 4, exercise: "cobraPose", sets: "3 x 30 sec" }
  ],
  6: [
    { order: 1, exercise: "squat", sets: "4 x 15 reps" },
    { order: 2, exercise: "plank", sets: "3 x 60 sec" },
    { order: 3, exercise: "pushups", sets: "3 x 15 reps" },
    { order: 4, exercise: "forwardBend", sets: "2 x 30 sec" }
  ],
  7: [
    { order: 1, exercise: "sunSalutation", sets: "3 rounds" },
    { order: 2, exercise: "gluteBridges", sets: "3 x 20 reps" },
    { order: 3, exercise: "hanging", sets: "3 x 20-30 sec" },
    { order: 4, exercise: "armCircles", sets: "3 x 30 sec each direction" }
  ]
};

function renderDay(day) {
  const exercisesList = weekSchedule[day];
  const container = document.getElementById("schedule");
  container.innerHTML = "";

  const table = document.createElement("table");
  const header = document.createElement("thead");
  header.innerHTML = `
    <tr>
      <th>#</th><th>Exercise</th><th>Sets/Reps</th><th>Details</th>
    </tr>`;
  table.appendChild(header);

  const tbody = document.createElement("tbody");

  exercisesList.forEach(({ order, exercise, sets }) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${order}</td>
      <td>${exercises[exercise].name}</td>
      <td>${sets}</td>
      <td><button class="details-btn" onclick="showExercise('${exercise}')">View</button></td>
    `;
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

function showExercise(exKey) {
  const info = exercises[exKey];
  document.getElementById("modalTitle").textContent = info.name;
  document.getElementById("modalImage").src = info.img;
  document.getElementById("modalImage").alt = info.name;
  document.getElementById("modalDesc").textContent = info.desc;
  document.getElementById("modalTips").textContent = info.tips;
  document.getElementById("exerciseModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("exerciseModal").classList.add("hidden");
}

document.querySelectorAll("#dayTabs li").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("#dayTabs li").forEach((t) =>
      t.classList.remove("active")
    );
    tab.classList.add("active");
    renderDay(tab.getAttribute("data-day"));
  });
});

window.onload = () => {
  renderDay(1);
};
