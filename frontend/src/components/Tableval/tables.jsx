import react from "react";
function Tables(recipe){
    recipe = recipe.recipe;
    return(
        <table className="about border-collapse border border-slate-500 border-spacing-2">
                <thead>
                  <th className="center 100">
                    About 
                  </th>
                </thead>
                <tbody>
                <tr>
                  <td className="border border-slate-700"><b>Recipe Category</b></td>
                  <td className="border border-slate-700 content-center	"><p> {recipe.RecipeCategory}</p></td>
                </tr>
                <tr>
                  <td className="border border-slate-600"><b>Prep Time:</b></td>
                  <td className="border border-slate-700 content-center	"><p> {recipe.PrepTime}</p></td>
                </tr>
                
                <tr>
                  <td className="border border-slate-600"><b>Cook Time:</b></td>
                  {recipe.CookTime !== "" ?
                  <td className="border border-slate-700"><p> {recipe.CookTime}</p></td>
                  : "NAN"
                }
                </tr>
                
                
                <tr>
                  <td className="border border-slate-600"><b>Total Time:</b></td>
                  <td className="border border-slate-700"><p> {recipe.TotalTime}</p></td>
                </tr>
                  </tbody>
                  </table>

    );
}
export default Tables ;