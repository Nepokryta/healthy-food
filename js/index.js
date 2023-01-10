window.addEventListener('DOMContentLoaded', function() {

    //двойные заголовок второго уровня;
    class Headline {
        constructor(title, src, alt, toggle, parentSelector) {
            this.title = title;
            this.src = src;
            this.alt = alt;
            this.toggle = toggle;
            this.parent = document.querySelector(parentSelector);
        }
    
        render() {
            const element = document.createElement('div');
            element.classList.add('headline');
            element.innerHTML = `
                <h2>${this.title}</h2>
                <div class="headline__subtitle"><img src=${this.src} alt=${this.alt}/></div>
            `;
            const span = document.createElement('span');
            span.classList.add('green__line')
            span.style.display = `${this.toggle}`;
            this.parent.append(element, span);
        }
    }
    
    new Headline (
        "The Basics Of Healthy Food",
        "icons/ABOUT.svg",
        "ABOUT",
        "none",
        ".container .about__title"
    ).render();
    new Headline (
        "how it works",
        "icons/WORK.svg",
        "WORK",
        "block",
        ".container .works__title"
    ).render();
    new Headline (
        "Dish Of The Day",
        "icons/DISHES.svg",
        "DISHES",
        "block",
        ".container .dish__title"
    ).render();
    new Headline (
        "This month's chefs",
        "icons/CHEFS.svg",
        "CHEFS",
        "block",
        ".container .chefs__title"
    ).render();
    new Headline (
        "Recipes From Our Chefs",
        "icons/RECIPES.svg",
        "RECIPES",
        "block",
        ".container .recipes__title"
    ).render();
    new Headline (
        "We in Social",
        "icons/SOCIAL.svg",
        "SOCIAL",
        "block",
        ".container .social__title"
    ).render();


    //карточки в разделе works
    class WorksCard {
        constructor(title, subtitle, parentSelector) {
            this.title = title;
            this.subtitle = subtitle;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            element.classList.add('works__card');
            element.innerHTML = `
                <h2 class="works__card-title">${this.title}</h2>
                <span class="works__card-line"></span>
                <h3 class="works__card-subtitle">${this.subtitle}</h3>
            `;
            this.parent.append(element);
        }
    }
    new WorksCard (
        "Pick meals",
        "Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.",
        ".container .works__cards"
    ).render();
    new WorksCard (
        "Choose how often",
        "Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!",
        ".container .works__cards"
    ).render();
    new WorksCard (
        "fast deliveries",
        "Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.",
        ".container .works__cards"
    ).render();
    new WorksCard (
        "tasty meals",
        "Gobble makes cooking fast, so you have more time to unwind and be with family.",
        ".container .works__cards"
    ).render();


    // карточки с едой
    class DishCard {
        constructor(src, alt, title, subtitle, description, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.subtitle = subtitle;
            this.description = description;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            element.classList.add('dish__card');
            element.innerHTML = `
                <button class="arrow-card">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_4_292" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="5" width="16" height="13">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6 8.79998V5.59998L19.2 11.2L13.6 16.8V13.52C9.59995 13.52 6.79995 14.8 4.79995 17.6C5.59995 13.6 7.99995 9.59998 13.6 8.79998Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_4_292)">
                        <rect x="1.59998" y="1.59998" width="20.8" height="20.8" fill="white"/>
                        </g>
                    </svg>
                </button>
                <img src=${this.src} alt=${this.alt}/>
                <h2 class="dish__card-title">${this.title}</h2>
                <h3 class="dish__card-subtitle">${this.subtitle}</h3>
                <h4 class="dish__card-description">${this.description}</h4>
                <div class="dish__card-action">
                    <div class="dish__card-action-stars">

                        <input type="checkbox" id="st1" value="1" />
                        <label for="st1">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_4_301" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_4_301)">
                            <rect x="-3" y="-3" width="26" height="26" fill="#4D4D4D"/>
                            </g>
                            </svg>
                        </label>

                        <input type="checkbox" id="st2" value="2" />
                        <label for="st2">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_4_301" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_4_301)">
                            <rect x="-3" y="-3" width="26" height="26" fill="#4D4D4D"/>
                            </g>
                            </svg>
                        </label>

                        <input type="checkbox" id="st3" value="3" />
                        <label for="st3">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_4_301" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_4_301)">
                            <rect x="-3" y="-3" width="26" height="26" fill="#4D4D4D"/>
                            </g>
                            </svg>
                        </label>

                        <input type="checkbox" id="st4" value="4" />
                        <label for="st4">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_4_262" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_4_262)">
                            <rect x="-3" y="-3" width="26" height="26" fill="#4D4D4D"/>
                            </g>
                            </svg>
                        </label>

                        <input type="checkbox" id="st5" value="5" />
                        <label for="st5">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_4_217" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_4_217)">
                            <rect x="-3" y="-3" width="26" height="26" fill="#4D4D4D"/>
                            </g>
                            </svg>
                        </label>

                        <div class="dish__card-action-value">12</div>
                    </div>
                    <button class="card__action-btn">ORDER</button>
                </div>
            `;
            this.parent.append(element);
        }
    }
    new DishCard (
        "img/yellow-soup.png",
        "yellow-soup",
        "Featured Meal",
        "Served with french fries + drink",
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        ".container .dish__cards"
    ).render();
    new DishCard (
        "img/beans-and-peppers.png",
        "beans-and-peppers",
        "Featured Meal",
        "Served with french fries + drink",
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        ".container .dish__cards"
    ).render();
    new DishCard (
        "img/eggs.png",
        "eggs",
        "Featured Meal",
        "Served with french fries + drink",
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        ".container .dish__cards"
    ).render();
    new DishCard (
        "img/fish.png",
        "fish",
        "Featured Meal",
        "Served with french fries + drink",
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        ".container .dish__cards"
    ).render();
    new DishCard (
        "img/salad.png",
        "salad",
        "Featured Meal",
        "Served with french fries + drink",
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        ".container .dish__cards"
    ).render();
    new DishCard (
        "img/three-salads.png",
        "three-salads",
        "Featured Meal",
        "Served with french fries + drink",
        "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
        ".container .dish__cards"
    ).render();

// карточки с рецептами
    class RecipesCard {
        constructor(size, background, subtitle, data, title, name, views, comments, parentSelector) {
            this.size = size;
            this.background = background;
            this.subtitle = subtitle;
            this.data = data;
            this.title = title;
            this.name = name;
            this.views = views;
            this.comments = comments;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            element.classList.add(`recipes__card-${this.size}`);
            element.style.background = `${this.background}`;
            element.innerHTML = `
                <button class="arrow-card">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_2_20" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4 6.2001H3.66398L8.13598 1.7281L6.99998 0.600098L0.599976 7.0001L6.99998 13.4001L8.12798 12.2721L3.66398 7.8001H13.4V6.2001Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_2_20)">
                    <rect x="-3.40002" y="-3.3999" width="20.8" height="20.8" fill="#fff"/>
                    </g>
                    </svg>
                </button>
                <button class="subtitle">${this.subtitle}</button>
                <h3 class="data">${this.data}</h3>
                <h2 class="title">${this.title}</h2>
                <h3 class="name">${this.name}</h3>
                <div class="action">
                    <div class="views">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
                        <div class="views-value">${this.views}</div>
                    </div>
                    <div class="comments">
                        <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 9.999v-2h4v12.001h-3v4l-5.333-4h-7.667v-4h12v-6.001zm-2 4.001h-9.667l-5.333 4v-4h-3v-14.001h18v14.001z"/></svg>
                        <div class="comments-value">${this.comments}</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    new RecipesCard (
        "big",
        "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(img/vegetables.png)",
        "breakfast",
        "05 Jul 2016",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Jason Keller",
        "275",
        "12",
        ".container .recipes__cards"
    ).render();
    new RecipesCard (
        "small",
        "#252525",
        "lunch",
        "05 Jul 2016",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        "Jason Keller",
        "275",
        "12",
        ".container .recipes__cards"
    ).render();
    new RecipesCard (
        "small",
        "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/green-salad.png)",
        "dinner",
        "05 Jul 2016",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        "Jason Keller",
        "275",
        "12",
        ".container .recipes__cards"
    ).render();
    new RecipesCard (
        "small",
        "#252525",
        "sweets",
        "05 Jul 2016",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        "Jason Keller",
        "275",
        "12",
        ".container .recipes__cards"
    ).render();
})
