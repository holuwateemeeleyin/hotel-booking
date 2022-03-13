const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path:path.resolve(__dirname, './.env')})
const express = require('express')
// const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

mongoose.Promise = global.Promise

mongoose.connect (
    process.env.MONGODB_URL
)
.then(()=> console.log("MONGODB has been Connected"))
.catch((err)=> console.log(err))


const room = require('./routes/Room')
const booking = require('./routes/Booking')

app.use('/api', room)
app.use('/api', booking)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));









// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');       //environmental variables
// const cors = require('cors');           //middleware
// const bodyParser = require('body-parser');
// const path = require('path');
// const fileRoutes = require('./src/routes/file-upload-routes');
// const productRouter = require('./src/routers/productRouter');






// const userRouter = require('./src/routers/userRouter');
// const orderRouter = require('./src/routers/orderRouter.js');
// const { data } = require('./data.js');

//const APIs
// const Role = require("./src/models/role.model");

// //import APIs
// const employeeAPI = require('./src/apis/employee.api');   //IT19007502 - Hiddalarachchi J.
// const roomAPI = require('./src/apis/room.api');   //IT19007502 - Hiddalarachchi J.
// const serviceAPI = require('./src/apis/service.api');   //IT19007502 - Hiddalarachchi J.
// const authAPI = require('./src/apis/auth.api');   //IT19059150 - Ranaweera I.G.S.V.
// const userAPI = require('./src/apis/user.api');   //IT19059150 - Ranaweera I.G.S.V.
// const customerAPI = require('./src/apis/customer.api');   //IT19059150 - Ranaweera I.G.S.V.

// const billAPI = require('./src/apis/bill.api');   //IT19059150 - Ranaweera I.G.S.V.

// const bookingAPI = require('./src/apis/booking.api'); //IT19051826
// const cashpaymentAPI = require('./src/apis/cashpayment.api');
// const creditpaymentAPI = require('./src/apis/creditpayment.api');


 

// const customerServiceApi = require('./src/apis/customerService.api');// IT19021058 -De Seram E.M.A.P.
// const serviceListApi = require('./src/apis/serviceList.api');// IT19021058 -De Seram E.M.A.P.
   



// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.use(express.json());
// app.use(express.urlencoded({ extened: true }));

// //port no for run backend server
// const PORT = process.env.PORT || 8066;
// const MONGODB_URI = process.env.MONGODB_URI;

// //connect to database
// mongoose.connect(MONGODB_URI, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// }, (error) => {
//   if (error) {
//     console.log('Database Error: ', error.message);
//   }
// });

// //open connection
// mongoose.connection.once('open', () => {
//   console.log('Database Synced');
//   initial();
// });

// //root route
// app.route('/').get((req, res) => {
//   res.send('SLIIT SPM FINAL API BY SE2021 BATCH');
// });

// //register router - CHANGEABLE
// app.use('/employee', employeeAPI());    //IT19007502 - Hiddalarachchi J.
// app.use('/room', roomAPI());    //IT19007502 - Hiddalarachchi J.
// app.use('/service', serviceAPI());    //IT19007502 - Hiddalarachchi J.
// app.use('/auth', authAPI());    //IT19059150 - Ranaweera I.G.S.V.
// app.use('/user', userAPI());    //IT19059150 - Ranaweera I.G.S.V.
// app.use('/customer', customerAPI());    //IT19059150 - Ranaweera I.G.S.V.

// // app.use('/bill', billAPI());    //IT19059150 - Ranaweera I.G.S.V.
// // app.use('/booking', bookingAPI());
// // app.use('/customerService',customerServiceApi());// IT19021058 -De Seram E.M.A.P.
// // app.use('/serviceList',serviceListApi());// IT19021058 -De Seram E.M.A.P.

// app.use('/foodorder', foodorderAPI()); //IT19051826
// app.use('/foodordering', foodorderingAPI());
// app.use('/booking', bookingAPI()); //IT19051826
// //app.use('/product', productApI()); //IT19051826
// // app.use('/api/products', productAPI());
// app.use('/kitchenorder', kitchenorderAPI());
// app.use('/cashpayment', cashpaymentAPI());
// app.use('/creditpayment', creditpaymentAPI());

// //
// app.use('/bill', billAPI());
// app.use('/attendance', attendanceAPI());
// app.use('/employeeLeaves', employeeLeaveAPI());


// app.use('/api/users', userRouter);
// app.use('/api/products/', productRouter);
// app.use('/api/orders', orderRouter);

// app.get('/api/config/paypal', (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
// });

// // app.get('/api/products', (req, res)=>{
// //   res.send(data.products);
// // });


// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use('/api', fileRoutes.routes);



// app.use('/food',foodApi());// IT19021058 -De Seram E.M.A.P.
// app.use('/ingredient',ingredientApi());// IT19021058 -De Seram E.M.A.P.
// app.use('/ingredientOrder',ingredientOrderApi());// IT19021058 -De Seram E.M.A.P.
// app.use('/customerService',customerServiceApi());// IT19021058 -De Seram E.M.A.P.
// app.use('/serviceList',serviceListApi());// IT19021058 -De Seram E.M.A.P.

// app.use('/booking', bookingAPI());



// app.listen(PORT, () => {
//   console.log(`Server is up and running on PORT ${PORT}`);
// });
