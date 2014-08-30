angular.module('directives.matchingObjects', [])

.directive('singleEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                selectField: '='
            },
            template: "<table class='table table-condensed'>" +
                "<thead><tr><th><h4>{{inputTitle}}</h4></th><th class='col-md-12'></th></tr></thead>" +
                "<tr><td class='col-md-12'>{{inputValue}}</td><!--td class='col-md-4 text-left'></td--></tr>",
            link: function(scope, element, attrs) {}
        };
    }
])

.directive('physicalquantityEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                selectField: '='
            },
            template: "<table class='table table-condensed'>" +
                "<thead><tr><th><h4>{{inputTitle}}</h4></th><th class='col-md-12'></th></tr></thead>" +
                "<tr><td class='col-md-12'>{{inputValue.value}}&nbsp;{{inputValue.unit}}</td></tr></table>",
            link: function(scope, element, attrs) {}
        };
    }
])
.directive('phoneEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                selectField: '='
            },
            template: "<table class='table table-condensed'>" +
                "<thead><tr><th><h4>{{inputTitle}}</h4></th><th class='col-md-12'></th></tr></thead>" +
                "<tr ng-repeat='phone in inputValue'><td class='col-md-8'>{{phone.number}}</td><td class='col-md-4 text-left'>{{phone.type}}</td></tr>",
            link: function(scope, element, attrs) {}
        };
    }
])

.directive('nameEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                selectField: '='
            },
            template: "<table class='table table-condensed'>" +
                "<thead><tr><th><h4>{{inputTitle}}</h4></th><th class='col-md-12'></th></tr></thead>" +
                "<tr><td class='col-md-12'>{{inputValue.first}} {{inputValue.middle.join(' ')}} {{inputValue.last}}</td></tr>",
            link: function(scope, element, attrs) {}
        };
    }
])

.directive('addressEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                selectField: '='
            },
            template: "<table class='table table-condensed'>" +
                "<thead><tr><th><h4>{{inputTitle}}</h4></th><th class='col-md-12'></th></tr></thead>" +
                "<tr ng-repeat='line in inputValue.street_lines'><td class='col-md-12'>{{line}}</td></tr>" +
                "<tr><td class='col-md-12'>{{inputValue.city}}, {{inputValue.state}} {{inputValue.zip}}</td></tr>",
            link: function(scope, element, attrs) {}
        };
    }
])

.directive('addressesEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                selectField: '='
            },
            template: "<table class='table table-condensed' ng-repeat='address in inputValue'>" +
                "<thead><tr><th><h4>Address</h4></th><th class='col-md-12'></th></tr></thead>" +
                "<tr><td class='col-md-12'>({{address.use}})</td></tr>" +
                "<tr ng-repeat='line in address.street_lines'><td class='col-md-12'>{{line}}</td></tr>" +
                "<tr><td class='col-md-12'>{{address.city}}, {{address.state}} {{address.zip}}</td></tr></table>",
            link: function(scope, element, attrs) {}
        };
    }
])

//languages for demographics
.directive('languagesEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                selectField: '='
            },
            template: "<div><h4>Languages</h4><table class='table table-condensed' ng-repeat='lang in inputValue'" +
                "<thead><tr><th><b>{{lang.language | bb_language}}</b></th><th class='col-md-12'></th></tr></thead>" +
                "<tr ><td class='col-md-12'>{{lang.mode}}</td></tr>" +
                "<tr ><td class='col-md-12'>Proficiency: {{lang.proficiency}}</td></tr>" +
                "<tr ng-show='lang.preferred'><td class='col-md-12'>Preferred</td></tr>" +
                "</table></div>",
            link: function(scope, element, attrs) {}
        };
    }
])

