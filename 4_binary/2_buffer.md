# Buffer

Buffers are used to manipulate and interact with binary
data in node.

## Create a buffer

Create a new `Buffer` with `alloc`. All `Buffer`s have a length
that cannot change.

* create an `buffer.js` file
* `Buffer` is part of the global object, so no need to require anything
* Use `Buffer.alloc` to create an empty buffer of length 10
  * How could you "fill" this buffer?

## Create a buffer from a string

Create a buffer from a string value

* Use `Buffer.from` to create a buffer from a string
* `console.log` your buffer
* try:
  * `console.log` your buffer but call `toString()` on it first
  * use `map` to iterate over your buffer and change each item to 104
    * console.log the result
    * console.log the `toString()` result
    * what if you use a value other than 104?

## Create a buffer from an array of hex codes

* create from hex codes
  * `const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);`
  * console.log the result
  * console.log the `toString()` result
  * what else can you print?
  * how can you write this in decimal?
  * how can you write this in binary?

## replacer

* test and create an `emojiReplacer` function
  * `emojiReplacer` takes a `buffer`, an `emoji`, and a `replaceWithEmoji`
  * store the `emoji` and `replaceWithEmoji`s character
    code in decimal (use `readUInt32BE`)
  * iterate through the `buffer` and replace each
    instance of `emoji` with `replaceWithEmoji`
    (by the stored character code)
    * emojis are 32 bits (4 bytes) so use `readUInt32BE`
    * use a for loop to iterate through your buffer
      skipping 4 bytes on each iteration (since `readUInt32BE`
      reads 4 bytes at a time)
    * on finding a match use `writeUInt32BE` to replace the emoji
  * return the updated buffer
