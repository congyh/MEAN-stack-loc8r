// 创建一个angular模块, 相当于setter方法
angular.module('loc8rApp', []);

// scope参数是随着controller的建立隐式创建的
var myController = function ($scope) {
    $scope.myInput = "world!";
    $scope.items = ['one', 'two', 'three'];
};

// 加入硬编码的数据
var locationListCtrl = function ($scope) {
    $scope.data = {
        locations: [{
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '0.296456',
            _id: '5370a35f2536f6785f8dfb6a'
        },{
            name: 'Costy',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 5,
            facilities: ['Hot drinks', 'Food', 'Alcoholic drinks'],
            distance: '0.7865456',
            _id: '5370a35f2536f6785f8dfb6a'
        }]};
};

// 定义一个angular directive, directive是作为复用组件存在的
var ratingStars = function () {
    return {
        // 创建一个isolate scope, 不与特定的scope绑定
        scope: {
            // 指定从绑定元素的rating属性来获取值
          thisRating: '=rating'
        },
        // 使用isolate scope中的元素来赋值, 简单的模板直接使用template元素
        // template: "{{thisRating}}"
        // 复杂的模板需要分离为一个单独的templateUrl元素
        templateUrl: "/angular/rating-stars.html"
    };
};

// 第一行相当于一个getter方法, 获取了"loc8rApp"这个模块.
angular.module('loc8rApp')
    // 这里相当于一个setter方法, 设置了一个controller
    .controller('myController', myController)
    .controller('locationListCtrl', locationListCtrl)
    .directive('ratingStars', ratingStars);

