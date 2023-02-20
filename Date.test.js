const StartOfMonth = require('./Date');

test(
    'Compare',
    () => {
        expect(StartOfMonth('1995-02-07')).toBe(true)
        expect(StartOfMonth('1995-02-26')).toBe(false)
    }
);

