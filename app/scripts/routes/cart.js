App.CartRoute = Ember.Route.extend({
  // model: function (params) {
  //   return this.store.find("cart", 1)
  // },

  model: function() {
    return this.modelFor('application');
  },
  actions: {

    confirm: function(proxy) {
      var order = this.store.createRecord('order', proxy)
      var self = this;
      order.save().then(
        function (order) {
          alert('success')
          self.transitionTo('order', order.id);
        },
        function (error) {
          order.deleteRecord();
          alert(error)
        }
      )
    },

    deleteItem: function(item) {
      this.store.find('cart', localStorage.cartId).then(function(cart) {
        cart.get('items').removeObject(item)
      });
      item.destroyRecord()
    }
  }
})