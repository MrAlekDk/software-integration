import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://example.com'); // Replace with your frontend origin
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});


// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
