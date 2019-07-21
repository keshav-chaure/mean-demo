    //import express from 'express'
    import express  from 'express';
    import path from 'path';
    import bodyParser from 'body-parser';
    import cors from 'cors';
    import  mongoose from 'mongoose';
    import  config from './db';

    const port = 4200,
    app = express(),
    businessRoutes = require('./routes/business.route');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );


    app.use(bodyParser.json());
    app.use(cors());
    app.use('/business', businessRoutes);
    // app.get('/', (req, res) => res.send('Hello World!'))

   app.listen(port, () => console.log(`Example app listening on port ${port}!`))