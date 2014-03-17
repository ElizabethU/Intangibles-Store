App.Order = DS.Model.extend({
  cart: DS.belongsTo('cart', {async: true }),
  customer_name: DS.attr('string'),
  email: DS.attr('string'),
  status: DS.attr('string'),
  zipcode: DS.attr('string'),
  expdate: DS.attr('date'),
  ccv: DS.attr('string'),
  ccnumber: DS.attr('string')
});

App.Order.FIXTURES = [
  {
    id: 1,
    cart: 1,
    customer_name: "Elizabeth Uselton",
    email: 'elizabeth@elizabeth.com',
    status: 'pending',
    zipcode: '98102',
    expdate: '',
    ccv: '123',
    ccnumber: '1234567890123456'
  }
]