import { gql } from "@apollo/client";
import { useMutation } from '@apollo/client';

export const CREATE_THOUGHT = gql`
  mutation createThought(
    $title: String!
    $description: String!
    $createdData: String!
    $likes: Int!
    $author: String!
  ) {
    createThought(
      input: {
        title: $title
        description: $description
        createdData: $createdData
        likes: $likes
        author: $author
      }
    ) {
      id
      title
      description
      createdData
      likes
      author
    }
  }
`;

const CreateThoughtForm = () => {
  let title, description, author;
  const likes = 0;
  const DateNow = new Date().toISOString().slice(0, 10);
  const [createThought] = useMutation(CREATE_THOUGHT);

  return (
      <form onSubmit={()=> {
        createThought({
            variables: {
            title: title.value,
            description: description.value,
            createdData: DateNow,
            likes: likes,
            author: author.value,
            },
          });
      }}
      className="w-full h-screen flex flex-col justify-center items-center"
      >
        <input
          ref={value => title = value}
          className="mt-4 w-96 h-10 rounded-sm p-2"
          type="text"
          placeholder="title"
          id="title"
        ></input>
        <textarea
          className="mt-4 w-96 h-3/5 rounded-sm p-2 resize-none"
          ref={value => description = value}
          type="text"
          placeholder="description"
          id="description"
        ></textarea>
        <input
          className="mt-4 w-96 h-10 rounded-sm p-2"
          ref={value => author = value}
          type="text"
          placeholder="author"
          id="author"
        ></input>
        <button
          className="mt-4 w-96 h-10 rounded-sm p-2 bg-main text-scdBackground"
          type="submit"
          >
            Update Todo
          </button>
      </form>
  );
};

export default CreateThoughtForm
