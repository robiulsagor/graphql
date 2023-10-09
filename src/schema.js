const typeDefs = `#graphql
    type Book  {
        title: String!
        author: String!
        published_year: Int
    }

    type Author{
        name: String
        books: [Book]
    }

    type Query{
        books: [Book]
        author(name: String): Author
    }
`
module.exports = typeDefs