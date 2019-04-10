module.exports = str => {
  if(str[0] !== '@') return null;

  // @all hi
  // @dm:ryan hi
  // @nick:ryan
  const pattern = /@(?<command>\w*):?(?<args>\w*)\s?(?<text>.*)?/;

  const match = pattern.exec(str);

  if(!match || !match.groups) return null;

  return {
    command: match.groups.command,
    args: match.groups.args,
    text: match.groups.text
  };
};
