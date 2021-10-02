import EventEmitter from "eventemitter3";
import Card from "./Card";
import Notification from "./Notification";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }
  
  constructor(fillContent) {
    super(fillContent);
    this.fillContent 
    

    const pizzas = [
      {
        type: Card.types.HAWAIIAN,
        price: 8.99,
      },
      {
        type: Card.types.PEPPERONI,
        price: 9.99,
      },
      {
        type: Card.types.MARGHERITA,
        price: 7.99,
      },
    ];

    pizzas.forEach((pizza) => {
      const card = new Card({ ...pizza });
      card.render();
      if(card._type == 'hawaiian'){
        card.class = 'is-danger';
      } 
      document.querySelector(".main").appendChild(card.container);
    });
   
    
  
    this.emit(Application.events.READY);
  }
  
}
