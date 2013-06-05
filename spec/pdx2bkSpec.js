describe('Neighborhood search', function() {
	it('Should find neighborhoods by name', function() {
		var pdx2bk = new Pdx2bk();
		expect(_.size(pdx2bk.getForBk())).toEqual(3);
		expect(pdx2bk.findByName('bk', 'Park Slope').name).toEqual('Park Slope');
		expect(pdx2bk.findByName('bk', 'Williamsburg').name).toEqual('Williamsburg');
	});

	it('Should find neighborhoods by tag', function() {
		var pdx2bk = new Pdx2bk();
		var fixies = pdx2bk.findByTag('bk', 'fixies');
		expect(fixies.length).toEqual(1);
		expect(fixies[0].name).toEqual('Williamsburg');

		var brunch = pdx2bk.findByTag('bk', 'brunch');
		expect(brunch.length).toEqual(2);
		expect(_.find(brunch, function(data) {
			return data.name === 'Park Slope';
		})).not.toEqual(undefined);
		expect(_.find(brunch, function(data) {
			return data.name === 'Williamsburg';
		})).not.toEqual(undefined);
	});

	it('Should find similar neighborhoods', function() {
		var pdx2bk = new Pdx2bk();
		var similarToThePearl = pdx2bk.findSimilar("The Pearl");
		expect(similarToThePearl.length).toEqual(1);
	});
});

describe('Test helper methods', function() {
	it('Should add unique object to list', function() {
		var pdx2bk = new Pdx2bk();
		var list = [
			{name: 'One'},
			{name: 'Two'}
		];
		expect(pdx2bk.helper.addToList(list, [{name: 'Three'}]).length).toEqual(3);
		expect(pdx2bk.helper.addToList(list, [{name: 'Three'}]).length).toEqual(3);
	});
});
