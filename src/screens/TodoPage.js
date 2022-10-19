import {  SafeAreaView } from "react-native";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader />
        <TodoList />
      </SafeAreaView>
    );
  };

  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}
