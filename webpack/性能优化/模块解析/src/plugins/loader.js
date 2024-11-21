// example-loader.js
module.exports = function (source) {
    console.log('Normal loader:', source);
    return source; // 正常 loader 处理代码
};

// pitch 方法
module.exports.pitch = function (remainingRequest, precedingRequest, data) {
console.log('Pitching!');
console.log('Remaining loaders:', remainingRequest);
console.log('Preceding loaders:', precedingRequest);

// 这里可以选择返回一个值，结束后续的 loader 处理
if (true) {
    return `module.exports = "Intercepted by pitch";`;
}

// 如果不返回值，继续执行后续 loader 链
};