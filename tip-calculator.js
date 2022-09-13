let number_of_people = document.getElementById('quantity')
let bill_amount = document.getElementById('bill')
let tip_amount = document.getElementById('tip')
let total_price = document.getElementById('total-price')

function add_one(){
  number_of_people.innerHTML++
}

const calculateBill = () => {
  number_of_people.innerHTML++
  console.log(1)
}

function delete_one(){
  if (number_of_people.innerHTML > 1){
    number_of_people.innerHTML--
  }
  else{}
}

function calculate_tip(){
  total_price.innerHTML = '$' + ((Number(bill_amount.value * (1 + tip_amount.value/100))) / number_of_people.innerHTML).toFixed(2)
}

setInterval(calculate_tip, 10)


