### Описание решения задачи
Для фильтрации списка курсов с выдачей подходящих вариантов нам нужно проверить, что любое число из диапазона, введенного пользователем, находится в рамках диапазона цены курса

Если обозначить ввод пользователя как массив [a1, a2], 
а диапазон цены курса как массив [b1, b2],
то мы должны проверить: 

1) Введенное пользователем "ОТ" было бы одновременно больше начальной цены и меньше конечной цены курса (a1 >= b1 && a1 <= b2)

	ИЛИ 

2) Начальная цена курса одновременно больше введенного пользователем "ОТ" и меньше введенного пользователем "ДО" (b1 >= a1 && b1 <= a2)

<hr>

Сортировку "по возрастанию" производила следующим образом:
1) Сравнивала стартовые цены
2) Если стартовые цены равны или у одного из объектов стартовая цена отсутствует, то далее сравнивала конечные цены

[Ссылка на Pages](https://smirnova-daria.github.io/test-filter-sort/)
