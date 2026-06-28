# 图片生成规范

使用技能：`gpt-image-2-style-library`

## 界面概念

选用模板：`ui-screenshot-system`

已生成概念图：

`./assets/concepts/primary-screen-concept.png`

## 题目插画

选用模板：`illustration-art-style`

通用提示词：

```text
Use case: illustration-story
Selected template: Illustration & Art Style / 插画与艺术风格
Asset type: picture-choice illustration for a children's English listening app
Primary request: 为儿童英语听力题生成一张清晰插画，孩子需要根据听到的英文短句选择这张图。
Subject and task: 画面必须准确表达句子："<替换为英文短句>"。
Composition and layout: square image, one simple scene, one clear action or object, centered subject, generous padding, no crop, no extra competing objects.
Visual style and materials: consistent flat editorial children's book illustration, warm daylight, clean shapes, soft shadows, friendly but restrained, not childish clutter.
Text and label requirements: no visible text, no letters, no captions, no watermark.
Aspect ratio and output format: 1:1 square PNG.
Constraints and negative details: avoid stock photo realism, avoid busy classroom backgrounds, avoid extra characters unless required by the sentence, avoid ambiguous actions, avoid dark lighting, avoid complex perspective, avoid text artifacts.
```

## 已生成题图

```text
The cat is sleeping.
The dog is running.
The bird is flying.
The fish is swimming.
The apple is red.
The banana is yellow.
The girl drinks milk.
The boy eats cake.
Dad is cooking.
The boy is running.
The girl is reading.
She is brushing her teeth.
He is washing his hands.
Open the door.
Close the window.
Put on the hat.
The ball is red.
The bag is blue.
The tree is green.
The sun is yellow.
The cat is on the bed.
The dog is under the table.
The rabbit is in the box.
The bag is next to the chair.
The child plays in the rain.
The child touches the snow.
The kite is in the wind.
Count the stars.
```

对应文件位于：

```text
assets/illustrations/generated/
```
