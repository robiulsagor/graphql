const books = require("./db");

const resolvers = {
    Query: {
        books: () => books,
        author: (_, args) => {
            const authorName = args.name;

            // Assuming that 'books' is an array of book objects
            const filteredBooks = books.filter(book => book.author === authorName);

            // Construct the 'Author' object with the filtered books
            const author = {
                name: authorName,
                books: filteredBooks,
            };

            return author;
        }
    }
}

module.exports = resolvers