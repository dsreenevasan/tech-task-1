angular.module('app', ['ui.bootstrap', 'toaster'])
    .controller('RestaurantController', function ($scope, $log, toaster) {
      var ctrl = this;
      ctrl.totalAmount = 0;
      ctrl.amount = [];
      ctrl.orderPlaced = false;
        console.log(ctrl.orderPlaced);
      ctrl.menu = [{name: 'Cheesy crunchy Burger', description: '', price: 109, amount: 0},
                    {name: 'French Fries', description: '', price: 79, amount: 0},
                    {name: 'Potato Wedges', description: '', price: 69, amount: 0},
                    {name: 'Chicken Spring Roll', description: '', price: 50, amount: 0},
                    {name: 'Paneer Tikka Frankie', description: '', price: 89, amount: 0}];
      ctrl.changeQuantity = function(operation, index) {
          if(operation == 1) {
              if (ctrl.menu[index].amount > 0)
                  ctrl.menu[index].amount--;
          }
          else
            ctrl.menu[index].amount++;
          ctrl.calcTotalAmount();
      };

      ctrl.calcTotalAmount = function() {
        ctrl.totalAmount = 0;
        angular.forEach(ctrl.menu, function(value, key){
            if(value.amount < 0){
                value.amount = 0;
            }
          if(value.amount > 0) {
            ctrl.totalAmount += parseInt(value.amount * value.price);
          }
        });
        console.log(ctrl.totalAmount);
      };

        ctrl.placeOrder = function() {
            if(ctrl.totalAmount <= 0){
                toaster.pop("error", "Alert", "Please choose an item to place order", 4000);
            }
            else {
                ctrl.orderPlaced = true;
            }
        }
    });
