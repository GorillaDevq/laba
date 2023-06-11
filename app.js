const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');

const limiter = require('./middlewares/limiter');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const globalHandleError = require('./errors/globalHandleError');
const NotFound = require('./middlewares/notFound');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/shop');

app.use(express.json());
app.use(cookieParser());

app.use(helmet());
app.use(limiter);
app.use(cors);

app.use(requestLogger);

app.use('/', require('./routes/index'));

app.use('*', NotFound);

app.use(errorLogger);
app.use(errors());

app.use(globalHandleError);

app.listen(3000);
