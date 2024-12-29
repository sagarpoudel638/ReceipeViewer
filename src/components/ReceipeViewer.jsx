import React from "react";

const ReceipeViewer = ({ setIsModalVisible, foodLabel }) => {
  // Define the ingredients for different food labels
  const ingredients = {
    pizza: {
      title: "Pizza Ingredients",
      details: [
        {
          title: "For the pizza dough",
          items: [
            "2 ½ cups all-purpose flour",
            "1 cup warm water (110°F/43°C)",
            "2 ¼ teaspoons (1 packet) dry yeast",
            "1 teaspoon sugar",
            "1 teaspoon salt",
            "2 tablespoons olive oil",
          ],
        },
        {
          title: "For the pizza sauce",
          items: [
            "6 oz tomato paste",
            "8 oz tomato sauce",
            "1 clove minced garlic",
            "1 teaspoon dried oregano",
            "1 teaspoon dried basil",
            "½ teaspoon salt",
            "1 teaspoon sugar (optional)",
          ],
        },
        {
          title: "Toppings",
          items: [
            "2 cups shredded mozzarella cheese",
            "½ cup pepperoni slices (optional)",
            "½ cup chopped bell peppers",
            "½ cup sliced mushrooms",
            "½ cup sliced onions",
            "¼ cup black olives",
            "Fresh basil leaves (optional)",
          ],
        },
      ],
    },
    "butter chicken": {
      title: "Butter Chicken Ingredients",
      details: [
        {
          title: "For the chicken",
          items: [
            "500g boneless chicken (cut into pieces)",
            "1 cup yogurt",
            "1 tablespoon ginger-garlic paste",
            "1 teaspoon turmeric",
            "1 teaspoon red chili powder",
            "1 teaspoon garam masala",
          ],
        },
        {
          title: "For the gravy",
          items: [
            "2 tablespoons butter",
            "1 large onion (finely chopped)",
            "2 large tomatoes (pureed)",
            "1 cup cream",
            "1 teaspoon kasuri methi (dried fenugreek leaves)",
            "Salt to taste",
            "1 teaspoon sugar (optional)",
          ],
        },
      ],
    },
    tacos: {
      title: "Tacos Ingredients",
      details: [
        {
          title: "For the taco shells",
          items: [
            "12 small corn tortillas",
            "1 tablespoon vegetable oil",
            "Salt to taste",
          ],
        },
        {
          title: "For the filling",
          items: [
            "500g ground beef or chicken",
            "1 tablespoon taco seasoning",
            "1 cup shredded lettuce",
            "1 cup diced tomatoes",
            "1 cup shredded cheese",
            "½ cup sour cream",
            "¼ cup chopped cilantro (optional)",
          ],
        },
      ],
    },
    "banana smoothie": {
      title: "Banana Smoothie Ingredients",
      details: [
        {
          title: "For the smoothie",
          items: [
            "2 ripe bananas",
            "1 cup milk (or almond milk)",
            "½ cup yogurt",
            "1 tablespoon honey or sugar (optional)",
            "1 teaspoon vanilla extract",
            "½ cup ice cubes (optional)",
          ],
        },
      ],
    },
    noodles: {
      title: "Noodles Ingredients",
      details: [
        {
          title: "For the noodles",
          items: [
            "200g dried noodles",
            "2 tablespoons vegetable oil",
            "2 cloves minced garlic",
            "1 cup mixed vegetables (carrots, bell peppers, etc.)",
            "2 tablespoons soy sauce",
            "1 tablespoon oyster sauce",
            "1 teaspoon sesame oil",
            "Green onions for garnish",
          ],
        },
      ],
    },
    "grilled chicken with vegetables": {
      title: "Grilled Chicken with Vegetables Ingredients",
      details: [
        {
          title: "For the chicken",
          items: [
            "4 boneless chicken breasts",
            "2 tablespoons olive oil",
            "1 teaspoon garlic powder",
            "1 teaspoon paprika",
            "Salt and pepper to taste",
          ],
        },
        {
          title: "For the vegetables",
          items: [
            "1 cup broccoli florets",
            "1 cup sliced zucchini",
            "1 cup cherry tomatoes",
            "1 tablespoon olive oil",
            "Salt and pepper to taste",
          ],
        },
      ],
    },
  };
  


  const foodIngredients = ingredients[foodLabel.toLowerCase()];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      aria-hidden="true"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {foodIngredients?.title || "Ingredients"}
          </h3>
          <button
            type="button"
            onClick={() => setIsModalVisible(false)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 md:p-5 space-y-4 overflow-y-scroll max-h-[80vh]">
          {foodIngredients ? (
            foodIngredients.details.map((section, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h4>
                <ul className="pl-5 space-y-1 list-disc text-gray-800 dark:text-gray-300">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              No ingredients found for {foodLabel}.
            </p>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            onClick={() => setIsModalVisible(false)}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Process
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceipeViewer;