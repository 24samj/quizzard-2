import "./CategorySelection.css";
import { categories } from "../../constants/questionBank";

const CategorySelection = ({ setCategorySelected }) => {
    return (
        <div className="category-container">
            <h1>Categories</h1>
            <p>
                Below are the available categories for the quiz game.
                <br />
                Select a category to get started!
            </p>
            {categories.map((category) => (
                <button
                    value={category.value}
                    onClick={() => {
                        setCategorySelected(category.value);
                    }}>
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategorySelection;
