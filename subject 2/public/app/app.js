'use strict'

const config = [
    "$stateProvider",
    "$urlRouterProvider",
    Config
]

angular
    
    .module('wildNoteApp', [
        "ui.router",
        "ngResource"
    ])

    .config(config)

    // .factory("Hey", function() {
    //     return {getConseil: () => "utilise les factory pour créer ta ressource !"}
    // })

function Config($stateProvider, $urlRouterProvider) {
    const states = [
        {
            name: "home",
            url: "/",
            component: "home"
        }
        // {
        //     name: "usersPage",
        //     url: "/users",
        //     component: "usersPage"
        // }
    ]

    states.forEach((state) => {
        $stateProvider.state(state)
    })

    $urlRouterProvider.otherwise('/')
}
