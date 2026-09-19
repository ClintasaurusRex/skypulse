# SKYPULSE — Lesson 02

## CSS Foundations — Notes So Far

## What We Learned

So far we have covered:

- Browser default styles
- Removing the default `body` margin
- The CSS box model
- `margin`
- `padding`
- `border`
- `width`
- `max-width`
- `height`
- `min-height`
- `box-sizing`
- `content-box`
- `border-box`
- A global `box-sizing` reset
- Centering a block with `margin: 0 auto`
- Element selectors vs class selectors
- Basic CSS inheritance

---

# Browser Default Styles

Browsers apply some CSS automatically.

For example, the `<body>` normally has a small amount of margin around it.

That is why this:

```css
body {
  margin: 0;
}
```

caused the page content to move all the way to the edges of the browser.

We are overriding the browser's default margin.

---

# The CSS Box Model

Almost every HTML element can be thought of as a rectangular box.

The box is made of four main layers:

```text
margin
└── border
    └── padding
        └── content
```

A more visual version:

```text
┌───────────────────────────────┐
│            margin             │
│   ┌───────────────────────┐   │
│   │        border         │   │
│   │   ┌───────────────┐   │   │
│   │   │    padding    │   │   │
│   │   │   ┌───────┐   │   │   │
│   │   │   │content│   │   │   │
│   │   │   └───────┘   │   │   │
│   │   └───────────────┘   │   │
│   └───────────────────────┘   │
└───────────────────────────────┘
```

---

# Margin

`margin` creates space **outside** an element's border.

Example:

```css
.header {
  margin: 20px;
}
```

This creates space between the header and the things around it.

Mental model:

```text
margin = outside space
```

---

# Padding

`padding` creates space **inside** an element.

It separates the content from the element's border.

Example:

```css
.header {
  padding: 20px;
}
```

Visual:

```text
┌─────────────────────────┐
│        padding          │
│                         │
│   SKYPULSE              │
│                         │
└─────────────────────────┘
```

Mental model:

```text
padding = inside space
```

---

# Border

A border draws the visible edge around an element.

Example:

```css
.header {
  border: 2px solid wheat;
}
```

Breakdown:

```text
2px
= border thickness

solid
= border style

wheat
= border color
```

---

# Margin vs Padding

This distinction is very important.

```text
margin
= space OUTSIDE the box

padding
= space INSIDE the box
```

Example:

```text
        margin

    ┌───────────────┐
    │    border     │
    │               │
    │   padding     │
    │               │
    │    content    │
    │               │
    └───────────────┘
```

---

# Width

A fixed width tells CSS to give an element a specific width.

Example:

```css
.header {
  width: 300px;
}
```

This tells the browser that the element should use a width of `300px`.

However, what that `300px` represents depends on `box-sizing`.

---

# content-box

The default CSS box-sizing behavior is:

```css
box-sizing: content-box;
```

With `content-box`, the specified width only applies to the **content area**.

Example:

```css
.header {
  width: 300px;
  padding: 20px;
  border: 2px solid wheat;
}
```

The actual visible width becomes:

```text
content       300px
padding-left   20px
padding-right  20px
border-left     2px
border-right    2px
-------------------
total          344px
```

So:

```text
content-box
width = content only
```

---

# border-box

Using:

```css
box-sizing: border-box;
```

changes how width is calculated.

Now:

```css
width: 300px;
```

means that the **entire visible box** should be 300px wide.

That 300px contains:

```text
border
+
padding
+
content
+
padding
+
border
```

Example:

```text
300px total width
- 40px padding
- 4px borders
----------------
256px content
```

Mental model:

```text
content-box
width = content

border-box
width = content + padding + border
```

---

# Global border-box Reset

Instead of adding `box-sizing: border-box` to every element individually, we can apply it globally.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Meaning:

```text
*
= every normal element

*::before
= every ::before pseudo-element

*::after
= every ::after pseudo-element
```

We have not learned pseudo-elements yet, but we will use them later.

This reset gives the entire application predictable sizing behavior.

---

# Our Basic Global CSS

So far our global CSS can begin with:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: rgb(54, 53, 53);
  margin: 0;
}
```

---

# width vs max-width

A fixed width says:

```css
width: 700px;
```

Meaning:

```text
Be 700px wide.
```

A maximum width says:

```css
max-width: 700px;
```

Meaning:

```text
You may become smaller,
but do not become wider than 700px.
```

This is useful for responsive layouts.

---

# width: 100% with max-width

A very useful responsive pattern is:

```css
width: 100%;
max-width: 700px;
```

This means:

```text
Use the available width
        ↓
