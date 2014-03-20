App.ProductRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("product", params.product_id)
  },

  actions: {
    addToCart: function(product){
      var cart = this.modelFor('application')
      var store = this.store
      cart.get('items').then(function (items) {
        return items.find(function (item) {
          return item.get('product').get('id') == product.get('id')
        })
      }).then(function (item) {
        if (item) {
          item.incrementProperty('quantity');
          item.save();
        } else {
          var item = store.createRecord('item', {
            cart: cart, 
            product: product, 
            quantity: 1, 
            current_price: product.get('price')
          });
          cart.get('items').pushObject(item)
          item.save();
        }
      })

    this.transitionTo('cart')
    }
  }
});