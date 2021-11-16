const userAge = Number(prompt("What's your age"))
console.log(userAge)
const distanceInKm = Number(prompt("Write the distance you are travelling"))
console.log(distanceInKm)
const pricePerKm=0.21
const ticketPrice= distanceInKm * pricePerKm
console.log(ticketPrice)
if (userAge>0 && userAge<18){
    alert(`You get 20% off the price.\n Your ticket price: ${ticketPrice *0.2} £`)
}
else if(userAge>65){
    alert(`You get 40% off the price.\n Your ticket price: ${ticketPrice *0.4} £`)
}
else{
    alert(`Your ticket price: ${ticketPrice} £`)
}