// Assume the JSON data is in a file named 'employees.json'
const jsonFilePath = 'employees.json';

function fetchAndSortEmployees() {
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(employees => {
            // Sort the employees by age in ascending order
            employees.sort((a, b) => a.age - b.age);

            // Log the sorted list of employees to the console
            console.log(employees);
        })
        .catch(error => {
            console.error('Error fetching or parsing JSON:', error);
        });
}

// Call the function to fetch and sort employees
fetchAndSortEmployees();
