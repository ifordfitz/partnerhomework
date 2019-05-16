const app = angular.module('MyBooks', []);


app.controller('MainController', ['$http', function($http){
    this.indexOfEditFormToShow = null;
    const controller = this;
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

    this.editBook = function(book){
        $http({
            method:'PUT',
            url:'/books/' + book._id,
            data: {
                title: this.updatedTitle,
                author: this.updatedAuthor,
                synopsis: this.updatedSynopsis,
                wouldRecommend : this.updatedWouldRecommend
            }
        }).then(function(response){
            controller.getBooks();
            controller.indexOfEditFormToShow = null;
        }, function(error){
            console.log(error);
        });
    }

    this.deleteBook = function(book){
        $http({
            method:'DELETE',
            url:'/books/' + book._id
        }).then(function(response){
            controller.getBooks();
        }, function(error){
            console.log(error);
        });
    }

    this.getBooks = function(){

        $http({
            method:'GET',
            url:'/books/'
        }).then(function(response){
            controller.books = response.data;
        }, function(error){

        });

    }
    this.getBooks();
}])
