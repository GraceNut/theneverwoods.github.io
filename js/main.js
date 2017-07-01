$(function() {
  $('.card .card-inner').on('click', function(e) {
    $('input[name="SelectedPlan"]').attr('value', $(this).attr('data-plan'));
    $('textarea[name="Description"]').val({
      'Spark Pay Ecommerce Website Build': 'I\'m interested in an Ecommerce website design/build',
      'Spark Pay Ecommerce Hourly': 'I\'m interested in hourly implementation',
      'Spark Pay Ecommerce Retainer': 'I\'m interested in a monthly retainer',
      'Shopify Design': 'I\'m interested in a store design',
      'Shopify Development': 'I\'m interested in store development',
      'Shopify Store Setup': 'I\'m interested in store setup'
    }[$(this).attr('data-plan')]);
    $('html,body').animate({
      scrollTop: $('#contact').offset().top
    }, 1000);
  });

  $('header nav li a[href="' + window.location.pathname + '"]').addClass('active');
});