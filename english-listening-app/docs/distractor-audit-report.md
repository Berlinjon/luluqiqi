# 干扰项审计报告

审计日期：2026-06-29

## 检查范围

- 7 个路线关卡
- 105 道练习
- 每题 1 个正确图、3 个候选干扰图
- 当前脚本：`tools/audit-distractors.mjs`

## 当前结果

- 结构性错误：0
- 需要人工复核的干扰项：18
- 可能过近、需确认不歧义的干扰项：11

## 主要问题类型

1. 部分入门题的备选干扰项过随机。孩子在二选一时如果随机抽到远干扰项，可能不用真正听懂关键语义也能选对。
2. 部分进阶题的四选一缺少足够近的干扰项。进阶阶段应更强调颜色、位置、动作、物体之间的细微区别。
3. 少量近干扰项需要人工确认是否会造成歧义，例如位置题中两个选项都包含相同主体和参照物时，必须确保图片差异足够明显。

## 优先复核题目

### 入门动物

- `animals_l1_08`：`The bag is next to the chair.` 当前干扰项 `blue_bag`、`open_door`、`close_window` 偏随机。
- `animals_l1_09`：`The bird is near the cloud.` 当前干扰项 `yellow_sun`、`green_tree`、`rain_play` 偏随机。
- `animals_l1_10`：`The fish is in the water.` 当前干扰项 `rain_play`、`snow_touch`、`apple_red` 偏随机。
- `animals_l1_13`：`The bird is small.` 当前干扰项 `red_ball`、`banana_yellow`、`cook_food` 偏随机。
- `animals_l1_14`：`The fish is blue.` 当前干扰项 `blue_bag`、`yellow_sun`、`green_tree` 偏随机。

### 入门食物

- `food_l1_08`：`She wants milk.` 当前干扰项 `snow_touch`、`yellow_sun`、`red_ball` 偏随机。
- `food_l1_09`：`He wants cake.` 当前干扰项 `under_table`、`next_chair`、`on_bed` 偏随机。
- `food_l1_10`：`The food is hot.` 当前干扰项 `snow_touch`、`fish_swim`、`star_count` 偏随机。
- `food_l1_12`：`The cake is sweet.` 当前干扰项 `boy_run`、`dog_run`、`bird_fly` 偏随机。

### 日常进阶

- `daily_l2_05`：`Open the door.` 当前只有 `close_window` 较接近，`next_chair`、`in_box` 偏随机。
- `daily_l2_06`：`Close the window.` 当前只有 `open_door` 较接近，`star_count`、`on_bed` 偏随机。
- `daily_l2_07`：`Put on the hat.` 当前干扰项 `blue_bag`、`red_ball`、`yellow_sun` 偏随机。

### 位置空间进阶

- `places_l2_05`：`The apple sits in the basket.` 当前干扰项 `rabbit_sits_in_box`、`blue_bag_big`、`tree_outside_green` 偏随机。
- `places_l2_09`：`The fish swims in the water.` 当前干扰项 `child_stands_rain`、`child_stands_snow`、`apple_in_basket_new` 偏随机。

## 下一步建议

1. 先修 `daily_l2_05`、`daily_l2_06`、`daily_l2_07`，因为这些是进阶四选一，随机干扰项对训练质量影响更大。
2. 再修入门食物和动物中最明显的随机题。
3. 修题时优先复用已有图片 key；如果没有合适图片，再补生成图。
4. 每次改完运行：

```bash
node tools/validate-course-data.mjs
node tools/audit-distractors.mjs
```
