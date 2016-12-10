/**
 * Created by yihao.cong@outlook.com on 16-12-10.
 */
var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

/**
 * 关闭mongoose连接
 * <p>
 * 这里定义了一个闭包, 外层的作用是为里层的函数提供'环境', 这里也就是msg参数.
 * 否则mongoose.connection.close本身是不接收带参数的回调函数的
 * @param msg 触发关闭的事件类型
 * @param callback 负责进行Node应用的关闭
 */
var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    })
});

process.on('SIGTERM', function () {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    })
});

// 注意, 这里与上面的程序有两点不同, 一个是只捕获一次信号
// 另一点是这里用的是kill, 要求立即结束程序, 并要重新释放同样的信号
// 供nodemon使用
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    })
});

// 将model引入应用
require('./locations');
