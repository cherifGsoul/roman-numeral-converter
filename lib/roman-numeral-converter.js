function fromArabic(arabic) {
	var romans = [{
			digit: 1000,
			glyph: 'M'
		}, 
		
		{
			digit: 900,
			glyph: 'CM'
		}, {
			digit: 500,
			glyph: 'D'
		}, {
			digit: 400,
			glyph: 'CD'
		}, {
			digit: 100,
			glyph: 'C'
		},
		
		{
			digit: 90,
			glyph: 'XC'
		}, {
			digit: 50,
			glyph: 'L'
		}, {
			digit: 40,
			glyph: 'XL'
		}, {
			digit: 10,
			glyph: 'X'
		},
		
		{
			digit: 9,
			glyph: 'IX'
		},
		{
			digit: 5,
			glyph: 'V'
		},{
			digit: 4,
			glyph: 'IV'
		}, {
			digit: 1,
			glyph: 'I'
	}],
	roman = '';
	
	romans.forEach(({digit, glyph}) => {
		while (arabic >= digit) {
			roman += glyph;
			arabic -= digit;
		}
	});

	return roman;
}

module.exports = fromArabic;