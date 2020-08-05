import React from 'react';
import PageDefault from '../../componentes/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/BannerMain';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
      />
      </PageDefault>
    </div>
  );
}

export default App;
