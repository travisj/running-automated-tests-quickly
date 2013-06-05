;var Pdx2bk = function() {}

Pdx2bk.prototype.getForPdx = function() {
	return [
		{
			name: "The Pearl",
			tags: ['lofts', 'galleries']
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
			name: "Dumbo",
			tags: ['lofts', 'water-front', 'galleries']
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

Pdx2bk.prototype.findSimilar = function(pdxName) {
	var me = this;
	var pdx = this.findByName('pdx', pdxName);
	var similar = [];
	_.each(pdx.tags, function(tag) {
		similar = me.helper.addToList(similar, me.findByTag('bk', tag));
	});
	return _.uniq(similar);
}



// -------------------- HELPER METHODS ------------------------------ 

Pdx2bk.prototype.helper = {};
Pdx2bk.prototype.helper.addToList = function(list, neighborhoodsToAdd) {
	var listNames = _.map(list, function(hood) {
		return hood.name;
	});
	_.each(neighborhoodsToAdd, function(hood) {
		if (!_.contains(listNames, hood.name)) {
			list.push(hood);
		}
	});
	return list;
}
