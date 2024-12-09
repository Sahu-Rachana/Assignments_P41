/* Dependency Inversion Principle (DIP) */
/* The Dependency Inversion Principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions. It encourages the use of interfaces or abstract classes to decouple components. */
/* Considering a class that sends notifications. To follow DIP, we can create an interface for notification and make the ‘NotificationService’ depend on that interface. */

interface NotificationSender {
    send(): void;
}

class NotificationService implements NotificationSender{
    private message: string;

    constructor(message: string){
        this.message = message;
    }
    send(): void {
        console.log(`The message is: ${this.message}`)
    }
}

let sendNotification = new NotificationService('Hi');
sendNotification.send();