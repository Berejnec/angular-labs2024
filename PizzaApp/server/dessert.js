


const dessert = [
  {
    "canPurchase": true,
    "id": 0,
    "image": "assets/images/chocolate_pasta.webp",
    "ingredients": "tagliatelle, dark chocolate sauce, white chocolate shavings, fresh strawberries",
    "name": "Chocolate Delight Pasta",
    "price": 12.5,
    "reviews": [],
    "soldOut": false,
    "weight": 300
  },
  {
    "canPurchase": false,
    "id": 1,
    "image": "assets/images/fruit_pasta.webp",
    "ingredients": "angel hair pasta, mixed berry compote, mint, whipped cream",
    "name": "Berry Angel Hair",
    "price": 10,
    "reviews": [
      {
        "author": "JimmyDean@example.org",
        "body": "A refreshing and light dessert, perfect for summer!",
        "createdOn": 1397490980837,
        "stars": 4
      },
      {
        "author": "gemsRock@example.org",
        "body": "Loved the freshness of the berries with the light pasta!",
        "createdOn": 1397490980837,
        "stars": 5
      }
    ],
    "soldOut": false,
    "weight": 250
  },
  {
    "canPurchase": true,
    "id": 2,
    "image": "assets/images/cinnamon_pasta.webp",
    "ingredients": "fettuccine, sweet cinnamon sauce, chopped nuts, powdered sugar",
    "name": "Cinnamon Sweet Fettuccine",
    "price": 9.5,
    "reviews": [
      {
        "author": "bob@bob.com",
        "body": "Unique take on a dessert, cinnamon flavor was just right.",
        "createdOn": 0,
        "stars": 4
      }
    ],
    "soldOut": false,
    "weight": 300
  }
];

module.exports = dessert;
