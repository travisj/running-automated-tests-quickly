describe('Simple test', function() {
	it('Should add numbers.', function() {
		var simple = new Simple();
		expect(simple.adder(1)).toEqual(1);
		expect(simple.adder(2,2)).toEqual(4);
		expect(simple.adder(1,1,1)).toEqual(3);
		expect(simple.adder()).toEqual(0);
	});

	it('Should subtract numbers.', function() {
		var simple = new Simple();
		expect(simple.subber(10,2)).toEqual(8);
		expect(simple.subber(0, 8)).toEqual(-8);
	});
});

describe('testing booleans', function() {
	it('Should not fail', function() {
		expect(true).toEqual(true);
	});
	
	it('should fail', function() {
		expect(true).not.toEqual(1);
	});
});
