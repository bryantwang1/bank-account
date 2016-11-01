//back-end

function bankAccount(holderName, initDeposit){
  this.holderName = holderName;
  // this.depositAmount = depositAmount
  // this.withdrawalAmount = withdrawalAmount
  this.balance = initDeposit;
}

bankAccount.prototype.balanceManipulation = function(addMoney, subtractMoney) {
  if(addMoney > 0) {
    this.balance += addMoney;
  }

  if(subtractMoney > 0) {
    this.balance -= subtractMoney;
  }
}

//UI
$(function(){
  var userAccount;

  $("form#account-creation").submit(function(event) {
    event.preventDefault();

    var holderName = $("input#name").val();
    var initDeposit= parseInt($("input#init-deposit").val());

    userAccount = new bankAccount(holderName, initDeposit);

    // newAccount.deposit(depositAmount);

    $("#balance").text(userAccount.balance);
    $("#account-manipulation").show();
    $("#account-creation").hide();
    // var balance = ("#balance")
  });

  $("form#account-manipulation").submit(function(event) {
    event.preventDefault();

    var depositAmount= parseInt($("input#deposit-amount").val());
    var withdrawalAmount= parseInt($("input#withdrawal-amount").val());
  //$("#balance").text(userAccount.balance);

    userAccount.balanceManipulation(depositAmount, withdrawalAmount);
    $("#balance").text(userAccount.balance);

    $("input#deposit-amount").val("");
    $("input#withdrawal-amount").val("");
  });
});
