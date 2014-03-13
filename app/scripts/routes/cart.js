App.CartRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("cart", 1)
  },
  actions: {
    deleteItem: function(item) {
      this.store.find('cart', 1).then(function(cart) {
        cart.get('items').removeObject(item)
      });
      item.destroyRecord()
    }
  }
})