
function Cart() {

  const cart = [
    {
      name : 'Monstera',
      price: 8,
    },
    {
      name : 'Lierre',
      price: 10,
    },
    {
      name : 'Bunch of Flowers',
      price: 15,
    },
  ]

let total = 0
cart.forEach(item => {
  if(item.price){
    return total += item.price;
  }
});
  
  return (
    <div>
      <ul>
        {
          cart.map((value) => {
            return <li> { value.name } - { value.price.toFixed(2) } eur </li>
          })
        }

      </ul>
      <h4>
        Total du panier : { total.toFixed(2) } eur
      </h4>
    </div>
  );
}



export default Cart;
