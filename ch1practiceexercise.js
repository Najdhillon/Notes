
const tax = 0.09;

var totalMoney = 10000;

const phone = 10;

const paccessory = 10;

while (totalMoney > 0) {

  if (totalMoney < purchase) {

    purchase = phone + paccessory + ((phone+paccessory)*tax);

    console.log("Your total purchase is $ " + purchase)

    totalMoney = totalMoney - purchase;

    console.log("Your new bank balance is" + totalMoney);

  }

  else {
    console.log("You cannot afford anymore phones!")
  }
}



if (totalMoney > purchase) {

  purchase = phone + paccessory + ((phone+paccessory)*tax);

  console.log("Your total purchase is $ " + purchase)

  totalMoney = totalMoney - purchase;

}
