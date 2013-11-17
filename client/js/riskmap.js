var testData={
    max: 70,
    data: [{city:'Авдеевка',lat:48.142483,lng:37.748462,count:10},
        {city:'Александрия',lat:31.2000924,lng:29.9187387,count:10},
        {city:'Александровск',lat:59.16666670000001,lng:57.5833333,count:10},
        {city:'Алмазная',lat:48.5166667,lng:38.5833333,count:10},
        {city:'Алупка',lat:44.4197222,lng:34.0430556,count:10},
        {city:'Алушта',lat:44.67638300000001,lng:34.41005,count:10},
        {city:'Алчевск',lat:48.4666667,lng:38.8,count:10},
        {city:'Амвросиевка',lat:47.790432,lng:38.473761,count:10},
        {city:'Ананьев',lat:47.7166667,lng:29.9666667,count:10},
        {city:'Андрушёвка',lat:50.02469199999999,lng:29.029498,count:10},
        {city:'Антрацит',lat:48.1191667,lng:39.09,count:10},
        {city:'Апостолово',lat:47.6594444,lng:33.7166667,count:10},
        {city:'Армянск',lat:46.1072222,lng:33.6933333,count:10},
        {city:'Артёмовск',lat:48.606945,lng:37.997045,count:10},
        {city:'Артёмовск',lat:48.606945,lng:37.997045,count:10},
        {city:'Арциз',lat:45.9833333,lng:29.4166667,count:10},
        {city:'Ахтырка',lat:50.295889,lng:34.913322,count:10},
        {city:'Балаклея',lat:49.459055,lng:36.84492700000001,count:10},
        {city:'Балта',lat:47.9333333,lng:29.6166667,count:10},
        {city:'Бар',lat:41.1935615,lng:-73.0597125,count:10},
        {city:'Барановка',lat:50.8745391,lng:29.2200919,count:10},
        {city:'Барвенково',lat:48.90131299999999,lng:37.018444,count:10},
        {city:'Бахмач',lat:51.2014581,lng:32.7737765,count:10},
        {city:'Бахчисарай',lat:44.755285,lng:33.867232,count:10},
        {city:'Баштанка',lat:47.4,lng:32.45,count:10},
        {city:'Белая Церковь',lat:49.801945,lng:30.115196,count:10},
        {city:'Белгород-Днестровский',lat:46.1833333,lng:30.3333333,count:10},
        {city:'Белогорск',lat:50.9166667,lng:128.4833333,count:10},
        {city:'Беляевка',lat:46.4731219,lng:30.214037,count:10},
        {city:'Белополье',lat:51.1532312,lng:34.3025366,count:10},
        {city:'Белз',lat:50.3811279,lng:24.008565,count:10},
        {city:'Бердичев',lat:49.907903,lng:28.587935,count:10},
        {city:'Бердянск',lat:46.75836899999999,lng:36.8080659,count:10},
        {city:'Берегово',lat:48.2,lng:22.6333333,count:10},
        {city:'Бережаны',lat:49.441258,lng:24.942978,count:10},
        {city:'Березань',lat:50.31702199999999,lng:31.481146,count:10},
        {city:'Березне',lat:50.9996233,lng:26.750679,count:10},
        {city:'Берестечко',lat:50.360189,lng:25.1109319,count:10},
        {city:'Берислав',lat:46.8333333,lng:33.4166667,count:10},
        {city:'Бершадь',lat:48.3605919,lng:29.534148,count:10},
        {city:'Бобринец',lat:48.051067,lng:32.167569,count:10},
        {city:'Бобрка',lat:49.6331904,lng:24.2907476,count:10},
        {city:'Бобровица',lat:50.745,lng:31.3869444,count:10},
        {city:'Богодухов',lat:50.1608333,lng:35.5163889,count:10},
        {city:'Богуслав',lat:49.5466667,lng:30.8727778,count:10},
        {city:'Болград',lat:45.677938,lng:28.630095,count:10},
        {city:'Болехов',lat:49.0669444,lng:23.8513889,count:10},
        {city:'Борислав',lat:49.2891667,lng:23.4188889,count:10},
        {city:'Борисполь',lat:50.33822199999999,lng:30.8939274,count:10},
        {city:'Борзна',lat:51.252485,lng:32.4227839,count:10},
        {city:'Борщёв',lat:48.804511,lng:26.040393,count:10},
        {city:'Боярка',lat:50.317117,lng:30.298167,count:10},
        {city:'Бровары',lat:50.511083,lng:30.7909,count:10},
        {city:'Броды',lat:50.0833333,lng:25.15,count:10},
        {city:'Брянка',lat:48.5133333,lng:38.6430556,count:10},
        {city:'Бурынь',lat:51.204182,lng:33.82514,count:10},
        {city:'Бурштын',lat:49.263627,lng:24.630481,count:10},
        {city:'Буск',lat:49.970381,lng:24.631122,count:10},
        {city:'Буча',lat:50.44666669999999,lng:30.0652778,count:10},
        {city:'Бучач',lat:49.064831,lng:25.3817159,count:10},
        {city:'Валки',lat:49.840021,lng:35.613466,count:10},
        {city:'Васильевка',lat:47.4333333,lng:35.2666667,count:10},
        {city:'Васильков',lat:50.17590999999999,lng:30.331919,count:10},
        {city:'Вашковцы',lat:48.380909,lng:25.5036619,count:10},
        {city:'Ватутино',lat:49.01666669999999,lng:31.0666667,count:10},
        {city:'Вахрушево',lat:48.152169,lng:38.828257,count:10},
        {city:'Великий Бурлук',lat:50.04555560000001,lng:37.3905556,count:10},
        {city:'Великие Мосты',lat:50.2418679,lng:24.143234,count:10},
        {city:'Верхнеднепровск',lat:48.652852,lng:34.336042,count:10},
        {city:'Вольнянск',lat:47.9419444,lng:35.4280556,count:10},
        {city:'Винница',lat:49.233083,lng:28.468217,count:10},
        {city:'Виноградов',lat:48.1497222,lng:23.025,count:10},
        {city:'Вишнёвое',lat:50.3919,lng:30.368267,count:10},
        {city:'Владимир-Волынский',lat:50.8480556,lng:24.3222222,count:10},
        {city:'Вознесенск',lat:47.5605,lng:31.336117,count:10},
        {city:'Волноваха',lat:47.5951141,lng:37.4831419,count:10},
        {city:'Волчанск',lat:50.3002778,lng:36.9466667,count:10},
        {city:'Волочиск',lat:49.528985,lng:26.208409,count:10},
        {city:'Вольногорск',lat:48.4833333,lng:34.0166667,count:10},
        {city:'Вижница',lat:48.25,lng:25.1916667,count:10},
        {city:'Вышгород',lat:50.583217,lng:30.485667,count:10},
        {city:'Гадяч',lat:50.370433,lng:34.000989,count:10},
        {city:'Гайсин',lat:48.81027779999999,lng:29.3841667,count:10},
        {city:'Гайворон',lat:48.343567,lng:29.841873,count:10},
        {city:'Галич',lat:49.1250519,lng:24.729639,count:10},
        {city:'Геническ',lat:46.1666667,lng:34.8,count:10},
        {city:'Герца',lat:48.146892,lng:26.255361,count:10},
        {city:'Глобино',lat:49.390202,lng:33.252811,count:10},
        {city:'Глухов',lat:51.6786111,lng:33.9113889,count:10},
        {city:'Глиняны',lat:49.82333329999999,lng:24.5166667,count:10},
        {city:'Голая Пристань',lat:46.51666669999999,lng:32.5166667,count:10},
        {city:'Горловка',lat:48.3071,lng:38.029633,count:10},
        {city:'Горное',lat:58.3343848,lng:35.4834135,count:10},
        {city:'Городенка',lat:48.6675,lng:25.5002778,count:10},
        {city:'Городище',lat:49.2925,lng:31.45805559999999,count:10},
        {city:'Городня',lat:51.8905556,lng:31.5936111,count:10},
        {city:'Городок',lat:55.4666667,lng:30,count:10},
        {city:'Городок',lat:55.4666667,lng:30,count:10},
        {city:'Горохов',lat:50.498104,lng:24.765585,count:10},
        {city:'Гребёнка',lat:50.118309,lng:32.452205,count:10},
        {city:'Гуляйполе',lat:47.663154,lng:36.261194,count:10},
        {city:'Джанкой',lat:45.7086111,lng:34.3933333,count:10},
        {city:'Дзержинск',lat:56.2333333,lng:43.4666667,count:10},
        {city:'Дебальцево',lat:48.3333333,lng:38.4,count:10},
        {city:'Деражня',lat:49.26666669999999,lng:27.4333333,count:10},
        {city:'Дергачи',lat:50.110156,lng:36.0935119,count:10},
        {city:'Димитров',lat:48.305846,lng:37.271065,count:10},
        {city:'Днепродзержинск',lat:48.523117,lng:34.613683,count:10},
        {city:'Днепропетровск',lat:48.464717,lng:35.046183,count:10},
        {city:'Днепрорудное',lat:47.3869029,lng:34.995563,count:10},
        {city:'Добромиль',lat:49.5666667,lng:22.7833333,count:10},
        {city:'Доброполье',lat:48.420039,lng:37.052291,count:10},
        {city:'Докучаевск',lat:47.76800100000001,lng:37.683668,count:10},
        {city:'Долина',lat:48.969264,lng:24.00437,count:10},
        {city:'Долинская',lat:48.1111417,lng:32.7647722,count:10},
        {city:'Донецк',lat:48.015883,lng:37.80285,count:10},
        {city:'Дрогобыч',lat:49.3580116,lng:23.5123193,count:10},
        {city:'Дружковка',lat:48.6166667,lng:37.5333333,count:10},
        {city:'Дубно',lat:50.4166667,lng:25.75,count:10},
        {city:'Дубляны',lat:49.8961111,lng:24.0925,count:10},
        {city:'Дубровица',lat:51.566175,lng:26.559423,count:10},
        {city:'Дунаевцы',lat:48.89091,lng:26.849582,count:10},
        {city:'Евпатория',lat:45.19045,lng:33.366867,count:10},
        {city:'Енакиево',lat:48.2166667,lng:38.2,count:10},
        {city:'Жашков',lat:49.243691,lng:30.122187,count:10},
        {city:'Ждановка',lat:48.156007,lng:38.25774,count:10},
        {city:'Жёлтые Воды',lat:48.34999999999999,lng:33.5,count:10},
        {city:'Жидачов',lat:49.3813889,lng:24.1408333,count:10},
        {city:'Житомир',lat:50.25465,lng:28.658667,count:50},
        {city:'Жмеринка',lat:49.036872,lng:28.121135,count:10},
        {city:'Жолква',lat:50.058773,lng:23.978101,count:10},
        {city:'Залещики',lat:48.65,lng:25.7333333,count:10},
        {city:'Запорожье',lat:47.8388,lng:35.139567,count:10},
        {city:'Заставна',lat:48.5166667,lng:25.85,count:10},
        {city:'Збараж',lat:49.6666667,lng:25.7777778,count:10},
        {city:'Зборов',lat:49.6520129,lng:25.151963,count:10},
        {city:'Звенигородка',lat:49.0759649,lng:30.962381,count:10},
        {city:'Здолбунов',lat:50.513374,lng:26.261707,count:10},
        {city:'Зимогорье',lat:48.5833333,lng:38.9333333,count:10},
        {city:'Зеньков',lat:50.208521,lng:34.368322,count:10},
        {city:'Змиёв',lat:49.6944064,lng:36.3595476,count:10},
        {city:'Знаменка',lat:48.71361109999999,lng:32.6733333,count:10},
        {city:'Золотое',lat:45.4258333,lng:36.0791667,count:10},
        {city:'Золотоноша',lat:49.671642,lng:32.039876,count:10},
        {city:'Золочев',lat:49.80941,lng:24.901371,count:10},
        {city:'Зоринск',lat:48.4167,lng:38.6167,count:10},
        {city:'Зугрэс',lat:48.01666669999999,lng:38.2666667,count:10},
        {city:'Ивано-Франковск',lat:48.922633,lng:24.711117,count:10},
        {city:'Измаил',lat:45.3516667,lng:28.8363889,count:10},
        {city:'Изюм',lat:49.2127778,lng:37.2569444,count:10},
        {city:'Изяслав',lat:50.1187309,lng:26.83867,count:10},
        {city:'Иловайск',lat:47.92316,lng:38.193979,count:10},
        {city:'Ильинцы',lat:49.1055556,lng:29.2088889,count:10},
        {city:'Ильичёвск',lat:46.30549999999999,lng:30.662245,count:10},
        {city:'Инкерман',lat:44.6121255,lng:33.6122075,count:10},
        {city:'Ирпень',lat:50.51875,lng:30.239783,count:10},
        {city:'Иршава',lat:48.31006,lng:23.042372,count:10},
        {city:'Ичня',lat:51.25,lng:32.6,count:10},
        {city:'Кагарлык',lat:49.84999999999999,lng:30.8091667,count:10},
        {city:'Казатин',lat:49.7149346,lng:28.8363647,count:10},
        {city:'Калиновка',lat:49.4517,lng:28.52494,count:10},
        {city:'Калуш',lat:49.0441667,lng:24.3597222,count:10},
        {city:'Каменец-Подольский',lat:48.68333330000001,lng:26.5833333,count:10},
        {city:'Каменка',lat:53.18333330000001,lng:44.05,count:10},
        {city:'Каменка-Бугская',lat:50.09999999999999,lng:24.35,count:10},
        {city:'Каменка-Днепровская',lat:47.4772,lng:34.423544,count:10},
        {city:'Камень-Каширский',lat:51.6241667,lng:24.9605556,count:10},
        {city:'Канев',lat:49.751033,lng:31.4697,count:10},
        {city:'Карловка',lat:49.45,lng:35.1333333,count:10},
        {city:'Каховка',lat:46.8098389,lng:33.483077,count:10},
        {city:'Керчь',lat:45.357314,lng:36.468293,count:10},
        {city:'Киверцы',lat:50.8333333,lng:25.4666667,count:10},
        {city:'Киев',lat:50.4501,lng:30.5234,count:10},
        {city:'Килия',lat:45.4671734,lng:29.2588717,count:10},
        {city:'Кировоград',lat:48.50793300000001,lng:32.262317,count:10},
        {city:'Кировское',lat:48.15,lng:38.3666667,count:10},
        {city:'Кицмань',lat:48.4411111,lng:25.7669444,count:10},
        {city:'Краматорск',lat:48.738967,lng:37.58435,count:10},
        {city:'Красилов',lat:49.6519444,lng:26.9705556,count:10},
        {city:'Красноармейск',lat:48.28103,lng:37.173353,count:10},
        {city:'Красноград',lat:49.3666667,lng:35.45,count:10},
        {city:'Краснодон',lat:48.3,lng:39.7333333,count:10},
        {city:'Краснопартизанск',lat:42.2758333,lng:48.0177778,count:10},
        {city:'Красноперекопск',lat:45.954949,lng:33.799819,count:10},
        {city:'Красный Лиман',lat:48.980748,lng:37.815619,count:10},
        {city:'Красный Луч',lat:48.1333333,lng:38.9333333,count:10},
        {city:'Кременец',lat:50.1197222,lng:25.7166667,count:10},
        {city:'Кременчуг',lat:49.065783,lng:33.410033,count:10},
        {city:'Кривой Рог',lat:47.910483,lng:33.391783,count:10},
        {city:'Кролевец',lat:51.55,lng:33.3833333,count:10},
        {city:'Кобеляки',lat:49.148748,lng:34.195971,count:10},
        {city:'Ковель',lat:51.214231,lng:24.7093409,count:10},
        {city:'Кодыма',lat:48.09999999999999,lng:29.1166667,count:10},
        {city:'Коломыя',lat:48.5305556,lng:25.0402778,count:10},
        {city:'Комсомольск',lat:49.02027,lng:33.6310744,count:10},
        {city:'Конотоп',lat:51.2409432,lng:33.2050521,count:10},
        {city:'Константиновка',lat:48.517539,lng:37.695027,count:10},
        {city:'Корец',lat:50.61668,lng:27.160455,count:10},
        {city:'Коростень',lat:50.95,lng:28.6333333,count:10},
        {city:'Коростышев',lat:50.317819,lng:29.053569,count:10},
        {city:'Корсунь-Шевченковский',lat:49.42769,lng:31.280433,count:10},
        {city:'Корюковка',lat:51.25,lng:32.6,count:10},
        {city:'Косов',lat:48.315,lng:25.0952778,count:10},
        {city:'Костополь',lat:50.8833333,lng:26.45,count:10},
        {city:'Котовск',lat:47.75,lng:29.5333333,count:10},
        {city:'Кузнецовск',lat:51.34365529999999,lng:25.8490867,count:10},
        {city:'Купянск',lat:49.7016667,lng:37.6133333,count:10},
        {city:'Ладыжин',lat:48.672398,lng:29.264328,count:10},
        {city:'Лановцы',lat:49.8609579,lng:26.092978,count:10},
        {city:'Лебедин',lat:50.5797222,lng:34.4772222,count:10},
        {city:'Лисичанск',lat:48.913697,lng:38.434641,count:10},
        {city:'Лозовая',lat:48.890391,lng:36.311512,count:10},
        {city:'Лохвица',lat:50.359754,lng:33.272266,count:10},
        {city:'Лубны',lat:50.01666669999999,lng:33,count:10},
        {city:'Луганск',lat:48.574041,lng:39.307815,count:10},
        {city:'Лутугино',lat:48.40228,lng:39.20912,count:10},
        {city:'Луцк',lat:50.74723299999999,lng:25.325383,count:10},
        {city:'Львов',lat:49.839683,lng:24.029717,count:10},
        {city:'Любомль',lat:51.2230556,lng:24.0377778,count:10},
        {city:'Люботин',lat:49.94929,lng:35.930794,count:10},
        {city:'Малин',lat:50.7688889,lng:29.27,count:10},
        {city:'Марганец',lat:47.6447222,lng:34.6041667,count:10},
        {city:'Мариуполь',lat:47.097133,lng:37.543367,count:10},
        {city:'Макеевка',lat:48.04645,lng:37.964167,count:10},
        {city:'Малая Виска',lat:48.65,lng:31.6333333,count:10},
        {city:'Мелитополь',lat:46.8333333,lng:35.3666667,count:10},
        {city:'Мена',lat:51.519973,lng:32.215234,count:10},
        {city:'Мерефа',lat:49.814953,lng:36.058898,count:10},
        {city:'Миргород',lat:49.97138400000001,lng:33.61007,count:10},
        {city:'Мироновка',lat:49.65,lng:30.9833333,count:10},
        {city:'Миусинск',lat:48.07388,lng:38.896017,count:10},
        {city:'Могилёв-Подольский',lat:48.438024,lng:27.817162,count:10},
        {city:'Молодогвардейск',lat:48.3444444,lng:39.6583333,count:10},
        {city:'Молочанск',lat:47.203902,lng:35.592247,count:10},
        {city:'Монастыриска',lat:49.08888890000001,lng:25.1694444,count:10},
        {city:'Монастырище',lat:48.98999999999999,lng:29.8011111,count:10},
        {city:'Мостиска',lat:49.79416670000001,lng:23.1525,count:10},
        {city:'Мукачево',lat:48.42903,lng:22.70582,count:10},
        {city:'Надворная',lat:48.629955,lng:24.577816,count:10},
        {city:'Николаев',lat:46.975033,lng:31.994583,count:10},
        {city:'Николаев',lat:46.975033,lng:31.994583,count:10},
        {city:'Никополь',lat:47.56746,lng:34.394815,count:10},
        {city:'Нежин',lat:51.0380556,lng:31.8861111,count:10},
        {city:'Немиров',lat:48.974013,lng:28.845871,count:10},
        {city:'Нетешин',lat:50.33397309999999,lng:26.6500844,count:10},
        {city:'Новая Каховка',lat:46.76666669999999,lng:33.3666667,count:10},
        {city:'Новая Одесса',lat:47.293312,lng:31.79368,count:10},
        {city:'Новый Буг',lat:47.6833333,lng:32.5,count:10},
        {city:'Новоазовск',lat:47.1144229,lng:38.0860933,count:10},
        {city:'Нововолынск',lat:50.7333333,lng:24.1666667,count:10},
        {city:'Новгород-Северский',lat:52.005653,lng:33.278277,count:10},
        {city:'Новогродовка',lat:48.2045408,lng:37.336821,count:10},
        {city:'Новомиргород',lat:48.7833333,lng:31.65,count:10},
        {city:'Новоград-Волынский',lat:50.5833333,lng:27.6333333,count:10},
        {city:'Новодружеск',lat:48.9666667,lng:38.35,count:10},
        {city:'Новоднестровск',lat:48.57395,lng:27.443825,count:10},
        {city:'Новомосковск',lat:54.0109034,lng:38.2963063,count:10},
        {city:'Новопсков',lat:49.52972219999999,lng:39.1172222,count:10},
        {city:'Новоселица',lat:48.2166667,lng:26.2666667,count:10},
        {city:'Новоукраинка',lat:48.3155556,lng:31.5269444,count:10},
        {city:'Новый Роздол',lat:49.47194440000001,lng:24.1333333,count:10},
        {city:'Носовка',lat:50.93333330000001,lng:31.5833333,count:10},
        {city:'Обухов',lat:50.10343700000001,lng:30.636269,count:10},
        {city:'Овруч',lat:51.327832,lng:28.813344,count:10},
        {city:'Одесса',lat:46.484583,lng:30.7326,count:10},
        {city:'Орджоникидзе',lat:47.656884,lng:34.0541849,count:10},
        {city:'Орехов',lat:47.5666667,lng:35.7833333,count:10},
        {city:'Острог',lat:50.331457,lng:26.520931,count:10},
        {city:'Очаков',lat:46.617033,lng:31.547938,count:10},
        {city:'Павлоград',lat:48.521645,lng:35.893382,count:10},
        {city:'Первомайск',lat:48.043608,lng:30.859225,count:10},
        {city:'Первомайск',lat:48.043608,lng:30.859225,count:10},
        {city:'Первомайский',lat:49.3833333,lng:36.2166667,count:10},
        {city:'Перевальск',lat:48.43888889999999,lng:38.81944439999999,count:10},
        {city:'Перемышляны',lat:49.66999999999999,lng:24.5594444,count:10},
        {city:'Перечин',lat:48.7341667,lng:22.4741667,count:10},
        {city:'Перещепино',lat:49.01666669999999,lng:35.35,count:10},
        {city:'Переяслав-Хмельницкий',lat:50.06611110000001,lng:31.4422222,count:10},
        {city:'Першотравенск',lat:48.34999999999999,lng:36.4,count:10},
        {city:'Петровское',lat:55.5055809,lng:31.693731,count:10},
        {city:'Пирятин',lat:50.237393,lng:32.503928,count:10},
        {city:'Погребище',lat:49.486338,lng:29.270049,count:10},
        {city:'Подволочиск',lat:49.525653,lng:26.140758,count:10},
        {city:'Подгайцы',lat:49.2694444,lng:25.1361111,count:10},
        {city:'Подгородное',lat:48.578501,lng:35.100601,count:10},
        {city:'Пологи',lat:47.482585,lng:36.242134,count:10},
        {city:'Полонное',lat:50.131211,lng:27.499686,count:10},
        {city:'Полтава',lat:49.58826699999999,lng:34.551417,count:50},
        {city:'Попасная',lat:48.6333333,lng:38.38,count:10},
        {city:'Почаев',lat:50,lng:25.5083333,count:10},
        {city:'Приволье',lat:49,lng:38.3,count:10},
        {city:'Прилуки',lat:50.595543,lng:32.384564,count:10},
        {city:'Приморск',lat:46.729883,lng:36.366517,count:10},
        {city:'Припять',lat:51.4055556,lng:30.0569444,count:10},
        {city:'Пустомыты',lat:49.7138889,lng:23.9108333,count:10},
        {city:'Путивль',lat:51.33255399999999,lng:33.8697779,count:10},
        {city:'Пятихатки',lat:48.4136111,lng:33.7027778,count:10},
        {city:'Рава-Русская',lat:50.2260935,lng:23.6172156,count:10},
        {city:'Радехов',lat:50.2827778,lng:24.6375,count:10},
        {city:'Радомышль',lat:50.496058,lng:29.236578,count:10},
        {city:'Радивилов',lat:50.1333333,lng:25.25,count:10},
        {city:'Рахов',lat:48.061604,lng:24.20975,count:10},
        {city:'Ржищев',lat:49.9611111,lng:31.0436111,count:10},
        {city:'Рогатин',lat:49.411449,lng:24.62051,count:10},
        {city:'Ровеньки',lat:48.0833333,lng:39.3666667,count:10},
        {city:'Ровно',lat:50.6199,lng:26.251617,count:10},
        {city:'Рожище',lat:50.9167,lng:25.2667,count:10},
        {city:'Ромны',lat:50.745622,lng:33.491516,count:10},
        {city:'Рубежное',lat:49.010862,lng:38.374071,count:10},
        {city:'Рудки',lat:49.65305559999999,lng:23.4880556,count:10},
        {city:'Саки',lat:45.12874,lng:33.6043049,count:10},
        {city:'Самбор',lat:49.51666669999999,lng:23.2027778,count:10},
        {city:'Сарны',lat:51.33722220000001,lng:26.6058333,count:10},
        {city:'Свалява',lat:48.5472222,lng:22.9861111,count:10},
        {city:'Сватово',lat:49.4166667,lng:38.15,count:10},
        {city:'Свердловск',lat:56.8333333,lng:60.59999999999999,count:10},
        {city:'Светловодск',lat:49.050323,lng:33.22422299999999,count:10},
        {city:'Севастополь',lat:44.61665,lng:33.525367,count:70},
        {city:'Северодонецк',lat:48.9333333,lng:38.5,count:10},
        {city:'Седнев',lat:51.6433333,lng:31.5688889,count:10},
        {city:'Селидово',lat:48.144671,lng:37.297897,count:10},
        {city:'Семёновка',lat:49.603634,lng:33.175511,count:10},
        {city:'Середина-Буда',lat:52.1838889,lng:34.0361111,count:10},
        {city:'Симферополь',lat:44.952117,lng:34.102417,count:10},
        {city:'Синельниково',lat:48.322121,lng:35.521802,count:10},
        {city:'Скадовск',lat:46.1166667,lng:32.9166667,count:10},
        {city:'Скалат',lat:49.430619,lng:25.966856,count:10},
        {city:'Сквира',lat:49.725654,lng:29.676696,count:10},
        {city:'Сколе',lat:49.038673,lng:23.51401,count:10},
        {city:'Славута',lat:50.3027778,lng:26.8683333,count:10},
        {city:'Славутич',lat:51.52055559999999,lng:30.7569444,count:10},
        {city:'Славянск',lat:48.8532,lng:37.6053,count:10},
        {city:'Смела',lat:49.227717,lng:31.852233,count:10},
        {city:'Снежное',lat:48.0282778,lng:38.7656111,count:10},
        {city:'Снигирёвка',lat:47.0763729,lng:32.792729,count:10},
        {city:'Снятын',lat:48.45,lng:25.5666667,count:10},
        {city:'Сокаль',lat:50.4833333,lng:24.2833333,count:10},
        {city:'Сокиряны',lat:48.45,lng:27.4166667,count:10},
        {city:'Соледар',lat:48.68333330000001,lng:38.1,count:10},
        {city:'Старобельск',lat:49.2833,lng:38.9167,count:10},
        {city:'Староконстантинов',lat:49.7555556,lng:27.2208333,count:10},
        {city:'Старый Крым',lat:45.0291667,lng:35.0886111,count:10},
        {city:'Старый Самбор',lat:49.4430556,lng:23.0033333,count:10},
        {city:'Стаханов',lat:48.5666667,lng:38.65,count:10},
        {city:'Сторожинец',lat:48.158745,lng:25.716639,count:10},
        {city:'Стрый',lat:49.25573,lng:23.846488,count:10},
        {city:'Судак',lat:44.85046699999999,lng:34.976183,count:10},
        {city:'Сумы',lat:50.9077,lng:34.7981,count:10},
        {city:'Суходольск',lat:48.34896,lng:39.71857,count:10},
        {city:'Счастье',lat:48.7333,lng:39.2333,count:10},
        {city:'Таврийск',lat:46.754036,lng:33.42058000000001,count:10},
        {city:'Тальное',lat:48.886221,lng:30.706505,count:10},
        {city:'Тараща',lat:49.557787,lng:30.50672,count:10},
        {city:'Татарбунары',lat:45.8391132,lng:29.6145761,count:10},
        {city:'Теплогорск',lat:48.599733,lng:38.587366,count:10},
        {city:'Теплодар',lat:46.5,lng:30.3333333,count:10},
        {city:'Тернополь',lat:49.553517,lng:25.594767,count:10},
        {city:'Терновка',lat:48.5177989,lng:36.07869,count:10},
        {city:'Тетиев',lat:49.3708333,lng:29.69,count:10},
        {city:'Тысменица',lat:48.9008333,lng:24.8491667,count:10},
        {city:'Тлумач',lat:48.862582,lng:24.998563,count:10},
        {city:'Теребовля',lat:49.2991667,lng:25.69,count:10},
        {city:'Тростянец',lat:50.47851,lng:34.965687,count:10},
        {city:'Трускавец',lat:49.2805556,lng:23.505,count:10},
        {city:'Токмак',lat:47.25,lng:35.7,count:10},
        {city:'Торез',lat:48.03105499999999,lng:38.62432,count:10},
        {city:'Тульчин',lat:48.6744444,lng:28.8497222,count:10},
        {city:'Тячев',lat:48.015438,lng:23.570058,count:10},
        {city:'Угледар',lat:47.7833333,lng:37.25,count:10},
        {city:'Угнев',lat:50.3666667,lng:23.7444444,count:10},
        {city:'Узин',lat:49.819121,lng:30.426053,count:10},
        {city:'Украинка',lat:50.1530861,lng:30.7434917,count:10},
        {city:'Ужгород',lat:48.6208,lng:22.287883,count:40},
        {city:'Умань',lat:48.75261099999999,lng:30.217967,count:10},
        {city:'Устилуг',lat:50.857937,lng:24.157081,count:10},
        {city:'Фастов',lat:50.080324,lng:29.915286,count:10},
        {city:'Феодосия',lat:45.031933,lng:35.382433,count:10},
        {city:'Харцызск',lat:48.042293,lng:38.146064,count:10},
        {city:'Харьков',lat:49.9935,lng:36.230383,count:10},
        {city:'Херсон',lat:46.635417,lng:32.616867,count:20},
        {city:'Хмельник',lat:49.559603,lng:27.957467,count:10},
        {city:'Хмельницкий',lat:49.422983,lng:26.987133,count:10},
        {city:'Хорол',lat:49.786409,lng:33.272421,count:10},
        {city:'Хотин',lat:48.5,lng:26.5,count:10},
        {city:'Христиновка',lat:48.8147938,lng:29.97279439999999,count:10},
        {city:'Хуст',lat:48.18138889999999,lng:23.2977778,count:10},
        {city:'Хыров',lat:49.5333333,lng:22.85,count:10},
        {city:'Цюрупинск',lat:46.61993210000001,lng:32.70726750000001,count:10},
        {city:'Червоноград',lat:50.386303,lng:24.227007,count:10},
        {city:'Червонозаводское',lat:50.402271,lng:33.388124,count:10},
        {city:'Червонопартизанск',lat:48.072588,lng:39.797324,count:10},
        {city:'Черкассы',lat:49.444433,lng:32.059767,count:10},
        {city:'Чернигов',lat:51.4982,lng:31.28935,count:10},
        {city:'Чернобыль',lat:51.261926,lng:30.236045,count:10},
        {city:'Черновцы',lat:48.291683,lng:25.935217,count:10},
        {city:'Чигирин',lat:49.0870729,lng:32.647896,count:10},
        {city:'Чоп',lat:48.4333333,lng:22.2,count:10},
        {city:'Чортков',lat:49.0075,lng:25.7905556,count:10},
        {city:'Чугуев',lat:49.8355556,lng:36.6863889,count:10},
        {city:'Шаргород',lat:48.74012399999999,lng:28.08696,count:10},
        {city:'Шахтёрск',lat:48.070213,lng:38.42235,count:10},
        {city:'Шепетовка',lat:50.1833333,lng:27.0666667,count:10},
        {city:'Шостка',lat:51.8666667,lng:33.4833333,count:10},
        {city:'Шпола',lat:49.00420099999999,lng:31.396228,count:10},
        {city:'Шумск',lat:50.1833333,lng:28.55,count:10},
        {city:'Щёлкино',lat:45.4236111,lng:35.8186111,count:10},
        {city:'Щорс',lat:51.8166667,lng:31.95,count:10},
        {city:'Энергодар',lat:47.498634,lng:34.644732,count:10},
        {city:'Южное',lat:46.6244981,lng:31.1029029,count:10},
        {city:'Южноукраинск',lat:47.8228,lng:31.1775,count:10},
        {city:'Яворов',lat:49.9469444,lng:23.3930556,count:10},
        {city:'Яготин',lat:50.25694439999999,lng:31.7816667,count:10},
        {city:'Ялта',lat:44.49520500000001,lng:34.166301,count:10},
        {city:'Ямполь',lat:48.243612,lng:28.287041,count:10},
        {city:'Яремче',lat:48.46027780000001,lng:24.5586111,count:10},
        {city:'Ясиноватая',lat:48.1277778,lng:37.8625,count:10}]

};

