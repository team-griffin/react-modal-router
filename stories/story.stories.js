import React from 'react';
import { ModalRouter, ModalRoute, useModalRouter } from '../src';
import Modal from 'react-modal';

export default { title: 'Main' };

// Modal.setAppElement('#modal-portal');

export const Main = () => {

  function InnerComponent(props) {
    const modalRouter = useModalRouter();

    function openFooModal() {
      modalRouter.actions.setPath('foo');
    }

    function openBarModal() {
      modalRouter.actions.setPath('bar');
    }

    return (
      <div>
        <p>I am page content</p>
        <button type="button" onClick={openFooModal}>
          Open foo modal
        </button>

        <button type="button" onClick={openBarModal}>
          Open bar modal
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
                <p>I am the foo modal</p>
              </Modal>
            );
          }}/>

          <ModalRoute path="bar" render={({ router }) => {

          return (
            <Modal
              isOpen={true}
              onRequestClose={router.actions.closeModal}
            >
              <div>
                <p>I am the bar modal</p>
                <button type="button" onClick={() => {
                  router.actions.setPath('foo');
                }}>
                  Go to foo modal
                </button>
              </div>
            </Modal>
          );
          }}/>
        </div>
      </ModalRouter>
    </div>
  );
};