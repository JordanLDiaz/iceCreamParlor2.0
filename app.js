console.log('hello from jsLand')

const flavors = [{
  name: 'Cookie Dough',
  quantity: 0,
  price: 4
}, {
  name: 'Vanilla',
  quantity: 0,
  price: 3
}, {
  name: 'Chocolate',
  quantity: 0,
  price: 3
}, {
  name: 'Cookies n Cream',
  quantity: 0,
  price: 4
}, {
  name: 'Birthday Cake',
  quantity: 0,
  price: 4
}, {
  name: 'Mint Chocolate Chip',
  quantity: 0,
  price: 4
},
]

const vessels = [{
  name: 'Waffle Cone',
  quantity: 0,
  price: 3
}, {
  name: 'Waffle Bowl',
  quantity: 0,
  price: 4
}, {
  name: 'Dipped Cone',
  quantity: 0,
  price: 5
}]

const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: 2
}, {
  name: 'Chocolate Chips',
  quantity: 0,
  price: 2
}, {
  name: 'Coconut Flakes',
  quantity: 0,
  price: 2
}]

function drawReceipt() {
  let template = ''
  toppings.forEach(t => {
    if (t.quantity > 0) {
      console.log('drawing receipt');
      template += `
      <h5 class="col-3 mb-0 p-2">${t.name}</h5>
      <h5 class="col-3  mb-0 p-2">${t.quantity}</h5>
      <h5 class="col-3  mb-0 p-2">${t.price}</h5>
      <h5 class="col-3  mb-0 p-2">${t.quantity * t.price}</h5>
      `
    }
    document.getElementById('cart').innerHTML = template
  }),
    vessels.forEach(v => {
      if (v.quantity) {
        console.log('drawing receipt');
        template += `
        <h5 class="col-3 mb-0 p-2">${v.name}</h5>
        <h5 class="col-3  mb-0 p-2">${v.quantity}</h5>
        <h5 class="col-3  mb-0 p-2">${v.price}</h5>
        <h5 class="col-3  mb-0 p-2">${v.quantity * v.price}</h5>
        `
      }
      document.getElementById('cart').innerHTML = template
    }),
    flavors.forEach(f => {
      if (f.quantity) {
        console.log('drawing receipt');
        template += `
        <h5 class="col-3 mb-0 p-2">${f.name}</h5>
        <h5 class="col-3  mb-0 p-2">${f.quantity}</h5>
        <h5 class="col-3  mb-0 p-2">${f.price}</h5>
        <h5 class="col-3  mb-0 p-2">${f.quantity * f.price}</h5>
        `
      }
      document.getElementById('cart').innerHTML = template
      drawTotal()
    })
}

function drawTotal() {
  let total = 0
  toppings.forEach(t => {
    total += t.price * t.quantity
  }),
    vessels.forEach(v => {
      total += v.price * v.quantity
    }),
    flavors.forEach(f => {
      total += f.price * f.quantity
    })
  document.getElementById('total').innerText = total.toFixed(2)
}

function selectTopping(toppingName) {
  console.log('adding topping', toppingName)
  let foundTopping = toppings.find(t => t.name == toppingName)
  foundTopping.quantity++
  console.log(foundTopping)
  drawReceipt()
}

function selectVessel(vesselName) {
  console.log('adding vessel', vesselName)
  let foundVessel = vessels.find(v => v.name == vesselName)
  foundVessel.quantity++
  console.log(foundVessel)
  drawReceipt()
}

function selectFlavor(flavorName) {
  console.log('adding ice cream', flavorName)
  let foundFlavor = flavors.find(f => f.name == flavorName)
  foundFlavor.quantity++
  console.log(foundFlavor)
  drawReceipt()
}

function checkout() {
  if (window.confirm('Are you ready to checkout?')) {
    toppings.forEach(t => {
      t.quantity = 0
    }),
      vessels.forEach(v => {
        v.quantity = 0
      }),
      flavors.forEach(f => {
        f.quantity = 0
      })
  }
  drawReceipt()
}