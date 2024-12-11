class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    //push an object of message and timestamp
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} :- ${message}`);
  }
}

// class Singleton {
//   constructor() {
//     if (!Singleton.instance) {
//       Singleton.instance = new Logger();
//     }
//   }
//   getInstance() {
//     return Singleton.instance;
//   }
// }

// module.exports = Singleton;

module.exports = new Logger();
