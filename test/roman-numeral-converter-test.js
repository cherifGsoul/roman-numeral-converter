const { expect } = require('chai');
const fromArabic = require('../lib/roman-numeral-converter');

const callback = function(num, expected) {
	return () => {
		const result = fromArabic(num);
		expect(result).to.equal(expected);
	}
};

describe('Roman numeral converter', () => {
	it('converts 0 to ""', callback(0, ''));
	it('converts 1 to I', callback(1, 'I'));
	it('converts 2 to II', callback(2, 'II'));
	it('converts 5 to V', callback(5, 'V'));
	it('converts 6 to VI', callback(6, 'VI'));
	it('converts 10 to X', callback(10, 'X'));
	it('converts 15 to XV', callback(15, 'XV'));
	it('converts 20 to XX', callback(20, 'XX'));
	it('converts 4 to IV', callback(4, 'IV'));
	it('converts 2019 to MMXIX', callback(2019, 'MMXIX'));
});