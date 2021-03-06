angular.module('app.controllers', [])
  
.controller('resourcesCtrl', function($scope) {
	$scope.number_of_resource = window.number_of_resource;
})
   
.controller('playCtrl', function($scope) {

})
   
.controller('debugCtrl', function($scope) {

})
         
.controller('spritesCtrl', function($scope, $state, $stateParams) {


	var plural_name = $stateParams.resource_name+"s";

	if (Object.keys($stateParams.contents).length>0)
		{
			$scope.current_folder_contents = {};
			$scope.current_folder_contents[plural_name] = $stateParams.contents;
			console.log("plural_name",plural_name,"contents:",$stateParams.contents)
	}
	else 
		$scope.current_folder_contents =  window.global_game_resources[plural_name];

	console.log("current_folder_contents:",$scope.current_folder_contents)
	$scope.resources_in_folder=window.get_resource_files_in_folder($scope.current_folder_contents, $stateParams.resource_name, 1);
	$scope.folder_name = $stateParams.folder_name;

	$scope.folders = $scope.resources_in_folder[plural_name];
	$scope.files = $scope.resources_in_folder[$stateParams.resource_name];

	$scope.folder_sref = "tabsController."+plural_name;

	$scope.image="./img/"+$stateParams.resource_name+".svg"

	$scope.editor="tabsController."+$stateParams.resource_name+"Editor"

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
   
.controller('spriteEditorCtrl', function($scope, $stateParams) {
	$scope.name="Ali";
	var name;
	if ($stateParams.resource_name)
	{name = $stateParams.resource_name.replace("sprites\\","");
		$scope.title =  name || "Edit Sprite";
		$scope.resource = window.getResourceFromFileName($stateParams.resource_name, "sprite")['sprite'];
		console.log($scope.resource);
		$scope.image = window.get_image_for_sprite($scope.resource);
		console.log($scope.image);
	}
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
 