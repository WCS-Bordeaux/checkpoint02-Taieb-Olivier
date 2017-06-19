'use strict'

angular.module('wildNoteApp')

    .component('home', {
        templateUrl: '/app/components/home/home.html',
        controller: Home
    })

function Home($http) {
    const that = this;
    $http.get('/users').then(function(Result){
        console.log(Result)
        that.users = Result.data
    })
}

