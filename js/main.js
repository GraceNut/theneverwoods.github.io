$(function() {
  $('.card .card-inner').on('click', function(e) {
    $('input[name="SelectedPlan"]').attr('value', $(this).attr('data-plan'));
    $('textarea[name="Description"]').val({
      'Ecommerce Website Build': 'I\'m interested in an Ecommerce website design/build',
      'Ecommerce Hourly': 'I\'m interested in hourly implementation',
      'Ecommerce Retainer': 'I\'m interested in a monthly retainer'
    }[$(this).attr('data-plan')]);
    $('html,body').animate({
      scrollTop: $('#contact').offset().top
    }, 1000);
  });

  $('header nav li a[href="' + window.location.pathname + '"]').addClass('active');
});