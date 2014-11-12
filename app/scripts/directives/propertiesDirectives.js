/**
 * Created by Fathalian on 11/8/14.
 */
'use strict';

var app = angular.module('nestorApp.directives');

app.directive('componentProperties', [function () {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      propertyName: '=',
      componentProperties: '=',
      resourceProperties: '=',
      onPropertyDrag: '&',
      types: '='
    },
    templateUrl: 'templates/component_properties.html',
    link: function (scope) {

      scope.AddToTable = function (listToAddTo, propertyName, neededFields) {

        var item = {};
        _.each(neededFields, function (property) {
          item[property.name] = property.type;
        });

        if (!listToAddTo[propertyName]) {
          listToAddTo[propertyName] = [];
        }

        listToAddTo[propertyName].push(item);
      };

      scope.dragFinished = function ($data, $event) {
        $data.parent = scope.propertyName;
        scope.onPropertyDrag({data: $data, event: $event});
      };
    }
  };

}]);


app.directive('derivedProperties', [function () {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      propertyName: '=',
      componentProperties: '=',
      resourceProperties: '=',
      types: '='
    },
    templateUrl: 'templates/derived_properties.html',
    link: function (scope) {
      scope.AddToTable = function (listToAddTo, propertyName, neededFields) {

        var item = {};
        _.each(neededFields, function (property) {
          item[property.name] = property.type;
        });

        if (!listToAddTo[propertyName]) {
          listToAddTo[propertyName] = [];
        }

        listToAddTo[propertyName].push(item);
      };
    }
  };

}]);

app.directive('primitiveProperty', [function () {
  return {
    replace: true,
    restrict: 'E',
    transclude: true,
    scope: {
      property: '=',
      model: '='
    },
    templateUrl: '../../templates/primitive_properties.html',
    link: function(scope) {

      if (scope.property.type === 'Boolean') {
        scope.inputType = 'checkbox';
      } else if (scope.property.type === 'Integer') {
        scope.inputType = 'number';
      } else {
        scope.inputType = 'text';
      }
      if (!scope.model && scope.property.default) {
        scope.model = scope.property.default[0];
      }
      scope.itemSelected = function(selectedItem) {
        var actualValue = selectedItem.value;
        scope.model = actualValue;
      };

      if (scope.property.allowableValues) {
        scope.showSelect = true;
        scope.allowableValues = [];
        _.each(scope.property.allowableValues, function( valueObj ) {
          _.each(valueObj, function(value, key) {
            //scope.allowableValues.push(value);
            scope.allowableValues.push({name:value, value: key});
          });
        });

        scope.x = scope.allowableValues[0].name;
      } else {
        scope.showSimple = true;
      }
    }
  };
}]);

app.directive('tableProperty', [function () {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      property: '=',
      propertyTypes: '=',
      resourceProperties: '='
    },
    templateUrl: '../../templates/table_properties.html',
    link: function (scope) {

      scope.loadAllowableValues = function(item) {
        item.valueMap = [];
        _.each(item.allowableValues, function(valueObj){
          _.each(valueObj, function(value, key) {
            item.valueMap.push({name: value, value: key});
          });
        });

      };
      scope.AddToTable = function (listToAddTo, propertyName, neededFields) {

        var allFields = neededFields.required || [];
        if (neededFields.optional) {
          allFields.concat(neededFields.optional);
        }
        var item = {};
        _.each(allFields, function (property) {
          item[property.name] = property.type;
        });

        if (!listToAddTo[propertyName]) {
          listToAddTo[propertyName] = [];
        }

        listToAddTo[propertyName].push(item);
      };

      scope.saveEntry = function($data, $index) {
        var resourceProperties = scope.resourceProperties[scope.property.name][$index];
        _.each($data, function(enteredValue, enteredName) {
          if (enteredValue && enteredValue.value) {
            enteredValue = enteredValue.value;
          }
          resourceProperties[enteredName] = enteredValue;
        });
      };

      scope.removeRow = function($index) {

        scope.resourceProperties[scope.property.name].splice($index,1);
      };



    }
  };
}]);

app.directive('dragProperty', [function () {
  return {
    replace: true,
    restrict: 'E',
    transclude: true,
    scope: {
      property: '=',
      propertyTypes: '=',
      onDragComplete: '&'
    },
    templateUrl: '../../templates/drag_properties.html',
    link: function (scope) {
      scope.dragData = {
        name: scope.property.name,
        image: scope.propertyTypes.Display.image,
        belongsTo: 'me'
        //description: scope.propertyTypes.Description
      };

      scope.dragCompleted = function ($data, $event) {
        scope.onDragComplete({$data: $data, $event: $event});
      };
    }
  };
}]);
