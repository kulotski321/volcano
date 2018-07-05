var volcano = {
	database: {
		ref: function(path){
			console.log(path);

			return {
				on: function(name, callback){
					console.log(name, callback);
				},
				set: function(value){
					console.log(value);
				}
			};
		}
	}
};

// volcano.database.ref("/user/name/angelo").set("montil");