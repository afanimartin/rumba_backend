const db = require("./database");

const restaurants = "restaurants";

const add = (restaurant) => {
  const newRestaurant = {
    id: restaurant.name,
    name: restaurant.name,
    location: restaurant.location,
    city: restaurant.city,
    menu: restaurant.menu,
  };
  try {
    db.collection(restaurants).add(newRestaurant);
  } catch (error) {
    console.log(error);
  }
};

const get = (id) => {
  const restaurant = await db.collection(restaurants).doc(id).get();

  if (!restaurant.exists) {
    console.log("restaurant not found!");
  } else {
    return restaurant.data;
  }
};

module.exports = { add, get };
