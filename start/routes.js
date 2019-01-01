'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Hotel = use('App/Models/Hotel')
const City = use('App/Models/City')
const Review = use('App/Models/Review')
const User = use('App/Models/User');

Route.group(() => {
    Route.post('hotels', 'HotelController.store')
    Route.get('hotels', 'HotelController.index')
    Route.get('hotels/:id', 'HotelController.show')
    Route.put('hotels/:id', 'HotelController.update')
    Route.delete('hotels/:id', 'HotelController.delete')
    Route.post('hotels/filters', 'HotelController.showByFilters')
    Route.get('search/client=:words', 'HotelController.showBySearch')
    Route.get('search/searchresult=:search', 'HotelController.listBySearchResult')
  }).prefix('api/v1')

  Route.group(() => {
    Route.post('cities', 'CityController.store')
    Route.get('cities', 'CityController.index')
    Route.get('cities/:id', 'CityController.show')
    Route.put('cities/:id', 'CityController.update')
    Route.delete('cities/:id', 'CityController.delete')
    Route.post('cities/country', 'CityController.showByCountry')
  }).prefix('api/v1')

  Route.group(() => {
    Route.post('countries', 'CountryController.store')
    Route.get('countries', 'CountryController.index')
    Route.get('countries/:id', 'CountryController.show')
    Route.put('countries/:id', 'CountryController.update')
    Route.delete('countries/:id', 'CountryController.delete')
  }).prefix('api/v1')

  Route.group(() => {
    Route.post('reviews', 'ReviewController.store')
    Route.get('reviews', 'ReviewController.index')
    Route.get('reviews/:id', 'ReviewController.show')
    Route.put('reviews/:id', 'ReviewController.update')
    Route.delete('reviews/:id', 'ReviewController.delete')
    Route.get('reviews/hotel/:id', 'ReviewController.showByHotel')
  }).prefix('api/v1')

  Route.group(() => {
    Route.get('login', 'AuthController.get')
    Route.delete('logout', 'AuthController.logout')
  }).prefix('api/v1/user').middleware('auth');

  Route.group(() => {
    Route.post('login', 'AuthController.login')
    Route.post('signup', 'AuthController.register')
  }).prefix('api/v1/user');
