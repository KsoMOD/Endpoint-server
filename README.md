## Getting Started

### Prerequisites
- Node.js 20 or later (check with `node -v`)
- npm (comes with Node.js)
- Git

### Install
From the repository root:
```bash
npm install
```

### Run
```bash
npm start
```
The server listens on **http://localhost:3000**.

### Example request
```bash
curl http://localhost:3000/api/buildings/2
```
Response:
```json
{"id":2,"name":"Library","floors":3,"exits":4,"accessibleExits":2}
```

Other endpoints:
- `GET /api/buildings` returns all buildings
- `GET /api/buildings/:id` returns 404 if the id doesn't exist