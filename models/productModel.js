var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	code:{
		type: String,
		required: true
	},
	title:{
		type: String,
		required: true
	},
	price:{
		type: Number,
		required: true
	}
});

var Product = module.exports = mongoose.model('Product', productSchema);

module.exports.getProducts = function(callback, limit){
	Product.find(callback).limit(limit);
}

module.exports.getProductById = function(id, callback){
	Product.findById(id, callback);
}

module.exports.addProduct = function(product, callback){
	Product.create(product, callback);
}

module.exports.updateProduct = function(id, product, options, callback){
	var query = {_id : id };
	var update = {
		title: product.title,
		price: product.price
	};
	Product.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeProduct = function(id, callback){
	var query = { _id:id };
	Product.remove(query, callback);
}

module.exports.GetProductsByIds = function(ids, callback){

	Product.where('_id').in(ids).exec(callback);
}