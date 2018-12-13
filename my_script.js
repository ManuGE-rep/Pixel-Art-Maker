/** Declare submit button */
let submitButton = document.querySelector('#submitButton');
/** Declare size variables */
let height;
let width;

/**
* @description When size is submitted by the user, call makeGrid()
*/
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    /** Sets height and width for input in function call */
    height = document.getElementById('inputHeight').value;
    width = document.getElementById('inputWidth').value;
    /** Calls the function makeGrid to build the grid */
    makeGrid(height, width);
});
/**
* @description Build the grid and let color it
* param {height} gets input value of height in form
* param {width} gets input value of Width in form
*/
function makeGrid(height, width) {
    let canvas = document.querySelector('#pixelCanvas');
    /** Removes the existing rows and cells*/
    canvas.innerHTML = "";
    /** Creates the grid */
    for (var i = 1; i <= height; i++) {
        var row = canvas.appendChild(document.createElement('tr'));
        for (var j = 1; j <= width; j++) {
            var cell = row.appendChild(document.createElement('td'));
        }
    }
    /** Applies event listener onclick on cells and sets color */
    let cells = canvas.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        cells[i].onclick = function color() {
            let colorInput = document.getElementById('colorPicker').value;
            /** Sets color on cell */
            $(this).attr('style', 'background-color:' + colorInput);
        };
    };

};

