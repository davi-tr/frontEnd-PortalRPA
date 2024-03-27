import React from 'react';
import './Sidebar.css'; // Importando o arquivo CSS para estilização

const Sidebar = ({ handleRectangleClick, clickedCategory }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-menu">
        <div className="sidebar-overlap-group">
          <div className="sidebar-image"><img className="sidebar-logo" src="/assets/logo-grupo.png" alt="Logo do Grupo" /></div>
          <div className="sidebar-overlap">
            {/* Emitir evento com categoria 'Canteiro' quando clicado */}
            <div
              className={`sidebar-rectangle ${clickedCategory === 'Canteiro' ? 'clicked' : ''}`}
              onClick={() => handleRectangleClick('Canteiro')}
            ></div>
            <div className="sidebar-text-wrapper">Canteiro</div>
          </div>
          <div className="sidebar-divider"></div>
          <div className="sidebar-overlap">
            {/* Emitir evento com categoria 'Contabilidade' quando clicado */}
            <div
              className={`sidebar-rectangle ${clickedCategory === 'Contabilidade' ? 'clicked' : ''}`}
              onClick={() => handleRectangleClick('Contabilidade')}
            ></div>
            <div className="sidebar-text-wrapper-2">Contabilidade</div>
          </div>
          <div className="sidebar-divider"></div>
          <div className="sidebar-overlap-2">
            {/* Emitir evento com categoria 'Fiscal' quando clicado */}
            <div
              className={`sidebar-rectangle ${clickedCategory === 'Fiscal' ? 'clicked' : ''}`}
              onClick={() => handleRectangleClick('Fiscal')}
            ></div>
            <div className="sidebar-text-wrapper-3">Fiscal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
