module.exports = {
    openapi: "3.0.3", // present supported openapi version
    info: {
      title: "Users Management API Documentation", // short title.
      description: "A simple users management API", //  desc.
      version: "1.0.0", // version number
      contact: {
        name: "Nguyễn Cảnh Quang", // your name
        email: "saunguyencanh@gmail.com", // your email
        url: "https://www.facebook.com/CanhQuangg/", // your website
      },
    },

    components: {
        schemas: {
          // id model
          id: {
            type: "string", // data type
            description: "An id of a user", // desc
            example: "6279461c97c4b75d49d2858d", // example of an id
          },
          // user model
          User: {
            type: "object", // data type
            properties: {
              id: {
                type: "string", // data-type
                description: "User identification number", // desc
                example: "6279461c97c4b75d49d2858d", // example of an id
              },
              name: {
                type: "string", // data-type
                description: "User's name", // desc
                example: "Nguyễn Cảnh Quang", // example of a name
              },
              email: {
                type: "string", // data type
                description: "User's email", // desc
                example: "saunguyencanh@gmail.com", // example of a completed value
              },
              gender: {
                  type: "string", //data type
                  description: "User's gender. (Male or Female)",
                  example: "Male",
              },
              status: {
                  type: "string",
                  description: "Status of an user. (Active or Inactive)",
                  example: "Active",
              },
            },
        },
          // User input model
          UserInput: {
            type: "object", // data type
            properties: {
              name: {
                type: "string", // data-type
                description: "User's name", // desc
                example: "Tôn Ngộ Không", // example of a name
              },
              email: {
                type: "string", // data type
                description: "User's email", // desc
                example: "ngokhongne@gmail.com", // example of a completed value
              },
              gender: {
                  type: "string", //data type
                  description: "User's gender. (Male or Female)",
                  example: "Male",
              },
              status: {
                  type: "string",
                  description: "Status of an user. (Active or Inactive)",
                  example: "Active",
              },
            },
          },
        },
    },
    paths: {
        "/api/users": {
            get: {
                tags: ["User CRUD operations"], // operation's tag.
                description: "Get users", // operation's desc.
                operationId: "getUsers", // unique operation id.
                parameters: [], // expected params.
                // expected responses
                responses: {
                  // response code
                  200: {
                    description: "Get users successfully", // response desc.
                    content: {
                      // content-type
                      "application/json": {
                        schema: {
                          $ref: "#/components/schemas/User", // Todo model
                        },
                      },
                    },
                  },
                },
              },
            
              post: {
                tags: ["User CRUD operations"], // operation's tag
                description: "Create an user", // short desc
                operationId: "createUser", // unique operation id
                parameters: [], // expected params
                requestBody: {
                  // expected request body
                  content: {
                    // content-type
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/UserInput", // todo input data model
                      },
                    },
                  },
                },
                // expected responses
                responses: {
                  // response code
                  201: {
                    description: "Todo created successfully", // response desc
                  },
                  // response code
                  500: {
                    description: "Server error", // response desc
                  },
                },
              }
        },

        "/api/users/{id}": {
            put: {
                tags: ["User CRUD operations"], // operation's tag
                description: "Update user", // short desc
                operationId: "updateUser", // unique operation id
                parameters: [
                  // expected params
                  {
                    name: "id", // name of param
                    in: "path", // location of param
                    schema: {
                      $ref: "#/components/schemas/id", // id model
                    },
                    required: true, // mandatory
                    description: "Id of user to be updated", // short desc.
                  },
                ],
                requestBody: {
                    // expected request body
                    content: {
                      // content-type
                      "application/json": {
                        schema: {
                          $ref: "#/components/schemas/UserInput", // todo input data model
                        },
                      },
                    },
                  },

                // expected responses
                responses: {
                  // response code
                  200: {
                    description: "Todo updated successfully", // response desc.
                  },
                  // response code
                  404: {
                    description: "Todo not found", // response desc.
                  },
                  // response code
                  500: {
                    description: "Server error", // response desc.
                  },
                },
              },

              get: {
                tags: ["User CRUD operations"], // operation's tag
                description: "Update user", // short desc
                operationId: "updateUser", // unique operation id
                parameters: [
                  // expected params
                  {
                    name: "id", // name of param
                    in: "query", // location of param
                    schema: {
                      $ref: "#/components/schemas/id", // id model
                    },
                    required: true, // mandatory
                    description: "Id of user to be show", // short desc.
                  },
                ],

                // expected responses
                responses: {
                  // response code
                  200: {
                    description: "Todo updated successfully", // response desc.
                  },
                  // response code
                  404: {
                    description: "Todo not found", // response desc.
                  },
                  // response code
                  500: {
                    description: "Server error", // response desc.
                  },
                },
              },

            delete: {
                tags: ["User CRUD operations"], // operation's tag
                description: "Deleting an user", // short desc
                operationId: "deleteUser", // unique operation id
                parameters: [
                  // expected parameters
                  {
                    name: "id", // name of param
                    in: "path", // location of param
                    schema: {
                      $ref: "#/components/schemas/id", // id model
                    },
                    required: true, // mandatory
                    description: "Deleting an exist user", // param desc
                  },
                ],
                // expected responses
                responses: {
                  // response code
                  200: {
                    description: "Todo deleted successfully", // response desc
                  },
                  // response code
                  404: {
                    description: "Todo not found", // response desc
                  },
                  // response code
                  500: {
                    description: "Server error", // response desc
                  },
                },
              },
        },
    },
};
