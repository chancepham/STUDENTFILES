


$(document).ready(function () {
    
    $('#editModal').hide()
    $("#exitModal").click(function (e) {
        $('#editModal').fadeToggle()
    })
    // CREATE GET REQUEST ON CLICK - (target eventhandler)
    
    $("#allDiner").click(function (e) {
        console.log('clicked')
        console.log('clicked')
        // Prevent the form from submitting via the browser.
        e.preventDefault()
        
        // CALL AJAX GET FUNCTION
        ajaxGet()
    })
    // CREATE DELETE REQUEST ON CLICK - (target eventhandler)
    $("body").on('click', 'button.deleteDiner', (e) => {
        
        // Prevent the form from submitting via the browser.
        e.preventDefault()
        const targetId = e.target.id
        
        console.log('deleting, ', targetId)
        ajaxDelete(targetId)
    })
  
    $("body").on('click', 'button.editDiner', (e) => {
        $('#editModal').fadeToggle()
        // Prevent the form from submitting via the browser.
        e.preventDefault()
        const targetId = e.target.id

        console.log('Updating, ', targetId)
        ajaxUpdate(targetId)
    })
    $("#dinerForm").submit(function (e) {
        
        // Prevent the form from submitting via the browser.
        e.preventDefault();
        
        // CALL AJAX POST FUNCTION
        ajaxPost();
        
    });
    // SUBMIT FORM ON CLICK - (target eventhandler)
    $("body").on('click', 'button.OpenEditDiner', (e) => {
        $('#editModal').fadeToggle()
        // Prevent the form from submitting via the browser.
        e.preventDefault()
        const targetId = e.target.id
        
        console.log('Filling In, ', targetId)
        fillIn(targetId)
    })

   
    function fillIn(dinerId) {
        let dinerNameSave = $(`#${dinerId}`).parent().attr('name')
        let dinerFizzinessSave = $(`#${dinerId}`).parent().attr('location')
        
        
        console.log(dinerId)
        console.log(dinerNameSave)
        $('#nameEdit').val(dinerNameSave)
        $('#locationEdit').val(dinerFizzinessSave)
        
        $('#editDinerId').attr('id', dinerId)
        ajaxGetSodaServe()
    }
    // CREATE AJAX POST FUNCTION
    function ajaxPost() {
        
        // PREPARE FORM DATA
        const formData = {
            name: $("#name").val(),
            location: $("#location").val()
            
        }
        console.log(formData)
        // POST DATA
        $.ajax({
            
            // CREATE HEADER
            type: "POST",
            contentType: "application/json",
            url: "/api/diners/save",
            data: JSON.stringify(formData),
            dataType: 'json',
            
            // IF SUCCESS, DISPLAY VEHICLE OBJECT
            success: function (diner) {
                $("#postResult").html("<p>" +
                "Post Successfully! <br>" +
                    "--> " + diner.name + " " + diner.location + " " + diner.serving + " " + "</p>");
                alert("You have added a diner")
            },
            error: function (e) {
                let bruh = "ERROR: " + e.responseJSON.message;
                alert(bruh)
                
                // DISPLAY IN CONSOLE
                console.log("ERROR: ", e.responseJSON.message);
                console.log("ERROR: ", e);
            }
        });
        
        // RESET FORM DATA AFTER POSTING
        resetData(); ajaxGet()
        
    }
    // CREATE RESET FORM DATA FUNCTION
    function resetData() {
        $("#name").val("");
        $("#location").val("");
        
        
    }
    
    // CREATE AJAX GET FUNCTION
    function ajaxGet() {
        $.ajax({
            type: "GET",
            url: "/api/diners/all",
            // IF SUCCESS, DISPLAY
            success: function (result) {
                
                $('#getResultDiv ul').empty();
                $.each(result, function (i, diner) {
                    
                    $('#getResultDiv .list-group').append(dinerData(diner, i))
                });
                
                // DISPLAY IN CONSOLE
                console.log("Success: ", result);
            },
            // IF ERROR, DISPLAY
            error: function (e) {
                $("#getResultDiv").html("<strong>Error</strong>");
                
                // DISPLAY IN CONSOLE
                console.log("ERROR: ", e);
            }
        });
    }
    // CREATE AJAX GET FUNCTION
    function ajaxGetSodaServe() {
        $.ajax({
            type: "GET",
            url: "/api/sodas/allPossibleServing",
            // IF SUCCESS, DISPLAY
            success: function (result) {
                
                $('#possibleServingSoda').html('')
                $.each(result, function (i, soda) {
                  
                    $('#possibleServingSoda').append(servingSodaData(soda, i))
                    
                });
                
                // DISPLAY IN CONSOLE
                console.log("Success: ", result);
            },
            // IF ERROR, DISPLAY
            error: function (e) {
                $("#getResultDiv").html("<strong>Error</strong>");
                
                // DISPLAY IN CONSOLE
                console.log("ERROR: ", e);
            }
        });
    }
    // CREATE AJAX DELETE FUNCTION
    function ajaxDelete(dinerId) {
        $.ajax({
            type: 'DELETE',
            url: `/api/diners/delete/${dinerId}`,
            
            // IF SUCCESS, DISPLAY IN CONSOLE
            success: (result) => {
                $('#postResult').text(`diner successfully deleted!`)
                alert("You have deleted a diner")
                console.log('deleted ', result)
            }
        })
        ajaxGet()
    }
    function ajaxUpdate(dinerId) {
        console.log($('option:selected').eq(0).text() + ' Selected id of sodas')
        console.log($('option:selected').eq(1).text() + ' Selected id of sodas')
//write for loop for sodas
        let arrayOfSodaName = []
        for (let i = 0; i < $('option:selected').length; i++){
            arrayOfSodaName.push($('option:selected').eq(i).text())
            console.log(arrayOfSodaName)
        }
        const formData = {
            name: $('#nameEdit').val(),
            location: $('#locationEdit').val(),
            serving: arrayOfSodaName,

        }
        $.ajax({
            type: 'POST',
            contentType: "application/json",
            url: `/api/diners/update/${dinerId}`,
            data: JSON.stringify(formData),
            dataType: 'json'

         
        })
        alert("You have updated a soda")
        ajaxGet()
    }
    // CREATE FUNCTION THAT APPENDS DELETE BUTTON ON EACH VEHICLE OBJECT
    const dinerData = (diner, dinerNumber) => {
        const deleteButton = document.createElement('button')
        deleteButton.onclick = () => console.log('delete diner id ', diner.id)
        return (
            `<div name="${diner.name}" location="${diner.location}">
            <div># ${dinerNumber + 1}</div>
            <div>Diner Name: ${diner.name}</div>
            <div>Location: ${diner.location}</div>
            <div>Diners's Serving: ${diner.serving}</div>
            <button class="deleteDiner" id="${diner._id}">Delete</button>
            <button class="OpenEditDiner" id="${diner._id}" name="${diner.name}" location="${diner.location}" serving="${diner.serving}" >Edit Diner</button>
            </div>
            <br/>`
            )
        }
        // CREATE FUNCTION THAT APPENDS DELETE BUTTON ON EACH VEHICLE OBJECT
        const servingSodaData = (soda, sodaNumber) => {
            const deleteButton = document.createElement('button')
            deleteButton.onclick = () => console.log('showing serving soda ', soda.id)
            return (
                `<option id="${soda._id}">${soda.name}</option>`
                )
            }
        });
