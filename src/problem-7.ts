{
  interface ICar {
    make: string;
    model: string;
    year: number | string;
    getCarAge(): number;
  }

  class Car implements ICar {
    make: string;
    model: string;
    year: number | string;

    constructor(make: string, model: string, year: number | string) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(): number {
      let currentYear = 2024;
      let year: number = 0;

      if (typeof this.year === "string") {
        year = parseInt(this.year);
      } else {
        year = this.year;
      }

      let age = Math.abs(year - currentYear);
      console.log(`${age} (assuming current year is ${currentYear})`);

      return age;
    }
  }
}
