(function mySlider() {

    let _currentPosition = 0;
    let _selectImage = 1;
    let _timeout, _interval, _replaseImageInterval;
    const SPEED_SLIDER = 1;
    
    let _imageContainerMain = document.getElementsByClassName('image__container__main')[0];
    
    img1.addEventListener('click', function() {imageClick(1, 1)});
    img2.addEventListener('click', function() {imageClick(2, 1)});
    img3.addEventListener('click', function() {imageClick(3, 1)});
    img4.addEventListener('click', function() {imageClick(4, 1)});
    img5.addEventListener('click', function() {imageClick(5, 1)});
    img6.addEventListener('click', function() {imageClick(6, 1)});

    left_button.addEventListener('click', function () {leftButtonClick(1)});
    right_button.addEventListener('click', function () {rightButtonClick(1)});

    document.addEventListener('keydown', function(e) {
        switch (e.code) {
            case 'ArrowRight':
                rightButtonClick(1);
                break;
            case 'ArrowLeft':
                leftButtonClick(1);
                break;
            default:
                break;
        }
    });

    timeOutStart();

    function timeOutStart(){
        _timeout = setTimeout(() => {
            _interval = setInterval(() =>{
                rightButtonClick(0);
            }, 4000);
        }, 10000);
    }

    function leftButtonClick(isClearTimer){
        if(_selectImage == 1) imageClick(6, isClearTimer);
        else imageClick(_selectImage - 1, isClearTimer);
    }

    function rightButtonClick(isClearTimer){
        if(_selectImage == 6) imageClick(1, isClearTimer);
        else imageClick(_selectImage + 1, isClearTimer);
    }

    function imageClick(imageNum, isClearTimer){
        if(isClearTimer == 1) refrashTimeOut();

        removeAllBorder();

        let element = document.getElementById(`img${imageNum}`)
        element.classList.add('white__border');
       
        slideImage((imageNum - 1) * -100, imageNum);
    }

    function refrashTimeOut(){
        clearTimeout(_timeout); 
        clearInterval(_interval);
        clearInterval(_replaseImageInterval);
        timeOutStart();
    }

    function removeAllBorder(){
        for (let image of document.querySelectorAll('.image__container .image')) {
            if(image.classList.contains('white__border'))
                image.classList.remove('white__border');
        }
    }

    function slideImage(position, imagePos){
        _selectImage = imagePos;
        _replaseImageInterval = setInterval(() =>
        {
            _currentPosition = _currentPosition < position ? _currentPosition +  1 : _currentPosition - 1;
            _imageContainerMain.style.left = `${_currentPosition}%`;

            if(_currentPosition == position)
                clearInterval(_replaseImageInterval)
        }, SPEED_SLIDER);
    }

})()