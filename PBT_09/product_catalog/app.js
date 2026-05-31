const products = [{
        id: 1,
        name: "iPhone 16",
        price: 25990000,
        category: "phone",
        image: "https://placehold.co/300x200?text=iPhone+16",
        rating: 4.8,
        inStock: true
    },
    {
        id: 2,
        name: "Samsung S25",
        price: 23990000,
        category: "phone",
        image: "https://placehold.co/300x200?text=Samsung+S25",
        rating: 4.7,
        inStock: true
    },
    {
        id: 3,
        name: "Xiaomi 15",
        price: 16990000,
        category: "phone",
        image: "https://placehold.co/300x200?text=Xiaomi+15",
        rating: 4.5,
        inStock: true
    },
    {
        id: 4,
        name: "MacBook Air M4",
        price: 32990000,
        category: "laptop",
        image: "https://placehold.co/300x200?text=MacBook+Air+M4",
        rating: 4.9,
        inStock: true
    },
    {
        id: 5,
        name: "Dell XPS 13",
        price: 28990000,
        category: "laptop",
        image: "https://placehold.co/300x200?text=Dell+XPS+13",
        rating: 4.7,
        inStock: true
    },
    {
        id: 6,
        name: "Asus Vivobook",
        price: 18990000,
        category: "laptop",
        image: "https://placehold.co/300x200?text=Asus+Vivobook",
        rating: 4.3,
        inStock: false
    },
    {
        id: 7,
        name: "AirPods Pro",
        price: 5990000,
        category: "accessory",
        image: "https://placehold.co/300x200?text=AirPods+Pro",
        rating: 4.8,
        inStock: true
    },
    {
        id: 8,
        name: "Galaxy Buds",
        price: 3490000,
        category: "accessory",
        image: "https://placehold.co/300x200?text=Galaxy+Buds",
        rating: 4.5,
        inStock: true
    },
    {
        id: 9,
        name: "Logitech MX Master",
        price: 2490000,
        category: "accessory",
        image: "https://placehold.co/300x200?text=MX+Master",
        rating: 4.9,
        inStock: true
    },
    {
        id: 10,
        name: "iPad Air",
        price: 18990000,
        category: "tablet",
        image: "https://placehold.co/300x200?text=iPad+Air",
        rating: 4.8,
        inStock: true
    },
    {
        id: 11,
        name: "Galaxy Tab S10",
        price: 17990000,
        category: "tablet",
        image: "https://placehold.co/300x200?text=Galaxy+Tab+S10",
        rating: 4.6,
        inStock: true
    },
    {
        id: 12,
        name: "Xiaomi Pad 7",
        price: 9990000,
        category: "tablet",
        image: "https://placehold.co/300x200?text=Xiaomi+Pad+7",
        rating: 4.4,
        inStock: true
    }
];

let filteredProducts = [...products];

let cartCount = 0;
let currentCategory = "all";

const body = document.body;

const container =
    document.createElement("div");

container.className = "container";

body.appendChild(container);

const cartBox =
    document.createElement("div");

cartBox.className = "cart-box";

cartBox.textContent = "🛒";

const badge =
    document.createElement("span");

badge.className = "badge";
badge.textContent = "0";

cartBox.appendChild(badge);

body.appendChild(cartBox);

const header =
    document.createElement("div");

header.className = "header";

container.appendChild(header);

const controls =
    document.createElement("div");

controls.className = "controls";

header.appendChild(controls);

const searchInput =
    document.createElement("input");

searchInput.placeholder =
    "Search product...";

controls.appendChild(searchInput);

const sortSelect =
    document.createElement("select");

sortSelect.innerHTML = `
<option value="default">Sort</option>
<option value="priceAsc">Price ↑</option>
<option value="priceDesc">Price ↓</option>
<option value="name">Name A-Z</option>
<option value="rating">Highest Rating</option>
`;

controls.appendChild(sortSelect);

const darkModeBtn =
    document.createElement("button");

darkModeBtn.textContent =
    "🌙 Dark Mode";

header.appendChild(darkModeBtn);

const categoryBox =
    document.createElement("div");

categoryBox.className =
    "category-buttons";

container.appendChild(categoryBox);

const categories = [
    "all",
    "phone",
    "laptop",
    "accessory",
    "tablet"
];

categories.forEach(category => {

    const button =
        document.createElement("button");

    button.textContent =
        category.toUpperCase();

    button.dataset.category =
        category;

    if (category === "all") {
        button.classList.add("active");
    }

    categoryBox.appendChild(button);
});

const productGrid =
    document.createElement("div");

productGrid.className =
    "product-grid";

container.appendChild(productGrid);

const modal =
    document.createElement("div");

modal.className =
    "modal hidden";

body.appendChild(modal);

