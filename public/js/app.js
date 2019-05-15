const app = angular.module('MyBooks', []);


app.controller('MainController', ['$http', function($http){
    this.h5 = 'Holidays! Celebrate!'

    this.createForm = {}
    this.createBook = () => {
        $http({
              method: 'POST',
              url: '/books',
              data: this.createForm
        }).then(response => {
              console.log(response.data);
              this.createForm = {}
        }).catch(error => {
              console.log(error);
        })
    }

    
}])
