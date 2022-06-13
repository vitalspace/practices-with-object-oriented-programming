import http from 'http';
import express from 'express';
import geckos from '@geckos.io/server';

const app = express();

const App = {
  app: app,
  server: http.createServer(app),
  message: 'Server on port',
  port: 3000,
  io: geckos(),
  public: "www",
  Init: () => {
    App.Middlewares();
    App.Geckos();
    App.Routes();
    App.CreateServer();
  },
  Middlewares: () => {

    console.log('middlewares')
    App.app.use(express.json());
    App.app.use(express.urlencoded({ extended: true }));
    App.app.use(express.static(App.public));
  },
  Geckos: () => {
    App.io.addServer(App.server);
    App.io.onConnection(channel => {
      console.log('New connection', channel.id);
      channel.on('helloServer', () => {
        channel.emit('response', `Hello ${channel.id}`);
      })
    })
  },

  Routes: () => {
    App.app.get('/', (req, res) => {
      res.send('index.hmtl')
    })
  },
  CreateServer: () => {
    App.server.listen(App.port, () => {
      console.log(App.message, App.port);
    })
  }
}

App.Init();