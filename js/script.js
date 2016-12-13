$(function(){

    var $tabNavs = $('#tabs').find('.nav-tabs').find('a');

    $tabNavs.click(function (e) {            /*Назначем функцию по клику*/
        e.preventDefault();                  /*Отменяем действия по умолчанию*/
        var $tabId = $(this).attr('href');   /* Узнаем значения ID блока, который нужно отобразить */
        $('.nav-tabs li').removeClass();     /* Удаляем все классы у якорей и ставим active текущей вкладке */
        $(this).addClass('active');
        $('.tab-pane').hide(0);              /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
        $($tabId).show();                    
  });
})
