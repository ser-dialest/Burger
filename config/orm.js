var connection = require("./connection");

var orm = {
    selectAll: function(table, resFunc) {
        var sql = `SELECT * FROM ${table};`;
        connection.query(sql, function(error, result) {
            if (error) { throw error; };
            resFunc(result);
        });
    },
    insertOne: function(table, columns, values, resFunc) {
        var sql = `INSERT INTO ${table} (${columns.toString()}) VALUES (${values.toString()});`;
        connection.query(sql, function(error, result) {
            if (error) { throw error; };
            resFunc(result);
        });
    },
    updateOne: function(table, column, value, condition, resFunc) {
        var sql = `UPDATE ${table} SET ${column} = ${value} WHERE ${condition};`;
        connection.query(sql, function(error, result) {
            if (error) { throw error; };
            resFunc(result);
        });
    }
}

module.exports = orm;