var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var productsSchema = new Schema({
    name: String,
    email: String,
    website: String,
    linkedin: String,
    github: String,
    summary: String,
});

productsSchema.plugin(autoIncrement.plugin, { model: 'Products', startAt: 1 });
var Products = mongoose.model('Products', productsSchema);
module.exports = Products;