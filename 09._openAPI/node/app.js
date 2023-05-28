import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

//Routers
import usersRouter from './routers/users.js';
import spacecraftsRouter from './routers/spacecraftsRouter.js';

const app = express();
app.use(express.json())

app.use(spacecraftsRouter)
app.use(usersRouter);

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Users API',
        version: '1.0.0',
        description: 'A simple Express Users API',
        
    },
    servers: [
        {
            url: 'http://localhost:3000',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routers/*.js']
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(options)));

app.listen(3000, () => {
    console.log('Running on port 3000');
});
