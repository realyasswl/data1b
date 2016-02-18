/**
 * Created by liwang on 2/17/16.
 *
 * require d3.js*/
var list_reduce = function (list, func, compute_func) {
    return list.reduce(function (a, b) {
        return func(a, b, compute_func) ? a : b;
    });
}
var larger_than = function (a, b, func) {
    return func(a) > func(b);
}
var smaller_than = function (a, b, func) {
    return func(a) < func(b);
}

var distance = function (v1, v2, keys) {
    var dis = 0.0;
    for (k in keys) {
        dis += Math.pow(parseFloat(v1[keys[k]]) - parseFloat(v2[keys[k]]), 2);
    }
    return dis;
}

function deepcopy(list, keys) {
    var a = [];
    for (i in list) {
        var b = {};
        keys.forEach(function (k) {
            b[k] = list[i][k];
        });
        a.push(b);
    }
    return a;
}