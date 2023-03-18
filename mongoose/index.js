// var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connection established"))
//     .catch((err) => console.log(err));

const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/model';

const db = mongoose.connection;

mongoose.connect(url, { useNewUrlParser: true })
db.once('open', () => {
    console.log('data-base created', url);
});
db.on('err', (err) => {
    console.log('err will generate', err);
});
const playListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cast: String,
    rating: Number,
    price: Number,
    action: String,
    date: {
        type: Date,
        default: Date.now
    }
});
// make collection on multiple
const playListModel = new mongoose.model("playListModel", playListSchema);
const createDocument = async() => {
    try {

        // insert data
        const reactModule = new mongoose.model("reactModule", playListSchema);


        //  create collection insert
        const reactPlayList = new playListModel({
            name: {
                type: String,
                required: true,
            },
            rating: Number,
            price: Number,
            action: String,
        });
        const jsplayList = new playListModel({
            name: {
                type: String,
                required: true,
            },
            rating: Number,
            book: Boolean,
            price: Number,
        });

        const nodePlayList = new playListModel({
            name: {
                type: String,

            },
            rating: Number,
            book: Boolean,
            price: Number,
        });
        const result = await playListModel.insertMany([jsplayList, nodePlayList]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
createDocument();


// how to read command on playListModel here

const readData = async() => {
    try {
        const res = await playListModel.find();
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
readData();
const updateDocument = async(_id) => {
    const result = await playListModel.updateOne({ _id }, {
        $set: {
            name: 'js'
        }
    });
    // console.log(result);
}

updateDocument("6410d8e9d675e20ab80cfe1e");