var testDataMan = {
    max: 70,
    data: []
};

var testDataWoman = {
    max: 70,
    data: []
};

for(var i=0; i<= testData.data.length; i++){
	var dt = testData.data[i];
	//console.log(dt);
	if(dt != undefined){
		testDataMan.data.push({city: dt.city, lat: dt.lat, lng: dt.lng, count: dt.count*0.6});
		testDataWoman.data.push({city: dt.city, lat: dt.lat, lng: dt.lng, count: dt.count*0.8});
	}
}

console.log("data loaded");

// here is example visualized path to foreing country with milestones to achieve
var russiaRiskPathCoordinates = [
	new google.maps.LatLng(51.0380556, 31.8861111),
	new google.maps.LatLng(51.2409432, 33.2050521),
	new google.maps.LatLng(51.8666667, 33.4833333),					
	new google.maps.LatLng(53.21667, 34.41667),
	new google.maps.LatLng(54.58333, 36.16667),
	new google.maps.LatLng(55.75, 37.58333)
];

var russiaSteps = ['<div id="content">'+
				  '<div id="siteNotice">'+
				  '</div>'+
				  '<h4 id="firstHeading" class="firstHeading">Крок 1. Законодавство Россії</h4>'+
				  '<div id="bodyContent">'+
				  '<p>Які документи необхідно мати для легального працевлаштування на території Росії?</p>'+
				  '<ul><li><a href="#">Все при міграційні карти.</a></li>'+
				  '<li><a href="#">Правила оформлення дозволу на роботу в Росії.</a></li>'+
				  '<li><a href="#">ССкільки насправді можна пеербувати без реєстрації у Москві?.</a></li></ul>'+
				  '</div>'+
				  '</div>', '<div id="content">'+
				  '<div id="siteNotice">'+
				  '</div>'+
				  '<h4 id="firstHeading" class="firstHeading">Крок 2. Знання мови</h4>'+
				  '<div id="bodyContent">'+
				  '<p>Вы хорошо говорите по русски?</p>'+
				  '</div>'+
				  '</div>', '<div id="content">'+
				  '<div id="siteNotice">'+
				  '</div>'+
				  '<h4 id="firstHeading" class="firstHeading">Крок 3. Перевірка майбутного роботодавця або посередника</h4>'+
				  '<div id="bodyContent">'+
				  '<p>Ви задавали ці питання своєму роботодавцю?</p>'+
				  '<ul><li>Чи буде роботодавець оформляти для вас право на роботу?</li>'+
				  '<li>Чи будуть вам платити офіційну зарплатню?</li>'+
				  '<li>Скільки людей, яких ви знаєте вже їздили успішно працювати до цього роботодавця?</li></ul>'+
				  '</div>'+
				  '</div>'];

