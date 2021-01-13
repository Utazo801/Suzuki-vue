import app from "./app";

const PORT: number = 3000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Express server listening on port: ${PORT}, if you get an error, check your mongoDB connection.`);
});
