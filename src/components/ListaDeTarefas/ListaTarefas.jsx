import "./ListaTarefas.css";
import Tarefa from "../Tarefas/Tarefa";

function ListaTarefas() {
  return (
    <>
      <header>Lista-de-Tarefas</header>
      <div className="tarefas">
        <Tarefa titulo="Revisar código lista-de-tarefas" />
        <Tarefa titulo="Comentar código lista-de-tarefas" />
        <Tarefa titulo="Organizar LinkedIn" />
        <Tarefa titulo="Organizar mesa" />
        <Tarefa titulo="Terminar livro" />
      </div>
    </>
  );
}

export default ListaTarefas;
