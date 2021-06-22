let myCtrl = angular.module("shoppingApp",[]).controller("myCtrl",function($scope){
    let list = this;
    list.items = [
        {text : "tomato", done : true},
        {text : "potato", done : false}
    ];

    list.remaining = function(){
        let count = 0;
        angular.forEach(list.items, item => {
            count += item.done ? 0 : 1; 
        });

        return count;
    };

   list.addNew = function(){
       let newItem = prompt("What's goes next in list?");
       if(newItem != null && newItem != "" && newItem != " "){
            list.items.push({text : newItem,done : false});
       }
       

   }
});

