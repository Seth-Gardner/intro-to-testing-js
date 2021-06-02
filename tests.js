// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('it should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('it should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it("it should return a string saying hello Seth", function(){
        expect(sayHello("Seth")).toBe('Hello, Seth!');
    });
    it("it should return a string saying hello Freddie", function(){
        expect(sayHello("Freddie")).toBe('Hello, Freddie!');
    });
    it("it should return a string saying hello Zoe", function(){
        expect(sayHello("Zoe")).toBe("Hello, Zoe!");
    });
});