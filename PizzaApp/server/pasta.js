

const pasta =[
  {
    "canPurchase": true,
    "id": 0,
    "image": "assets/images/spaghetti_bolognese.webp",
    "ingredients": "spaghetti, ground beef, tomato sauce, garlic, onion, basil",
    "name": "Spaghetti Bolognese",
    "price": 15.5,
    "reviews": [],
    "soldOut": false,
    "weight": 500
  },
  {
    "canPurchase": false,
    "id": 1,
    "image": "assets/images/fettuccine_alfredo.webp",
    "ingredients": "fettuccine, heavy cream, parmesan cheese, butter",
    "name": "Fettuccine Alfredo",
    "price": 18,
    "reviews": [
      {
        "author": "JimmyDean@example.org",
        "body": "Loved the creamy sauce, but could use a touch more seasoning.",
        "createdOn": 1397490980837,
        "stars": 4
      },
      {
        "author": "gemsRock@example.org",
        "body": "Perfect comfort food!",
        "createdOn": 1397490980837,
        "stars": 5
      },
      {
        "author": "test@test.ro",
        "body": "test",
        "createdOn": 948,
        "stars": "3"
      },
      {
        "author": "test2@test.ro",
        "body": "test2",
        "createdOn": 624,
        "stars": "2"
      }
    ],
    "soldOut": false,
    "weight": 550
  },
  {
    "canPurchase": true,
    "id": 2,
    "image": "assets/images/penne_arrabbiata.webp",
    "ingredients": "penne, tomato sauce, garlic, red chili, parsley",
    "name": "Penne Arrabbiata",
    "price": 13.5,
    "reviews": [
      {
        "author": "bob@bob.com",
        "body": "Spicy and delicious!",
        "createdOn": 0,
        "stars": 4
      },
      {
        "author": "adrianberejnec29@gmail.com",
        "body": "Too spicy for me but well made.",
        "createdOn": 225,
        "stars": "3"
      },
      {
        "author": "mihaivulpe3@gmail.com",
        "body": "Great flavor profile.",
        "createdOn": 228,
        "stars": "5"
      },
      {
        "author": "mitza1994@gmail.com",
        "body": "Solid dish, would order again.",
        "createdOn": 296,
        "stars": "4"
      }
    ],
    "soldOut": false,
    "weight": 450
  }
]


module.exports = pasta;
