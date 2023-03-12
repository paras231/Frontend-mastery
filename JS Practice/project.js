let players = [
  { name: "Player1", score: 10 },
  { name: "Player2", score: 7 },
  { name: "Player3", score: 3 },
];

const newTable = document.createElement("table");
newTable.innerHTML = "<thead><th>Player</th><th>Score</th></thead>";
for (let player of players) {
  const newRow = document.createElement("tr");
  const tdPlayer = document.createElement("td");
  const tdScore = document.createElement("td");
  tdPlayer.textContent = player.name;
  tdScore.textContent = player.score;
  newRow.appendChild(tdPlayer);
  newRow.appendChild(tdScore);
  newTable.appendChild(newRow);
}

const target = document.getElementById("target");
target.appendChild(newTable);

const nameinput = document.getElementById("nameinput");

 nameinput.addEventListener("change", (e) => {
  document.getElementById("inputtext").innerHTML = e.target.value;
});

//  better version of this-> (not better at all) just to show for react js

// nameinput.addEventListener("input", cb);

// nameinput.oninput = cb();

// function cb(e) {
//   if (e) {
//     document.getElementById("inputtext").innerHTML = e?.target?.value;
//   }

//   console.log(e.target.value); // works like react js
// }
