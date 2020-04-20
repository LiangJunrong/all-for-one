console.log("a.js");
define(['b'],
    function(obj) {
        console.log(obj);
        return {
            name: "张三",
            age: 20
        }
    }
)