Keep growing
        ↓
Reach 700px
        ↓
Stop growing
```

So on a smaller screen the element can shrink.

On a larger screen it will never exceed `700px`.

---

# Centering a Block Element

After an element reaches its `max-width`, it may sit against the left side of its parent.

We can center the element using:

```css
margin: 0 auto;
```

This shorthand means:

```css
margin-top: 0;
margin-right: auto;
margin-bottom: 0;
margin-left: auto;
```

The browser divides the unused horizontal space between the left and right margins.

```text
← auto → [ HEADER ] ← auto →
```

This centers the **element itself**.

It does NOT necessarily center the text inside the element.

---

# Centering an Element vs Centering Text

These solve different problems.

```css
margin: 0 auto;
```

means:

```text
center the element
```

while:

```css
text-align: center;
```

means:

```text
center text/inline content inside the element
```

Do not confuse the two.

---

# height

A fixed height says:

```css
height: 200px;
```

Meaning:

```text
Be exactly 200px tall.
```

The problem is that content may eventually require more than 200px.

If the content becomes too large, it may overflow.

---

# min-height

A minimum height says:

```css
min-height: 200px;
```

Meaning:

```text
Be AT LEAST 200px tall,
but grow if the content needs more room.
```

This is often more useful in responsive layouts.

Mental model:

```text
height
= exact size

min-height
= minimum size with permission to grow
```

---

# Flexible CSS Thinking

Instead of always forcing exact sizes:

```css
width: 700px;
height: 200px;
```

we often prefer boundaries:

```css
width: 100%;
max-width: 700px;
min-height: 200px;
```

This allows the interface to adapt to:

- different screen sizes
- changing content
- longer text
- dynamic API data
- different devices

Responsive CSS usually benefits from flexibility.

---

# Element Selectors

This CSS:

```css
header {
  color: wheat;
}
```

selects every HTML `<header>` element.

It does NOT use the class:

```jsx
<header className="header">
```

It simply means:

```text
Find every <header>.
```

---

# Class Selectors

A class selector begins with a `.`.

Example:

```css
.header {
  color: wheat;
}
```

This connects to:

```jsx
<header className="header">
```

Mental model:

```text
header
= HTML element selector

.header
= class selector
```

Classes give us more control over which specific elements are styled.

---

# CSS Inheritance

Some CSS properties naturally pass from a parent element to its children.

For example:

```css
.header {
  color: wheat;
}
```

The text inside the header will generally inherit that color.

```text
header
│
├── h1
├── p
└── form
    └── label
```

The children can inherit the parent's text color unless another rule overrides it.

Not every CSS property inherits.

For example, things such as `margin`, `padding`, and `border` do not normally inherit.

---

# Current SKYPULSE Header Concepts

Our header currently uses concepts similar to:

```css
.header {
  color: wheat;

  padding: 20px;
  border: 2px solid wheat;

  width: 100%;
  max-width: 700px;

  margin: 0 auto;

  min-height: 200px;
}
```

This is not necessarily the final SKYPULSE design.

We are currently using the header as a learning environment for understanding CSS.

---

# Things To Remember

```text
margin
= outside space

padding
= inside space

border
= edge of the box

width
= desired width

max-width
= largest allowed width

height
= exact height

min-height
= minimum height, but may grow

content-box
= width only controls content

border-box
= width includes content + padding + border

margin: 0 auto
= horizontally center a block with available extra space
```

---

# Mini Cheat Sheet

```css
/* Predictable box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove browser body spacing */
body {
  margin: 0;
}

/* Space inside */
padding: 20px;

/* Space outside */
margin: 20px;

/* Border */
border: 2px solid wheat;

/* Flexible width */
width: 100%;
max-width: 700px;

/* Center a block */
margin: 0 auto;

/* Allow vertical growth */
min-height: 200px;
```

---

# Main Mental Model

When something looks wrong in a layout, ask:

```text
Is this a content problem?
        ↓
Is this padding?
        ↓
Is this the border?
        ↓
Is this margin?
        ↓
Is the width being calculated how I expect?
        ↓
Should this be fixed-size or flexible?
```

Do not randomly change CSS values until something looks right.

Try to understand which part of the box or layout is causing the behavior.
