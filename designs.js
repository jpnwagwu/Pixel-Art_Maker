
//executes the anonymous function defined inline once the DOM is fully loaded
$(document).ready(function() {

    //calls the makegrid function on submit
	$('#sizePicker').submit(function makeGrid(grid) {

        //calls the removegrid function
		removeGrid();

        //collects the value from the input and assigns it to a variable
        const inputWeight=$('#inputWeight').val();
        const inputHeight=$('#inputHeight').val();

        //for loops is used to iterate to produce the table
        for (var m = 1; m <= inputWeight; m++) {

	        $('#pixelCanvas').append('<tr></tr>');//adds row as the last item to the table
	        for (var n = 1; n <= inputHeight; n++) {

		        $('tr').last().append('<td></td>');//adds the table data as the last item to the row

	        }

        }

        grid.preventDefault();//stops the default action of the submit

        //adds color to each box on click
        $('td').click(function(evt){

        const color = $('#colorPicker').val();
        $(evt.target).css('background-color', color);

        });

    });

});

//removes the rid when the submit button is clicked again
function removeGrid(){

	const table= document.getElementsByTagName('table').item(0);
	const i = table.rows.length-1;

	while (i>=0){
		table.remove(0);
		i--;
	}

}