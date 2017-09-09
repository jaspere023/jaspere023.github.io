function main() {
$('.skillset').hide();
$('.skillset').fadeIn(1000);
}

$('.table').hide();
$('.temperaturen').on('click', function() {
  $(this).next().slideToggle(200);
  $(this).toggleClass('active');
});

$(document).ready(main);



function color_from_hue(hue)
{
  var h = hue/60;
  var c = 255;
  var x = (1 - Math.abs(h%2 - 1))*255;
  var color;
 
  var i = Math.floor(h);
  if (i == 0) color = rgb_to_hex(c, x, 0);
  else if (i == 1) color = rgb_to_hex(x, c, 0);
  else if (i == 2) color = rgb_to_hex(0, c, x);
  else if (i == 3) color = rgb_to_hex(0, x, c);
  else if (i == 4) color = rgb_to_hex(x, 0, c);
  else color = rgb_to_hex(c, 0, x);
 
  return color;
}
 
function rgb_to_hex(red, green, blue)
{
  var h = ((red << 16) | (green << 8) | (blue)).toString(16);
  // add the beginning zeros
  while (h.length < 6) h = '0' + h;
  return '#' + h;
}