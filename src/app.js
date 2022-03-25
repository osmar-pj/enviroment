import express from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
// import mqtt from 'mqtt'
require('dotenv').config()

import { createServer } from 'http'

// importamos las routes
import authRoutes from './routes/auth.routes'
import dashboardRoutes from './routes/dash.routes'
import docsRoutes from './routes/doc.routes'
import planRoutes from './routes/plan.routes'
import reportRoutes from './routes/report.routes'
import userRoutes from './routes/user.routes'

import { createRoles } from "./libs/initialSetup"
// IMPORT MODELS

const app = express();

// config sockets
const server = createServer(app)
const io = require('socket.io')(server)

createRoles()
//createAdmin(); // para mejorar el codigo del weon de fazt

// Middlewares
const corsOptions = {
  // origin: "http://localhost:3000"
};
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Welcome Routes

// Routes
app.use('/auth/api', authRoutes)
app.use('/api/v1/dashboard', dashboardRoutes)
app.use('/api/v1/doc', docsRoutes)
app.use('/api/v1/plan', planRoutes)
app.use('/api/v1/report', reportRoutes)
app.use('/api/v1/user', userRoutes)

// MQTT
let USERS = {}

io.on("connection", (socket) => {
  console.log(`${socket.id} was connected`)
  USERS[socket.id] = socket

  socket.on('disconnect', () => {
    console.log(`${socket.id} was disconnected`)
  })
})

setInterval(async () => {
  
  for (let i in USERS) {
    // USERS[i].emit('dashboard', data)
  }
}, 1000)

server.listen(process.env.PORT, () => {
  console.log('server is ok')
})

export default app