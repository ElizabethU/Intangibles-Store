App.PlantRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("product", params.plant_id)
  }
})