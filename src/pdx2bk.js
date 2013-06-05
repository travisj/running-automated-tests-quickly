var Pdx2bk = function() {
}

Pdx2bk.prototype.getForPdx = function() {
	return [
		{
			name: "The Pearl",
			tags: ['?']
		}
	];
}

Pdx2bk.prototype.getForBk = function() {
	return [
		{
			name: "Park Slope",
			tags: ['park', 'strollers', 'bars', 'brunch']
		},
		{
			name: "Fort Greene",
			tags: ['park', 'historic']
		},
		{
			name: "Williamsburg",
			tags: ['brunch', 'fixies', 'kale']
		}
	];
}

Pdx2bk.prototype.getFor = function(city) {
	return city === 'bk' ? this.getForBk() : this.getForPdx();
}

Pdx2bk.prototype.findByName = function(city, name) {
	return _.find(this.getFor(city), function(data) {
		return data.name === name;
	});
}

Pdx2bk.prototype.findByTag = function(city, tag) {
	return _.filter(this.getFor(city), function(data, _name) {
		return _.contains(data.tags, tag);
	});
}
