import { NextFunction, Request, Response } from "express";
import { CarController } from "../controllers/CarController";

export class CarRoutes {
  public CarController: CarController = new CarController();

  public routes(app: any): void {
    // Cars
    app
      .route("/cars")
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.CarController.getAllCars)

      // POST endpoint
      .post((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.CarController.addNewCar);

    app.route("/expensive").get((req: Request, res: Response, next: NextFunction) => {
      console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
      next();
    }, this.CarController.getMostExpensiveCar);

    app.route("/cheapest").get((req: Request, res: Response, next: NextFunction) => {
      console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
      next();
    }, this.CarController.getCheapestCar);

    // Contact detail
    app
      .route("/cars/:carId")
      // get specific food, pl.: GET http://localhost:3000/csudijo/5d7a971dd9740e07b8bc725c
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.CarController.getCarWithID);

    // .put((req: Request, res: Response, next: NextFunction) => {
    //   console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
    //   next();
    // }, this.csudijoController.updateCar)

    // .delete((req: Request, res: Response, next: NextFunction) => {
    //   console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
    //   next();
    // }, this.csudijoController.deleteCar);
  }
}
