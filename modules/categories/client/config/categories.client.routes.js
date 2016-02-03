'use strict';

//Setting up route
angular.module('categories').config(['$stateProvider',
    function($stateProvider) {
        // Categories state routing
        $stateProvider.
        state('listCategories', {
            url: '/categories',
            templateUrl: 'modules/categories/client/views/categories.client.view.html'
        }).
        state('createCategory', {
            url: '/categories/create',
            templateUrl: 'modules/categories/client/views/create-category.client.view.html'
        }).
        state('viewCategory', {
            url: '/categories/:categoryId',
            templateUrl: 'modules/categories/client/views/view-categories.client.view.html'
        }).
        state('editCategory', {
            url: '/categories/:categoryId/edit',
            templateUrl: 'modules/categories/client/views/edit-category.client.view.html'
        });
    }
]);