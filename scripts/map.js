var thisArea;


$(function() {
    /* получаем id/название зоны при клике на неё */
    $(".Oblastb").click(function(){
        var id = $(this).attr('id');
        thisArea = id;

        /*Данную функцию можно реализовать лучше. Данные отрывающемся ищображении лучше всего получать из json
        * Также можно добавить анимацию.
        * */
        if(thisArea == "KolPol"){
            $('#openImg').css('visibility','visible');
        }

        /* подгружаем информацию о области при помощи AJAX*/
        $.getJSON('bd.json')
            .done(areaInfo);
    });

    $(".close").click(function(){
        $('#openImg').css('visibility','hidden')
    });

});

function areaInfo(jsonObj) {

    areaImg = JSON.search(jsonObj, '//area[areaId="'+thisArea+'"]/link');
    areaName= JSON.search(jsonObj, '//area[areaId="'+thisArea+'"]/areaName');
    areaSquare = JSON.search(jsonObj, '//area[areaId="'+thisArea+'"]/areaSquare');
    people = JSON.search(jsonObj, '//area[areaId="'+thisArea+'"]/people');
    capital = JSON.search(jsonObj, '//area[areaId="'+thisArea+'"]/capital');

    $('#areaName').text(areaName);
    $('#areaSquare').text(areaSquare);
    $('#people').text(people);
    $('#capital').text(capital);

    for (i = 0; i < 4; i++){
        $('#areaImg'+i).attr('src', areaImg[0]);
    }

}



