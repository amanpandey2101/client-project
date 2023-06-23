const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require("./routes/admin/auth");
const superAdminRoutes = require("./routes/superadmin/auth");
const distributorRoutes = require("./routes/distributor/auth");
const cors = require('cors')
env.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.nbrbz9k.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Database connected");
});
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));   
app.use(cors());
app.use('/api', authRoutes);
app.use('/api', superAdminRoutes);
app.use('/api', distributorRoutes);
app.get('/', (req, res,next)=>{
    res.status(200).json({
        message:'Hello from Server'
    });
});

app.post('/data', (req, res,next)=>{
    res.status(200).json({
        message:req.body
    });
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});
