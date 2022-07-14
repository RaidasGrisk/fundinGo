const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

app.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Ok",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
