/**
 * Created by yihao.cong@outlook.com on 16-12-10.
 */

var mongoose = require('mongoose');

var openingTimeSchema = new mongoose.Schema({
    days: {type: String, required: true},
    opening: String,
    closing: String,
    closed: {type: Boolean, required: true}
});

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: String, required: true, min: 0, max: 5},
    reviewText: String,
    createdOn: {type: Date, "default": Date.now()}
});

var locationSchema = new mongoose.Schema({
    // 指定name是必须提供的字段
    name: {type: String, required: true},
    address: String,
    // 因为default在js中是保留字, 所以需要用双引号包围起来
    rating: {type: Number, "default": 0, min: 0, max: 5},
    // 数组类型, 如果里面的元素都是同样的类型, 可以如下简写
    facilities: [String],
    coords: {type: [Number], index: '2dsphere'},
    // 嵌套Schema
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

// 省略了第三个参数, 默认会以第一个参数的小写复数形式创建一个数据库的collection(
// 实际上也就相当于关系数据库中的表)
mongoose.model('Location', locationSchema);

