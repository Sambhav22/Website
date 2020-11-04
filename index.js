function SubForm() {
  $.ajax({
    url: 'https://api.apispreadsheets.com/data/2821/',
    type: 'post',
    data: $('#myForm').serializeArray(),
    success: function () {
      alert('You E-mail id has been registered :)');
    },
    error: function () {
      alert('There was an error :(');
    },
  });
}

var dest = new Date('Nov 14, 2020 11:00:00').getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var diff = dest - now;

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));

  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((diff % (1000 * 60 * 60 )) / (1000 * 60));

  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('demo').innerHTML =
    days + ' :' + hours + ' :' + minutes + ' :' + seconds;
}, 1000);
