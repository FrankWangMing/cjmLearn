// type Listener<T> = (data: T) => void;

// class EventBus {
//     private events: { [key: string]: Listener<any>[] } = {};

//     // 订阅事件
//     on<T>(event: string, listener: Listener<T>): void {
//         if (!this.events[event]) {
//             this.events[event] = [];
//         }
//         this.events[event].push(listener);
//     }

//     // 取消订阅事件
//     off<T>(event: string, listener: Listener<T>): void {
//         const listeners = this.events[event];
//         if (!listeners) return;
//         this.events[event] = listeners.filter(l => l !== listener);
//     }

//     // 发布事件
//     emit<T>(event: string, data: T): void {
//         const listeners = this.events[event];
//         if (!listeners) return;
//         listeners.forEach(listener => listener(data));
//     }
// }

// // 使用示例
// const eventBus = new EventBus();

// const listener1 = (data: string) => console.log(`Listener 1 received: ${data}`);
// const listener2 = (data: string) => console.log(`Listener 2 received: ${data}`);

// eventBus.on('message', listener1);
// eventBus.on('message', listener2);

// eventBus.emit('message', 'Hello, EventBus!');
// eventBus.off('message', listener2);
// eventBus.emit('message', 'Hello, EventBus!');




// export class Publisher {
//     private observers: any[] = [];

//     subscribe(observer: any) {
//         this.observers.push(observer);
//     }
//     unsubscribe(observer: any) {
//         const index = this.observers.indexOf(observer);
//         if (index > -1) {
//             this.observers.splice(index, 1);
//         }
//     }

//     notify(data: any) {
//         for (const observer of this.observers) {
//             observer(data);
//         }
//     }
// }


// const publisher = new Publisher();

// const email = (data) => {
//     console.log(`Email: ${data}`);

// };

// const phone = (data) => {
//     console.log(`Phone: ${data}`);
// }

// publisher.subscribe(email);
// publisher.subscribe(phone);

// publisher.notify('Hello, world!');

// const a = {
//     name: "9090"
// }

// let observers = [Input]


// const b = new Proxy(a, {

//     set(target, prop, value) {
//         console.log(prop, value)
//         observers.forEach(observer => {
//             observer()
//         })
//         return Reflect.set(target, prop, value)
//     }
// })

// b.name = '123'

// Input






