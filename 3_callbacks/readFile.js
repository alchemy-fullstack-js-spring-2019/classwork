const buf = Buffer.from('😁 aaabbbb')
const letter = Buffer.from([0xF0, 0x9F, 0x98, 0x81]).readUInt32BE();
const replaceLetter = Buffer.from([0xF0, 0x9F, 0x98, 0x82]).readUInt32BE();

for (let i = 0; i < buf.length; i += 4) {
  const item = buf.readUInt32BE(i)
  if (item === letter) {
    buf.writeUInt32BE(replaceLetter, i)
  }
}

console.log(buf.toString());
