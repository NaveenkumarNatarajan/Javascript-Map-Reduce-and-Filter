# Javascript-Map-Reduce-and-Filter
Functional Programming in Javascript : map, reduce, filter and forEach

map()

Use it when: 
You want to translate/map all elements in an array to another set of values.

What it does: 
Traverses the array from left to right invoking a callback function on each element with parameters (below). For each callback the value returned becomes the element in the new array. After all elements have been traversed map() returns the new array with all the translated elements
Examples in - functional-prog-map.js
------------------------------------------------------------------------------------

reduce()

Use it when: 
You want to find a cumulative or concatenated value based on elements across the array.

What it does: 
Like map() it traverses the array from left to right invoking a callback function on each element. The value returned is the cumulative value passed from callback to callback. After all elements have been traversed reduce() returns the cumulative value
Examples in - functional-prog-reduce.js
------------------------------------------------------------------------------------

filter()

Use it when: 
You want to remove unwanted elements based on a condition

What it does: 
Like map() it traverses the array from left to right invoking a callback function on each element. The returned value must be a boolean identifying whether the element will be kept or discarded. After all elements have been traversed filter() returns a new array with all elements that returned true
Examples in - functional-prog-filter.js


Fork and try these simple examples !


