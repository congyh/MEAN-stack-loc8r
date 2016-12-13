/**
 * Created by yihao.cong@outlook.com on 16-12-12.
 * <p>
 *     实验: 是否module scope的变量之间会互相影响?
 * <p>
 *     结论: 会互相影响
 */
var user = {},
    user1 = {};
/**
 * userAge是一个IIFE(Immediately Invoked Function Expression),
 * 它会立即被声明的时候被立即调用, 然后实际上而后以return中的object形式存在.
 * <p>
 * 它存在的意义是创造了一个module scope(实际上仍然是function scope),
 * 供返回对象中所有的变量共享.
 *
 * @type {{setAge, getAge, addYear}}
 */
var userAge = (function () {
    var _myAge;
    var setAge = function (initAge) {
        _myAge = initAge;
    };
    var getAge = function () {
        return _myAge;
    };
    var addYear = function () {
        return ++_myAge;
    };
    return {
        setAge: setAge,
        getAge: getAge,
        addYear: addYear
    };
})();

userAge.setAge(30);
user.age = userAge.getAge();
console.log(user.age); // 30
user1.age = userAge.addYear();
console.log(user1.age); // 31
user.age = userAge.getAge();
console.log(user.age); // 31