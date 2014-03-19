App.Item = DS.Model.extend({
  product: DS.belongsTo('product'),
  quantity: DS.attr('number'),
  cart: DS.belongsTo('cart'),
  current_price: DS.attr('number'),
  subtotal: function(){
    return this.get('quantity') * this.get('current_price')
  }.property('quantity', 'current_price')
});
