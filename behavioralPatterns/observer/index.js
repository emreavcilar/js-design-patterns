function Click() {
  this.handlers = [];  // observers
}

Click.prototype = {

  subscribe: function (fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  },

  fire: function (o, thisObj) {
    console.log(`o`, o)
    console.log(`thisObj`, thisObj)
    var scope = thisObj || window;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  }
}

function run() {

  var clickHandler = function (item) {
    console.log("fired: " + item);
  };

  var click = new Click();

  click.subscribe(clickHandler);
  click.fire('event #1');
  click.unsubscribe(clickHandler);
  click.fire('event #2');
  click.subscribe(clickHandler);
  click.fire('event #3');
}

// window is undefined if you run it on node. you better run it on browser
run();

// prints 
// fired: event #1
// fired: event #3