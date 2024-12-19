/* Dependency Inversion Principle (DIP) */
/* The Dependency Inversion Principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions. It encourages the use of interfaces or abstract classes to decouple components. */
/* Considering a class that sends notifications. To follow DIP, we can create an interface for notification and make the ‘NotificationService’ depend on that interface. */
var NotificationService = /** @class */ (function () {
    function NotificationService(message) {
        this.message = message;
    }
    NotificationService.prototype.send = function () {
        console.log("The message is: ".concat(this.message));
    };
    return NotificationService;
}());
var sendNotification = new NotificationService('Hi');
sendNotification.send();
