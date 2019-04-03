class HouseClass {
  constructor(location, floors, bed, bath) {
    this.location = location;
    this.floors = floors;
    this.bed = bed;
    this.bath = bath;
  }

  price() {
    return (this.floors +
      this.floors +
      this.bed +
      this.bath) * 400;
  }
}


module.exports = {
  HouseClass
};
