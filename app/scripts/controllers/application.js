App.ApplicationController = Ember.ObjectController.extend({
  cart: null,
  init: function () {
    // localStorage.removeItem("cartId")
    if (typeof(localStorage.cartId) === "undefined") {
      var cart = this.store.createRecord("cart")
      cart.save().then(function (cart) {
        localStorage.cartId = cart.id;
    });
    }

    var cart = this.store.find("cart", localStorage.cartId)

    this.set("cart", cart)
  }
})