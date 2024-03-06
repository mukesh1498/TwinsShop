const app = require(".");
const { connectDb } = require("./config/db");

const PORT = 4005;
app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running on port ${PORT}`);
});
