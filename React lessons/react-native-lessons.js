/**
 * ============================================================
 *  FOUNDRY — React Native Lesson Outlines (Reference Copy)
 *  Source of truth: index.html > const REACT_NATIVE_LESSONS
 * ============================================================
 *
 *  Level 9 · React Native & Mobile Apps
 *  Icon: 📱  Color: #06B6D4  Status: available
 *  Sandbox mode: "react-native" (iPhone virtual device)
 * ============================================================
 */

const REACT_NATIVE_LESSONS = [

  // ─── LESSON 1 ─────────────────────────────────────────────
  {
    id: "rn-intro-core",
    title: "What is React Native? Native Mobile Architecture",
    goal: "Understand how React Native compiles JavaScript and React components into real native iOS and Android user interface widgets.",
    simple: "React Native is an open-source mobile app framework created by Meta. It lets you build iOS and Android apps using React and JavaScript — but instead of rendering HTML in a browser, it directly creates real native UI components like UIView (iOS) and View (Android).",
    analogy: "React Native is like a universal translator between JavaScript and two foreign languages (iOS and Android). You write your instructions once in JavaScript, and React Native's bridge instantly translates them into native commands both operating systems understand perfectly.",
    syntax: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#F8FAFC' }
});`,
    quiz: [
      { q: "Who created React Native?", opts: ["Google", "Microsoft", "Meta (Facebook)", "Apple"], a: 2 },
      { q: "What does React Native render instead of HTML?", opts: ["HTML DOM elements", "WebView HTML", "Real native UI widgets", "SVG elements"], a: 2 },
      { q: "Which language do you write React Native apps in?", opts: ["Swift", "Kotlin", "Java", "JavaScript with JSX"], a: 3 }
    ]
  },

  // ─── LESSON 2 ─────────────────────────────────────────────
  {
    id: "rn-primitives-styling",
    title: "Core Primitives: View, Text, Image & StyleSheet",
    goal: "Master React Native's four core building blocks — View, Text, Image, and StyleSheet — and understand how they replace HTML elements.",
    simple: "React Native has its own set of UI primitives that map to native UI elements. View is like a <div>, Text is like <p> or <span>, Image loads pictures, and StyleSheet.create() is how you define CSS-like styles in JavaScript objects.",
    analogy: "If HTML is LEGO® City bricks, React Native primitives are LEGO® Technic — they look similar but they're purpose-built for a different, more powerful machine (native mobile). You need to use the right bricks for the right system.",
    syntax: `import { View, Text, Image, StyleSheet } from 'react-native';

// View = layout container (like <div>)
<View style={styles.card}>

  // Text = all visible text (like <p>, <span>, <h1>)
  <Text style={styles.heading}>React Native</Text>

  // Image = pictures from URL or local asset
  <Image
    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    style={{ width: 50, height: 50 }}
  />
</View>`,
    quiz: [
      { q: "Which React Native component is used to display text?", opts: ["<p>", "<Label>", "<Text>", "<Paragraph>"], a: 2 },
      { q: "What is the React Native equivalent of a <div>?", opts: ["<Container>", "<Box>", "<Section>", "<View>"], a: 3 },
      { q: "How do you define styles in React Native?", opts: ["Using .css files", "Inline HTML style attributes", "StyleSheet.create() with JS objects", "Sass variables"], a: 2 }
    ]
  },

  // ─── LESSON 3 ─────────────────────────────────────────────
  {
    id: "rn-flexbox-layout",
    title: "Flexbox Layout System for Mobile",
    goal: "Master React Native's Flexbox layout system and understand how it differs from CSS Flexbox to build responsive mobile screens.",
    simple: "React Native uses Flexbox as its only layout system — there's no CSS grid or floats. Key differences: flexDirection defaults to 'column' (not 'row'), and all dimensions are unitless numbers (not px or %). Flex: 1 tells a component to fill all available space.",
    analogy: "Flexbox in React Native is like arranging items in a shipping container. You define whether items go left-right (row) or top-bottom (column), whether they stack tightly or spread evenly, and how much space each box claims. Flex: 1 is like saying 'take whatever space is left'.",
    syntax: `const styles = StyleSheet.create({
  screen: {
    flex: 1,               // fill entire screen
    flexDirection: 'column', // default: top to bottom
    justifyContent: 'center', // main axis alignment
    alignItems: 'center',    // cross axis alignment
    backgroundColor: '#0B0F17',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  }
});`,
    quiz: [
      { q: "What is the default flexDirection in React Native?", opts: ["row", "row-reverse", "column", "column-reverse"], a: 2 },
      { q: "What does flex: 1 mean on a React Native component?", opts: ["Font size of 1", "Width of 1px", "Take all remaining available space", "Opacity of 1"], a: 2 },
      { q: "Which prop controls alignment along the MAIN axis in Flexbox?", opts: ["alignItems", "alignSelf", "justifyContent", "flexAlign"], a: 2 }
    ]
  },

  // ─── LESSON 4 ─────────────────────────────────────────────
  {
    id: "rn-touchables-inputs",
    title: "Touchables, Pressable & TextInput",
    goal: "Handle user interaction in React Native using TouchableOpacity, Pressable, and TextInput with controlled state.",
    simple: "React Native doesn't use HTML buttons or input fields. Instead, you wrap any component in TouchableOpacity or Pressable to make it tappable. TextInput is the mobile equivalent of <input> — you control its value with React state using onChangeText.",
    analogy: "TouchableOpacity is like a physical button with a press animation — when you push it down, it visually depresses (dims to 60% opacity) and springs back on release. TextInput is like a sticky note on your phone screen — what you type on it is immediately remembered by your app's state.",
    syntax: `const [name, setName] = React.useState('');

