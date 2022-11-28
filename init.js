// window.onload = function() // Функция генерации данных пользователей, путем перезагрузки страницы (отключена в проекте).
// {
//     const initPerson = personGenerator.getPerson();
//     document.getElementById('surnameOutput').innerText = initPerson.surname;
//     document.getElementById('firstNameOutput').innerText = initPerson.firstName;
//     document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
//     document.getElementById('genderOutput').innerText = initPerson.gender;
//     document.getElementById('birthDayOutput').innerText = initPerson.day;
//     document.getElementById('birthMonthOutput').innerText = initPerson.month;
//     document.getElementById('birthYearOutput').innerText = initPerson.year;
//     document.getElementById('professionOutput').innerText = initPerson.profession;
// };

document.getElementById('generation').addEventListener('click', function() { // Метод для кнопки "Генерация"; генерирует данные пользователей
  const initPerson = personGenerator.getPerson();
  document.getElementById('surnameOutput').innerText = initPerson.surname;
  document.getElementById('firstNameOutput').innerText = initPerson.firstName;
  document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
  document.getElementById('genderOutput').innerText = initPerson.gender;
  document.getElementById('birthDayOutput').innerText = initPerson.day;
  document.getElementById('birthMonthOutput').innerText = initPerson.month;
  document.getElementById('birthYearOutput').innerText = initPerson.year;
  document.getElementById('professionOutput').innerText = initPerson.profession;
});

document.getElementById('clear').addEventListener('click', function() { // Метод для кнопки "Очистить"; вместо данных пользователей появляются параметры данных
  document.getElementById('surnameOutput').innerText = 'Фамилия';
  document.getElementById('firstNameOutput').innerText = 'Имя';
  document.getElementById('patronymicOutput').innerText = 'Отчество';
  document.getElementById('genderOutput').innerText = 'Пол, ';
  document.getElementById('birthDayOutput').innerText = 'Число, ';
  document.getElementById('birthMonthOutput').innerText = 'месяц, ';
  document.getElementById('birthYearOutput').innerText = 'год рождения, ';
  document.getElementById('professionOutput').innerText = 'Профессия';
}
);