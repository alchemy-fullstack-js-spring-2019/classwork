class Colors{
    constructor(){
        this.favorites = [];
    }
    addColor(color){
        this.favorites.push(color);
    }
    hasColor(color){
        if(this.favorites.includes(color)){
            return true;
        }
        return false;
    }
}

module.exports = Colors;
