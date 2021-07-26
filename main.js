/*- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    }
}*/
class User {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {};
        this.address.street = street;
        this.address.suite = suite;
        this.address.city = city;
        this.address.zipcode = zipcode;
        this.address.geo = {};
        this.address.geo.lat = lat;
        this.address.geo.lng = lng;
        this.phone = phone;
        this.website = website;
        this.company = {};
        this.company.name = companyName;
        this.company.catchPhrase = catchPhrase;
        this.company.bs = bs;
    }
}

const user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', -37.3159, 81.1496, '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(user);

/*-  Створити функцію конструктор / клас  який описує об'єкт тегу
Поля :
 -назва тегу ()
 - опис його дій
 - масив з атрибутами (2-3 атрибути максимум)
 Кожен атрибут описати як окремий який буде містити
 -назву атрибуту
 -опис дії атрибуту
 інформацію брати з htmlbook.ru

 Таким чином описати теги
 -a
 -div
 -h1
 -span
 -input
 -form
 -option
 -select
 Приклад результуючого об'єкту
   {
        titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
        attrs: [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {/*some props and values*/
class Tag {

    constructor(titleOfTag, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [];
        this.attrs[0] = {};
        this.attrs[0].titleOfAttr = titleOfAttr1;
        this.attrs[0].actionOfAttr = actionOfAttr1;
        this.attrs[1] = {};
        this.attrs[1].titleOfAttr = titleOfAttr2;
        this.attrs[1].actionOfAttr = actionOfAttr2;
    }
}

let a = new Tag('a', 'Тег <"a"> является одним из важных элементов HTML и предназначен для создания ссылок.', 'href', 'Задает адрес документа, на который следует перейти.', 'shape', 'Задает форму активной области ссылки для изображений.');
console.log(a);
let div = new Tag('div', 'Элемент <"div"> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 'align', 'Задает выравнивание содержимого тега <"div">.', 'title', 'Добавляет всплывающую подсказку к содержимому.');
console.log(div);
let h1 = new Tag('h1', 'представляет собой наиболее важный заголовок первого уровня', 'align', 'Определяет выравнивание заголовка.', 'title', 'Описывает содержимое элемента в виде всплывающей подсказки.');
console.log(h1);
let span = new Tag('span', 'предназначен для определения строчных элементов документа.', 'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.', 'style', 'Применяется для определения стиля элемента с помощью правил CSS.');
console.log(span);
let input = new Tag('input', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'border', 'Толщина рамки вокруг изображения.', 'size', 'Ширина текстового поля.');
console.log(input);
let form = new Tag('form', 'устанавливает форму на веб-странице.', 'action', 'Адрес программы или документа, который обрабатывает данные формы.', 'name', 'Имя формы.');
console.log(form);
let option = new Tag('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <"select">.', 'label', 'Указание метки пункта списка.', 'selected', 'Заранее устанавливает определенный пункт списка выделенным.');
console.log(option);
let select = new Tag('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', 'disabled', 'Блокирует доступ и изменение элемента.', 'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.');
console.log(select);