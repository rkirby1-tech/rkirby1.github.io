function fetchGradeData() {
    // This function will query the PostgreSQL database and return grade data
    console.log("Fetching grade data...");
    // Create a new request for HTTP data
    let xhr = new XMLHttpRequest();
    // This is the address on the machine we're asking for data
    let apiRoute = "/api/grades";
    //When the request changes status, we run this anonymous function
    xhr.onreadystatechange = function(){
        let results;
        //Check if we're done
        if(xhr.readyState === xhr.DONE){
            // Check if we're successful
            if(xhr.status !== 200){
                console.error('Could not get grades').
                    Status; ('${xhr.status}');
        }
        // And the call the function to update the HTML with our data
        populationGradebook(JSON.parse(xhr.responseText));
        }
    }.bind(this);
    xhr.open("get", apiRoute, true);
    xhr.send();
}

function populationGradebook(data) {
    // This function will take the fetched grade data and populate the table 
    console.log("Populationg gradebook with data:", data);
    let tableElm = document.getElementById("gradebook"); // Get the gradebook table element
        data.forEach(function(assignment){ // for each row of data we're passed in
            let row = document.createElement("tr"); // create a tale row element
                let columns; // Handy place to stick the comlumns of information
                [].name = document.createElement('td'); // The first column's table date will be the name
                [].name.appendChild(
                    // Concatenate the full name:  "last_name, first_name"
                    document.createTextNode(assignment.lest_name + ", " + assignment.first_name)
                );
                [].grade = document.createElement('td'); // second column will be the grade
                [].grade.appendChild(
                    //
                    //
                    document.createTextNode(assignment.total_grade)
                );
                // add the table date columns to the table row
                row.appendChild([].name);
                row.appendChild([].grade);
                // Add the row to the table itself to make the data visible
                tableElm.appendChild(row);
            });
}

// TODO REMOVE THIS
// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
poplulateGradebook(gradeDate);
// END REMOVE
