import { NextFunction, Request, Response } from "express";
import { CsudijoController } from "../controllers/csudijoController";

export class CsudijoRoutes {
  public csudijoController: CsudijoController = new CsudijoController();

  public routes(app: any): void {
    // Foods
    app
      .route("/csudijo")
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.csudijoController.getAllCars)

      // POST endpoint
      .post((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.csudijoController.addNewCar);

    app.route("/csudijobest").get((req: Request, res: Response, next: NextFunction) => {
      console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
      next();
    }, this.csudijoController.getTopCars);

    // Contact detail
    app
      .route("/csudijo/:foodId")
      // get specific food, pl.: GET http://localhost:3000/csudijo/5d7a971dd9740e07b8bc725c
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.csudijoController.getCarWithID)

      .put((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.csudijoController.updateCar)

      .delete((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request type ${req.method} from: ${req.originalUrl} time: ${new Date().toLocaleTimeString()}`);
        next();
      }, this.csudijoController.deleteCar);
  }
}
