import {CreateButton} from './components/CreateButton';
import {Header} from './components/Header';
import {Input} from './components/Input';
import {List} from './components/List';

function App() {
  return (
    <div>
      <Header />

      <main>
        <div>
          <Input />
          <CreateButton />
        </div>

        <List />
      </main>
    </div>
  );
}

export default App;
