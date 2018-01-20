$(function() {
//   $("#dog").click(function() {
//     $("#dog").text("Generating Doggo...")
//     $.get('https://dog.ceo/api/breeds/image/random', function(data) {
//       $(".dog").attr("src", data.message);
//       setTimeout(function() {
//         $("#dog").text("Get Doggo");
//       }, 500);
//     });
//   });
// });

$(function() {
  $.get('https://dog.ceo/api/breeds/list', function(data) {
    for (var i = 0; i < data.message.length; i++) {
      $(".dropdown").append($('<option>', {
        value: data.message[i],
        text: data.message[i]
      }));
    }
  });

  $(".dropdown").change(function() {
    var url = "https://dog.ceo/api/breed/" + $(".dropdown").val() + "/images/random"
    $.get(url, function(data) {
      $(".dog").attr("src", data.message);
      setTimeout(function() {
        $("#dog").text("Get Doggo");
      }, 500);
    });
  });
});
