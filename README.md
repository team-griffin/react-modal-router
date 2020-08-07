# react-modal-router

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ModalRouter, ModalRoute, usePush } from 'react-modal-router';
import Modal from 'react-modal';

function Page(props) {
  const push = usePush();

  function openModal() {
    push('/foo');
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

          <ModalRoute path="/foo" render={({ router }) => {

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

## API
### ModalRouter
```tsx
<ModalRouter>
  {children}
</ModalRouter>
```

### ModalRoute
```tsx
<ModalRoute
  path={pathString}
  render={(props: { router: Router }) => Element}
/>
```

### usePush
```ts
() => (path: string, params?: object) => void
```

### useCloseModal
```ts
() => () => void
```

### useParams
```ts
() => object | null
```

### useParam
```ts
(key: string) => any
```

### useModalRouter
```ts
() => Router
```
