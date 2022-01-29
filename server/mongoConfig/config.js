// const mongoose = require('mongoose');
// const connectionString = 'mongodb://localhost:27017/myRandomDB';

// const mongoCon = async () => {
//     try {
//         const connectionParams = {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useUnifiedTopology: true,
//         };
//         await mongoose.connect(connectionString, connectionParams);
//         console.log("connected to database");
//     } catch (error) {
//         console.log(error);
//         console.log("could not connect to database");
//     }
// };

// module.exports = mongoCon;

const mongoose = require('mongoose');

const mongoCon = mongoose.connect('mongodb://localhost:27017/myRandomDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('mongoose is connected'))
.catch((err) => console.log(`${err}`))

module.exports = mongoCon