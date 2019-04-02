const Colors = require ('../lib/Colors');

describe('COLORS**Colors.js**', ()=>{
    it('has an emptry array', ()=>{
        const colors = new Colors;
        expect(colors.favorites).toEqual([]);
    });
    it('add color method pushes color to faves array', ()=>{
        const colors = new Colors;
        colors.addColor('green');
        expect(colors.favorites).toEqual(['green']);
    });
    it('has color method takes color and returns true it it is in favorites', ()=>{
        const colors = new Colors;
        colors.addColor('green');
        const hasColor = colors.hasColor('green');
        expect(hasColor).toBe(true);
    });
    it('has color method takes color and returns true it it is in favorites', ()=>{
        const colors = new Colors;
        colors.addColor('green');
        const hasColor = colors.hasColor('blue');
        expect(hasColor).toBe(false);
    });
})
;
