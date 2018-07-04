class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticMethod());
    // expected output: "static method has been called."
  }

  static staticMethod() {
    return 'static method has been called.';
  }
}
console.log(StaticMethodCall.staticMethod())