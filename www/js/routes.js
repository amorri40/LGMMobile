angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.resources', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/resources.html',
        controller: 'resourcesCtrl'
      }
    }
  })

  .state('tabsController.play', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/play.html',
        controller: 'playCtrl'
      }
    }
  })

  .state('tabsController.debug', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/debug.html',
        controller: 'debugCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.sprites', {
    url: '/listSprites',
    params: { 
      folder_name: {
          value: 'Sprites',
        },
        contents: {
          // value: 'Sprites',
        },
        depth: {
          value:2
        }
    },
    views: {
      'tab1': {
        templateUrl: 'templates/sprites.html',
        controller: 'spritesCtrl'
      }
    }
  })

  .state('tabsController.paths', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/paths.html',
        controller: 'pathsCtrl'
      }
    }
  })

  .state('tabsController.scripts', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/scripts.html',
        controller: 'scriptsCtrl'
      }
    }
  })

  .state('tabsController.shaders', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/shaders.html',
        controller: 'shadersCtrl'
      }
    }
  })

  .state('tabsController.timelines', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/timelines.html',
        controller: 'timelinesCtrl'
      }
    }
  })

  .state('tabsController.fonts', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/fonts.html',
        controller: 'fontsCtrl'
      }
    }
  })

  .state('tabsController.sounds', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/sounds.html',
        controller: 'soundsCtrl'
      }
    }
  })

  .state('tabsController.backgrounds', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/backgrounds.html',
        controller: 'backgroundsCtrl'
      }
    }
  })

  .state('objects', {
    url: '/page25',
    templateUrl: 'templates/objects.html',
    controller: 'objectsCtrl'
  })

  .state('rooms', {
    url: '/page26',
    templateUrl: 'templates/rooms.html',
    controller: 'roomsCtrl'
  })

  .state('instances', {
    url: '/page28',
    templateUrl: 'templates/instances.html',
    controller: 'instancesCtrl'
  })

  .state('tabsController.actions', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/actions.html',
        controller: 'actionsCtrl'
      }
    }
  })

  .state('tabsController.spriteEditor', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/spriteEditor.html',
        controller: 'spriteEditorCtrl'
      }
    }
  })

  .state('tabsController.pathEditor', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/pathEditor.html',
        controller: 'pathEditorCtrl'
      }
    }
  })

  .state('tabsController.backgroundEditor', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/backgroundEditor.html',
        controller: 'backgroundEditorCtrl'
      }
    }
  })

  .state('tabsController.soundEditor', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/soundEditor.html',
        controller: 'soundEditorCtrl'
      }
    }
  })

  .state('tabsController.scriptEditor', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/scriptEditor.html',
        controller: 'scriptEditorCtrl'
      }
    }
  })

  .state('tabsController.shaderEditor', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/shaderEditor.html',
        controller: 'shaderEditorCtrl'
      }
    }
  })

  .state('tabsController.fontEditor', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/fontEditor.html',
        controller: 'fontEditorCtrl'
      }
    }
  })

  .state('tabsController.timelineEditor', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/timelineEditor.html',
        controller: 'timelineEditorCtrl'
      }
    }
  })

  .state('objectEditor', {
    url: '/page24',
    templateUrl: 'templates/objectEditor.html',
    controller: 'objectEditorCtrl'
  })

  .state('roomEditor', {
    url: '/page27',
    templateUrl: 'templates/roomEditor.html',
    controller: 'roomEditorCtrl'
  })

  .state('tabsController.eventEditor', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/eventEditor.html',
        controller: 'eventEditorCtrl'
      }
    }
  })

  .state('tabsController.actionEditor', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/actionEditor.html',
        controller: 'actionEditorCtrl'
      }
    }
  })

  .state('instanceEditor', {
    url: '/page29',
    templateUrl: 'templates/instanceEditor.html',
    controller: 'instanceEditorCtrl'
  })

  .state('tileEditor', {
    url: '/page30',
    templateUrl: 'templates/tileEditor.html',
    controller: 'tileEditorCtrl'
  })

  .state('viewEditor', {
    url: '/page31',
    templateUrl: 'templates/viewEditor.html',
    controller: 'viewEditorCtrl'
  })

  .state('roomBackgroundEditor', {
    url: '/page32',
    templateUrl: 'templates/roomBackgroundEditor.html',
    controller: 'roomBackgroundEditorCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});