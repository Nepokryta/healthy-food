/* eslint-disable no-underscore-dangle */
class EdamamService {
  _apiBase = 'https://api.edamam.com/api/recipes/v2';

  _apiIdAndKey = '&app_id=1163a4b2&app_key=dee52d302b8fa599d802279762001847';

  _options = '&diet=balanced&health=alcohol-free&dishType=Main%20course';

  getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return res.json();
  };

  getCards = async () => {
    const res = await this.getResourse(`${this._apiBase}?type=public&q=delish${this._apiIdAndKey}${this._options}`);
    const arr = res.hits.map(this.transformCard);
    return arr;
    // const res2 = await this.getResourse(res._links.next.href);
    // const arr2 = res2.hits.map(this.transformCard);
    // return [...arr, ...arr2];
  };

  /* eslint-enable no-underscore-dangle */

  transformCard = (data) => {
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
  };
}

export default EdamamService;
