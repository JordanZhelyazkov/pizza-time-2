import formatCurrency from './utils';
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
  fillContent(){
    document.querySelectorAll('.card-container').forEach(pizza => {
      pizza.addEventListener('click', ()=> {
        pizza.render();
      })
    })
  }
  
  render() {
    this.clearContent();
    const template = `
<div class="notification type-${this.types}">
  <button class="delete"></button>
  🍕 <span class="type">${this.types.type}</span> (<span class="price">${this.types.price}</span>) has been added to your order.
</div>
    `;
    
    this.container.innerHTML = template;
    
  }
 
}
