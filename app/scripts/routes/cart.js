App.CartRoute = Ember.Route.extend({
  // model: function (params) {
  //   return this.store.find("cart", 1)
  // },

  model: function() {
    return this.controllerFor('application').get('cart');
  },
  actions: {

    confirm: function(proxy) {
      var self = this;
      var order = this.store.createRecord('order', proxy)
      this.controllerFor("application").get('cart').then(function (cart) {
        order.save().then(function (order) {
          alert('success')
          var cart = self.store.createRecord('cart')
          cart.save().then(function (cart) {
            localStorage.cartId = cart.get('id')
            self.controllerFor('application').set('cart', self.store.find('cart', cart.get('id')))
          })
          self.transitionTo('order', order.id);
        },
        function (error) {
          order.deleteRecord();
          alert('There was a problem processing your order.')
        }
      )
    })
    },

    deleteItem: function(item) {
      this.store.find('cart', localStorage.cartId).then(function(cart) {
        cart.get('items').removeObject(item)
      });
      item.destroyRecord()
    }
  }
})