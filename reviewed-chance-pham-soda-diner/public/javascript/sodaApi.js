$( document ).ready(function() {
	$('#editModal').hide()
	$("#exitModal").click(function (e) {
		$('#editModal').fadeToggle()
	})
	
	
	// CREATE GET REQUEST ON CLICK - (target eventhandler)
	
	$("#allSoda").click(function (e) {
		console.log('clicked')
		console.log('clicked')	
		// Prevent the form from submitting via the browser.
		e.preventDefault()
		
		// CALL AJAX GET FUNCTION
		ajaxGet()
	})
	
	// CREATE DELETE REQUEST ON CLICK - (target eventhandler)
	$("body").on('click', 'button.deleteSoda', (e) => {
		
		// Prevent the form from submitting via the browser.
		e.preventDefault()
		const targetId = e.target.id
		
		console.log('deleting, ', targetId)
		ajaxDelete(targetId)
	})
	// CREATE Update REQUEST ON CLICK - (target eventhandler)
	$("body").on('click', 'button.editSoda', (e) => {
		$('#editModal').fadeToggle()
		// Prevent the form from submitting via the browser.
		e.preventDefault()
		const targetId = e.target.id
		
		console.log('Updating, ', targetId)
		ajaxUpdate(targetId)
	})
	
	// SUBMIT FORM ON CLICK - (target eventhandler)
	$("body").on('click', 'button.OpenEditSoda', (e) => {
		$('#editModal').fadeToggle()
		// Prevent the form from submitting via the browser.
		e.preventDefault()
		const targetId = e.target.id
		
		console.log('Filling In, ', targetId)
		fillIn(targetId)
	})
	// SUBMIT FORM ON CLICK - (target eventhandler)
	$("body").on('click', 'button.serveSoda', (e) => {
		
		// Prevent the form from submitting via the browser.
		e.preventDefault()
		const targetId = e.target.id
		
		console.log('Serving, ', targetId)
		ajaxServe(targetId)
	})
	// SUBMIT FORM ON CLICK - (target eventhandler)
	$("body").on('click', 'button.unserveSoda', (e) => {
		
		// Prevent the form from submitting via the browser.
		e.preventDefault()
		const targetId = e.target.id
		
		console.log('Serving, ', targetId)
		ajaxUnserve(targetId)
	})
	$("#sodaForm").submit(function(e) {
		
		// Prevent the form from submitting via the browser.
		e.preventDefault();
		
		// CALL AJAX POST FUNCTION
		ajaxPost();
		
	});
})