//guardians for demographics
.directive('guardiansEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                selectField: '='
            },
            template: "<div ><div ng-repeat='guardian in inputValue'>" +
                "<h4>Guardians</h4>" +
                "<table class='table table-condensed' ng-repeat='name in guardian.names'>" +
                "<thead><tr><th><b>Name</b></th><th class='col-md-12'></th></tr></thead>" +
                "<tr><td class='col-md-12'>{{name.first}} {{name.middle.join(' ')}} {{name.last}}</td></tr></table>" +

            "<table class='table table-condensed' ng-repeat='phone in guardian.phone'>" +
                "<thead><tr><th><b>Phone</b></th><th class='col-md-12'></th></tr></thead>" +
                "<tr><td class='col-md-8'>{{phone.number}}</td><td class='col-md-4 text-left'>{{phone.type}}</td></tr></table>" +

            "<table class='table table-condensed' ng-repeat='address in guardian.addresses'>" +
                "<thead><tr><th><b>Address</b></th><th class='col-md-12'></th></tr></thead>" +
                "<tr ng-repeat='line in address.street_lines'><td class='col-md-12'>{{line}}</td></tr>" +
                "<tr><td class='col-md-12'>{{address.city}}, {{address.state}} {{address.zip}}</td></tr></table>" +

            "</div></div>",
            link: function(scope, element, attrs) {}
        };
    }
])
    .directive('dateEntry', ['$parse',
        function($parse) {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    inputValue: '=',
                    inputTitle: '@',
                    selectField: '='
                },
                template: "<table class='table table-condensed'>" +
                    "<thead><tr><th><h4>{{inputTitle}}</h4></th><th class='col-md-12'></th></tr></thead>" +
                //"<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Date:</label></td><td class='col-md-4 text-left'>{{inputValue[0].displayDate}}</td></tr>" +
                    "<tr ng-show='inputValue.point'><td class='col-md-4'><label style='text-transform: capitalize;'>Date:</label></td><td class='col-md-4 text-left'>{{inputValue.point.date | date:'medium'}}</td></tr>" +
                    "<tr ng-show='inputValue.low && !inputValue.high'><td class='col-md-4'><label style='text-transform: capitalize;'>Date:</label></td><td class='col-md-4 text-left'>{{inputValue.low.date | date:'medium'}} - PRESENT</td></tr>" +
                    "<tr ng-show='!inputValue.low && inputValue.high'><td class='col-md-4'><label style='text-transform: capitalize;'>Date:</label></td><td class='col-md-4 text-left'>... - {{inputValue.high.date | date:'medium'}}</td></tr>" +
                    "<tr ng-show='inputValue.low && inputValue.high'><td class='col-md-4'><label style='text-transform: capitalize;'>Date:</label></td><td class='col-md-4 text-left'>{{inputValue.low.date | date:'medium'}} - {{inputValue.high.date | date:'medium'}}</td></tr>" +
                    "</table>",
                link: function(scope, element, attrs) {

                }
            };
        }
    ])


.directive('productEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                inputAdditional: '=',
                selectField: "="
            },
            template: "<div><table class='table table-condensed'>" +
                "<thead><tr><th><h4>{{inputTitle}}</h4></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Name:</label></td><td class='col-md-4 text-left'>{{inputValue.product.name}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code:</label></td><td class='col-md-4 text-left'>{{inputValue.product.code}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code System:</label></td><td class='col-md-4 text-left'>{{inputValue.product.code_system_name}}</td></tr>" +
                "</table>" +
                "<table class='table table-condensed'>" +
                "<thead><tr><th><h4>Manufacturer</h4></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-12'><label style='text-transform: capitalize;'>{{inputValue.manufacturer}}</label></td></tr>" +
                "</table></div>",
            link: function(scope, element, attrs) {}
        };
    }
])


.directive('codedEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                inputAdditional: '=',
                selectField: "="
            },
            template: "<table class='table table-condensed'>" +
                "<thead><tr><th><h4>{{inputTitle}}</h4></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Name:</label></td><td class='col-md-4 text-left'>{{inputValue.name}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code:</label></td><td class='col-md-4 text-left'>{{inputValue.code}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code System:</label></td><td class='col-md-4 text-left'>{{inputValue.code_system_name}}</td></tr>" +
                "</table>",
            link: function(scope, element, attrs) {}
        };
    }
])

