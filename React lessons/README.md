# React Native & Mobile Apps — Lesson Reference

These files document all 6 React Native lessons built into **Foundry** (`index.html`).
The lessons live in the `REACT_NATIVE_LESSONS` array and are loaded under **Level 9**.

---

## Lesson Map

| # | ID | Title |
|---|----|-------|
| 1 | `rn-intro-core` | What is React Native? Native Mobile Architecture |
| 2 | `rn-primitives-styling` | Core Primitives: View, Text, Image & StyleSheet |
| 3 | `rn-flexbox-layout` | Flexbox Layout System for Mobile |
| 4 | `rn-touchables-inputs` | Touchables, Pressable & TextInput |
| 5 | `rn-scroll-flatlist` | ScrollView & FlatList for Dynamic Data |
| 6 | `rn-full-mobile-app` | Building a Complete Mobile App |

---

## Virtual Device Sandbox

Each lesson uses `mode: "react-native"` in its playground config.

The in-browser React Native sandbox includes:
- 🖥️ **Realistic iPhone frame** with Dynamic Island, status bar, and home indicator
- ⚛️ **React 18 + Babel** loaded via CDN (JSX support included)
- **Mapped Components**: `View`, `Text`, `TouchableOpacity`, `Pressable`, `TextInput`, `Image`, `FlatList`, `StyleSheet`
- Flexbox layout is auto-mapped from React Native units → CSS px
- Any exported `App` component renders live inside the phone screen

---

## How to Edit Lessons

Open `index.html` and find:

```js
const REACT_NATIVE_LESSONS = [
  L("rn-intro-core", "What is React Native?...", { ... }),
  ...
];
```

Each lesson follows the standard `L()` format with these fields:
`goal`, `simple`, `analogy`, `syntaxLabel`, `syntax`, `example`, `exampleNote`,
`lines`, `tryIt`, `mistakes`, `quiz`, `challenge`, `next`, `playground`

The playground JS code renders a React component that shows live inside the phone frame.
