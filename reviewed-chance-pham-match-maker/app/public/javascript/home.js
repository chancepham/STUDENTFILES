
$.get('/friends').then(function (data) {
    console.log(data);
    console.log(data.length)
    document.getElementById('#totalUsers').innerText = data.length

})

console.log('yeah?')