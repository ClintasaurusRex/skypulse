# Typography and Intro to Flexbox

## Typography Basics

Typography is more than choosing a font.

Some of the main CSS properties that control text are:

```text
font-family
font-size
font-weight
line-height
```

Mental model:

```text
font-family
= what the letters look like

font-size
= how large the letters are

font-weight
= how thick/bold the letters are

line-height
= vertical breathing room between lines
```

---

# `font-size`

`font-size` controls the size of text.

Example:

```css
.title {
  font-size: 3rem;
}
```

In this case, the SKYPULSE heading is given a font size of `3rem`.

---

# `rem`

`rem` is a relative CSS unit.

It means:

```text
root em
```

A `rem` value is relative to the font size of the root HTML element.

The browser default root font size is usually:

```text
16px
```

So approximately:

```text
1rem = 16px
2rem = 32px
3rem = 48px
4rem = 64px
```

Example:

```css
.title {
  font-size: 3rem;
}
```

With a 16px root font size:

```text
3 × 16px = 48px
```

---

# `rem` vs `em`

These should not be confused.

```text
rem
= relative to the root font size

em
= relative to the current/parent font-size context
```

`rem` is often easier to reason about because it gives typography a consistent reference point.

---

# Why Use `rem` for Typography?

One advantage is accessibility.

If a user changes their preferred browser font size, text sized using `rem` can scale with that preference.

For example:

```css
font-size: 2rem;
```

If the root size is:

```text
16px
```

then the text is approximately:

```text
32px
```

If the user's root font size becomes:

```text
20px
```

then:

```text
2rem = 40px
```

This makes relative typography more adaptable than relying entirely on fixed sizes.

---

# Browser Zoom vs Root Font Size

Browser zoom generally makes everything visually larger, including elements using `px`.

The particular benefit of `rem` is that it is tied to the document's root font size and therefore works well with user font-size preferences.

---

# `font-weight`

`font-weight` controls how thick or bold text appears.

Example:

```css
.title {
  font-weight: 700;
}
```

Common values include:

```text
400 = normal
500 = medium
600 = semi-bold
700 = bold
800 = very bold
```

Not every font contains every possible weight.

The browser can only use the weights that the chosen font supports.

---

# `line-height`

`line-height` controls the vertical distance between lines of text.

Example:

```css
.title {
  line-height: 1.1;
}
```

For large headings, tighter line heights often work well:

```css
line-height: 1.1;
```

Body text usually needs more breathing room:

```css
line-height: 1.5;
```

or:

```css
line-height: 1.6;
```

Mental model:

```text
font-size
= letter size

line-height
= space each line of text gets vertically
```

Example:

```css
.title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
}
```

---

# `font-family`

`font-family` chooses which font the browser should use.

Example:

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

This is called a font stack.

The browser works from left to right:

```text
Try Arial
   ↓
If unavailable, try Helvetica
   ↓
If unavailable, use a generic sans-serif font
```

---

# Font Inheritance

`font-family` normally inherits.

That means setting it on:

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

allows most text inside the page to inherit the same font automatically.

We usually do not need to assign the font separately to every heading, paragraph, label, etc.

---

# Browser Default Heading and Paragraph Margins

Browsers automatically give elements like:

```html
<h1>
  <h2>
    <p></p>
  </h2>
</h1>
```

some default spacing.

For example, an `<h1>` normally has top and bottom margin even if we did not write any CSS ourselves.

We can take control of that spacing:

```css
.title {
  margin: 0;
}
```

This removes the browser's default margin from the title.

Mental model:

```text
browser default margin
= spacing chosen by the browser

our margin
= spacing intentionally chosen by us
```

---

# Margin Shorthand

CSS allows several margin values to be written in shorthand.

## One value

```css
margin: 1rem;
```

means:

```text
top    = 1rem
right  = 1rem
bottom = 1rem
left   = 1rem
```

So one value applies to all four sides.

---

## Two values

```css
margin: 1rem 0;
```

means:

```text
top/bottom = 1rem
left/right = 0
```

Think:

```text
margin: vertical horizontal;
```

This is useful when we want spacing above and below something without adding horizontal spacing.

Example:

```css
.title-text {
  margin: 1rem 0;
}
```

---

## Four values

