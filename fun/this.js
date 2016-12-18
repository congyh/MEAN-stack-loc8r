/**
 * Created by congyihao on 16-12-17.
 */
var point = {
    x: 0,
    y: 0,
    moveTo: function (x, y) {
        var moveX = function (x) {
            this.x = x;
        };
        var moveY = function (y) {
            this.y = y;
        };
        moveX(x);
        moveY(y);
    }
};

point.moveTo(1, 1);
console.log(point.x, point.y); // 0 0
console.log(x, y); // 1 1

var Point =  function(x, y) {
    this.x = x;
    this.y = y;
    this.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
    }
};

var p1 = new Point(0, 0);
var p2 = {x: 0, y: 0};
p1.moveTo.apply(p2, [10, 10]);
console.log(p2.x);