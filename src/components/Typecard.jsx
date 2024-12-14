import React from "react";
import ReceipeViewer from "./ReceipeViewer";
import pizzaImage from "../assets/pizza.jpg";

function Typecard({ type }) {
  const getFoods = () => {
    if (type == "Global Cuisine") {
      return [
        { foodLabel: "Pizza", key: "pizza" },
        { foodLabel: "Butter Chicken", key: "butterchicken" },
        { foodLabel: "Tacos", key: "tacos" },
      ];
    }
     else if (type == "Special Diets") {
      return [{ foodLabel: "Banana Smoothie", key: "bananasmoothie" }];
    } else if (type == "Quick N Easy") {
      return [{ foodLabel: "Noodles", key: "Noodles" }];
    }
    else if (type == "Healthy Diet") {
        return [{ foodLabel: "Grilled Chicken With Vegetables", key: "grilledchicken" }];
      }
    else{
        return [{ foodLabel: "Others", key: "others" }];

    }
  };

  const foods = getFoods();

  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={pizzaImage} alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {type}
        </h5>

        <div className="w-58 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {foods.map((food)=>(<button
            type="button"
            className="w-full px-4 py-2 font-medium text-left rtl:text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            {food.foodLabel}
          </button>))}
         
        </div>
      </div>
    </div>
  );
}
export default Typecard;
