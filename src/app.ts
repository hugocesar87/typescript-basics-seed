interface SizesInterface {
  availableSizes: string[];
}

abstract class Sizes implements SizesInterface {

   constructor(protected sizes: string[]) {}

   get availableSizes() {
     return this.sizes;
   }

   set availableSizes(sizes: string[]) {
     this.sizes = sizes;
   }
}

interface PizzaInterface extends SizesInterface {
  readonly name: string;
  toppings: string[];
  updateSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}

class Pizza extends Sizes implements PizzaInterface {
  public toppings: string[] = [];

  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  public updateSizes(sizes: string[]){
    this.sizes = sizes;
  }

  public addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza: Pizza = new Pizza("Italian", ['small, medium']);
pizza.addTopping("bell chilli");

console.log(pizza.availableSizes);

pizza.updateSizes(['jumbo']);

console.log(pizza.availableSizes);

console.log(pizza);

class Coupon {
  static coupon: string[] = ['Italian', 'Pepperoni'];
  static createDiscount(discount: number): string {
    return `PIZAA_DISCOUNT_${discount}`;
  }
}

console.log(Coupon.coupon);
console.log(Coupon.createDiscount(30));
