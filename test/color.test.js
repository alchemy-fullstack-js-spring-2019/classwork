const { Colors } = require('../lib/colors.js');

describe('create colors', () => {
  it('shows favorites as empty to start', () => {
    const sean = new Colors();
    expect(sean.favorites).toEqual([]);
  });

  it('add one color to favorites', () => {
    const sean = new Colors();
    sean.addColor('red');
    sean.addColor('blue');
    expect(sean.favorites).toContainEqual('red');
  });

  it('adds colors to favorites', () => {
    const sean = new Colors();
    sean.addColor('red');
    sean.addColor('blue');
    expect(sean.favorites).toEqual(['red', 'blue']);
  });

  it('returns true if color exists', () => {
    const sean = new Colors();
    sean.addColor('red');
    expect(sean.hasColor('red')).toEqual(true);
  });

  it('returns false if color doesnt exist', () => {
    const sean = new Colors();
    sean.addColor('blue');
    expect(sean.hasColor('red')).toEqual(false);
  });
});



