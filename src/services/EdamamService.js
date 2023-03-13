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

  getDishs = async () => {
    const res = await this.getResourse(`${this._apiBase}?type=public&q=delish${this._apiIdAndKey}${this._options}`);
    const res2 = await this.getResourse(res._links.next.href);
    const arr = res.hits.map(this.transformDishCard);
    const arr2 = res2.hits.map(this.transformDishCard);
    
    return [...arr, ...arr2];
  };
  /* eslint-enable no-underscore-dangle */

  transformDishCard = (dish) => {
    return {
      src: dish.recipe.images.REGULAR.url,
      alt: dish.recipe.label,
      title: dish.recipe.label,
      newSubtitle: dish.recipe.source,
      subtitle: dish.recipe.cuisineType.map((item) => item[0].toUpperCase() + item.slice(1))[0],
      description: dish.recipe.ingredients.map((item) => item.food[0].toUpperCase() + item.food.slice(1)).join(', ')
    };
  };
}

export default EdamamService;
