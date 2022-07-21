import angular, {INgModelController} from "angular";
import ngMaterial from "angular-material";
import IDialogService = angular.material.IDialogService;

const module = angular.module("ngPagination", [
    ngMaterial
])

    .directive("pagination", [
        '$mdDialog',
        ($mdDialog: IDialogService) => ({
            restrict: 'E',
            scope: {
                page: '=ngModel',
                limit: "=",
                total: "="
            },
            template: `Showing {{offset+1}} - {{total_shown()}} of {{total}} 
                            <md-button ng-disabled="!prevAvailable()" ng-click="prev()" class="md-icon-button">
                                <md-tooltip>Previous Page</md-tooltip>
                                <i class="fa fa-chevron-left"></i>
                            </md-button>
                            <md-button ng-disabled="total_pages <= 1" ng-click="jump($event)" class="md-icon-button">
                                {{page}}
                            </md-button>
                            <md-button ng-disabled="!nextAvailable()" ng-click="next()" class="md-icon-button">
                                <md-tooltip>Next Page</md-tooltip>
                                <i class="fa fa-chevron-right"></i>
                            </md-button>`,
            require: '^ngModel',
            link: ($scope: any, element: JQLite, attrs: any, ngModel: INgModelController) => {

                $scope.$watchGroup(["limit", "total"], () => {
                    $scope.total_pages = Math.ceil($scope.total / $scope.limit);
                })

                $scope.$watchGroup(['page', 'limit'], () => {
                    if (!$scope.page || isNaN($scope.page)) {
                        $scope.page = 1;
                    }
                    $scope.offset = $scope.limit * ($scope.page - 1)
                });

                $scope.total_shown = () => {
                    var count = $scope.offset + $scope.limit;
                    if (count > $scope.total) {
                        return $scope.offset + ($scope.total % $scope.limit);
                    } else {
                        return count;
                    }
                }

                $scope.nextAvailable = () => $scope.page < $scope.total_pages;
                $scope.prevAvailable = () => $scope.page > 1;

                $scope.prev = () => {
                    ngModel.$setViewValue($scope.page - 1);
                }

                $scope.next = () => {
                    ngModel.$setViewValue($scope.page + 1);
                }

                $scope.jump = (e) => {
                    // @ts-ignore
                    var dialog = $mdDialog.prompt({
                        title: "Page Number",
                        textContent: "Enter the page number you want to jump to",
                        targetEvent: e,
                        ok: "Jump",
                        cancel: "Cancel"
                    });

                    $mdDialog.show(dialog).then((page) => {
                        ngModel.$setViewValue(page)
                    })
                }

                ngModel.$parsers.push((value) => {
                    if (value > $scope.total_pages) {
                        return $scope.total_pages;
                    } else if (value < 1) {
                        return 1;
                    } else {
                        return value;
                    }
                });
            }
        })
    ])

export default module.name;