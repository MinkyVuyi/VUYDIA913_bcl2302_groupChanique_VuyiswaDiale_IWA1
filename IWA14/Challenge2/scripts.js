function add(a, b) { //fixed the syntax so that it will return the sum of a and b
    return a + b;
  }
  
  function multiply(a, b) { //fixed the code to return the multiplication of a and b
    return a * b;
  }
  
  function internal() {
      // Get the values of `a` and `b` from the `internal` object
    const added = this.add(this.internal.a, this.internal.b); 
    // Multiply `added` by the value of `c` from the `internal` object
    console.log(added * this.internal.c);
    // Return `this` to allow for method chaining
    return this;
  }

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal
}

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal
}

example1.calculate();
example2.calculate();
