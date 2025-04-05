import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";
import CookieParser from "cookieparser";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Cotent-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CookieParser());

app.get("/", (req, res) => {
  res.send("Working api call!");
});

db()
  .then(() => {
    app.listen(port, () => {
      console.log("App running on port: ", port);
    });
  })
  .catch((error) => {
    console.error("Mongo db conn Error ", error);
    process.exit(1);
  });

app.use("/api/v1/users/", userRoutes);