var isGeneric = true;
function GenderControl(controlDiv, map) {

	// Set CSS styles for the DIV containing the control
	// Setting padding to 5 px will offset the control
	// from the edge of the map
	controlDiv.style.padding = '5px';

	// Set CSS for the control border
	var controlUI_man = document.createElement('div');
	controlUI_man.style.backgroundColor = 'white';
	controlUI_man.style.borderStyle = 'solid';
	controlUI_man.style.borderWidth = '2px';
	controlUI_man.style.cursor = 'pointer';
	controlUI_man.style.textAlign = 'center';
	controlUI_man.title = 'Click to filter';
	controlDiv.appendChild(controlUI_man);

	// Set CSS for the control interior
	var controlText = document.createElement('div');
	controlText.style.fontFamily = 'Arial,sans-serif';
	controlText.style.fontSize = '12px';
	controlText.style.paddingLeft = '4px';
	controlText.style.paddingRight = '4px';
	controlText.innerHTML = '<b>чоловіки</b>';
	controlUI_man.appendChild(controlText);

	var hr = document.createElement('hr');
	hr.style.marginTop = '0px';
	hr.style.marginBottom = '0px';
	controlUI_man.appendChild(hr);

	// Set CSS for the control interior
	var controlText2 = document.createElement('div');
	controlText2.style.fontFamily = 'Arial,sans-serif';
	controlText2.style.fontSize = '12px';
	controlText2.style.paddingLeft = '4px';
	controlText2.style.paddingRight = '4px';
	controlText2.innerHTML = '<b>жінки</b>';
	controlUI_man.appendChild(controlText2);
	
	

	// Setup the click event listeners: filter on man
	google.maps.event.addDomListener(controlText, 'click', function() {
		isGeneric = !isGeneric;
		console.log("change dataset for man");	
		if(!isGeneric){		
			heatmap.setDataSet(testDataMan);
			controlText.style.backgroundColor = '#F78181';
			controlText2.style.backgroundColor = '#fff';
		}
		else{
			heatmap.setDataSet(testData);
			controlText.style.backgroundColor = '#fff';
			controlText2.style.backgroundColor = '#fff';
		}
	});

	// Setup the click event listeners: filter on man
	google.maps.event.addDomListener(controlText2, 'click', function() {
		isGeneric = !isGeneric;
		console.log("change dataset for woman");
		if(!isGeneric){		
			heatmap.setDataSet(testDataWoman);
			controlText2.style.backgroundColor = '#F78181';
			controlText.style.backgroundColor = '#fff';
		}
		else{
			heatmap.setDataSet(testData);
			controlText2.style.backgroundColor = '#fff';
			controlText.style.backgroundColor = '#fff';
		}
	});
}		


