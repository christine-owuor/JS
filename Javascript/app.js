var person = {
	firstname: "Jane",
	lastname: "Doe",
	age: 45,
	gender: "Female"
}
//document.write(person.firstname);
//document.write("<br>");
//document.write(person.gender);

$('.person').append('<p> Firstname: '  + person.firstname + '</P>');
$('.person').append('<p> Lastname: ' + person.lastname + '</P>');
$('.person').append('<p> Age: '  + person.age + '</P>');
$('.person').append('<p> Gender:  '  + person.gender + '</P>');
		           