import TodoList from "../src/Components/TodoList/TodoList";
import TodoListContextProvider from "./Components/Context/Context";

function App() {
    return (
        <TodoListContextProvider>
            <div className="App">
                <TodoList/>
            </div>
        </TodoListContextProvider>
    );
}

export default App;
