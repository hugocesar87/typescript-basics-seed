export{};
interface BaseEntity {
    [key: number]: string;
    [key: string]: any;
  }
  
  interface Sizes {
    sizes: string[];
  }
  
  interface Pizza extends BaseEntity, Sizes { 
    name: string; 
    toppings?: number;
    getAvailableSizes(): string[];
  }

  let pizza: Pizza;
  
  type getAvailableSizes = () => string[];

  function createPizza(name: string, sizes: string[]): Pizza {
    return {
      name,
      sizes,
      getAvailableSizes(){
        return this.sizes;
      }
    }
  }

  pizza = createPizza('Italian', ['small', 'jumbo']);
  pizza.toppings = 1;
  pizza[1] = 'xyz';
  pizza["1"] = 'abc';
  
  console.log(pizza);