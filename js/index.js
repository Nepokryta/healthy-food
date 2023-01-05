window.addEventListener('DOMContentLoaded', function() {

    // блок с контактами
    class Contact {
        constructor(src, alt, link, target, title, subtitle, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.link = link;
            this.target = target;
            this.title = title;
            this.subtitle = subtitle;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('li');
            element.classList.add('contact__info');
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <a href=${this.link} target=${this.target} class="contact__info-title">${this.title}</a>
                <h4 class="contact__info-subtitle">${this.subtitle}</h4>
            `;
            this.parent.append(element);
        }
    }

    new Contact (
        "icons/ic_watch_later.svg",
        "ic_watch_later",
        "#",
        "_self",
        "Today 10:00 am - 7:00 pm",
        "Working hours",
        ".container .contact"
    ).render();
    new Contact (
        "icons/ic_near_me.svg",
        "ic_near_me",
        "https://goo.gl/maps/8VTd6biYdAWWSjAv5",
        "_blank",
        "Velyka Vasylkivska 100",
        "Get Directions",
        ".container .contact"
    ).render();
    new Contact (
        "icons/ic_call.svg",
        "ic_call",
        "tel:+80638332415",
        "_self",
        "+38 (063)833 24 15",
        "Call Online",
        ".container .contact"
    ).render();
    

    //двойные заголовок второго уровня;
    class Headline {
        constructor(title, subtitle, toggle, parentSelector) {
            this.title = title;
            this.subtitle = subtitle;
            this.toggle = toggle;
            this.parent = document.querySelector(parentSelector);
        }
    
        render() {
            const element = document.createElement('div');
            element.classList.add('headline');
            element.innerHTML = `
                <h2>${this.title}</h2>
                <div class="headline__subtitle">${this.subtitle}</div>
            `;
            const span = document.createElement('span');
            span.classList.add('green__line')
            span.style.display = `${this.toggle}`;
            this.parent.append(element, span);
        }
    }
    
    new Headline (
        "The Basics Of Healthy Food",
        "ABOUT",
        "none",
        ".container .about__title"
    ).render();
    new Headline (
        "how it works",
        "WORK",
        "block",
        ".container .works__title"
    ).render();
    new Headline (
        "Dish Of The Day",
        "DISHES",
        "block",
        ".container .dish__title"
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
                <img src=${this.src} alt=${this.alt}/>
                <h2 class="dish__card-title">${this.title}</h2>
                <h3 class="dish__card-subtitle">${this.subtitle}</h3>
                <h4 class="dish__card-description">${this.description}</h4>
                <div class="dish__card-active">
                    <div class="dish__card-active-stars">
                        <input type="checkbox" id="st1" value="1" />
                        <label for="st1"></label>
                        <input type="checkbox" id="st2" value="2" />
                        <label for="st2"></label>
                        <input type="checkbox" id="st3" value="3" />
                        <label for="st3"></label>
                        <input type="checkbox" id="st4" value="4" />
                        <label for="st4"></label>
                        <input type="checkbox" id="st5" value="5" />
                        <label for="st5"></label>

                        <div class="dish__card-active-value">12</div>
                    </div>
                    <button class="card__active-btn">ORDER</button>
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
})