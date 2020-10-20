/**
 * Babel: Converter (transpilar) código do React para um código que o browawe entenda;
 * Webpack: Para cada tipo de arquivo (.js, .css, .png) eu vou converter o código de uma maneira diferente;
 * 
 * Loaders: babel-loader, css-loader, image-loader;
 * 
 * JSX: HTML dentro do JavaScript (JavaScript XML);
 * 
 * Componentes: O React é todo dividido em componentes, que nada mais é que funções que retornam
 * um código HTML;
 * 
 * Propriedade: Quando vc passa uma informação do componete pai para o componente filho, 
 * essa informação é a propriedade (paramentros, atributos);
 * 
 * Estado & Imutabilidade: O estado é utilizado para armazenar/manipular dados no react, ele
 * utiliza a "useState" que retorna um array com 2 posições:
 * 1 - Variável com o seu valor inicial (projects);
 * 2 - Função para atualizarmos esse valor (setProjects);
 * Na imutabilidade não se pode alterar diretamento a variável inicial (projects), utilizamos a função
 * para atualizar esse valor (setProjects);
 * 
 * unsplach.com site de fotos;
 * 
 * useEffect: utilizada para disparar funções sempre que tivermos uma informação alterada ou 
 * para exibir uma informação;
 * 
 */