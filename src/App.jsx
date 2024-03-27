import React, { useState, useEffect } from 'react';
import './App.css'; // Importando o arquivo CSS para estilização
import Sidebar from './Sidebar';

const App = () => {
  // Definindo um estado para armazenar os dados da API
  const [data, setData] = useState(null);

  // Função para buscar os dados da API
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8083/RPA');
      const jsonData = await response.json();
      setData(jsonData.content); // Acessando diretamente a propriedade 'content' que contém os dados
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  // Chamando a função de busca de dados quando o componente for montado
  useEffect(() => {
    fetchData();
  }, []); // A lista de dependências está vazia para que esta chamada de efeito seja executada apenas uma vez após a renderização inicial

  return (
    <div>
    <Sidebar/>
    <div className="horizontal-container">
      {data ? (
        data.map(item => (
          <div className="box" key={item.id}>
            <div className={`rpa ${item.status ? 'status-true' : 'status-false'}`}>
              <div className="overlap-group">
                <div className="rectangle"></div>
                <div className="div"></div>
                <div className="text-wrapper">{item.nome}</div>
                <div className="text-wrapper-2">{new Date(item.hora).toLocaleTimeString()}</div>
                <div className="text-wrapper-3">{item.maquina}</div>
                <div className="text-wrapper-5">Máquina</div>
                <div className="text-wrapper-6">Última Atualização</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
    </div>
  );
};

export default App;
