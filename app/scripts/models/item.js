App.Item = DS.Model.extend({
  product: DS.belongsTo('product'),
  quantity: DS.attr('integer'),
  cart: DS.belongsTo('cart'),
  current_price: DS.attr('integer')
});

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    quantity: 2,
    cart: 1,
    current_price: "3000"
  }, {
    id: 2,
    product: 2,
    quantity: 3,
    cart: 1,
    current_price: "200"
  }, {
    id: 3,
    product: 2,
    quantity: 3,
    cart: 2,
    current_price: "1000"
  }
]