/**
 * Created by yihao.cong@outlook.com on 16-12-13.
 */
var mongoose = require('mongoose');
// 这里一定要引入模型
var Location = mongoose.model('Location');

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.locationsCreate = function (req, res, next) {
    res.send('测试post方法成功');
};

module.exports.locationsListByDistance = function (req, res, next) {
    res.send("测试get list方法成功");
};

module.exports.locationsReadOne = function (req, res, next) {
    // Location是前面建立的model
    Location.findById(req.params.locationId)
        // 异步回调
        .exec(function (err, location) {
            sendJsonResponse(res, 200, location);
        });
};

module.exports.locationsUpdateOne = function (req, res, next) {
    res.send("测试put方法成功");
};

module.exports.locationsDeleteOne = function (req, res, next) {
    sendJsonResponse(res, 200, {})
};
