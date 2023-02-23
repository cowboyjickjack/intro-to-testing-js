// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld("World")).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(helloWorld("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(helloWorld("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(helloWorld("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, World!" when executed with no argument', function () {
        expect(helloWorld()).toBe("Hello, World!")
    });
    it('should return true when passed with the Boolean true', function () {
        expect(helloWorld(true)).toBe("Hello, World!")
    });
    it('should return true when passed with the Boolean true', function () {
        expect(helloWorld(false)).toBe("Hello, World!")
    });
});
