const express = require("express");

const app = express();
const PORT = 3000;

const buildings = [
  { id: 1, name: "Science Center", floors: 4, exits: 6, accessibleExits: 3 },
  { id: 2, name: "Library", floors: 3, exits: 4, accessibleExits: 2 },
  { id: 3, name: "Student Union", floors: 2, exits: 5, accessibleExits: 4 },
];

// GETS all buildings
app.get("/api/buildings", (req, res) => {
  res.json(buildings);
});

// GETS one building by id
app.get("/api/buildings/:id", (req, res) => {
  const id = Number(req.params.id);
  const building = buildings.find((b) => b.id === id);

  if (!building) {
    return res.status(404).json({ error: `Building ${id} not found` });
  }

  res.json(building);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});