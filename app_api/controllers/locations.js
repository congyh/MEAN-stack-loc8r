/**
 * Created by yihao.cong@outlook.com on 16-12-13.
 */

module.exports.locationsUpdateOne = function (req, res, next) {
    res.send("测试put方法成功");
};

module.exports.locationsListByDistance = function (req, res, next) {
    res.send("测试get list方法成功");
};

module.exports.locationsCreate = function (req, res, next) {
    res.send('测试post方法成功');
};

module.exports.locationsReadOne = function (req, res, next) {
    res.send('测试 get one方法成功');
};
