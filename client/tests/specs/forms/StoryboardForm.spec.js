'use strict';

describe('Storyboard form', function() {
    var scope, ctrl;

    beforeEach(module('Angello.Storyboard'));
    beforeEach(module('Angello.Templates'));

    beforeEach(inject(function($q, $rootScope, $controller, $templateCache, $compile) {
        var UsersModel = {
            all: function() {
                var deferred = $q.defer();
                deferred.resolve({});
                return deferred.promise;
            }
        };

        var StoriesModel = {
            all: function() {
                var deferred = $q.defer();
                deferred.resolve({});
                return deferred.promise;
            }
        };

        scope = $rootScope.$new();

        ctrl = $controller('StoryboardCtrl', {
            $scope: scope,
            STORY_STATUSES: {},
            STORY_TYPES: {},
            UsersModel: UsersModel,
            StoriesModel: StoriesModel
        });

        scope.storyboard = ctrl;

        var templateHtml = $templateCache.get('src/angello/storyboard/tmpl/storyboard.html');
        var formElem = angular.element(templateHtml);
        $compile(formElem)(scope);

        scope.$digest()
    }));

    it('should be invalid by default', function() {
        expect(ctrl.detailsForm.$invalid).toBeTruthy();
    });

    it('should be valid with populated fields', function() {
        ctrl.editedStory = {
            title: '제목',
            status: '할 일',
            type: '개선',
            reporter: '보고자',
            assignee: '담당자'
        };

        scope.$digest();

        expect(ctrl.detailsForm.$valid).toBeTruthy();
    });
});
