describe('Simple test', function() {
	it('Should add two numbers.', function() {
		var simple = new Simple();
		expect(simple.adder(1,2)).toEqual(3);
	});

	it('Should subtract two numbers.', function() {
		var simple = new Simple();
		expect(simple.subber(10,2)).toEqual(8);
	});
});

describe('making json calls', function() {
	it('Should not fail', function() {
		expect(true).toEqual(true);
	});
	
	it('should fail', function() {
		expect(true).not.toEqual(1);
	});
});
