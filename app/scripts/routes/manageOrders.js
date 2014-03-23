App.ManageCheckoutRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("order");
  },

  actions: {
    confirm: function (){

    }
  }
});