<TouchableOpacity
  style={styles.btn}
  onPress={() => alert('Tapped!')}
  activeOpacity={0.7}
>
  <Text>Tap Me</Text>
</TouchableOpacity>

<TextInput
  style={styles.input}
  value={name}
  onChangeText={setName}
  placeholder="Type your name..."
  placeholderTextColor="#64748B"
/>`,
    quiz: [
      { q: "What React Native component makes any element tappable?", opts: ["<button>", "<Clickable>", "<TouchableOpacity>", "<TapArea>"], a: 2 },
      { q: "Which prop on TextInput fires when the user types?", opts: ["onChange", "onType", "onChangeText", "onInput"], a: 2 },
      { q: "What does activeOpacity={0.6} do on TouchableOpacity?", opts: ["Sets font opacity", "Dims the element to 60% when pressed", "Makes background 60% transparent", "Sets animation speed"], a: 1 }
    ]
  },

  // ─── LESSON 5 ─────────────────────────────────────────────
  {
    id: "rn-scroll-flatlist",
    title: "ScrollView & FlatList for Dynamic Data",
    goal: "Render scrollable content and efficiently display large dynamic lists using ScrollView and FlatList with proper key extraction.",
    simple: "Mobile screens are small — content always overflows. ScrollView wraps any content to make it scrollable. FlatList is more powerful: it's optimized for large lists, only renders visible items (virtualization), and maps over an array of data with a renderItem function.",
    analogy: "ScrollView is like a paper scroll — everything is rendered at once and you roll through it. FlatList is like a smart teleprompter — it only shows the lines currently on screen and pre-loads the next few, saving memory and keeping scroll buttery smooth even with 10,000 items.",
    syntax: `// FlatList — best for long dynamic lists
<FlatList
  data={users}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.role}>{item.role}</Text>
    </View>
  )}
/>`,
    quiz: [
      { q: "Which component is optimized for rendering large lists efficiently?", opts: ["ScrollView", "ListView", "FlatList", "VirtualList"], a: 2 },
      { q: "What prop does FlatList use to identify each list item uniquely?", opts: ["key", "id", "keyExtractor", "itemKey"], a: 2 },
      { q: "When should you prefer FlatList over ScrollView?", opts: ["For static short content", "For large or dynamic data arrays", "For horizontal images only", "For forms and inputs"], a: 1 }
    ]
  },

  // ─── LESSON 6 ─────────────────────────────────────────────
  {
    id: "rn-full-mobile-app",
    title: "Building a Complete Mobile App",
    goal: "Combine all React Native concepts — components, state, Flexbox, FlatList, and touch handling — into a fully functional mobile application.",
    simple: "A production React Native app composes many smaller components together: a screen layout with Flexbox, a FlatList for data, state management with useState, and touch handlers for interaction. This final lesson brings it all together in one complete, working app.",
    analogy: "Building a complete app is like assembling a car. You've learned the engine (state), the chassis (Flexbox), the wheels (FlatList), and the steering wheel (touch events). Now you bolt them all together — and for the first time, the car actually drives.",
    syntax: `export default function App() {
  const [tasks, setTasks] = React.useState([
    { id: '1', title: 'Learn React Native', done: true },
    { id: '2', title: 'Build a Mobile App', done: false },
  ]);
  const [input, setInput] = React.useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now().toString(), title: input, done: false }]);
    setInput('');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.done ? '✅' : '○'} {item.title}</Text>
        )}
      />
      <TextInput value={input} onChangeText={setInput} placeholder="New task..." />
      <TouchableOpacity onPress={addTask}>
        <Text>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}`,
    quiz: [
      { q: "Which React hook is used to manage component state in React Native?", opts: ["useEffect", "useContext", "useState", "useRef"], a: 2 },
      { q: "How do you add a new item to a state array without mutating it?", opts: ["array.push(item)", "setState(array)", "setState([...array, item])", "array.add(item)"], a: 2 },
      { q: "What does .trim() do when validating TextInput before adding a task?", opts: ["Converts to uppercase", "Removes leading/trailing whitespace", "Limits character count", "Formats as JSON"], a: 1 }
    ]
  }

];

module.exports = REACT_NATIVE_LESSONS;
