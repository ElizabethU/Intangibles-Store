App.Product = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("number"),
  image: DS.attr("string"),
  avatar: DS.attr("string"),
  description: DS.attr("string")
})

App.Product.FIXTURES = [
  {
    id: 1,
    name: "Billboard Space",
    price: 100000,
    avatar: "http://placekitten.com/50/50",
    image: "http://www.colourbox.com/preview/3284045-765063-street-billboard-with-a-space-for-your-text.jpg",
    description: "Rent billboard space for the upcoming NYC mayoral election, just remember not to win!"
  }, {
    id: 2,
    name: "Iceberg",
    price: 10000000,
    avatar: "http://placekitten.com/50/50",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Titanic_iceberg.jpg/220px-Titanic_iceberg.jpg",
    description: "Fresh water. ...melting into the ocean."
  }
]