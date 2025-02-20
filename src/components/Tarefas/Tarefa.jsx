import { useState } from "react"; /* Importa o uso de estados */
import "./Tarefa.css"; /* Importa o css do componente */

function Concluir(props) {
  // Estado status (verdadeiro ou falso), iniciando como falso
  const [status, setStatus] = useState(false); 
  // Estado cor iniciado como "Concluir"
  const [cor, setCor] = useState("Concluir"); 

  /* Função "Seguir" que é chamada ao clicar no botão */
  function AlternarStatus() {
    // Inverte o valor do status (se estava verdadeiro, inverte para falso, e vice-versa)
    setStatus(!status); 
    // Se o status estiver como verdadeiro, define "cor" como "Concluir", se for falso, como "Concluido"
    setCor(status ? "Concluir" : "Concluido"); 
  }

  return (
    // Define a classe da div pelo estado "cor"
    <div>
<p className={status ? "Concluido" : "Concluir"}>{props.titulo}</p>
      {/* Ao clicar no botão, chama a função "AlternarStatus", a classe é definida pela lógica "Se o status estiver como verdadeiro, define "cor" como "Concluir", se for falso, como "Concluido", o texto de dentro do botão também é definido pela mesma lógica */}
      <button onClick={AlternarStatus} className={status ? "Concluido" : "Concluir"}>
        {status ? "Concluido" : "Concluir"}
      </button>
    </div>
    //teste 
  );
}

export default Concluir;
