import React,{useEffect,useState} from "react";
import "./styles.css";
import Recipe from './Recipe';
import TitleComp from "./TitleComp";

const App =() => {
  const APP_ID ='28af3df6';
  const APP_KEY = '6abe1a04cc07fa46d838cce0ec4aa68d';
 const [recipes, setRecipes] = useState([]);
 const [search,setSearch] = useState("");
 const [query,setQuery] = useState('chicken');

  useEffect( () =>
  {
// eslint-disable-next-line react-hooks/exhausideps    
getRecipes();

  },[query]);

const getRecipes = async () =>
{
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
setRecipes(data.hits);
console.log(data.hits);
};
const updateSearch = e =>
{
  setSearch(e.target.value);
};

const getSearch = e =>
{
e.preventDefault();
setQuery(search);
setSearch(''); 
};
  return (
    <div className="App">
    <TitleComp />
    <form className="search-form" onSubmit={getSearch}>
      <input type="text" className="search-bar" value ={search} onChange={updateSearch} 
      />
    <button className="search-button" type="submit" >
     search </button>
    
    
    </form>
  <div className="recipes">
  {recipes.map(recipe =>(
<Recipe 
key = {recipe.recipe.label}
title = {recipe.recipe.label} 
calories={recipe.recipe.calories} 
image={recipe.recipe.image} 
ingredients = {recipe.recipe.ingredients}
/>
    ))}
    </div>
    </div>
  );
}
export default App;