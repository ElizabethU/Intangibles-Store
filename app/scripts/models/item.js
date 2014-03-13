App.Item = DS.Model.extend({
  product: DS.belongsTo('product'),
  quantity: DS.attr('number'),
  cart: DS.belongsTo('cart'),
  current_price: DS.attr('number'),
  subtotal: function(){
    return this.get('quantity') * this.get('current_price')
  }.property('quantity', 'current_price')
});

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    quantity: 2,
    cart: 1,
    current_price: 100000
  }, {
    id: 2,
    product: 2,
    quantity: 3,
    cart: 1,
    current_price: 1000000
  }, {
    id: 3,
    product: 2,
    quantity: 3,
    cart: 2,
    current_price: 1000
  }
]