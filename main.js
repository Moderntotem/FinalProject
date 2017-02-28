$(document).ready(function() {
// Accumulator Function

  document.getElementById("buttonSubmit").addEventListener('click',function(){
  $('#responseContainer').empty();
    var counts = {};
    var input = document.getElementById('stringInput').value
  console.log(input)
    var arr = input.split("")
    console.log(arr)


  for(var i = 0; i< arr.length; i++) {
      var num = arr[i];
      counts[num] = counts[num] ? counts[num]+1 : 1;
  }
     $('#responseContainer').prepend('<p>'+JSON.stringify(counts)+'</p>')
})
$('#weathSubmit').click(function(){
  var $data = $('#weather');
  var zip = $('#zip').val()
  $.ajax({
    type:'GET',
    url:'http://api.openweathermap.org/data/2.5/weather?zip='+zip+'&APPID=90b9b5b96756eee33915a3e56e966384',
    success: function(data){
      console.log('success', data);
      $.each(data, function(i, item){
        $('#weathList').prepend('<li>'+JSON.stringify(item)+'</li>')

      })
    }
  })
console.log($data);
})


});
