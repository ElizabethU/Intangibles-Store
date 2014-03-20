App.Product = DS.Model.extend({
  item: DS.belongsTo('item'),
  name: DS.attr("string"),
  price: DS.attr("number"),
  image: DS.attr("string"),
  avatar: DS.attr("string"),
  description: DS.attr("string")
})