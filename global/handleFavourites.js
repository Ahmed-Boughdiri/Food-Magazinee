import axios from "axios";
import { userID } from "./authentification";

export let favouritesList = [];

export const handleFavourites = async () => {
  await axios
    .post(
      "https://us-central1-food-magazine-6e38c.cloudfunctions.net/getFavourites",
      { uid: userID }
    )
    .then((res) => (favouritesList = res.data));
};


export const putInTheFavourites = async (food) => {
  await axios.post(
    "https://us-central1-food-magazine-6e38c.cloudfunctions.net/PutInFavourites",
    {
      uid: userID,
      recipe: food,
    }
  );
};

export const removeFromFavourites = async (name) => {
  await axios.post(
    "https://us-central1-food-magazine-6e38c.cloudfunctions.net/RemoveFromFavourites",
    { uid: userID, favourites: favouritesList, foodName: name }
  );
};
