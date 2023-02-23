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
    it('should return true when passed with the Boolean false', function () {
        expect(helloWorld(false)).toBe("Hello, World!")
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe(`function`);
    });
    it('should return a boolean true', function () {
        expect(isFive(5)).toBeTruthy();
    });
    it('should return a boolean false', function () {
        expect(isFive(!5)).toBeFalsy();
    });
    it('should be only a numeric input', function () {
        expect(isFive("5")).toBe(false);
    });
});

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should be a vowel', function () {
        expect(isVowel('a' || 'e' || 'i' || 'o' || 'u' ||'A' || 'E' || 'I' || 'O' || 'U')).toBe(true);
    });
    it('"A" should return true', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('"y" should return false', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('4 should return false', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('true should return false', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('false should return false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('"banana" should return false', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('"" should return false', function () {
        expect(isVowel("")).toBe(false);
    });
});