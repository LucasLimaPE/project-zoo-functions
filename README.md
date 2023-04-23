<h1 align="center">Project Zoo Functions</h1>

## :memo: Descrição

Este projeto foi criado com o objetivo de testar e aprimorar os conhecimentos iniciais em JavaScript e ES6 (ECMAScript 6) durante o Módulo de Fundamentos do Desenvolvimento Web na Trybe. Durante sua elaboração, foram praticadas habilidades essenciais, tais como:

* Utilizar funcionalidades do ES6;
* Produzir código legível;
* Utilizar Higher Order Functions;
* Utilizar Higher Order Functions de maneira conjunta;
* Interpretar testes unitários para criar soluções que os atendam.

O projeto consiste em implementar funções para atender os requisitos propostos, simulando a administração de dados de um zoológico, neste projeto foram utilizados testes que a Trybe disponibilizou para que cada função fosse desenvolvida utilizando TDD(Test Driven Development), entretanto, estes testes são de propriedade da Trybe e não estão disponíveis neste repositório.

## :books: Requisitos

1. Implementar a função `getSpeciesByIds` que será responsável por buscar as espéceis de animais por `id` e retornar um array contendo as espécies referentes aos ids passados como parâmetro, deve ser possível adicionar um ou mais `ids`.
  - Caso não receba parâmetro, deve retornar um array vazio.
  - Caso receba um único `id`, deve retornar um array com a espécie referente ao `id` recebido como parâmetro.
  - Caso receba mais de um `id`, deve retornar um array com as espécies referentes aos `ids` recebidos como parâmetro.

2. Implementar a função `getAnimalsOlderThan` que será responsável por verificar se todos os animais de uma determinada espécie possuem uma idade mínima específicada, a função deve receber como parâmetro o nome de uma espécie e uma idade mínima e retornar um booleano.

3. Implementar a função `getEmployeeByName` que será responsável por buscar uma pessoa colaboradora através do primeiro ou último nome dela recebido como parâmetro.
  - Caso não receba parâmetro, deve retornar um array vazio.
  - Caso receba o primeiro nome do funcionário, retorna o objeto do funcionário.
  - Caso receba o último nome do funcionário, retorna o objeto do funcionário.

4. Implementar a função `getRelatedEmployees` que será reponsável por retornar um array contendo os nomes das pessoas colaboradoras em que a pessoa gerente é reponsável.
  - Considerando a boa prática, a  função deve ser dividida em partes menores.
  - Implementar a função auxiliar `isManager` que será responsável por verificar se uma pessoa colaboradora é ou não gerente, esta função deverá retornar um booleano `true` ou `false`.
  - Implementar a função `getRelatedEmployees` que, utilizando a função `isManager`, verifica se o id recebido como parâmetro é de uma pessoa gerente, se `isManager` retornar true, a função retorna um array contendo os nomes das pessoas colaboradoras em que a pessoa gerente é responsável, se não, a função retorna um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"O id inserido não é de uma pessoa colaboradora gerente!"**.

```javascript
throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
```

5. Implementar a função `countAnimals` que será responsável por contabilizar a quantidade de animais de cada espécie.
  - Caso não receba um parâmetro, retorna um objeto cujo nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor.
  - Caso receba como parâmetro `{ specie: 'penguins' }`, retorna um número, a quantidade de pinguins no zoológico.
  - Caso receba como parâmetro `{ specie: 'giraffes', sex: 'female' }`, retorna um número, a quantidade de girafas do sexo feminino.

6. Implementar a função `calculateEntry` que será responsável por calcular o valor total da compra de bilhetes para um grupo de visitantes, a função deve receber um array de objetos como parâmetro, seguindo as boas praticas, a função deverá ter uma função auxiliar `countEntrants` que será responsável por calcular o total de visitantes de cada faixa etária. A função `countEntrants` deve receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:
  - Pessoas com idade menor que 18 anos são classificadas como crianças (child);
  - Pessoas com maior ou igual a 18 anos e menor que 50 são classificadas como adultas (adult);
  - Pessoas com idade maior ou igual a 50 anos são classificadas como pessoas com mais idade (senior).

6.1. O array recebido como parâmetro para ambas as funções deve ser no seguinte formato:

```javascript
const entrants = [
  { name: 'Matheus Goyas', age: 5 },
  { name: 'Professor Noel', age: 5 },
  { name: 'Thiago Braddock', age: 5 },
  { name: 'Guilherme Azevedo', age: 18 },
  { name: 'Gabriel Pesch', age: 18 },
  { name: 'Danillo Gonçalves', age: 50 },
];
```

6.2. Caso a função `countEntrants` receba `entrants` como parâmetro:

```javascript
countEntrants(entrants);
```

Deve retornar:

```javascript
{ "child": 3, "adult": 2, "senior": 1 }
```

6.3. Caso a função `calculateEntry` receba `entrants` como parâmetro:

```javascript
countEntrants(entrants);
```

Deve retornar:

```javascript
187.94
```

6.4. Caso não receba um parâmetro ou receba um array vazio a função deve retornar `0`.

7. Implementar a função `getAnimalMap` que será responsável por fazer um mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e sexo quando receber por parâmetro um objeto com suas especificações.
  - Caso não receba parâmetros, deve retornar os animais categorizados por localização.
  - Caso a opção `includeNames` não seja especificada, deve retornar os animais categorizados por lozalização.
  - Caso a opção `includeNames: true` seja especificada, deve retornar os nomes dos animais.
  - Caso a opção `sorted: true` seja espeficicada, deve retornar os nomes dos animais ordenados alfabeticamente.
  - Caso a opção `sex: 'female'` ou `sex: 'male'` seja especificada, deve retornar somente os nomes dos animais macho/fêmea.
  - Caso a opção `sex: 'female'` ou `sex: 'male'` seja especificada e a opção `sorted: true` também seja especificada, deve retornar somente os nomes dos animais macho/fêmea com os nomes ordenados alfabeticamente. 

8. Implementar a função `getSchedule` que será responsável por disponibilizar as informações dos animais em uma consulta para o usuário, o usuário deve poder acessar o cronograma da semana, de um dia ou de um animal específico.
  - Caso não receba parâmetros, deve retornar os horários para cada dia da semana e quais animais estarão disponíveis.
  - Caso receba parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis.
  - Caso receba um dia como parâmetro, deve retornar os horários para aquele dia e quais animais estarão disponíveis.
  - Caso receba o nome de um animal como parâmetro, deve retornar um array com os dias em que ele estará em exibição.

9. Implementar a função `getOldestFromFirstSpecies` que será responsável por buscar as informações do animal mais velho da primeira espécie gerenciada por uma pessoa colaboradora.
 - A função deve receber como parâmetro o id da pessoa colaboradora.
 - Caso receba o id de uma pessoa colaboradora como parâmetro, deve encontrar a primeira espécie de animal gerenciado pelo funcionário, e retornar um array com nome, sexo e idade do animal mais velho dessa espécie.

10. Implementar a função `getEmployeesCoverage` que será responsável por associar informações de cobertura das pessoas funcionárias.

10.1. O retorno da função deve ser um objeto com as seguintes propriedades:

```javascript
{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
  "fullName": "Sharonda Spry", // nome completo: firstName + lastName
  "species": [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
  "locations": [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
}
```
10.2. A função irá receber como parâmetro um objeto, que pode conter o id, o nome ou o sobrenome de uma pessoa colaboradora.

```javascript
// Exemplos de uso da função:

getEmployeesCoverage({ name: 'Sharonda' });
getEmployeesCoverage({ name: 'Spry' });
getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });

// Saída:

{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
  "fullName": "Sharonda Spry",
  "species": [ "otters", "frogs" ],
  "locations": [ "SE", "SW" ]
}
```

10.3. Caso a função seja chamada sem parâmetros, deve retornar um array com a cobertura de todas as pessoas funcionárias.

```javascript
// Exemplo de uso da função:

getEmployeesCoverage();

// Saída:

[
  {
    "id": "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
    "fullName": "Nigel Nelson",
    "species": [ "lions", "tigers" ],
    "locations": [ "NE", "NW" ],
  },
  {
    "id": "0e7b460e-acf4-4e17-bcb3-ee472265db83",
    "fullName": "Burl Bethea",
    "species": [ "lions", "tigers", "bears", "penguins" ],
    "locations": [ "NE", "NW", "NW", "SE" ],
  },
  {
    "id": "fdb2543b-5662-46a7-badc-93d960fdc0a8",
    "fullName": "Ola Orloff",
    "species": [ "otters", "frogs", "snakes", "elephants" ],
    "locations": [ "SE", "SW", "SW", "NW" ],
  },
  //[...]
];
```

10.4. Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, deve ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"Informações inválidas"** .

```javascript
throw new Error('Informações inválidas');
```

## :wrench: Tecnologias utilizadas
* JavaScript;
* ES6 (ECMAScript 6).

## :computer: Arquivos modificados/criados
Os arquivos estão dentro da pasta src:
* /src

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/LucasLimaPE">
        <img src="https://avatars.githubusercontent.com/u/94488633?s=400&u=c0fc6e9a64565b85fc249c1b7a302c7b674ff785&v=4" width="100px;" alt="Foto de Lucas Lima no GitHub"/><br>
        <sub>
          <b>LucasLimaPE</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto

Foram desenvolvidos 100% dos requisitos.