//encounter for encounters
.directive('encounterEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                inputAdditional: '=',
                selectField: "="
            },
            template: "<div><table class='table table-condensed'>" +
                "<thead><tr><th><h4>{{inputTitle}}</h4></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Name:</label></td><td class='col-md-4 text-left'>{{inputValue.name}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code:</label></td><td class='col-md-4 text-left'>{{inputValue.code}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code System:</label></td><td class='col-md-4 text-left'>{{inputValue.code_system_name}}</td></tr></table>" +
                "<table class='table table-condensed' ng-repeat='tran in inputValue.translations'>" +
                "<thead><tr><th><b>Translation</b></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Name:</label></td><td class='col-md-4 text-left'>{{tran.name}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code:</label></td><td class='col-md-4 text-left'>{{tran.code}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code System:</label></td><td class='col-md-4 text-left'>{{tran.code_system_name}}</td></tr>" +
                "</table></div",
            link: function(scope, element, attrs) {}
        };
    }
])


//performers for encounters
//TODO: extra attributed not covered
.directive('encounterperformersEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                inputAdditional: '=',
                selectField: "="
            },
            template: "<div><h4>{{inputTitle}}</h4><div ng-repeat='perf in inputValue'>"+
                "<table class='table table-condensed' ng-repeat='code in perf.code'>" +
                "<thead><tr><th><b>Code</b></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Name:</label></td><td class='col-md-4 text-left'>{{code.name}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code:</label></td><td class='col-md-4 text-left'>{{code.code}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code System:</label></td><td class='col-md-4 text-left'>{{code.code_system_name}}</td></tr></table>" +

                "</div></div",
            link: function(scope, element, attrs) {}
        };
    }
])

//locations for encounters
//TODO: extra attributed not covered
.directive('encounterlocationsEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                inputAdditional: '=',
                selectField: "="
            },
            template: "<div><h4>{{inputTitle}}</h4><div ng-repeat='loc in inputValue'>"+
                "<table class='table table-condensed' ng-repeat='address in loc.address'>" +
                "<thead><tr><th><b>Address</b></th><th class='col-md-12'></th></tr></thead>" +
                "<tr ng-repeat='line in address.street_lines'><td class='col-md-12'>{{line}}</td></tr>" +
                "<tr><td class='col-md-12'>{{address.city}}, {{address.state}} {{address.zip}}</td></tr></table>" +

                "</div></div",
            link: function(scope, element, attrs) {}
        };
    }
])


//finding for encounter
.directive('findingEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                inputAdditional: '=',
                selectField: "="
            },
            template: "<div>"+
                "<table class='table table-condensed'>" +
                "<thead><tr><th><h4>{{inputTitle}}</h4></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Name:</label></td><td class='col-md-4 text-left'>{{inputValue.value.name}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code:</label></td><td class='col-md-4 text-left'>{{inputValue.value.code}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code System:</label></td><td class='col-md-4 text-left'>{{inputValue.value.code_system_name}}</td></tr></table>" +

                "<table class='table table-condensed' ng-show='inputValue.date_time'>" +
                "<thead><tr><th><b>Effective</b></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr ng-show='inputValue.date_time.low && inputValue.date_time.high'><td class='col-md-4'><label style='text-transform: capitalize;'>Date:</label></td><td class='col-md-4 text-left'>{{inputValue.date_time.low.date | date:'medium'}} - {{inputValue.date_time.high.date | date:'medium'}}</td></tr>" +
                "<tr ng-show='inputValue.date_time.low && !inputValue.date_time.high'><td class='col-md-4'><label style='text-transform: capitalize;'>Date:</label></td><td class='col-md-4 text-left'>{{inputValue.date_time.low.date | date:'medium'}} - PRESENT</td></tr>" +
                "<tr ng-show='!inputValue.date_time.low && inputValue.date_time.high'><td class='col-md-4'><label style='text-transform: capitalize;'>Date:</label></td><td class='col-md-4 text-left'>... - {{inputValue.date_time.high.date | date:'medium'}}</td></tr>" +
                "</table>" +
                "</div>",
            link: function(scope, element, attrs) {}
        };
    }
])

