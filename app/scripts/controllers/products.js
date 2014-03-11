App.ProductsController = Ember.ArrayController.extend({
  actions: {
    hide: function () {
      this.set("hidden", true)
    },
    show: function () {
      this.set("hidden", false)
    }
  }
})