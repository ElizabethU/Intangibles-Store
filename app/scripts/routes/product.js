App.ProductRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("product", params.product_id)
  },

  actions: {
    addToCart: function(product){
      var store = this.store;

      var item = store.createRecord('item', { 
        quantity: 1,
        product: product,
        current_price: this.current_price
      });

      store.find('cart', 1).then(function(cart) {
        item.set('cart', cart); 
        cart.get('items').pushObject(item)
      });

      this.transitionTo('cart');
    },
  },
});