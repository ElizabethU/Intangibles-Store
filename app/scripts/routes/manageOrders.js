App.ManageCheckoutRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("checkout");
  },

  actions: {
    checkout: function (){

    }
  }
});