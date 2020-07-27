import React from 'react';
import { ModalRouter, ModalRoute, useModalRouter } from '../src';
import Modal from 'react-modal';

export default { title: 'Main' };

// Modal.setAppElement('#modal-portal');

export const Main = () => {

  function InnerComponent(props) {
    const modalRouter = useModalRouter();

    function openModal() {
      modalRouter.actions.setPath('foo');
    }

    return (
      <div>
        <p>I am page content</p>
        <button type="button" onClick={openModal}>
          Open foo modal
        </button>
      </div>
    );
  }

  return (
    <div>
      <ModalRouter>
        <div>
          <InnerComponent/>

          <ModalRoute path="foo" render={({ router }) => {

            return (
              <Modal
                isOpen={true}
                onRequestClose={router.actions.closeModal}
              >
                <p>I am in a modal</p>
              </Modal>
            );
          }}/>
        </div>
      </ModalRouter>
    </div>
  );
};