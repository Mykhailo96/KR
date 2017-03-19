var x1 = -1;
var y1 = -1;
var x2 = -1;
var y2 = -1;
var color = '';
var width = '';
$(document).ready(function () {
    $('canvas').on('click', function (e) {
        if (x1 == -1) {
            x1 = e.pageX;
            y1 = e.pageY;
        } else {
            x2 = e.pageX;
            y2 = e.pageY;
            var x = $('.jscolor').css('backgroundColor');
            hexc(x);
            width = $('input').val();
        }
        line(color, width);
    });

    $('.clear-btn').on('click', function () {
        var canvas = document.getElementById("a");
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
    });
});

function line(color, width) {
    if (x2 != -1) {
        var a_canvas = document.getElementById("a");
        var context = a_canvas.getContext("2d");
        context.fillStyle = "black";
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineWidth = width;
        context.strokeStyle = color;
        context.stroke();
        x1 = -1;
        x2 = -1;
    }
}

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete (parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
}