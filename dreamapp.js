// BookWorm App - Interactive Version

// Import readline-sync for user input // values, data types, and operations
const readline = require('readline-sync');

// Array for all books
let books = [];

// Add a new book using function; values, data types, and operations (VDTO)
// Stringing Characters
// Template Literals 
// User Input 
function addBook() {
    // Ask user for book details // VTDO
    let title = readline.question("Enter the book title: ");
    console.log(`I like "${title}" too!`); // Respond to the book title
    let author = readline.question("Enter the author of the book: ");

// Array of possible affirmations // reply to book author
    let affirmations = [
    "is phenomenal!",
    "is amazing!",
    "is a fantastic writer!",
    "is a genius!",
    "writes beautifully!"
    ];

// Pick a random affirmation // operations // conditionals // strings //userinput 
    let randomIndex = Math.floor(Math.random() * affirmations.length);
    console.log(`Author ${author} ${affirmations[randomIndex]}`);
    let genre = readline.question("Enter the book genre: ");
    console.log(`Oh, I love ${genre} books too!`); // Respond to genre // creating and using objects using the math module 
    let pages = Number(readline.question("Enter the number of pages: "));
    if (pages > 500) {
        console.log("Oh, that'll be a killer!");
    } else if (pages < 100) {
        console.log("That'll be an easy read!");
    } else {
        console.log("Sounds like a nice length!");
    }
    let rating = Number(readline.question("Rate the book (1-5): "));

    // Create a book object // object
    let book = {
        title: title,
        author: author,
        genre: genre,
        pages: pages,
        rating: rating,
        // using a loop to give a recommendation //conditionals // control structures and logic // 
        recommend: function() {
            if (this.rating >= 4) return "Highly recommended!";
            else if (this.rating >= 2) return "Worth a read.";
            else return "Maybe try a different book next time.";
        }
    };

    // Add the book to the array // using arrays //strings 
    books.push(book);
    console.log(`\n"${title}" by ${author} has been added to your library!\n`);
}

// Function to display all books
function displayAllBooks() {
    let totalPages = 0;

    console.log("Your Book Library"); // loop
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        console.log(
            `${i + 1}. ${book.title} (${book.genre}) - ${book.pages} pages | Rating: ${book.rating} stars`
        );
        console.log(`   Recommendation: ${book.recommend()}\n`);
        totalPages += book.pages; // Add to total pages
    }

    console.log(`Total pages read: ${totalPages}`); //temperate literals // character strings
}

// Ask the user how many books they want to enter
let numBooks = Number(readline.question("How many books do you want to enter? "));

// Use a for loop to add that many books
for (let i = 0; i < numBooks; i++) {
    console.log(`\n--- Enter Book ${i + 1} ---`);
    addBook();
}

// Display all books at the end
displayAllBooks();

console.log(`\nThank you for adding ${numBooks} books to BookWorm! Happy Reading! \u263A"`);
