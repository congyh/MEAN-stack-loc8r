/**
 * Created by yihao.cong@outlook.com on 16-12-12.
 * <p>
 * 实验closure之间会不会互相影响
 * <p>
 * 结果: 两个closure之间不会互相影响
 */

var user = {},
    user1 = {};

var setAge = function (initialAge) {
    var getAge = function () {
        return initialAge;
    };
    return {
        getAge: getAge
    };
};

user.age = setAge(30);
console.log(user.age);
console.log(user.age.getAge());
user1.age = setAge(35);
console.log(user1.age);
console.log(user1.age.getAge());
console.log(user.age.getAge());