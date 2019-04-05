const buf = Buffer.from('hi 😁 there 😁');

emojiReplacer(buf, '😁', '😂');
console.log(buf.toString());

[2, 3, 4, 5];
[8, 9, 1, 1];
[1, 8, 9, 1, 1, 6, 7, 8, 9];

function emojiReplacer(buf, emoji, replaceWithEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

  for(let i = 0; i + 3 < buf.length; i++) {
    const potentialEmoji = buf.readUInt32BE(i);
    if(potentialEmoji === emojiCharCode) {
      buf.writeUInt32BE(replaceEmojiCharCode, i);
    }
  }

  return buf;
}
