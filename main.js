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