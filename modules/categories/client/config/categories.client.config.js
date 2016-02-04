(function() {
  'use strict';

  angular
    .module('categories')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Categories',
      state: 'categories',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'categories', {
      title: 'List Categories',
      state: 'listCategories',
      position: 'categories'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'categories', {
      title: 'Create Categories',
      state: 'createCategory',
      position: 'categories/create'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'categories', {
      title: 'View Categories',
      state: 'viewCategory',
      position: 'categories/:categoryId'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'categories', {
      title: 'Edit Categories',
      state: 'editCategory',
      position: 'categories/:categoryId/edit'
    });

  }
})();