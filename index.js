// index.js
import express from "express";
import dotenv from "dotenv";
import {
  sendMessage,
  scheduleMessage,
  editMessage,
  deleteMessage,
  fetchMessages,
} from "./slackBot.js";

dotenv.config();

const app = express();
app.use(express.json());

const CHANNEL = process.env.CHANNEL_ID;

app.post("/send", async (req, res) => {
  const { text } = req.body;
  const result = await sendMessage(CHANNEL, text);
  res.json(result);
});

app.post("/schedule", async (req, res) => {
  const { text, postAt } = req.body; 
  const result = await scheduleMessage(CHANNEL, text, postAt);
  res.json(result);
});

app.put("/edit", async (req, res) => {
  const { ts, newText } = req.body;
  const result = await editMessage(CHANNEL, ts, newText);
  res.json(result);
});

app.delete("/delete", async (req, res) => {
  const { ts } = req.body;
  const result = await deleteMessage(CHANNEL, ts);
  res.json(result);
});

app.get("/messages", async (req, res) => {
  const result = await fetchMessages(CHANNEL);
  res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
