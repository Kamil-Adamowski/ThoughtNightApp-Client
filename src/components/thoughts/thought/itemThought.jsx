
const ItemThought = ({thought: { key,title,description,id,likes,author,createdData }, del={} }) => (
    <div key={key} className="w-2/3">
        <h1 className=" text-3xl font-normal text-text">{title}</h1>
        <p className=" text-2xl font-thin text-text pt-2">{description}</p>
        <div className="flex pt-4">
            <p className="text-xl font-thin text-text">Likes: {likes}</p>
            <p className="text-xl font-thin text-text ml-8">Author: {author}</p>
            <p className="text-xl font-thin text-text ml-8">Create: {createdData}</p>
        </div>
        <div className="flex pt-4 items-center">
            <button className=" w-24 h-8 text-xl font-thin text-text border-solid border border-main border-opacity-50" onClick={del}>Delete</button>
            <h1 className=" text-md font-thin text-text ml-8">{id}</h1>
        </div>
  </div>
    )
export default ItemThought