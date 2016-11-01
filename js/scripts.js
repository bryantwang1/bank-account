//back-end

function bankAccount(holderName, initDeposit, depositAmount, withdrawalAmount, balance){
  this.holderName = holderName
  // this.initDeposit = initDeposit
  // this.depositAmount = depositAmount
  // this.withdrawalAmount = withdrawalAmount
  this.balance = balance

  
}
//UI
$(function(){
  $("form#banking-page").submit(function(event) {
  event.preventDefault();


var holderName = $("input#name").val();
var initDeposit= $("input#init-deposit").val();
var depositAmount= $("input#deposit-amount").val();
var withdrawalAmount= $("input#withdrawal-amount").val();


// var balance = ("#balance")

  });
});
