//javascript example of a singleton service that 
// isn't created until it's first accessed. Supports 
// private properties, hidden methods and a singleton instance.

const singleton = (function () {
  let instance;

  function init() {
    let privateVariable = 5;

    function privateMethod() {
      return privateVariable++;
    }

    return {
      publicMethod: function () {
        console.log("The public can see me");
      },
      getPrivateNumber: function () {
        return privateMethod();
      }
    }
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

const ref = singleton.getInstance();
ref.publicMethod();
// prints "The public can see me!";
console.log(ref.getPrivateNumber());
// prints 5
console.log(ref.getPrivateNumber());
// prints 6

