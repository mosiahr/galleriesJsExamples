/**
 * Created by mosya on 09.08.17.
 */

;(function gallery(){
    // var leftArrow = document.getElementById('leftArrow'),
    //     rightArrow = document.getElementById('rightArrow'),
    //     image = document.getElementById('image');
    var initImgNumber = 1,
        maxImgNumber = 7;

    leftArrow.addEventListener('click', moveBackward);
    rightArrow.addEventListener('click', moveForward);

    function moveBackward(){
        initImgNumber--;
        if(initImgNumber == 0){initImgNumber = maxImgNumber}
        image.setAttribute('src', 'img/' + initImgNumber + '.jpg');
    };

    function moveForward(){
        initImgNumber++;
        if(initImgNumber > maxImgNumber){initImgNumber = 1}
        image.setAttribute('src', 'img/' + initImgNumber + '.jpg');
    };
})();