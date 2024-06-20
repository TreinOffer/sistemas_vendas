import React from 'react'
// import "./estilo.css"
import cabecalho from '../cabecalho'

function CursosEmpresa() {
  return (
    <>

      {cabecalho()}

      {/*<section>
<div class="search">
    <span class="search-icon material-symbols-outlined">search</span>
    <input class="search-input" type="search" placeholder="Buscar cursos">
</div>

</section> */}

      <div id="cursoEmpresa" class="container">
        <div class="one">

          <img src="img/pedreiro.png" alt="" />
          <div class="string">Administração em Agronegócio</div>
          <i class="fa fa-download iconCurso"></i>

        </div>
        <div class="one">
          <div>
            <img src="img/imagem.png" alt="" />
            <div class="string">Cadeias Produtivas Agrícolas</div>
            <i class="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div class="one">
          <div>
            <img src="img/pintor.png" alt="" />
            <div class="string">Economia Rural</div>
            <i class="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div class="one">
          <div>
            <img src="img/amor.png" alt="" />
            <div class="string">Fundamentos de Zootecnia</div>
            <i class="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div class="one">
          <div>
            <img src="img/celebrelo.png" alt="" />
            <div class="string">Gestão de Custos</div>
            <i class="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div class="one">
          <div>
            <img src="img/industrial.png" alt="" />
            <div class="string">Logística</div>
            <i class="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div class="one">
          <div>
            <img src="img/mecanica.png" alt="" />
            <div class="string">Mecanica Industrial</div>
            <i class="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div class="one">
          <div>
            <img src="img/farmacia.png" alt="" />
            <div class="string">Técnico em soldagem</div>
            <i class="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div class="one">
          <div>
            <img src="img/eletrotecnica.jpg" alt="" />
            <div class="string">Eletrotecnica</div>
            <i class="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div class="one">
          <div>
            <img src="img/logistica.png" alt="" />
            <div class="string">Política Agrícola</div>
            <i class="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div class="one">
          <div>
            <img src="img/alimento.png" alt="" />
            <div class="string">Produção Vegetal</div>
            <i class="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div class="one">
          <div>
            <img src="img/maquinapesada.png" alt="" />
            <div class="string">Operador de Máquinas</div>
            <i class="fa fa-download iconCurso"></i>
          </div>
        </div>
      </div>

    </>
  )
}

export default CursosEmpresa