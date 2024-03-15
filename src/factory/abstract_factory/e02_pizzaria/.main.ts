import { TwoGuysPizzaria } from './factoryInstances';
import { log } from 'console';
import { PizzaType } from './model/pizza';
import { CalzoneType } from './model/calzone';

const pizzaria = new TwoGuysPizzaria();
const pizzaMaker = pizzaria.getPizzaMaker("06-03-2024");

const pizza = pizzaria.getPizza(pizzaMaker, PizzaType.PEPPERONI);
const calzone = pizzaria.getCalzone(pizzaMaker, CalzoneType.PEPPERONI)

log();
log(pizza.getIngredients());
log(calzone.getIngredients());