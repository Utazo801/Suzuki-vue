import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { CarRoutes } from "./routes/CarRoutes";

class App {
  public app: express.Application;
  public CarRoutePrv: CarRoutes = new CarRoutes();
  public mongoUrl: string = "";

  constructor() {
    this.app = express();
    this.expressConfig();
    this.CarRoutePrv.routes(this.app);
    this.mongoSetup();
  }

  private expressConfig(): void {
    this.app.use(bodyParser.json());

    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      res.header("Set-Cookie", "HttpOnly;Secure;SameSite=None");
      if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
        return res.status(200).json({});
      }
      next();
    });

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static("public"));
  }

  private mongoSetup(): void {
    const options: mongoose.ConnectOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    };

    this.mongoUrl = process.env.MONGODB_URL || "mongodb://localhost/CRMdb";
    require("mongoose").Promise = global.Promise;
    mongoose.connect(this.mongoUrl, options).catch(error => console.error(error));
  }
}

export default new App().app;
