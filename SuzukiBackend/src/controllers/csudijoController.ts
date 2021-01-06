import mongoose from "mongoose";
import { Request, Response } from "express";
import { csudijoSchema } from "../models/csudijoModel";

const mongooseCsudijo = mongoose.model("Csudijo", csudijoSchema);

export class CsudijoController {
  public addNewCar(req: Request, res: Response): void {
    const newCar = new mongooseCsudijo(req.body);
    newCar.save((err, car) => {
      if (err) {
        res.send(err);
      } else {
        res.json(car);
      }
    });
  }

  public getAllCars(req: Request, res: Response): void {
    mongooseCsudijo.find({}, (err, car) => {
      if (err) {
        res.send(err);
      } else {
        res.json(car);
      }
    });
  }

  public getTopCars(req: Request, res: Response): void {
    mongooseCsudijo
      .find({})
      .sort({ numberOfVote: "desc" })
      .limit(1)
      .exec((err, car) => {
        if (err) {
          res.send(err);
        } else {
          if (car.length > 0) {
            const max = (car[0] as any).numberOfVote;
            mongooseCsudijo.find({ numberOfVote: max }, (error, cars) => {
              if (error) {
                res.send(error);
              } else {
                // 9. feladat:
                // Az ételek összes adata átkerül, nekünk elegendőek az ételek nevei
                res.json(cars);
              }
            });
          } else {
            // Ha még nincs étel a kollekcióban:
            res.json({ error: "No car!" });
          }
        }
      });
  }

  public getCarWithID(req: Request, res: Response): void {
    mongooseCsudijo.findById(req.params.carId, (err: any, car: any) => {
      if (err) {
        res.send(err);
      } else {
        res.json(car);
      }
    });
  }

  // public updateCar(req: Request, res: Response): void {
  //   const updateOptions: mongoose.QueryFindOneAndUpdateOptions = {
  //     new: true, // return the modified document
  //     runValidators: true // runs update validators on this command
  //   };
  //   mongooseCsudijo.findOneAndUpdate({ _id: req.params.carId }, req.body, updateOptions, (err, car) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       res.json(car);
  //     }
  //   });
  // }

  // public deleteCar(req: Request, res: Response): void {
  //   mongooseCsudijo.deleteOne({ _id: req.params.carId }, (err: any) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       res.json({ message: "Successfully deleted car!" });
  //     }B
  //   });
  // }
}