```css
margin: 1rem 2rem 3rem 4rem;
```

means:

```text
top    = 1rem
right  = 2rem
bottom = 3rem
left   = 4rem
```

The order moves clockwise:

```text
          top
           ↓
left ← element → right
           ↓
         bottom
```

Remember:

```text
top → right → bottom → left
```

---

# `text-align`

`text-align` controls the alignment of inline content such as text.

Example:

```css
.header {
  text-align: center;
}
```

This centers text and inline content inside the header.

It is different from:

```css
margin: 0 auto;
```

These solve two different problems.

```text
margin: 0 auto
= center the element itself

text-align: center
= center text/inline content inside the element
```

Example:

```css
.header {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
```

Here:

```text
margin: 0 auto
centers the header box

text-align: center
centers the text inside the header
```

---

# Current Header Example

During our experiments, our header has contained CSS similar to:

```css
.header {
  color: wheat;

  padding: 50px;

  border: 2px solid wheat;

  width: 100%;
  max-width: 700px;

  margin: 0 auto;

  min-height: 200px;

  text-align: center;
}
```

The goal right now is not to create the final SKYPULSE design.

We are using the header as a controlled area for learning how CSS behaves.

---

# Flexbox

Flexbox is a CSS layout system designed for arranging items along an axis.

To turn an element into a flex container:

```css
form {
  display: flex;
}
```

The element with:

```css
display: flex;
```

becomes the:

```text
flex container
```

Its direct children become:

```text
flex items
```

---

# Flex Container vs Flex Items

For our search form:

```html
<form>
  <label>Search</label>
  <input />
  <button>Search</button>
</form>
```

after writing:

```css
form {
  display: flex;
}
```

the structure becomes:

```text
form
= flex container

│
├── label
│   = flex item
│
├── input
│   = flex item
│
└── button
    = flex item
```

The parent controls the layout of its direct children.

This parent-child relationship is extremely important when using Flexbox.

---

# Default Flex Direction

By default:

```css
flex-direction: row;
```

is used.

That means the items are placed horizontally:

```text
[label] [input] [button]
```

The main axis points:

```text
→
```

---

# Main Axis and Cross Axis

Flexbox has two important directions:

```text
main axis
cross axis
```

With the default:

```css
flex-direction: row;
```

the axes are:

```text
main axis  → horizontal

cross axis ↓ vertical
```

Visual:

```text
          cross axis
              ↓

[label] → [input] → [button]

      main axis →
```

Understanding these axes makes Flexbox much easier to understand.

---

# `gap`

`gap` creates space between flex items.

Example:

```css
form {
  display: flex;
  gap: 1rem;
}
```

Result:

```text
[label]   1rem   [input]   1rem   [button]
```

This is often cleaner than putting separate margins on every child.

Instead of:

```css
label {
  margin-right: 1rem;
}

input {
  margin-right: 1rem;
}
```

we can let the parent handle the spacing:

```css
form {
  display: flex;
  gap: 1rem;
}
```

Mental model:

```text
margin
= an element controls its own outside spacing

gap
= a parent controls spacing between its children
```

---

# `justify-content`

`justify-content` controls alignment along the **main axis**.

Our form uses the default:

```css
flex-direction: row;
```

So the main axis is horizontal.

Using:

```css
justify-content: center;
```

therefore centers the flex items horizontally.

Example:

```css
form {
  display: flex;
  justify-content: center;
}
```

Visual:

```text
┌──────────────────────────────────┐
│     [label] [input] [button]     │
└──────────────────────────────────┘
```

---

# `align-items`

`align-items` controls alignment along the **cross axis**.

Because our form uses:

```css
flex-direction: row;
```

the cross axis is vertical.

Using:

```css
align-items: center;
```

lines the flex items up vertically.

Example:

```css
form {
  display: flex;
  align-items: center;
}
```

Mental model:

```text
justify-content
= main axis

align-items
= cross axis
```

With a row:

```text
justify-content
= horizontal alignment

align-items
= vertical alignment
```

---

# Why `text-align: center` Was Not Enough

Our `.header` contains:

```css
text-align: center;
```

That works well for normal text and inline content.

However, once the form becomes:

```css
display: flex;
```

Flexbox becomes responsible for laying out the form's direct children.

