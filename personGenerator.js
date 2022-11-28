const mon = Math.floor(Math.random() * 3); // Для генерации случайного числа для генерации месяца

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Ростов",
            "id_2": "Курагин",
            "id_3": "Безухов",
            "id_4": "Мамонтов",
            "id_5": "Карагин",
            "id_6": "Долохов",
            "id_7": "Новиков",
            "id_8": "Ахросимов",
            "id_9": "Кравцов",
            "id_10": "Билибин",
            "id_11": "Денисов",
            "id_12": "Шиншин",
            "id_13": "Кутузов",
            "id_14": "Денисов",
            "id_15": "Лихачев",
            "id_16": "Романов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Илья",
            "id_2": "Николай",
            "id_3": "Пьер",
            "id_4": "Андрей",
            "id_5": "Алексей",
            "id_6": "Федор",
            "id_7": "Альфонс",
            "id_8": "Петр",
            "id_9": "Александр",
            "id_10": "Михаил"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Наталья",
            "id_2": "Соня",
            "id_3": "Татьяна",
            "id_4": "Елизавета",
            "id_5": "Алина",
            "id_6": "Элен",
            "id_7": "Катерина",
            "id_8": "Ольга",
            "id_9": "Софья",
            "id_10": "Марья"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Андреев",
            "id_2": "Николаев",
            "id_3": "Карлов",
            "id_4": "Сергеев",
            "id_5": "Васильев",
            "id_6": "Кириллов",
            "id_7": "Михайлов",
            "id_8": "Семенов",
            "id_9": "Львов",
            "id_10": "Павлов"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Гусар",
            "id_2": "Граф",
            "id_3": "Император",
            "id_4": "Князь",
            "id_5": "Крепостной",
            "id_6": "Посол",
            "id_7": "Купец",
            "id_8": "Генерал",
            "id_9": "Шут",
            "id_10": "Придворный"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Графиня",
            "id_2": "Императрица",
            "id_3": "Крепостная",
            "id_4": "Кухарка",
            "id_5": "Гусарка",
            "id_6": "Помещица",
            "id_7": "Купчиха",
            "id_8": "Фрейлена",
            "id_9": "Кормилица",
            "id_10": "Дворянка"
        }
    }`,

    GENDER_MALE: 'Ковалер, ',
    GENDER_FEMALE: 'Дама, ',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min), // Метод отвечающий за случайную генерацию данных

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() { // Функция генерации мужского и женского Имени
        if (this.person.gender == 'Ковалер, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomPatronymic: function() { // Функция генерации мужского и женского Отчества
        if (this.person.gender == 'Ковалер, ') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    randomSurname: function() { // Функция генерации мужской и женской Фамилии
        if (this.person.gender == 'Ковалер, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomMonth31: function randomMonth() { // Функция генерации месяцев, в которых 31 день
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() { // Функция генерации месяцев, в которых 30 дней
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() { // Функция генерации месяца Февраль
		let month = `февраля`
		return month;
	},

    rendomYear: function() { // Функция генерации Года
        return this.randomIntNumber(1760, 1790) + " г.р.";
    },

    randomРrofession: function() { // Функция генерации мужских и женских Профессий
        if (this.person.gender == 'Ковалер, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31); // Генерация чисел в месяцах, в которых 31 день
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30); // Генерация чисел в месяцах, в которых 30 деней
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28); // Генерация чисел в месяце Февраль, в котором 28 дней
        }
        this.person.year = this.rendomYear(1760, 1790);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};