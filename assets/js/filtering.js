// init Isotope
let $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
});
// filter functions
let filterFns = {};
// bind filter button click
$('.filters-button-group').on('click', 'button', function () {
  let filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({
    filter: filterValue,
  });
});

// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
  let $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
  $('.card')
    .mouseenter(function () {
      $(this).find('.card-hover').css({
        top: '0',
      });
    })
    .mouseleave(function () {
      $(this).find('.card-hover').css({
        top: '100%',
      });
    });
});
