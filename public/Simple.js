var Simple = function() {
	// aeou aeou aoeu aoeu aoeu aoa
	return {
		adder: function() {
			return _.reduce(arguments, function(memo, num) { return memo + num }, 0);
		},
		subber: function() {
			var _args = [];
			_.each(arguments, function(i) {
				_args.push(i);
			});
			var initial = _args.splice(0,1);
			return _.reduce(_args, function(memo, num) { return memo - num; }, initial.pop());
		}
	}
}
