const des = {
    "Iceland":`
    <b>Исландия</b>:
    <br>
    <br>ВВП - 21,71 миллиарда$
    <br>
    <br>ВВП на душу - 59260,89$
    <br>
    <br>Средняя зарплата в мес - 3300$
    <br>
    <br>Импорт - 6,57млрд$
    <br>
    <br>Экспорт - 32млн$
    `,
    "Norway":`<b>Норвегия</b>:<br>
    <br>
    <br>ВВП - 362 миллиарда$
    <br>
    <br>ВВП на душу - 67294,48$
    <br>
    <br>Средняя зарплата в мес - 2086$
    <br>
    <br>Импорт - 81млрд$
    <br>
    <br>Экспорт - 60млрд$`,
    "GB":`<b>Великобритания</b>:
    <br>
    <br>ВВП - 2.708трлн$
    <br>
    <br>ВВП на душу - 40284$
    <br>
    <br>Средняя зарплата в нед - 665€
    <br>
    <br>Импорт - 634.2млрд$
    <br>
    <br>Экспорт - 395.7млрд$`,
    "France":`<b>Франция</b>:
    <br>
    <br>ВВП - 2.603трлн$
    <br>
    <br>ВВП на душу - 38625$
    <br>
    <br>Средняя зарплата в мес - 1621€
    <br>
    <br>Импорт - 582млрд$
    <br>
    <br>Экспорт - 595млрд$`,
    "Ireland":`<b>Ирландия</b>
    <br>
    <br>ВВП - 418.6млрд$
    <br>
    <br>ВВП на душу - 83812.80$
    <br>
    <br>Средняя зарплата в мес - 3000€
    <br>
    <br>Импорт - 98млрд$
    <br>
    <br>Экспорт - 184млрд$`,
    "Spain":`<b>Испания</b>:
    <br>
    <br>ВВП - 1.281трлн$
    <br>
    <br>ВВП на душу - 27057$
    <br>
    <br>Средняя зарплата в мес - 2000€
    <br>
    <br>Импорт - 330млрд$
    <br>
    <br>Экспорт - 312млрд$`,
    "Portugal":`<b>Португалия</b>:
    <br>
    <br>ВВП - 231.3млрд$
    <br>
    <br>ВВП на душу - 22 439.88$
    <br>
    <br>Средняя зарплата в мес - 1200€ - 40 000€
    <br>
    <br>Импорт - 78млрд$
    <br>
    <br>Экспорт - 61.5млрд$`,
    "Africa":`<b>Африка</b>: <span style="color:red; font-weight:700;">Это не европа</span><br> Это Африка.`,
    "Italy":`<b>Италия</b>:
    <br>
    <br>ВВП - 1.886трлн$
    <br>
    <br>ВВП на душу - 31676.20$
    <br>
    <br>Средняя зарплата в мес - 1200€
    <br>
    <br>Импорт - 422.5млрд$
    <br>
    <br>Экспорт - 496млрд$`,
    "Russia":`<b>Россия</b>:
    <br>
    <br>ВВП - 1.483трлн$
    <br>
    <br>ВВП на душу - 10126.72$
    <br>
    <br>Средняя зарплата в мес - 600€
    <br>
    <br>Импорт - 231млрд$
    <br>
    <br>Экспорт - 338.2млрд$`,
    "Finland":`<b>Финляндия</b>:
    <br>
    <br>ВВП - 271.2млрд$
    <br>
    <br>ВВП на душу - 49041$
    <br>
    <br>Средняя зарплата в мес - 3540€
    <br>
    <br>Импорт - 68млрд$
    <br>
    <br>Экспорт - 65млрд$`,
    "Sweden":`<b>Швеция</b>:
    <br>
    <br>ВВП - 537.6млрд$
    <br>
    <br>ВВП на душу - 51925.71$
    <br>
    <br>Средняя зарплата в мес - 2000€
    <br>
    <br>Импорт - 149млрд$
    <br>
    <br>Экспорт - 155млрд$`,
    "Denmark":`<b>Дания</b>:
    <br>
    <br>ВВП - 355,2млрд$
    <br>
    <br>ВВП на душу - 61 000$
    <br>
    <br>Средняя зарплата в мес - 5210€
    <br>
    <br>Импорт - 96млрд$
    <br>
    <br>Экспорт - 107млрд$`,
    "Germany":`<b>Германия</b>:
    <br>
    <br>ВВП - 3.806трлн$
    <br>
    <br>ВВП на душу - 45 723$
    <br>
    <br>Средняя зарплата в мес - 4094€
    <br>
    <br>Импорт - 1.1трлн$
    <br>
    <br>Экспорт - 1.3трлн$`,
    "Ukraine":`<b>Украина</b>:
    <br>
    <br>ВВП - 155,6млрд$
    <br>
    <br>ВВП на душу - 3 730$
    <br>
    <br>Средняя зарплата в мес - 520$
    <br>
    <br>Импорт - 53.6млрд$
    <br>
    <br>Экспорт - 49.2млрд$`,
    "Benelux":`<b>Бенелюкс</b>: <span style="color:indigo; font-weight:700;">Союз трёх держав</span>
    <br>
    <br>ВВП - 800млрд$
    <br>
    <br>ВВП на душу - 52 304$
    <br>
    <br>Средняя зарплата в мес - 2000$
    <br>
    <br>Импорт - 484млрд$
    <br>
    <br>Экспорт - 551млрд$`,
    "Switzerland":`<b>Швейцария</b>:
    <br>
    <br>ВВП - 748млрд$
    <br>
    <br>ВВП на душу - 86 601$
    <br>
    <br>Средняя зарплата в мес - 5855.18€
    <br>
    <br>Импорт - 290.4млрд$
    <br>
    <br>Экспорт - 318.5млрд$`,
    "Estonia":`<b>Эстония</b>:
    <br>
    <br>ВВП - 31.03млрд$
    <br>
    <br>ВВП на душу - 23312$
    <br>
    <br>Средняя зарплата в мес - 1604€
    <br>
    <br>Импорт - 17.7млрд$
    <br>
    <br>Экспорт - 16.8млрд$`,
    "Latvia":`<b>Латвия</b>:
    <br>
    <br>ВВП - 33.51млрд$
    <br>
    <br>ВВП на душу - 17620$
    <br>
    <br>Средняя зарплата в мес - 1207€
    <br>
    <br>Импорт - 17.3млрд$
    <br>
    <br>Экспорт - 15.2млрд$`,
    "Lithuania":`<b>Литва</b>:
    <br>
    <br>ВВП - 55.89млрд$
    <br>
    <br>ВВП на душу - 19 997$
    <br>
    <br>Средняя зарплата в мес - 1856.49$
    <br>
    <br>Импорт - 33.3млрд$
    <br>
    <br>Экспорт - 32.8млрд$`,
    "Poland":`<b>Польша</b>:
    <br>
    <br>ВВП - 594,2млрд$
    <br>
    <br>ВВП на душу - 15 656$
    <br>
    <br>Средняя зарплата в мес - 1218.29€
    <br>
    <br>Импорт - 254.6млрд$
    <br>
    <br>Экспорт - 254.1млрд$`,
    "Belarus":`<b>Беларусь</b>:
    <br>
    <br>ВВП - 60.26млрд$
    <br>
    <br>ВВП на душу - 6411$
    <br>
    <br>Средняя зарплата в мес - 550€
    <br>
    <br>Импорт - 32.7млрд$
    <br>
    <br>Экспорт - 29.2млрд$`,
    ///////////////////////////////////
    "Moldova":`<b>Молдава</b>:
    <br>
    <br>ВВП - 11.91млрд$
    <br>
    <br>ВВП на душу - 4551.13$
    <br>
    <br>Средняя зарплата в мес - 379€
    <br>
    <br>Импорт - 5.4млрд$
    <br>
    <br>Экспорт - 2.5млрд$`,

    "Crimea":`<b>Крым</b>: <span style="color:indigo; font-weight:700;">Смежная территория</span>
    <br>
    <br>ВВП - 7.45млрд$
    <br>
    <br>ВВП на душу - 4000$
    <br>
    <br>Средняя зарплата в мес - 330€
    <br>
    <br>Импорт - 4.62млн$
    <br>
    <br>Экспорт - 2.4млн$`,

    "Turkey":`<b>Турция</b>: <span style="color:red; font-weight:700;">Это не европа</span>
    <br>
    <br>ВВП - 720млрд$
    <br>
    <br>ВВП на душу - 8538.1$
    <br>
    <br>Средняя зарплата в мес - 711€
    <br>
    <br>Импорт - 220млрд$
    <br>
    <br>Экспорт - 170млрд$`,

    "Cyprus":`<b>Кипр</b>: <span style="color:red; font-weight:700;">Это не европа</span>
    <br>
    <br>ВВП - 23.8млрд$
    <br>
    <br>ВВП на душу - 26623.8$
    <br>
    <br>Средняя зарплата в мес - 2218.5$
    <br>
    <br>Импорт - 7.5млрд$
    <br>
    <br>Экспорт - 2.7млрд$`,

    "Greece":`<b>Греция</b>:
    <br>
    <br>ВВП - 189.4млрд$
    <br>
    <br>ВВП на душу - 17676.2$
    <br>
    <br>Средняя зарплата в мес - 1473$
    <br>
    <br>Импорт - 55.5млрд$
    <br>
    <br>Экспорт - 35млрд$`,

    "Romania":`<b>Румыния</b>:
    <br>
    <br>ВВП - 248.7млрд$
    <br>
    <br>ВВП на душу - 12896$
    <br>
    <br>Средняя зарплата в мес - 1074.666€
    <br>
    <br>Импорт - 92млрд$
    <br>
    <br>Экспорт - 71млрд$`,

    "Bolgaria":`<b>Болгария</b>:
    <br>
    <br>ВВП - 69.11млрд$
    <br>
    <br>ВВП на душу - 9975.7$
    <br>
    <br>Средняя зарплата в мес - 831.25$
    <br>
    <br>Импорт - 35млрд$
    <br>
    <br>Экспорт - 32млрд$`,

    "Albania":`<b>Албания</b>:
    <br>
    <br>ВВП - 14.8млрд$
    <br>
    <br>ВВП на душу - 5215$
    <br>
    <br>Средняя зарплата в мес - 434.58€
    <br>
    <br>Импорт - 5.6млрд$
    <br>
    <br>Экспорт - 2.5млрд$`,

    "Macedonia":`<b>Македония</b>:
    <br>
    <br>ВВП - 12.27млрд$
    <br>
    <br>ВВП на душу - 5888$
    <br>
    <br>Средняя зарплата в мес - 490.666$
    <br>
    <br>Импорт - 8.8млрд$
    <br>
    <br>Экспорт - 6.6млрд$`,

    "Croatia":`<b>Хорватия</b>:
    <br>
    <br>ВВП - 60.26млрд$
    <br>
    <br>ВВП на душу - 6411$
    <br>
    <br>Средняя зарплата в мес - 550€
    <br>
    <br>Импорт - 32.7млрд$
    <br>
    <br>Экспорт - 29.2млрд$`,

    "Czech":`<b>Чехия</b>:
    <br>
    <br>ВВП - 243млрд$
    <br>
    <br>ВВП на душу - 22762.12$
    <br>
    <br>Средняя зарплата в мес - 1900€
    <br>
    <br>Импорт - 171.5млрд$
    <br>
    <br>Экспорт - 192.3млрд$`,

    "Slovakia":`<b>Словакия</b>:
    <br>
    <br>ВВП - 104.6млрд$
    <br>
    <br>ВВП на душу - 19156$
    <br>
    <br>Средняя зарплата в мес - 1596.33333333333333333333333€
    <br>
    <br>Импорт - 85млрд$
    <br>
    <br>Экспорт - 86.7млрд$`,

    "Austria":`<b>Австрия</b>:
    <br>
    <br>ВВП - 429млрд$
    <br>
    <br>ВВП на душу - 48 105$
    <br>
    <br>Средняя зарплата в мес - 4008.75€
    <br>
    <br>Импорт - 165млрд$
    <br>
    <br>Экспорт - 162млрд$`,

    "Hungary":`<b>Хорватия</b>:
    <br>
    <br>ВВП - 55.97млрд$
    <br>
    <br>ВВП на душу - 13828.5$
    <br>
    <br>Средняя зарплата в мес - 1152.4€
    <br>
    <br>Импорт - 26млрд$
    <br>
    <br>Экспорт - 17млрд$`,

    "Serbia":`<b>Сербия</b>:
    <br>
    <br>ВВП - 52.96млрд$
    <br>
    <br>ВВП на душу - 7666.24$
    <br>
    <br>Средняя зарплата в мес - 638.83€
    <br>
    <br>Импорт - 26.22млн$
    <br>
    <br>Экспорт - 19.5млн$`,

    "Slovenia":`<b>Словения</b>:
    <br>
    <br>ВВП - 52.88млрд$
    <br>
    <br>ВВП на душу - 25 179$
    <br>
    <br>Средняя зарплата в мес - 2100$
    <br>
    <br>Импорт - 36.5млрд$
    <br>
    <br>Экспорт - 37.5млрд$`,

    "Bosnia":`<b>Босния</b>:
    <br>
    <br>ВВП - 19.79млрд$
    <br>
    <br>ВВП на душу - 6031.56$
    <br>
    <br>Средняя зарплата в мес - 502.63€
    <br>
    <br>Импорт - 9.9млрд$
    <br>
    <br>Экспорт - 2.2млрд$`,

    "Montenegro":`<b>Черногория</b>:
    <br>
    <br>ВВП - 4.8млрд$
    <br>
    <br>ВВП на душу - 7686$
    <br>
    <br>Средняя зарплата в мес - 640.5€
    <br>
    <br>Импорт - 2.4млрд$
    <br>
    <br>Экспорт - 0.4млрд$`,

    "Lebanon":`<b>Ливия</b>: <span style="color:red; font-weight:700;">Это не европа</span>
    <br>
    <br>ВВП - 33.38млрд$
    <br>
    <br>ВВП на душу - 4891$
    <br>
    <br>Средняя зарплата в мес - 407.58€
    <br>
    <br>Импорт - 11.3млрд$
    <br>
    <br>Экспорт - 3.8млрд$`,

    "Georgia":`<b>Грузия</b>:
    <br>
    <br>ВВП - 15.89млрд$
    <br>
    <br>ВВП на душу - 4278.86$
    <br>
    <br>Средняя зарплата в мес - 256.5€
    <br>
    <br>Импорт - 8млрд$
    <br>
    <br>Экспорт - 3.3млрд$`
}