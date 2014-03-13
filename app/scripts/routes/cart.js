App.CartRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("cart", 1)
  },
  actions: {
    deleteItem: function(item) {
      item.destroyRecord()
    }
  }
})