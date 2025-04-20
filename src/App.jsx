import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div id="app">
            <h1 className="discipline-header">
                MAC0499 - Trabalho de Formatura Supervisionado
            </h1>
            <h2 className="project-title">
                Um estudo de formatos de codificação de audio e de seus
                respectivos codecs
            </h2>
            <div className="student-advisor">
                <p>
                    Guilherme Simões Santos Marin
                </p>
                <p>
                    {" "}
                    <span className="advisor">Orientador:</span> Marcelo Queiroz
                </p>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        {" "}
                        <a className="button" href="/proposta-de-trabalho.pdf">
                            Proposta de trabalho
                        </a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a className="button" href="">
                            Repositório do projeto
                        </a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a className="button" href="">
                            Monografia
                        </a>{" "}
                    </li>
                </ul>
            </nav>
            <section className="abstract">
                <h4 className="abstract-title">Resumo</h4>
                <p className="abstract-text">
                    A codificação de audio tem um papel central em aplicações
                    multimídia modernas, permitindo o armazenamento e a
                    transmissão eficientes do audio digital. Esse trabalho de
                    conclusão de curso apresenta um estudo abrangente dos
                    formatos de codificação de audio e de seus codecs, com o
                    objetivo duplo de fornecer uma fundamentação teórica sobre o
                    assunto e ao mesmo tempo conduzir uma avaliação empírica do desempenho de
                    cada formato sobre diversos tipos de conteúdos de audio. A
                    primeira fase do projeto consiste de uma revisão teórica
                    aprofundada acerca dos formatos de codificação de audio mais
                    utilizados atualmente, como por exemplo o MP3, o AAC e o
                    FLAC. Cada formato será analisado em termos das técnicas
                    de compressão utilizadas, dos modelos psicoacústicos
                    empregados e das categorias de audio aos quais eles
                    são comumente aplicados. A segunda fase consiste de uma investigação
                    empírica com o objetivo de comparar o resultado da aplicação de
                    diferentes codecs de audio dos formatos estudados sobre um conjunto de
                    sinais de audio representativos. Os resultados desse estudo
                    empírico serão comparados usando diversos critérios de qualidade de audio e de compressão.
                </p>
                {/* <p className="abstract-text">
                    O ensino de Computação para crianças e adolescentes é cada
                    vez mais importante na Era Digital. O conhecimento de
                    programação promove muitas competências fundamentais para o
                    pensamento crítico e lógico desses jovens. Por isso, ele vem
                    ganhando cada vez mais espaço nas escolas de educação básica
                    brasileiras, tornando-se parte dos currículos escolares.
                    Ferramentas de apoio pedagógico são fundamentais nesse
                    processo de aprendizagem e o uso de simulações interativas
                    na educação tem se mostrado eficaz em outras ciências. Nesse
                    sentido, este Trabalho de Formatura teve como objetivo a
                    criação e validação de um produto mínimo viável (MVP -
                    Minimum Viable Product) de uma ferramenta web de simulações
                    interativas de conceitos de lógica de programação para o
                    ensino de Computação no ensino fundamental. A ferramenta
                    considera conceitos de lógica de programação básicos, como
                    variáveis, entrada e saída de dados, condicionais e laços de
                    repetição, permitindo que os estudantes a explore
                    livremente. Ademais, ela apresenta o pseudocódigo
                    correspondente, a fim de promover o contato com a estrutura
                    real de um código. Para realizar este trabalho, seguimos a
                    metodologia Design Science Research (DSR) em Engenharia de
                    Software, para construção de artefatos em contexto. Assim,
                    investigamos o problema por meio de uma contextualização e,
                    a partir disso, projetamos e validamos um artefato, o MVP.
                    Também realizamos a implementação dele utilizando o
                    framework Vue.js em Typescript. Por fim, avaliamos a
                    usabilidade do MVP proposto e o aprendizado dos alunos
                    através dele, em uma atividade com estudantes do ensino
                    fundamental, por meio de um questionário de usabilidade (SUS
                    - System Usability Scale) e de um questionário sobre o
                    aprendizado dos conceitos de lógica de programação. A
                    análise dos resultados dessas avaliações nos permitiu
                    concluir que o uso de simulações interativas para ensino de
                    Computação demonstrou potencial, principalmente quando
                    aplicadas a crianças que já tiveram um contato anterior com
                    programação, apresentando uma pontuação de usabilidade
                    considerada boa. Considerando alunos que não têm
                    conhecimento prévio em Computação, a usabilidade da
                    ferramenta foi classificada como razoável segundo a
                    pontuação do SUS e observamos a necessidade de melhorias na
                    forma de introduzir os conceitos para esses usuários. Por
                    meio da atividade de aprendizado, concluímos que a abordagem
                    proposta não ajudou na compreensão dos conceitos de
                    programação, uma vez que a maioria dos alunos não
                    conseguiram identificá-los em trechos de pseudocódigo no
                    questionário. Entretanto, observamos que algumas das
                    confusões feitas pelos estudantes podem ter sido causadas
                    pela formulação das questões avaliativas. Dessa maneira, foi
                    possível notar a necessidade de melhorias na simulação e no
                    pseudocódigo do MVP avaliado, implicando em uma nova
                    interação nos ciclos de design e engenharia de DSR, o que
                    seria um passo natural para este tipo de pesquisa.
                </p> */}
            </section>
        </div>
    );
}

export default App;
