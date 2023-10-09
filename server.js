const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require("@apollo/server/standalone")
const typeDefs = require("./src/schema")
const resolvers = require("./src/resolvers")

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

const startSever = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 5000 }
    })
    console.log(`
        Server is Started at ${url}
    `);
}

startSever()