//administration for medications
//TODO: need interval support
.directive('medsadministrationEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                inputAdditional: '=',
                selectField: "="
            },
            template: "<div><h4>{{inputTitle}}</h4>"+
                "<div coded-entry input-value='inputValue.route' input-title='Route' select-field='selectedItems.route'></div>"+
                "<div coded-entry input-value='inputValue.form' input-title='Form' select-field='selectedItems.form'></div>"+
                "<div physicalquantity-entry input-value='inputValue.dose' input-title='Dose' select-field='selectedItems.dose'></div>"+
                "<div physicalquantity-entry input-value='inputValue.rate' input-title='Rate' select-field='selectedItems.rate'></div>"+
                "</div>",
            //templateUrl: "templates/matching/reconciliation/review/templates/sub/medsadministration.tpl.html",
            link: function(scope, element, attrs) {}
        };
    }
])

//product for medications
.directive('medsproductEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                inputAdditional: '=',
                selectField: "="
            },
            template: "<div><h4>{{inputTitle}}</h4>"+
                "<div coded-entry input-value='inputValue.product' input-title='Name'></div>"+
                "<div single-entry input-value='inputValue.unencoded_name' input-title='Unencoded Name'></div>"+
                "<div single-entry input-value='inputValue.manufacturer' input-title='Manufacturer'></div>"+
                "</div>",
            //templateUrl: "templates/matching/reconciliation/review/templates/sub/medsadministration.tpl.html",
            link: function(scope, element, attrs) {}
        };
    }
])

//severity for allergies
.directive('severityEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                inputAdditional: '=',
                selectField: "="
            },
            template: "<div><table class='table table-condensed'>" +
                "<thead><tr><th><h4>Severity</h4></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Name:</label></td><td class='col-md-4 text-left'>{{inputValue.code.name}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code:</label></td><td class='col-md-4 text-left'>{{inputValue.code.code}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code System:</label></td><td class='col-md-4 text-left'>{{inputValue.code.code_system_name}}</td></tr></table>" +
                "<table class='table table-condensed'><thead><tr><th><b>Interpretation</b></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Name:</label></td><td class='col-md-4 text-left'>{{inputValue.interpretation.name}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code:</label></td><td class='col-md-4 text-left'>{{inputValue.interpretation.code}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code System:</label></td><td class='col-md-4 text-left' style='text-overflow: ellipsis;'>{{inputValue.interpretation.code_system_name}}</td></tr>" +
                "</table></div>",
            link: function(scope, element, attrs) {}
        };
    }
])


//reaction for allergies
.directive('reactionEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                inputAdditional: '=',
                selectField: "="
            },
            template: "<div>"+
                "<table class='table table-condensed'>" +
                "<thead><tr><th><h4>Reaction</h4></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Name:</label></td><td class='col-md-4 text-left'>{{inputValue.reaction.name}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code:</label></td><td class='col-md-4 text-left'>{{inputValue.reaction.code}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code System:</label></td><td class='col-md-4 text-left'>{{inputValue.reaction.code_system_name}}</td></tr></table>" +

                "<table class='table table-condensed'>" +
                "<thead><tr><th><b>Effective</b></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr ng-show='inputValue.date_time.low && inputValue.date_time.high'><td class='col-md-4'><label style='text-transform: capitalize;'>Date:</label></td><td class='col-md-4 text-left'>{{inputValue.date_time.low.date | date:'medium'}} - {{inputValue.date_time.high.date | date:'medium'}}</td></tr>" +
                "<tr ng-show='inputValue.date_time.low && !inputValue.date_time.high'><td class='col-md-4'><label style='text-transform: capitalize;'>Date:</label></td><td class='col-md-4 text-left'>{{inputValue.date_time.low.date | date:'medium'}} - PRESENT</td></tr>" +
                "<tr ng-show='!inputValue.date_time.low && inputValue.date_time.high'><td class='col-md-4'><label style='text-transform: capitalize;'>Date:</label></td><td class='col-md-4 text-left'>... - {{inputValue.date_time.high.date | date:'medium'}}</td></tr>" +
                "</table>" +

                "<table class='table table-condensed'>" +
                "<thead><tr><th><b>Severity</b></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Name:</label></td><td class='col-md-4 text-left'>{{inputValue.severity.code.name}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code:</label></td><td class='col-md-4 text-left'>{{inputValue.severity.code.code}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code System:</label></td><td class='col-md-4 text-left'>{{inputValue.severity.code.code_system_name}}</td></tr></table>" +

                "<table class='table table-condensed'><thead><tr><th><b>Interpretation</b></th><th class='col-md-12' style='text-transform: capitalize;'></th></tr></thead>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Name:</label></td><td class='col-md-4 text-left'>{{inputValue.severity.interpretation.name}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code:</label></td><td class='col-md-4 text-left'>{{inputValue.severity.interpretation.code}}</td></tr>" +
                "<tr><td class='col-md-4'><label style='text-transform: capitalize;'>Code System:</label></td><td class='col-md-4 text-left'>{{inputValue.severity.interpretation.code_system_name}}</td></tr>" +
                "</table></div>",
            link: function(scope, element, attrs) {}
        };
    }
])



