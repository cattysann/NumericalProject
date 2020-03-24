var express = require('express');
var router = express.Router();
var cors = require('cors')
router.use(cors())
/* GET users listing. */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/numer', { useNewUrlParser: true });
var db = mongoose.connection;

var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;

var mySchema = mongoose.Schema({
	id: ObjectId,
	key: String,
	fx: String
	
});

var MyModel = mongoose.model('MyModel',mySchema,'Que');
console.log('connect')
/*
router.get('/Bisection', function (req, res, next) {
	var obj = [{ name: 1, fx: 'x^3+4*x^2-10' }]
	res.json(obj)
});
*/
router.get('/bisection', function (req, res, next) {
	MyModel.find({ key: 'Bisection' }, function (err, docs) {
		console.log(docs)
		res.json(docs)
	})
});


module.exports = router;
