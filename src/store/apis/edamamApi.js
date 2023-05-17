import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const edamamApi = createApi({
  reducerPath: 'edamamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.edamam.com/api/' }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => `recipes/v2?type=public&q=delish&app_id=1163a4b2&app_key=dee52d302b8fa599d802279762001847
      &diet=balanced&health=alcohol-free&dishType=Main%20course`,
      transformResponse: (response) => {
        return response.hits.map((data) => {
          const { recipe } = data;
          const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

          return {
            id: recipe.uri.slice(51, 83),
            src: recipe.images.REGULAR.url,
            alt: recipe.label,
            title: recipe.label,
            newSubtitle: capitalize(recipe.cuisineType[0]),
            subtitle: recipe.mealType[0].includes('/') ? recipe.mealType[0].split('/').map(capitalize).join(' / ') 
              : capitalize(recipe.mealType[0]),
            description: recipe.ingredients.map((item) => capitalize(item.food)).join(', '),
            totalTime: recipe.totalTime,
            totalWeight: recipe.totalWeight.toFixed(),
            linkToRecipe: recipe.url
          };
        }).map((item) => ({ 
          ...item, 
          key: item.id, 
          showElement: !item.showElement,
        }));
      }
    }),
  }),
});

export const { useGetRecipesQuery } = edamamApi;
export default edamamApi;