//result for results
.directive('resultEntry', ['$parse',
    function($parse) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                inputValue: '=',
                inputTitle: '@',
                inputAdditional: '=',
                selectField: "="
            },
            template: "<div>"+
                "<div coded-entry input-value='inputValue.result' input-title='Result'></div>"+
                "<div date-entry input-value='inputValue.date_time' input-title='Date'></div>"+
                "<div single-entry input-value='inputValue.status' input-title='Status'></div>"+
                "<div single-entry input-value='inputValue.interpretation' input-title='Interpretation'></div>"+
                "<div single-entry input-value='inputValue.value' input-title='Value'></div>"+
                "<div single-entry input-value='inputValue.unit' input-title='Unit'></div>"+
                "<div single-entry input-value='inputValue.reference_range.range' input-title='Reference Range'></div>"+

                "</div>",
            link: function(scope, element, attrs) {}
        };
    }
])



.directive('reviewNew', ['$parse',
    function($parse) {
        return {
            restrict: 'E',
            scope: {
                val: '=',
                title: '@'
            },
            replace: true,
            link: function(scope, element, attrs) {

                var entryType = function(input) {
                    var response = 'str';
                    if (angular.isObject(input)) {
                        response = 'obj';
                    }
                    if (angular.isArray(input)) {
                        response = 'arr';
                    }
                    return response;
                };

                if (entryType(scope.val) === 'str') {
                    var append_string = "<table class='table table-condensed table-hover'>" +
                        "<thead><tr><th class='col-md-2'></th><th style='text-transform: capitalize'>" + scope.title + "</th></tr></thead>" +
                        "<tr><td><input type='checkbox' value=''></td><td>" + scope.val + "</td></tr></table>";
                    element.append(append_string);
                }

                if (entryType(scope.val) === 'obj') {

                    var append_object = "<table class='table table-condensed table-hover'>" +
                        "<thead><tr><th class='col-md-2'><input type='checkbox' value=''></th><th style='text-transform: capitalize'>" +
                        scope.title + "</th></tr></thead>";

                    for (var i in scope.val) {

                        var append_obj_item = "<tr><td><input type='checkbox' value=''>" +
                            "</td><td><label style='text-transform: capitalize'>" + i + ":</label>  " + scope.val[i] + "</td></tr>";

                        append_object = append_object + append_obj_item;

                    }

                    append_object = append_object + "</table>";

                    element.append(append_object);

                }






                //console.log(element);

                //console.log(scope.val);

                // for (var i in scope.val) {

                //console.log(scope.val[i]);

                /*if (entryType(scope.val[i]) === 'str') {

                console.log(scope.val);        
                    
                    var append_string = "<table class='table table-condensed table-hover'>" + 
                                        "<thead><tr><th class='col-md-2'></th><th style='text-transform: capitalize'>" + scope.title + "</th></tr></thead>" + 
                                        "<tr><td><input type='checkbox' value=''></td><td>" + scope.val[i] + "</td></tr></table>";

                    element.append(append_string);

                }*/
                //  }

            }
        };
    }
]);
