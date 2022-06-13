import express from 'express';
import cors from 'cors';

// Create server with classes
class createExpressServer {
  constructor(port) {
    this.message = "Server on port";
    this.public = "www";
    this.port = port
    this.app = express();
  }
  Init = () => {
    this.Middlewares();
    this.CreateServer();
  }
  Middlewares = () => {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(this.public));
  }
  CreateServer = () => {
    this.app.listen(this.port, () => {
      console.log(this.message, this.port)
    })
  }
}
const startApp = new createExpressServer(3000)
startApp.Init();

// Create Express Server with constan class.

const App = {
  app: express(),
  port: 4000,
  message: "Server on port",
  public: "www",
  Init: () => {
    App.Middlewares();
    App.CreateServer();
  },
  Middlewares: () => {
    App.app.use(cors());
    App.app.use(express.json());
    App.app.use(express.urlencoded({ extended: true }));
    App.app.use(express.static(App.public));
  },
  CreateServer: () => {
    App.app.listen(App.port, () => {
      console.log(App.message, App.port)
    })
  }
}
App.Init();