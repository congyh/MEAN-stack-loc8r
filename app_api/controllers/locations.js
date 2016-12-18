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
    Location.create({
        name: req.body.name,
        address: req.body.address,
        facilities: req.body.facilities.split(','),
        coords: [parseFloat(req.body.lng), parseFloat(req.body.lat)],
        openingTimes: [{
            days: req.body.days1,
            opening: req.body.opening1,
            closing: req.body.closing1,
            closed: req.body.closed1
        }, {
            days: req.body.days2,
            opening: req.body.opening2,
            closing: req.body.closing2,
            closed: req.body.closed2
        }]
    }, function (err, location) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, location);
        }
    });
};

module.exports.locationsListByDistance = function (req, res, next) {
    Location.find()
        .exec(function (err, locations) {
            sendJsonResponse(res, 200, locations)
        })
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
    var locationId = req.params.locationId;
    if (locationId) {
        Location.findByIdAndRemove(locationId)
            .exec(function (err, location) {
                if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                } else {// 成功
                    sendJsonResponse(res, 204, null);
                }
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No locationId!"
        })
    }
};
