// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter (sets radius based on diameter)
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter for circumference (sets radius based on circumference)
    set circumference(circumference) {
      this.radius = circumference / Math.PI / 2;
    }
  
    // Getter for area
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter for area (sets radius based on area)
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  module.exports = Circle;
  