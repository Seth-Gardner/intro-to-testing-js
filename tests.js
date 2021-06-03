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
    it("it should return 'Hello, World!' when passed by itself", function(){
        expect(sayHello()).toBe("Hello, World!");
    })
    it("it should return 'Hello, World!' when passed true", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("it should return 'Hello, World!' when passed false", function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
});
describe("isFive", function() {
    it("isFive should be a callable function", function(){
        expect(typeof(isFive)).toBe("function");
    });
    it("isFive should return true when passed 5", function(){
        expect(isFive(5)).toBe(true);
    });
    it("isFive shold return false when passed any number that is not five", function(){
        expect(isFive(13)).toBe(false);
    });
    it("isFive should also return false when passed anything that is not a number", function(){
        expect(isFive("5")).toBe(false);
    });
});
describe("isEven", function() {
    it("isEven should return a boolean no matter what", function(){
        expect(typeof(isEven())).toBe("boolean");
    });
    it("isEven should return true when run with 2", function(){
         expect(isEven(2)).toBe(true);
    });
    it("isEven should return true when run with -4", function(){
        expect(isEven(-4)).toBe(true);
    });
    it("isEven should return false when run with 3", function(){
        expect(isEven(3)).toBe(false);
    });
    it("isEven should return false when run with banana", function(){
        expect(isEven("banana")).toBe(false);
    });
    it("isEven should return true when run with 8", function(){
        expect(isEven(8)).toBe(true)
    });
    it("isEven should return false when run with infinity", function(){
        expect(isEven(Infinity)).toBe(false)
    });
    it("isEven should return false when run with nothing", function(){
        expect(isEven()).toBe(false)
    });
    it("isEven should return false when run with a boolean", function(){
        expect(isEven(false)).toBe(false)
    });
})
describe("isVowel", function() {
    it("isVowel should return a boolean no matter what", function(){
        expect(typeof(isVowel())).toBe("boolean");
    });
    it("isVowel should return true when run with 'a'", function(){
        expect(isVowel("a")).toBe(true);
    });
    it("isVowel should return true when run with 'A'", function(){
        expect(isVowel("A")).toBe(true);
    });
    it("isVowel should return false when run with 'y", function(){
        expect(isVowel("y")).toBe(false);
    });
    it("isVowel should return false when run with 4", function(){
        expect(isVowel(4)).toBe(false);
    });
    it("isVowel should return false when run with any boolean", function(){
        expect(isVowel(false)).toBe(false);
    });
    it("isVowel should return false when run with 'banana", function(){
        expect(isVowel("banana")).toBe(false);
    });
    it("isVowel should return false when run with nothing", function(){
        expect(isVowel()).toBe(false);
    });
});
