window.addEventListener('DOMContentLoaded', function() {

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
})