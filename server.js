const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./swaggerDocs.js');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

//swagger
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'CRUD User Management API',
            description: 'Manager API use to manage User',
            contact: {
                name: 'Nguyen Canh Quang',
                email: 'saunguyencanh@gmail.com'
            },
            servers: ['http://localhost:3000/']
        }
    },
    apis: ['./server/routes/swagger.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

//jsdoc
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

//json
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});