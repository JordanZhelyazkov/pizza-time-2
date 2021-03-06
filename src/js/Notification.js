import Card from './Card';
import { formatCurrency } from './utils';
export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }
  
  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
    
    
    
    
  }
 
  
  clearContent(){
    if(this.container.innerHTML != ''){
      this.container.innerHTML = '';
    }
  }
  
  render(type, price) {
    this.clearContent();
    const template = `
<div class="notification type-${type}">
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
</div>
    `;
    
    this.container.innerHTML = template;
    
  }
 
}
