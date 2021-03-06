import mongoose from "mongoose";
import { Request, Response } from "express";
import { CarSchema } from "../models/CarModel";

const mongooseCars = mongoose.model("Cars", CarSchema);

export class CarController {
  public addNewCar(req: Request, res: Response): void {
    const newCar = new mongooseCars(req.body);
    newCar.save((err, car) => {
      if (err) {
        res.send(err);
      } else {
        res.json(car);
      }
    });
  }

  public getAllCars(req: Request, res: Response): void {
    mongooseCars.find({}, (err, car) => {
      if (err) {
        res.send(err);
      } else {
        res.json(car);
      }
    });
  }

  public getMostExpensiveCar(req: Request, res: Response): void {
    mongooseCars
      .find({})
      .sort({ Price: "desc" })
      .limit(1)
      .exec((err, car) => {
        if (err) {
          res.send(err);
        } else {
          res.json(car);
        }
      });
  }

  public getCheapestCar(req: Request, res: Response): void {
    mongooseCars
      .find({})
      .sort({ Price: "asc" })
      .limit(1)
      .exec((err, car) => {
        if (err) {
          res.send(err);
        } else {
          res.json(car);
        }
      });
  }

  public getCarWithID(req: Request, res: Response): void {
    mongooseCars.findById(req.params.carId, (err: any, car: any) => {
      if (err) {
        res.send(err);
      } else {
        res.json(car);
      }
    });
  }

  public updateCar(req: Request, res: Response): void {
    const updateOptions: mongoose.QueryOptions = {
      new: true,
      runValidators: true
    };
    mongooseCars.findOneAndUpdate({ _id: req.params.carId }, req.body, updateOptions, (err, car) => {
      if (err) {
        res.send(err);
      } else {
        res.json(car);
      }
    });
  }

  public deleteCar(req: Request, res: Response): void {
    mongooseCars.deleteOne({ _id: req.params.carId }).exec(err => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Successfully deleted car!" });
      }
    });
  }
}
