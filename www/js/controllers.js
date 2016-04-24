angular.module('app.controllers', [])
  
.controller('resourcesCtrl', function($scope) {
	$scope.number_of_resource = window.number_of_resource;
})
   
.controller('playCtrl', function($scope) {

})
   
.controller('debugCtrl', function($scope) {

})
         
.controller('spritesCtrl', function($scope, $state, $stateParams) {

	// 	$scope.resources_in_folder=[
	// {name:'New Sprite'},
	// {name:'spr_one'}
	// 	];

	if (Object.keys($stateParams.contents).length>0)
		$scope.current_folder_contents = {sprites:$stateParams.contents};
	else 
		$scope.current_folder_contents =  window.global_game_resources;

	console.log("current_folder_contents:",$scope.current_folder_contents)
	$scope.$stateParams = $stateParams;
	$scope.current_depth = $stateParams.depth;
	$scope.resources_in_folder=window.get_resource_files_in_folder($scope.current_folder_contents, "sprite", $scope.current_depth);
	$scope.folder_name = $stateParams.folder_name || "Sprites";
})
   
.controller('pathsCtrl', function($scope) {

})
   
.controller('scriptsCtrl', function($scope) {

})
   
.controller('shadersCtrl', function($scope) {

})
   
.controller('timelinesCtrl', function($scope) {

})
   
.controller('fontsCtrl', function($scope) {

})
   
.controller('soundsCtrl', function($scope) {
$scope.current_depth = 2;
	$scope.resources_in_folder=window.get_resource_files_in_folder(window.global_game_resources, "sound", $scope.current_depth);

})
   
.controller('backgroundsCtrl', function($scope) {

})
   
.controller('objectsCtrl', function($scope) {

})
   
.controller('roomsCtrl', function($scope) {

})
   
.controller('instancesCtrl', function($scope) {

})
   
.controller('actionsCtrl', function($scope) {

})
   
.controller('spriteEditorCtrl', function($scope) {
	$scope.name="Ali"
})
   
.controller('pathEditorCtrl', function($scope) {

})
   
.controller('backgroundEditorCtrl', function($scope) {

})
   
.controller('soundEditorCtrl', function($scope) {

})
   
.controller('scriptEditorCtrl', function($scope) {

})
   
.controller('shaderEditorCtrl', function($scope) {

})
   
.controller('fontEditorCtrl', function($scope) {

})
   
.controller('timelineEditorCtrl', function($scope) {

})
   
.controller('objectEditorCtrl', function($scope) {

})
   
.controller('roomEditorCtrl', function($scope) {

})
   
.controller('eventEditorCtrl', function($scope) {

})
   
.controller('actionEditorCtrl', function($scope) {

})
   
.controller('instanceEditorCtrl', function($scope) {

})
   
.controller('tileEditorCtrl', function($scope) {

})
   
.controller('viewEditorCtrl', function($scope) {

})
   
.controller('roomBackgroundEditorCtrl', function($scope) {

})
 