const products = [
    {id: 1, title: 'Notebook', price: 2000, Image: 'https://www.pngwing.com/ru/free-png-newqg'},
    {id: 2, title: 'Mouse', price: 20, Image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fru%2Fpng-kofoz&psig=AOvVaw1tlFVp6X1R7WwgOxLgJ4Q6&ust=1715107039053000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODx0eDV-YUDFQAAAAAdAAAAABAE'},
    {id: 3, title: 'Keyboard', price: 200, Image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fru%2Fsearch%3Fq%3D%25D0%25BA%25D0%25BE%25D0%25BC%25D0%25BF%25D1%258C%25D1%258E%25D1%2582%25D0%25B5%25D1%2580%2B%25D0%259A%25D0%25BB%25D0%25B0%25D0%25B2%25D0%25B8%25D0%25B0%25D1%2582%25D1%2583%25D1%2580%25D0%25B0&psig=AOvVaw0o1m3_A8ZoJxAh7WXGe_nK&ust=1715107729211000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLjbpuDY-YUDFQAAAAAdAAAAABAE'},
    {id: 4, title: 'Gamepad', price: 50, Image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhi-stores.ru%2Fcatalog%2Figrovye-pristavki%2Fconsoles-sony%2Fplaystation-5%2F8626%2F&psig=AOvVaw2DN5njFENeyD0ZTVPxi6Ol&ust=1715107963255000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOjX6JzZ-YUDFQAAAAAdAAAAABAE'}
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение

const renderProduct = (product) => {
    return `<div class="product-item">
                <img src="${product.Image}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);