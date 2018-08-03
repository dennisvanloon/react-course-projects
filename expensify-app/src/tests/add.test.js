const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should generate geeting', () => {
    const result = generateGreeting('Dennis');
    expect(result).toBe('Hello Dennis!');
});

test('should generate geeting with no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});