var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"
var $ = require('jquery');
var _ = require('lodash')

var global_game_resources=[];
window.global_game_resources=global_game_resources;
window.number_of_resource={};


function handle_folder_of_resources(property_name, callback_folder, depth, resource) {
		var plural_name = property_name+"s";
		depth+=1;

		// if (depth ===1) console.log("Depth of 1",resource);
		
		if (_.isArray(resource)) {
			// 
			// # if we are an array then all we can do is iterate through our children
			// 
			return _.each(resource, handle_folder_of_resources.bind(this, property_name, callback_folder,depth));
		}
		// 
		// # If we are not an array (an object) then we need to check for the property_name
		// 
		if (_.has(resource,property_name) ) {
			var folder_name=resource.name;
			callback_folder(folder_name,resource, property_name, depth);
		} 
		// 
		// # Check for plural and get each resource inside the folder
		// 
		if (_.has(resource,plural_name) ) {
			_.each(resource[plural_name], handle_folder_of_resources.bind(this, property_name, callback_folder,depth));
		}
		
}

// 
// # Count the number of a resource type
// 
window.get_number_of_specific_resource = function(game_resources, specific_resource) {
	var current_count=0;
	var count_resources = function(folder_name, resource, property_name) {
		current_count+=resource[property_name].length;
	}

	_.each(game_resources, handle_folder_of_resources.bind(this, specific_resource, count_resources,0));
	return current_count;
}

// 
// # get a list of resources in folder
// 
window.get_resource_files_in_folder = function(game_resources, specific_resource, target_depth) {
	console.error("get_resource_files_in_folder",game_resources, specific_resource);
	var resources_in_folder={};
	var get_list_of_resources_to_show = function(folder_name, resource, property_name,depth) {
		console.log("Found Resource",resource, folder_name,depth, depth !== target_depth)
		if (depth > target_depth) return;
		
		resources_in_folder=resource;
	}
	_.each(game_resources, handle_folder_of_resources.bind(this, specific_resource, get_list_of_resources_to_show,0 ));
	// handle_folder_of_resources(specific_resource,game_resources[specific_resource+"s"], get_list_of_resources_to_show )
	return resources_in_folder;
}

$.get('./games/SpelunkyClassic-YoYo/SpelunkyClassic-YoYo.project.gmx', function(project_xml) {

	parseString(project_xml, {preserveChildrenOrder:true,mergeAttrs:true,explicitChildren :false}, function (err, result) {
	    
	    window.global_game_resources=result['assets'];
	    console.dir(window.global_game_resources);
	    var resource_types = Object.keys(window.global_game_resources);
	    _.each(resource_types, function(resource_type) {
	    	// 
	    	// # First remove any plural 's' on the end
	    	// 
	    	if (_.endsWith(resource_type, 's')) 
	    		resource_type=resource_type.substring(0,resource_type.length-1);

	    	var number_of_this_resource = window.get_number_of_specific_resource(window.global_game_resources,resource_type);
	    	console.log(resource_type, number_of_this_resource);
	    	window.number_of_resource[resource_type] = number_of_this_resource;
	    })
	    
	});
	// console.error(project_xml);
})
