import { gql, useQuery, useMutation } from "@apollo/client";
import ItemThought from './itemThought'


export const FETCH_DATA = gql`
  query thoughts {
    thoughts {
      title
      description
      createdData
      likes
      author
      id
    }
  }
`;

export const DELETE_THOUGHT = gql`
  mutation deleteThought($id: ID!) {
    deleteThought(id: $id) {
      id
    }
  }
`;
           
const CreateThoughtForm = () => {
  const { loading, error, data } = useQuery(FETCH_DATA);
  const [deleteThought] = useMutation(DELETE_THOUGHT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.thoughts.map(
    (thought, index) =>
    <div key={index} className="w-full h-auto flex justify-center mt-12">
      <ItemThought
        thought={thought}
        del={() => deleteThought({ variables: { id: thought.id } })}
      />
    </div>
  );
};

export default CreateThoughtForm;
