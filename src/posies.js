$(document).ready(function() {
  function applyReset() {    
    $("#purchases .current").text(document.posies.purchases);
    $("#plants .current").text(document.posies.plants);
    $("#coins .current").text(document.posies.coins);
  }

  function increment(event, amount) {
    let target = $(event.target).closest('.section')[0].id;

    if (document.posies[target] + amount < 0) {
      return;
    }

    document.posies[target] += amount;
    applyReset();
  }

  $("#reset").click(function() {
    document.posies = JSON.parse(JSON.stringify(initialPosies));
    applyReset();
  });

  $(".add").click(function(event) {
    increment(event, 1);
  });

  $(".subtract").click(function(event) {
    increment(event, -1);
  });

  let initialPosies = {
    purchases: 1,
    plants: 1,
    coins: 0
  }

  document.posies = JSON.parse(JSON.stringify(initialPosies));
  applyReset();
});
