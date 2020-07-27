# react-modal-router

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ModalRouter, ModalRoute, useModalRouter } from 'react-modal-router';
import Modal from 'react-modal';

function Page(props) {
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

function App() {
  return (
    <div>
      <ModalRouter>
        <div>
          <Page/>

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
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Development