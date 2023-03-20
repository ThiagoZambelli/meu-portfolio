<img align="right" width="50%" style="margin-top:-20px" src="public/eu.png">

</br>
</br>

<div dsplay="inline-block">
 
 <h1 align="left">Bem-Vindo ao Projeto -> Meu Portfolio </h1>
 <h2 align="left">Feito por : Thiago Zambelli</h2>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>

&nbsp;

<hr />

&nbsp;


### Card Flip das `Tecnologias Conhecidas`

<img width="100%" style="margin-top:-20px" src="public/assets/FlipTecnologias.gif">

---

&nbsp;

- ### Config para utilização do `absolut import do React`:

&nbsp;

 > Consisite em um arquivo JSON na rais do projeto que possibilita os absolut import
~~~JSON
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
}
~~~

&nbsp;

- ### Rotas dentro de rotas:

&nbsp;

 > Foi utilizado uma rota como `Pagina padrao` qu abrigou dentro de si as demais rotas, para que não houvesse repetição de codigo

~~~JavaScript

          //Neste caso o ´<PaginaPadrao />´  esta carregando todos os componentes que sao iguais a todas as rotas
          <Route path="/" element={<PaginaPadrao />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobremim" element={<SobreMim />} />
          </Route>

          // E dentro dela retorna uma ´<main>´ com o banner o rodape e <Outlet /> que porsua vez carrega a rota atual
          <main>
            <Banner />
            <Outlet />
            <Rodape />
        </main>
~~~