So we use Flexbox properties such as:

```css
justify-content: center;
align-items: center;
```

to control those flex items.

Mental model:

```text
.header
│
│ text-align: center;
│
└── form
    │ display: flex;
    │
    ├── label
    ├── input
    └── button
```

The header controls its normal content.

The flex container controls its flex items.

---

# `flex-wrap`

By default, Flexbox tries to keep items on one line.

This can cause items to become cramped when the available space becomes small.

Example:

```text
[label] [input] [button]
```

Adding:

```css
flex-wrap: wrap;
```

allows flex items to move onto another line when necessary.

Example:

```text
[label] [input]
      [button]
```

The exact arrangement depends on how much room is available.

---

# Why `flex-wrap` Helps Responsive Design

Without wrapping:

```text
small screen
↓
items keep trying to stay on one row
↓
layout may become cramped
```

With:

```css
flex-wrap: wrap;
```

we allow the browser to adapt naturally:

```text
small screen
↓
not enough horizontal room
↓
items move to another line
```

This is an important responsive-design principle:

> Let the layout adapt naturally when possible before immediately reaching for media queries.

---

# Our Current Form Flexbox

Our form currently uses:

```css
form {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
```

Breaking that down:

```text
display: flex
= turn the form into a flex container

gap: 1rem
= add consistent spacing between the children

justify-content: center
= center the items along the main axis

align-items: center
= center the items along the cross axis

flex-wrap: wrap
= allow items to move onto another row if needed
```

---

# Flexbox Mental Model

Start by identifying the parent and children.

```text
PARENT
display: flex
│
├── CHILD
├── CHILD
└── CHILD
```

Then ask:

```text
What direction is the main axis?

How should items be positioned on the main axis?

How should items be positioned on the cross axis?

How much space should exist between items?

Should items be allowed to wrap?
```

That leads to properties such as:

```css
display: flex;
gap: 1rem;
justify-content: center;
align-items: center;
flex-wrap: wrap;
```

---

# Quick Flexbox Reference

```css
.container {
  display: flex;
}
```

Turns the element into a flex container.

---

```css
gap: 1rem;
```

Adds spacing between flex items.

---

```css
justify-content: center;
```

Centers items along the main axis.

---

```css
align-items: center;
```

Centers items along the cross axis.

---

```css
flex-wrap: wrap;
```

Allows items to move onto another line when space becomes limited.

---

# Axis Cheat Sheet

With:

```css
flex-direction: row;
```

which is the default:

```text
main axis
→ horizontal

cross axis
↓ vertical
```

Therefore:

```text
justify-content
= horizontal alignment

align-items
= vertical alignment
```

If we later change the direction to:

```css
flex-direction: column;
```

the axes change.

That means `justify-content` and `align-items` do not permanently mean "horizontal" and "vertical."

They mean:

```text
justify-content
= main axis

align-items
= cross axis
```

This distinction is important.

---

# New Things To Remember

```text
rem
= relative to the root font size

font-size
= size of the text

font-weight
= thickness of the text

line-height
= vertical space between lines

font-family
= which font should be used

margin: 1rem
= 1rem on every side

margin: 1rem 0
= 1rem vertically, 0 horizontally

text-align: center
= center inline/text content

display: flex
= create a flex layout

gap
= space between flex items

justify-content
= alignment along the main axis

align-items
= alignment along the cross axis

flex-wrap
= allow flex items to move onto another line
```

---

# Mini Cheat Sheet

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
}

.title-text {
  margin: 1rem 0;
}

.header {
  text-align: center;
}

form {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
```

---

# Main Lesson So Far

We are starting to move from:

```text
"I change CSS values until the page looks right."
```

toward:

```text
"I understand which CSS system controls this part of the layout,
so I know which property I should change."
```

For example:

```text
Need space inside a box?
→ padding

Need space outside a box?
→ margin

Need space between flex children?
→ gap

Need to center the whole block?
→ margin: 0 auto

Need to center text inside something?
→ text-align: center

Need to center flex items along the main axis?
→ justify-content: center

Need to line flex items up along the cross axis?
→ align-items: center

Need the layout to adapt when it becomes narrow?
→ consider flex-wrap
```

The goal is to understand **why** a CSS property works instead of memorizing random combinations of CSS.
