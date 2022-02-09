import express from 'express';
import { routes } from './routes';
import swaggerApi from "swagger-ui-express";
import documentationFile from './shared/documentation/swagger.json';

const app = express();

app.use(express.json());

app.use("/api/v1", swaggerApi.serve, swaggerApi.setup(documentationFile));

app.use(routes);

export { app };