// CREATE AJAX GET FUNCTION
function ajaxGet() {
	$.ajax({
		type: "GET",
		url:  "/api/sodas/all",
		// IF SUCCESS, DISPLAY
		success: function (result) {
			
			$('#getResultDiv ul').empty();
			$.each(result, function (i, soda) {
				
				$('#getResultDiv .list-group').append(sodaData(soda, i))
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
function ajaxDelete(sodaId) {
	$.ajax({
		type: 'DELETE',
		url: `/api/sodas/delete/${sodaId}`,
		
		// IF SUCCESS, DISPLAY IN CONSOLE
		success: (result) => {
			$('#postResult').text(`soda successfully deleted!`)
			alert("You have deleted a soda")
			console.log('deleted ', result)
		}
	})
	ajaxGet()
}
// CREATE AJAX serve FUNCTION
function ajaxServe(sodaId) {
	$.ajax({
		type: 'POST',
		url: `/api/sodas/serve/${sodaId}`,
		
		// IF SUCCESS, DISPLAY IN CONSOLE
		success: (result) => {
			$('#postResult').text(`soda successfully served!`)
			
			console.log('served ', result)
		}
	})
	ajaxGet()
}
// CREATE AJAX unserve FUNCTION
function ajaxUnserve(sodaId) {
	$.ajax({
		type: 'POST',
		url: `/api/sodas/unserve/${sodaId}`,
		
		// IF SUCCESS, DISPLAY IN CONSOLE
		success: (result) => {
			$('#postResult').text(`soda successfully UNserved!`)
			
			console.log('UNserved ', result)
		}
	})
	ajaxGet()
}
function fillIn(sodaId) {
	let sodaNameSave = $(`#${sodaId}`).parent().attr('name')
	let sodaFizzinessSave = $(`#${sodaId}`).parent().attr('fizziness')
	let sodaRatingSave = $(`#${sodaId}`).parent().attr('rating')
	
	console.log(sodaId)
	console.log(sodaNameSave)
	$('#nameEdit').val(sodaNameSave)
	$('#fizzinessEdit').val(sodaFizzinessSave)
	$('#ratingEdit').val(sodaRatingSave)
	$('#editSodaId').attr('id', sodaId)
}
function ajaxUpdate(sodaId) {
	
	const formData = {
		name: $('#nameEdit').val(),
		fizziness: Number.parseInt($('#fizzinessEdit').val()),
		rating: Number.parseInt($('#ratingEdit').val()),
		
	}
	$.ajax({
		type: 'POST',
		contentType: "application/json",
		url: `/api/sodas/update/${sodaId}`,
		data: JSON.stringify(formData),
		dataType: 'json',
		
		// IF SUCCESS, DISPLAY IN CONSOLE
		success: (result) => {
			ajaxGet()
			alert("You have updateda soda")
			console.log('success update')
			
			
		}
	})
}
// CREATE AJAX POST FUNCTION
function ajaxPost(){
	
	// PREPARE FORM DATA
	const formData = {
		name: $("#name").val(),
		fizziness: Number.parseInt($("#fizziness").val()),
		rating: Number.parseInt($("#rating").val()),
		
	}
	console.log(formData)
	// POST DATA
	$.ajax({
		
		// CREATE HEADER
		type : "POST",
		contentType : "application/json",
		url : "api/sodas/save",
		data : JSON.stringify(formData),
		dataType : 'json',
		
		// IF SUCCESS, DISPLAY VEHICLE OBJECT
		success : function(soda) {
			$("#postResult").html("<p>" + 
			"Post Successfully! <br>" +
				"--> " + soda.name + " " + soda.fizziness + " " + soda.rating + " " + "</p>");
			
			alert("You have created a soda")
		},
		error : function(e) {
			let bruh = "ERROR: " + e.responseJSON.message;
			alert(bruh)

			// DISPLAY IN CONSOLE
			console.log("ERROR: ", e.responseText);
		}
	});
	
	// RESET FORM DATA AFTER POSTING
	resetData(); ajaxGet()
	
}


// CREATE RESET FORM DATA FUNCTION
function resetData() {
	$("#name").val("");
	$("#fizziness").val("");
	$("#rating").val("");
	
}

// CREATE FUNCTION THAT APPENDS DELETE BUTTON ON EACH VEHICLE OBJECT
const sodaData = (soda, sodaNumber) => {
	const deleteButton = document.createElement('button')
	deleteButton.onclick = () => console.log('delete soda id ', soda.id)
	return (
		`<div name="${soda.name}" fizziness="${soda.fizziness}" rating="${soda.rating}">
		<div># ${sodaNumber+1}</div>
		<div>Soda: ${soda.name}</div>
		<div>Fizziness: ${soda.fizziness}</div>
		<div>Rating: ${soda.rating}</div>
		<div>Serving: ${soda.serving}</div>
		<button class="deleteSoda" id="${soda._id}">Delete</button>
		<button class="serveSoda" id="${soda._id}">Serve This Soda</button>
		<button class="unserveSoda" id="${soda._id}">Stop Serving This Soda</button>
		<button class="OpenEditSoda" id="${soda._id}" name="${soda.name}" fizziness="${soda.fizziness}" rating="${soda.rating}" >Edit Soda</button>
		</div>
		<br/>`
		)
	}
