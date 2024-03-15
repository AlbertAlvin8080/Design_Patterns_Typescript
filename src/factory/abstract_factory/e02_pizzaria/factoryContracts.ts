import { Calzone, CalzoneType } from './model/calzone';
import { Pizza, PizzaType } from './model/pizza';
import { PizzaMaker } from './model/pizzaMaker';

export interface PizzariaFactory {
    getPizzaMaker(date: string): PizzaMaker;
    getPizza(pizzaMaker: PizzaMaker, pizzaType: PizzaType): Pizza;
    getCalzone(pizzaMaker: PizzaMaker, calzoneType: CalzoneType): Calzone;
}




