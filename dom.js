const cats = [
    {
        "name": "Лара",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2021-09/167200DD-A44F-4845-8D4D-ACCFC180165A.jpeg",
        "age": 8,
        "rate": 7,
        "description": "Ласковая и контактная."
    },
    {
        "name": "Базиль",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg",
        "age": 2,
        "rate": 10,
        "description": "Любит играть и мурчать!"
    },
    {
        "name": "Риш",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/_DM34706.JPG",
        "age": 1,
        "rate": 10,
        "description": "Очень активный и дружелюбный."
    },
    {
        "name": "Элли",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/1_25.jpg",
        "age": 4,
        "rate": 8,
        "description": "Любит вкусно покушать."
    },
    {
        "name": "Чарли",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D0%BB%D0%B5%D0%B2%D0%B83_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        "age": 1,
        "rate": 8,
        "description": "Любит размышлять в одиночестве."
    },
    {
        "name": "Стефани",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/4_30.jpg",
        "age": 6,
        "rate": 9,
        "description": "Очень общительная и добрая."
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");
    style.innerHTML = `
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f8f9fa;
        }
        .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 3 колонки */
            grid-template-rows: repeat(2, auto); /* 2 строки */
            gap: 20px;
            padding: 20px;
            justify-items: center;
            max-width: 900px; /* Ограничиваем ширину контейнера */
            margin: 0 auto; /* Центрируем контейнер */
        }
        .cat-card {
            width: 250px;
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        .cat-card:hover {
            transform: scale(1.1) rotate(3deg);
        }
        .cat-card img {
            width: 100%;
            border-radius: 10px;
            transition: transform 0.3s ease;
        }
        .cat-card img:hover {
            transform: rotate(-3deg);
        }
    `;
    document.head.appendChild(style);

    const app = document.getElementById("app");
    const title = document.createElement("h1");
    title.innerText = "Наши котики";
    app.appendChild(title);

    const container = document.createElement("div");
    container.classList.add("container");
    app.appendChild(container);

    cats.forEach(cat => {
        const catCard = document.createElement("div");
        catCard.classList.add("cat-card");
        catCard.innerHTML = `
            <img src="${cat.img_link}" alt="${cat.name}">
            <h3>${cat.name}</h3>
            <p>Возраст: ${cat.age}</p>
            <p>Рейтинг: ${cat.rate}/10</p>
            <p>${cat.description}</p>
        `;
        container.appendChild(catCard);
    });
});
