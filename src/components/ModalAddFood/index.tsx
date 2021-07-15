import { createRef } from 'react';

import Modal from '../Modal';
import Input from '../Input';

import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import { FormHandles } from '@unform/core';

interface ModalFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: FormData) => void;
}

interface FormData {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

function ModalAddFood({isOpen, setIsOpen, handleAddFood}: ModalFoodProps) {
  const formRef = createRef<FormHandles>();

  const handleSubmit = async (data: FormData) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
