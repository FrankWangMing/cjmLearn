"use strict";
// type Listener<T> = (data: T) => void;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
var Publisher = /** @class */ (function () {
    function Publisher() {
        this.observers = [];
    }
    Publisher.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Publisher.prototype.unsubscribe = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };
    Publisher.prototype.notify = function (data) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(data);
        }
    };
    return Publisher;
}());
exports.Publisher = Publisher;
var Email = /** @class */ (function () {
    function Email() {
    }
    Email.prototype.update = function (data) {
        console.log("Email: ".concat(data));
    };
    return Email;
}());
var publisher = new Publisher();
var email = new Email();
var phone = {
    update: function (data) {
        console.log("Phone: ".concat(data));
    }
};
publisher.subscribe(email);
publisher.subscribe(phone);
publisher.notify('Hello, world!');
