import express, {Request, Response} from 'express'
// Create a new express app instance
const app: express.Application = express();

app.get('/', (req:Request , res:Response) => {
  res.send('Hola mundo!');
});

app.listen(3000, () => {
  console.log(`App is listening in port 3000!`);
});
