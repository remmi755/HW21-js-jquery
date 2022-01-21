$('.test').css('color', 'red')
$('h2.test').css('color', 'red')
$('p').nextAll('p').css('color', 'red')
$('li.www').nextAll('li').css('color', 'red')
$('h2').find('i').css('color', 'red')
$('h2').children('i').css('color', 'red')
$('h2').not('.test').css('color', 'red')
$(':header').not('.test').css('color', 'red')
$(':header').nextAll(':header').css('color', 'red')
$(':header.test').nextAll(':header.test').css('color', 'red')



