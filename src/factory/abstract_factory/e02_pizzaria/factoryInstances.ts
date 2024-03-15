import { PizzariaFactory } from './factoryContracts';
import { Calzone, CalzoneType } from './model/calzone';
import { Pizza, PizzaType } from './model/pizza';
import { EvenWeekDaysPizzaMaker, OddWeekDaysPizzaMaker, PizzaMaker } from './model/pizzaMaker';

export class TwoGuysPizzaria implements PizzariaFactory {
    getPizza(pizzaMaker: PizzaMaker, pizzaType: PizzaType): Pizza {
        return pizzaMaker.getPizza(pizzaType);
    }

    getCalzone(pizzaMaker: PizzaMaker, calzoneType: CalzoneType): Calzone {
        return pizzaMaker.getCalzone(calzoneType);
    }

    getPizzaMaker(dateString: string): PizzaMaker {
        const [day, month, year] = dateString.split("-");
        const monthNumber = parseInt(month, 10) - 1;
        const date = new Date(Number(year), monthNumber, Number(day));

        // (0 = Sunday, 6 = Saturday)
        const dayOfWeek = date.getDay();

        switch (dayOfWeek) {
            case 0: /* Sunday */
                throw new Error("Pizzaria is closed at Sundays");
            case 1: /* Monday */
            case 3: /* Wednesday */
            case 5: /* Friday */
                return new EvenWeekDaysPizzaMaker();
            case 2: /* Tuesday */
            case 4: /* Thursday */
            case 6: /* Saturday */
                return new OddWeekDaysPizzaMaker();
            default: 
                throw new Error("Invalid week day");
        }
    }
}