function AgeControl(controlDiv, map) {

	var groups = ["до 18", "18-24", "25-39", "більше 40"];
	
	// Set CSS styles for the DIV containing the control
	// Setting padding to 5 px will offset the control
	// from the edge of the map
	controlDiv.style.padding = '5px';

	// Set CSS for the control border
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = 'white';
	controlUI.style.borderStyle = 'solid';
	controlUI.style.borderWidth = '2px';
	controlUI.style.cursor = 'pointer';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Click to filter';
	controlDiv.appendChild(controlUI);

	for(var i=0; i< groups.length; i++){
		// Set CSS for the control interior
		var controlText = document.createElement('div');
		controlText.style.fontFamily = 'Arial,sans-serif';
		controlText.style.fontSize = '12px';
		controlText.style.paddingLeft = '4px';
		controlText.style.paddingRight = '4px';
		controlText.innerHTML = '<b>' + groups[i] + '</b>';
		controlUI.appendChild(controlText);
		
		if(i<groups.length-1){
			var hr = document.createElement('hr');
			hr.style.marginTop = '0px';
			hr.style.marginBottom = '0px';
			controlUI.appendChild(hr);
		}		
	}

	// Setup the click event listeners: filter on man
	google.maps.event.addDomListener(controlUI, 'click', function() {
		console.log("change dataset for age");
		heatmap.setDataSet(testData);
	});
}				  


