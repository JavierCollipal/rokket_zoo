import app from "./app";
import {port} from "./config/dotenv";


app.listen(port, () => {
  console.log(`App is listening in port ${port}!`);
});
