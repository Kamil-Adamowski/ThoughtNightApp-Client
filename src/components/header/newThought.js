import { useState } from "react";
import Modal from "../modals/index";
import { CreateThoughtForm } from '../thoughts/index'

const NewThought = () => {
  const [modal, openModal] = useState(false);

  return (
    <div>
    <button className=" text-xl font-light text-main"  onClick={() => openModal(true)}>Dodaj swoją myśl</button>
    <Modal 
        open={modal} 
        title="New Thought" 
        close={() => openModal(false)}>
      <CreateThoughtForm />
    </Modal>
    </div>
  );
};
export default NewThought;
