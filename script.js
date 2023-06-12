$(document).ready(function() {
    // Fetch person details from the server
    $.get('/person-details', function(persons) {
      var detailsContainer = $('#personDetails');
  
      // Iterate through each person and create a paragraph for their details
      persons.forEach(function(person) {
        var details = `<p><strong>Name:</strong> ${person.name}</p>`;
        details += `<p><strong>Book ID:</strong> ${person.bookId}</p>`;
        details += `<p><strong>Address:</strong> ${person.address}</p>`;
  
        detailsContainer.append(details);
      });
    });
  });
  