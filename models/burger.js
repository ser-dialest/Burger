var orm = require("../config/orm");

var burger = {
    all: function(resFunc) {
        orm.selectAll("burgers", function(res) {
            resFunc(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(columns, values, resFunc) {
        orm.insertOne("burgers", columns, values, function(res) {
            resFunc(res);
        });
    },
    update: function(column, value, condition, resFunc) {
        orm.updateOne("burgers", column, value, condition, function(res) {
            resFunc(res);
        });
    }
};
  
module.exports = burger;