function renderProducts(productArray) {

    productGrid.textContent = "";

    productArray.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "card";

        card.dataset.id = product.id;

        const image =
            document.createElement("img");

        image.src = product.image;

        const cardBody =
            document.createElement("div");

        cardBody.className = "card-body";

        const title =
            document.createElement("h3");

        title.textContent = product.name;

        const price =
            document.createElement("p");

        price.textContent =
            product.price.toLocaleString("vi-VN") +
            " VNĐ";

        const rating =
            document.createElement("p");

        rating.textContent =
            "⭐ " + product.rating;

        const stock =
            document.createElement("p");

        stock.textContent =
            product.inStock ?
            "Còn hàng" :
            "Hết hàng";

        const addCartBtn =
            document.createElement("button");

        addCartBtn.className =
            "add-cart";

        addCartBtn.textContent =
            "Thêm giỏ";

        cardBody.appendChild(title);
        cardBody.appendChild(price);
        cardBody.appendChild(rating);
        cardBody.appendChild(stock);
        cardBody.appendChild(addCartBtn);

        card.appendChild(image);
        card.appendChild(cardBody);

        productGrid.appendChild(card);

    });

}

function filterByCategory(category) {

    currentCategory = category;

    filteredProducts =
        products.filter(product => {

            if (category === "all") {
                return true;
            }

            return product.category === category;

        });

    searchProducts();
}

function searchProducts() {

    const keyword =
        searchInput.value
        .toLowerCase()
        .trim();

    let result =
        products.filter(product => {

            const categoryMatch =
                currentCategory === "all" ||
                product.category === currentCategory;

            const searchMatch =
                product.name
                .toLowerCase()
                .includes(keyword);

            return categoryMatch &&
                searchMatch;

        });

    result = sortProducts(result);

    renderProducts(result);
}

function sortProducts(productArray) {

    const result = [...productArray];

    switch (sortSelect.value) {

        case "priceAsc":

            result.sort(
                (a, b) =>
                a.price - b.price
            );

            break;

        case "priceDesc":

            result.sort(
                (a, b) =>
                b.price - a.price
            );

            break;

        case "name":

            result.sort(
                (a, b) =>
                a.name.localeCompare(b.name)
            );

            break;

        case "rating":

            result.sort(
                (a, b) =>
                b.rating - a.rating
            );

            break;
    }

    return result;
}

function showModal(product) {

    modal.textContent = "";

    const modalContent =
        document.createElement("div");

    modalContent.className =
        "modal-content";

    const image =
        document.createElement("img");

    image.src = product.image;

    const title =
        document.createElement("h2");

    title.textContent =
        product.name;

    const price =
        document.createElement("p");

    price.textContent =
        "Giá: " +
        product.price.toLocaleString("vi-VN") +
        " VNĐ";

    const rating =
        document.createElement("p");

    rating.textContent =
        "Đánh giá: " +
        product.rating;

    const category =
        document.createElement("p");

    category.textContent =
        "Danh mục: " +
        product.category;

    const stock =
        document.createElement("p");

    stock.textContent =
        product.inStock ?
        "Còn hàng" :
        "Hết hàng";

    modalContent.appendChild(image);
    modalContent.appendChild(title);
    modalContent.appendChild(price);
    modalContent.appendChild(rating);
    modalContent.appendChild(category);
    modalContent.appendChild(stock);

    modal.appendChild(modalContent);

    modal.classList.remove("hidden");
}
categoryBox.addEventListener(
    "click",
    e => {

        if (
            e.target.tagName !==
            "BUTTON"
        ) {
            return;
        }

        document
            .querySelectorAll(
                ".category-buttons button"
            )
            .forEach(button => {

                button.classList.remove(
                    "active"
                );

            });

        e.target.classList.add(
            "active"
        );

        filterByCategory(
            e.target.dataset.category
        );

    });
searchInput.addEventListener(
    "input",
    searchProducts
);
sortSelect.addEventListener(
    "change",
    searchProducts
);
productGrid.addEventListener(
    "click",
    e => {

        const card =
            e.target.closest(".card");

        if (!card) {
            return;
        }

        const id =
            Number(card.dataset.id);

        const product =
            products.find(
                p => p.id === id
            );

        if (
            e.target.classList.contains(
                "add-cart"
            )
        ) {

            e.stopPropagation();

            cartCount++;

            badge.textContent =
                cartCount;

            return;
        }

        showModal(product);

    });
modal.addEventListener(
    "click",
    e => {

        if (
            e.target === modal
        ) {

            modal.classList.add(
                "hidden"
            );

        }

    });
darkModeBtn.addEventListener(
    "click",
    () => {

        body.classList.toggle(
            "dark-mode"
        );

    });
renderProducts(products);