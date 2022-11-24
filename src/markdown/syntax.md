---
title: Code Syntax Highlighting
excerpt: Testing automatic code highlighting in Astrojs
author: MVM
image: https://org.olk1.com/picz/1642251302.jpeg
customClass: sat5
primaryLink: 
secondaryLink: 
ctaPrimary: Launch Site 
ctaSecondary: Repo
ctaPosition: center
---

```js
// Iterables and Iterators
const obj = {
  [Symbol.iterator]: function () {
    let step = 0
    const iterator = {
      next: function () {
        step++
        if (step === 1) {
          return { value: "hello", done: false }
        } else if (step === 2) {
          return { value: "world", done: false }
        }
        return { value: undefined, done: true }
      }
    }
    return iterator
  }
}

for (const word of obj) {
  console.log(word)
}
```

\
It's awesome and it works out of the box. This is epic! The hours previously spent installing packaging and configuring utility files just to share code on a blog page was insane in comparison. Another gold star for Astrojs. :)