function AdviceControl(controlDiv, map) {

	var groups = ["до 18", "18-24", "25-39", "більше 40"];
	
	// Set CSS styles for the DIV containing the control
	// Setting padding to 5 px will offset the control
	// from the edge of the map
	controlDiv.style.padding = '5px';

	// Set CSS for the control border
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = 'white';
	controlUI.style.borderStyle = 'solid';
	controlUI.style.borderWidth = '2px';
	controlUI.style.cursor = 'pointer';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Click to filter';
	controlDiv.appendChild(controlUI);

	for(var i=0; i< groups.length; i++){
		// Set CSS for the control interior
		var controlText = document.createElement('div');
		controlText.style.fontFamily = 'Arial,sans-serif';
		controlText.style.fontSize = '12px';
		controlText.style.paddingLeft = '4px';
		controlText.style.paddingRight = '4px';
		controlText.innerHTML = '<b>' + groups[i] + '</b>';
		controlUI.appendChild(controlText);
		
		if(i<groups.length-1){
			var hr = document.createElement('hr');
			hr.style.marginTop = '0px';
			hr.style.marginBottom = '0px';
			controlUI.appendChild(hr);
		}		
	}

	// Setup the click event listeners: filter on man
	google.maps.event.addDomListener(controlUI, 'click', function() {
		console.log("change dataset for age");
		heatmap.setDataSet(testData);
	});
}				  
					  
				  