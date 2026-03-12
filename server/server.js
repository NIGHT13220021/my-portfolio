import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Local Chat Backend Running");
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message required" });
    }

    // 🔥 Hardcoded replies
    let reply = "";

    const lower = message.toLowerCase();

    if (lower.includes("hello")) {
      reply = "😎 Bc Direct message kar na!";
    } 
    else if (lower.includes("who are you")) {
      reply = "I am Kundan's personal AI assistant 💻🔥";
    } 
    else if (lower.includes("project")) {
      reply = "You can explore projects using the navigation buttons above 🚀";
    } 
    else {
      reply = "Bhai clearly bol kya chahiye 😄";
    }

    res.json({ reply });

  } catch (error) {
    console.error("🔥 ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});