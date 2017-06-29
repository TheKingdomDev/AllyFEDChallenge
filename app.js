var data = [
  {
    "name": "URBank",
    "apy": 0.87,
    "earnings": 436.89
  },
  {
    "name": "Big Guy Financial",
    "apy": 0.75,
    "earnings": 376.41
  },
  {
    "name": "Dewey, Cheatam & Howe",
    "apy": 0.01,
    "earnings": 5.00
  },
  {
    "name": "First Onion",
    "apy": 0.01,
    "earnings": 5.00
  },
  {
    "name": "Bank of Everywhere",
    "apy": 0.01,
    "earnings": 5.00
  }
];

$(document).ready(function() {

	//Login button to display Modal (event handler, onClick)
		$(".login-button").on("click", function() {
			$(".modal").show();
			$("body").css("background-color: rgba(0,0,0,0.4)")
		})
	//Exit button to exit Modal (event handler, onClick)
		$("#close-modal").on("click", function() {
			$(".modal").hide();
		})
	//function to populate a table to input json data 
	//I know that you can't grab json data locally, browsers will block a request. Since this is a front-end challenge
	//we must have to just use the data from the file, I can't do a $.getJSON without the data being on a server.
	console.log(data); 
	var tableBody = "<tbody>";
	for(var i = 0; i < data.length; i ++) {
		tableBody += "<tr>";
		tableBody += "<td>" + data[i].name;
		tableBody += "<td>" + data[i].apy;
		tableBody += "<td>" + data[i].earnings;


	}

		tableBody += "</tbody>";
		$("#table-data").html(tableBody);

	//News button to show the news content in sidebar
		$("#news-button").on("click", function() {
			console.log("clicked news");
			$("#news").show();
			$("#archiveList").hide();
		});
	//Archive button to show list of links in sidebar
		$("#arch-button").on("click", function() {
			console.log("clicked arch");
			$("#archiveList").show();
			$("#news").hide();
		});
}); //end of document.ready