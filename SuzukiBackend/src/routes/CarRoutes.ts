import { NextFunction, Request, Response } from "express";
import { CarController } from "../controllers/CarController";

export class CarRoutes {
  public CarController: CarController = new CarController();

  public routes(app: any): void {
    app
      .route("/cars")
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.CarController.getAllCars)

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

    app
      .route("/cars/:carId")
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.CarController.getCarWithID)

      .put((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.CarController.updateCar)

      .delete((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.CarController.deleteCar);
  }
}
