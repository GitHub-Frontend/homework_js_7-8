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

  // !--TASK 2--
    var $input = $('input');                      /*Определяем переменную и находим input*/

        $($input).mouseover(function() {          /*Показываем подсказки при навидении курсора мышки на поле ввода*/
		    $(this).siblings('div').fadeIn(1000);
    	  });

        $($input).mouseout(function() {           /*Прячем подсказки при убириании курсора мышки с поля ввода*/
        $(this).siblings('div').fadeOut(500);
        });

        $($input).focus(function() {              /*Показываем подсказки при переключении "табом" на поле ввода*/
        $(this).siblings('div').fadeIn(1000);
        });

        $($input).blur(function() {               /*Прячем подсказки при переключении "табом"*/
        $(this).siblings('div').fadeOut(500);
        });

        $('.btn').click(function() {              /*Показываем все подсказки при клике по кнопке*/   
        $('.toolTip').css('display', 'flex')
        });
})
