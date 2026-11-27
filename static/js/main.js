// ==========================================================================
// HERBARIUM ORIXIMINÁ - ENGINE FARMACOLÓGICO E BOTÂNICO (main.js)
// Autores: Felipe Monteiro & Erison Lins
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  let allPlants = [];
  let currentFilter = "all";
  let currentSystemFilter = "all";
  let currentSearchQuery = "";

  const plantsGrid = document.getElementById("plants-grid");
  const counterEl = document.getElementById("plants-counter");
  const searchInput = document.getElementById("plant-search");
  const clearSearchBtn = document.getElementById("clear-search");
  const chips = document.querySelectorAll(".chip-btn, .chip");
  const systemFilterSelect = document.getElementById("system-filter");
  const noResultsEl = document.getElementById("no-results");
  const resetFilterBtn = document.getElementById("reset-filter-btn");

  const modal = document.getElementById("plant-modal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  // Mapeamento exato de arquivos de imagem em static/img/
  const imageMap = {
    "Açaí": "Açaí.jpg",
    "Jaborandi": "jaborandi.jpg",
    "Unha de Gato": "unha de gato.jpg",
    "Pau d'Arco": "pau d'arco.jpg",
    "Andiroba": "andiroba.jpg",
    "Capim Santo": "capim santo.jpg",
    "Pata de Vaca": "pata de vaca.jpg",
    "Maracujá": "maracujá.jpg",
    "Copahu": "copahu.jpg",
    "Jatobá": "jatobá.jpg",
    "Cipó Mil Homens": "cipó mil homens.jpg",
    "Cupuaçu": "cupuaçu.jpg",
    "Boldo": "boldo.jpg",
    "Murici": "murici.jpg",
    "Uxi Amarelo": "uxi amarelo.jpg",
    "Guaraná": "guaraná.jpg",
    "Anamu": "anamu.jpg",
    "Babosa": "babosa.jpg",
    "Catuaba": "catuaba.jpg",
    "Breuzinho": "breuzinho.jpg",
    "Guaco": "guaco.jpg",
    "Murta": "murta.jpg",
    "Erva de São João": "erva de são joão.jpg",
    "Arruda": "arruda.jpg",
    "Camomila": "camomila.jpg",
    "Erva Mate": "erva mate.jpg"
  };

  function getPlantImageUrl(name) {
    const filename = imageMap[name] || `${name.toLowerCase()}.jpg`;
    return `static/img/${filename}`;
  }

  // Base Científica e Farmacológica Validada (ANVISA / SUS RENAME / Farmacopeia Brasileira)
  const scientificDatabase = {
    "Açaí": {
      scientificName: "Euterpe oleracea Mart.",
      family: "Arecaceae",
      activePrinciples: "Antocianinas (cianidina-3-glicosídeo), flavonoides, polifenóis, ácidos graxos essenciais (ômega-9 e 6).",
      system: "Metabólico & Cardiovascular",
      category: "Energética / Antioxidante",
      healthStatus: "Alimento Funcional Bioativo & Antioxidante Celular",
      usedPart: "Polpa dos frutos",
      preparation: "Consumo in natura da polpa pasteurizada ou extrato liofilizado.",
      indication: "Combate ao estresse oxidativo, suporte energético no esforço físico, proteção celular e ação cardioprotetora.",
      contraindications: "Atenção Sanitária: Consumir exclusivamente açaí pasteurizado com certificação higiênico-sanitária para prevenir transmissão oral da Doença de Chagas (*Trypanosoma cruzi*)."
    },
    "Jaborandi": {
      scientificName: "Pilocarpus jaborandi Holmes",
      family: "Rutaceae",
      activePrinciples: "Alcaloides imidazólicos (Pilocarpina, isopilocarpina), óleos essenciais terpênicos.",
      system: "Nervoso Parassimpático & Respiratório",
      category: "Respiratória / Oftálmica",
      healthStatus: "Matéria-prima Farmacopeia Brasileira & Indústria Farmacêutica",
      usedPart: "Folhas desidratadas",
      preparation: "Uso farmacotécnico e fitoterápico rigorosamente dosado em colírios e extratos padronizados.",
      indication: "Estímulo das secreções salivares, tratamento da boca seca (xerostomia pós-radioterapia) e colírios anti-glaucoma.",
      contraindications: "ALERTA TOXICOLÓGICO: Nunca preparar chás caseiros concentrados. Contraindicado em asma brônquica, úlcera péptica ativa e cardiopatias severas devido à potente ação vagal."
    },
    "Unha de Gato": {
      scientificName: "Uncaria tomentosa (Willd. ex Roem. & Schult.) DC.",
      family: "Rubiaceae",
      activePrinciples: "Alcaloides oxindólicos pentacíclicos (mitrafilina, rincofilina), glicosídeos do ácido quinóvico, esteróis.",
      system: "Imunológico & Articular",
      category: "Anti-inflamatória",
      healthStatus: "Fitoterápico Oficial ANVISA & RENAME (SUS)",
      usedPart: "Entrecasca e raízes",
      preparation: "Decocção: ferver 1 a 2g da casca triturada em 150ml de água por 15 minutos; ou extrato padronizado.",
      indication: "Tratamento coadjuvante de osteoartrite, artrite reumatoide, inflamações crônicas articulares e imunomodulação.",
      contraindications: "Contraindicado em pacientes transplantados, portadores de doenças autoimunes graves (lúpus, esclerose múltipla), gestantes e lactantes."
    },
    "Pau d'Arco": {
      scientificName: "Handroanthus heptaphyllus / Tabebuia avellanedae",
      family: "Bignoniaceae",
      activePrinciples: "Naftoquinonas (Lapachol, beta-lapachona), flavonoides, ácido benzoico.",
      system: "Imunológico & Tegumentar",
      category: "Antifúngica / Antibacteriana",
      healthStatus: "Monografia Fitoterápica ANVISA / Uso Tradicional",
      usedPart: "Entrecasca do tronco",
      preparation: "Decocção: ferver 2 colheres de sopa da entrecasca por 10 a 15 minutos em 500ml de água.",
      indication: "Ação antimicrobiana e antifúngica comprovada frente a *Candida albicans*, dermatófitos e suporte inflamatório.",
      contraindications: "Contraindicado para gestantes (efeito teratogênico do lapachol em doses elevadas) e pacientes sob uso de anticoagulantes (risco hemorrágico)."
    },
    "Andiroba": {
      scientificName: "Carapa guianensis Aubl.",
      family: "Meliaceae",
      activePrinciples: "Limonoides amargos (andirobina, gedunina, epoxiazadiradiona), ácido oleico e linoleico.",
      system: "Osteomuscular & Dermatológico",
      category: "Cicatrizante / Anti-inflamatória",
      healthStatus: "Farmacopeia Brasileira (Fitoterápico Tópico)",
      usedPart: "Óleo virgem extraído das sementes",
      preparation: "Aplicação tópica direta em massagens musculares ou fricções locais 2 a 3 vezes ao dia.",
      indication: "Alívio de dores reumáticas, contusões, hematomas, picadas de insetos e cicatrização de feridas dérmicas superficiais.",
      contraindications: "Uso prioritariamente externo. Ingestão oral desaconselhada em ambiente doméstico devido ao potente sabor amargo e potencial de gastrite irritativa."
    },
    "Capim Santo": {
      scientificName: "Cymbopogon citratus (DC.) Stapf",
      family: "Poaceae",
      activePrinciples: "Óleo essencial rico em Citral (neral e geranial), mirceno, flavonoides glicosilados.",
      system: "Digestivo & Nervoso Central",
      category: "Calmante / Digestiva",
      healthStatus: "Fitoterápico RENAME (SUS) & Memento ANVISA",
      usedPart: "Folhas frescas ou desidratadas",
      preparation: "Infusão: verter 150ml de água fervente sobre 2 a 3g de folhas frescas picadas. Abafar por 10 minutos.",
      indication: "Ansiedade leve, tensão nervosa, insônia inicial, cólicas gastrointestinais e espasmos digestivos leves.",
      contraindications: "Hipotensão arterial acentuada; potencializa medicamentos sedativos e depressores do sistema nervoso central."
    },
    "Pata de Vaca": {
      scientificName: "Bauhinia forficata Link",
      family: "Fabaceae",
      activePrinciples: "Flavonoides (kaempferitrina, quercetina), taninos condensados.",
      system: "Endócrino & Renal",
      category: "Hipoglicemiante",
      healthStatus: "Farmacopeia Brasileira / Fitoterápico Auxiliar",
      usedPart: "Folhas desidratadas",
      preparation: "Infusão ou decocção leve: 3g de folhas em 200ml de água, tomada após as refeições principais.",
      indication: "Coadjuvante fitoterápico no controle glicêmico de diabéticos tipo 2 e diurético suave.",
      contraindications: "Monitorar rigorosamente a glicemia capilar para evitar hipoglicemia severa em quem já usa insulina ou hipoglicemiantes orais. Não usar na gestação."
    },
    "Maracujá": {
      scientificName: "Passiflora incarnata L. / Passiflora edulis Sims",
      family: "Passifloraceae",
      activePrinciples: "Flavonoides (C-glicosídeos como vitexina, isovitexina e orientina), alcaloides indólicos residuais.",
      system: "Nervoso Central",
      category: "Calmante / Sedativa",
      healthStatus: "Fitoterápico ANVISA / Farmacopeia Brasileira",
      usedPart: "Folhas desidratadas",
      preparation: "Infusão: 1 a 2g de folhas secas em 150ml de água fervente antes de dormir.",
      indication: "Tratamento de estados de ansiedade, irritabilidade, agitação psicomotora e distúrbios da indução do sono.",
      contraindications: "Não associar com bebidas alcoólicas, ansiolíticos ou medicamentos sedativos. Cuidado ao dirigir veículos ou manusear máquinas pesadas."
    },
    "Copahu": {
      scientificName: "Copaifera reticulata Ducke / Copaifera langsdorffii",
      family: "Fabaceae",
      activePrinciples: "Sesquiterpenos (beta-cariofileno 40-60%), diterpenos (ácido copaífero, ácido hardwickiico).",
      system: "Dermatológico & Mucosas",
      category: "Cicatrizante / Anti-inflamatória",
      healthStatus: "Farmacopeia Brasileira & Práticas Integrativas SUS",
      usedPart: "Bálsamo / Óleo-resina exsudado do tronco",
      preparation: "Uso tópico: aplicar 2 a 3 gotas sobre a área lesada; uso interno estritamente em microgotas sob orientação médica.",
      indication: "Cicatrizante potente de tecidos dérmicos, anti-inflamatório cutâneo, antisséptico das vias urinárias e orofaríngeas.",
      contraindications: "Doses orais elevadas causam náuseas, vômitos, gastralgia e diarreia. Contraindicado para gestantes e pacientes nefropatas."
    },
    "Jatobá": {
      scientificName: "Hymenaea courbaril L.",
      family: "Fabaceae",
      activePrinciples: "Diterpenos labdânicos (ácido copálico), taninos, flavonoides bioativos.",
      system: "Respiratório & Energético",
      category: "Respiratória",
      healthStatus: "Fitoterapia Tradicional Amazônica",
      usedPart: "Casca do caule e resina natural",
      preparation: "Decocção da casca (1 colher de sopa por xícara de água fervida por 15 minutos) ou xarope artesanal.",
      indication: "Expectorante para tosse persistente, bronquite catarral, fraqueza pulmonar e astenia.",
      contraindications: "Indivíduos com hipersensibilidade alérgica às resinas de jatobá. Evitar ingestão contínua por mais de 15 dias sem intervalo."
    },
    "Cipó Mil Homens": {
      scientificName: "Aristolochia trilobata L. / Aristolochia cymbifera",
      family: "Aristolochiaceae",
      activePrinciples: "Alcaloides aporfínicos, óleos essenciais, flavonoides, ácidos orgânicos.",
      system: "Urogenital",
      category: "Renal / Depurativa",
      healthStatus: "Uso Tradicional Controlado / Alerta ANVISA",
      usedPart: "Casca do caule e raízes",
      preparation: "Decocção branda em baixíssimas concentrações (menos de 0,5g por litro), sob supervisão especializada.",
      indication: "Uso popular etnobotânico para afecções urinárias e cólicas renais.",
      contraindications: "ALERTA FARMACOLÓGICO: Espécies do gênero *Aristolochia* possuem derivados aristolóquicos que apresentam risco de nefropatia e carcinogenicidade em uso crônico. Não utilizar sem prescrição profissional qualificada. Proibido na gravidez."
    },
    "Cupuaçu": {
      scientificName: "Theobroma grandiflorum (Willd. ex Spreng.) Schum.",
      family: "Malvaceae",
      activePrinciples: "Polifenóis antioxidantes (theograndina, quercetina), fitoesteróis, teobromina em baixos teores.",
      system: "Metabólico & Nutricional",
      category: "Energética / Nutritiva",
      healthStatus: "Superfruta Bioativa Amazônica",
      usedPart: "Polpa fresca e manteiga das sementes",
      preparation: "Consumo alimentar direto da fruta, sucos naturais polposos e manteiga emoliente dermocosmética.",
      indication: "Aporte energético saudável, combate aos radicais livres e hidratação profunda da barreira lipídica da pele.",
      contraindications: "Alimento altamente seguro. Pacientes diabéticos devem apenas moderar a adição de açúcar nos sucos concentrados."
    },
    "Boldo": {
      scientificName: "Peumus boldus Molina / Plectranthus barbatus",
      family: "Monimiaceae / Lamiaceae",
      activePrinciples: "Alcaloide Boldina, cineol, ascaridol, flavonoides (boldosídeo).",
      system: "Digestivo & Hepático",
      category: "Digestiva",
      healthStatus: "Fitoterápico Oficial ANVISA / Farmacopeia",
      usedPart: "Folhas secas ou frescas",
      preparation: "Infusão rápida: 1 a 2g de folhas secas em 150ml de água quente (não fervendo), repouso por 5 minutos.",
      indication: "Dispepsias biliares, má digestão, sensação de empachamento pós-prandial e espasmos gastrintestinais.",
      contraindications: "Contraindicado em obstrução das vias biliares (cálculos biliares impactados), colangite, hepatite aguda e gravidez (potencial teratogênico)."
    },
    "Murici": {
      scientificName: "Byrsonima crassifolia (L.) Kunth",
      family: "Malpighiaceae",
      activePrinciples: "Ácido ascórbico (Vitamina C em alta concentração), carotenoides, taninos hidrolisáveis.",
      system: "Imunológico & Gastrointestinal",
      category: "Antioxidante / Nutritiva",
      healthStatus: "Espécie Fitoterapêutica da Flora Brasileira",
      usedPart: "Fruto e entrecasca do tronco",
      preparation: "Fruto in natura ou decocção da casca para gargarejos e banhos locais.",
      indication: "Fortalecimento do sistema imunológico, ação adstringente e antisséptica para inflamações na boca e garganta.",
      contraindications: "O fruto é seguro. Decocções muito concentradas da casca não devem ser ingeridas por pessoas com úlcera gástrica ativa devido aos taninos."
    },
    "Uxi Amarelo": {
      scientificName: "Endopleura uchi (Huber) Cuatrec.",
      family: "Humiriaceae",
      activePrinciples: "Isocumarina Bergenina, taninos condensados, ácidos fenólicos.",
      system: "Urogenital & Imunológico",
      category: "Ginecológica",
      healthStatus: "Etnomedicina Amazônica Validada Cientificamente",
      usedPart: "Casca do tronco",
      preparation: "Decocção: 5g de casca em 500ml de água, fervendo por 10 minutos. Coar e tomar fracionado ao longo do dia.",
      indication: "Ação anti-inflamatória em distúrbios ginecológicos populares, suporte em queixas uterinas e antioxidante sistêmico.",
      contraindications: "Não substitui consultas ginecológicas regulares, ultrassonografias e condutas médicas clínicas. Contraindicado no primeiro trimestre gestacional."
    },
    "Guaraná": {
      scientificName: "Paullinia cupana Kunth",
      family: "Sapindaceae",
      activePrinciples: "Metilxantinas (Cafeína 3,5 a 6%, teofilina, teobromina), taninos condensados, saponinas.",
      system: "Nervoso Central & Metabólico",
      category: "Energética / Tônica",
      healthStatus: "Fitoterápico ANVISA / Farmacopeia Brasileira",
      usedPart: "Sementes torradas e moídas",
      preparation: "Pó das sementes: 1 a 2g dissolvidos em água ou suco pela manhã; evitar ingestão após as 17h.",
      indication: "Melhora da performance cognitiva, combate ao esgotamento físico e mental, cefaleias tensionais e fadiga.",
      contraindications: "Hipertensão arterial não controlada, arritmias cardíacas, glaucoma, hipertireoidismo, úlceras pépticas ativas e ansiedade com insônia."
    },
    "Anamu": {
      scientificName: "Petiveria alliacea L.",
      family: "Phytolaccaceae",
      activePrinciples: "Compostos organossulfurados (dibenzil trissulfeto), triterpenos, cumarinas traços.",
      system: "Osteomuscular & Imunológico",
      category: "Anti-inflamatória",
      healthStatus: "Uso Tradicional & Pesquisa Fitoquímica",
      usedPart: "Folhas e raízes",
      preparation: "Infusão leve de folhas (1g para 200ml de água) ou cataplasma para aplicação sobre articulações doloridas.",
      indication: "Alívio sintomático de dores articulares e musculares decorrentes de processos reumáticos leves.",
      contraindications: "ESTRITAMENTE CONTRAINDICADO NA GRAVIDEZ E LACTAÇÃO (efeito abortivo e indutor de contrações uterinas comprovado em testes laboratoriais)."
    },
    "Babosa": {
      scientificName: "Aloe vera (L.) Burm. f.",
      family: "Asphodelaceae",
      activePrinciples: "Polissacarídeos mucilaginosos (Acemanano), derivados antracênicos (aloína), vitaminas e enzimas.",
      system: "Dermatológico",
      category: "Cicatrizante",
      healthStatus: "Farmacopeia Brasileira / ANVISA (Uso Tópico)",
      usedPart: "Gel transparente interno da folha (parênquima mucilaginoso)",
      preparation: "Aplicação tópica direta do gel purificado sobre a pele limpa, 2 a 3 vezes ao dia.",
      indication: "Tratamento de queimaduras térmicas e solares de 1º grau, cicatrização de pequenos cortes, hidratação cutânea intensa.",
      contraindications: "O gel com resíduos de látex amarelado (rico em aloína) não deve ser ingerido: causa diarreia severa, cólicas e nefrite tóxica."
    },
    "Catuaba": {
      scientificName: "Trichilia catigua A. Juss. / Anemopaegma mirandum",
      family: "Meliaceae / Bignoniaceae",
      activePrinciples: "Alcaloides (catuabinas), taninos condensados, flavonoides e fitoesteróis.",
      system: "Nervoso Central & Muscular",
      category: "Energética / Tônica",
      healthStatus: "Fitoterapia Tradicional Brasileira",
      usedPart: "Casca do caule",
      preparation: "Decocção: 2g da casca triturada em 200ml de água durante 10 minutos, consumido pela manhã.",
      indication: "Tônico neuromioprotetor para estados de astenia psicofísica, fadiga neuromuscular e convalescença.",
      contraindications: "Contraindicado em pacientes hipertensos graves, indivíduos com cardiopatias instáveis e distúrbios graves de ansiedade."
    },
    "Breuzinho": {
      scientificName: "Protium heptaphyllum (Aubl.) Marchand",
      family: "Burseraceae",
      activePrinciples: "Triterpenos (alfa e beta-amirina), monoterpenos voláteis (limoneno, terpinoleno, p-cimeno).",
      system: "Respiratório & Aromaterapia",
      category: "Respiratória",
      healthStatus: "Farmacopeia Brasileira / Fitomedicina Amazônica",
      usedPart: "Resina vegetal aromática sólida",
      preparation: "Inalação de vapores aromáticos adicionando fragmentos da resina em recipiente com água quente fumegante.",
      indication: "Desobstrução das vias aéreas superiores em rinites e sinusites, ação balsâmica e antisséptica pulmonar.",
      contraindications: "Pacientes com hiper-reatividade brônquica ou asma alérgica aguda devem evitar contato direto com fumaça densa de defumação."
    },
    "Guaco": {
      scientificName: "Mikania glomerata Spreng. / Mikania laevigata",
      family: "Asteraceae",
      activePrinciples: "Cumarina (1,2-benzopirona), ácido caurenóico, o-hidroxicinâmico.",
      system: "Respiratório",
      category: "Respiratória",
      healthStatus: "Padrão Ouro RENAME (SUS) & ANVISA",
      usedPart: "Folhas frescas ou desidratadas",
      preparation: "Infusão ou xarope: 3g de folhas secas em 150ml de água fervente. Dose de 1 colher de sopa do xarope 3x ao dia.",
      indication: "Broncodilatador, fluidificante catarral e antitussígeno em tosses produtivas, asma e bronquites agudas.",
      contraindications: "Contraindicado em usuários de anticoagulantes orais (varfarina) devido ao efeito potencializador da cumarina; hepatopatias severas e gravidez."
    },
    "Murta": {
      scientificName: "Myrcia sphaerocarpa DC.",
      family: "Myrtaceae",
      activePrinciples: "Monoterpenos e sesquiterpenos, taninos gálicos, flavonoides antioxidantes.",
      system: "Digestivo & Mucosas Bucais",
      category: "Antisséptica / Cicatrizante",
      healthStatus: "Espécie da Medicina Popular Amazônica",
      usedPart: "Folhas",
      preparation: "Infusão para bochechos e gargarejos: 2g de folhas em 150ml de água morna.",
      indication: "Antisséptico orofaríngeo para gengivites, aftas bucais e coadjuvante na adstringência gástrica.",
      contraindications: "Uso interno excessivo pode provocar constipação intestinal severa pela alta fração tânica."
    },
    "Erva de São João": {
      scientificName: "Hypericum perforatum L.",
      family: "Hypericaceae",
      activePrinciples: "Naftodiantronas (Hipericina, pseudohipericina), floroglucinóis (Hiperforina), flavonoides (hiperosídeo).",
      system: "Nervoso Central",
      category: "Calmante / Antidepressiva",
      healthStatus: "Padrão Internacional & ANVISA para Humor",
      usedPart: "Sumidades floridas e folhas",
      preparation: "Infusão de 2 a 4g da droga vegetal seca em 250ml de água fervente, 2 vezes ao dia.",
      indication: "Depressão leve a moderada, distúrbios psicovegetativos e ansiedade acompanhada de alterações do sono.",
      contraindications: "ALERTA FARMACOLÓGICO GRAVÍSSIMO: Potente indutor do citocromo CYP3A4 e glicoproteína-P. Reduz drasticamente a concentração de anticoncepcionais orais, antirretrovirais, varfarina, ciclosporina e anestésicos. Risco de síndrome serotoninérgica com outros antidepressivos."
    },
    "Arruda": {
      scientificName: "Ruta graveolens L.",
      family: "Rutaceae",
      activePrinciples: "Furanocumarinas fotossensibilizantes (bergapteno, xantotoxina), alcaloides quinolínicos, rutina.",
      system: "Tegumentar & Tradicional",
      category: "Calmante / Tradicional",
      healthStatus: "Uso Etnobotânico Restrito",
      usedPart: "Folhas e ramos jovens",
      preparation: "Banhos aromáticos externos mornos ou compressas locais sem exposição solar posterior.",
      indication: "Uso popular tradicional externo em banhos calmantes e alívio de desconfortos musculares espásticos.",
      contraindications: "ALERTA TOXICOLÓGICO: Uso interno estritamente contraindicado por toxicidade hepática, hemorrágica e violento efeito abortivo. Aplicação tópica sob o sol causa fitofotodermatite com queimaduras graves e bolhas."
    },
    "Camomila": {
      scientificName: "Matricaria chamomilla L. (Chamomilla recutita)",
      family: "Asteraceae",
      activePrinciples: "Óleo essencial (alfa-bisabolol, camazuleno), flavonoides (apigenina-7-glicosídeo), cumarinas.",
      system: "Digestivo, Nervoso & Dermatológico",
      category: "Calmante / Digestiva",
      healthStatus: "Fitoterápico Oficial RENAME (SUS) & ANVISA",
      usedPart: "Capítulos florais secos",
      preparation: "Infusão: 2 a 3g de flores em 150ml de água a 90°C por 10 minutos em recipiente fechado.",
      indication: "Espasmos gastrintestinais leves, dispepsia nervosa, insônia, cólicas em crianças e compressas anti-inflamatórias oculares e cutâneas.",
      contraindications: "Hipersensibilidade conhecida à camomila ou a outras plantas da família Asteraceae (como arnica ou margaridas)."
    },
    "Erva Mate": {
      scientificName: "Ilex paraguariensis A. St.-Hil.",
      family: "Aquifoliaceae",
      activePrinciples: "Metilxantinas (Cafeína 1 a 2%, teobromina), derivados do ácido cafeoilquínico (ácido clorogênico), saponinas.",
      system: "Metabólico & Nervoso Central",
      category: "Energética / Antioxidante",
      healthStatus: "Farmacopeia Brasileira / Alimento Bioativo",
      usedPart: "Folhas e talos secos e tostados",
      preparation: "Infusão tradicional (chimarrão/tereré/chá mate) com água quente a 75°C (não fervente).",
      indication: "Fadiga mental e física, estímulo da diurese suave e suporte antioxidante metabólico celular.",
      contraindications: "Pessoas com hipertensão não compensada, arritmias, ansiedade fóbica e gastrites erosivas ativas."
    }
  };

  // Carregar dados CSV
  fetch("static/data/plants.csv")
    .then(response => {
      if (!response.ok) throw new Error("Status: " + response.status);
      return response.text();
    })
    .then(csvText => {
      allPlants = parseCSV(csvText);
      renderPlants();
    })
    .catch(err => {
      console.warn("Recorrendo ao caminho alternativo ./static/data/plants.csv...", err);
      fetch("./static/data/plants.csv")
        .then(r => r.text())
        .then(csvText => {
          allPlants = parseCSV(csvText);
          renderPlants();
        })
        .catch(finalErr => {
          console.error("Falha ao carregar CSV:", finalErr);
          if (counterEl) {
            counterEl.textContent = "Erro ao carregar banco de dados botânico.";
          }
        });
    });

  // Função para parsear CSV e mesclar com a base científica farmacológica
  function parseCSV(text) {
    const lines = text.trim().split("\n");
    const plants = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const firstComma = line.indexOf(",");
      if (firstComma === -1) continue;

      const id = line.substring(0, firstComma).trim();
      const rest = line.substring(firstComma + 1);

      const secondComma = rest.indexOf(",");
      if (secondComma === -1) continue;

      const name = rest.substring(0, secondComma).trim();
      const rawDescription = rest.substring(secondComma + 1).replace(/^"|"$/g, "").trim();

      const scData = scientificDatabase[name] || {
        scientificName: `${name} sp.`,
        family: "Espécie Amazônica",
        activePrinciples: "Metabólitos secundários e compostos bioativos característicos.",
        system: "Sistêmico",
        category: "Medicinal Amazônica",
        healthStatus: "Fitoterapia Tradicional",
        usedPart: "Folhas / Cascas",
        preparation: "Infusão ou decocção tradicional sob orientação técnica.",
        indication: rawDescription,
        contraindications: "Consulte um profissional de saúde qualificado antes da utilização."
      };

      plants.push({
        id,
        name,
        scientificName: scData.scientificName,
        family: scData.family,
        activePrinciples: scData.activePrinciples,
        system: scData.system,
        category: scData.category,
        healthStatus: scData.healthStatus,
        usedPart: scData.usedPart,
        preparation: scData.preparation,
        indication: scData.indication,
        contraindications: scData.contraindications
      });
    }

    return plants;
  }

  // Filtragem e renderização
  function getFilteredPlants() {
    return allPlants.filter(plant => {
      const query = currentSearchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        plant.name.toLowerCase().includes(query) ||
        plant.scientificName.toLowerCase().includes(query) ||
        plant.family.toLowerCase().includes(query) ||
        plant.activePrinciples.toLowerCase().includes(query) ||
        plant.system.toLowerCase().includes(query) ||
        plant.indication.toLowerCase().includes(query) ||
        plant.category.toLowerCase().includes(query);

      const matchesCategory =
        currentFilter === "all" ||
        plant.category.toLowerCase().includes(currentFilter.toLowerCase()) ||
        plant.indication.toLowerCase().includes(currentFilter.toLowerCase());

      const matchesSystem =
        !currentSystemFilter ||
        currentSystemFilter === "all" ||
        plant.system.toLowerCase().includes(currentSystemFilter.toLowerCase());

      return matchesSearch && matchesCategory && matchesSystem;
    });
  }

  function renderPlants() {
    if (!plantsGrid) return;
    const filtered = getFilteredPlants();
    plantsGrid.innerHTML = "";

    if (counterEl) {
      counterEl.textContent = `Exibindo ${filtered.length} de ${allPlants.length} espécies botânicas catalogadas`;
    }

    if (filtered.length === 0) {
      if (noResultsEl) noResultsEl.style.display = "block";
      return;
    }

    if (noResultsEl) noResultsEl.style.display = "none";

    filtered.forEach((plant, index) => {
      const card = document.createElement("article");
      card.className = "plant-card";
      card.style.animationDelay = `${Math.min(index * 0.04, 0.45)}s`;

      const primaryImg = getPlantImageUrl(plant.name);
      const fallbackImg = `static/img/${plant.name.toLowerCase()}.jpg`;

      card.innerHTML = `
        <div class="card-media">
          <img src="${primaryImg}" alt="${plant.name}" loading="lazy" 
               onerror="if(this.src!=='${fallbackImg}') { this.src='${fallbackImg}'; } else { this.src='static/img/flyersite.png'; }">
          <span class="card-system-badge">${plant.system.split('&')[0].trim()}</span>
        </div>
        <div class="card-content">
          <div class="card-meta-line">
            <span class="card-family-tag">${plant.family}</span>
            <span class="card-sanitary-tag">${plant.healthStatus.split('/')[0].trim()}</span>
          </div>
          <h3 class="card-common-name">${plant.name}</h3>
          <p class="card-binomial-name"><em>${plant.scientificName}</em></p>
          <p class="card-indication-text">${plant.indication}</p>
          <div class="card-actives-box">
            <strong>Ativos:</strong> <span>${plant.activePrinciples.substring(0, 72)}...</span>
          </div>
          <button class="btn-card-action" data-id="${plant.id}">
            Ver Ficha Farmacológica
          </button>
        </div>
      `;

      const btn = card.querySelector(".btn-card-action");
      btn.addEventListener("click", () => openPlantModal(plant));

      plantsGrid.appendChild(card);
    });
  }

  // Abertura do Modal Farmacológico Completo
  function openPlantModal(plant) {
    if (!modal || !modalBody) return;

    const primaryImg = getPlantImageUrl(plant.name);
    const fallbackImg = `static/img/${plant.name.toLowerCase()}.jpg`;

    modalBody.innerHTML = `
      <img class="modal-cover-img" src="${primaryImg}" alt="${plant.name}" 
           onerror="if(this.src!=='${fallbackImg}') { this.src='${fallbackImg}'; } else { this.src='static/img/flyersite.png'; }">
      
      <div class="modal-body-wrapper">
        <div class="modal-title-group">
          <div class="modal-badge-row">
            <span class="badge-system">${plant.system}</span>
            <span class="badge-anvisa">${plant.healthStatus}</span>
          </div>
          <h3 class="modal-main-title">${plant.name}</h3>
          <p class="modal-botanical-sub"><em>${plant.scientificName}</em> • Família: <strong>${plant.family}</strong></p>
        </div>

        <div class="modal-clinical-grid">
          <div class="clinical-block">
            <h4 style="display: flex; align-items: center; gap: 6px;">
              <svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
              Princípios Ativos & Marcadores Fitoquímicos
            </h4>
            <p>${plant.activePrinciples}</p>
          </div>

          <div class="clinical-block">
            <h4 style="display: flex; align-items: center; gap: 6px;">
              <svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
              Indicações Terapêuticas Validadas
            </h4>
            <p>${plant.indication}</p>
          </div>

          <div class="clinical-block">
            <h4 style="display: flex; align-items: center; gap: 6px;">
              <svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m18 3-5 5"/>
                <path d="M3.7 11.3A9 9 0 0 0 12 21a9 9 0 0 0 8.3-9.7H3.7Z"/>
                <path d="M4 11h16"/>
              </svg>
              Parte Utilizada & Preparo Farmacêutico
            </h4>
            <p><strong>Parte da Planta:</strong> ${plant.usedPart}</p>
            <p><strong>Modo de Preparo & Uso:</strong> ${plant.preparation}</p>
          </div>

          <div class="clinical-block block-warning">
            <h4 style="display: flex; align-items: center; gap: 6px;">
              <svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Precauções, Toxicologia & Contraindicações Clínicas
            </h4>
            <p>${plant.contraindications}</p>
          </div>
        </div>

        <div class="clinical-disclaimer-box" style="display: flex; align-items: flex-start; gap: 10px;">
          <svg class="svg-icon svg-icon-md" style="color: #0284c7; margin-top: 2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          <div>
            <strong>Aviso Técnico de Saúde Pública:</strong> As informações contidas nesta plataforma são fundamentadas em bibliografia farmacológica, Farmacopeia Brasileira e etnobotânica amazônica. Não substituem avaliação médica presencial, anamnese clínica ou prescrição individualizada. Em caso de gestação, lactação, uso concomitante de medicamentos ou sintomas persistentes, procure atendimento na Unidade Básica de Saúde (SUS) ou profissional habilitado.
          </div>
        </div>
      </div>
    `;

    modal.style.display = "flex";
  }

  // Fechamento do Modal
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  window.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal && modal.style.display === "flex") {
      modal.style.display = "none";
    }
  });

  // Eventos de Busca
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentSearchQuery = e.target.value.trim();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = currentSearchQuery ? "block" : "none";
      }
      renderPlants();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearchQuery = "";
      clearSearchBtn.style.display = "none";
      renderPlants();
      searchInput.focus();
    });
  }

  // Filtros de Categoria (Chips)
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.getAttribute("data-filter") || "all";
      renderPlants();
    });
  });

  // Filtro por Sistema Fisiológico
  if (systemFilterSelect) {
    systemFilterSelect.addEventListener("change", e => {
      currentSystemFilter = e.target.value;
      renderPlants();
    });
  }

  // Reset Button
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      currentSearchQuery = "";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";
      currentFilter = "all";
      currentSystemFilter = "all";
      if (systemFilterSelect) systemFilterSelect.value = "all";
      chips.forEach(c => c.classList.remove("active"));
      const allChip = document.querySelector('.chip-btn[data-filter="all"], .chip[data-filter="all"]');
      if (allChip) allChip.classList.add("active");
      renderPlants();
    });
  }
});
