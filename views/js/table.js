function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
	$.getJSONuncached("/get/html")
};

function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
		var entree = $(this).attr("id") - 1;
		delete_row(section, entree);
	})
};

/*---------------------------------------------*/
checkpassword = function(validade){
    var str = document.getElementById().value;
    if(str.lenght < 8)
    {
        document.getElementById("demo").innerHTML= "Password lenght most be 8 char";
        document.getElementById("demo").style.color="Red";
        return("too_short");

    } else if (str.search(/[0-9]/) == -1) {
        document.getElementById("demo").innerHTML= "At least 1 numeric value most be enter";
        document.getElementById("demo").style.color="Red";
        return("no_number");
    }
    else if (str.search(/[a-z]/) == -1) {
        document.getElementById("demo").innerHTML= "At least 1 letter  most be enter";
        document.getElementById("demo").style.color="Red";
        return("no_letter");
    }
    else if (str.search(/[A-Z]/) == -1) {
        document.getElementById("demo").innerHTML= "At least 1 Upper case letter  most be enter";
        document.getElementById("demo").style.color="Red";
        return("no_Uletter");
    }
    else if (str.search(/[!\@\#\$\%\¨\&\*\-\+\.\;\,\:]/) == -1) {
        document.getElementById("demo").innerHTML= "At least 1 special char  most be enter";
        document.getElementById("demo").style.color="Red";
        return("no_Schar");
    }
        document.getElementById("demo").innerHTML= "Successful";
        document.getElementById("demo").style.color="Green";
        return("ok");
    
}


$(document).ready(function ()
{
	draw_table();
});