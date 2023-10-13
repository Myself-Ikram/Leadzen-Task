import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();
app.use(cors());

// Create API route to get data
app.get("/api/data", async (req, res) => {
  try {
    // Make an Axios request to the API endpoint
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // Send the response data to the client server
    res.json(response.data);
  } catch (error) {
    // Handle the error
    res.send(error);
  }
});

const PORT = 5000;
// Establish connection with Server
try {
  app.listen(PORT, () => console.log("Server started running at 5000"));
} catch (error) {
  console.log("Server cannot start");
}
