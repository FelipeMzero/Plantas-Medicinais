# 🌿 Herbarium Oriximiná • Catálogo Botânico & Validação Fitoterápica

> **Plataforma digital científica e etnobotânica voltada à catalogação, validação farmacológica e conscientização fitoterápica das espécies medicinais de Oriximiná, Pará (Rio Trombetas, Amazônia brasileira).**

[![Deploy GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-2ea44f?style=for-the-badge&logo=github)](https://felipemzero.github.io/Plantas-Medicinais/)
[![Status](https://img.shields.io/badge/Status-Ativo%20%26%20Validado-brightgreen?style=for-the-badge)](#)
[![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-blue?style=for-the-badge)](LICENSE)
[![Design System](https://img.shields.io/badge/Design%20System-Plus%20Jakarta%20Sans%20%2B%20Fraunces-15803d?style=for-the-badge)](#)
[![Validação em Saúde](https://img.shields.io/badge/Sa%C3%BAde-ANVISA%20%2F%20SUS%20%2F%20Farmacopeia-0369a1?style=for-the-badge)](#)

---

## 📌 Sumário Executivo

1. [Visão Geral e Reimaginação da Plataforma](#-visão-geral-e-reimaginação-da-plataforma)
2. [Autores e Idealizadores da Plataforma](#-autores-e-idealizadores-da-plataforma)
3. [Validação Farmacológica e com a Área da Saúde](#-validação-farmacológica-e-com-a-área-da-saúde)
4. [Planejamento Estratégico (PM Canvas & Gestão de Projeto)](#-planejamento-estratégico-pm-canvas--gestão-de-projeto)
5. [Especificação do Produto, Backlog e Requisitos](#-especificação-do-produto-backlog-e-requisitos)
6. [Design System, Tipografia e Arquitetura do Software](#-design-system-tipografia-e-arquitetura-do-software)
7. [Acervo das 26 Espécies Catalogadas com Fitoquímica](#-acervo-das-26-espécies-catalogadas-com-fitoquímica)
8. [Diretório de Erveiros e Comércio Tradicional](#-diretório-de-erveiros-e-comércio-tradicional)
9. [Instalação e Execução Local](#-instalação-e-execução-local)
10. [Licença e Responsabilidade Médica](#-licença-e-responsabilidade-médica)

---

## 🌎 Visão Geral e Reimaginação da Plataforma

O município de **Oriximiná**, banhado pelas águas do Rio Trombetas no oeste do estado do Pará, é um dos mais significativos santuários de biodiversidade do planeta. Populações tradicionais (ribeirinhos, indígenas e comunidades quilombolas) utilizam a flora amazônica há séculos como sua principal fonte de cuidados terapêuticos primários.

O **Herbarium Oriximiná** foi reimaginado e reconstruído para transformar esse acervo em uma **plataforma moderna de saúde e botânica**:
* **Interface Moderna e Elegante:** Tipografia de nível editorial (`Plus Jakarta Sans` e `Fraunces`), navegação em glassmorphism, microinterações fluidas e total responsividade;
* **Rigor Farmacológico:** Cada espécie traz identificação botânica binomial completa (*Gênero espécie* Autor), Família Botânica, Marcadores Químicos e Princípios Ativos (Flavonoides, Cumarinas, Alcaloides, Terpenos);
* **Validação Técnica Sanitária:** Status de aprovação na ANVISA, inserção no SUS (RENAME/PNPIC) ou registro na Farmacopeia Brasileira;
* **Protocolos de Segurança do Paciente:** Alertas em destaque sobre contraindicações estritas (gravidez, lactação, hepatotoxicidade) e riscos críticos de interações medicamentosas com remédios alopáticos convencionais;
* **Economia Tradicional:** Diretório de erveiros e pontos de comercialização sustentável em Oriximiná com contato direto via WhatsApp.

---

## 👥 Autores e Equipe da Plataforma

* **Felipe Monteiro:** Idealizador e Desenvolvedor da Plataforma
  * Engenharia de software, modelagem dos dados botânicos estruturados (CSV), arquitetura assíncrona com Fetch API e curadoria científica dos princípios ativos.
* **Sandyella Silva Soares:** Desenvolvedora da Primeira Implantação
  * Concepção, estruturação e desenvolvimento da primeira versão e implementação inicial do projeto.
* **Erison Lins:** Consultor
  * Design de interfaces (UI/UX), implementação do Design System com fontes `Plus Jakarta Sans` e `Fraunces`, criação de animações CSS nativas e responsividade fluida.

---

## 🩺 Validação Farmacológica e com a Área da Saúde

A plataforma adota o conceito de **Fitoterapia Racional**, combatendo o mito de que *"produtos naturais não apresentam riscos"*. O conteúdo das 26 espécies foi fundamentado em referências sanitárias do Ministério da Saúde:

1. **Farmacopeia Brasileira (Edições 5ª e 6ª):** Monografias oficiais de drogas vegetais amazônicas e brasileiras (Andiroba, Copaíba, Boldo, Babosa, Guaraná);
2. **ANVISA (Formulário de Fitoterápicos & Memento Fitoterápico):** Indicações de primeira linha para broncodilatação (Guaco), ansiedade leve (Passiflora e Camomila) e distúrbios digestivos;
3. **SUS / PNPIC (Política Nacional de Práticas Integrativas e Complementares):** Medicamentos fitoterápicos disponíveis na Relação Nacional de Medicamentos Essenciais (RENAME);
4. **Farmacovigilância e Toxicologia Clínica:** Avisos de toxicidade para espécies que exigem controle restrito (Arruda, Cipó Mil Homens) e monitoramento de interações enzimáticas no citocromo P450 (como na Erva de São João).

---

## 📊 Planejamento Estratégico & Gestão de Projeto

A concepção e estruturação do **Herbarium Oriximiná** foram fundamentadas nos preceitos do Project Model Canvas e de metodologias ágeis de desenvolvimento de software em saúde:

### Síntese dos 13 Blocos Estratégicos do Projeto
* **Justificativa:** Risco de esquecimento do saber botânico do Rio Trombetas e perigos sanitários da automedicação sem respaldo científico.
* **Objetivo SMART:** Desenvolver uma plataforma web estática de alta velocidade catalogando 26 espécies nativas com validação técnica em saúde e diretório local.
* **Benefícios:** Educação em saúde pública, preservação da memória sociocultural amazônica e estímulo à economia da sociobiodiversidade.
* **Equipe:** Felipe Monteiro (Idealizador & Dev), Sandyella Silva Soares (Dev 1ª Implantação) e Erison Lins (Consultor).
* **Custos:** R$ 0,00 diretos (GitHub Pages, Google Fonts, W3C Web Standards).
* **Gestão:** Abordagem Ágil (Scrum/Kanban) com iterações contínuas e entrega incremental.

---

## 📋 Especificação do Produto, Backlog e Requisitos

### Requisitos Funcionais de Destaque (RF)
* **RF01 - Catálogo Botânico Dinâmico:** Carregamento assíncrono via JavaScript da base tabular fitoquímica.
* **RF02 - Busca Reativa Multicritério:** Pesquisa instantânea por nome vulgar, nome científico latino, princípio ativo ou sintoma clínico.
* **RF03 - Filtros por Sistema Biológico:** Seleção por sistema corporal (Digestivo, Respiratório, Imunológico, Nervoso, etc.).
* **RF04 - Ficha Farmacológica em Modal Glassmorphic:** Exibição detalhada de marcadores químicos, forma correta de preparo (infusão, decocção, cataplasma), posologia e contraindicações.
* **RF05 - Diretório de Erveiros com WhatsApp:** Canal direto para conexão com produtores locais e feirantes.

### Requisitos Não Funcionais (RNF)
* **RNF01 - Tipografia Editorial Premium:** Uso integrado das fontes Google Fonts `'Plus Jakarta Sans'` e `'Fraunces'`.
* **RNF02 - Performance Ultrarrápida:** First Contentful Paint abaixo de 1s em conexões 3G, sem frameworks monolíticos (zero dependências NPM/React/Bootstrap).
* **RNF03 - Responsividade Mobile-First:** Experiência consistente em telas de 320px até 4K.

---

## 🌿 Acervo das 26 Espécies Catalogadas com Fitoquímica

| ID | Nome Popular | Nome Científico & Família | Sistema Biológico | Princípios Ativos Principais | Validação em Saúde |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **01** | **Açaí** | *Euterpe oleracea* (Arecaceae) | Metabólico & Cardiovascular | Antocianinas, polifenóis, ômega-9 | Alimento Funcional Bioativo |
| **02** | **Jaborandi** | *Pilocarpus jaborandi* (Rutaceae) | Nervoso & Oftálmico | Alcaloide Pilocarpina | Farmacopeia Brasileira / Oftálmico |
| **03** | **Unha de Gato** | *Uncaria tomentosa* (Rubiaceae) | Imunológico & Articular | Alcaloides oxindólicos, quinóvico | ANVISA / RENAME (SUS) |
| **04** | **Pau d'Arco** | *Handroanthus heptaphyllus* (Bignoniaceae) | Imunológico & Tegumentar | Naftoquinonas (Lapachol) | Antimicrobiano / Etnofarmacologia |
| **05** | **Andiroba** | *Carapa guianensis* (Meliaceae) | Osteomuscular & Dérmico | Limonoides (andirobina, gedunina) | Farmacopeia Brasileira (Tópico) |
| **06** | **Capim Santo** | *Cymbopogon citratus* (Poaceae) | Digestivo & Nervoso | Citral (neral e geranial), mirceno | ANVISA / RENAME (SUS) |
| **07** | **Pata de Vaca** | *Bauhinia forficata* (Fabaceae) | Endócrino & Metabólico | Flavonoides (kaempferitrina) | Farmacopeia Brasileira (Glicêmico) |
| **08** | **Maracujá** | *Passiflora incarnata* (Passifloraceae) | Nervoso Central | Flavonoides C-glicosídeos (vitexina) | ANVISA / Sedativo Fisiológico |
| **09** | **Copaíba** | *Copaifera reticulata* (Fabaceae) | Dermatológico & Mucosas | Beta-cariofileno, ácido copaífero | Farmacopeia Brasileira & SUS |
| **10** | **Jatobá** | *Hymenaea courbaril* (Fabaceae) | Respiratório & Vigor | Diterpenos labdânicos (ácido copálico) | Expectorante Tradicional |
| **11** | **Cipó Mil Homens** | *Aristolochia trilobata* (Aristolochiaceae) | Urogenital & Renal | Alcaloides aporfínicos | Uso Restrito (Alerta Toxicológico) |
| **12** | **Cupuaçu** | *Theobroma grandiflorum* (Malvaceae) | Metabólico & Dermocosmético | Polifenóis (theograndina), fitoesteróis | Superfruta Antioxidante |
| **13** | **Boldo** | *Peumus boldus* (Monimiaceae) | Digestivo & Hepático | Alcaloide Boldina, cineol | ANVISA / Farmacopeia Brasileira |
| **14** | **Murici** | *Byrsonima crassifolia* (Malpighiaceae) | Imunológico & Orofaríngeo | Vitamina C, carotenoides, taninos | Adstringente & Antioxidante |
| **15** | **Uxi Amarelo** | *Endopleura uchi* (Humiriaceae) | Urogenital Feminino | Isocumarina Bergenina | Anti-inflamatório Tradicional |
| **16** | **Guaraná** | *Paullinia cupana* (Sapindaceae) | Nervoso & Energético | Metilxantinas (Cafeína 3,5-6%) | ANVISA / Farmacopeia Brasileira |
| **17** | **Anamu** | *Petiveria alliacea* (Phytolaccaceae) | Osteomuscular | Dibenzil trissulfeto | Contraindicado na Gestação |
| **18** | **Babosa** | *Aloe vera* (Asphodelaceae) | Dermatológico | Mucilagens (Acemanano) | Farmacopeia Brasileira (Tópico) |
| **19** | **Catuaba** | *Trichilia catigua* (Meliaceae) | Neuromuscular | Alcaloides catuabinas | Tônico Tradicional |
| **20** | **Breuzinho** | *Protium heptaphyllum* (Burseraceae) | Respiratório & Aromaterapia | Triterpenos (alfa/beta-amirina) | Resina Balsâmica Amazônica |
| **21** | **Guaco** | *Mikania glomerata* (Asteraceae) | Respiratório & Pulmonar | Cumarina (1,2-benzopirona) | Padrão Ouro ANVISA / SUS |
| **22** | **Murta** | *Myrcia sphaerocarpa* (Myrtaceae) | Mucosas & Digestivo | Óleos essenciais, taninos gálicos | Antisséptico Bucal Tradicional |
| **23** | **Erva de São João** | *Hypericum perforatum* (Hypericaceae) | Nervoso Central & Humor | Hipericina, hiperforina | Alerta Crítico Interação CYP3A4 |
| **24** | **Arruda** | *Ruta graveolens* (Rutaceae) | Tegumentar & Tradicional | Furanocumarinas, rutina | Tóxico / Proibido via oral |
| **25** | **Camomila** | *Matricaria chamomilla* (Asteraceae) | Digestivo, Nervoso & Dérmico | Camazuleno, alfa-bisabolol | ANVISA / RENAME (SUS) |
| **26** | **Erva Mate** | *Ilex paraguariensis* (Aquifoliaceae) | Metabólico & Estimulante | Cafeína, ácido clorogênico | Farmacopeia Brasileira |

---

## 🏪 Diretório de Erveiros e Comércio Tradicional

Para preservar a privacidade em ambiente educacional, os pontos de comercialização utilizam dados demonstrativos com atalhos funcionais para WhatsApp:
* **Fulano das Ervas** — *Rua Tal, nº 100 - Bairro Ali*
* **Ciclano dos Remédios Naturais** — *Avenida Tal e Tal, Box 15 - Bairro Aqui*
* **Beltrano das Plantas** — *Travessa Tal, s/n - Bairro Acolá*
* **Fulano de Tal** — *Esquina da Rua Tal com Rua Qual - Bairro Logo Ali*
* **Ciclano da Silva** — *Alameda Tal, nº 500 - Bairro Logo Acolá*
* **Beltrano dos Santos** — *Estrada Tal, km 2 - Bairro Por Aí*

---

## 🚀 Instalação e Execução Local

```bash
# 1. Clone o repositório
git clone https://github.com/felipemzero/Plantas-Medicinais.git
cd Plantas-Medicinais

# 2. Execute um servidor local rápido (Python 3)
python -m http.server 8000
```
Acesse em seu navegador: `http://localhost:8000`

---

## 📜 Licença e Responsabilidade Médica

Distribuído sob os termos da licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para detalhes.

> **⚠️ AVISO DE SAÚDE PÚBLICA:** O conteúdo do **Herbarium Oriximiná** destina-se exclusivamente a propósitos educativos, de documentação etnobotânica e preservação do conhecimento tradicional. Nenhuma informação aqui veiculada substitui a consulta médica presencial, anamnese clínica, exames laboratoriais ou a prescrição de profissionais de saúde habilitados (médicos, farmacêuticos e fitoterapeutas). Em situações de dor intensa, gravidez, suspeita de intoxicação ou sintomas persistentes, procure imediatamente a Unidade Básica de Saúde (UBS) ou serviço médico mais próximo.

---

*Idealizado e desenvolvido com compromisso à Amazônia por **Felipe Monteiro** e **Sandyella Silva Soares**, com consultoria de **Erison Lins**.*
