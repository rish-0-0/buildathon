import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes/index.routes';

const app = express();

// Middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended : true }));
app.use(morgan('dev'));
// End of middlewares

// Routes
app.use('/api', routes);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        status: 404,
        message: 'Endpoint not found',
    });
});
// End of Routes
const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT} ...`));