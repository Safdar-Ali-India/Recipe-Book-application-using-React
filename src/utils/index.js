

console.log(import.meta.env.VITE_APP_APP_ID);
console.log(import.meta.env.VITE_APP_APP_KEY);


const app_id= "ac6341a0";
const app_key="1fef44cac3476c67a4747d54b32c1e20";




console.log(app_id);

export async function fetchRecipes(filter) {
    const { query, limit } = filter;
    // const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=0&to=${limit}`;
    const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

export async function fetchRecipe(id) {
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${app_id}&app_key=${app_key}`

    const response = await fetch(url)
    
    const data = await response.json();
    
    return data[0];
}
