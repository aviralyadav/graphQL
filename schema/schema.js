const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema
} = graphql;

const users = [
    {id: '2', firstName: 'Aviral', age: 25},
    {id: '5', firstName: 'Devid', age: 22}
];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
}); 

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return _.find(users, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({query: RootQuery});