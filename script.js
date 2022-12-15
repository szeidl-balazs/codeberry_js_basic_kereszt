function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
   
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;    

    /*horizontal line*/
    context.beginPath();
    context.moveTo(0, canvasHeight *.5);
    context.lineTo(canvasWidth, canvasHeight * .5);
    context.strokeStyle = 'red';
    context.stroke();

    /*vertical line*/
    context.beginPath();
    context.moveTo(canvasWidth *.5, 0);
    context.lineTo(canvasWidth * .5, canvasHeight);
    context.strokeStyle = 'green';
    context.stroke();

    /*Before each line element.beginStyle() must be restarted otherwise the different lines will not be individuals and cannpt be formated independently. */

}

window.addEventListener("load", pageLoaded);