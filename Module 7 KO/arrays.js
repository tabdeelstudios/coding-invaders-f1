// Define the Book constructor​

function Book(title, author, year) {
  this.title = title;

  this.author = author;

  this.year = year;

  this.id = Date.now().toString();

  this.ratings = [];

  this.reviews = {};
}

// Define the BookCollection object​

const BookCollection = {
  // Initialize an empty array to store the books​

  books: [],

  // Add a book to the collection​

  addBook: function (book) {
    this.books.push(book);

    console.log(`"${book.title}" has been added to the collection.`);
  },

  // Remove a book from the collection by ID​

  removeBookById: function (title) {
    const bookIndex = this.books.findIndex((book) => book.title === title);

    if (bookIndex === title) {
      console.log(`Book with ID ${title} not found in collection.`);
    } else {
      const removedBook = this.books.splice(this.books.indexOf(bookIndex), 1);

      console.log(
        `"${removedBook[0].title}" has been removed from the collection.`
      );
    }
  },
  // Search for books by title​

  searchByTitle: function (title) {
    const matchedTitles = this.books.filter((book) =>
      book.title.includes(title)
    );

    if (matchedTitles.length === 0) {
      console.log(`No books found with title "${title}".`);
    } else {
      console.log(`Matching books:`);

      matchedTitles.forEach((book) =>
        console.log(`- ${book.title} by ${book.author} (${book.year})`)
      );
    }
  },

  // Add a rating to a book by ID​

  addRatingById: function (id, rating) {
    const book = this.books.find((book) => book.id === id);

    if (!book) {
      console.log(`Book with ID ${id} not found in collection.`);
    } else if (rating < 1 || rating > 5) {
      console.log(`Invalid rating: ${rating}. Rating must be between 1 and 5.`);
    } else {
      book.ratings.push(rating);

      console.log(`Rating of ${rating} has been added to "${book.title}".`);
    }
  },

  // Add a review to a book by ID and user name​

  addReviewById: function (id, username, review) {
    const book = this.books.find((book) => book.id === id);

    if (!book) {
      console.log(`Book with ID ${id} not found in collection.`);
    } else {
      book.reviews[username] = review;

      console.log(`"${username}" has added a review to "${book.title}".`);
    }
  },

  // Compute the average rating of books in the collection​

  computeAverageRating: function () {
    const totalRatings = this.books.reduce(
      (acc, book) => acc + book.ratings.length,
      0
    );

    const totalScore = this.books.reduce(
      (acc, book) =>
        acc + book.ratings.reduce((acc, rating) => acc + rating, 0),
      0
    );

    if (totalRatings === 0) {
      console.log(`No ratings found in collection.`);
    } else {
      console.log(
        `The average rating of books in the collection is ${(
          totalScore / totalRatings
        ).toFixed(1)}.`
      );
    }
  },
};

let choice;

do {
  console.log("Menu:");
  console.log("1. Add a book");
  console.log("2. Remove a book");
  console.log("3. Search for books by title");
  console.log("4. Add a rating to a book");
  console.log("5. Add a review to a book");
  console.log("6. Compute the average rating of books");
  console.log("7. Exit");

  choice = parseInt(prompt("Enter your choice:"));

  switch (choice) {
    case 1:
      // Add a book
      const title = prompt("Enter the book title:");
      const author = prompt("Enter the book author:");
      const year = parseInt(prompt("Enter the book year:"));
      const book = new Book(title, author, year);
      BookCollection.addBook(book);
      break;

    case 2:
      // Remove a book
      const id = prompt("Enter the book ID:");
      BookCollection.removeBookById(id);
      break;

    case 3:
      // Search for books by title
      const searchTitle = prompt("Enter the title to search:");
      BookCollection.searchByTitle(searchTitle);
      break;

    case 4:
      // Add a rating to a book
      const ratingId = prompt("Enter the book ID:");
      const ratingValue = parseInt(prompt("Enter the rating (1-5):"));
      BookCollection.addRatingById(ratingId, ratingValue);
      break;

    case 5:
      // Add a review to a book
      const reviewId = prompt("Enter the book ID:");
      const username = prompt("Enter your username:");
      const review = prompt("Enter your review:");
      BookCollection.addReviewById(reviewId, username, review);
      break;

    case 6:
      // Compute the average rating of books
      BookCollection.computeAverageRating();
      break;

    case 7:
      console.log("Exiting...");
      break;

    default:
      console.log("Invalid choice.");
      break;
  }
} while (choice !== 7);

// create some book objects​

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

const book3 = new Book("1984", "George Orwell", 1949);

const book4 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);

// add the books to the collection​

BookCollection.addBook(book1);

BookCollection.addBook(book2);

BookCollection.addBook(book3);

BookCollection.addBook(book4);

// remove book with id 2 from the collection​

BookCollection.removeBookById(2);

// search for books with 'the' in the title​

console.log(BookCollection.searchByTitle("the"));

// add a rating of 4 to book with id 1​

BookCollection.addRatingById(1, 4);

// add a review to book with id 1​

BookCollection.addReviewById(1, "John", "This book was great!");

// compute the average rating of all books in the collection​

console.log(BookCollection.computeAverageRating());
