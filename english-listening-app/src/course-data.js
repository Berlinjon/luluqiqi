// Shared course data for the English listening app.
// Loaded by index.html and by tools/validate-course-data.mjs.
(() => {
  const KIDS = [
  {
    "id": "lulu",
    "name": "Lulu",
    "face": "🌼"
  },
  {
    "id": "qiqi",
    "name": "Qiqi",
    "face": "🌱"
  },
  {
    "id": "mimi",
    "name": "Mimi",
    "face": "🌟"
  }
];

  const GENERATED_IMAGES = {
  "cat_sleep": "./assets/illustrations/generated/cat-sleeping.png",
  "dog_run": "./assets/illustrations/generated/dog-running.png",
  "bird_fly": "./assets/illustrations/generated/bird-flying.png",
  "fish_swim": "./assets/illustrations/generated/fish-swimming.png",
  "apple_red": "./assets/illustrations/generated/apple-red.png",
  "banana_yellow": "./assets/illustrations/generated/banana-yellow.png",
  "milk_drink": "./assets/illustrations/generated/girl-drinks-milk.png",
  "cake_eat": "./assets/illustrations/generated/boy-eats-cake.png",
  "boy_run": "./assets/illustrations/generated/boy-running.png",
  "girl_read": "./assets/illustrations/generated/girl-reading.png",
  "brush_teeth": "./assets/illustrations/generated/brushing-teeth.png",
  "cook_food": "./assets/illustrations/generated/dad-cooking.png",
  "open_door": "./assets/illustrations/generated/open-door.png",
  "close_window": "./assets/illustrations/generated/close-window.png",
  "wash_hands": "./assets/illustrations/generated/washing-hands.png",
  "wear_hat": "./assets/illustrations/generated/wear-hat.png",
  "red_ball": "./assets/illustrations/generated/red-ball.png",
  "blue_bag": "./assets/illustrations/generated/blue-bag.png",
  "green_tree": "./assets/illustrations/generated/green-tree.png",
  "yellow_sun": "./assets/illustrations/generated/yellow-sun.png",
  "on_bed": "./assets/illustrations/generated/cat-on-bed.png",
  "under_table": "./assets/illustrations/generated/dog-under-table.png",
  "in_box": "./assets/illustrations/generated/rabbit-in-box.png",
  "next_chair": "./assets/illustrations/generated/bag-next-chair.png",
  "rain_play": "./assets/illustrations/generated/child-rain.png",
  "snow_touch": "./assets/illustrations/generated/child-snow.png",
  "windy_kite": "./assets/illustrations/generated/kite-wind.png",
  "star_count": "./assets/illustrations/generated/count-stars.png",
  "red_ball_small": "./assets/illustrations/generated/red-ball-small.png",
  "blue_bag_big": "./assets/illustrations/generated/blue-bag-big.png",
  "green_tree_tall": "./assets/illustrations/generated/green-tree-tall.png",
  "yellow_sun_bright": "./assets/illustrations/generated/yellow-sun-bright.png",
  "apple_red_round": "./assets/illustrations/generated/apple-red-round.png",
  "banana_long_yellow": "./assets/illustrations/generated/banana-long-yellow.png",
  "snow_white": "./assets/illustrations/generated/snow-white.png",
  "star_yellow": "./assets/illustrations/generated/star-yellow.png",
  "cake_sweet": "./assets/illustrations/generated/cake-sweet.png",
  "bag_next_ball": "./assets/illustrations/generated/bag-next-ball.png",
  "tree_outside_green": "./assets/illustrations/generated/tree-outside-green.png",
  "milk_white_cup": "./assets/illustrations/generated/milk-white-cup.png",
  "cat_blue_bed": "./assets/illustrations/generated/cat-blue-bed.png",
  "dog_under_sun": "./assets/illustrations/generated/dog-under-sun.png",
  "fish_blue": "./assets/illustrations/generated/fish-blue.png",
  "cat_sits_on_bed": "./assets/illustrations/generated/cat-sits-on-bed.png",
  "dog_below_table": "./assets/illustrations/generated/dog-below-table.png",
  "rabbit_sits_in_box": "./assets/illustrations/generated/rabbit-sits-in-box.png",
  "bag_beside_chair": "./assets/illustrations/generated/bag-beside-chair.png",
  "apple_in_basket_new": "./assets/illustrations/generated/apple-in-basket.png",
  "banana_on_table_new": "./assets/illustrations/generated/banana-on-table.png",
  "cake_on_plate_new": "./assets/illustrations/generated/cake-on-plate.png",
  "bird_near_cloud_new": "./assets/illustrations/generated/bird-near-cloud.png",
  "fish_swims_water": "./assets/illustrations/generated/fish-swims-water.png",
  "kite_flies_wind": "./assets/illustrations/generated/kite-flies-wind.png",
  "child_stands_rain": "./assets/illustrations/generated/child-stands-rain.png",
  "child_stands_snow": "./assets/illustrations/generated/child-stands-snow.png",
  "star_in_sky": "./assets/illustrations/generated/star-in-sky.png",
  "bag_near_chair": "./assets/illustrations/generated/bag-near-chair.png",
  "door_beside_window": "./assets/illustrations/generated/door-beside-window.png",
  "weather_raining": "./assets/illustrations/generated/weather-raining.png",
  "weather_snowing": "./assets/illustrations/generated/weather-snowing.png",
  "weather_windy": "./assets/illustrations/generated/weather-windy.png",
  "sun_bright_weather": "./assets/illustrations/generated/sun-bright-weather.png",
  "tree_tall_weather": "./assets/illustrations/generated/tree-tall-weather.png",
  "bird_in_sky": "./assets/illustrations/generated/bird-in-sky.png",
  "fish_in_water_weather": "./assets/illustrations/generated/fish-in-water-weather.png",
  "cloud_near_bird": "./assets/illustrations/generated/cloud-near-bird.png",
  "child_has_umbrella": "./assets/illustrations/generated/child-has-umbrella.png",
  "kite_high": "./assets/illustrations/generated/kite-high.png",
  "stars_in_sky": "./assets/illustrations/generated/stars-in-sky.png",
  "snow_cold": "./assets/illustrations/generated/snow-cold.png",
  "rain_wet": "./assets/illustrations/generated/rain-wet.png",
  "sun_hot": "./assets/illustrations/generated/sun-hot.png",
  "tree_outside_weather": "./assets/illustrations/generated/tree-outside-weather.png"
};

  const VOICE_PROFILES = {
  "ava": [
    "Ava",
    "Allison",
    "Victoria",
    "Samantha",
    "Google US English",
    "Microsoft Aria",
    "Microsoft Jenny"
  ],
  "allison": [
    "Allison",
    "Ava",
    "Victoria",
    "Samantha",
    "Google US English",
    "Microsoft Aria",
    "Microsoft Jenny"
  ],
  "victoria": [
    "Victoria",
    "Ava",
    "Allison",
    "Samantha",
    "Google US English",
    "Microsoft Aria",
    "Microsoft Jenny"
  ],
  "samantha": [
    "Samantha",
    "Ava",
    "Allison",
    "Victoria",
    "Google US English",
    "Microsoft Aria",
    "Microsoft Jenny"
  ]
};

  const DEFAULT_VOICE_PROFILE = "ava";

  const VISUALS = {
  "cat_sleep": [
    "homey",
    "🐈",
    "🌙",
    "right"
  ],
  "dog_run": [
    "school",
    "🐕",
    "💨",
    "right"
  ],
  "bird_fly": [
    "water",
    "🐦",
    "☁️",
    "right"
  ],
  "fish_swim": [
    "water",
    "🐟",
    "🌊",
    "right"
  ],
  "apple_red": [
    "food",
    "🍎",
    "🧺",
    ""
  ],
  "banana_yellow": [
    "food",
    "🍌",
    "🧺",
    ""
  ],
  "milk_drink": [
    "food",
    "🥛",
    "😊",
    "right"
  ],
  "cake_eat": [
    "food",
    "🍰",
    "🍽️",
    "right"
  ],
  "boy_run": [
    "school",
    "🏃",
    "🎒",
    "right"
  ],
  "girl_read": [
    "homey",
    "📖",
    "👧",
    "right"
  ],
  "brush_teeth": [
    "homey",
    "🪥",
    "😊",
    "right"
  ],
  "cook_food": [
    "food",
    "🍳",
    "👨‍🍳",
    "right"
  ],
  "open_door": [
    "homey",
    "🚪",
    "👋",
    "right"
  ],
  "close_window": [
    "homey",
    "🪟",
    "🌙",
    "right"
  ],
  "wash_hands": [
    "water",
    "🧼",
    "👐",
    "right"
  ],
  "wear_hat": [
    "school",
    "🧢",
    "🙂",
    "right"
  ],
  "red_ball": [
    "school",
    "🔴",
    "⚽",
    "right"
  ],
  "blue_bag": [
    "school",
    "🎒",
    "🔵",
    "right"
  ],
  "green_tree": [
    "school",
    "🌳",
    "🟢",
    "right"
  ],
  "yellow_sun": [
    "food",
    "☀️",
    "🟡",
    "right"
  ],
  "on_bed": [
    "homey",
    "🛏️",
    "🐈",
    "right"
  ],
  "under_table": [
    "homey",
    "🍽️",
    "🐕",
    "right"
  ],
  "in_box": [
    "homey",
    "📦",
    "🐰",
    "right"
  ],
  "next_chair": [
    "homey",
    "🪑",
    "🎒",
    "right"
  ],
  "rain_play": [
    "water",
    "🌧️",
    "☂️",
    "right"
  ],
  "snow_touch": [
    "night",
    "❄️",
    "🧤",
    "right"
  ],
  "windy_kite": [
    "school",
    "🪁",
    "💨",
    "right"
  ],
  "star_count": [
    "night",
    "⭐",
    "👀",
    "right"
  ]
};

  const LESSONS = [
  {
    "id": "animals-1",
    "topic": "Animals",
    "level": "L1",
    "name": "动物入门",
    "items": [
      {
        "id": "animals_l1_01",
        "sentence": "The cat is sleeping.",
        "zh": "猫正在睡觉。",
        "correct": "cat_sleep",
        "choices": [
          "cat_sleep",
          "dog_run",
          "bird_fly",
          "fish_swim"
        ]
      },
      {
        "id": "animals_l1_02",
        "sentence": "The dog is running.",
        "zh": "狗正在奔跑。",
        "correct": "dog_run",
        "choices": [
          "dog_run",
          "cat_sleep",
          "fish_swim",
          "bird_fly"
        ]
      },
      {
        "id": "animals_l1_03",
        "sentence": "The bird is flying.",
        "zh": "鸟正在飞。",
        "correct": "bird_fly",
        "choices": [
          "bird_fly",
          "fish_swim",
          "cat_sleep",
          "dog_run"
        ]
      },
      {
        "id": "animals_l1_04",
        "sentence": "The fish is swimming.",
        "zh": "鱼正在游泳。",
        "correct": "fish_swim",
        "choices": [
          "fish_swim",
          "bird_fly",
          "dog_run",
          "cat_sleep"
        ]
      },
      {
        "id": "animals_l1_05",
        "sentence": "The cat is on the bed.",
        "zh": "猫在床上。",
        "correct": "on_bed",
        "choices": [
          "on_bed",
          "under_table",
          "in_box",
          "next_chair"
        ]
      },
      {
        "id": "animals_l1_06",
        "sentence": "The dog is under the table.",
        "zh": "狗在桌子下面。",
        "correct": "under_table",
        "choices": [
          "under_table",
          "on_bed",
          "next_chair",
          "in_box"
        ]
      },
      {
        "id": "animals_l1_07",
        "sentence": "The rabbit is in the box.",
        "zh": "兔子在盒子里。",
        "correct": "in_box",
        "choices": [
          "in_box",
          "next_chair",
          "on_bed",
          "under_table"
        ]
      },
      {
        "id": "animals_l1_08",
        "sentence": "The bag is next to the chair.",
        "zh": "书包在椅子旁边。",
        "correct": "next_chair",
        "choices": [
          "next_chair",
          "blue_bag",
          "in_box",
          "under_table"
        ]
      },
      {
        "id": "animals_l1_09",
        "sentence": "The bird is near the cloud.",
        "zh": "鸟在云朵附近。",
        "correct": "bird_near_cloud_new",
        "choices": [
          "bird_near_cloud_new",
          "bird_in_sky",
          "bird_fly",
          "windy_kite"
        ]
      },
      {
        "id": "animals_l1_10",
        "sentence": "The fish is in the water.",
        "zh": "鱼在水里。",
        "correct": "fish_swims_water",
        "choices": [
          "fish_swims_water",
          "fish_blue",
          "bird_near_cloud_new",
          "rain_play"
        ]
      },
      {
        "id": "animals_l1_11",
        "sentence": "The cat is quiet.",
        "zh": "猫很安静。",
        "correct": "cat_sleep",
        "choices": [
          "cat_sleep",
          "on_bed",
          "cat_sits_on_bed",
          "dog_run"
        ]
      },
      {
        "id": "animals_l1_12",
        "sentence": "The dog is fast.",
        "zh": "狗跑得很快。",
        "correct": "dog_run",
        "choices": [
          "dog_run",
          "brush_teeth",
          "milk_drink",
          "star_count"
        ]
      },
      {
        "id": "animals_l1_13",
        "sentence": "The bird is small.",
        "zh": "鸟很小。",
        "correct": "bird_fly",
        "choices": [
          "bird_fly",
          "bird_in_sky",
          "fish_swim",
          "cat_sleep"
        ]
      },
      {
        "id": "animals_l1_14",
        "sentence": "The fish is blue.",
        "zh": "鱼是蓝色的。",
        "correct": "fish_blue",
        "choices": [
          "fish_blue",
          "fish_swim",
          "blue_bag",
          "bird_fly"
        ]
      },
      {
        "id": "animals_l1_15",
        "sentence": "The animal is sleeping.",
        "zh": "动物正在睡觉。",
        "correct": "cat_sleep",
        "choices": [
          "cat_sleep",
          "dog_run",
          "bird_fly",
          "fish_swim"
        ]
      }
    ],
    "choiceCount": 2
  },
  {
    "id": "food-1",
    "topic": "Food",
    "level": "L1",
    "name": "食物入门",
    "items": [
      {
        "id": "food_l1_01",
        "sentence": "The apple is red.",
        "zh": "苹果是红色的。",
        "correct": "apple_red",
        "choices": [
          "apple_red",
          "banana_yellow",
          "milk_drink",
          "cake_eat"
        ]
      },
      {
        "id": "food_l1_02",
        "sentence": "The banana is yellow.",
        "zh": "香蕉是黄色的。",
        "correct": "banana_yellow",
        "choices": [
          "banana_yellow",
          "apple_red",
          "yellow_sun",
          "red_ball"
        ]
      },
      {
        "id": "food_l1_03",
        "sentence": "The girl drinks milk.",
        "zh": "女孩喝牛奶。",
        "correct": "milk_drink",
        "choices": [
          "milk_drink",
          "cake_eat",
          "girl_read",
          "brush_teeth"
        ]
      },
      {
        "id": "food_l1_04",
        "sentence": "The boy eats cake.",
        "zh": "男孩吃蛋糕。",
        "correct": "cake_eat",
        "choices": [
          "cake_eat",
          "milk_drink",
          "boy_run",
          "cook_food"
        ]
      },
      {
        "id": "food_l1_05",
        "sentence": "Dad is cooking.",
        "zh": "爸爸正在做饭。",
        "correct": "cook_food",
        "choices": [
          "cook_food",
          "brush_teeth",
          "open_door",
          "wash_hands"
        ]
      },
      {
        "id": "food_l1_06",
        "sentence": "The cake is on the plate.",
        "zh": "蛋糕在盘子上。",
        "correct": "cake_eat",
        "choices": [
          "cake_eat",
          "apple_red",
          "banana_yellow",
          "red_ball"
        ]
      },
      {
        "id": "food_l1_07",
        "sentence": "The apple is in the basket.",
        "zh": "苹果在篮子里。",
        "correct": "apple_red",
        "choices": [
          "apple_red",
          "in_box",
          "blue_bag",
          "green_tree"
        ]
      },
      {
        "id": "food_l1_08",
        "sentence": "The milk is white.",
        "zh": "牛奶是白色的。",
        "correct": "milk_white_cup",
        "choices": [
          "milk_white_cup",
          "milk_drink",
          "snow_white",
          "yellow_sun"
        ]
      },
      {
        "id": "food_l1_09",
        "sentence": "The banana is on the table.",
        "zh": "香蕉在桌子上。",
        "correct": "banana_on_table_new",
        "choices": [
          "banana_on_table_new",
          "banana_yellow",
          "cake_on_plate_new",
          "apple_in_basket_new"
        ]
      },
      {
        "id": "food_l1_10",
        "sentence": "The food is hot.",
        "zh": "食物是热的。",
        "correct": "cook_food",
        "choices": [
          "cook_food",
          "cake_eat",
          "milk_drink",
          "sun_hot"
        ]
      },
      {
        "id": "food_l1_11",
        "sentence": "She wants milk.",
        "zh": "她想要牛奶。",
        "correct": "milk_drink",
        "choices": [
          "milk_drink",
          "girl_read",
          "wear_hat",
          "rain_play"
        ]
      },
      {
        "id": "food_l1_12",
        "sentence": "He wants cake.",
        "zh": "他想要蛋糕。",
        "correct": "cake_eat",
        "choices": [
          "cake_eat",
          "cook_food",
          "milk_drink",
          "apple_red"
        ]
      },
      {
        "id": "food_l1_13",
        "sentence": "The red fruit is an apple.",
        "zh": "红色水果是苹果。",
        "correct": "apple_red",
        "choices": [
          "apple_red",
          "red_ball",
          "banana_yellow",
          "blue_bag"
        ]
      },
      {
        "id": "food_l1_14",
        "sentence": "The yellow fruit is a banana.",
        "zh": "黄色水果是香蕉。",
        "correct": "banana_yellow",
        "choices": [
          "banana_yellow",
          "yellow_sun",
          "apple_red",
          "green_tree"
        ]
      },
      {
        "id": "food_l1_15",
        "sentence": "The family cooks dinner.",
        "zh": "一家人在做晚饭。",
        "correct": "cook_food",
        "choices": [
          "cook_food",
          "girl_read",
          "wash_hands",
          "open_door"
        ]
      }
    ],
    "choiceCount": 2
  },
  {
    "id": "starter-review-1",
    "topic": "Review",
    "level": "L1",
    "name": "入门复习",
    "items": [
      {
        "id": "review_l1_01",
        "sentence": "The cat is sleeping.",
        "zh": "猫正在睡觉。",
        "correct": "cat_sleep",
        "choices": [
          "cat_sleep",
          "dog_run",
          "bird_fly",
          "fish_swim"
        ]
      },
      {
        "id": "review_l1_02",
        "sentence": "The dog is running.",
        "zh": "狗正在奔跑。",
        "correct": "dog_run",
        "choices": [
          "dog_run",
          "cat_sleep",
          "fish_swim",
          "bird_fly"
        ]
      },
      {
        "id": "review_l1_03",
        "sentence": "The bird is flying.",
        "zh": "鸟正在飞。",
        "correct": "bird_fly",
        "choices": [
          "bird_fly",
          "fish_swim",
          "cat_sleep",
          "dog_run"
        ]
      },
      {
        "id": "review_l1_04",
        "sentence": "The fish is swimming.",
        "zh": "鱼正在游泳。",
        "correct": "fish_swim",
        "choices": [
          "fish_swim",
          "bird_fly",
          "dog_run",
          "cat_sleep"
        ]
      },
      {
        "id": "review_l1_05",
        "sentence": "The apple is red.",
        "zh": "苹果是红色的。",
        "correct": "apple_red",
        "choices": [
          "apple_red",
          "banana_yellow",
          "milk_drink",
          "cake_eat"
        ]
      },
      {
        "id": "review_l1_06",
        "sentence": "The banana is yellow.",
        "zh": "香蕉是黄色的。",
        "correct": "banana_yellow",
        "choices": [
          "banana_yellow",
          "apple_red",
          "yellow_sun",
          "red_ball"
        ]
      },
      {
        "id": "review_l1_07",
        "sentence": "The girl drinks milk.",
        "zh": "女孩喝牛奶。",
        "correct": "milk_drink",
        "choices": [
          "milk_drink",
          "cake_eat",
          "girl_read",
          "brush_teeth"
        ]
      },
      {
        "id": "review_l1_08",
        "sentence": "The boy eats cake.",
        "zh": "男孩吃蛋糕。",
        "correct": "cake_eat",
        "choices": [
          "cake_eat",
          "milk_drink",
          "boy_run",
          "cook_food"
        ]
      },
      {
        "id": "review_l1_09",
        "sentence": "The cat is on the bed.",
        "zh": "猫在床上。",
        "correct": "on_bed",
        "choices": [
          "on_bed",
          "under_table",
          "in_box",
          "next_chair"
        ]
      },
      {
        "id": "review_l1_10",
        "sentence": "The dog is under the table.",
        "zh": "狗在桌子下面。",
        "correct": "under_table",
        "choices": [
          "under_table",
          "on_bed",
          "next_chair",
          "in_box"
        ]
      },
      {
        "id": "review_l1_11",
        "sentence": "The cake is on the plate.",
        "zh": "蛋糕在盘子上。",
        "correct": "cake_eat",
        "choices": [
          "cake_eat",
          "apple_red",
          "banana_yellow",
          "red_ball"
        ]
      },
      {
        "id": "review_l1_12",
        "sentence": "The apple is in the basket.",
        "zh": "苹果在篮子里。",
        "correct": "apple_red",
        "choices": [
          "apple_red",
          "in_box",
          "blue_bag",
          "green_tree"
        ]
      },
      {
        "id": "review_l1_13",
        "sentence": "The cat is quiet.",
        "zh": "猫很安静。",
        "correct": "cat_sleep",
        "choices": [
          "cat_sleep",
          "on_bed",
          "cat_sits_on_bed",
          "dog_run"
        ]
      },
      {
        "id": "review_l1_14",
        "sentence": "She wants milk.",
        "zh": "她想要牛奶。",
        "correct": "milk_drink",
        "choices": [
          "milk_drink",
          "girl_read",
          "wear_hat",
          "rain_play"
        ]
      },
      {
        "id": "review_l1_15",
        "sentence": "He wants cake.",
        "zh": "他想要蛋糕。",
        "correct": "cake_eat",
        "choices": [
          "cake_eat",
          "cook_food",
          "milk_drink",
          "apple_red"
        ]
      }
    ],
    "choiceCount": 2
  },
  {
    "id": "daily-1",
    "topic": "Daily",
    "level": "L2",
    "name": "日常进阶",
    "items": [
      {
        "id": "daily_l2_01",
        "sentence": "The boy is running.",
        "zh": "男孩正在跑步。",
        "correct": "boy_run",
        "choices": [
          "boy_run",
          "girl_read",
          "brush_teeth",
          "cook_food"
        ]
      },
      {
        "id": "daily_l2_02",
        "sentence": "The girl is reading.",
        "zh": "女孩正在读书。",
        "correct": "girl_read",
        "choices": [
          "girl_read",
          "boy_run",
          "wear_hat",
          "wash_hands"
        ]
      },
      {
        "id": "daily_l2_03",
        "sentence": "She is brushing her teeth.",
        "zh": "她正在刷牙。",
        "correct": "brush_teeth",
        "choices": [
          "brush_teeth",
          "wash_hands",
          "milk_drink",
          "close_window"
        ]
      },
      {
        "id": "daily_l2_04",
        "sentence": "He is washing his hands.",
        "zh": "他正在洗手。",
        "correct": "wash_hands",
        "choices": [
          "wash_hands",
          "brush_teeth",
          "cook_food",
          "open_door"
        ]
      },
      {
        "id": "daily_l2_05",
        "sentence": "Open the door.",
        "zh": "打开门。",
        "correct": "open_door",
        "choices": [
          "open_door",
          "close_window",
          "door_beside_window",
          "bag_near_chair"
        ]
      },
      {
        "id": "daily_l2_06",
        "sentence": "Close the window.",
        "zh": "关上窗户。",
        "correct": "close_window",
        "choices": [
          "close_window",
          "open_door",
          "door_beside_window",
          "cat_blue_bed"
        ]
      },
      {
        "id": "daily_l2_07",
        "sentence": "Put on the hat.",
        "zh": "戴上帽子。",
        "correct": "wear_hat",
        "choices": [
          "wear_hat",
          "brush_teeth",
          "wash_hands",
          "boy_run"
        ]
      },
      {
        "id": "daily_l2_08",
        "sentence": "The child plays in the rain.",
        "zh": "孩子在雨中玩。",
        "correct": "rain_play",
        "choices": [
          "rain_play",
          "snow_touch",
          "windy_kite",
          "fish_swim"
        ]
      },
      {
        "id": "daily_l2_09",
        "sentence": "The child touches the snow.",
        "zh": "孩子摸雪。",
        "correct": "snow_touch",
        "choices": [
          "snow_touch",
          "rain_play",
          "star_count",
          "milk_drink"
        ]
      },
      {
        "id": "daily_l2_10",
        "sentence": "The kite is in the wind.",
        "zh": "风筝在风中。",
        "correct": "windy_kite",
        "choices": [
          "windy_kite",
          "bird_fly",
          "yellow_sun",
          "green_tree"
        ]
      },
      {
        "id": "daily_l2_11",
        "sentence": "Count the stars.",
        "zh": "数星星。",
        "correct": "star_count",
        "choices": [
          "star_count",
          "yellow_sun",
          "close_window",
          "snow_touch"
        ]
      },
      {
        "id": "daily_l2_12",
        "sentence": "The ball is red.",
        "zh": "球是红色的。",
        "correct": "red_ball",
        "choices": [
          "red_ball",
          "apple_red",
          "blue_bag",
          "green_tree"
        ]
      },
      {
        "id": "daily_l2_13",
        "sentence": "The bag is blue.",
        "zh": "书包是蓝色的。",
        "correct": "blue_bag",
        "choices": [
          "blue_bag",
          "red_ball",
          "banana_yellow",
          "wear_hat"
        ]
      },
      {
        "id": "daily_l2_14",
        "sentence": "The tree is green.",
        "zh": "树是绿色的。",
        "correct": "green_tree",
        "choices": [
          "green_tree",
          "yellow_sun",
          "blue_bag",
          "apple_red"
        ]
      },
      {
        "id": "daily_l2_15",
        "sentence": "The sun is yellow.",
        "zh": "太阳是黄色的。",
        "correct": "yellow_sun",
        "choices": [
          "yellow_sun",
          "green_tree",
          "red_ball",
          "snow_touch"
        ]
      }
    ],
    "choiceCount": 4
  },
  {
    "id": "colors-1",
    "topic": "Colors",
    "level": "L2",
    "name": "颜色形状进阶",
    "items": [
      {
        "id": "colors_l2_01",
        "sentence": "The red ball is small.",
        "zh": "红球很小。",
        "correct": "red_ball_small",
        "choices": [
          "red_ball_small",
          "blue_bag_big",
          "green_tree_tall",
          "yellow_sun_bright"
        ]
      },
      {
        "id": "colors_l2_02",
        "sentence": "The blue bag is big.",
        "zh": "蓝色书包很大。",
        "correct": "blue_bag_big",
        "choices": [
          "blue_bag_big",
          "red_ball_small",
          "banana_long_yellow",
          "apple_red_round"
        ]
      },
      {
        "id": "colors_l2_03",
        "sentence": "The green tree is tall.",
        "zh": "绿色的树很高。",
        "correct": "green_tree_tall",
        "choices": [
          "green_tree_tall",
          "yellow_sun_bright",
          "red_ball_small",
          "blue_bag_big"
        ]
      },
      {
        "id": "colors_l2_04",
        "sentence": "The yellow sun is bright.",
        "zh": "黄色的太阳很亮。",
        "correct": "yellow_sun_bright",
        "choices": [
          "yellow_sun_bright",
          "green_tree_tall",
          "snow_white",
          "blue_bag_big"
        ]
      },
      {
        "id": "colors_l2_05",
        "sentence": "The apple is red and round.",
        "zh": "苹果又红又圆。",
        "correct": "apple_red_round",
        "choices": [
          "apple_red_round",
          "banana_long_yellow",
          "red_ball_small",
          "cake_sweet"
        ]
      },
      {
        "id": "colors_l2_06",
        "sentence": "The banana is long and yellow.",
        "zh": "香蕉又长又黄。",
        "correct": "banana_long_yellow",
        "choices": [
          "banana_long_yellow",
          "apple_red_round",
          "yellow_sun_bright",
          "blue_bag_big"
        ]
      },
      {
        "id": "colors_l2_07",
        "sentence": "The milk is white.",
        "zh": "牛奶是白色的。",
        "correct": "milk_white_cup",
        "choices": [
          "milk_white_cup",
          "snow_white",
          "yellow_sun_bright",
          "red_ball_small"
        ]
      },
      {
        "id": "colors_l2_08",
        "sentence": "The fish is blue.",
        "zh": "鱼是蓝色的。",
        "correct": "fish_blue",
        "choices": [
          "fish_blue",
          "blue_bag_big",
          "yellow_sun_bright",
          "green_tree_tall"
        ]
      },
      {
        "id": "colors_l2_09",
        "sentence": "The snow is white.",
        "zh": "雪是白色的。",
        "correct": "snow_white",
        "choices": [
          "snow_white",
          "milk_white_cup",
          "weather_raining",
          "yellow_sun_bright"
        ]
      },
      {
        "id": "colors_l2_10",
        "sentence": "The star is yellow.",
        "zh": "星星是黄色的。",
        "correct": "star_yellow",
        "choices": [
          "star_yellow",
          "yellow_sun_bright",
          "red_ball_small",
          "green_tree_tall"
        ]
      },
      {
        "id": "colors_l2_11",
        "sentence": "The cake is sweet.",
        "zh": "蛋糕是甜的。",
        "correct": "cake_sweet",
        "choices": [
          "cake_sweet",
          "banana_long_yellow",
          "milk_white_cup",
          "apple_red_round"
        ]
      },
      {
        "id": "colors_l2_12",
        "sentence": "The bag is next to the ball.",
        "zh": "书包在球旁边。",
        "correct": "bag_next_ball",
        "choices": [
          "bag_next_ball",
          "blue_bag_big",
          "red_ball_small",
          "bag_beside_chair"
        ]
      },
      {
        "id": "colors_l2_13",
        "sentence": "The green tree is outside.",
        "zh": "绿色的树在外面。",
        "correct": "tree_outside_green",
        "choices": [
          "tree_outside_green",
          "green_tree_tall",
          "door_beside_window",
          "cat_blue_bed"
        ]
      },
      {
        "id": "colors_l2_14",
        "sentence": "The white milk is in the cup.",
        "zh": "白色牛奶在杯子里。",
        "correct": "milk_white_cup",
        "choices": [
          "milk_white_cup",
          "cake_sweet",
          "apple_red_round",
          "banana_long_yellow"
        ]
      },
      {
        "id": "colors_l2_15",
        "sentence": "The cat is on a blue bed.",
        "zh": "猫在蓝色床上。",
        "correct": "cat_blue_bed",
        "choices": [
          "cat_blue_bed",
          "cat_sits_on_bed",
          "dog_below_table",
          "blue_bag_big"
        ]
      }
    ],
    "choiceCount": 4
  },
  {
    "id": "places-1",
    "topic": "Places",
    "level": "L2",
    "name": "位置空间进阶",
    "items": [
      {
        "id": "places_l2_01",
        "sentence": "The cat sits on the bed.",
        "zh": "猫坐在床上。",
        "correct": "cat_sits_on_bed",
        "choices": [
          "cat_sits_on_bed",
          "dog_below_table",
          "rabbit_sits_in_box",
          "bag_beside_chair"
        ]
      },
      {
        "id": "places_l2_02",
        "sentence": "The dog is below the table.",
        "zh": "狗在桌子下面。",
        "correct": "dog_below_table",
        "choices": [
          "dog_below_table",
          "cat_sits_on_bed",
          "bag_beside_chair",
          "rabbit_sits_in_box"
        ]
      },
      {
        "id": "places_l2_03",
        "sentence": "The rabbit sits in the box.",
        "zh": "兔子坐在盒子里。",
        "correct": "rabbit_sits_in_box",
        "choices": [
          "rabbit_sits_in_box",
          "bag_beside_chair",
          "cat_sits_on_bed",
          "bird_near_cloud_new"
        ]
      },
      {
        "id": "places_l2_04",
        "sentence": "The bag is beside the chair.",
        "zh": "书包在椅子旁边。",
        "correct": "bag_beside_chair",
        "choices": [
          "bag_beside_chair",
          "blue_bag_big",
          "door_beside_window",
          "rabbit_sits_in_box"
        ]
      },
      {
        "id": "places_l2_05",
        "sentence": "The apple sits in the basket.",
        "zh": "苹果在篮子里。",
        "correct": "apple_in_basket_new",
        "choices": [
          "apple_in_basket_new",
          "banana_on_table_new",
          "cake_on_plate_new",
          "rabbit_sits_in_box"
        ]
      },
      {
        "id": "places_l2_06",
        "sentence": "The banana sits on the table.",
        "zh": "香蕉在桌子上。",
        "correct": "banana_on_table_new",
        "choices": [
          "banana_on_table_new",
          "dog_below_table",
          "bag_beside_chair",
          "cat_sits_on_bed"
        ]
      },
      {
        "id": "places_l2_07",
        "sentence": "The cake sits on the plate.",
        "zh": "蛋糕在盘子上。",
        "correct": "cake_on_plate_new",
        "choices": [
          "cake_on_plate_new",
          "apple_in_basket_new",
          "banana_on_table_new",
          "red_ball_small"
        ]
      },
      {
        "id": "places_l2_08",
        "sentence": "The bird flies near the cloud.",
        "zh": "鸟在云朵附近飞。",
        "correct": "bird_near_cloud_new",
        "choices": [
          "bird_near_cloud_new",
          "yellow_sun_bright",
          "tree_outside_green",
          "child_stands_rain"
        ]
      },
      {
        "id": "places_l2_09",
        "sentence": "The fish swims in the water.",
        "zh": "鱼在水里游。",
        "correct": "fish_swims_water",
        "choices": [
          "fish_swims_water",
          "fish_blue",
          "bird_near_cloud_new",
          "child_stands_rain"
        ]
      },
      {
        "id": "places_l2_10",
        "sentence": "The kite flies in the wind.",
        "zh": "风筝在风中飞。",
        "correct": "kite_flies_wind",
        "choices": [
          "kite_flies_wind",
          "bird_near_cloud_new",
          "yellow_sun_bright",
          "tree_outside_green"
        ]
      },
      {
        "id": "places_l2_11",
        "sentence": "The child stands in the rain.",
        "zh": "孩子站在雨中。",
        "correct": "child_stands_rain",
        "choices": [
          "child_stands_rain",
          "child_stands_snow",
          "kite_flies_wind",
          "fish_swims_water"
        ]
      },
      {
        "id": "places_l2_12",
        "sentence": "The child stands in the snow.",
        "zh": "孩子站在雪中。",
        "correct": "child_stands_snow",
        "choices": [
          "child_stands_snow",
          "child_stands_rain",
          "star_in_sky",
          "milk_white_cup"
        ]
      },
      {
        "id": "places_l2_13",
        "sentence": "The star is in the sky.",
        "zh": "星星在天空中。",
        "correct": "star_in_sky",
        "choices": [
          "star_in_sky",
          "yellow_sun_bright",
          "door_beside_window",
          "child_stands_snow"
        ]
      },
      {
        "id": "places_l2_14",
        "sentence": "The bag is near the chair.",
        "zh": "书包在椅子附近。",
        "correct": "bag_near_chair",
        "choices": [
          "bag_near_chair",
          "bag_beside_chair",
          "blue_bag_big",
          "red_ball_small"
        ]
      },
      {
        "id": "places_l2_15",
        "sentence": "The door is beside the window.",
        "zh": "门在窗户旁边。",
        "correct": "door_beside_window",
        "choices": [
          "door_beside_window",
          "bag_beside_chair",
          "rabbit_sits_in_box",
          "cat_sits_on_bed"
        ]
      }
    ],
    "choiceCount": 4
  },
  {
    "id": "weather-1",
    "topic": "Weather",
    "level": "L2",
    "name": "天气自然进阶",
    "items": [
      {
        "id": "weather_l2_01",
        "sentence": "It is raining.",
        "zh": "正在下雨。",
        "correct": "weather_raining",
        "choices": [
          "weather_raining",
          "weather_snowing",
          "weather_windy",
          "sun_bright_weather"
        ]
      },
      {
        "id": "weather_l2_02",
        "sentence": "It is snowing.",
        "zh": "正在下雪。",
        "correct": "weather_snowing",
        "choices": [
          "weather_snowing",
          "weather_raining",
          "stars_in_sky",
          "milk_white_cup"
        ]
      },
      {
        "id": "weather_l2_03",
        "sentence": "It is windy.",
        "zh": "刮风了。",
        "correct": "weather_windy",
        "choices": [
          "weather_windy",
          "weather_raining",
          "bird_in_sky",
          "tree_tall_weather"
        ]
      },
      {
        "id": "weather_l2_04",
        "sentence": "The sun is bright.",
        "zh": "太阳很亮。",
        "correct": "sun_bright_weather",
        "choices": [
          "sun_bright_weather",
          "tree_tall_weather",
          "red_ball_small",
          "snow_cold"
        ]
      },
      {
        "id": "weather_l2_05",
        "sentence": "The tree is tall.",
        "zh": "树很高。",
        "correct": "tree_tall_weather",
        "choices": [
          "tree_tall_weather",
          "sun_bright_weather",
          "blue_bag_big",
          "apple_red_round"
        ]
      },
      {
        "id": "weather_l2_06",
        "sentence": "The bird is in the sky.",
        "zh": "鸟在天空中。",
        "correct": "bird_in_sky",
        "choices": [
          "bird_in_sky",
          "fish_in_water_weather",
          "cat_sits_on_bed",
          "dog_under_sun"
        ]
      },
      {
        "id": "weather_l2_07",
        "sentence": "The fish is in water.",
        "zh": "鱼在水里。",
        "correct": "fish_in_water_weather",
        "choices": [
          "fish_in_water_weather",
          "weather_raining",
          "weather_snowing",
          "apple_in_basket_new"
        ]
      },
      {
        "id": "weather_l2_08",
        "sentence": "The cloud is near the bird.",
        "zh": "云朵在鸟附近。",
        "correct": "cloud_near_bird",
        "choices": [
          "cloud_near_bird",
          "sun_bright_weather",
          "tree_tall_weather",
          "weather_raining"
        ]
      },
      {
        "id": "weather_l2_09",
        "sentence": "The child has an umbrella.",
        "zh": "孩子有一把伞。",
        "correct": "child_has_umbrella",
        "choices": [
          "child_has_umbrella",
          "weather_snowing",
          "wear_hat",
          "door_beside_window"
        ]
      },
      {
        "id": "weather_l2_10",
        "sentence": "The kite is high.",
        "zh": "风筝飞得很高。",
        "correct": "kite_high",
        "choices": [
          "kite_high",
          "bird_in_sky",
          "sun_bright_weather",
          "tree_tall_weather"
        ]
      },
      {
        "id": "weather_l2_11",
        "sentence": "The stars are in the sky.",
        "zh": "星星在天空中。",
        "correct": "stars_in_sky",
        "choices": [
          "stars_in_sky",
          "sun_bright_weather",
          "door_beside_window",
          "weather_snowing"
        ]
      },
      {
        "id": "weather_l2_12",
        "sentence": "The snow is cold.",
        "zh": "雪很冷。",
        "correct": "snow_cold",
        "choices": [
          "snow_cold",
          "rain_wet",
          "milk_white_cup",
          "sun_hot"
        ]
      },
      {
        "id": "weather_l2_13",
        "sentence": "The rain is wet.",
        "zh": "雨是湿的。",
        "correct": "rain_wet",
        "choices": [
          "rain_wet",
          "wash_hands",
          "fish_in_water_weather",
          "snow_cold"
        ]
      },
      {
        "id": "weather_l2_14",
        "sentence": "The sun is hot.",
        "zh": "太阳很热。",
        "correct": "sun_hot",
        "choices": [
          "sun_hot",
          "cake_sweet",
          "snow_cold",
          "tree_tall_weather"
        ]
      },
      {
        "id": "weather_l2_15",
        "sentence": "The tree is outside.",
        "zh": "树在外面。",
        "correct": "tree_outside_weather",
        "choices": [
          "tree_outside_weather",
          "door_beside_window",
          "cat_blue_bed",
          "tree_tall_weather"
        ]
      }
    ],
    "choiceCount": 4
  }
];

  window.ENGLISH_LISTENING_DATA = {
    KIDS,
    GENERATED_IMAGES,
    VOICE_PROFILES,
    DEFAULT_VOICE_PROFILE,
    VISUALS,
    LESSONS
  };
})();
