"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = __importDefault(require("angular"));
var angular_material_1 = __importDefault(require("angular-material"));
var module = angular_1.default.module("ngPagination", [
    angular_material_1.default
])
    .directive("pagination", [
    '$mdDialog',
    function ($mdDialog) { return ({
        restrict: 'E',
        scope: {
            page: '=ngModel',
            limit: "=",
            total: "="
        },
        template: "Showing {{offset+1}} - {{total_shown()}} of {{total}} \n                            <md-button ng-disabled=\"!prevAvailable()\" ng-click=\"prev()\" class=\"md-icon-button\">\n                                <md-tooltip>Previous Page</md-tooltip>\n                                <i class=\"fa fa-chevron-left\"></i>\n                            </md-button>\n                            <md-button ng-disabled=\"total_pages <= 1\" ng-click=\"jump($event)\" class=\"md-icon-button\">\n                                {{page}}\n                            </md-button>\n                            <md-button ng-disabled=\"!nextAvailable()\" ng-click=\"next()\" class=\"md-icon-button\">\n                                <md-tooltip>Next Page</md-tooltip>\n                                <i class=\"fa fa-chevron-right\"></i>\n                            </md-button>",
        require: '^ngModel',
        link: function ($scope, element, attrs, ngModel) {
            $scope.$watchGroup(["limit", "total"], function () {
                $scope.total_pages = Math.ceil($scope.total / $scope.limit);
            });
            $scope.$watchGroup(['page', 'limit'], function () {
                if (!$scope.page || isNaN($scope.page)) {
                    $scope.page = 1;
                }
                $scope.offset = $scope.limit * ($scope.page - 1);
            });
            $scope.total_shown = function () {
                var count = $scope.offset + $scope.limit;
                if (count > $scope.total) {
                    return $scope.offset + ($scope.total % $scope.limit);
                }
                else {
                    return count;
                }
            };
            $scope.nextAvailable = function () { return $scope.page < $scope.total_pages; };
            $scope.prevAvailable = function () { return $scope.page > 1; };
            $scope.prev = function () {
                ngModel.$setViewValue($scope.page - 1);
            };
            $scope.next = function () {
                ngModel.$setViewValue($scope.page + 1);
            };
            $scope.jump = function (e) {
                // @ts-ignore
                var dialog = $mdDialog.prompt({
                    title: "Page Number",
                    textContent: "Enter the page number you want to jump to",
                    targetEvent: e,
                    ok: "Jump",
                    cancel: "Cancel"
                });
                $mdDialog.show(dialog).then(function (page) {
                    ngModel.$setViewValue(page);
                });
            };
            ngModel.$parsers.push(function (value) {
                if (value > $scope.total_pages) {
                    return $scope.total_pages;
                }
                else if (value < 1) {
                    return 1;
                }
                else {
                    return value;
                }
            });
        }
    }); }
]);
exports.default = module.name;
//# sourceMappingURL=index.js.map