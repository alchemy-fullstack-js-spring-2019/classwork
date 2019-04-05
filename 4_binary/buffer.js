// let buffer = Buffer.alloc(2);
// buffer.writeInt8(48, 0);
// buffer.writeInt8(49, 1);
// buffer.wriÎteInt8(20, 2); space
// buffer.writeInt8(82, 3); 
// buffer.writeInt8(72, 4); 
// buffer.writeInt8(69, 5); 
// buffer.writeInt8(82, 6); 
// buffer.writeInt8(69, 7); 
// buffer.writeInt8(33, 8); 

// console.log(buffer);

// const buf = Buffer.from('hi');
// const strBuf = buf.toString();
// console.log(strBuf);
const buf = Buffer.from('hi (emoji1) there (emoji2)');
emojiReplacer(buf, 'emoji1', 'emoji2');

function emojiReplacer(buf, emoji, replaceWithEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.code(replaceWithEmoji).readUInt32BE();

  for(let i = 0; i + 3 < buf.length; i++) {
    const potentialEmoji
    buf.readUInt32BE(i);
  }
}
