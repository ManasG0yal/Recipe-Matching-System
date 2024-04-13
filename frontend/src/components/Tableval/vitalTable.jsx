import react from "react";

function VitalTable(recipe){
    recipe = recipe.recipe ;
    return (
        <table className="border-collapse border border-slate-500">
                <thead>
                  <th>
                    Nutritional Information 
                  </th>
                </thead>
                <tbody>
                <tr>
                  <td className="border border-slate-600"><b>Calories:</b> </td>
                  <td className="border border-slate-700"><p>{recipe.Calories} Kcal</p></td>
                </tr>
                <tr>
                  <td className="border border-slate-600"><b>Fat Content:</b></td>
                  <td className="border border-slate-700"><p> {recipe.FatContent} g</p></td>
                </tr>
                <tr>
                  <td className="border border-slate-600"><b>Saturated Fat Content:</b></td>
                  <td className="border border-slate-700"><p> {recipe.SaturatedFatContent} g</p></td>
                </tr>
                <tr>
                  <td className="border border-slate-600"><b>Cholesterol Content:</b></td>
                  <td className="border border-slate-700"><p> {recipe.CholesterolContent} mg</p></td>
                </tr>
                <tr>
                  <td className="border border-slate-600"><b>Sodium Content:</b></td>
                  <td className="border border-slate-700"><p> {recipe.SodiumContent} mg</p></td>
                </tr>
                <tr>
                  <td className="border border-slate-600"><b>Carbohydrate Content:</b> </td>
                  <td className="border border-slate-700"><p>{recipe.CarbohydrateContent} g</p></td>
                </tr>
                <tr>
                  <td className="border border-slate-600"><b>Fiber Content:</b></td>
                  <td className="border border-slate-700"><p> {recipe.FiberContent} g</p></td>
                </tr>
                <tr>
                  <td className="border border-slate-600"><b>Sugar Content:</b> </td>
                  <td className="border border-slate-700"><p>{recipe.SugarContent} g</p></td>
                </tr>
                <tr>
                  <td className="border border-slate-600"><b>Protein Content:</b></td>
                  <td className="border border-slate-700"><p>{recipe.ProteinContent}g</p></td>
                </tr>
                  </tbody>
                  </table>

    );
}
export default VitalTable;