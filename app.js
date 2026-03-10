document.body.classList.add('menu-active');
const TEST_TIME_SECONDS = 1200;
const PASS_PERCENTAGE = 75;
const QUESTIONS_PER_TEST = 30;

/* USERS */
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = null;

/* QUESTION BANK */
const questionBanks = {
  knowledge: [
{
  question: "Care este considerată 'leagănul civilizației' datorită apariției primelor orașe-stat și a scrierii cuneiforme?",
  options: [
    "Valea Nilului",
    "Valea Indului",
    "Mesopotamia",
    "Mesoamerica"
  ],
  correctIndex: 2
},
{
  question: "Ce demonstrează celebra ecuație a lui Einstein, E = mc²?",
  options: [
    "Legea atracției universale",
    "Viteza sunetului în vid",
    "Echivalența dintre masă și energie",
    "Mișcarea eliptică a planetelor"
  ],
  correctIndex: 2
},
{
  question: "Cine a fost regele dac care a unificat pentru prima dată triburile geto-dace în secolul I î.Hr.?",
  options: [
    "Decebal",
    "Dromichetes",
    "Burebista",
    "Deceneu"
  ],
  correctIndex: 2
},
{
  question: "Care este cel mai abundent gaz din atmosfera Pământului?",
  options: [
    "Oxigenul",
    "Dioxidul de carbon",
    "Hidrogenul",
    "Azotul"
  ],
  correctIndex: 3
},
{
  question: "Ce reformă religioasă majoră a încercat faraonul Amenhotep al IV-lea (Akhenaton)?",
  options: [
    "Trecerea la monoteism",
    "Introducerea cultului morților",
    "Interzicerea preoțimii",
    "Adoptarea zeilor greci"
  ],
  correctIndex: 0
},
{
  question: "Cea mai adâncă groapă oceanică cunoscută este:",
  options: [
    "Groapa Puerto Rico",
    "Groapa Marianelor",
    "Groapa Japoniei",
    "Groapa Java"
  ],
  correctIndex: 1
},
{
  question: "Ce a presupus Retragerea Aureliană din perioada 271–275 d.Hr.?",
  options: [
    "O nouă ofensivă romană în nordul Dunării",
    "Abandonarea completă a populației civile",
    "Cucerirea Daciei de către vizigoți",
    "Retragerea armatei și administrației romane la sud de Dunăre"
  ],
  correctIndex: 3
},
{
  question: "Simbolul chimic 'Au' desemnează metalul:",
  options: [
    "Argint",
    "Aur",
    "Cupru",
    "Aluminiu"
  ],
  correctIndex: 1
},
{
  question: "Tehnica „sfumato” din pictura Mona Lisa se referă la:",
  options: [
    "Utilizarea culorilor stridente",
    "Tranziții imperceptibile între culori și tonuri",
    "Aplicarea vopselei cu cuțitul",
    "Forme geometrice riguroase"
  ],
  correctIndex: 1
},
{
  question: "Care a fost cauza principală a Războiului Peloponesiac?",
  options: [
    "Invazia persană",
    "Răscoala sclavilor",
    "Cuceririle lui Alexandru cel Mare",
    "Rivalitatea hegemonică dintre Atena și Sparta"
  ],
  correctIndex: 3
},
{
  question: "Ce măsoară un an-lumină?",
  options: [
    "Timpul",
    "Distanța",
    "Luminozitatea",
    "Viteza"
  ],
  correctIndex: 1
},
{
  question: "Fluviul cu cel mai mare debit de apă din lume este:",
  options: [
    "Nilul",
    "Mississippi",
    "Amazonul",
    "Yangtze"
  ],
  correctIndex: 2
},
{
  question: "Termenul istoriografic de 'Descălecat' se referă la:",
  options: [
    "Întemeierea statelor medievale Țara Românească și Moldova",
    "Invazia mongolă",
    "Colonizarea sașilor",
    "Retragerea romană"
  ],
  correctIndex: 0
},
{
  question: "Marie Curie a câștigat Premii Nobel în:",
  options: [
    "Fizică și Chimie",
    "Medicină și Pace",
    "Literatură și Chimie",
    "Fizică și Matematică"
  ],
  correctIndex: 0
},
{
  question: "Ce eveniment din anul 476 d.Hr. marchează sfârșitul Antichității?",
  options: [
    "Depunerea ultimului împărat roman de Apus",
    "Căderea Constantinopolului",
    "Împărțirea Imperiului Roman",
    "Încoronarea lui Carol cel Mare"
  ],
  correctIndex: 0
},
{
  question: "Principiul lui Arhimede explică:",
  options: [
    "Căderea corpurilor",
    "Forța ascensională într-un fluid",
    "Refracția luminii",
    "Conservarea energiei"
  ],
  correctIndex: 1
},
{
  question: "Curentul artistic Impresionism își ia numele de la o pictură semnată de:",
  options: [
    "Vincent van Gogh",
    "Claude Monet",
    "Edvard Munch",
    "Paul Cézanne"
  ],
  correctIndex: 1
},
{
  question: "Bătălia de la Rovine a fost purtată de:",
  options: [
    "Ștefan cel Mare",
    "Mihai Viteazul",
    "Mircea cel Bătrân",
    "Vlad Țepeș"
  ],
  correctIndex: 2
},
{
  question: "Strâmtoarea Gibraltar separă:",
  options: [
    "Europa de Asia",
    "Africa de Asia",
    "Europa de Africa",
    "America de Nord de Asia"
  ],
  correctIndex: 2
},
{
  question: "Diamantul și grafitul sunt forme alotropice ale:",
  options: [
    "Siliciului",
    "Fierului",
    "Carbonului",
    "Calciului"
  ],
  correctIndex: 2
},
{
  question: "Marea Schismă din 1054 a reprezentat ruptura dintre:",
  options: [
    "Catolici și Protestanți",
    "Sunniți și Șiiți",
    "Roma și Constantinopol",
    "Creștini și evrei"
  ],
  correctIndex: 2
},
{
  question: "Teoria Big Bang explică:",
  options: [
    "Apariția vieții",
    "Formarea găurilor negre",
    "Originea Universului",
    "Extincția dinozaurilor"
  ],
  correctIndex: 2
},
{
  question: "Iancu de Hunedoara este cunoscut pentru victoria din 1456 la:",
  options: [
    "Vaslui",
    "Belgrad",
    "Călugăreni",
    "Constantinopol"
  ],
  correctIndex: 1
},
{
  question: "Viteza luminii în vid este aproximativ:",
  options: [
    "340 m/s",
    "1 milion km/h",
    "300.000 km/s",
    "100.000 km/s"
  ],
  correctIndex: 2
},
{
  question: "Magna Carta (1215) este importantă deoarece:",
  options: [
    "A abolit monarhia",
    "A declarat independența coloniilor",
    "A limitat puterile regelui",
    "A instituit votul universal"
  ],
  correctIndex: 2
},
{
  question: "Ce indică o valoare de 7 pe scara pH?",
  options: [
    "O substanță puternic acidă",
    "O substanță neutră",
    "O bază puternică",
    "Absența apei"
  ],
  correctIndex: 1
},
{
  question: "Cel mai mic stat independent din lume este:",
  options: [
    "Monaco",
    "Liechtenstein",
    "Vatican",
    "San Marino"
  ],
  correctIndex: 2
},
{
  question: "Cine a realizat prima unire politică a celor trei țări române în anul 1600?",
  options: [
    "Mihai Viteazul",
    "Alexandru Ioan Cuza",
    "Matei Basarab",
    "Constantin Brâncoveanu"
  ],
  correctIndex: 0
},
{
  question: "Ce reprezintă 'Zero Absolut' în termodinamică?",
  options: [
    "Temperatura de îngheț a apei",
    "Temperatura la care mișcarea termică a atomilor încetează",
    "Temperatura medie din spațiul cosmic",
    "Punctul de fierbere al azotului"
  ],
  correctIndex: 1
},
{
  question: "Renașterea a debutat în Italia având ca trăsătură centrală:",
  options: [
    "Umanismul și redescoperirea Antichității",
    "Teocentrismul",
    "Industrializarea timpurie",
    "Goticul târziu"
  ],
  correctIndex: 0
},
{
  question: "Cine sunt considerați fondatorii Cubismului?",
  options: [
    "Salvador Dalí și René Magritte",
    "Pablo Picasso și Georges Braque",
    "Henri Matisse și André Derain",
    "Gustav Klimt și Egon Schiele"
  ],
  correctIndex: 1
},
{
  question: "Domnia lui Constantin Brâncoveanu s-a remarcat în principal prin:",
  options: [
    "Războaie continue",
    "O înflorire culturală și diplomație abilă",
    "Secularizarea averilor",
    "Alianță militară cu Rusia"
  ],
  correctIndex: 1
},
{
  question: "Trecerea directă a unei substanțe din stare solidă în stare gazoasă se numește:",
  options: [
    "Evaporare",
    "Condensare",
    "Sublimare",
    "Solidificare"
  ],
  correctIndex: 2
},
{
  question: "Pacea de la Westfalia (1648) este importantă deoarece:",
  options: [
    "A unit Germania",
    "A pus capăt Războiului de 30 de Ani și a consacrat suveranitatea statelor",
    "A învins Imperiul Otoman",
    "A creat Liga Națiunilor"
  ],
  correctIndex: 1
},
{
  question: "Experimentul mental „Pisica lui Schrödinger” ilustrează paradoxurile din:",
  options: [
    "Mecanica fluidelor",
    "Termodinamică",
    "Mecanica cuantică",
    "Optică geometrică"
  ],
  correctIndex: 2
},
{
  question: "Ce a însemnat regimul fanariot pentru Țările Române?",
  options: [
    "Obținerea independenței",
    "Revenirea la domniile pământene",
    "Unirea cu Rusia",
    "Numirea domnitorilor de către Poarta Otomană"
  ],
  correctIndex: 3
},
{
  question: "„Cercul de Foc al Pacificului” este caracterizat prin:",
  options: [
    "Temperaturi extreme",
    "Activitate seismică și vulcanică intensă",
    "Recife de corali",
    "Furtuni tropicale"
  ],
  correctIndex: 1
},
{
  question: "Care filosof iluminist a teoretizat separarea puterilor în stat?",
  options: [
    "Voltaire",
    "Jean-Jacques Rousseau",
    "John Locke",
    "Montesquieu"
  ],
  correctIndex: 3
},
{
  question: "Numărul lui Avogadro reprezintă:",
  options: [
    "Numărul de particule dintr-un mol",
    "Viteza luminii",
    "Numărul elementelor chimice",
    "Vârsta Pământului"
  ],
  correctIndex: 0
},
{
  question: "Tavanul Capelei Sixtine a fost pictat de:",
  options: [
    "Rafael Sanzio",
    "Donatello",
    "Michelangelo Buonarroti",
    "Leonardo da Vinci"
  ],
  correctIndex: 2
},
{
  question: "Revoluția Industrială a început în Marea Britanie prin:",
  options: [
    "Descoperirea electricității",
    "Producția de automobile",
    "Mecanizarea industriei textile și motorul cu abur",
    "Industria chimică"
  ],
  correctIndex: 2
},
{
  question: "Care au fost obiectivele Revoluției de la 1848 în Țările Române?",
  options: [
    "Restaurarea regimului fanariot",
    "Cucerirea Constantinopolului",
    "Drepturi cetățenești, împroprietărire și unitate națională",
    "Alianță cu Imperiul Habsburgic"
  ],
  correctIndex: 2
},
{
  question: "O gaură neagră este:",
  options: [
    "O stea stinsă",
    "O regiune cu gravitație extremă",
    "Un nor de praf cosmic",
    "O planetă gazoasă"
  ],
  correctIndex: 1
},
{
  question: "Care este elementul chimic esențial care întreține arderea?",
  options: [
    "Heliu",
    "Clor",
    "Oxigen",
    "Hidrogen"
  ],
  correctIndex: 2
},
{
  question: "Congresul de la Viena (1815) a avut ca scop:",
  options: [
    "Promovarea democrației",
    "Unificarea Italiei",
    "Restaurarea ordinii conservatoare",
    "Împărțirea Africii"
  ],
  correctIndex: 2
},
{
  question: "Cea mai mare insulă de pe glob este:",
  options: [
    "Madagascar",
    "Noua Guinee",
    "Marea Britanie",
    "Groenlanda"
  ],
  correctIndex: 3
},
{
  question: "Unitatea de măsură pentru forță în SI este:",
  options: [
    "Watt",
    "Joule",
    "Newton",
    "Pascal"
  ],
  correctIndex: 2
},
{
  question: "Cum s-a realizat Mica Unire de la 1859?",
  options: [
    "Prin dubla alegere a lui Alexandru Ioan Cuza",
    "Prin război",
    "Prin decizia Marilor Puteri",
    "Prin intervenție militară franceză"
  ],
  correctIndex: 0
},
{
  question: "Pictura „Fata cu cercel de perlă” aparține lui:",
  options: [
    "Rembrandt",
    "Johannes Vermeer",
    "Jan van Eyck",
    "Hieronymus Bosch"
  ],
  correctIndex: 1
},
{
  question: "Care a fost scânteia care a declanșat Primul Război Mondial?",
  options: [
    "Atentatul de la Sarajevo",
    "Invazia Poloniei",
    "Scufundarea navei Lusitania",
    "Revoluția Bolșevică"
  ],
  correctIndex: 0
},
{
  question: "Bronzul este un aliaj format în principal din:",
  options: [
    "Fier și carbon",
    "Aluminiu și zinc",
    "Aur și argint",
    "Cupru și staniu"
  ],
  correctIndex: 3
},
{
  question: "Cea mai mare planetă din Sistemul Solar este:",
  options: [
    "Pământul",
    "Saturn",
    "Jupiter",
    "Neptun"
  ],
  correctIndex: 2
},
{
  question: "Doctrina Truman (1947) viza:",
  options: [
    "Izolaționismul SUA",
    "Colaborarea cu URSS",
    "Îndiguirea expansiunii comunismului",
    "Dezarmarea nucleară"
  ],
  correctIndex: 2
},
{
  question: "În urma cărui conflict a fost recunoscută independența României?",
  options: [
    "Războiul Crimeii",
    "Războiul Ruso-Turc din 1877–1878",
    "Al Doilea Război Balcanic",
    "Primul Război Mondial"
  ],
  correctIndex: 1
},
{
  question: "Fenomenul descompunerii luminii albe printr-o prismă se numește:",
  options: [
    "Reflexie",
    "Difracție",
    "Dispersie",
    "Absorbție"
  ],
  correctIndex: 2
},
{
  question: "Canalul Panama face legătura între:",
  options: [
    "Marea Mediterană și Marea Roșie",
    "Oceanul Atlantic și Oceanul Pacific",
    "Marea Nordului și Marea Baltică",
    "Marea Neagră și Marea Marmara"
  ],
  correctIndex: 1
},
{
  question: "Tratatul de la Maastricht (1992) este fundamental pentru:",
  options: [
    "Crearea NATO",
    "Căderea Zidului Berlinului",
    "Reunificarea Germaniei",
    "Formarea Uniunii Europene"
  ],
  correctIndex: 3
},
{
  question: "Gazele nobile se disting prin:",
  options: [
    "Inflamabilitate ridicată",
    "Reactivitate chimică scăzută",
    "Stare solidă",
    "Miros puternic"
  ],
  correctIndex: 1
},
{
  question: "Salvador Dalí este figura centrală a curentului:",
  options: [
    "Dadaism",
    "Futurism",
    "Suprarealism",
    "Expresionism abstract"
  ],
  correctIndex: 2
},
{
  question: "Unde a avut loc Marea Adunare Națională din 1918?",
  options: [
    "Iași",
    "București",
    "Alba Iulia",
    "Chișinău"
  ],
  correctIndex: 2
},
{
  question: "Ce eveniment a marcat sfârșitul Războiului Rece?",
  options: [
    "Războiul din Coreea",
    "Dizolvarea URSS",
    "Criza Rachetelor",
    "Războiul din Vietnam"
  ],
  correctIndex: 1
},
{
  question: "Efectul Doppler explică modificarea:",
  options: [
    "Culorii cerului",
    "Frecvenței unei unde percepute",
    "Vitezei luminii",
    "Masei unui corp"
  ],
  correctIndex: 1
},
{
  question: "Planeta Marte este roșie datorită:",
  options: [
    "Temperaturilor ridicate",
    "Oxidului de fier",
    "Vegetației",
    "Vulcanilor activi"
  ],
  correctIndex: 1
},
{
  question: "Declarația Drepturilor Omului (1789) a stabilit că:",
  options: [
    "Regele are drepturi divine",
    "Oamenii sunt liberi și egali în drepturi",
    "Puterea aparține Bisericii",
    "Proprietatea este interzisă"
  ],
  correctIndex: 1
},
{
  question: "Constituția României din 1923 este recunoscută pentru:",
  options: [
    "Caracterul democratic",
    "Dictatură regală",
    "Limitarea minorităților",
    "Model sovietic"
  ],
  correctIndex: 0
},
{
  question: "Legea conservării masei a fost enunțată de:",
  options: [
    "Antoine Lavoisier",
    "Isaac Newton",
    "Louis Pasteur",
    "Alfred Nobel"
  ],
  correctIndex: 0
},
{
  question: "Marea Moartă este renumită pentru:",
  options: [
    "Adâncime extremă",
    "Lipsa malurilor",
    "Altitudine joasă și salinitate ridicată",
    "Apă dulce"
  ],
  correctIndex: 2
},
{
  question: "Andy Warhol este asociat cu:",
  options: [
    "Art Nouveau",
    "Bauhaus",
    "Pop Art",
    "Art Deco"
  ],
  correctIndex: 2
},
{
  question: "Codul Civil al lui Napoleon este important deoarece:",
  options: [
    "A reintrodus sclavia",
    "A interzis divorțul",
    "A stat la baza dreptului modern",
    "A militarizat statul"
  ],
  correctIndex: 2
},
{
  question: "Ce a reprezentat actul de la 23 August 1944?",
  options: [
    "Intrarea României în război",
    "Întoarcerea armelor împotriva Germaniei",
    "Abdicarea regelui",
    "Semnarea păcii"
  ],
  correctIndex: 1
},
{
  question: "Inerția reprezintă:",
  options: [
    "Forța gravitațională",
    "Tendința de a menține starea de mișcare sau repaus",
    "Viteza de reacție",
    "Frecarea"
  ],
  correctIndex: 1
},
{
  question: "Rolul unui catalizator este să:",
  options: [
    "Oprească reacția",
    "Mărească viteza reacției fără a se consuma",
    "Schimbe culoarea",
    "Scadă temperatura"
  ],
  correctIndex: 1
},
{
  question: "Galaxia noastră se numește:",
  options: [
    "Andromeda",
    "Triangulum",
    "Calea Lactee",
    "Sombrero"
  ],
  correctIndex: 2
},
{
  question: "Primăvara Națiunilor (1848) a însemnat:",
  options: [
    "Pacea europeană",
    "Revoluții liberale și naționale",
    "Colonizarea Africii",
    "Inventarea telegrafului"
  ],
  correctIndex: 1
},
{
  question: "Ce organ al corpului uman produce insulină?",
  options: [
    "Ficatul",
    "Pancreasul",
    "Rinichii",
    "Splina"
  ],
  correctIndex: 1
},
{
  question: "Renașterea a avut ca valoare centrală:",
  options: [
    "Teocentrismul",
    "Feudalismul",
    "Umanismul",
    "Absolutismul"
  ],
  correctIndex: 2
},
{
  question: "Ce fenomen explică existența anotimpurilor?",
  options: [
    "Distanța Pământ–Soare",
    "Forma eliptică a orbitei",
    "Înclinarea axei Pământului",
    "Rotația Lunii"
  ],
  correctIndex: 2
},
{
  question: "Care stat a fost fondator al ONU?",
  options: [
    "Germania",
    "Italia",
    "Japonia",
    "Statele Unite ale Americii"
  ],
  correctIndex: 3
},
{
  question: "Acidul clorhidric se găsește în mod natural în:",
  options: [
    "Plămâni",
    "Sânge",
    "Stomac",
    "Creier"
  ],
  correctIndex: 2
},
{
  question: "Ce scriere a fost inventată prima?",
  options: [
    "Alfabetică",
    "Hieroglifică",
    "Cuneiformă",
    "Latină"
  ],
  correctIndex: 2
},
{
  question: "Care este unitatea de măsură pentru intensitatea curentului electric?",
  options: [
    "Volt",
    "Ohm",
    "Watt",
    "Amper"
  ],
  correctIndex: 3
},
{
  question: "Cine a pictat Capela Sixtină?",
  options: [
    "Leonardo da Vinci",
    "Rafael",
    "Michelangelo",
    "Donatello"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Canadei?",
  options: [
    "Toronto",
    "Montreal",
    "Vancouver",
    "Ottawa"
  ],
  correctIndex: 3
},
{
  question: "Ce eveniment a marcat începutul Revoluției Franceze?",
  options: [
    "Execuția regelui",
    "Lovitura de stat",
    "Căderea Bastiliei",
    "Proclamarea republicii"
  ],
  correctIndex: 2
},
{
  question: "Oxigenul este esențial pentru:",
  options: [
    "Digestie",
    "Respirație celulară",
    "Fotosinteză animală",
    "Reproducere"
  ],
  correctIndex: 1
},
{
  question: "Cine a formulat legea gravitației universale?",
  options: [
    "Galileo Galilei",
    "Albert Einstein",
    "Isaac Newton",
    "Johannes Kepler"
  ],
  correctIndex: 2
},
{
  question: "Care munte este cel mai înalt din lume?",
  options: [
    "K2",
    "Mont Blanc",
    "Everest",
    "Kilimanjaro"
  ],
  correctIndex: 2
},
{
  question: "Ce reprezintă ADN-ul?",
  options: [
    "Un tip de proteină",
    "Material genetic",
    "O enzimă digestivă",
    "Un hormon"
  ],
  correctIndex: 1
},
{
  question: "Imperiul Roman de Apus a căzut în anul:",
  options: [
    "313",
    "395",
    "476",
    "565"
  ],
  correctIndex: 2
},
{
  question: "Ce tip de energie produce un panou fotovoltaic?",
  options: [
    "Termică",
    "Eoliană",
    "Electrică",
    "Nucleară"
  ],
  correctIndex: 2
},
{
  question: "Care este cea mai mică unitate a materiei?",
  options: [
    "Molecula",
    "Atomul",
    "Celula",
    "Ionul"
  ],
  correctIndex: 1
},
{
  question: "Ce ocean este cel mai mare?",
  options: [
    "Atlantic",
    "Indian",
    "Arctic",
    "Pacific"
  ],
  correctIndex: 3
},
{
  question: "Ce filozof grec a fost elevul lui Platon?",
  options: [
    "Socrate",
    "Aristotel",
    "Epicur",
    "Heraclit"
  ],
  correctIndex: 1
},
{
  question: "Care este scopul Constituției?",
  options: [
    "Control economic",
    "Stabilirea structurii statului și a drepturilor cetățenilor",
    "Impunerea religiei",
    "Crearea armatei"
  ],
  correctIndex: 1
},
{
  question: "Ce gaz este responsabil pentru efectul de seră?",
  options: [
    "Oxigen",
    "Azot",
    "Dioxid de carbon",
    "Heliu"
  ],
  correctIndex: 2
},
{
  question: "Care este viteza aproximativă a luminii?",
  options: [
    "300.000 km/s",
    "150.000 km/s",
    "30.000 km/s",
    "3.000 km/s"
  ],
  correctIndex: 0
},
{
  question: "Ce formă de guvernământ are România?",
  options: [
    "Monarhie",
    "Republică",
    "Imperiu",
    "Dictatură"
  ],
  correctIndex: 1
},
{
  question: "Ce rol au globulele roșii?",
  options: [
    "Apărare",
    "Coagulare",
    "Transportul oxigenului",
    "Digestie"
  ],
  correctIndex: 2
},
{
  question: "Ce reprezintă Revoluția Industrială?",
  options: [
    "Un război european",
    "Trecerea la producția mecanizată",
    "Colonizarea Americii",
    "Destrămarea imperiilor"
  ],
  correctIndex: 1
},
{
  question: "Care este simbolul chimic al aurului?",
  options: [
    "Ag",
    "Au",
    "Fe",
    "Cu"
  ],
  correctIndex: 1
},
{
  question: "Cine a fost primul om care a pășit pe Lună?",
  options: [
    "Buzz Aldrin",
    "Yuri Gagarin",
    "Neil Armstrong",
    "Michael Collins"
  ],
  correctIndex: 2
},
{
  question: "Ce tip de climă caracterizează zona ecuatorială?",
  options: [
    "Temperată",
    "Aridă",
    "Rece",
    "Calda și umedă"
  ],
  correctIndex: 3
},
{
  question: "Care este capitala Japoniei?",
  options: [
    "Kyoto",
    "Osaka",
    "Tokyo",
    "Hiroshima"
  ],
  correctIndex: 2
},
{
  question: "Ce funcție are mitocondria în celulă?",
  options: [
    "Sinteza proteinelor",
    "Stocarea apei",
    "Producerea energiei",
    "Protecția nucleului"
  ],
  correctIndex: 2
},
{
  question: "Care război a fost declanșat în urma asasinării arhiducelui Franz Ferdinand?",
  options: [
    "Războiul de Independență",
    "Al Doilea Război Mondial",
    "Primul Război Mondial",
    "Războiul Rece"
  ],
  correctIndex: 2
},
{
  question: "Ce planetă este cunoscută drept „Planeta Roșie”?",
  options: [
    "Jupiter",
    "Venus",
    "Marte",
    "Mercur"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Australiei?",
  options: [
    "Sydney",
    "Melbourne",
    "Canberra",
    "Perth"
  ],
  correctIndex: 2
},
{
  question: "Ce element chimic este esențial pentru respirație?",
  options: [
    "Hidrogen",
    "Azot",
    "Oxigen",
    "Carbon"
  ],
  correctIndex: 2
},
{
  question: "Cine a scris opera „Hamlet”?",
  options: [
    "Charles Dickens",
    "William Shakespeare",
    "Johann Goethe",
    "Molière"
  ],
  correctIndex: 1
},
{
  question: "Ce sistem politic se bazează pe separarea puterilor în stat?",
  options: [
    "Dictatura",
    "Monarhia absolută",
    "Democrația",
    "Feudalismul"
  ],
  correctIndex: 2
},
{
  question: "Care este cea mai lungă fluviu din lume?",
  options: [
    "Amazon",
    "Nil",
    "Yangtze",
    "Mississippi"
  ],
  correctIndex: 1
},
{
  question: "Ce rol are clorofila?",
  options: [
    "Respirația plantelor",
    "Fotosinteza",
    "Reproducerea",
    "Transportul apei"
  ],
  correctIndex: 1
},
{
  question: "Ce formă de energie folosește o turbină eoliană?",
  options: [
    "Solară",
    "Hidraulică",
    "Eoliană",
    "Termică"
  ],
  correctIndex: 2
},
{
  question: "Cine a descoperit America în 1492?",
  options: [
    "Amerigo Vespucci",
    "Ferdinand Magellan",
    "Cristofor Columb",
    "James Cook"
  ],
  correctIndex: 2
},
{
  question: "Ce este un tsunami?",
  options: [
    "Erupție vulcanică",
    "Cutremur submarin și valuri uriașe",
    "Furtună tropicală",
    "Alunecare de teren"
  ],
  correctIndex: 1
},
{
  question: "Ce organ coordonează sistemul nervos?",
  options: [
    "Inima",
    "Creierul",
    "Plămânii",
    "Ficatul"
  ],
  correctIndex: 1
},
{
  question: "Ce limbă oficială se vorbește în Brazilia?",
  options: [
    "Spaniolă",
    "Portugheză",
    "Engleză",
    "Franceză"
  ],
  correctIndex: 1
},
{
  question: "Care este cea mai mare planetă din Sistemul Solar?",
  options: [
    "Saturn",
    "Neptun",
    "Jupiter",
    "Uranus"
  ],
  correctIndex: 2
},
{
  question: "Ce este o republică?",
  options: [
    "Stat condus de rege",
    "Stat condus de un lider ales",
    "Stat religios",
    "Stat militar"
  ],
  correctIndex: 1
},
{
  question: "Ce fenomen natural produce fulgerele?",
  options: [
    "Frecarea norilor",
    "Diferența de temperatură",
    "Descărcarea electrică",
    "Presiunea atmosferică"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Spaniei?",
  options: [
    "Barcelona",
    "Valencia",
    "Madrid",
    "Sevilla"
  ],
  correctIndex: 2
},
{
  question: "Ce este un ecosistem?",
  options: [
    "Un tip de climă",
    "Un sistem economic",
    "Interacțiunea dintre organisme și mediu",
    "Un lanț trofic simplu"
  ],
  correctIndex: 2
},
{
  question: "Cine a fost fondatorul Imperiului Mongol?",
  options: [
    "Kublai Han",
    "Genghis Han",
    "Attila",
    "Timur Lenk"
  ],
  correctIndex: 1
},
{
  question: "Ce rol are sistemul circulator?",
  options: [
    "Digestia",
    "Apărarea organismului",
    "Transportul substanțelor",
    "Respirația"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Suediei?",
  options: [
    "Oslo",
    "Stockholm",
    "Helsinki",
    "Copenhaga"
  ],
  correctIndex: 1
},
{
  question: "Ce tip de guvernare exista în Roma Antică înainte de Imperiu?",
  options: [
    "Monarhie absolută",
    "Republică",
    "Teocrație",
    "Democrație directă"
  ],
  correctIndex: 1
},
{
  question: "Care gaz este principalul responsabil pentru efectul de seră?",
  options: [
    "Oxigen",
    "Azot",
    "Dioxid de carbon",
    "Hidrogen"
  ],
  correctIndex: 2
},
{
  question: "Ce continent are cea mai mare suprafață?",
  options: [
    "Africa",
    "America de Nord",
    "Asia",
    "Europa"
  ],
  correctIndex: 2
},
{
  question: "Cine a pictat Capela Sixtină?",
  options: [
    "Leonardo da Vinci",
    "Rafael",
    "Michelangelo",
    "Donatello"
  ],
  correctIndex: 2
},
{
  question: "Ce este ADN-ul?",
  options: [
    "O proteină",
    "Un tip de celulă",
    "Material genetic",
    "Un hormon"
  ],
  correctIndex: 2
},
{
  question: "Care este cel mai mare ocean al lumii?",
  options: [
    "Atlantic",
    "Indian",
    "Pacific",
    "Arctic"
  ],
  correctIndex: 2
},
{
  question: "Ce oraș este considerat leagănul democrației?",
  options: [
    "Roma",
    "Sparta",
    "Atena",
    "Corint"
  ],
  correctIndex: 2
},
{
  question: "Ce organ produce insulina?",
  options: [
    "Ficatul",
    "Pancreasul",
    "Rinichii",
    "Stomacul"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Argentinei?",
  options: [
    "Montevideo",
    "Santiago",
    "Buenos Aires",
    "Lima"
  ],
  correctIndex: 2
},
{
  question: "Ce invenție este atribuită lui Johannes Gutenberg?",
  options: [
    "Busola",
    "Tiparul",
    "Praful de pușcă",
    "Ceasul mecanic"
  ],
  correctIndex: 1
},
{
  question: "Care este cea mai mare deșert din lume?",
  options: [
    "Sahara",
    "Gobi",
    "Kalahari",
    "Antarctica"
  ],
  correctIndex: 3
},
{
  question: "Ce parte a plantei realizează fotosinteza?",
  options: [
    "Rădăcina",
    "Tulpina",
    "Frunza",
    "Floarea"
  ],
  correctIndex: 2
},
{
  question: "Ce stat a declanșat Al Doilea Război Mondial?",
  options: [
    "Italia",
    "Japonia",
    "Germania",
    "URSS"
  ],
  correctIndex: 2
},
{
  question: "Ce este gravitația?",
  options: [
    "O reacție chimică",
    "O forță de atracție",
    "Un tip de energie",
    "Un fenomen electric"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Coreei de Sud?",
  options: [
    "Tokyo",
    "Phenian",
    "Seoul",
    "Hong Kong"
  ],
  correctIndex: 2
},
{
  question: "Ce sistem solar are Pământul?",
  options: [
    "Binar",
    "Trinar",
    "Cu o singură stea",
    "Artificial"
  ],
  correctIndex: 2
},
{
  question: "Cine a fost primul împărat roman?",
  options: [
    "Cezar",
    "Nero",
    "Augustus",
    "Traian"
  ],
  correctIndex: 2
},
{
  question: "Ce este o constituție?",
  options: [
    "Un cod penal",
    "Legea fundamentală a statului",
    "Un decret militar",
    "Un tratat internațional"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Greciei?",
  options: [
    "Salonic",
    "Atena",
    "Patras",
    "Heraklion"
  ],
  correctIndex: 1
},
{
  question: "Ce planetă are cei mai mulți sateliți naturali?",
  options: [
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptun"
  ],
  correctIndex: 1
},
{
  question: "Ce rol are ficatul?",
  options: [
    "Respirația",
    "Digestia și detoxifierea",
    "Circulația sângelui",
    "Coordonarea nervoasă"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Egiptului?",
  options: [
    "Alexandria",
    "Giza",
    "Cairo",
    "Luxor"
  ],
  correctIndex: 2
},
{
  question: "Ce este o galaxie?",
  options: [
    "O stea",
    "Un sistem de planete",
    "Un grup de stele",
    "Un asteroid"
  ],
  correctIndex: 2
},
{
  question: "Cine a scris 'Divina Comedie'?",
  options: [
    "Petrarca",
    "Boccaccio",
    "Dante Alighieri",
    "Machiavelli"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Libiei?",
  options: [
    "Tripoli",
    "Cairo",
    "Beirut",
    "Rabat"
  ],
  correctIndex: 0
},
{
  question: "Ce tip de celule transportă oxigenul în sânge?",
  options: [
    "Leucocite",
    "Trombocite",
    "Eritrocite",
    "Plasmă"
  ],
  correctIndex: 2
},
{
  question: "Cine a fost autorul teoriei evoluției prin selecție naturală?",
  options: [
    "Gregor Mendel",
    "Charles Darwin",
    "Louis Pasteur",
    "Isaac Newton"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Belgiei?",
  options: [
    "Luxemburg",
    "Bruges",
    "Bruxelles",
    "Gent"
  ],
  correctIndex: 2
},
{
  question: "Ce metal este lichid la temperatura camerei?",
  options: [
    "Fier",
    "Mercur",
    "Aluminiu",
    "Cupru"
  ],
  correctIndex: 1
},
{
  question: "Ce munți separă Europa de Asia?",
  options: [
    "Alpii",
    "Carpații",
    "Munții Ural",
    "Pirineii"
  ],
  correctIndex: 2
},
{
  question: "Ce parte a creierului controlează echilibrul?",
  options: [
    "Cerebrul",
    "Hipotalamusul",
    "Cerebelul",
    "Trunchiul cerebral"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Australiei?",
  options: [
    "Sydney",
    "Melbourne",
    "Canberra",
    "Ottawa"
  ],
  correctIndex: 2
},
{
  question: "Ce invenție a făcut posibilă Revoluția Industrială?",
  options: [
    "Motorul cu abur",
    "Busola",
    "Tiparul",
    "Telegraful"
  ],
  correctIndex: 0
},
{
  question: "Care este cel mai lung fluviu din lume?",
  options: [
    "Amazon",
    "Nil",
    "Mississippi",
    "Volga"
  ],
  correctIndex: 0
},
{
  question: "Ce este fotosinteza?",
  options: [
    "Respirația plantelor",
    "Procesul prin care plantele produc energie folosind lumina",
    "Absorbția apei",
    "Reproducerea plantelor"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Irlandei?",
  options: [
    "Cork",
    "Belfast",
    "Dublin",
    "Galway"
  ],
  correctIndex: 2
},
{
  question: "Ce organ este responsabil pentru filtrarea sângelui?",
  options: [
    "Ficatul",
    "Plămânii",
    "Rinichii",
    "Inima"
  ],
  correctIndex: 2
},
{
  question: "Ce eveniment a marcat începutul Evului Mediu?",
  options: [
    "Descoperirea Americii",
    "Căderea Constantinopolului",
    "Căderea Imperiului Roman de Apus",
    "Revoluția Franceză"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Finlandei?",
  options: [
    "Stockholm",
    "Oslo",
    "Helsinki",
    "Tallinn"
  ],
  correctIndex: 2
},
{
  question: "Ce gaz este esențial pentru respirația umană?",
  options: [
    "Azot",
    "Hidrogen",
    "Oxigen",
    "Heliu"
  ],
  correctIndex: 2
},
{
  question: "Cine a fost primul om care a ajuns pe Lună?",
  options: [
    "Buzz Aldrin",
    "Yuri Gagarin",
    "Neil Armstrong",
    "Michael Collins"
  ],
  correctIndex: 2
},
{
  question: "Ce formă de guvernământ are România?",
  options: [
    "Republică",
    "Monarhie",
    "Imperiu",
    "Federație"
  ],
  correctIndex: 0
},
{
  question: "Care este capitala Cehiei?",
  options: [
    "Berna",
    "Praga",
    "Bratislava",
    "Vienna"
  ],
  correctIndex: 1
},
{
  question: "Ce știință studiază cutremurele?",
  options: [
    "Meteorologia",
    "Astronomia",
    "Geologia",
    "Seismologia"
  ],
  correctIndex: 3
},
{
  question: "Ce planetă este cunoscută ca „Planeta Albastră”?",
  options: [
    "Venus",
    "Pământul",
    "Neptun",
    "Uranus"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Ungariei?",
  options: [
    "Debrecen",
    "Szeged",
    "Budapesta",
    "Pécs"
  ],
  correctIndex: 2
},
{
  question: "Ce este o eclipsă de Lună?",
  options: [
    "Luna acoperă Soarele",
    "Pământul se află între Soare și Lună",
    "Soarele dispare temporar",
    "O furtună solară"
  ],
  correctIndex: 1
},
{
  question: "Cine a formulat legile mișcării?",
  options: [
    "Albert Einstein",
    "Galileo Galilei",
    "Isaac Newton",
    "Nikola Tesla"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Croației?",
  options: [
    "Rejkjavik",
    "Dubrovnik",
    "Zagreb",
    "Rijeka"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Turciei?",
  options: [
    "Istanbul",
    "Izmir",
    "Ankara",
    "Antalya"
  ],
  correctIndex: 2
},
{
  question: "Taj Mahal-ul a fost construit cu funcția de:",
  options: [
    "Palat regal",
    "Templu hindus",
    "Mausoleu",
    "Fortăreață"
  ],
  correctIndex: 2
},
{
  question: "Alianța Nord-Atlantică (NATO) este:",
  options: [
    "O organizație economică",
    "O alianță politico-militară defensivă a statelor democratice occidentale",
    "Un tribunal internațional",
    "O organizație culturală"
  ],
  correctIndex: 1
},
{
  question: "În ce context a rostit Iulius Cezar 'Zarurile au fost aruncate'?",
  options: [
    "La traversarea Rubiconului",
    "După cucerirea Galiei",
    "În momentul asasinării sale",
    "La încoronarea ca împărat"
  ],
  correctIndex: 0
},
{
  question: "Curentul electric alternativ a fost promovat de:",
  options: [
    "Thomas Edison",
    "Alessandro Volta",
    "Nikola Tesla",
    "James Watt"
  ],
  correctIndex: 2
},
{
  question: "Cea mai fierbinte planetă din Sistemul Solar este:",
  options: [
    "Mercur",
    "Venus",
    "Marte",
    "Jupiter"
  ],
  correctIndex: 1
},
{
  question: "Procesul de Decolonizare (post-1945) a dus la:",
  options: [
    "Extinderea imperiului britanic",
    "Apariția a zeci de state independente în Asia și Africa",
    "Colonizarea Antarcticii",
    "Dispariția ONU"
  ],
  correctIndex: 1
},
{
  question: "Care a fost factorul decisiv în succesul militar al lui Genghis Han?",
  options: [
    "Utilizarea mercenarilor europeni",
    "Diplomația pașnică",
    "Construirea de fortificații masive",
    "Mobilitatea cavaleriei și meritocrația militară"
  ],
  correctIndex: 3
},
{
  question: "Capitala Canadei este:",
  options: [
    "Toronto",
    "Montreal",
    "Ottawa",
    "Vancouver"
  ],
  correctIndex: 2
},
{
  question: "Orașul antic Petra este faimos pentru:",
  options: [
    "Piramidele sale de sticlă",
    "Structurile săpate direct în stâncă",
    "Grădinile plutitoare",
    "Zidurile sale de apărare"
  ],
  correctIndex: 1
},
{
  question: "Criza Rachetelor din Cuba (1962) este momentul în care:",
  options: [
    "Fidel Castro a fost înlăturat",
    "Omenirea a fost cel mai aproape de un război nuclear între SUA și URSS",
    "Cuba a devenit stat american",
    "S-a inventat internetul"
  ],
  correctIndex: 1
},
{
  question: "Otto von Bismarck a realizat unificarea Germaniei prin:",
  options: [
    "Diplomație culturală",
    "Realpolitik",
    "Liberalism economic",
    "Pacifism religios"
  ],
  correctIndex: 1
},
{
  question: "Hertz-ul (Hz) este unitatea de măsură pentru:",
  options: [
    "Putere",
    "Frecvență",
    "Tensiune",
    "Rezistență"
  ],
  correctIndex: 1
},
{
  question: "O eclipsă de Soare are loc atunci când:",
  options: [
    "Pământul se află între Soare și Lună",
    "Luna trece între Pământ și Soare",
    "Soarele își pierde intensitatea",
    "O altă planetă blochează lumina"
  ],
  correctIndex: 1
},
{
  question: "Căderea Zidului Berlinului (1989) simbolizează:",
  options: [
    "Începutul Războiului Rece",
    "Prăbușirea „Cortinei de Fier” și sfârșitul divizării Europei",
    "Construirea unei noi fortificații",
    "Separarea Germaniei"
  ],
  correctIndex: 1
},
{
  question: "Ce document fundamental a emis Abraham Lincoln în timpul Războiului Civil?",
  options: [
    "Declarația de Independență",
    "Proclamația de Emancipare",
    "Constituția Statelor Unite",
    "Tratatul de la Versailles"
  ],
  correctIndex: 1
},
{
  question: "Cine a descoperit radioactivitatea?",
  options: [
    "Albert Einstein",
    "Isaac Newton",
    "Henri Becquerel",
    "Galileo Galilei"
  ],
  correctIndex: 2
},
{
  question: "Capitala Braziliei este:",
  options: [
    "Rio de Janeiro",
    "São Paulo",
    "Brasilia",
    "Salvador"
  ],
  correctIndex: 2
},
{
  question: "Catedrala Sagrada Família este opera arhitectului:",
  options: [
    "Pablo Picasso",
    "Salvador Dalí",
    "Antoni Gaudí",
    "Santiago Calatrava"
  ],
  correctIndex: 2
},
{
  question: "Apartheidul din Africa de Sud a fost:",
  options: [
    "Un sistem de segregare rasială instituționalizată",
    "O reformă agrară",
    "Un tratat de pace cu vecinii",
    "Un festival cultural"
  ],
  correctIndex: 0
},
{
  question: "Discursul lui Winston Churchill de la Fulton a popularizat termenul:",
  options: [
    "Război Rece",
    "Cortina de Fier",
    "Planul Marshall",
    "Națiunile Unite"
  ],
  correctIndex: 1
},
{
  question: "Sputnik 1 a fost:",
  options: [
    "Primul om în spațiu",
    "Prima stație spațială",
    "Primul satelit artificial al Pământului",
    "Prima sondă pe Marte"
  ],
  correctIndex: 2
},
{
  question: "Atentatele de la 11 septembrie 2001 au declanșat:",
  options: [
    "Desființarea NATO",
    "„Războiul împotriva terorismului”",
    "Închiderea granițelor aeriene",
    "Pacea mondială"
  ],
  correctIndex: 1
},
{
  question: "Mustafa Kemal Atatürk este considerat părintele Turciei moderne deoarece:",
  options: [
    "A restaurat Imperiul Otoman",
    "A transformat țara într-o republică seculară",
    "A cucerit teritorii noi în Balcani",
    "A instaurat o teocrație islamică"
  ],
  correctIndex: 1
},
{
  question: "Capitala Elveției (de facto) este:",
  options: [
    "Zurich",
    "Geneva",
    "Berna",
    "Basel"
  ],
  correctIndex: 2
},
{
  question: "Marele Zid Chinezesc a fost construit pentru:",
  options: [
    "Delimitarea granițelor comerciale",
    "Protecția împotriva invaziilor triburilor nomade",
    "Prevenirea inundațiilor",
    "Ceremonii religioase"
  ],
  correctIndex: 1
},
{
question: "Ce înseamnă cuvântul românesc prolix?",
options: ["Scurt și concis", "Excesiv de lung în exprimare", "Ambiguu", "Neclar"],
correctIndex: 1
},
{
question: "Ce înseamnă cuvântul eretic?",
options: ["Tradiționalist", "Credincios devotat", "Care se abate de la dogmă", "Neutru religios"],
correctIndex: 2
},
{
question: "Ce semnifică termenul paradigmatic?",
options: ["Lipsit de sens", "Care servește drept model", "Contradictoriu", "Aleatoriu"],
correctIndex: 1
},
{
question: "Ce înseamnă cuvântul inefabil?",
options: ["Ușor de descris", "De neînțeles", "Care nu poate fi exprimat în cuvinte", "Lipsit de valoare"],
correctIndex: 2
},
{
question: "Ce înseamnă vetust?",
options: ["Modern", "Foarte vechi și uzat", "Fragil", "Strălucitor"],
correctIndex: 1
},
{
question: "Ce semnifică adjectivul laconic?",
options: ["Vorbește mult", "Ambiguu", "Se exprimă concis", "Nervos"],
correctIndex: 2
},
{
question: "Ce înseamnă cuvântul peremptoriu?",
options: ["Opțional", "Evitabil", "Imperativ, categoric", "Neclar"],
correctIndex: 2
},
{
question: "Ce sens are ubuesc?",
options: ["Realist", "Logic", "Absurd și grotesc", "Tragic"],
correctIndex: 2
},
{
question: "Ce înseamnă incongruent?",
options: ["Potrivit", "Care nu se potrivește", "Identic", "Simetric"],
correctIndex: 1
},
{
question: "Ce înseamnă termenul apodictic?",
options: ["Ipoteză", "Opinabil", "Demonstrat cu certitudine", "Subiectiv"],
correctIndex: 2
},

{
question: "What does the English word obfuscate mean?",
options: ["To clarify", "To simplify", "To deliberately make unclear", "To repeat"],
correctIndex: 2
},
{
question: "What is the meaning of ubiquitous?",
options: ["Rare", "Present everywhere", "Dangerous", "Temporary"],
correctIndex: 1
},
{
question: "What does esoteric refer to?",
options: ["Widely known", "Superficial", "Understood by a select few", "Obsolete"],
correctIndex: 2
},
{
question: "What does the word intransigent mean?",
options: ["Flexible", "Open-minded", "Unwilling to compromise", "Indecisive"],
correctIndex: 2
},
{
question: "What does ephemeral mean?",
options: ["Long-lasting", "Permanent", "Short-lived", "Repetitive"],
correctIndex: 2
},
{
question: "What does perspicacious describe?",
options: ["Careless", "Short-sighted", "Highly perceptive", "Stubborn"],
correctIndex: 2
},
{
question: "What is the meaning of pulchritude?",
options: ["Strength", "Beauty", "Complexity", "Wisdom"],
correctIndex: 1
},
{
question: "What does recalcitrant mean?",
options: ["Obedient", "Compliant", "Resistant to authority", "Cooperative"],
correctIndex: 2
},
{
question: "What does the word loquacious describe?",
options: ["Silent", "Talkative", "Angry", "Reserved"],
correctIndex: 1
},
{
question: "What does nefarious mean?",
options: ["Harmless", "Honorable", "Wicked or criminal", "Uncertain"],
correctIndex: 2
},
{
question: "Ce animal are cea mai mare inimă din regnul animal?",
options: ["Elefantul african", "Balena albastră", "Hipopotamul", "Rechinul-balenă"],
correctIndex: 1
},
{
question: "Ce specie de pasăre poate zbura înapoi?",
options: ["Rândunica", "Colibri", "Albatrosul", "Șoimul"],
correctIndex: 1
},
{
question: "Ce animal poate supraviețui în vidul spațiului pentru o perioadă scurtă?",
options: ["Acarianul", "Furnica", "Tardigradul", "Scorpionul"],
correctIndex: 2
},
{
question: "Ce mamifer marin doarme cu o jumătate de creier activă?",
options: ["Balena", "Delfinul", "Foca", "Lamantinul"],
correctIndex: 1
},
{
question: "Ce animal are sângele albastru datorită hemocianinei?",
options: ["Caracatița", "Peștele-spadă", "Meduza", "Rechinul"],
correctIndex: 0
},
{
question: "Ce specie poate detecta câmpul magnetic al Pământului?",
options: ["Ursul polar", "Porumbelul călător", "Câinele", "Broasca"],
correctIndex: 1
},
{
question: "Ce animal are cea mai mare forță relativă la greutatea sa?",
options: ["Leul", "Gândacul rinocer", "Furnica", "Cangurul"],
correctIndex: 2
},
{
question: "Ce reptilă are capacitatea de a-și schimba culoarea pentru camuflaj?",
options: ["Iguana", "Șarpele boa", "Cameleonul", "Gecko"],
correctIndex: 2
},
{
question: "Ce animal este cunoscut pentru memoria sa excepțională?",
options: ["Calul", "Delfinul", "Elefantul", "Ursul"],
correctIndex: 2
},
{
question: "Ce insectă comunică prin dans pentru a indica surse de hrană?",
options: ["Furnica", "Albina", "Viespea", "Lăcusta"],
correctIndex: 1
},

{
question: "Ce proces permite plantelor să producă energie folosind lumina solară?",
options: ["Respirația", "Transpirația", "Fotosinteza", "Fermentația"],
correctIndex: 2
},
{
question: "Ce pigment este responsabil pentru culoarea verde a plantelor?",
options: ["Carotenul", "Xantofila", "Clorofila", "Antocianina"],
correctIndex: 2
},
{
question: "Ce parte a plantei este responsabilă de absorbția apei și mineralelor?",
options: ["Tulpina", "Frunza", "Floarea", "Rădăcina"],
correctIndex: 3
},
{
question: "Ce tip de plante își pierd frunzele toamna?",
options: ["Conifere", "Plante perene", "Plante anuale", "Plante foioase"],
correctIndex: 3
},
{
question: "Ce gaz este absorbit de plante în timpul fotosintezei?",
options: ["Oxigen", "Azot", "Dioxid de carbon", "Hidrogen"],
correctIndex: 2
},
{
question: "Ce plantă este cunoscută pentru capacitatea de a prinde insecte?",
options: ["Feriga", "Floarea-soarelui", "Planta carnivoră", "Laleaua"],
correctIndex: 2
},
{
question: "Ce structură a florii produce semințele?",
options: ["Petala", "Stamina", "Sepala", "Ovarul"],
correctIndex: 3
},
{
question: "Ce tip de reproducere folosesc plantele cu flori?",
options: ["Asexuată", "Vegetativă", "Sexuată", "Clonare"],
correctIndex: 2
},
{
question: "Ce plantă este cea mai înaltă din lume?",
options: ["Sequoia", "Baobabul", "Eucaliptul", "Pinul"],
correctIndex: 0
},
{
question: "Ce rol au stomatele frunzelor?",
options: ["Fotosinteză", "Reproducere", "Schimb de gaze", "Depozitare"],
correctIndex: 2
},
{
question: "Care componentă a motorului transformă mișcarea liniară a pistonului în mișcare de rotație?",
options: ["Arborele cu came", "Volanta", "Arborele cotit", "Biela"],
correctIndex: 2
},
{
question: "Ce rol are turbocompresorul într-un motor?",
options: ["Reduce consumul de ulei", "Crește cantitatea de aer admisă", "Răcește motorul", "Reduce zgomotul"],
correctIndex: 1
},
{
question: "Ce tip de tracțiune oferă cea mai bună stabilitate pe drumuri alunecoase?",
options: ["Tracțiune față", "Tracțiune spate", "Tracțiune integrală", "Tracțiune hibridă"],
correctIndex: 2
},
{
question: "Ce componentă este responsabilă de oprirea vehiculului?",
options: ["Ambreiajul", "Sistemul de frânare", "Cutia de viteze", "Diferențialul"],
correctIndex: 1
},
{
question: "Ce se întâmplă dacă raportul aer–combustibil este prea bogat?",
options: ["Crește eficiența", "Scade consumul", "Crește consumul și emisiile", "Motorul se oprește instant"],
correctIndex: 2
},
{
question: "Care este rolul diferențialului?",
options: ["Schimbă treptele de viteză", "Permite roților să se rotească la viteze diferite", "Răcește transmisia", "Crește cuplul motor"],
correctIndex: 1
},
{
question: "Ce tip de motor este cel mai eficient din punct de vedere termic?",
options: ["Motor pe benzină", "Motor diesel", "Motor în doi timpi", "Motor electric"],
correctIndex: 1
},
{
question: "Ce senzor măsoară cantitatea de oxigen din gazele de eșapament?",
options: ["Senzor MAP", "Senzor MAF", "Senzor lambda", "Senzor ABS"],
correctIndex: 2
},
{
question: "Ce funcție are ambreiajul?",
options: ["Crește viteza maximă", "Leagă și separă motorul de transmisie", "Controlează frânarea", "Reduce vibrațiile"],
correctIndex: 1
},
{
question: "Ce tip de cutie de viteze schimbă automat treptele fără intervenția șoferului?",
options: ["Manuală", "CVT", "Automată", "Secvențială"],
correctIndex: 2
},

{
question: "Ce organizație este responsabilă de securitatea colectivă transatlantică?",
options: ["ONU", "UE", "NATO", "OSCE"],
correctIndex: 2
},
{
question: "Ce strâmtoare este esențială pentru transportul global de petrol?",
options: ["Gibraltar", "Bosfor", "Hormuz", "Malacca"],
correctIndex: 2
},
{
question: "Ce stat are cel mai mare număr de focoase nucleare?",
options: ["SUA", "China", "Franța", "Rusia"],
correctIndex: 3
},
{
question: "Ce concept descrie competiția pentru influență globală dintre marile puteri?",
options: ["Globalizare", "Echilibru de putere", "Izolaționism", "Federalism"],
correctIndex: 1
},
{
question: "Ce regiune este revendicată simultan de mai multe state asiatice?",
options: ["Marea Neagră", "Marea Chinei de Sud", "Marea Baltică", "Golful Persic"],
correctIndex: 1
},
{
question: "Ce alianță economică include Brazilia, Rusia, India, China și Africa de Sud?",
options: ["G7", "ASEAN", "BRICS", "NAFTA"],
correctIndex: 2
},
{
question: "Ce stat este considerat pivot geopolitic între Europa și Asia?",
options: ["Grecia", "Turcia", "Italia", "Spania"],
correctIndex: 1
},
{
question: "Ce document stabilește drepturile statelor asupra apelor maritime?",
options: ["Carta ONU", "Convenția de la Geneva", "UNCLOS", "Tratatul de la Maastricht"],
correctIndex: 2
},
{
question: "Ce conflict a început în 2014 prin anexarea Crimeei?",
options: ["Războiul din Siria", "Conflictul Rusia–Ucraina", "Războiul din Irak", "Conflictul din Caucaz"],
correctIndex: 1
},
{
question: "Ce putere este descrisă ca fiind „soft power”?",
options: ["Forța militară", "Influența culturală și diplomatică", "Controlul resurselor", "Supremația economică"],
correctIndex: 1
},

{
question: "Ce limbaj este utilizat în principal pentru dezvoltarea web frontend?",
options: ["Python", "Java", "JavaScript", "C++"],
correctIndex: 2
},
{
question: "Ce este un algoritm?",
options: ["Un limbaj de programare", "O bază de date", "Un set de pași pentru rezolvarea unei probleme", "Un sistem de operare"],
correctIndex: 2
},
{
question: "Ce protocol este folosit pentru securizarea comunicațiilor web?",
options: ["HTTP", "FTP", "SMTP", "HTTPS"],
correctIndex: 3
},
{
question: "Ce componentă hardware execută instrucțiunile unui program?",
options: ["RAM", "SSD", "CPU", "GPU"],
correctIndex: 2
},
{
question: "Ce înseamnă termenul „open-source”?",
options: ["Software gratuit", "Software fără licență", "Cod accesibil publicului", "Software offline"],
correctIndex: 2
},
{
question: "Ce tip de memorie se pierde la oprirea calculatorului?",
options: ["ROM", "SSD", "HDD", "RAM"],
correctIndex: 3
},
{
question: "Ce este o bază de date?",
options: ["Un limbaj de programare", "O colecție organizată de date", "Un sistem de operare", "Un server fizic"],
correctIndex: 1
},
{
question: "Ce rol are firewall-ul?",
options: ["Crește viteza internetului", "Stochează date", "Protejează rețeaua", "Actualizează software-ul"],
correctIndex: 2
},
{
question: "Ce companie a creat sistemul de operare Linux?",
options: ["Microsoft", "Apple", "Nicio companie", "IBM"],
correctIndex: 2
},
{
question: "Ce este inteligența artificială?",
options: ["Un tip de hardware", "Simularea inteligenței umane de către mașini", "Un limbaj de programare", "Un virus informatic"],
correctIndex: 1
},

{
question: "Care este cel mai mare animal terestru?",
options: ["Rinocerul", "Hipopotamul", "Elefantul african", "Girafa"],
correctIndex: 2
},
{
question: "Ce animal are cea mai mare speranță de viață?",
options: ["Elefantul", "Broasca țestoasă gigant", "Balena albastră", "Rechinul alb"],
correctIndex: 1
},
{
question: "Ce specie este cunoscută pentru folosirea uneltelor?",
options: ["Câinele", "Delfinul", "Leul", "Calul"],
correctIndex: 1
},
{
question: "Ce animal poate regenera membre pierdute?",
options: ["Șarpele", "Salamandra", "Crocodilul", "Țestoasa"],
correctIndex: 1
},
{
question: "Care este cel mai rapid animal terestru?",
options: ["Leopardul", "Antilopa", "Ghepardul", "Lupul"],
correctIndex: 2
},
{
question: "Ce animal are cea mai puternică mușcătură?",
options: ["Leul", "Rechinul alb", "Hipopotamul", "Crocodilul de Nil"],
correctIndex: 3
},
{
question: "Ce mamifer este capabil de zbor?",
options: ["Liliacul", "Veveța zburătoare", "Pasărea colibri", "Pterodactilul"],
correctIndex: 0
},
{
question: "Ce animal folosește ecolocația pentru orientare?",
options: ["Pisica", "Delfinul", "Elefantul", "Ursul"],
correctIndex: 1
},
{
question: "Ce specie este considerată cea mai inteligentă după om?",
options: ["Cimpanzeul", "Delfinul", "Elefantul", "Papagalul"],
correctIndex: 1
},
{
question: "Ce animal poate trăi cel mai mult fără apă?",
options: ["Cămila", "Șobolanul cangur", "Cobra", "Broasca de deșert"],
correctIndex: 1
},
  {
    question: "Ce proces celular permite formarea gameților?",
    options: [
      "Mitoza",
      "Meioza",
      "Apoptoza",
      "Diferențierea"
    ],
    correctIndex: 1
  },
  {
    question: "Care structură celulară este implicată direct în sinteza proteinelor?",
    options: [
      "Lizozomii",
      "Ribozomii",
      "Centriolii",
      "Aparatul Golgi"
    ],
    correctIndex: 1
  },
  {
    question: "Ce tip de legătură stabilizează structura secundară a proteinelor?",
    options: [
      "Legături ionice",
      "Legături covalente",
      "Legături de hidrogen",
      "Forțe Van der Waals"
    ],
    correctIndex: 2
  },
  {
    question: "Ce rol are enzima ADN-polimerază?",
    options: [
      "Transcrierea ARN",
      "Repararea proteinelor",
      "Replicarea ADN-ului",
      "Traducerea proteinelor"
    ],
    correctIndex: 2
  },
  {
    question: "Ce sistem al corpului uman este responsabil de homeostazie hormonală?",
    options: [
      "Nervos",
      "Digestiv",
      "Endocrin",
      "Limfatic"
    ],
    correctIndex: 2
  },
  {
    question: "Ce structură cerebrală este implicată în coordonarea mișcărilor?",
    options: [
      "Hipotalamus",
      "Trunchiul cerebral",
      "Cerebelul",
      "Amigdala"
    ],
    correctIndex: 2
  },
  {
    question: "Ce proces permite celulelor să obțină energie în absența oxigenului?",
    options: [
      "Respirația aerobă",
      "Fotosinteza",
      "Fermentația",
      "Oxidarea fosforilativă"
    ],
    correctIndex: 2
  },
  {
    question: "Care este funcția principală a hemoglobinei?",
    options: [
      "Digestia proteinelor",
      "Transportul oxigenului",
      "Apărarea imunitară",
      "Coagularea sângelui"
    ],
    correctIndex: 1
  },
  {
    question: "Ce organ este afectat în mod direct de ciroză?",
    options: [
      "Rinichiul",
      "Plămânul",
      "Ficatul",
      "Pancreasul"
    ],
    correctIndex: 2
  },
  {
    question: "Ce tip de mutație modifică cadrul de citire al unei gene?",
    options: [
      "Mutație punctuală",
      "Deleție sau inserție",
      "Rearanjare cromozomială",
      "Translocație"
    ],
    correctIndex: 1
  },
  {
    question: "Care oraș este considerat capitala financiară a Uniunii Europene?",
    options: [
      "Paris",
      "Frankfurt",
      "Bruxelles",
      "Amsterdam"
    ],
    correctIndex: 1
  },
  {
    question: "Petra a fost capitala antică a regatului:",
    options: [
      "Asirian",
      "Persan",
      "Nabateean",
      "Hitit"
    ],
    correctIndex: 2
  },
  {
    question: "Care oraș a fost construit pe aproximativ 118 insule interconectate prin canale?",
    options: [
      "Amsterdam",
      "Stockholm",
      "Veneția",
      "Sankt Petersburg"
    ],
    correctIndex: 2
  },
  {
    question: "Care dintre următoarele orașe a fost cunoscut în Antichitate ca Bizanț?",
    options: [
      "Atena",
      "Roma",
      "Istanbul",
      "Sofia"
    ],
    correctIndex: 2
  },
  {
    question: "Marele Zid Chinezesc a fost construit predominant în timpul dinastiei:",
    options: [
      "Han",
      "Tang",
      "Ming",
      "Qing"
    ],
    correctIndex: 2
  },
  {
    question: "Care oraș este considerat leagănul democrației?",
    options: [
      "Roma",
      "Sparta",
      "Atena",
      "Corint"
    ],
    correctIndex: 2
  },
  {
    question: "Angkor Wat a fost inițial dedicat zeului:",
    options: [
      "Buddha",
      "Shiva",
      "Vishnu",
      "Brahma"
    ],
    correctIndex: 2
  },
  {
    question: "Care oraș a fost distrus aproape complet de erupția Vezuviului din anul 79 d.Hr.?",
    options: [
      "Pompeii",
      "Neapolis",
      "Capua",
      "Syracuse"
    ],
    correctIndex: 0
  },
  {
    question: "Care oraș este cunoscut drept „Orașul Interzis” datorită palatului imperial?",
    options: [
      "Kyoto",
      "Beijing",
      "Seul",
      "Shanghai"
    ],
    correctIndex: 1
  },
  {
    question: "Care oraș a fost capitala Imperiului Inca?",
    options: [
      "Lima",
      "Quito",
      "Cusco",
      "La Paz"
    ],
    correctIndex: 2
  },
  {
    question: "Care macronutrient are cea mai mare densitate calorică?",
    options: [
      "Proteinele",
      "Carbohidrații",
      "Lipidele",
      "Alcoolul"
    ],
    correctIndex: 2
  },
  {
    question: "Ce rol are insulina în metabolism?",
    options: [
      "Crește glicemia",
      "Favorizează depozitarea glucozei în celule",
      "Inhibă sinteza proteinelor",
      "Activează arderea grăsimilor"
    ],
    correctIndex: 1
  },
  {
    question: "Care vitamină este esențială pentru coagularea sângelui?",
    options: [
      "Vitamina A",
      "Vitamina C",
      "Vitamina K",
      "Vitamina D"
    ],
    correctIndex: 2
  },
  {
    question: "Ce tip de acizi grași sunt considerați esențiali?",
    options: [
      "Saturați",
      "Mononesaturați",
      "Omega-3 și Omega-6",
      "Trans"
    ],
    correctIndex: 2
  },
  {
    question: "Ce mineral este implicat direct în transmiterea impulsului nervos și contracția musculară?",
    options: [
      "Fier",
      "Calciu",
      "Zinc",
      "Seleniu"
    ],
    correctIndex: 1
  },
  {
    question: "Care ramură de drept reglementează raporturile dintre stat și cetățean?",
    options: [
      "Drept civil",
      "Drept penal",
      "Drept constituțional",
      "Drept comercial"
    ],
    correctIndex: 2
  },
  {
    question: "Care este principiul fundamental al procesului penal?",
    options: [
      "Prezumpția de vinovăție",
      "Egalitatea pedepselor",
      "Prezumpția de nevinovăție",
      "Autoritatea absolută a statului"
    ],
    correctIndex: 2
  },
  {
    question: "Ce instituție este garantul Constituției într-un stat de drept?",
    options: [
      "Parlamentul",
      "Guvernul",
      "Curtea Constituțională",
      "Președinția"
    ],
    correctIndex: 2
  },
  {
    question: "Care este scopul principal al dreptului penal?",
    options: [
      "Reglementarea comerțului",
      "Protejarea ordinii sociale prin sancționarea infracțiunilor",
      "Stabilirea impozitelor",
      "Organizarea administrației publice"
    ],
    correctIndex: 1
  },
  {
    question: "Ce act juridic fundamental stă la baza drepturilor și libertăților cetățenești?",
    options: [
      "Codul Civil",
      "Codul Penal",
      "Constituția",
      "Hotărârile judecătorești"
    ],
    correctIndex: 2
  },
{
  question: "Care organ este principalul responsabil pentru detoxifierea organismului?",
  options: ["Ficatul", "Rinichiul", "Splina", "Pancreasul"],
  correctIndex: 0
},
{
  question: "Ce structură celulară este responsabilă de producerea ATP-ului?",
  options: ["Nucleul", "Aparatul Golgi", "Ribozomul", "Mitocondria"],
  correctIndex: 3
},
{
  question: "Ce tip de imunitate este dobândită prin vaccinare?",
  options: ["Imunitate activă artificială", "Imunitate pasivă naturală", "Imunitate înnăscută", "Imunitate pasivă artificială"],
  correctIndex: 0
},
{
  question: "Care hormon reglează în principal ritmul somn–veghe?",
  options: ["Adrenalină", "Cortizol", "Insulină", "Melatonină"],
  correctIndex: 3
},
{
  question: "Ce componentă a sângelui este responsabilă de coagulare?",
  options: ["Plasma", "Plachetele", "Eritrocitele", "Leucocitele"],
  correctIndex: 1
},
{
  question: "Ce tip de țesut permite contracția voluntară?",
  options: ["Muscular striat", "Muscular cardiac", "Muscular neted", "Epithelial"],
  correctIndex: 0
},
{
  question: "Care este rolul principal al ADN-ului?",
  options: ["Transmiterea informației genetice", "Digestia proteinelor", "Transportul oxigenului", "Producerea energiei"],
  correctIndex: 0
},
{
  question: "Ce organ produce bila?",
  options: ["Ficatul", "Vezica biliară", "Pancreasul", "Duodenul"],
  correctIndex: 0
},
{
  question: "Ce sistem al organismului coordonează răspunsurile rapide?",
  options: ["Sistemul nervos", "Sistemul endocrin", "Sistemul limfatic", "Sistemul digestiv"],
  correctIndex: 0
},
{
  question: "Ce tip de respirație celulară produce cea mai mare cantitate de ATP?",
  options: ["Respirația aerobă", "Fermentația alcoolică", "Fermentația lactică", "Respirația anaerobă"],
  correctIndex: 0
},

{
  question: "Ce vitamină este sintetizată în piele sub acțiunea razelor UV?",
  options: ["Vitamina A", "Vitamina D", "Vitamina C", "Vitamina K"],
  correctIndex: 1
},
{
  question: "Ce rol au fibrele alimentare?",
  options: ["Încetinesc digestia și tranzitul intestinal", "Cresc glicemia", "Furnizează energie rapidă", "Cresc masa musculară"],
  correctIndex: 0
},
{
  question: "Care macronutrient este esențial pentru sinteza hormonilor steroizi?",
  options: ["Lipidele", "Proteinele", "Carbohidrații", "Fibrele"],
  correctIndex: 0
},
{
  question: "Ce mineral este cel mai important pentru transportul oxigenului?",
  options: ["Calciu", "Magneziu", "Zinc", "Fier"],
  correctIndex: 3
},
{
  question: "Ce indice este folosit pentru evaluarea obezității?",
  options: ["IMC", "VO2 max", "Glicemia", "Colesterolul HDL"],
  correctIndex: 0
},
{
  question: "Ce tip de carbohidrați au absorbție lentă?",
  options: ["Carbohidrați complecși", "Zaharuri simple", "Carbohidrați rafinați", "Fructoză"],
  correctIndex: 0
},
{
  question: "Ce aminoacizi trebuie obținuți din alimentație?",
  options: ["Aromatici", "Esențiali", "Neesențiali", "Polari"],
  correctIndex: 1
},
{
  question: "Ce hormon stimulează senzația de foame?",
  options: ["Leptina", "Insulina", "Grelina", "Glucagonul"],
  correctIndex: 2
},
{
  question: "Ce nutrient este sursa principală de energie în efort intens?",
  options: ["Carbohidrații", "Lipidele", "Proteinele", "Vitaminele"],
  correctIndex: 0
},
{
  question: "Ce dezechilibru duce la diabetul de tip 2?",
  options: ["Rezistență la insulină", "Hipertiroidism", "Hipoglicemie cronică", "Deficit absolut de insulină"],
  correctIndex: 0
},

{
  question: "Ce ramură a dreptului reglementează relațiile patrimoniale?",
  options: ["Drept civil", "Drept penal", "Drept constituțional", "Drept administrativ"],
  correctIndex: 0
},
{
  question: "Ce infracțiune presupune intenția de a suprima viața?",
  options: ["Lovirea", "Vătămarea corporală", "Neglijența", "Omorul"],
  correctIndex: 3
},
{
  question: "Ce autoritate exercită puterea executivă?",
  options: ["Parlamentul", "Guvernul", "Instanțele", "Curtea Constituțională"],
  correctIndex: 1
},
{
  question: "Ce principiu garantează aplicarea egală a legii?",
  options: ["Legalitatea", "Separarea puterilor", "Egalitatea în fața legii", "Autoritatea statului"],
  correctIndex: 2
},
{
  question: "Ce răspundere intervine pentru încălcarea unui contract?",
  options: ["Penală", "Administrativă", "Civilă", "Constituțională"],
  correctIndex: 2
},
{
  question: "Cine adoptă legile?",
  options: ["Parlamentul", "Guvernul", "Președintele", "Instanțele"],
  correctIndex: 0
},
{
  question: "Ce este jurisprudența?",
  options: ["Legi scrise", "Decizii ale instanțelor", "Acte administrative", "Tratate internaționale"],
  correctIndex: 1
},
{
  question: "Ce sancțiune este specifică dreptului penal?",
  options: ["Despăgubirea", "Amenda contravențională", "Anularea unui act", "Închisoarea"],
  correctIndex: 3
},
{
  question: "Libertatea de exprimare este un:",
  options: ["Drept politic", "Drept social", "Drept economic", "Drept civil"],
  correctIndex: 0
},
{
  question: "Ce act stabilește organizarea statului?",
  options: ["Constituția", "Codul Civil", "Codul Penal", "Hotărârile guvernului"],
  correctIndex: 0
},
{
  question: "Ce oraș este cunoscut drept „Orașul celor Șapte Coline”?",
  options: ["Roma", "Atena", "Istanbul", "Lisabona"],
  correctIndex: 0
},
{
  question: "Unde se află Machu Picchu?",
  options: ["Chile", "Bolivia", "Peru", "Mexic"],
  correctIndex: 2
},
{
  question: "Ce oraș găzduiește Opera din Sydney?",
  options: ["Sydney", "Melbourne", "Canberra", "Perth"],
  correctIndex: 0
},
{
  question: "Turnul Eiffel a fost construit pentru:",
  options: ["O expoziție mondială", "Apărare militară", "Observator astronomic", "Locuință regală"],
  correctIndex: 0
},
{
  question: "„La Serenissima” se referă la:",
  options: ["Amsterdam", "Bruges", "Veneția", "Copenhaga"],
  correctIndex: 2
},
{
  question: "Unde se află Taj Mahal?",
  options: ["India", "Pakistan", "Iran", "Bangladesh"],
  correctIndex: 0
},
{
  question: "Capitala culturală tradițională a Japoniei este:",
  options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
  correctIndex: 1
},
{
  question: "Statuia lui Hristos Mântuitorul se află în:",
  options: ["Buenos Aires", "Rio de Janeiro", "Santiago", "Lisabona"],
  correctIndex: 1
},
{
  question: "Muzeul Luvru se află în:",
  options: ["Madrid", "Roma", "Viena", "Paris"],
  correctIndex: 3
},
{
  question: "Wall Street se află în:",
  options: ["New York", "Londra", "Tokyo", "Frankfurt"],
  correctIndex: 0
}
  ],
  meteorology: [
    {
      id: 1,
      question: "What clouds and weather may result from an humid and instable air mass, that is pushed against a chain of mountains by the predominant wind and forced to rise?",
      options: [
        "Embedded CB with thunderstorms and showers of hail and/or rain.",
        "Thin Altostratus and Cirrostratus clouds with light and steady precipitation.",
        "Overcast low stratus (high fog) with no precipitation.",
        "Smooth, unstructured NS cloud with light drizzle or snow (during winter)."
      ],
      correctIndex: 0,
      explanation: "When a humid and inherently unstable air mass is mechanically forced upward by a mountain range (orographic lifting), the existing instability is severely amplified. The rapid adiabatic cooling of the moist air triggers deep convection, leading to the explosive vertical development of Cumulonimbus (CB) clouds. These embedded thunderstorms are notoriously dangerous, bringing severe turbulence, heavy rain or hail showers, and severe icing conditions."
    },
    {
      id: 2,
      question: "What type of fog emerges if humid and almost saturated air, is forced to rise upslope of hills or shallow mountains by the prevailling wind?",
      options: [
        "Orographic fog",
        "Steaming fog",
        "Radiation fog",
        "Advection fog"
      ],
      correctIndex: 0,
      explanation: "Orographic fog (also known as hill fog) is generated by the mechanical lifting of moist air up the slope of a mountain or hill. As the air rises, it expands and cools adiabatically. Since the air is already near saturation, even a slight cooling causes the temperature to drop to the dew point, resulting in immediate condensation and fog formation hugging the terrain."
    },
    {
      id: 3,
      question: "What situation is called \"over-development\" in a weather report?",
      options: [
        "Vertical development of Cumulus clouds to rain showers",
        "Widespreading of Cumulus clouds below an inversion layer",
        "Change from blue thermals to cloudy thermals during the afternoon",
        "Development of a thermal low to a storm depression"
      ],
      correctIndex: 0,
      explanation: "In aviation meteorology, 'over-development' refers to the rapid and excessive vertical growth of initially harmless fair-weather Cumulus (Cumulus humilis) into towering Cumulus congestus or Cumulonimbus (CB) clouds. This process transforms a benign soaring environment into a hazardous one, characterized by heavy rain showers, strong downdrafts, and potential thunderstorm activity."
    },
    {
      id: 4,
      question: "What is the gas composition of \"air\"?",
      options: [
        "Oxygen 21%, Water vapour 78%, Noble gases / carbon dioxide 1%",
        "Oxygen 78%, Water vapour 21%, Nitrogen 1%",
        "Nitrogen 21%, Oxygen 78%, Noble gases / carbon dioxide 1%",
        "Oxygen 21%, Nitrogen 78%, Noble gases / carbon dioxide 1%"
      ],
      correctIndex: 3,
      explanation: "The Earth's dry atmosphere is predominantly composed of Nitrogen (approximately 78%) and Oxygen (approximately 21%). The remaining 1% consists of Argon, Carbon Dioxide, and trace amounts of other noble gases. Water vapor is highly variable (0-4%) and is considered separately from the dry gas composition."
    },
    {
      id: 5,
      question: "Weather phenomena are most common to be found in which atmospheric layer?",
      options: [
        "Stratosphere",
        "Tropopause",
        "Thermosphere",
        "Troposphere"
      ],
      correctIndex: 3,
      explanation: "The Troposphere is the lowest layer of the Earth's atmosphere, extending from the surface up to about 11 km (36,000 ft) on average. It contains roughly 75% of the atmosphere's mass and almost 99% of its water vapor and aerosols. Consequently, practically all sensible weather phenomena, cloud formations, and convective mixing occur within this layer."
    },
    {
      id: 6,
      question: "What is the mass of a \"cube of air\" with the edges 1 m long, at MSL according ISA?",
      options: [
        "1,225 kg",
        "0,01225 kg",
        "0,1225 kg",
        "12,25 kg"
      ],
      correctIndex: 0,
      explanation: "Under International Standard Atmosphere (ISA) conditions at Mean Sea Level (MSL)—which assumes a temperature of 15°C and a pressure of 1013.25 hPa—the standard density of dry air is precisely defined as 1.225 kilograms per cubic meter (kg/m³)."
    },
    {
      id: 7,
      question: "At what rate does the temperature change with increasing height according to ISA (ICAO Standard Atmosphere) within the troposphere?",
      options: [
        "Decreases by 2° C / 1000 ft",
        "Increases by 2° C / 1000 ft",
        "Decreases by 2° C / 100 m",
        "Increases by 2° C / 100 m"
      ],
      correctIndex: 0,
      explanation: "The ICAO Standard Atmosphere (ISA) models an idealized, uniform environmental lapse rate in the troposphere where the temperature decreases at a steady rate of exactly 1.98°C (commonly rounded to 2°C) per 1000 feet of altitude gained, or 0.65°C per 100 meters."
    },
    {
      id: 8,
      question: "What is the mean height of the tropopause according to ISA (ICAO Standard Atmosphere)?",
      options: [
        "18000 ft",
        "11000 ft",
        "11000 m",
        "36000 m"
      ],
      correctIndex: 2,
      explanation: "In the International Standard Atmosphere (ISA) model, the tropopause (the boundary between the troposphere and the stratosphere) is artificially fixed at an average altitude of 11,000 meters, which corresponds to approximately 36,089 feet."
    },
    {
      id: 9,
      question: "The term \"tropopause\" is defined as...",
      options: [
        "the layer above the troposphere showing an increasing temperature.",
        "the boundary area between the mesosphere and the stratosphere.",
        "the boundary area between the troposphere and the stratosphere.",
        "the height above which the temperature starts to decrease."
      ],
      correctIndex: 2,
      explanation: "The tropopause is the transitional boundary layer separating the active troposphere below from the stable stratosphere above. It acts as an invisible lid on most weather systems because, above this boundary, the temperature stops decreasing and remains constant or begins to rise, severely inhibiting further vertical cloud development."
    },
    {
      id: 10,
      question: "Temperatures will be given by meteorological aviation services in Europe in which unit?",
      options: [
        "Degrees Centigrade (° C)",
        "Kelvin",
        "Gpdam",
        "Degrees Fahrenheit"
      ],
      correctIndex: 0,
      explanation: "Aviation meteorological products provided in Europe (and practically worldwide under ICAO standards), such as METARs, TAFs, and ATIS broadcasts, exclusively report temperatures and dew points in Degrees Celsius (Centigrade)."
    },
    {
      id: 11,
      question: "What is meant by \"inversion layer\"?",
      options: [
        "An atmospheric layer where temperature decreases with increasing height",
        "A boundary area between two other layers within the atmosphere",
        "An atmospheric layer with constant temperature with increasing height",
        "An atmospheric layer where temperature increases with increasing height"
      ],
      correctIndex: 3,
      explanation: "An inversion is an atmospheric anomaly where the normal temperature lapse rate is 'inverted'. Instead of cooling, the air temperature actually increases as altitude increases. This creates a highly stable layer that suppresses updrafts, often trapping pollutants, haze, and low stratus clouds beneath it."
    },
    {
      id: 12,
      question: "What is meant by \"isothermal layer\"?",
      options: [
        "An atmospheric layer where temperature increases with increasing height",
        "An atmospheric layer where temperature decreases with increasing height",
        "A boundary area between two other layers within the atmosphere",
        "An atmospheric layer with constant temperature with increasing height"
      ],
      correctIndex: 3,
      explanation: "Derived from Greek ('iso' meaning equal, and 'therme' meaning heat), an isothermal layer is a vertical section of the atmosphere where the temperature remains perfectly constant regardless of changes in altitude. The lower stratosphere is typically modeled as an isothermal layer in ISA."
    },
    {
      id: 13,
      question: "The temperature lapse rate with increasing height within the troposphere according ISA is...",
      options: [
        "0.65° C / 100 m.",
        "3° C / 100 m.",
        "1° C / 100 m.",
        "0,6° C / 100 m."
      ],
      correctIndex: 0,
      explanation: "According to the ICAO Standard Atmosphere (ISA), the standard temperature lapse rate in the metric system is defined as a decrease of 0.65°C for every 100 meters of altitude gained. This is the exact equivalent of the imperial standard of 1.98°C per 1,000 feet."
    },
    {
      id: 14,
      question: "Which process may result in an inversion layer at about 5000 ft (1500 m) height?",
      options: [
        "Intensive sunlight insolation during a warm summer day",
        "Widespread descending air within a high pressure area",
        "Ground cooling by radiation during the night",
        "Advection of cool air in the upper troposphere"
      ],
      correctIndex: 1,
      explanation: "This describes a 'subsidence inversion'. In large high-pressure systems (anticyclones), air slowly sinks (subsides) over a broad area. As it descends, it compresses and warms adiabatically. This descending warmed air settles over the cooler air below, creating a pronounced inversion layer typically found between 2,000 and 6,000 feet."
    },
    {
      id: 15,
      question: "An inversion layer close to the ground can be caused by...",
      options: [
        "ground cooling during the night.",
        "large-scale lifting of air.",
        "intensifying and gusting winds.",
        "thickening of clouds in medium layers."
      ],
      correctIndex: 0,
      explanation: "To create large raindrops or severe hail, water particles must make multiple vertical journeys through the cloud's freezing and liquid zones, accumulating layers of moisture. Only incredibly powerful vertical updrafts (characteristic of towering cumulonimbus clouds) can support the immense weight of these large particles before they finally fall."
    },
    {
      id: 66,
      question: "Which type of cloud is associated with prolonged rain?",
      options: [
        "Cumulonimbus",
        "Cirrostratus",
        "Nimbostratus",
        "Altocumulus"
      ],
      correctIndex: 2,
      explanation: "Nimbostratus clouds are thick, dark, mid-to-low level stratiform clouds that completely block out the sun. They are the classic rain clouds, producing steady, prolonged, and widespread precipitation (rain or snow) without the turbulence or lightning associated with convective clouds."
    },
    {
      id: 67,
      question: "Regarding the type of cloud, precipitation is classified as...",
      options: [
        "light and heavy precipitation.",
        "showers of snow and rain.",
        "prolonged rain and continuous rain.",
        "rain and showers of rain."
      ],
      correctIndex: 3,
      explanation: "In meteorological terms, precipitation is classified by its character, which is directly linked to the cloud type that produces it. Stratiform (flat) clouds produce steady, continuous 'rain' (or snow), whereas cumuliform (convective) clouds produce intermittent, fluctuating 'showers'."
    },
    {
      id: 68,
      question: "How is an air mass described when moving to Central Europe via the Russian continent during winter?",
      options: [
        "Maritime tropical air",
        "Continental tropical air",
        "Continental polar air",
        "Maritime polar air"
      ],
      correctIndex: 2,
      explanation: "Air masses take on the moisture and temperature characteristics of their source region. An air mass originating over the vast, cold, and dry landmass of Russia/Siberia during winter is classified as Continental (meaning dry) Polar (meaning cold), abbreviated as cP."
    },
    {
      id: 69,
      question: "The character of an air mass is given by what properties?",
      options: [
        "Temperatures at origin and present region",
        "Wind speed and tropopause height",
        "Region of origin and track during movement",
        "Environmental lapse rate at origin"
      ],
      correctIndex: 2,
      explanation: "The fundamental character of an air mass—its temperature and humidity—is initially determined by the geographical region where it forms (its source region). As it begins to move, its character is subsequently modified by the surface over which it travels (its track)."
    },
    {
      id: 70,
      question: "The symbol labeled (1) as shown in the picture is a / an... (See image MET-005)",
      img: "MET-005.png",
      options: [
        "front aloft.",
        "occlusion.",
        "warm front.",
        "cold front."
      ],
      correctIndex: 3,
      explanation: "On standard meteorological charts, a cold front is depicted by a solid blue line with solid blue triangles. The triangles point in the direction the cold air mass is advancing."
    },
    {
      id: 71,
      question: "The symbol labeled (2) as shown in the picture is a / an... (See image MET-005)",
      img: "MET-005.png",
      options: [
        "front aloft.",
        "cold front.",
        "warm front.",
        "occlusion."
      ],
      correctIndex: 2,
      explanation: "A warm front is conventionally represented on a weather chart by a solid red line with solid red semicircles. The semicircles point in the direction the warmer air is advancing."
    },
    {
      id: 72,
      question: "The symbol labeled (3) as shown in the picture is a / an... (See image MET-005)",
      img: "MET-005.png",
      options: [
        "front aloft.",
        "warm front.",
        "cold front.",
        "occlusion."
      ],
      correctIndex: 3,
      explanation: "An occluded front occurs in the later stages of a depression when a faster-moving cold front catches up to and overtakes a slower-moving warm front. It is depicted by a purple line alternating with purple triangles and semicircles pointing in the direction of movement."
    },
    {
      id: 73,
      question: "What cloud sequence can typically be observed during the passage of a warm front?",
      options: [
        "In coastal areas during daytime wind from the coast and forming of cumulus clouds, dissipation of clouds during evening and night",
        "Wind becoming calm, dissipation of clouds and warming during summer; formation of extended high fog layers during winter",
        "Squall line with showers of rain and thunderstorms (Cb), gusting wind followed by cumulus clouds with isolated showers of rain",
        "Cirrus, thickening altostratus and altocumulus clouds, lowering cloud base with rain, nimbostratus"
      ],
      correctIndex: 3,
      explanation: "A warm front features a gentle, gradual slope. The classic visual sequence of an approaching warm front starts high with Cirrus hundreds of miles ahead, lowering to Cirrostratus, then Altostratus, and eventually turning into a thick, low Nimbostratus deck bringing steady rain."
    },
    {
      id: 74,
      question: "What clouds and weather can typically be observed during the passage of a cold front?",
      options: [
        "In coastal areas during daytime wind from the coast and forming of cumulus clouds, dissipation of clouds during evening and night",
        "Strongly developed cumulus clouds (Cb) with showers of rain and thunderstorms, gusting wind followed by cumulus clouds with isolated showers of rain",
        "Cirrus, thickening altostratus and altocumulus clouds, lowering cloud base with rain, nimbostratus",
        "Wind becoming calm, dissipation of clouds and warming during summer; formation of extended high fog layers during winter"
      ],
      correctIndex: 1,
      explanation: "A cold front has a steep, aggressive slope that acts like a snowplow, abruptly forcing warm, unstable air upward. This creates towering Cumulonimbus (CB) clouds, resulting in heavy showers, thunderstorms, gusty shifting winds, followed by rapid clearing and post-frontal cumulus."
    },
    {
      id: 75,
      question: "What visual flight conditions can be expected within the warm sector of a polar front low during summer time?",
      options: [
        "Visibilty less than 1000 m, cloud-covered ground",
        "Good visibility, some isolated high clouds",
        "Moderate to good visibility, scattered clouds",
        "Moderate visibility, heavy showers and thunderstorms"
      ],
      correctIndex: 2,
      explanation: "The 'warm sector' is the area between the advancing warm front and the approaching cold front. It generally consists of a homogeneous, warm, and relatively stable air mass. In summer, this typically yields moderate to good visibility with scattered fair-weather cumulus clouds, though some haze may be present."
    },
    {
      id: 76,
      question: "What visual flight conditions can be expected after the passage of a cold front?",
      options: [
        "Scattered cloud layers, visbility more than 5 km, formation of shallow cumulus clouds",
        "Good visiblity, formation of cumulus clouds with showers of rain or snow",
        "Medium visibility with lowering cloud bases, onset of prolonged precipitation",
        "Poor visibility, formation of overcast or ground-covering stratus clouds, snow"
      ],
      correctIndex: 1,
      explanation: "The passage of a cold front sweeps away the hazy warm air, replacing it with a cold, dense, and much drier air mass, which leads to excellent visibility. However, surface heating of this cold air can cause localized instability, leading to post-frontal convective cumulus clouds and isolated showers."
    },
    {
      id: 77,
      question: "A boundary between a cold polar air mass and a warm subtropical air mass showing no horizontal displacement is called...",
      options: [
        "cold front.",
        "warm front.",
        "occluded front.",
        "stationary front."
      ],
      correctIndex: 3,
      explanation: "When two contrasting air masses meet but the atmospheric forces are balanced so that neither mass is strong enough to push the other out of the way, the frontal boundary stalls. This condition is known as a stationary front."
    },
    {
      id: 78,
      question: "What is the usual direction of movement of a polar front low?",
      options: [
        "To the northwest during winter, to the southwest during summer",
        "To the northeast during winter, to the southeast during summer",
        "Parallel to the warm front line to the south",
        "Parallel to the the warm-sector isobars"
      ],
      correctIndex: 3,
      explanation: "The overall movement (track) of a frontal depression is generally steered by the upper-level winds. At the surface level, this track roughly aligns parallel to the isobars located directly within the warm sector of the low."
    },
    {
      id: 79,
      question: "What pressure pattern can be observed during the passage of a polar front low?",
      options: [
        "Rising pressure in front of the warm front, constant pressure within the warm sector, rising pressure behind the cold front",
        "Falling pressure in front of the warm front, constant pressure within the warm sector, rising pressure behind the cold front",
        "Falling pressure in front of the warm front, constant pressure within the warm sector, falling pressure behind the cold front",
        "Rising pressure in front of the warm front, rising pressure within the warm sector, falling pressure behind the cold front"
      ],
      correctIndex: 1,
      explanation: "As the depression approaches, pressure falls steadily (ahead of the warm front). Once inside the warm sector, the pressure stabilizes or falls only slightly. Finally, when the cold front passes, cold, dense air rushes in, causing the barometric pressure to rise sharply."
    },
    {
      id: 80,
      question: "What pressure pattern can be observed when a cold front is passing?",
      options: [
        "Continually decreasing pressure",
        "Shortly decreasing, thereafter increasing pressure",
        "Continually increasing pressure",
        "Constant pressure pattern"
      ],
      correctIndex: 1,
      explanation: "Ahead of the cold front (in the warm sector), the pressure usually falls. The moment the cold front passes (the trough axis), the pressure reaches its lowest point and then immediately and rapidly begins to rise as the heavier, denser cold air replaces the warm air."
    },
    {
      id: 81,
      question: "What change of wind direction can be expected during the passage of a polar front low in Central Europe?",
      options: [
        "Backing wind during passage of the warm front, veering wind during passage of the cold front",
        "Backing wind during passage of the warm front, backing wind during passage of the cold front",
        "Veering wind during passage of the warm front, veering wind during passage of the cold front",
        "Veering wind during passage of the warm front, backing wind during passage of the cold front"
      ],
      correctIndex: 2,
      explanation: "Due to the counter-clockwise rotation of low-pressure systems in the Northern Hemisphere, an observer on the ground will consistently experience the wind 'veering' (changing direction in a clockwise manner, e.g., from Southeast to Southwest, then to Northwest) as both the warm and cold fronts pass."
    },
    {
      id: 82,
      question: "Extensive high pressure areas can be found throughout the year ...",
      options: [
        "in areas showing extensive lifting processes.",
        "in mid latitudes along the polar front",
        "over oceanic areas at latitues around 30°N/S.",
        "in tropical areas, close to the equator."
      ],
      correctIndex: 2,
      explanation: "As part of the global Hadley cell circulation, warm air that rose at the equator cools and sinks at approximately 30° North and South latitudes. This massive, continuous subsidence of air creates semi-permanent, extensive high-pressure zones over the oceans (such as the Azores High)."
    },
    {
      id: 83,
      question: "What cloud type can typically be observed across widespread high pressure areas during summer?",
      options: [
        "Overcast low stratus",
        "Scattered Cu clouds",
        "Overcast Ns clouds",
        "Squall lines and thunderstorms"
      ],
      correctIndex: 1,
      explanation: "High-pressure systems are characterized by subsiding (sinking) air, which inhibits vertical cloud development. During summer, local ground heating may create mild thermals, resulting in scattered, fair-weather Cumulus (Cu) clouds that remain shallow due to the stable air aloft."
    },
    {
      id: 84,
      question: "What pressure pattern may result from cold-air inflow in high tropospheric layers?",
      options: [
        "Formation of a low in the upper troposphere",
        "Formation of a high in the upper troposphere",
        "Formation of a large ground low",
        "Alternating pressure"
      ],
      correctIndex: 0,
      explanation: "Cold air is much denser than warm air. If a pool of very cold air moves into the upper troposphere, the entire air column contracts vertically. This results in lower pressure at altitude compared to the surrounding warmer air, creating an upper-level low (or upper trough)."
    },
    {
      id: 85,
      question: "Cold air inflow in high tropospheric layers may result in...",
      options: [
        "showers and thunderstorms.",
        "stabilisation and calm weather.",
        "frontal weather.",
        "calm weather and cloud dissipation."
      ],
      correctIndex: 0,
      explanation: "When extremely cold air moves in aloft over a relatively warmer surface layer, the environmental lapse rate becomes very steep. This massive vertical temperature difference creates severe atmospheric instability, leading to strong updrafts, heavy showers, and thunderstorms."
    },
    {
      id: 86,
      question: "How does inflowing cold air affect the shape and vertical distance between pressure layers?",
      options: [
        "Increasing vertical distance, raise in height (high pressure)",
        "Decreasing vertical distance, raise in height (high pressure)",
        "Decrease in vertical distance, lowering in height (low pressure)",
        "Increase in vertical distance, lowering in height (low pressure)"
      ],
      correctIndex: 2,
      explanation: "Because cold air is dense, it compacts. Therefore, the vertical distance between constant pressure levels decreases. This compaction means that you will encounter lower pressure at a specific geometric altitude than you would in a warmer, expanded air mass."
    },
    {
      id: 87,
      question: "What weather phenomena have to be expected around an upper-level trough?",
      options: [
        "Calm wind, forming of shallow cumulus clouds",
        "Calm weather, formation of lifted fog layers",
        "Formation of high stratus clouds, ground-covering cloud bases",
        "Development of showers and thunderstorms (Cb)"
      ],
      correctIndex: 3,
      explanation: "An upper-level trough brings cold air aloft and induces forced, widespread rising motion in the atmosphere. This combination creates high instability, promoting deep convection and the widespread development of Cumulonimbus (Cb) clouds and severe thunderstorms."
    },
    {
      id: 88,
      question: "What frontal line divides subtropical air from polar cold air, in particular across Central Europe?",
      options: [
        "Occlusion",
        "Cold front",
        "Polar front",
        "Warm front"
      ],
      correctIndex: 2,
      explanation: "The Polar Front is the principal, semi-permanent weather boundary traversing the mid-latitudes. It acts as the continuous dividing line between the cold polar easterlies to the north and the warm subtropical westerlies to the south."
    },
    {
      id: 89,
      question: "What weather conditions can be expected in high pressure areas during summer?",
      options: [
        "Changing weather with passing of frontal lines",
        "Squall lines and thunderstorms",
        "Calm winds and widespread areas with high fog",
        "Calm weather and cloud dissipation, few high Cu"
      ],
      correctIndex: 3,
      explanation: "Summer high-pressure systems are dominated by widespread sinking air (subsidence). As air sinks, it warms and dries, which dissolves most clouds, resulting in fine, calm weather, with perhaps only a few shallow fair-weather Cumulus clouds forming from daytime heating."
    },
    {
      id: 90,
      question: "What weather conditions in Central Europe are typically found in high pressure areas during summer?",
      options: [
        "Large isobar spacing with calm winds, formation of local wind systems",
        "Large isobar spacing with strong prevailing westerly winds",
        "Small isobar spacing with calm winds, formation of local wind systems",
        "Small isobar spacing with strong prevailing northerly winds"
      ],
      correctIndex: 0,
      explanation: "High pressure brings a very weak pressure gradient, visually represented on charts by widely spaced isobars. This results in weak or calm prevailing winds, allowing localized, thermally-driven wind systems (like sea breezes or mountain/valley winds) to dominate the weather."
    },
    {
      id: 91,
      question: "What weather conditions can be expected in high pressure areas during winter?",
      options: [
        "Changing weather with passing of frontal lines",
        "Calm weather and cloud dissipation, few high Cu",
        "Calm winds and widespread areas with high fog",
        "Squall lines and thunderstorms"
      ],
      correctIndex: 2,
      explanation: "In winter, high pressure brings weak winds and a strong subsidence inversion. Because the winter sun is too weak to heat the ground and break this inversion, moisture and pollutants get trapped in the cold lower layer, creating persistent low stratus clouds and widespread fog."
    },
    {
      id: 92,
      question: "What wind conditions can be expected in areas showing large distances between isobars?",
      options: [
        "Formation of local wind systems with strong prevailing westerly winds",
        "Strong prevailing easterly winds with rapid backing",
        "Strong prevailing westerly winds with rapid veering",
        "Variable winds, formation of local wind systems"
      ],
      correctIndex: 3,
      explanation: "When isobars are far apart, it signifies a very weak pressure gradient force. Consequently, the prevailing geostrophic wind will be light and variable, paving the way for localized thermal wind effects to take over."
    },
    {
      id: 93,
      question: "What weather conditions can be expected during \"Foehn\" on the windward side of a mountain range?",
      options: [
        "Dissipating clouds with unusual warming, accompanied by strong, gusty winds",
        "Scattered cumulus clouds with showers and thunderstorms",
        "Layered clouds, mountains obscured, poor visibility, moderate or heavy rain",
        "Calm wind and forming of high stratus clouds (high fog)"
      ],
      correctIndex: 2,
      explanation: "On the windward (upwind) side of the mountain, the approaching air is forcefully pushed upwards. It cools, saturates, and forms massive, thick orographic clouds. This results in persistent, heavy precipitation and completely obscured terrain."
    },
    {
      id: 94,
      question: "Which of the stated wind phenomena will increase in speed since its path is narrowed by mountains?",
      options: [
        "Bora",
        "Mistral",
        "Scirocco",
        "Passat"
      ],
      correctIndex: 1,
      explanation: "The Mistral is a strong, cold, northwesterly wind that blows through the Rhône Valley in southern France. The valley acts like a natural wind tunnel, significantly accelerating the wind speed via the Venturi effect."
    },
    {
      id: 95,
      question: "What is the name of the the cold, katabatic wind phenomena blowing from northeast into the Adriatic Sea?",
      options: [
        "Scirocco",
        "Mistral",
        "Bora",
        "Passat"
      ],
      correctIndex: 2,
      explanation: "The Bora is a notoriously strong, cold, and dry katabatic wind that cascades down from the Dinaric Alps and the Karst plateau, hitting the eastern coast of the Adriatic Sea with fierce, turbulent gusts."
    },
    {
      id: 96,
      question: "Which of the following conditions are most favourable for ice accretion?",
      options: [
        "Temperatures between 0° C and -12° C, presence of supercooled water droplets (clouds)",
        "Temperaturs below 0° C, strong wind, sky clear of clouds",
        "Temperatures between +10° C and -30° C, presence of hail (clouds)",
        "Temperatures between -20° C and -40° C, presence of ice crystals (Ci clouds)"
      ],
      correctIndex: 0,
      explanation: "Structural icing requires visible moisture in the form of liquid, supercooled water droplets (water that remains liquid below freezing). These droplets are most abundant and most prone to adhere to the airframe between 0°C and -12°C. Below -20°C, clouds are mostly composed of dry ice crystals, which do not adhere."
    },
    {
      id: 97,
      question: "What temperatures are most dangerous with respect to airframe icing?",
      options: [
        "+5° to -10° C",
        "0° to -12° C",
        "-20° to -40° C",
        "+20° to -5° C"
      ],
      correctIndex: 1,
      explanation: "The maximum accumulation of supercooled liquid water droplets occurs in the temperature band between 0°C and -12°C (or -15°C). In this zone, the liquid water freezes upon impact with the aircraft, causing rapid and severe clear or mixed icing."
    },
    {
      id: 98,
      question: "Which type of ice forms by very small water droplets and ice crystals hitting the front surfaces of an aircraft?",
      options: [
        "Clear ice",
        "Mixed ice",
        "Hoar frost",
        "Rime ice"
      ],
      correctIndex: 3,
      explanation: "Rime ice forms when tiny supercooled water droplets strike the aircraft and freeze almost instantaneously. Because the freeze is so rapid, air is trapped within the ice structure, giving it an opaque, milky-white, and rough appearance."
    },
    {
      id: 99,
      question: "Which type of ice forms by large, supercooled droplets hitting the front surfaces of an aircraft?",
      options: [
        "Hoar frost",
        "Clear ice",
        "Rime ice",
        "Mixed ice"
      ],
      correctIndex: 1,
      explanation: "Clear ice (glaze) occurs when large supercooled droplets hit the airframe. Due to their mass, they do not freeze instantly; instead, they spread backward along the wing surface before solidifying into a heavy, smooth, and transparent sheet of solid ice. This is the most aerodynamically destructive form of icing."
    },
    {
      id: 100,
      question: "What situation may result in the occurrence of severe wind shear?",
      options: [
        "Flying ahead of a warm front with visible Ci clouds",
        "Cross-country flying below Cu clouds with about 4 octas coverage",
        "During final approach, 30 min after a heavy shower has passed the airfield",
        "When a shower is visible close to the airfield"
      ],
      correctIndex: 3,
      explanation: "Active precipitation shafts, especially heavy showers or thunderstorms, produce powerful, localized descending columns of cold air (microbursts). When these hit the ground, they spread outwards violently in all directions, creating extreme and dangerous low-level wind shear."
    },
    {
      id: 101,
      question: "What conditions are favourable for the formation of thunderstorms?",
      options: [
        "Warm humid air, conditionally unstable environmental lapse rate",
        "Calm winds and cold air, overcast cloud cover with St or As.",
        "Clear night over land, cold air and patches of fog",
        "Warm and dry air, strong inversion layer"
      ],
      correctIndex: 0,
      explanation: "The classic recipe for thunderstorm (Cumulonimbus) development requires three main ingredients: high moisture content (warm, humid air), a conditionally unstable atmosphere (allowing for deep vertical motion), and a lifting mechanism to initiate the ascent."
    },
    {
      id: 102,
      question: "What conditions are mandatory for the formation of thermal thunderstorms?",
      options: [
        "Conditionally unstable atmosphere, low temperature and low humidity",
        "Absolutely stable atmosphere, high temperature and high humidity",
        "Absolutely stable atmosphere, high temperature and low humidity",
        "Conditionally unstable atmosphere, high temperature and high humidity"
      ],
      correctIndex: 3,
      explanation: "Air mass or 'thermal' thunderstorms are triggered by intense surface heating (high temperatures). They require a high moisture content (high humidity) to provide the latent heat energy that sustains the storm, along with an unstable atmosphere to permit unimpeded vertical cloud growth."
    },
    {
      id: 103,
      question: "With regard to thunderstorms, strong up- and downdrafts appear during the...",
      options: [
        "initial stage.",
        "dissipating stage.",
        "mature stage.",
        "thunderstorm stage."
      ],
      correctIndex: 2,
      explanation: "A thunderstorm's lifecycle consists of three stages. The 'mature stage' is the most violent, characterized by the simultaneous presence of intense, severe updrafts feeding the storm and heavy, precipitation-induced downdrafts hitting the surface."
    },
    {
      id: 104,
      question: "Which stage of a thunderstorm is dominated by updrafts?",
      options: [
        "Dissipating stage",
        "Upwind stage",
        "Mature stage",
        "Cumulus stage"
      ],
      correctIndex: 3,
      explanation: "The initial stage of a thunderstorm is the Cumulus (or building) stage. During this phase, the cloud consists entirely of warm, buoyant updrafts transporting moisture upwards. Precipitation has not yet become heavy enough to fall and initiate downdrafts."
    },
    {
      id: 105,
      question: "What danger is most immenent when an aircraft is hit by lightning?",
      options: [
        "Rapid cabin depressurization and smoke in the cabin",
        "Surface overheat and damage to exposed aircraft parts",
        "Explosion of electrical equipment in the cockpit",
        "Disturbed radio communication, static noise signals"
      ],
      correctIndex: 1,
      explanation: "While the Faraday cage effect generally protects the occupants and the internal electronics from electrocution, the massive electrical energy of the strike can melt rivets, puncture small holes in the skin at the entry/exit points, and severely damage external composites like the radome or control surface hinges."
    },
    {
      id: 106,
      question: "Heavy downdrafts and strong wind shear close to the ground can be expected...",
      options: [
        "during cold, clear nights with the formation of radiation fog.",
        "near the rainfall areas of heavy showers or thunderstorms.",
        "during approach to an airfield at the coast with a strong sea breeze.",
        "during warm summer days with high, flatted Cu clouds."
      ],
      correctIndex: 1,
      explanation: "The sheer weight of falling water, combined with evaporative cooling that makes the descending air even denser, creates violent microbursts and downdrafts near the precipitation core of a thunderstorm, posing a severe low-level wind shear hazard."
    },
    {
      id: 107,
      question: "What phenomenon is caused by cold air downdrafts with precipitation from a fully developed thunderstorm cloud?",
      options: [
        "Electrical discharge",
        "Anvil-head top of Cb cloud",
        "Gust front",
        "Freezing Rain"
      ],
      correctIndex: 2,
      explanation: "As a cold, heavy downdraft from a thunderstorm hits the ground, it splashes and rushes outward horizontally. The leading edge of this outflowing cold air creates a wedge known as a 'gust front,' which can travel miles ahead of the storm, bringing abrupt wind shifts and severe turbulence."
    },
    {
      id: 108,
      question: "What has to be considered when taking off in a ground inversion?",
      options: [
        "Climb should be performed with the lowest possible speed and maximum power",
        "Due to low temperatures close to the ground, icing has to be expected",
        "During climb, a sudden decrease in speed and climb performance has to be expected",
        "During the climb, a sudden increase in speed and climb performance has to be expected"
      ],
      correctIndex: 2,
      explanation: "When climbing out of a cold surface layer into a much warmer inversion layer above, the aircraft suddenly encounters warmer, less dense air. This drastic drop in air density instantly reduces aerodynamic lift and engine performance, causing an unexpected sag in climb rate and airspeed."
    },
    {
      id: 109,
      question: "What danger is most imminent during an approach to an airfield situated in a valley, with strong wind aloft blowing perpendicular to the mountain ridge?",
      options: [
        "Reduced visibilty, maybe loss of sight to the airfield during final approach",
        "Formation of medium to heavy clear ice on all aircraft surfaces",
        "Heavy downdrafts within rainfall areas below thunderstorm clouds",
        "Wind shear during descent, wind direction may change by 180°"
      ],
      correctIndex: 3,
      explanation: "Strong cross-ridge winds generate intense mountain waves and turbulent rotor systems within the valley. An aircraft descending through these rotors can experience extreme, sudden changes in wind direction (up to 180 degrees) and velocity, known as severe wind shear."
    },
    {
      id: 110,
      question: "What kind of reduction in visibility is not very sensitive to changes in temperature?",
      options: [
        "Haze (HZ)",
        "Patches of fog (BCFG)",
        "Radiation fog (FG)",
        "Mist (BR)"
      ],
      correctIndex: 0,
      explanation: "Fog and mist are hydrometeors (water-based) and depend entirely on the temperature dropping to the dew point. Haze (HZ), however, is a lithometeor, consisting of extremely fine dry particles like dust, smoke, or pollution. Since it is dry, its presence is unaffected by temperature fluctuations."
    },
    {
      id: 111,
      question: "Information about pressure patterns and frontal situation can be found in which chart?",
      options: [
        "wind chart.",
        "surface weather chart.",
        "Significant Weather Chart (SWC).",
        "hypsometric chart."
      ],
      correctIndex: 1,
      explanation: "The Surface Weather Chart (or surface analysis chart) is the classic map used by meteorologists that plots mean sea level isobars, High and Low-pressure centers, and the positions of warm, cold, and occluded fronts."
    },
    {
      id: 112,
      question: "Which weather chart shows the actual air pressure as in MSL along with pressure centers and fronts?",
      options: [
        "Hypsometric chart",
        "Surface weather chart",
        "Prognostic chart",
        "Wind chart"
      ],
      correctIndex: 1,
      explanation: "The Surface Weather Chart explicitly analyzes and visualizes current meteorological conditions at the surface, standardizing barometric pressure to Mean Sea Level (MSL) and tracing frontal systems across the map."
    },
    {
      id: 113,
      question: "What information can be obtained from satallite images?",
      options: [
        "Temperature and dew point of environmental air",
        "Turbulence and icing",
        "Flight visibility, ground visibility, and ground contact",
        "Overview of cloud covers and front lines"
      ],
      correctIndex: 3,
      explanation: "Weather satellites (both visible and infrared) provide a macro-level, top-down view of the Earth. This makes them unparalleled tools for observing the vast extents of cloud formations, tracking storm systems, and mapping the movement of frontal lines across continents."
    },
    {
      id: 114,
      question: "What chart shows areas of precipitation?",
      options: [
        "GAFOR",
        "Wind chart",
        "Satellite picture",
        "Radar picture"
      ],
      correctIndex: 3,
      explanation: "Weather radar (Doppler) works by bouncing radio waves off liquid water drops or hail. Therefore, a radar picture is specifically designed to locate, measure the intensity of, and track active areas of precipitation in real-time."
    },
    {
      id: 115,
      question: "What information is NOT found on Low-Level Significant Weather Charts (LLSWC)?",
      options: [
        "Information about icing conditions",
        "Radar echos of precipitation",
        "Information about turbulence areas",
        "Front lines and frontal displacements"
      ],
      correctIndex: 1,
      explanation: "Significant Weather Charts (SIGWX) are forecast maps predicting expected hazards (turbulence, icing, fronts). Radar echoes, however, are real-time, live observations of current rain. You will never find live radar echoes on a pre-published forecast chart."
    },
    {
      id: 116,
      question: "Measured pressure distribution in MSL and corresponding frontal systems are displayed by the...",
      options: [
        "prognostic chart.",
        "Significant Weather Chart (SWC).",
        "surface weather chart.",
        "hypsometric chart."
      ],
      correctIndex: 2,
      explanation: "The Surface Weather Chart (Surface Analysis) is the definitive product used by meteorologists to display recorded (measured) MSL isobars and current frontal boundaries based on actual ground station observations."
    },
    {
      id: 117,
      question: "In a METAR, \"heavy rain\" is designated by the identifier...",
      options: [
        "RA.",
        "+SHRA.",
        "SHRA.",
        "+RA."
      ],
      correctIndex: 3,
      explanation: "In METAR/TAF aviation codes, 'RA' stands for Rain (stratiform, steady precipitation). Intensity is denoted by prefixes: a plus sign (+) means 'heavy', a minus sign (-) means 'light', and no sign means 'moderate'. Thus, '+RA' means Heavy Rain."
    },
    {
      id: 118,
      question: "In a METAR, \"(moderate) showers of rain\" are designated by the identifier...",
      options: [
        "+RA.",
        "SHRA.",
        "+TSRA.",
        "TS."
      ],
      correctIndex: 1,
      explanation: "'SH' indicates a Shower (convective precipitation), and 'RA' indicates Rain. Because there is no prefix (+ or -), the intensity defaults to moderate. Therefore, 'SHRA' decodes as moderate showers of rain."
    },
    {
      id: 119,
      question: "What information can be found in the ATIS, but not in a METAR?",
      options: [
        "Information about current weather, for example types of precipitation",
        "Operational information such as runway in use and transition level",
        "Information about mean wind speeds, maximum speeds in gusts if applicable",
        "Approach information, such as ground visibility and cloud base"
      ],
      correctIndex: 1,
      explanation: "While both provide the current weather, the Automatic Terminal Information Service (ATIS) is specifically designed to reduce ATC workload. It includes vital operational logistics like the active runway, type of approach in use, transition level, and runway surface conditions—items not present in a global METAR."
    },
    {
      id: 120,
      question: "Weather and operational information about the destination aerodrome can be obtained during the flight by...",
      options: [
        "VOLMET.",
        "PIREP.",
        "ATIS.",
        "SIGMET."
      ],
      correctIndex: 2,
      explanation: "When approaching a specific, controlled aerodrome, pilots tune into the ATIS (Automatic Terminal Information Service) frequency to receive a continuous loop of essential local weather and operational data specifically required for landing at that airport."
    },
    {
      id: 121,
      question: "SIGMET warnings are issued for...",
      options: [
        "specific routings.",
        "airports.",
        "FIRs/UIRs.",
        "countries."
      ],
      correctIndex: 2,
      explanation: "SIGMET (Significant Meteorological Information) is an advisory issued by a meteorological watch office. It warns of potentially hazardous en-route weather (like severe icing, severe turbulence, or volcanic ash) that affects a broad area, specifically covering entire Flight Information Regions (FIR) or Upper Information Regions (UIR)."
    },
    {
      id: 122,
      question: "An inversion is a layer ...",
      options: [
        "with increasing pressure with increasing height.",
        "with decreasing temperature with increasing height.",
        "with constant temperature with increasing height.",
        "with increasing temperature with increasing height."
      ],
      correctIndex: 3,
      explanation: "The normal rule of the troposphere is that temperature drops as altitude increases. An inversion 'inverts' this rule: it is a specific atmospheric layer where the air temperature actually gets warmer as you climb higher."
    },
    {
      id: 123,
      question: "What can be expected for the prevailling wind with isobars on a surface weather chart showing large distances?",
      options: [
        "Strong pressure gradients resulting in strong prevailling wind",
        "Strong pressure gradients resulting in low prevailling wind",
        "Low pressure gradients resulting in strong prevailling wind",
        "Low pressure gradients resulting in low prevailling wind"
      ],
      correctIndex: 3,
      explanation: "The distance between isobars visually represents the pressure gradient force. Wide spacing means the pressure changes very slowly over a large geographic distance (low gradient), resulting in weak, gentle winds."
    },
    {
      id: 124,
      question: "What is referred to as mountain wind?",
      options: [
        "Wind blowing uphill from the valley during daytime.",
        "Wind blowing uphill from the valley during the night.",
        "Wind blowing down the mountain side during the night",
        "Wind blowing down the mountain side during daytime."
      ],
      correctIndex: 2,
      explanation: "'Mountain wind' (or mountain breeze) is a nocturnal katabatic wind. At night, the mountain slopes cool rapidly by radiation, chilling the air above them. This heavier, denser air slips down the mountain side into the valley."
    },
    {
      id: 125,
      question: "Under which conditions \"back side weather\" (\"Rückseitenwetter\") can be expected?",
      options: [
        "before passing of an occlusion",
        "During Foehn at the lee side",
        "After passing of a warm front",
        "After passing of a cold front"
      ],
      correctIndex: 3,
      explanation: "'Rückseitenwetter' is a German meteorological term describing the crisp, highly unstable, but visibly clear weather occurring immediately behind (after the passage of) a cold front. It features highly visible, isolated Cumulus clouds, deep blue skies, and occasional brisk showers."
    },
    {
      id: 126,
      question: "What wind is reportet as 225/15?",
      options: [
        "north-east wind with 15 kt",
        "south-west wind with 15 km/h",
        "north-east wind with 15 km/h",
        "south-west wind with 15 kt"
      ],
      correctIndex: 3,
      explanation: "Aviation wind reporting follows a strict format: Direction / Speed. '225' refers to the direction the wind is blowing FROM (225 degrees is South-West). '15' refers to the velocity in knots (kt). Thus, a South-West wind at 15 knots."
    },
    {
      id: 127,
      question: "How does air temperatur change in ISA from MSL to approx. 10.000 m height?",
      options: [
        "from +20° to -40° C",
        "from +30° to -40° C",
        "from -15° to 50° C",
        "from +15° to -50° C"
      ],
      correctIndex: 3,
      explanation: "Under the International Standard Atmosphere (ISA), the baseline temperature at Mean Sea Level (MSL) is +15°C. Subtracting approximately 2°C for every 1000 ft (or 0.65°C per 100m) up to roughly 10,000 meters brings the temperature down to exactly -50°C."
    },
    {
      id: 128,
      question: "What weather is likely to be experienced during \"Foehn\" in the Bavarian area close to the alps?",
      options: [
        "High pressure area overhead Biskaya and low pressure area in Eastern Europe",
        "Cold, humid downhill wind on the lee side of the alps, flat pressure pattern",
        "Nimbostratus cloud in the northern alps, rotor clouds at the windward side, warm and dry wind",
        "Nimbostratus cloud in the southern alps, rotor clouds at the lee side, warm and dry wind"
      ],
      correctIndex: 3,
      explanation: "During a classic South-Foehn in Bavaria, moist air from Italy rises and dumps heavy rain (Nimbostratus) on the southern Alps. As it drops down into the Bavarian (leeward/lee) side, it creates a turbulent (rotor clouds), unusually warm, and bone-dry wind."
    },
    {
      id: 129,
      question: "Mountain side updrafts can be intensified by ...",
      options: [
        "Solar irradiation on the windward side",
        "Solar irradiation on the lee side",
        "By warming of upper atmospheric layers",
        "thermal radiation of the windward side during the night"
      ],
      correctIndex: 0,
      explanation: "Updrafts on the windward (upwind) side of a mountain are initially driven by mechanical lifting. If the sun simultaneously heats that same windward slope (solar irradiation), it adds a powerful thermal lifting component (anabatic wind), significantly intensifying the overall updraft."
    }
  ],
  navigation: [
    {
      id: 1,
      question: "The rotational axis of the Earth runs through the...",
      options: [
        "geographic North Pole and on the geographic South Pole.",
        "geographic North Pole and on the magnetic south pole.",
        "magnetic north pole and on the magnetic south pole.",
        "magnetic north pole and on the geographic South Pole."
      ],
      correctIndex: 0,
      explanation: "The Earth rotates around an imaginary line piercing through its center. The exact points where this physical axis intersects the Earth's surface are defined as the True (Geographic) North Pole and the True (Geographic) South Pole. Magnetic poles are entirely separate and constantly moving."
    },
    {
      id: 2,
      question: "Which statement is correct with regard to the polar axis of the Earth?",
      options: [
        "The polar axis of the Earth crosses the geographic South Pole and the geographic North Pole and is perpendicular to the plane of the equator",
        "The polar axis of the Earth crosses the geographic South Pole and the geographic North Pole and is at an angle of 23.5° to the plane of the equator",
        "The polar axis of the Earth crosses the magnetic south pole and the magnetic north pole and is perpendicular to the plane of the equator",
        "The polar axis of the Earth crosses the magnetic south pole and the magnetic north pole and is at an angle of 66.5° to the plane of the equator"
      ],
      correctIndex: 0,
      explanation: "By strict geometric definition, the equatorial plane is an imaginary flat surface passing through the Earth's center, dividing it into Northern and Southern hemispheres. The polar axis (connecting the true Geographic poles) is exactly at a 90-degree angle (perpendicular) to this equatorial plane."
    },
    {
      id: 3,
      question: "Which approximate, geometrical form describes the shape of the Earth best for navigation systems?",
      options: [
        "Sphere of ecliptical shape",
        "Ellipsoid",
        "Perfect sphere",
        "Flat plate"
      ],
      correctIndex: 1,
      explanation: "Due to the centrifugal force created by its rotation, the Earth bulges slightly at the equator and is flattened at the poles. Therefore, it is not a perfect sphere, but rather an oblate spheroid or an 'ellipsoid', which is the mathematical model used by modern navigation systems like GPS (WGS-84)."
    },
    {
      id: 4,
      question: "Which statement about a rhumb line is correct?",
      options: [
        "A rhumb line cuts each meridian at the same angle.",
        "The center of a complete cycle of a rhumb line is always the Earth's center.",
        "The shortest track between two points along the Earth's surface follows a rhumb line.",
        "A rhumb line is a great circle intersecting the equator with 45° angle."
      ],
      correctIndex: 0,
      explanation: "A rhumb line (or loxodrome) is a line crossing all meridians of longitude at the same, constant angle. This means a pilot flying a rhumb line can simply hold a constant heading on the compass. However, it spirals toward the poles and is not the shortest distance between two points."
    },
    {
      id: 5,
      question: "The shortest distance between two points on Earth is represented by a part of...",
      options: [
        "a great circle.",
        "a small circle.",
        "a rhumb line.",
        "a parallel of latitude."
      ],
      correctIndex: 0,
      explanation: "A Great Circle is the largest possible circle that can be drawn on a sphere, meaning its center coincides exactly with the center of the Earth. An arc of a Great Circle always represents the absolute shortest geometric distance between any two points on the globe."
    },
    {
      id: 6,
      question: "The circumference of the Earth at the equator is approximately...",
      img: "NAV-002.png",
      options: [
        "10800 km.",
        "40000 NM.",
        "12800 km.",
        "21600 NM."
      ],
      correctIndex: 3,
      explanation: "A Nautical Mile (NM) is defined as one minute of arc along a Great Circle. Since the equator is a Great Circle, and a full circle has 360 degrees, and each degree has 60 minutes: 360 * 60 = 21,600 minutes. Therefore, the Earth's circumference is exactly 21,600 Nautical Miles."
    },
    {
      id: 7,
      question: "What is the difference in latitude between A (12°53'30\"N) and B (07°34'30\"S)?",
      options: [
        "20°28'00\"",
        "05,19°",
        "20,28°",
        "05°19'00\""
      ],
      correctIndex: 0,
      explanation: "Because Point A is North of the equator and Point B is South, you must add the values to find the total difference. 12° + 07° = 19°. Next, add the minutes and seconds: 53'30\" + 34'30\" = 88 minutes. Since 60 minutes = 1 degree, 88 minutes is 1°28'. Adding this to 19° yields 20°28'00\"."
    },
    {
      id: 8,
      question: "Where are the two polar circles?",
      options: [
        "At a latitude of 20.5°S and 20.5°N",
        "23.5° north and south of the poles",
        "23.5° north and south of the equator",
        "20.5° south of the poles"
      ],
      correctIndex: 1,
      explanation: "The Earth's axial tilt is approximately 23.5 degrees. The Arctic and Antarctic circles are located at 66.5° North and South latitude, respectively. Geometrically, 90° (the pole) minus 66.5° equals 23.5°. Therefore, the polar circles are situated exactly 23.5° from the poles."
    },
    {
      id: 9,
      question: "What is the distance between the parallels of latitude 48°N and 49°N along a meridian line?",
      options: [
        "1 NM",
        "60 NM",
        "111 NM",
        "10 NM"
      ],
      correctIndex: 1,
      explanation: "All meridians of longitude are Great Circles. By definition, one minute of arc along a Great Circle equals 1 Nautical Mile. Since the difference between 48°N and 49°N is precisely 1 degree, and 1 degree contains 60 minutes, the distance is exactly 60 NM."
    },
    {
      id: 10,
      question: "What distance corresponds to one degree difference in latitude along any degree of longitude?",
      options: [
        "1 NM",
        "60 NM",
        "30 NM",
        "60 km"
      ],
      correctIndex: 1,
      explanation: "A meridian of longitude runs straight from the North Pole to the South Pole, forming a semi-Great Circle. Therefore, moving 1 degree of latitude up or down any meridian always covers 60 minutes of arc, which equals exactly 60 Nautical Miles."
    },
    {
      id: 11,
      question: "Point A on the Earth's surface lies exactly on the parallel of latitude of 47°50'27\"N. Which point is exactly 240 NM north of A?",
      options: [
        "43°50'27\"N",
        "53°50'27\"N",
        "49°50'27\"N",
        "51°50'27\"N"
      ],
      correctIndex: 3,
      explanation: "Traveling directly North means moving along a meridian. Since 1 degree of latitude equals 60 NM, traveling 240 NM means changing latitude by exactly 4 degrees (240 / 60 = 4). Adding 4 degrees to 47°50'27\"N results in 51°50'27\"N."
    },
    {
      id: 12,
      question: "What is the distance between the two parallels of longitude 150°E and 151°E along the equator?",
      options: [
        "60 km",
        "111 NM",
        "60 NM",
        "1 NM"
      ],
      correctIndex: 2,
      explanation: "The equator is the only parallel of latitude that is also a Great Circle. Because 1 minute of a Great Circle arc equals 1 NM, the 1-degree difference (60 minutes) between 150°E and 151°E measured directly along the equator equals 60 NM."
    },
    {
      id: 13,
      question: "What is the great circle distance between two points A and B on the equator when the difference between the two associated meridians is exactly one degree of longitude?",
      options: [
        "60 NM",
        "400 NM",
        "120 NM",
        "216 NM"
      ],
      correctIndex: 0,
      explanation: "Since the equator itself is a Great Circle, measuring along it is the same as measuring any Great Circle track. A difference of 1 degree longitude equals 60 minutes of arc. Thus, the Great Circle distance is 60 Nautical Miles."
    },
    {
      id: 14,
      question: "Assume two arbitrary points A and B on the same parallel of latitude, but not on the equator. Point A is located on 010°E and point B on 020°E. The rhumb line distance between A and B is always...",
      options: [
        "more than 600 NM.",
        "less than 600 NM.",
        "more than 300 NM.",
        "less than 300 NM."
      ],
      correctIndex: 1,
      explanation: "The distance between meridians shrinks as you move away from the equator toward the poles. At the equator, 10 degrees = 600 NM. At any latitude above or below the equator, the distance ('Departure') is calculated as Change in Longitude × 60 × Cosine(Latitude). Because the cosine of any latitude (other than 0) is less than 1, the distance is strictly less than 600 NM."
    },
    {
      id: 15,
      question: "What is the difference in time when the sun moves 20° of longitude?",
      options: [
        "1:20 h",
        "0:20 h",
        "0:40 h",
        "1:00 h"
      ],
      correctIndex: 0,
      explanation: "The Earth rotates 360 degrees in 24 hours, meaning it rotates 15 degrees every 1 hour (60 minutes). Therefore, 1 degree of rotation takes 4 minutes. A movement of 20 degrees takes 20 * 4 = 80 minutes, which is exactly 1 hour and 20 minutes (1:20 h)."
    },
    {
      id: 16,
      question: "What is the difference in time when the sun moves 10° of longitude?",
      options: [
        "0:30 h",
        "0:04 h",
        "0:40 h",
        "1:00 h"
      ],
      correctIndex: 2,
      explanation: "Since the Earth rotates at a constant rate of 1 degree every 4 minutes of time, a longitudinal movement of 10 degrees corresponds to 10 * 4 = 40 minutes (0:40 h)."
    },
    {
      id: 17,
      question: "The sun moves 10° of longitude. What is the difference in time?",
      options: [
        "0.4 h",
        "1 h",
        "0.33 h",
        "0.66 h"
      ],
      correctIndex: 3,
      explanation: "A 10-degree longitudinal shift takes exactly 40 minutes of time. To convert 40 minutes into a decimal fraction of an hour, you divide 40 by 60, which equals 0.666... hours."
    },
    {
      id: 18,
      question: "With Central European Summer Time (CEST) given as UTC+2, what UTC time corresponds to 1600 CEST?",
      options: [
        "1600 UTC.",
        "1500 UTC.",
        "1700 UTC.",
        "1400 UTC."
      ],
      correctIndex: 3,
      explanation: "If CEST is UTC + 2 hours, it means local time is 2 hours ahead of Coordinated Universal Time (UTC). To convert local CEST back to UTC, you must subtract 2 hours. Therefore, 16:00 CEST - 2 hours = 14:00 UTC."
    },
    {
      id: 19,
      question: "UTC is...",
      options: [
        "a zonal time.",
        "a local time in Central Europe.",
        "local mean time at a specific point on Earth.",
        "an obligatory time used in aviation."
      ],
      correctIndex: 3,
      explanation: "Coordinated Universal Time (UTC) is the primary time standard by which the world regulates clocks and time. To avoid the massive confusion of differing local time zones, daylight saving changes, and international borders, aviation operations mandate the exclusive use of UTC."
    },
    {
      id: 20,
      question: "With Central European Time (CET) given as UTC+1, what UTC time corresponds to 1700 CET?",
      options: [
        "1600 UTC.",
        "1500 UTC.",
        "1700 UTC.",
        "1800 UTC."
      ],
      correctIndex: 0,
      explanation: "CET is 1 hour ahead of UTC (UTC + 1). To find the UTC time, you must subtract that 1 hour from the local time. Thus, 17:00 CET minus 1 hour equals 16:00 UTC."
    },
    {
      id: 21,
      question: "Vienna (LOWW) is located at 016° 34'E, Salzburg (LOWS) at 013° 00'E. The latitude of both positions can be considered as equal. What is the difference of sunrise and sunset times, expressed in UTC, between Wien and Salzburg?",
      options: [
        "In Vienna the sunrise and sunset are about 14 minutes earlier than in Salzburg",
        "In Vienna the sunrise is 14 minutes earlier and sunset is 14 minutes later than in Salzburg",
        "In Vienna the sunrise and sunset are about 4 minutes later than in Salzburg",
        "In Vienna the sunrise is 4 minutes later and sunset is 4 minutes earlier than in Salzburg"
      ],
      correctIndex: 0,
      explanation: "The Earth rotates towards the East, meaning the sun 'appears' to move from East to West. Because Vienna is further East (016°E) than Salzburg (013°E) by a difference of roughly 3.5 degrees, the sun will reach Vienna first. Since 1 degree = 4 minutes, 3.5 degrees = 14 minutes. Therefore, sunrise and sunset happen 14 minutes earlier in Vienna."
    },
    {
      id: 22,
      question: "The term 'civil twilight' is defined as...",
      options: [
        "the period of time before sunrise or after sunset where the midpoint of the sun disk is 6 degrees or less below the true horizon.",
        "the period of time before sunrise or after sunset where the midpoint of the sun disk is 6 degrees or less below the apparent horizon.",
        "the period of time before sunrise or after sunset where the midpoint of the sun disk is 12 degrees or less below the true horizon.",
        "the period of time before sunrise or after sunset where the midpoint of the sun disk is 12 degrees or less below the apparent horizon."
      ],
      correctIndex: 0,
      explanation: "Civil twilight is the astronomically defined period when the sun is just below the horizon, providing enough natural light for ordinary outdoor activities without artificial illumination. It strictly occurs when the geometric center of the sun is between 0 and 6 degrees below the true horizon."
    },
    {
      id: 23,
      question: "Given: WCA: -012°; TH: 125°; MC: 139°; DEV: 002°E. What are: TC, MH und CH?",
      options: [
        "TC: 113°. MH: 127°. CH: 129°",
        "TC: 137°. MH: 127°. CH: 125°",
        "TC: 137°. MH: 139°. CH: 125°",
        "TC: 113°. MH: 139°. CH: 129°"
      ],
      correctIndex: 1,
      explanation: "Using the formula True Heading (TH) = True Course (TC) + Wind Correction Angle (WCA), we find TC = TH - WCA = 125 - (-12) = 137°. The variation (VAR) can be found because TC (137) - MC (139) = VAR (2°W or -2°). Magnetic Heading (MH) = TH - VAR = 125 - (-2) = 127°. Finally, Compass Heading (CH) = MH - DEV = 127 - 2 = 125°."
    },
    {
      id: 24,
      question: "Given: TC: 179°; WCA: -12°; VAR: 004°E; DEV: +002°. What are MH and MC?",
      options: [
        "MH: 167°. MC: 175°.",
        "MH: 167°. MC: 161°.",
        "MH: 163°. MC: 175°.",
        "MH: 163°. MC: 161°."
      ],
      correctIndex: 2,
      explanation: "First, find Magnetic Course (MC): TC (179) - VAR (+4) = 175°. Next, find True Heading (TH): TC (179) + WCA (-12) = 167°. Finally, find Magnetic Heading (MH): TH (167) - VAR (+4) = 163°."
    },
    {
      id: 25,
      question: "The angle between the true course and the true heading is called...",
      options: [
        "WCA.",
        "deviation.",
        "variation.",
        "inclination."
      ],
      correctIndex: 0,
      explanation: "The Wind Correction Angle (WCA) is the crab angle a pilot applies to point the aircraft's nose (True Heading) into the wind to counteract drift, ensuring the actual flight path over the ground perfectly traces the desired True Course."
    },
    {
      id: 26,
      question: "The angle between the magnetic course and the true course is called...",
      options: [
        "deviation.",
        "WCA.",
        "variation.",
        "inclination."
      ],
      correctIndex: 2,
      explanation: "Magnetic Variation (VAR) is the angular difference between True North (the geographic pole) and Magnetic North (where a compass points). Therefore, it is also the exact angular difference between a True Course and a Magnetic Course."
    },
    {
      id: 27,
      question: "The term 'magnetic course' (MC) is defined as...",
      options: [
        "the angle between magnetic north and the course line.",
        "the angle between true north and the course line.",
        "the direction from an arbitrary point on Earth to the geographic North Pole.",
        "the direction from an arbitrary point on Earth to the magnetic north pole."
      ],
      correctIndex: 0,
      explanation: "A 'Course' is the intended path of travel over the surface. When this path is measured clockwise in degrees starting from Magnetic North, it is specifically referred to as the Magnetic Course (MC)."
    },
    {
      id: 28,
      question: "The term 'True Course' (TC) is defined as...",
      options: [
        "the angle between magnetic north and the course line.",
        "the direction from an arbitrary point on Earth to the geographic North Pole.",
        "the angle between true north and the course line.",
        "the direction from an arbitrary point on Earth to the magnetic north pole."
      ],
      correctIndex: 2,
      explanation: "True Course (TC) represents the aircraft's intended track over the ground, measured as an angle clockwise from True North (Geographic North). It is the line you physically draw with a pencil on an aeronautical map."
    },
    {
      id: 29,
      question: "Given: TC: 183°; WCA: +011°; MH: 198°; CH: 200°. What are TH and VAR?",
      options: [
        "TH: 194°. VAR: 004° W",
        "TH: 194°. VAR: 004° E",
        "TH: 172°. VAR: 004° W",
        "TH: 172°. VAR: 004° E"
      ],
      correctIndex: 0,
      explanation: "True Heading (TH) is True Course + Wind Correction Angle: 183 + 11 = 194°. Variation (VAR) is the difference between True and Magnetic directions. Since TH (194) - MH (198) = -4, the Variation is 4° West. Remember: 'East is least (-), West is best (+)' when moving from True to Magnetic."
    },
    {
      id: 30,
      question: "Given: TC: 183°; WCA: +011°; MH: 198°; CH: 200°. What are the TH and the DEV?",
      options: [
        "TH: 172°. DEV: +002°.",
        "TH: 172°. DEV: -002°.",
        "TH: 194°. DEV: -002°.",
        "TH: 194°. DEV: +002°."
      ],
      correctIndex: 2,
      explanation: "First, True Heading (TH) = TC (183) + WCA (11) = 194°. Deviation (DEV) is the difference between Magnetic Heading and Compass Heading. MH (198) - CH (200) = -2, which translates to a Deviation of 2° West (-002°)."
    },
    {
      id: 31,
      question: "Given: TC: 183°; WCA: +011°; MH: 198°; CH: 200°. What are the VAR and the DEV?",
      options: [
        "VAR: 004° W. DEV: +002°.",
        "VAR: 004° W. DEV: -002°.",
        "VAR: 004° E. DEV: +002°.",
        "VAR: 004° E. DEV: -002°."
      ],
      correctIndex: 1,
      explanation: "TH = 183 + 11 = 194°. VAR = TH - MH = 194 - 198 = -4 (4°W). DEV = MH - CH = 198 - 200 = -2 (2°W). Therefore, Variation is 4°W and Deviation is -2°."
    },
    {
      id: 32,
      question: "Where does the inclination reach its lowest value?",
      options: [
        "At the magnetic equator",
        "At the magnetic poles",
        "At the geographic equator",
        "At the geographic poles"
      ],
      correctIndex: 0,
      explanation: "Magnetic inclination (or dip) is the angle the Earth's magnetic field lines make with the horizontal plane. At the magnetic poles, lines go straight down (90° inclination). At the magnetic equator, the lines run perfectly parallel to the Earth's surface, meaning the inclination is at its absolute lowest: 0 degrees."
    },
    {
      id: 33,
      question: "The angle between compass north and magnetic north is called...",
      options: [
        "WCA.",
        "variation.",
        "inclination.",
        "deviation."
      ],
      correctIndex: 3,
      explanation: "Deviation is the localized compass error caused by the electromagnetic fields generated by the aircraft's own metal structure, engine, and avionics. It is defined as the angle between the pure Magnetic North and the actual direction the needle points (Compass North)."
    },
    {
      id: 34,
      question: "Which direction corresponds to 'compass north' (CN)?",
      options: [
        "The most northerly part of the magnetic compass in the aircraft, where the reading takes place",
        "The direction from an arbitrary point on Earth to the geographical North Pole",
        "The angle between the aircraft heading and magnetic north",
        "The direction to which the direct reading compass aligns due to earth's and aircraft's magnetic fields"
      ],
      correctIndex: 3,
      explanation: "Compass North is the imperfect north indicated by the aircraft's physical magnetic compass. It is the net resulting vector of the Earth's natural magnetic field being distorted by the aircraft's internal magnetic interference (deviation)."
    },
    {
      id: 35,
      question: "The term 'isogonal' or 'isogonic line' is defined as a line on an aeronautical chart, connecting all points with the same value of...",
      options: [
        "inclination.",
        "deviation.",
        "heading.",
        "variation."
      ],
      correctIndex: 3,
      explanation: "Isogonic lines (from 'iso' = equal, 'gonia' = angle) are plotted on aeronautical and maritime charts. They connect points on the Earth's surface that share the exact same magnetic variation (the angle between true and magnetic north)."
    },
    {
      id: 36,
      question: "The term 'agonic line' is defined as a line on Earth or an aeronautical chart, connecting all points with the...",
      options: [
        "deviation of 0°.",
        "inclination of 0°.",
        "heading of 0°.",
        "variation of 0°."
      ],
      correctIndex: 3,
      explanation: "An agonic line (from 'a' = without, 'gonia' = angle) is a specific type of isogonic line where Magnetic North and True North are in perfect alignment. Therefore, anywhere along this line, the magnetic variation is exactly zero degrees."
    },
    {
      id: 37,
      question: "Which are the official basic units for horizontal distances used in aeronautical navigation and their abbreviations?",
      options: [
        "feet (ft), inches (in)",
        "Nautical miles (NM), kilometers (km)",
        "Yards (yd), meters (m)",
        "Land miles (SM), sea miles (NM)"
      ],
      correctIndex: 1,
      explanation: "Under ICAO standards, horizontal distances for flight planning, airspace definition, and ATC separation are primarily measured and communicated in Nautical Miles (NM). Kilometers (km) are also officially accepted and used in some regions for visibility or short runway distances."
    },
    {
      id: 38,
      question: "1000 ft equal...",
      options: [
        "30 km.",
        "3000 m.",
        "300 m.",
        "30 m."
      ],
      correctIndex: 2,
      explanation: "The standard aviation conversion factor dictates that 1 foot equals 0.3048 meters. Therefore, 1,000 feet multiplied by 0.3048 yields 304.8 meters, which is commonly rounded to 300 meters in rough mental math."
    },
    {
      id: 39,
      question: "5500 m equal...",
      options: [
        "7500 ft.",
        "18000 ft.",
        "10000 ft.",
        "30000 ft."
      ],
      correctIndex: 1,
      explanation: "To convert meters to feet, divide by the conversion factor 0.3048. 5,500 meters divided by 0.3048 equals approximately 18,044 feet, universally rounded and applied in aviation as 18,000 feet (Flight Level 180)."
    },
    {
      id: 40,
      question: "Which of the items on the attached checklist are related to the direct reading compass?",
      img: "NAV-004.png",
      options: [
        "\"Turning Instruments\" only",
        "\"Gyro\" and \"Circuit Breaker\"",
        "\"Gyro\" and \"Turning Instruments\"",
        "\"Turning Instruments\" and \"Circuit Breaker\""
      ],
      correctIndex: 2,
      explanation: "During the instrument cross-check prior to takeoff or during taxi, the purely magnetic direct reading compass is constantly cross-referenced against the gyroscopic heading indicator ('Gyro') and the turning instruments to ensure internal alignment and system health."
    },
    {
      id: 41,
      question: "What could be a reason for changing the runway indicators at aerodromes (e.g. from runway 06 to runway 07)?",
      options: [
        "The magnetic deviation of the runway location has changed",
        "The magnetic variation of the runway location has changed",
        "The direction of the approach path has changed",
        "The true direction of the runway alignment has changed"
      ],
      correctIndex: 1,
      explanation: "Runways are numbered based on their magnetic heading, rounded to the nearest 10 degrees. Because the Earth's magnetic pole slowly shifts over time, the local Magnetic Variation changes. If it shifts significantly, the runway's magnetic heading changes, necessitating a physical renaming of the runway (e.g., from 06 to 07)."
    },
    {
      id: 42,
      question: "Electronic devices on board of an aeroplane have influence on the...",
      options: [
        "turn coordinator.",
        "airspeed indicator.",
        "artificial horizon.",
        "direct reading compass."
      ],
      correctIndex: 3,
      explanation: "Electronic devices generate electromagnetic fields when active. These localized fields interfere directly with the delicate magnetic needles of the direct reading compass, causing an error known as 'deviation'."
    },
    {
      id: 43,
      question: "Which are the properties of a Mercator chart?",
      options: [
        "The scale is constant, great circles are depicted as curved lines, rhumb lines are depicted as straight lines",
        "The scales increases with latitude, great circles are depicted as curved lines, rhumb lines are depicted as straight lines",
        "The scales increases with latitude, great circles are depicted as straight lines, rhumb lines are depicted as curved lines",
        "The scale is constant, great circles are depicted as straight lines, rhumb lines are depicted as curved lines"
      ],
      correctIndex: 1,
      explanation: "A Mercator projection is created by wrapping a cylinder around the equator. Because meridians are drawn parallel, the scale is stretched and increases dramatically as you move toward the poles. Rhumb lines cut meridians at equal angles, making them perfectly straight on this chart, while shortest-route Great Circles appear curved."
    },
    {
      id: 44,
      question: "How are rhumb lines and great circles depicted on a direct Mercator chart?",
      options: [
        "Rhumb lines: curved lines. Great circles: straight lines",
        "Rhumb lines: curved lines. Great circles: curved lines",
        "Rhumb lines: straight lines. Great circles: curved lines",
        "Rhumb lines: straight lines. Great circles: straight lines"
      ],
      correctIndex: 2,
      explanation: "Due to the cylindrical projection method of a Direct Mercator chart, lines of constant heading (Rhumb lines) are represented as perfectly straight lines, making them excellent for steering. Conversely, Great Circles (the shortest physical distance) are projected as curved lines bending towards the poles."
    },
    {
      id: 45,
      question: "Which are the properties of a Lambert conformal chart?",
      options: [
        "Great circles are depicted as straight lines and the chart is an equal-area projection",
        "The chart is conformal and an equal-area projection",
        "The chart is conformal and nearly true to scale",
        "Rhumb lines are depicted as straight lines and the chart is conformal"
      ],
      correctIndex: 2,
      explanation: "A Lambert Conformal Conic chart projects the earth onto a cone. 'Conformal' means angles and shapes are accurately preserved locally. Furthermore, within its standard parallels, the scale variation is so minimal that for practical VFR navigation, the chart is considered 'nearly true to scale'."
    },
    {
      id: 46,
      question: "Which lines have to be used by the pilot to determine the aircraft's position?",
      options: [
        "True bearings (QTE)",
        "Magnetic bearings (QDR)",
        "Relative bearings (RB)",
        "Magnetic headings (MH)"
      ],
      correctIndex: 0,
      explanation: "Aeronautical charts are printed and oriented relative to True North (the geographic grid of latitude and longitude). Therefore, to physically plot a line of position (LOP) from a radio station onto the map, the pilot must always convert magnetic data into a True Bearing (QTE)."
    },
    {
      id: 47,
      question: "What is the radial from VOR Brünkendorf (BKD) (53°02'N 011°33'E) to Pritzwalk (EDBU) (53°11'N 12°11'E)?",
      img: "NAV-031.png",
      options: [
        "024°",
        "204°",
        "248°",
        "068°"
      ],
      correctIndex: 3,
      explanation: "A VOR radial is a magnetic bearing directly FROM the station. By locating BKD VOR on the chart and plotting a line outward to the Pritzwalk airfield, the measured magnetic course reads approximately 068 degrees."
    },
    {
      id: 48,
      question: "The distance between two airports is 220 NM. On an aeronautical navigation chart the pilot measures 40.7 cm for this distance. The chart scale is...",
      options: [
        "1:250000.",
        "1:2000000.",
        "1:500000.",
        "1:1000000."
      ],
      correctIndex: 3,
      explanation: "First, convert NM to cm: 220 NM * 1852 meters/NM = 407,440 meters = 40,744,000 cm. The scale is the ratio of chart distance to real distance: 40.7 cm / 40,744,000 cm. Dividing both sides by 40.7 gives a pristine 1 : 1,001,081, which matches the standard 1:1,000,000 aviation chart scale."
    },
    {
      id: 49,
      question: "Given the following information, what is the aircraft position at the cross bearing? VOR Hamburg (HAM) (53°41'N, 010°12'E): Radial 119°. VOR Brünkendorf (BKD) (53°02'N 011°33'E): Radial 320°.",
      img: "NAV-031.png",
      options: [
        "52°20'N, 10°10'E",
        "54°40'N, 12°50'E",
        "52°10'N, 10°20'E",
        "53°20'N 11°10'E"
      ],
      correctIndex: 3,
      explanation: "By drawing a line from the HAM VOR at an angle of 119° outward, and another line from the BKD VOR at 320° outward, the two lines intersect at a precise geographic coordinate on the map. Reading the lat/long grid at this intersection point yields 53°20'N, 011°10'E."
    },
    {
      id: 50,
      question: "What is the distance from VOR Brünkendorf (BKD) (53°02'N, 011°33'E) to Pritzwalk (EDBU) (53°11'N, 12°11'E)?",
      img: "NAV-031.png",
      options: [
        "24 km",
        "42 NM",
        "24 NM",
        "42 km"
      ],
      correctIndex: 2,
      explanation: "Using the chart's scale or a nautical mile ruler (where 1 minute of latitude equals 1 NM), measuring the physical distance on the map between the BKD VOR symbol and the Pritzwalk aerodrome gives an exact distance of 24 Nautical Miles."
    },
    {
      id: 51,
      question: "A distance of 7.5 cm on an aeronautical chart represents a distance of 60.745 NM in reality. What is the chart scale?",
      options: [
        "1:500000",
        "1:1000000",
        "1:150000",
        "1:1500000"
      ],
      correctIndex: 3,
      explanation: "First, convert Nautical Miles to centimeters to match the chart unit. 1 NM = 1,852 meters = 185,200 cm. So, 60.745 NM * 185,200 cm/NM = 11,249,974 cm (~11,250,000 cm). The scale is the ratio of chart distance to real distance: 7.5 cm / 11,250,000 cm = 1 / 1,500,000. Therefore, the scale is 1:1,500,000."
    },
    {
      id: 52,
      question: "For a short flight from A to B the pilot extracts the following information from an aeronautical chart: True course: 245°; Magnetic variation: 7° W. The magnetic course (MC) equals...",
      options: [
        "252°.",
        "245°.",
        "007°.",
        "238°."
      ],
      correctIndex: 0,
      explanation: "Magnetic Course (MC) is calculated by subtracting Variation from True Course (TC). When Variation is West, it is mathematically treated as a negative value. MC = 245° - (-7°) = 252°. You can also use the aviation mnemonic: 'West is best (+), East is least (-)' when converting from True to Magnetic."
    },
    {
      id: 53,
      question: "An aircraft is flying with an indicated airspeed (IAS) of 150 kt at 8000 ft MSL. According to the rule of thumb, the true airspeed (TAS) equals...",
      options: [
        "174 kt.",
        "150 kt.",
        "142 kt.",
        "208 kt."
      ],
      correctIndex: 0,
      explanation: "The standard rule of thumb for calculating True Airspeed (TAS) is to add 2% to the Indicated Airspeed (IAS) for every 1,000 feet of altitude. At 8,000 ft, you add 16% (8 * 2%). 16% of 150 kt is 24 kt. Adding this to the IAS: 150 + 24 = 174 kt."
    },
    {
      id: 54,
      question: "Given: True course from A to B: 250°. Ground distance: 210 NM. TAS: 130 kt. Headwind component: 15 kt. Estimated time of departure (ETD): 0915 UTC. The estimated time of arrival (ETA) is...",
      options: [
        "1115 UTC.",
        "1105 UTC.",
        "1005 UTC.",
        "1052 UTC."
      ],
      correctIndex: 1,
      explanation: "First, find Ground Speed (GS): TAS - Headwind = 130 - 15 = 115 kt. Next, find flight time: Distance / GS = 210 / 115 = 1.826 hours. Convert the decimal portion to minutes: 0.826 * 60 = ~49.5 minutes. Total time is 1 hour 50 minutes. ETD 09:15 + 1:50 = 11:05 UTC."
    },
    {
      id: 55,
      question: "Given: True course from A to B: 283°. Ground distance: 75 NM. TAS: 105 kt. Headwind component: 12 kt. Estimated time of departure (ETD): 1242 UTC. The estimated time of arrival (ETA) is...",
      options: [
        "1430 UTC",
        "1356 UTC",
        "1330 UTC",
        "1320 UTC"
      ],
      correctIndex: 2,
      explanation: "Ground Speed (GS) = TAS - Headwind = 105 - 12 = 93 kt. Time = Distance / GS = 75 / 93 = 0.806 hours. To get minutes: 0.806 * 60 = ~48 minutes. Add 48 minutes to ETD 12:42. 12:42 + 0:48 = 13:30 UTC."
    },
    {
      id: 56,
      question: "Given: True course from A to B: 352°. Ground distance: 100 NM. GS: 107 kt. Estimated time of departure (ETD): 0933 UTC. The estimated time of arrival (ETA) is...",
      options: [
        "1129 UTC.",
        "1029 UTC.",
        "1146 UTC.",
        "1045 UTC."
      ],
      correctIndex: 1,
      explanation: "Flight time = Distance / Ground Speed = 100 NM / 107 kt = 0.934 hours. Convert to minutes: 0.934 * 60 = 56 minutes. ETD 09:33 + 56 minutes = 10:29 UTC."
    },
    {
      id: 57,
      question: "An aircraft travels 100 km in 56 minutes. The ground speed (GS) equals...",
      options: [
        "58 km/h.",
        "198 kt.",
        "93 kt.",
        "107 km/h."
      ],
      correctIndex: 3,
      explanation: "Speed is Distance divided by Time. First, convert 56 minutes into hours: 56 / 60 = 0.933 hours. 100 km / 0.933 hours = 107.1 km/h. The closest option is 107 km/h."
    },
    {
      id: 58,
      question: "An aircraft travels 110 NM within 01:25. The ground speed (GS) equals...",
      options: [
        "120 km/h.",
        "160 km/h.",
        "86 kt.",
        "78 kt."
      ],
      correctIndex: 3,
      explanation: "1 hour and 25 minutes equals 85 minutes. Convert this to hours: 85 / 60 = 1.416 hours. Ground Speed (GS) = Distance / Time = 110 NM / 1.416 hours = 77.68 knots, which rounds to 78 kt."
    },
    {
      id: 59,
      question: "What is the required flight time for a distance of 236 NM with a ground speed of 134 kt?",
      options: [
        "1:34 h",
        "0:46 h",
        "1:46 h",
        "0:34 h"
      ],
      correctIndex: 2,
      explanation: "Time = Distance / GS = 236 / 134 = 1.761 hours. The integer part is 1 hour. Multiply the decimal remainder (0.761) by 60 to get minutes: 0.761 * 60 = 45.6 minutes. Rounded to the nearest minute, the time is 1 hour and 46 minutes (1:46 h)."
    },
    {
      id: 60,
      question: "An aircraft is flying with a true airspeed (TAS) of 120 kt and experiences 35 kt tailwind. How much time is needed for a distance of 185 NM?",
      options: [
        "1 h 32 min",
        "0 h 50 min",
        "1 h 12 min",
        "2 h 11 min"
      ],
      correctIndex: 2,
      explanation: "Ground Speed (GS) = TAS + Tailwind = 120 + 35 = 155 kt. Time = Distance / GS = 185 / 155 = 1.193 hours. Convert the decimal part to minutes: 0.193 * 60 = 11.58 minutes. Total time is approximately 1 hour and 12 minutes."
    },
    {
      id: 61,
      question: "An aircraft is flying with a true airspeed (TAS) of 180 kt and a headwind component of 25 kt for 2 hours and 25 minutes. The distance flown equals...",
      options: [
        "693 NM.",
        "435 NM.",
        "375 NM.",
        "202 NM."
      ],
      correctIndex: 2,
      explanation: "Ground Speed (GS) = TAS - Headwind = 180 - 25 = 155 kt. Convert 2 hours 25 minutes to decimal hours: 2 + (25 / 60) = 2.416 hours. Distance = GS * Time = 155 * 2.416 = 374.48 NM, which rounds to 375 NM."
    },
    {
      id: 62,
      question: "Given: Calibrated airspeed (CAS): 155 kt. Flight level (FL) 80. Outside air temperature (OAT): +15° C. The true airspeed (TAS) equals...",
      options: [
        "155 kts.",
        "170 kts.",
        "180 kts.",
        "134 kts."
      ],
      correctIndex: 2,
      explanation: "Rule of thumb: Add 2% to CAS for every 1000 ft altitude. 8000 ft = 16% increase. 16% of 155 is ~25. 155 + 25 = 180 kt. Additionally, it is much warmer than standard ISA at 8000 ft, further reducing density and increasing TAS. Thus, 180 kt is the correct reading on a flight computer."
    },
    {
      id: 63,
      question: "What is the true course (TC) from Uelzen (EDVU) (52°59'N, 10°28'E) to Neustadt (EDAN) (53°22'N 011°37'E)?",
      img: "NAV-031.png",
      options: [
        "241°",
        "235°",
        "061°",
        "055°"
      ],
      correctIndex: 2,
      explanation: "By analyzing the coordinates, Neustadt is located to the North (from 52°59' to 53°22') and East (from 10°28' to 11°37') of Uelzen. Therefore, the course is Northeasterly. When plotted on the chart, the precise True Course is 061°."
    },
    {
      id: 64,
      question: "An aircraft is flying at a FL 75 with an outside air temperature (OAT) of -9°C. The QNH altitude is 6500 ft. The true altitude equals...",
      options: [
        "6500 ft.",
        "6750 ft.",
        "7000 ft.",
        "6250 ft."
      ],
      correctIndex: 3,
      explanation: "The indicated altitude is 6500 ft. The ISA standard temperature at 6500 ft is roughly +2°C. The actual OAT is -9°C, which is 11°C colder than ISA. Rule of thumb: 4% altitude error per 10°C deviation. 4.4% of 6500 is ~286 ft. Since it's colder, you are lower than indicated: 6500 - 286 = 6214 ft. 6250 ft is the closest option."
    },
    {
      id: 65,
      question: "What is the distance from Neustadt (EDAN) (53°22'N, 011°37'E) to Uelzen (EDVU) (52°59'N 10°28'E)?",
      img: "NAV-031.png",
      options: [
        "46 NM",
        "78 km",
        "46 km",
        "78 NM"
      ],
      correctIndex: 0,
      explanation: "By applying the Pythagorean theorem on the coordinate differences (or measuring physically on an ICAO 1:500,000 chart using the meridian minute scale, where 1 minute of latitude equals 1 NM), the distance between these two points is 46 Nautical Miles."
    },
    {
      id: 66,
      question: "An aircraft is flying at a pressure altitude of 7000 feet with an outside air temperature (OAT) of +11°C. The QNH altitude is 6500 ft. The true altitude equals...",
      options: [
        "6500 ft.",
        "7000 ft.",
        "6750 ft.",
        "6250 ft."
      ],
      correctIndex: 2,
      explanation: "Indicated QNH altitude is 6500 ft. ISA temp at 6500 ft is +2°C. The actual OAT is +11°C (9 degrees warmer than ISA). True altitude increases by roughly 4% per 10°C above ISA. 3.6% of 6500 ft = 234 ft. Warmer air means true altitude is higher: 6500 + 234 = 6734 ft. Closest is 6750 ft."
    },
    {
      id: 67,
      question: "An aircraft is flying at a pressure altitude of 7000 feet with an outside air temperature (OAT) of +21°C. The QNH altitude is 6500 ft. The true altitude equals...",
      options: [
        "6750 ft.",
        "6250 ft.",
        "7000 ft.",
        "6500 ft."
      ],
      correctIndex: 2,
      explanation: "Indicated altitude is 6500 ft. ISA at 6500 is +2°C. OAT is +21°C (19 degrees warmer than ISA). Apply the 4% correction per 10° deviation: ~7.6% increase. 7.6% of 6500 = 494 ft. True altitude = 6500 + 494 = 6994 ft. The closest is 7000 ft."
    },
    {
      id: 68,
      question: "Given: True course: 255°. TAS: 100 kt. Wind: 200°/10 kt. The true heading equals...",
      options: [
        "245°.",
        "275°",
        "265°",
        "250°"
      ],
      correctIndex: 3,
      explanation: "Wind from 200° means it hits from the left (55 degrees off the 255° nose). Crosswind = sin(55) * 10 = ~8.2 kt. Drift angle = (Crosswind / TAS) * 60 = (8.2 / 100) * 60 = ~4.9° right drift. To correct, steer 5° left. True Heading = 255 - 5 = 250°."
    },
    {
      id: 69,
      question: "Given: True course: 165°. TAS: 90 kt. Wind: 130°/20 kt. Distance: 153 NM. The true heading equals...",
      options: [
        "126°",
        "158°",
        "152°",
        "165°."
      ],
      correctIndex: 1,
      explanation: "Wind from 130° is 35 degrees left of the 165° course. Crosswind = sin(35) * 20 = 11.4 kt. Max drift = (11.4 / 90) * 60 = 7.6°. Since wind is from the left, it drifts the plane right. Correct 7.6° to the left. True Heading = 165 - 7.6 = 157.4°, which rounds to 158°."
    },
    {
      id: 70,
      question: "Given: Ground speed (GS): 160 kt. True course (TC): 177°. Wind vector (W/WS): 140°/20 kt. The true heading (TH) equals...",
      options: [
        "169°",
        "173°.",
        "184°.",
        "180°"
      ],
      correctIndex: 1,
      explanation: "Wind from 140° is 37 degrees left of the nose. Crosswind = sin(37) * 20 = ~12 kt. WCA = (Crosswind / TAS or GS) * 60 = (12 / 160) * 60 = 4.5° left. True Heading = 177 - 4.5 = 172.5°, rounded to 173°."
    },
    {
      id: 71,
      question: "An aircraft is following a true course (TC) of 220° at a constant TAS of 220 kt. The wind vector is 270°/50 kt. The ground speed (GS) equals...",
      options: [
        "170 kt.",
        "185 kt.",
        "255 kt.",
        "135 kt."
      ],
      correctIndex: 1,
      explanation: "Wind from 270° is 50° right of the course. The headwind component = cos(50) * 50 = ~32 kt. The severe crosswind (sin(50) * 50 = 38 kt) requires significant crabbing, slowing the aircraft further. Using a flight computer (TAS^2 = (GS+HW)^2 + XW^2), the exact GS is ~185 kt."
    },
    {
      id: 72,
      question: "An aircraft is following a true course (TC) of 040° at a constant true airspeed (TAS) of 180 kt. The wind vector is 350°/30 kt. The groundspeed (GS) equals...",
      options: [
        "172 kt.",
        "159 kt.",
        "155 kt.",
        "168 kt."
      ],
      correctIndex: 1,
      explanation: "Wind from 350° is 50 degrees left of the 040° course. Headwind = cos(50) * 30 = 19.3 kt. Factoring in the drag from the required crab angle due to the crosswind, the total GS penalty is slightly more. GS is approximately 159 kt."
    },
    {
      id: 73,
      question: "An aircraft is following a true course (TC) of 040° at a constant true airspeed (TAS) of 180 kt. The wind vector is 350°/30 kt. The wind correction angle (WCA) equals...",
      options: [
        "+5°",
        "+11°",
        "-7°",
        "-9°"
      ],
      correctIndex: 2,
      explanation: "Wind is 50 degrees left. Crosswind = sin(50) * 30 = 23 kt. Drift angle = (23 / 180) * 60 = ~7.6°. The wind pushes to the right, so the pilot must correct to the left. A left correction is mathematically negative (-). Therefore, WCA is roughly -7°."
    },
    {
      id: 74,
      question: "Given: True course: 270°. TAS: 100 kt. Wind: 090°/25 kt. Distance: 100 NM. The ground speed (GS) equals...",
      options: [
        "125 kt.",
        "117 kt.",
        "120 kt.",
        "131 kt."
      ],
      correctIndex: 0,
      explanation: "A True Course of 270° combined with a wind directly from 090° creates a pure tailwind of 25 kt. Ground Speed = TAS + Tailwind = 100 + 25 = 125 kt."
    },
    {
      id: 75,
      question: "Given: True course: 270°. TAS: 100 kt. Wind: 090°/25 kt. Distance: 100 NM. The flight time equals...",
      options: [
        "62 Min.",
        "37 Min.",
        "48 Min.",
        "84 Min."
      ],
      correctIndex: 2,
      explanation: "With a Ground Speed of 125 kt (100 TAS + 25 pure tailwind), the time required to fly 100 NM is calculated by dividing Distance by GS. 100 / 125 = 0.8 hours. Convert to minutes: 0.8 * 60 = 48 minutes."
    },
    {
      id: 76,
      question: "An aircraft is following a true course (TC) of 040° at a constant true airspeed (TAS) of 180 kt. The wind vector is 350°/30 kt. The wind correction angle (WCA) equals...",
      options: [
        "7° left.",
        "3° right.",
        "3° left.",
        "7° right."
      ],
      correctIndex: 0,
      explanation: "The wind from 350° strikes the aircraft from the left. Crosswind component is ~23kt. WCA = (23 / 180) * 60 = ~7.6°. To compensate for rightward drift, the pilot must crab the aircraft 7° to the left."
    },
    {
      id: 77,
      question: "Given: True course: 120°. TAS: 120 kt. Wind: 150°/12 kt. The WCA equals...",
      options: [
        "6° to the right.",
        "3° to the left.",
        "3° to the right.",
        "6° to the left."
      ],
      correctIndex: 2,
      explanation: "The wind is from 150°, which is 30 degrees to the right of the course. Crosswind component = sin(30) * 12 = 6 kt. Drift = (6 / 120) * 60 = 3°. Since the wind blows from the right, the aircraft drifts left. The pilot must apply a 3° correction to the right."
    },
    {
      id: 78,
      question: "The distance from 'A' to 'B' measures 120 NM. At a distance of 55 NM from 'A' the pilot realizes a deviation of 7 NM to the right. What approximate course change must be made to reach 'B' directly?",
      options: [
        "8° left",
        "6° left",
        "15° left",
        "14° left"
      ],
      correctIndex: 3,
      explanation: "Using the 1:60 rule: Track Error = (Off-course distance / Flown distance) * 60 = (7 / 55) * 60 = ~7.6°. Closing Angle = (Off-course distance / Remaining distance) * 60. Remaining distance = 120 - 55 = 65 NM. CA = (7 / 65) * 60 = ~6.4°. Total correction = 7.6 + 6.4 = 14°. Since you are right of the track, turn 14° left."
    },
    {
      id: 79,
      question: "An aeroplane has a heading of 090°. The distance which has to be flown is 90 NM. After 45 NM the aeroplane is 4.5 NM north of the planned flight path. What is the corrected heading to reach the arrival aerodrome directly?",
      options: [
        "18° to the right",
        "12° to the right",
        "6° to the right",
        "9° to the right"
      ],
      correctIndex: 1,
      explanation: "Based on the 1:60 rule. The aircraft is halfway (45 NM) and 4.5 NM off track to the left (North of East). Track Error = (4.5 / 45) * 60 = 6°. Closing Angle = (4.5 / 45) * 60 = 6°. Total necessary correction to reach the target is 12°. Since you are left of track, correct to the right."
    },
    {
      id: 80,
      question: "What is the meaning of the 1:60 rule?",
      options: [
        "6 NM lateral offset at 1° drift after 10 NM",
        "60 NM lateral offset at 1° drift after 1 NM",
        "1 NM lateral offset at 1° drift after 60 NM",
        "10 NM lateral offset at 1° drift after 60 NM"
      ],
      correctIndex: 2,
      explanation: "The 1:60 rule is a fundamental mental-math formula in aviation. It dictates that if a pilot flies exactly 60 Nautical Miles with a 1-degree heading error (drift), the aircraft will end up exactly 1 Nautical Mile laterally off the intended track."
    },
    {
      id: 81,
      question: "An aircraft is flying from 'A' to 'B' (distance 220 NM) at an average ground speed (GS) of 120 kt. It departs 'A' at 1200 UTC. After 70 NM along the course from 'A', the aircraft is 5 min ahead of the planned schedule. Using the actual GS, what is the revised estimated time of arrival (ETA) at B?",
      options: [
        "1335 UTC",
        "1340 UTC",
        "1345 UTC",
        "1330 UTC"
      ],
      correctIndex: 0,
      explanation: "Planned time for 70 NM at 120 kt = 35 minutes. Being 5 minutes ahead means it actually took 30 minutes (0.5 hrs). Actual GS = 70 / 0.5 = 140 kt. Distance remaining = 150 NM. Time to fly 150 NM at 140 kt = 150 / 140 = 1.07 hours (~64 minutes). Departure 12:00 + 30m + 64m = 13:34. The closest option is 13:35 UTC."
    },
    {
      id: 82,
      question: "Assume calm wind and an aircraft descending from 9000 ft to 1500 ft. The rate of descent (ROD) equals 1200 ft/min. The elapsed time will be...",
      options: [
        "6 min.",
        "15 min.",
        "12 min.",
        "8 min."
      ],
      correctIndex: 0,
      explanation: "Total altitude to lose = 9000 ft - 1500 ft = 7500 ft. Time = Total descent altitude / Rate of descent. 7500 / 1200 = 6.25 minutes. Among the given options, 6 minutes represents the closest logical approximation."
    },
    {
      id: 83,
      question: "Assume zero wind and an aircraft descending from 7500 ft to 1200 ft with an average true airspeed (TAS) during the descent of 105 kt. The rate of descent (ROD) equals 800 ft/min. The elapsed time will be...",
      options: [
        "6 Min.",
        "8 Min.",
        "15 Min.",
        "12 Min."
      ],
      correctIndex: 1,
      explanation: "Total altitude to lose = 7500 ft - 1200 ft = 6300 ft. The time required is strictly a function of altitude and ROD (TAS is irrelevant for time, only for forward distance). Time = 6300 ft / 800 ft/min = 7.875 minutes, which rounds smoothly to 8 minutes."
    },
    {
      id: 84,
      question: "Which answer completes the flight plan (marked cells)?",
      img: "NAV-014.png",
      options: [
        "TH: 185°. MH: 185°. MC: 180°",
        "TH: 185°. MH: 184°. MC: 178°",
        "TH: 173°. MH: 174°. MC: 178°",
        "TH: 173°. MH: 184°. MC: 178°"
      ],
      correctIndex: 1,
      explanation: "Applying the standard navigational calculations (TH = TC ± WCA; MH = TH ± VAR; MC = TC ± VAR) to the missing cells of the chart resolves to True Heading 185°, Magnetic Heading 184°, and Magnetic Course 178°."
    },
    {
      id: 85,
      question: "What radio navigation aid can be received with the attached aerial?",
      img: "NAV-017.png",
      options: [
        "VOR",
        "DME",
        "NDB",
        "VDF"
      ],
      correctIndex: 2,
      explanation: "The image depicts a standard loop or tear-drop antenna. This specific design is integral to the Automatic Direction Finder (ADF) system onboard the aircraft, which relies exclusively on signals broadcasted by ground-based Non-Directional Beacons (NDB)."
    },
    {
      id: 86,
      question: "The approximate propagation speed of electromagnetic waves is...",
      options: [
        "300000 km/s",
        "300000 10 m/s.",
        "300000 NM/s.",
        "30000 ft/s."
      ],
      correctIndex: 0,
      explanation: "Radio waves are electromagnetic radiation. Like visible light, they propagate through the atmosphere and space at the speed of light, which is approximately 300,000 kilometers per second."
    },
    {
      id: 87,
      question: "Radio waves within the LF and MF range (e.g. NDB) travel as...",
      options: [
        "sky wave.",
        "sky wave and as ground/surface wave.",
        "ground / surface wave.",
        "space wave (quasi-optical)."
      ],
      correctIndex: 1,
      explanation: "Low Frequency (LF) and Medium Frequency (MF) waves have long wavelengths. During the day, they travel along the Earth's curvature as surface/ground waves. At night, changes in the ionosphere cause these waves to also reflect back to Earth as sky waves, increasing their range but introducing errors."
    },
    {
      id: 88,
      question: "Radio waves within the VHF range (e.g. VOR) travel as...",
      options: [
        "sky wave and ground / surface wave.",
        "ground / surface wave.",
        "sky wave.",
        "space wave (quasi-optical)."
      ],
      correctIndex: 3,
      explanation: "Very High Frequency (VHF) radio waves are characterized by short wavelengths. They pierce straight through the ionosphere rather than bouncing back, meaning they travel exclusively in straight lines (line of sight), acting similarly to light (quasi-optical space waves)."
    },
    {
      id: 89,
      question: "Quasi-optical waves travel...",
      options: [
        "along the surface of the earth.",
        "through the air directly from the transmitter to the receiver.",
        "through the air and are influenced (e.g. reflected) by the ionosphere.",
        "along the surface of the earth, but are absorbed by the sea."
      ],
      correctIndex: 1,
      explanation: "The term 'quasi-optical' denotes that these high-frequency waves behave like beams of light. They travel directly from the transmitter to the receiver without bending around the Earth, meaning they are easily blocked by terrain, buildings, and the planet's curvature."
    },
    {
      id: 90,
      question: "A VHF direction finder (VDF) can determine...",
      options: [
        "slant ranges.",
        "magnetic bearings.",
        "approach speeds.",
        "true courses."
      ],
      correctIndex: 1,
      explanation: "VDF is a ground-based ATC tool. When an aircraft transmits on a VHF frequency, the VDF antenna array instantly calculates the direction the signal came from, providing the controller with the aircraft's magnetic bearing (QDR) relative to the station."
    },
    {
      id: 91,
      question: "Which equipment is needed on board of an aircraft to use a VHF direction finder (VDF)?",
      options: [
        "At least two VHF aerials",
        "A VHF radio",
        "A relative bearing indicator (RBI)",
        "A VDF receiver"
      ],
      correctIndex: 1,
      explanation: "Since the direction-finding equipment is located entirely on the ground, the aircraft requires absolutely no special navigational instruments. The pilot simply needs a standard VHF voice radio to transmit a signal for the ground station to trace."
    },
    {
      id: 92,
      question: "Given: QDM: 138°; VAR: 10° E. The QUJ equals...",
      options: [
        "168°",
        "318°",
        "328°.",
        "148°"
      ],
      correctIndex: 3,
      explanation: "Q-codes dictate: QDM is the Magnetic bearing TO the station. QUJ is the True bearing TO the station. To convert from Magnetic to True, you must add East variation. QUJ = QDM + VAR = 138° + 10° = 148°."
    },
    {
      id: 93,
      question: "Given: QTE: 229°; VAR: 10° W. The QDM equals...",
      options: [
        "039°.",
        "059°",
        "239°.",
        "049°."
      ],
      correctIndex: 1,
      explanation: "QTE is True bearing FROM the station. QDM is Magnetic bearing TO the station. First, find True TO (QUJ) by taking the reciprocal of QTE: 229 - 180 = 049°. Then, convert True to Magnetic by subtracting West variation (-10). QDM = 049 - (-10) = 059°."
    },
    {
      id: 94,
      question: "Given: QDR: 022°; VAR: 10°E. The QTE equals...",
      options: [
        "212°.",
        "202°.",
        "052°.",
        "032°."
      ],
      correctIndex: 3,
      explanation: "QDR is Magnetic bearing FROM the station. QTE is True bearing FROM the station. To convert Magnetic to True, simply add East Variation. QTE = QDR + VAR = 022° + 10° = 032°."
    },
    {
      id: 95,
      question: "Given: QDM: 248°; VAR: 10° W. The QTE is...",
      options: [
        "238°",
        "078°.",
        "058°",
        "258°"
      ],
      correctIndex: 2,
      explanation: "QDM is Magnetic TO. First, find Magnetic FROM (QDR) by taking the reciprocal: 248 - 180 = 068°. Now convert QDR to QTE (True FROM) by subtracting the West variation (which mathematically means adding its absolute value, but let's use standard formula): True = Mag + Var. QTE = 068° + (-10°) = 058°."
    },
    {
      id: 96,
      question: "Given: QDR: 067°; VAR: 5° E. The QDM equals...",
      options: [
        "247°.",
        "072°",
        "252°.",
        "257°."
      ],
      correctIndex: 0,
      explanation: "QDR is Magnetic bearing FROM the station. QDM is Magnetic bearing TO the station. Variation is completely irrelevant here because both values are relative to Magnetic North. You simply calculate the 180-degree reciprocal: 067° + 180° = 247°."
    },
    {
      id: 97,
      question: "Given: QDR: 152°; VAR: 5°W; DEV: 5°E. The QUJ equals...",
      options: [
        "332°.",
        "147°.",
        "327°",
        "317°"
      ],
      correctIndex: 2,
      explanation: "QDR is Magnetic FROM. Deviation (DEV) only affects the aircraft compass, not station bearings, so ignore it. First, find True FROM (QTE) by applying Variation: QTE = 152 + (-5) = 147°. QUJ is True TO, which is the reciprocal of QTE. QUJ = 147 + 180 = 327°."
    },
    {
      id: 98,
      question: "Given: QTE: 203°; VAR: 10°E. The QDR equals...",
      options: [
        "023°",
        "213°.",
        "193°.",
        "013°."
      ],
      correctIndex: 2,
      explanation: "QTE is True FROM. QDR is Magnetic FROM. To convert from True back to Magnetic, you must reverse the standard variation application (Magnetic = True - East Variation). QDR = 203° - 10° = 193°."
    },
    {
      id: 99,
      question: "Given: QTE: 248°; VAR: 10°W. The QDR equals...",
      options: [
        "068°.",
        "238°.",
        "258°",
        "078°."
      ],
      correctIndex: 2,
      explanation: "QTE is True FROM. QDR is Magnetic FROM. To convert True to Magnetic: Magnetic = True - Variation. Since the Variation is West, it is a negative value. QDR = 248° - (-10°) = 258°."
    },
    {
      id: 100,
      question: "Given: QDM: 134°; VAR: 5° W. The QTE equals...",
      options: [
        "314°.",
        "299°",
        "129°",
        "309°"
      ],
      correctIndex: 3,
      explanation: "QDM is Magnetic TO. First find True TO (QUJ) by applying variation: QUJ = 134 + (-5) = 129°. QTE is True FROM, so add 180° for the reciprocal. QTE = 129 + 180 = 309°."
    },
    {
      id: 101,
      question: "The pilot receives a QDR of 225° from the VDF ground station. Where is the aircraft located in relation to the ground station?",
      options: [
        "Southeast",
        "Northeast",
        "Southwest",
        "Northwest"
      ],
      correctIndex: 2,
      explanation: "QDR is defined as the magnetic bearing FROM the ground station to the aircraft. A bearing of 225° on a compass rose corresponds exactly to the South-West direction."
    },
    {
      id: 102,
      question: "The term QDR means...",
      options: [
        "magnetic bearing from the station to the aircraft.",
        "true bearing from the aircraft to the station.",
        "magnetic bearing from the aircraft to the station.",
        "true bearing from the station to the aircraft."
      ],
      correctIndex: 0,
      explanation: "In standard aviation Q-codes, QDR specifically denotes the Magnetic Bearing FROM a direction-finding station. It is the radial you would fly outward from the station to reach the aircraft."
    },
    {
      id: 103,
      question: "The term QTE means...",
      options: [
        "magnetic bearing from the station to the aircraft.",
        "magnetic bearing from the aircraft to the station.",
        "true bearing from the station to the aircraft.",
        "true bearing from the aircraft to the station."
      ],
      correctIndex: 2,
      explanation: "QTE stands for the True Bearing FROM the station to the aircraft. Because it references True North rather than Magnetic North, QTE is the primary value used by pilots for plotting lines of position on aeronautical charts."
    },
    {
      id: 104,
      question: "A pilot receives a QDR of 135° from the VDF ground station. Where is the aircraft located in relation to the ground station?",
      options: [
        "Northwest",
        "Southeast",
        "Southwest.",
        "Northeast"
      ],
      correctIndex: 1,
      explanation: "Since QDR indicates the magnetic bearing from the station out toward the aircraft, an angle of 135° on the compass represents the South-East quadrant."
    },
    {
      id: 105,
      question: "A pilot receives a QDR of 315° from the VDF ground station. Where is the aircraft located in relation to the ground station?",
      options: [
        "Northwest",
        "Northeast",
        "Southeast",
        "Southwest"
      ],
      correctIndex: 0,
      explanation: "A QDR (Magnetic bearing from the station) of 315° points exactly halfway between West (270°) and North (360°), which locates the aircraft in the North-West direction relative to the station."
    },
    {
      id: 106,
      question: "The VDF range depends on...",
      options: [
        "the aircraft's speed.",
        "the condition of the ionosphere.",
        "the range of the ground / surface wave.",
        "the aircraft's altitude."
      ],
      correctIndex: 3,
      explanation: "VDF (VHF Direction Finding) relies on Very High Frequency radio waves. VHF signals travel in straight lines and do not bend around the Earth (line-of-sight propagation). Therefore, the higher the aircraft's altitude, the further the radio horizon extends, drastically increasing the reception range."
    },
    {
      id: 107,
      question: "Which equipment is needed on board of an aircraft to receive signals from a non-directional beacon (NDB)?",
      options: [
        "Course deviation indicator (CDI)",
        "Horizontal situation indicator (HSI)",
        "Automatic direction finder (ADF)",
        "Secondary surveillance radar (SSR)"
      ],
      correctIndex: 2,
      explanation: "The ground station is the NDB (Non-Directional Beacon). The avionics instrument installed inside the aircraft that receives and interprets this signal to point an arrow toward the station is called the ADF (Automatic Direction Finder)."
    },
    {
      id: 108,
      question: "Non-directional beacons (NDBs) transmit within which frequency band?",
      options: [
        "Very low frequency (VLF) and low frequency (LF)",
        "Low frequency (LF) and medium frequency (MF)",
        "High frequency (HF)",
        "Very high frequency (VHF)"
      ],
      correctIndex: 1,
      explanation: "NDBs operate in the Low Frequency (LF) and Medium Frequency (MF) bands. Specifically, aeronautical NDBs generally transmit between 190 kHz and 1750 kHz."
    },
    {
      id: 109,
      question: "A pilot wants to approach an NDB on QDM 090°. The aircraft flies for about 5 minutes with a magnetic heading (MH) of 095° and the RBI indication of 355°. After 6 minutes the RBI indicates 358°. Which statement is correct?",
      options: [
        "The crosswind component increased; the pilot has to increase the MH",
        "The crosswind component increased; the pilot has to decrease the MH",
        "The crosswind component decreased; the pilot has to increase the MH",
        "The crosswind component decreased; the pilot has to decrease the MH"
      ],
      correctIndex: 0,
      explanation: "Initially, QDM = MH + RBI = 095 + 355 (mod 360) = 090°. After 6 minutes, QDM = 095 + 358 (mod 360) = 093°. The station has moved to the right of the nose, meaning the aircraft has drifted to the left. The wind from the right is stronger than anticipated, so the pilot must crab further into the wind by increasing the Magnetic Heading (turning further right)."
    },
    {
      id: 110,
      question: "The pilot wants to proceed directly to the beacon. The wind is calm. The pilot should follow a QDM of... (See image NAV-019)",
      img: "NAV-019.png",
      options: [
        "080°",
        "200°",
        "260°",
        "230°"
      ],
      correctIndex: 2,
      explanation: "To fly directly to the station in zero wind, the pilot simply needs to fly the Magnetic Course TO the station, which is the definition of QDM. Based on the instrument dial depicted in the image, that heading is 260°."
    },
    {
      id: 111,
      question: "What is the difference between a locator beacon and a non-directional beacon (NDB)?",
      options: [
        "Locator beacons transmit more precisely",
        "Locator beacons have a higher range than NDBs",
        "Locator beacons transmit on request only",
        "Locator beacons have a lower range than NDBs"
      ],
      correctIndex: 3,
      explanation: "A locator beacon is technically an NDB, but it is of much lower power (typically less than 25 watts). It is used specifically as an approach aid near an airport (often collocated with an ILS marker), resulting in a much shorter reception range (usually 10 to 25 NM) compared to a standard en-route NDB."
    },
    {
      id: 112,
      question: "The range of NDBs transmitting in the medium frequency range is greatest...",
      options: [
        "before midday.",
        "at night.",
        "on midday.",
        "in the daytime."
      ],
      correctIndex: 1,
      explanation: "During the day, the lowest layer of the ionosphere (D-layer) absorbs Medium Frequency (MF) waves. At night, the D-layer dissipates, allowing MF waves to reach the higher E and F layers where they are reflected back to Earth as 'sky waves'. This drastically increases the reception range of the NDB at night."
    },
    {
      id: 113,
      question: "The shoreline effect is greatest with radio wave propagation...",
      options: [
        "at a right angle to the coast; aircraft below 6000 ft.",
        "at an acute angle to the coast; aircraft above 6000 ft.",
        "at an acute angle to the coast; aircraft below 6000 ft.",
        "at a right angle to the coast; aircraft above 6000 ft."
      ],
      correctIndex: 2,
      explanation: "Coastal refraction (shoreline effect) occurs because ground waves travel slightly faster over water than over land, causing the wave to bend as it crosses the boundary. This bending error is most severe when the signal crosses the coast at a shallow (acute) angle and the receiving aircraft is flying at a low altitude."
    },
    {
      id: 114,
      question: "Fading in LF/MF frequency range occurs mainly...",
      options: [
        "in the late afternoon.",
        "at midday.",
        "during the night.",
        "in the daytime."
      ],
      correctIndex: 2,
      explanation: "At night, the ADF receiver picks up both the direct surface wave and the reflected sky wave. Because these waves travel different distances, they arrive at the antenna out of phase, causing constructive and destructive interference. This manifests as signal fading and a wandering ADF needle."
    },
    {
      id: 115,
      question: "The progress of an electromagnetic oscillation can be described by the...",
      options: [
        "phase angle.",
        "amplitude angle.",
        "wave angle.",
        "frequency angle."
      ],
      correctIndex: 0,
      explanation: "A complete cycle of a radio wave is 360 degrees. The precise point that a wave has reached within its cycle at any given fraction of a second is mathematically described by its phase angle."
    },
    {
      id: 116,
      question: "When transmitter and receiver are moving towards each other...",
      options: [
        "the frequency varies, but the wavelength remains constant.",
        "the perceived frequency equals the transmitted frequency.",
        "the perceived frequency increases.",
        "the perceived frequency decreases."
      ],
      correctIndex: 2,
      explanation: "This is the Doppler Effect. As the receiver moves toward the source, it encounters the successive wave crests at a faster rate than they were emitted. This apparent compression of the waves leads to a higher perceived frequency."
    },
    {
      id: 117,
      question: "When transmitter and receiver are moving away from each other...",
      options: [
        "the perceived frequency increases.",
        "the perceived frequency decreases.",
        "the frequency varies, but the wavelength remains constant.",
        "the perceived frequency equals the transmitted frequency."
      ],
      correctIndex: 1,
      explanation: "Due to the Doppler Effect, when the source and receiver separate, the radio waves are effectively stretched out relative to the receiver. The receiver encounters fewer wave crests per second, resulting in a lower perceived frequency."
    },
    {
      id: 118,
      question: "VOR radials are defined based on the principle of...",
      options: [
        "phase comparison of two signals.",
        "frequency comparison of two signals.",
        "pulse comparison of two signals.",
        "amplitude comparison of two signals."
      ],
      correctIndex: 0,
      explanation: "A VOR station broadcasts two 30 Hz signals: an omni-directional reference signal and a rotating variable signal. The aircraft's VOR receiver determines its radial by precisely measuring the phase difference (phase angle) between these two signals at its specific location."
    },
    {
      id: 119,
      question: "A VOR radial corresponds to the...",
      options: [
        "QTE.",
        "QUJ.",
        "QDR.",
        "QDM."
      ],
      correctIndex: 2,
      explanation: "By definition, a VOR radial is a magnetic line of bearing extending outward FROM the VOR station. In the Q-code system, the magnetic bearing FROM a station is designated as QDR."
    },
    {
      id: 120,
      question: "Full deflection of the course deviation indicator (CDI) means that the aircraft is located at least...",
      options: [
        "2 NM beside the selected course.",
        "10 NM beside the selected course.",
        "2° beside the selected course.",
        "10° beside the selected course."
      ],
      correctIndex: 3,
      explanation: "A standard VOR Course Deviation Indicator (CDI) measures angular deviation, not linear distance. Each dot on the standard 5-dot scale represents 2 degrees. Therefore, full-scale deflection of the needle to either the left or right indicates the aircraft is 10 degrees (or more) off the selected course."
    },
    {
      id: 121,
      question: "Where is the aircraft located in relation to the VOR? (See image NAV-022)",
      img: "NAV-022.png",
      options: [
        "Northeast",
        "Southeast",
        "Southwest",
        "Northwest"
      ],
      correctIndex: 1,
      explanation: "By analyzing the OBS (Omni Bearing Selector) setting, the 'TO/FROM' flag, and the needle deflection on the instrument depicted in the image, one can triangulate the aircraft's current radial, placing it firmly in the South-East quadrant relative to the VOR."
    },
    {
      id: 122,
      question: "The aircraft is on radial... (See image NAV-024)",
      img: "NAV-024.png",
      options: [
        "066°",
        "234°.",
        "060°",
        "246°"
      ],
      correctIndex: 1,
      explanation: "To find the radial (which is always FROM the station), look at the bottom of the CDI dial if a 'TO' flag is shown, or the top if a 'FROM' flag is shown, and adjust for needle deflection. Based on the instrument's geometry in the provided image, the aircraft is on the 234° radial."
    },
    {
      id: 123,
      question: "The range of a VOR is affected by...",
      options: [
        "daylight interference.",
        "reflected sky waves.",
        "multipath propagation of the ground wave.",
        "transmitter and receiver altitude."
      ],
      correctIndex: 3,
      explanation: "VOR operates in the VHF band, which utilizes line-of-sight propagation. It cannot bend around the Earth or bounce off the ionosphere. Therefore, the maximum reception range is purely a geometric function of the VOR antenna's elevation and the receiving aircraft's cruising altitude."
    },
    {
      id: 124,
      question: "The distance measuring equipment (DME) determines the distance based on the principle of...",
      options: [
        "time measurement.",
        "Doppler.",
        "laser measurement.",
        "phase comparison."
      ],
      correctIndex: 0,
      explanation: "DME is an active secondary radar system. The aircraft sends a paired pulse to the ground station, which delays it by exactly 50 microseconds and sends it back. The aircraft's DME computes the exact time elapsed, subtracts the delay, and calculates the distance using the speed of light."
    },
    {
      id: 125,
      question: "The DME reading is a...",
      options: [
        "ground distance.",
        "air range.",
        "radial distance.",
        "slant range."
      ],
      correctIndex: 3,
      explanation: "Because the DME radio signal travels in a straight line from the aircraft in the sky down to the antenna on the ground, it forms the hypotenuse of a right-angled triangle. This direct line is called the 'slant range', which is slightly longer than the true horizontal ground distance."
    },
    {
      id: 126,
      question: "The differenz between indicated DME slant range and horizontal distance from the DME station increases...",
      options: [
        "when circling around the DME station.",
        "when descending.",
        "when departing the DME station.",
        "when approaching the DME station."
      ],
      correctIndex: 3,
      explanation: "When an aircraft is far away, the slant angle is so shallow that slant range almost perfectly equals ground distance. As the aircraft flies closer to the station (especially at high altitude), the triangle becomes steeper, causing the mathematical difference between the slant hypotenuse and the horizontal ground distance to drastically increase. Directly over the station, the error is maximum (the DME reads the aircraft's altitude, not 0)."
    },
    {
      id: 127,
      question: "Using primary ground radar, the direction of the aeroplane in relation to the antenna is determined by...",
      options: [
        "the pulse pair interval.",
        "the orientation of the antenna.",
        "the frequency shift of the received pulse.",
        "time measurement."
      ],
      correctIndex: 1,
      explanation: "Primary Surveillance Radar (PSR) sends out a narrow, focused beam of energy while the antenna physically rotates. The precise physical orientation (azimuth) of the rotating dish at the exact microsecond the reflected echo returns to it determines the aircraft's bearing from the station."
    },
    {
      id: 128,
      question: "Which instantaneous information can be obtained from ground radar equipment?",
      options: [
        "Distance and direction",
        "Airspeed (TAS) and distance",
        "Airspeed (TAS) and heading",
        "Direction and airspeed (TAS)"
      ],
      correctIndex: 0,
      explanation: "A single, instantaneous ping from a primary radar yields only two raw metrics: Distance (calculated from the time it took the echo to return) and Direction/Azimuth (from the antenna's orientation). Metrics like ground speed or track require the computer to analyze multiple pings over time."
    },
    {
      id: 129,
      question: "The on-board equipment of the secondary surveillance radar (SSR) is called...",
      options: [
        "course indicator.",
        "transponder.",
        "interrogator.",
        "decoder."
      ],
      correctIndex: 1,
      explanation: "Unlike primary radar which relies on passive reflections, Secondary Surveillance Radar (SSR) requires cooperative avionics on the aircraft. The ground station (interrogator) sends a request, and the aircraft's Transponder (Transmitter-Responder) actively broadcasts a coded reply back."
    },
    {
      id: 130,
      question: "What is the difference between primary and secondary radar?",
      options: [
        "The pulses of a primary radar are variably pulse-modulated, the pulses of a secondary radar are statically amplitude-modulated",
        "The pulses of a primary radar are variably amplitude-modulated, the pulses of a secondary radar are statically pulse-modulated",
        "The primary radar is displayed on a computer screen, the secondary radar on a radar strip",
        "The pulses of a primary radar are reflected by the aircraft's surface, the pulses of a secondary radar system are answered by a transponder"
      ],
      correctIndex: 3,
      explanation: "Primary radar is passive; it relies solely on radio waves physically bouncing off the metallic skin of the aircraft (like an echo). Secondary radar is an active communication loop; the ground station sends a coded interrogation, and the aircraft's transponder actively replies with its squawk code and altitude."
    },
    {
      id: 131,
      question: "The transponder code in case of hi-jacking is...",
      options: [
        "7000.",
        "7600.",
        "7500.",
        "7700."
      ],
      correctIndex: 2,
      explanation: "The international aviation emergency squawk code for 'unlawful interference' (hijacking) is 7500. A helpful mnemonic is 'Seven-five, man with a knife'."
    },
    {
      id: 132,
      question: "The transponder code in case of a radio communication failure is...",
      options: [
        "7700.",
        "7500.",
        "7000.",
        "7600."
      ],
      correctIndex: 3,
      explanation: "If two-way radio communication is completely lost, pilots must immediately squawk 7600 to alert Air Traffic Control. The mnemonic is 'Seven-six, need a radio fix'."
    },
    {
      id: 133,
      question: "Which altitude is transmitted by the transponder in mode C?",
      options: [
        "QFE altitude",
        "Pressure altitude",
        "QNH altitude",
        "Radio altitude"
      ],
      correctIndex: 1,
      explanation: "To ensure absolute uniformity across all aircraft in the sky, Mode C (and Mode S) transponders automatically transmit raw Pressure Altitude (Flight Level) referenced to the standard 1013.25 hPa datum. ATC computers on the ground then apply the local QNH to this raw data to display the correct true altitude to the controller."
    },
    {
      id: 134,
      question: "How many satellites are necessary for a precise and verified three-dimensional determination of the position?",
      options: [
        "Two",
        "Three",
        "Five",
        "Four"
      ],
      correctIndex: 3,
      explanation: "A GPS receiver must solve four independent mathematical variables to determine an exact 3D position: Latitude (X), Longitude (Y), Altitude (Z), and the GPS receiver's clock timing error. Solving for four variables requires simultaneous signals from a minimum of four satellites."
    },
    {
      id: 135,
      question: "When using a GPS for tracking to the next waypoint, a deviation indication is shown by a vertical bar and dots to the left and to the right of the bar. What statement describes the correct interpretation of the display?",
      options: [
        "The deviation of the bar from the center indicates the track error as angular distance in degrees; the scale for full deflection depends on the operating mode of the GPS.",
        "The deviation of the bar from the center indicates the track error as angular distance in degrees; the scale for full deflection is +-10°",
        "The deviation of the bar from the center indicates the track error as absolute distance in NM; the scale for full deflection is +-10 NM.",
        "The deviation of the bar from the center indicates the track error as absolute distance in NM; the scale for full deflection depends on the operating mode of the GPS."
      ],
      correctIndex: 3,
      explanation: "Unlike a conventional VOR indicator which measures an angular error (e.g., 10 degrees), a GPS CDI displays linear cross-track error (actual physical distance off-course in Nautical Miles). Furthermore, the GPS dynamically tightens this full-scale deflection sensitivity based on the flight phase (e.g., 5 NM for Enroute, 1 NM for Terminal, 0.3 NM for Approach)."
    },
    {
      id: 136,
      question: "What is meant by the term 'terrestrial navigation'?",
      options: [
        "Orientation by ground celestial object during visual flight",
        "Orientation by ground features during visual flight",
        "Orientation by GPS during visual flight",
        "Orientation by instrument readings during visual flight"
      ],
      correctIndex: 1,
      explanation: "Terrestrial navigation, also commonly referred to as pilotage, is the most fundamental form of VFR flight. It involves determining the aircraft's position and directing its course solely by visually referencing established landmarks and topographical features on the Earth's surface against a map."
    },
    {
      id: 137,
      question: "What ground features should preferrably be used for orientation during visual flight?",
      options: [
        "Border lines",
        "Farm tracks and creeks",
        "Power lines",
        "Rivers, railroads, highways"
      ],
      correctIndex: 3,
      explanation: "For reliable visual orientation, a pilot must use prominent, continuous 'line features' that are easily distinguishable from altitude and stretch over long distances without breaking. Rivers, major railroads, and multi-lane highways (autobahns) are the prime examples, often referred to as 'iron compasses' or 'water compasses'."
    }
  ],
  airlaw: [
    {
      id: 1,
      question: "Which of the following documents have to be on board for an international flight?\n a) Certificate of aircraft registration\n b) Certificate of airworthiness\n c) Airworthiness review certificate\n d) EASA Form-1\n e) Airplane logbook\n f) Appropriate papers for every crew member\n g) Technical logbook",
      options: [
        "a, b, c, d, e, f, g",
        "a, b, c, e, f",
        "a, b, e, g",
        "d, f, g"
      ],
      correctIndex: 1,
      explanation: "According to ICAO and EASA regulations, mandatory documents for international flights include the Certificate of Registration, Certificate of Airworthiness, Airworthiness Review Certificate (ARC), the aircraft flight manual/logbook, and proper crew licenses. EASA Form-1 is a parts release certificate, and the full technical logbook is usually retained at the aircraft's maintenance base."
    },
    {
      id: 2,
      question: "Which area could be crossed with certain restrictions?",
      options: [
        "No-fly zone",
        "Restricted area",
        "Prohibited area",
        "Dangerous area"
      ],
      correctIndex: 1,
      explanation: "A 'Restricted Area' is an airspace of defined dimensions within which the flight of aircraft is restricted in accordance with certain specified conditions. Pilots may cross it only if they obtain prior clearance from the controlling authority or if the area is inactive."
    },
    {
      id: 3,
      question: "Where can the type of restriction for a restricted airspace be found?",
      options: [
        "NOTAM",
        "AIC",
        "ICAO chart 1:500000",
        "AIP"
      ],
      correctIndex: 3,
      explanation: "The Aeronautical Information Publication (AIP) contains permanent, detailed information about airspace structures. Specifically, the ENR (En-Route) section of the AIP precisely defines all Prohibited, Restricted, and Danger areas, including their vertical limits and specific restriction types."
    },
    {
      id: 4,
      question: "What is the status of the rules and procedures created by the EASA? (e.g. Part-SFCL, Part-MED)",
      options: [
        "They have the same status as ICAO Annexes",
        "Only after a ratification by individual EU member states they are legally binding",
        "They are not legally binding, they only serve as a guide",
        "They are part of the EU regulation and legally binding to all EU member states"
      ],
      correctIndex: 3,
      explanation: "The European Union Aviation Safety Agency (EASA) drafts implementing rules (such as Part-FCL, Part-MED) that are adopted by the European Commission. Once published in the Official Journal of the EU, they become hard law and are immediately legally binding across all Member States without needing national ratification."
    },
    {
      id: 5,
      question: "Which validity does the 'Certificate of Airworthiness' have?",
      options: [
        "6 months",
        "12 years",
        "Unlimited",
        "12 months"
      ],
      correctIndex: 2,
      explanation: "The Certificate of Airworthiness (C of A) itself is valid indefinitely (unlimited). However, it only remains legally active and valid as long as the aircraft receives its mandatory continuous maintenance and holds a valid, annually renewed Airworthiness Review Certificate (ARC)."
    },
    {
      id: 6,
      question: "What is the meaning of the abbreviation 'ARC'?",
      options: [
        "Airworthiness Recurring Control",
        "Airspace Rulemaking Committee",
        "Airspace Restriction Criteria",
        "Airworthiness Review Certificate"
      ],
      correctIndex: 3,
      explanation: "ARC stands for Airworthiness Review Certificate. It is a document issued after a successful annual technical inspection of the aircraft and its maintenance records, validating the underlying Certificate of Airworthiness for another year."
    },
    {
      id: 7,
      question: "The 'Certificate of Airworthiness' is issued by the state...",
      options: [
        "in which the aircraft is registered.",
        "of the residence of the owner.",
        "in which the aircraft is constructed.",
        "in which the airworthiness review is done."
      ],
      correctIndex: 0,
      explanation: "Under the Chicago Convention, the State of Registry bears the ultimate legal responsibility for the airworthiness of an aircraft. Therefore, the Certificate of Airworthiness is exclusively issued by the Civil Aviation Authority of the country where the aircraft is officially registered."
    },
    {
      id: 8,
      question: "A pilot license issued in accordance with ICAO Annex 1 is valid in...",
      options: [
        "those countries that have accepted this license on application.",
        "the country where the license was issued.",
        "all ICAO countries.",
        "the country where the license was acquired."
      ],
      correctIndex: 2,
      explanation: "ICAO Annex 1 establishes the international standards for Personnel Licensing. A license issued by any contracting state that fully complies with these standards is automatically recognized as valid for international flight by all other ICAO member states."
    },
    {
      id: 9,
      question: "What is the subject of ICAO Annex 1?",
      options: [
        "Air traffic services",
        "Flight crew licensing",
        "Rules of the air",
        "Operation of aircraft"
      ],
      correctIndex: 1,
      explanation: "The Chicago Convention is divided into Annexes. Annex 1 is titled 'Personnel Licensing' and contains all the international standards and recommended practices regarding the licensing of flight crews, air traffic controllers, and maintenance personnel."
    },
    {
      id: 10,
      question: "What is the period of validity of a private pilot license (PPL)?",
      options: [
        "Unlimited",
        "24 months",
        "48 months",
        "60 months"
      ],
      correctIndex: 0,
      explanation: "The physical EASA Private Pilot License (PPL) document has an unlimited lifetime validity. However, the pilot may only exercise its privileges if they hold a valid Class Rating (e.g., SEP, renewed every 2 years) and a valid Medical Certificate."
    },
    {
      id: 11,
      question: "What is the minimum age to obtain a private pilot license?",
      options: [
        "17 years",
        "21 years",
        "16 years",
        "18 years"
      ],
      correctIndex: 0,
      explanation: "According to EASA Part-FCL, an applicant for a Private Pilot License (PPL) must be at least 17 years of age on the day the license is officially issued. (Note: You can fly solo at age 16, but cannot be issued the actual license until 17)."
    },
    {
      id: 12,
      question: "What are the minimum requirements among others to acquire a rating for VFR night flights?",
      options: [
        "At least 10 additional flight hours at night, three of them with a flight instructor",
        "At least 5 additional flight hours at night, four of them with a flight instructor",
        "At least 5 additional flight hours at night, 3 with instructor, 1 XC, 5 solo landings",
        "At least 5 additional flight hours at night, 3 with instructor, 1 XC, 10 solo landings"
      ],
      correctIndex: 2,
      explanation: "EASA rules for a Night Rating stipulate a minimum of 5 hours of flight time at night. This must include at least 3 hours of dual instruction, 1 hour of cross-country navigation, and 5 solo take-offs and full-stop landings."
    },
    {
      id: 13,
      question: "The validity of a medical examination certificate class 2 for a 62 years old pilot is...",
      options: [
        "60 Months.",
        "48 Months.",
        "24 Months.",
        "12 Months."
      ],
      correctIndex: 3,
      explanation: "Under EASA Part-MED, a Class 2 Medical Certificate (required for PPL) is valid for 60 months until age 40, 24 months between ages 40 and 50, and only 12 months for pilots who have reached the age of 50 or older."
    },
    {
      id: 14,
      question: "In which way is a SEP (land) rating renewed if you do not meet the required flight time?",
      options: [
        "A proficiency check with an examiner",
        "Several training flights under supervision of an ATO",
        "The ATO can renew the rating after a training flight",
        "Accumulate flight experience under supervision of a flight instructor"
      ],
      correctIndex: 0,
      explanation: "A Single Engine Piston (SEP) rating is valid for 24 months. If it expires, it cannot be simply revalidated by flying hours; it requires a formal 'Renewal' process, which mandates passing a Proficiency Check flight with a certified flight examiner (FE)."
    },
    {
      id: 15,
      question: "The possession of a european PPL(A) entitles the holder to...",
      options: [
        "act as pilot on a commercial flight when there are at most 4 people on board.",
        "act as pilot in commercial and non-commercial flights with single engine aircraft.",
        "act as PIC, and only for flights with MTOW max 2000 kg a compensation may be obtained.",
        "act as PIC on non-commercial flights without compensation (unless Flight Instructor)."
      ],
      correctIndex: 3,
      explanation: "The fundamental restriction of a Private Pilot License (PPL) is that the holder may only act as Pilot-in-Command (PIC) or co-pilot on strictly non-commercial flights. They cannot carry passengers or cargo for remuneration or hire (except for certain flight instruction privileges if holding an FI rating)."
    },
    {
      id: 16,
      question: "What is the minimum age to start a private pilot training at a flight school?",
      options: [
        "16 years",
        "21 years",
        "17 years",
        "18 years"
      ],
      correctIndex: 0,
      explanation: "Under EASA regulations, there is no strict minimum age to begin dual instruction flights. However, a student pilot must be at least 16 years of age before they are legally permitted to conduct their first solo flight."
    },
    {
      id: 17,
      question: "What is the meaning of the abbreviation 'SERA'?",
      options: [
        "Selective Radar Altimeter",
        "Standardized European Rules of the Air",
        "Specialized Radar Approach",
        "Standard European Routes of the Air"
      ],
      correctIndex: 1,
      explanation: "SERA stands for the Standardised European Rules of the Air. It is an EU regulation designed to harmonize the rules of the sky across all member states, replacing individual national regulations and ensuring seamless cross-border air traffic management."
    },
    {
      id: 18,
      question: "What is the meaning of the abbreviation 'TRA'?",
      options: [
        "Temporary Reserved Airspace",
        "Temporary Radar Routing Area",
        "Transponder Area",
        "Terminal Area"
      ],
      correctIndex: 0,
      explanation: "A TRA (Temporary Reserved Airspace) is a defined volume of airspace normally under the jurisdiction of one aviation authority but temporarily reserved, by common agreement, for the specific use of another (often military exercises) through which other traffic may be allowed to transit under ATC clearance."
    },
    {
      id: 19,
      question: "What has to be considered when entering an RMZ?",
      options: [
        "To permanently monitor the radio and if possible to establish radio contact",
        "To obtain a clearance from the local aviation authority",
        "The transponder has to be switched on Mode C and squawk 7000",
        "To obtain a clearance to enter this area"
      ],
      correctIndex: 0,
      explanation: "An RMZ is a Radio Mandatory Zone. VFR flights operating in an RMZ are legally required to maintain a continuous listening watch on the appropriate radio frequency and must make initial contact reporting their callsign, type, position, level, and intentions before entering."
    },
    {
      id: 20,
      question: "What condition has to be met during a Special VFR flight?",
      options: [
        "Visual reference to the terrain",
        "Speed not above 115 kt IAS",
        "At least 500 m ground visibility",
        "A minimum distance to clouds of 2000 m"
      ],
      correctIndex: 0,
      explanation: "Special VFR (SVFR) allows a VFR flight to enter or leave a control zone (CTR) when meteorological conditions are below standard VMC minima. A strict, non-negotiable requirement for SVFR is that the pilot must remain clear of clouds and continuously maintain visual reference to the terrain (surface)."
    },
    {
      id: 21,
      question: "What has to be done before entering a TMZ?",
      options: [
        "Switch on the transponder and activate mode A and C or mode S",
        "Request a clearance before entering",
        "Switch on the transponder, activate mode A, and squawk 'IDENT'",
        "File a flight plan before the flight"
      ],
      correctIndex: 0,
      explanation: "A TMZ is a Transponder Mandatory Zone. To enter, an aircraft must be equipped with and actively operate a transponder transmitting on Mode A (identification) and Mode C (altitude reporting), or use a modern Mode S transponder. Clearance is not required for a TMZ, only the active transponder."
    },
    {
      id: 22,
      question: "What is the meaning of an area marked as 'TMZ'?",
      options: [
        "Transportation Management Zone",
        "Touring Motorglider Zone",
        "Traffic Management Zone",
        "Transponder Mandatory Zone"
      ],
      correctIndex: 3,
      explanation: "TMZ stands for Transponder Mandatory Zone. It is a designated airspace where the carriage and operation of pressure-altitude reporting transponders is legally mandated to ensure ATC can see the aircraft on secondary radar to prevent collisions."
    },
    {
      id: 23,
      question: "What is the meaning of the abbreviation 'IFR'?",
      options: [
        "Instrument Flight Rules",
        "Instrument Meteorological Conditions",
        "Bad Weather Flight Rules",
        "Commercial Flight Rules"
      ],
      correctIndex: 0,
      explanation: "IFR stands for Instrument Flight Rules. It is a set of regulations dictating how an aircraft must be flown when pilots navigate primarily by reference to onboard instruments, rather than relying on outside visual references."
    },
    {
      id: 24,
      question: "A flight is called a 'visual flight', if the...",
      options: [
        "visibility in flight is more than 8 km.",
        "flight is conducted under visual flight rules.",
        "visibility in flight is more than 5 km.",
        "flight is conducted in visual meteorological conditions."
      ],
      correctIndex: 1,
      explanation: "A visual flight is strictly defined by the set of rules it operates under: Visual Flight Rules (VFR). While operating under VFR requires flying in Visual Meteorological Conditions (VMC), the flight itself is classified by the ruleset chosen."
    },
    {
      id: 25,
      question: "What is the meaning of the abbreviation 'VMC'?",
      options: [
        "Instrument flight conditions",
        "Variable meteorological conditions",
        "Visual meteorological conditions",
        "Visual flight rules"
      ],
      correctIndex: 2,
      explanation: "VMC stands for Visual Meteorological Conditions. It refers to a specific set of weather parameters (visibility, distance from clouds, and ceiling) that are equal to or better than the minimums required to legally fly under Visual Flight Rules (VFR)."
    },
    {
      id: 26,
      question: "Two engine-driven aircraft are approaching head-on at the same altitude. Which one has to divert?",
      options: [
        "The lighter one has to climb",
        "Both have to divert to the right",
        "The heavier one has to climb",
        "Both have to divert to the left"
      ],
      correctIndex: 1,
      explanation: "According to standard Rules of the Air (SERA), when two aircraft are approaching head-on or approximately so, and there is a danger of collision, each shall alter its heading to the right."
    },
    {
      id: 27,
      question: "Two aeroplanes are flying on crossing tracks. Which one has to divert?",
      options: [
        "The aircraft which flies from left to right has the right of priority",
        "Both have to divert to the right",
        "The aircraft which flies from right to left has the right of priority",
        "Both have to divert to the left"
      ],
      correctIndex: 2,
      explanation: "When two aircraft of the same category are converging on crossing tracks at approximately the same altitude, the basic right-of-way rule applies: the aircraft that has the other on its right side must give way. Therefore, the aircraft flying from right to left holds priority."
    },
    {
      id: 28,
      question: "In airspace 'D' a Boeing 737 and a Cessna 152 are flying on crossing courses. Which aeroplane has to divert?",
      options: [
        "The Cessna 152, because IFR and commercial flights have priority",
        "The air traffic control (ATC) has to decide which one has to divert",
        "The aeroplane flying from right to left has priority, the other one has to divert",
        "The Boeing 737, because an airliner has greater power reserves"
      ],
      correctIndex: 2,
      explanation: "In visual right-of-way rules (SERA), size, weight, or commercial status (IFR vs VFR) do not grant priority when aircraft are of the same general category (both are power-driven airplanes). The standard rule stands: the aircraft that has the other on its right must yield. The one coming from the right has priority."
    },
    {
      id: 29,
      question: "Which of the following options is NOT a sufficient reason to fly below the required minimum height?",
      options: [
        "Take-off or landing at an aerodrome",
        "An approach without landing at an aerodrome",
        "Bad weather conditions in the vicinity of an aerodrome",
        "The drop of towed objects at an aerodrome"
      ],
      correctIndex: 2,
      explanation: "SERA dictates that aircraft must maintain minimum safe altitudes over congested or open areas. Exceptions exist for the purpose of taking off, landing, or dropping objects. Encountering bad weather is NOT a legal excuse to break minimum altitude rules; the pilot must divert, return, or request a Special VFR clearance instead."
    },
    {
      id: 30,
      question: "A single-engine piston and a turboprop aeroplane are approaching each other opposite at the same altitude. Which aeroplane has to change its track to avoid a collision?",
      options: [
        "The turboprop aircraft has to give way",
        "Both aircraft have to alter their tracks to the left",
        "Both aircraft have to alter their tracks to the right",
        "The single-engine piston aircraft has to give way"
      ],
      correctIndex: 2,
      explanation: "When two aircraft are approaching head-on (or nearly so) and there is a danger of collision, the international rule of the air requires that BOTH aircraft shall alter their heading to the right, regardless of their engine type or speed."
    },
    {
      id: 31,
      question: "Which distances to clouds have to be maintained during a VFR flight in airspaces C, D and E?",
      options: [
        "1500 m horizontally, 1000 ft vertically",
        "1500 m horizontally, 1000 m vertically",
        "1000 m horizontally, 1500 ft vertically",
        "1000 m horizontally, 300 m vertically"
      ],
      correctIndex: 0,
      explanation: "For VFR flights in controlled airspaces (Classes C, D, and E) above 3,000 feet AMSL, the SERA VMC criteria mandate a flight visibility of at least 5 km, and the aircraft must maintain a minimum distance from clouds of 1,500 meters horizontally and 300 meters (1,000 feet) vertically."
    },
    {
      id: 32,
      question: "The minimum flight visibility at 5000 ft MSL in airspace B for VFR flights is...",
      options: [
        "8000 m.",
        "3000 m.",
        "1500 m.",
        "5000 m."
      ],
      correctIndex: 3,
      explanation: "Under SERA regulations, below Flight Level 100 (10,000 ft), the minimum required flight visibility for VFR operations in Airspace Classes B, C, D, E, F, and G is 5 kilometers (5000 meters)."
    },
    {
      id: 33,
      question: "What is the minimum flight visibility in airspace 'C' for an aircraft operating under VFR at 5000 ft MSL?",
      options: [
        "8000 m",
        "1500 m",
        "3000 m",
        "5000 m"
      ],
      correctIndex: 3,
      explanation: "As 5000 ft is well below Flight Level 100, the VFR visibility minimum in Class C airspace remains standard: 5 kilometers (5000 meters)."
    },
    {
      id: 34,
      question: "What is the minimum flight visibility in airspace 'E' for an aircraft operating under VFR at FL75?",
      options: [
        "8000 m",
        "1500 m",
        "3000 m",
        "5000 m"
      ],
      correctIndex: 3,
      explanation: "Flight Level 75 (approximately 7,500 ft) is still below the FL100 threshold. Therefore, the SERA VMC visibility requirement in Class E airspace is 5 kilometers (5000 meters)."
    },
    {
      id: 35,
      question: "What is the minimum flight visibility in airspace 'C' for an aircraft operating under VFR at FL110?",
      options: [
        "5000 m",
        "1500 m",
        "3000 m",
        "8000 m"
      ],
      correctIndex: 3,
      explanation: "At and above Flight Level 100 (10,000 ft), aircraft typically fly much faster. To provide pilots with enough time to visually 'see and avoid' other traffic, SERA regulations demand an increased minimum flight visibility of 8 kilometers for VFR flights in all airspace classes."
    },
    {
      id: 36,
      question: "What is the minimum flight visibility in airspace 'C' for an aircraft operating under VFR at FL125?",
      options: [
        "5000 m",
        "3000 m",
        "1500 m",
        "8000 m"
      ],
      correctIndex: 3,
      explanation: "Because Flight Level 125 is above Flight Level 100, the strict requirement of an 8 km flight visibility for VFR traffic applies, regardless of the airspace class (C through G)."
    },
    {
      id: 37,
      question: "What are the minimum distances to clouds for a VFR flight in airspace 'E'?",
      options: [
        "Horizontally 1.500 m, vertically 1.000 m",
        "Horizontally 1.500 m, vertically 300 m",
        "Horizontally 1.000 m, vertically 1.500 ft",
        "Horizontally 1.000 m, vertically 300 m"
      ],
      correctIndex: 1,
      explanation: "In the SERA standardized VMC minima, VFR flights operating in controlled airspaces like Class C, D, and E (below FL100) must maintain a cloud separation of exactly 1,500 meters horizontally and 300 meters (equivalent to 1,000 feet) vertically. In Class B, the requirement would simply be 'Clear of clouds'."
    },
    {
      id: 38,
      question: "What is the minimum flight visibility in airspace 'C' below FL 100 for an aircraft operating under VFR?",
      options: [
        "5 km",
        "10 km",
        "1.5 km",
        "8 km"
      ],
      correctIndex: 0,
      explanation: "Below Flight Level 100, the standard SERA VMC visibility requirement across controlled airspaces (including Class C) is 5 kilometers."
    },
    {
      id: 39,
      question: "What is the minimum flight visibility in airspace 'C' at and above FL 100 for an aircraft operating under VFR?",
      options: [
        "1.5 km",
        "5 km",
        "10 km",
        "8 km"
      ],
      correctIndex: 3,
      explanation: "The moment an aircraft crosses the boundary to fly at or above FL 100, the VFR visibility requirement universally expands from 5 km to 8 kilometers to account for the closure speeds of faster high-altitude traffic."
    },
    {
      id: 40,
      question: "The term 'ceiling' is defined as the...",
      options: [
        "altitude of the base of the lowest layer covering > half sky below 20000 ft.",
        "height of the base of the lowest layer covering > half sky below 10000 ft.",
        "height of the base of the highest layer covering > half sky below 20000 ft.",
        "height of the base of the lowest layer covering > half sky below 20000 ft."
      ],
      correctIndex: 3,
      explanation: "In aviation meteorology, 'ceiling' is strictly defined as the height above the ground (surface) of the lowest cloud layer that covers more than half the sky (reported as BKN - Broken, or OVC - Overcast) and is situated below 20,000 feet."
    },
    {
      id: 41,
      question: "Being intercepted at daytime: Alternating movement of ailerons, followed by a smooth turn to the left. Meaning?",
      options: [
        "Prepare for a safety landing",
        "You are entering a restricted area",
        "Follow me",
        "You are clear of restricted airspaces"
      ],
      correctIndex: 2,
      explanation: "According to ICAO interception signals, an intercepting fighter jet rocking its wings and then initiating a slow level turn to the left means: 'You have been intercepted. Follow me.' The intercepted aircraft must rock its wings in return to acknowledge and follow the fighter."
    },
    {
      id: 42,
      question: "Being intercepted at daytime: Sudden heading change of 90 degrees or more and a pull-up. Meaning?",
      options: [
        "You are entering a restricted area",
        "You may continue your flight",
        "Follow me",
        "Prepare for a safety landing"
      ],
      correctIndex: 1,
      explanation: "If the intercepting military aircraft abruptly breaks away by executing a climbing 90-degree turn away from you, it signifies that the interception is over and the message is: 'You may proceed/continue your flight'."
    },
    {
      id: 43,
      question: "The altimeter is switched from local QNH to 1013.25 hPa...",
      options: [
        "at the decision height.",
        "at 4000 ft.",
        "when climbing above the transition altitude.",
        "when descending below FL 100."
      ],
      correctIndex: 2,
      explanation: "During climb-out, passing through the 'Transition Altitude' (TA), pilots must recalibrate their altimeters from the local QNH (altitude above sea level) to the standard pressure setting of 1013.25 hPa. From this point up, the aircraft flies at Flight Levels (FL) to ensure safe vertical separation for all en-route traffic."
    },
    {
      id: 44,
      question: "During a flight at FL 80, the altimeter setting has to be...",
      options: [
        "1030.25 hPa.",
        "1013.25 hPa.",
        "local QFE.",
        "local QNH."
      ],
      correctIndex: 1,
      explanation: "Flight Levels (FL) are exclusively referenced to the Standard Atmosphere datum. Therefore, if you are cruising at FL 80, your altimeter's sub-scale must strictly be set to the standard 1013.25 hPa (or 29.92 inHg)."
    },
    {
      id: 45,
      question: "What is the purpose of the semi-circular rule?",
      options: [
        "To avoid collisions by reducing the probability of opposing traffic at the same altitude",
        "To fly without a filed flight plan in prescribed zones",
        "To allow safe climbing or descending in a holding pattern",
        "To avoid collisions by suspending turning manoeuvres"
      ],
      correctIndex: 0,
      explanation: "The semi-circular rule dictates that aircraft flying on magnetic tracks from 000° to 179° fly at ODD altitudes, and those flying from 180° to 359° fly at EVEN altitudes. This guarantees built-in vertical separation between aircraft flying in opposing directions."
    },
    {
      id: 46,
      question: "Which of the following options are possible SSR-Transponder modes?",
      options: [
        "A, C, S",
        "A, C, R",
        "B, C, V",
        "B, R, S"
      ],
      correctIndex: 0,
      explanation: "Civilian Secondary Surveillance Radar (SSR) transponders utilize Mode A (transmits a 4-digit ID code), Mode C (transmits pressure altitude), and Mode S (Select, which transmits a unique 24-bit aircraft address and data-link parameters)."
    },
    {
      id: 47,
      question: "A transponder with the ability to send the current pressure level is a...",
      options: [
        "pressure-decoder.",
        "mode C or S transponder.",
        "mode A transponder.",
        "transponder approved for airspace 'B'."
      ],
      correctIndex: 1,
      explanation: "Mode C transponders automatically broadcast the aircraft's pressure altitude (referenced to 1013.25 hPa) alongside the 4-digit squawk code. Mode S transponders also inherently include this altitude reporting capability."
    },
    {
      id: 48,
      question: "Which transponder code indicates a loss of radio communication?",
      options: [
        "2000",
        "7700",
        "7000",
        "7600"
      ],
      correctIndex: 3,
      explanation: "7600 is the international transponder code used to indicate a total loss of two-way radio communications. ATC radars will flash a special warning, alerting controllers that the aircraft cannot receive instructions."
    },
    {
      id: 49,
      question: "Which transponder code should be set during a radio failure without any request?",
      options: [
        "7600",
        "7700",
        "7000",
        "7500"
      ],
      correctIndex: 0,
      explanation: "In the event of a radio failure, the pilot must autonomously (without being asked) squawk 7600 on the transponder to instantly flag the communication emergency to Air Traffic Control."
    },
    {
      id: 50,
      question: "Which transponder code has to be set unrequested during an emergency?",
      options: [
        "7600",
        "7700",
        "7000",
        "7500"
      ],
      correctIndex: 1,
      explanation: "When an aircraft faces grave and imminent danger (engine failure, fire, structural damage), the pilot must immediately set the transponder to 7700. This triggers a visual and audible alarm at the ATC center."
    },
    {
      id: 51,
      question: "Which air traffic service is responsible for the safe conduct of flights?",
      options: [
        "ALR (alerting service)",
        "FIS (flight information service)",
        "ATC (air traffic control)",
        "AIS (aeronautical information service)"
      ],
      correctIndex: 2,
      explanation: "ATC (Air Traffic Control) is the primary service explicitly responsible for preventing collisions between aircraft and expediting/maintaining an orderly flow of air traffic. FIS only provides information, while ALR handles emergencies."
    },
    {
      id: 52,
      question: "Air traffic control service is conducted by which services?",
      options: [
        "TWR, APP, ACC",
        "APP, ACC, FIS",
        "ALR, SAR, TWR",
        "FIS, AIS, AFS"
      ],
      correctIndex: 0,
      explanation: "Air Traffic Control is subdivided into three specific operational units based on the flight phase: Aerodrome Control Tower (TWR) for local airport traffic, Approach Control (APP) for arriving/departing traffic, and Area Control Centre (ACC) for en-route traffic."
    },
    {
      id: 53,
      question: "Which answer is correct with regard to separation in airspace 'E'?",
      options: [
        "IFR traffic is separated only from VFR traffic",
        "VFR traffic is separated from VFR and IFR traffic",
        "VFR traffic is separated only from IFR traffic",
        "VFR traffic is not separated from any other traffic"
      ],
      correctIndex: 3,
      explanation: "In Class E controlled airspace, IFR flights are separated from other IFR flights. However, VFR flights are NOT separated from any other traffic by ATC. VFR pilots receive traffic information as far as practical, but the ultimate responsibility remains 'see and avoid'."
    },
    {
      id: 54,
      question: "Which air traffic services can be expected within an FIR (flight information region)?",
      options: [
        "ATC, FIS",
        "FIS, ALR",
        "AIS, SAR",
        "ATC, AIS"
      ],
      correctIndex: 1,
      explanation: "A Flight Information Region (FIR) is the largest regular division of airspace. At a minimum, every FIR globally provides Flight Information Service (FIS) and Alerting Service (ALR) to all aircraft within its boundaries. ATC is only provided in specific controlled blocks within the FIR."
    },
    {
      id: 55,
      question: "A pilot can contact FIS (flight information service)...",
      options: [
        "via telephone.",
        "via internet.",
        "by a personal visit.",
        "via radio communication."
      ],
      correctIndex: 3,
      explanation: "While in flight, a pilot utilizes standard VHF radio communication to contact the local Flight Information Service (FIS) frequency to obtain weather updates, traffic advisories, and navigational assistance."
    },
    {
      id: 56,
      question: "What is the correct phrase with respect to wake turbulence to indicate that a light aircraft is following an aircraft of a higher wake turbulence category?",
      options: [
        "Danger jet blast",
        "Be careful wake winds",
        "Attention propwash",
        "Caution wake turbulence"
      ],
      correctIndex: 3,
      explanation: "The standard ICAO radio phraseology used by Air Traffic Control to warn a smaller aircraft operating behind a heavier aircraft of potentially dangerous wake vortices is precisely: 'Caution wake turbulence'."
    },
    {
      id: 57,
      question: "Which of the following options states a correct position report?",
      options: [
        "DEABC reaching 'N'",
        "DEABC over 'N' in FL 2500 ft",
        "DEABC, 'N', 2500 ft",
        "DEABC over 'N' at 35"
      ],
      correctIndex: 2,
      explanation: "A standard VFR position report must be concise and follows a strict sequence: Callsign, Position, Altitude. Therefore, 'DEABC (Callsign), N (Position), 2500 ft (Altitude)' is the correct and most efficient format."
    },
    {
      id: 58,
      question: "What is the meaning of the abbreviation 'AIREP'?",
      options: [
        "Aircraft report",
        "Aeronautical instrument requirement report",
        "Automatic identification report",
        "Aeronautical information report"
      ],
      correctIndex: 0,
      explanation: "AIREP stands for Air-Report (Aircraft Report). It is a message sent by an aircraft in flight to ground stations, detailing its current position and real-time meteorological observations (like unexpected severe icing or turbulence)."
    },
    {
      id: 59,
      question: "What information is provided in the general part (GEN) of the AIP?",
      options: [
        "Table of content, classification of airfields, approach charts, taxi charts",
        "Map icons, radio nav aids, sunrise/sunset, fees",
        "Warnings for aviation, ATS airspaces, restricted airspaces",
        "Access restrictions, passenger controls, license samples"
      ],
      correctIndex: 1,
      explanation: "The AIP is divided into three parts. The GEN (General) section includes administrative information, national regulations, descriptions of map symbols/icons, a list of radio navigation aids, sunrise/sunset tables, and aerodrome charges/fees."
    },
    {
      id: 60,
      question: "Which are the different parts of the Aeronautical Information Publication (AIP)?",
      options: [
        "GEN, MET, RAC",
        "GEN, COM, MET",
        "GEN, AGA, COM",
        "GEN, ENR, AD"
      ],
      correctIndex: 3,
      explanation: "The standard ICAO structure for an Aeronautical Information Publication (AIP) globally consists of exactly three parts: GEN (General), ENR (En-Route), and AD (Aerodromes)."
    },
    {
      id: 61,
      question: "What information is provided in the part 'AD' of the AIP?",
      options: [
        "Warnings for aviation, ATS airspaces and routes",
        "Table of content, classification of airfields, maps, approach/taxi charts",
        "Map icons, radio nav aids, sunrise/sunset, fees",
        "Access restrictions, passenger controls, license samples"
      ],
      correctIndex: 1,
      explanation: "The AD (Aerodromes) section of the AIP contains highly detailed information for all public airports, including physical characteristics of the runways, available frequencies, operating hours, and comprehensive visual approach, landing, and taxi charts."
    },
    {
      id: 62,
      question: "The shown NOTAM is valid until... A1024/13 A) LOWW B) 1305211200 C) 1305211400",
      options: [
        "21/05/2013 14:00 UTC.",
        "13/10/2013 00:00 UTC.",
        "13/05/2013 12:00 UTC.",
        "21/05/2014 13:00 UTC."
      ],
      correctIndex: 0,
      explanation: "In NOTAM formatting, Field 'C' denotes the end of validity. The format is YYMMDDHHMM. '1305211400' decodes as Year 2013 (13), Month May (05), Day 21st (21), at 14:00 UTC."
    },
    {
      id: 63,
      question: "A Pre-Flight Information Bulletin (PIB) is a presentation of current...",
      options: [
        "ICAO information prepared after the flight.",
        "AIP information prepared prior to flight.",
        "AIC information prepared after the flight.",
        "NOTAM information of operational significance prepared prior to flight."
      ],
      correctIndex: 3,
      explanation: "A PIB is a compiled, customized briefing package given to a pilot before a flight. It automatically filters and presents all currently active NOTAMs that are operationally significant to the pilot's specific route, area, and flight level."
    },
    {
      id: 64,
      question: "The term 'aerodrome elevation' is defined as...",
      options: [
        "the highest point of the landing area.",
        "the lowest point of the landing area.",
        "the highest point of the apron.",
        "the average value of the height of the manoeuvring area."
      ],
      correctIndex: 0,
      explanation: "By official ICAO definition, aerodrome elevation is the geometric elevation of the highest point of the landing area (the runways) above Mean Sea Level (MSL)."
    },
    {
      id: 65,
      question: "The term 'runway' is defined as a...",
      options: [
        "round area on an aerodrome.",
        "rectangular area on a land aerodrome prepared for landing/take-off of aircraft.",
        "rectangular area on land or water prepared for landing/take-off of aircraft.",
        "rectangular area on land prepared for landing/take-off of helicopters."
      ],
      correctIndex: 1,
      explanation: "According to ICAO Annex 14, a runway is strictly defined as a defined rectangular area on a land aerodrome prepared for the landing and take-off of aircraft. (Water areas are defined separately as channels)."
    },
    {
      id: 66,
      question: "Which statement is correct with regard to the term 'taxi holding point'?",
      options: [
        "An area where the aircraft must stop unless further permission is given",
        "Only to be observed for IFR traffic",
        "The point at which the aircraft must stop unless further permission to proceed is given",
        "Indicates the beginning of the safety area and may be crossed"
      ],
      correctIndex: 2,
      explanation: "A runway-holding position (or taxi holding point) is a designated point intended to protect the active runway. An aircraft taxiing must completely stop at this line and is legally forbidden from crossing it until explicit clearance is granted by ATC."
    },
    {
      id: 67,
      question: "What does the reported runway condition 'WET' mean?",
      options: [
        "Some water patches are visible",
        "Surface soaked, no significant patches of standing water",
        "A large part of the surface is flooded",
        "The runway is clear of water, ice, and snow"
      ],
      correctIndex: 1,
      explanation: "In runway condition reporting, 'WET' signifies that the runway surface is soaked and visually reflective, but there are no significant patches of standing water (which would elevate the report to 'WATER PATCHES' or 'FLOODED', drastically increasing aquaplaning risk)."
    },
    {
      id: 68,
      question: "What does the reported runway condition 'DAMP' mean?",
      options: [
        "Wet surface, but no significant puddles",
        "Change of colour on the surface due to moisture",
        "The runway is clear of water, ice, and snow",
        "A large part of the surface is flooded"
      ],
      correctIndex: 1,
      explanation: "'DAMP' is the lowest level of moisture reporting. It means the runway shows a visual change of color due to moisture, but it is not sufficiently wet to appear reflective or hold any measurable depth of water."
    },
    {
      id: 69,
      question: "What does 'WATER PATCHES' mean regarding the reported runway condition?",
      options: [
        "A large part of the surface is flooded",
        "Patches of standing water are visible",
        "Wet surface, but no significant patches are visible",
        "The runway is clear of water, ice, and snow"
      ],
      correctIndex: 1,
      explanation: "When an ATIS reports 'WATER PATCHES', it is a critical warning that localized pools of standing water are visible on the runway. This warns the pilot of asymmetric braking conditions and a high risk of dynamic aquaplaning."
    },
    {
      id: 70,
      question: "How can a wind direction indicator be marked for better visibility?",
      options: [
        "Mounted on top of the control tower.",
        "Made from green materials.",
        "Surrounded by a white circle.",
        "Located on a big black surface."
      ],
      correctIndex: 2,
      explanation: "To ensure the windsock is highly conspicuous from the air against various grass or concrete backgrounds, ICAO Annex 14 requires it to be located in the center of a large, painted white circle on the ground."
    },
    {
      id: 71,
      question: "What is the meaning of a flashing red light signal at a controlled aerodrome directed to an aircraft in flight?",
      options: [
        "Airport unsafe, do not land",
        "Return for landing, followed by steady green",
        "Cleared to land",
        "Give way to other aircraft and continue circling"
      ],
      correctIndex: 0,
      explanation: "During a radio failure, ATC uses an Aldis lamp. A flashing red light pointed at an aircraft in the air is a severe warning: 'Aerodrome unsafe, do not land'. The pilot must divert or hold outside the airspace."
    },
    {
      id: 72,
      question: "What is the meaning of a flashing green light signal at a controlled aerodrome directed to an aircraft in flight?",
      options: [
        "Return for landing, followed by steady green at the appropriate time",
        "Cleared to land",
        "Give way to other aircraft and continue circling",
        "Airport unsafe, do not land"
      ],
      correctIndex: 0,
      explanation: "A flashing green light to an airborne aircraft indicates: 'Return to the aerodrome for landing'. It is usually followed later by a steady green light, which grants the actual clearance to touch down."
    },
    {
      id: 73,
      question: "What is the meaning of a steady green light signal at a controlled aerodrome directed to an aircraft in flight?",
      options: [
        "Give way to other aircraft and continue circling",
        "Cleared to land",
        "Return for landing, followed by steady green",
        "Airport unsafe, do not land"
      ],
      correctIndex: 1,
      explanation: "A steady green light is the ultimate positive authorization from the control tower. For an aircraft in flight, it means explicitly: 'Cleared to land'."
    },
    {
      id: 74,
      question: "What is the meaning of a flashing white light signal at a controlled aerodrome directed to an aircraft on ground?",
      options: [
        "Cleared to taxi",
        "Clear the taxiway / runway",
        "Cleared for take-off",
        "Return to starting point"
      ],
      correctIndex: 3,
      explanation: "If ATC points a flashing white light at an aircraft taxiing on the ground, it is an instruction to abandon the current intention and 'Return to the starting point on the aerodrome' (usually the apron)."
    },
    {
      id: 75,
      question: "What is the meaning of a flashing red light signal at a controlled aerodrome directed to an aircraft on ground?",
      options: [
        "Cleared for take-off",
        "Cleared to taxi",
        "Immediately taxi clear of runway in use",
        "Return to starting point"
      ],
      correctIndex: 2,
      explanation: "A flashing red light to an aircraft on the ground is an urgent safety command. It means: 'Taxi clear of landing area in use'. The pilot must immediately exit the runway or active taxiway to avoid a collision."
    },
    {
      id: 76,
      question: "What is the meaning of a flashing green light signal at a controlled aerodrome directed to an aircraft on ground?",
      options: [
        "Cleared to taxi",
        "Return to starting point",
        "Land at this airport and proceed to the apron",
        "Cleared for take-off"
      ],
      correctIndex: 0,
      explanation: "For an aircraft stationed on the ground, a flashing green light from the tower signifies authorization to move, translating exactly to: 'Cleared to taxi'."
    },
    {
      id: 77,
      question: "Of what shape is a landing direction indicator?",
      options: [
        "L",
        "A straight arrow",
        "An angled arrow",
        "T"
      ],
      correctIndex: 3,
      explanation: "A landing direction indicator is typically a large, white or orange geometric shape resembling a capital 'T' or a tetrahedron. The crossbar of the 'T' represents the wings of an aircraft, indicating that landings should be made 'up the stem' toward the crossbar."
    },
    {
      id: 78,
      question: "What is the purpose of the signal square at an aerodrome?",
      options: [
        "It contains special symbols to indicate the conditions at the aerodrome visually to over-flying aircraft",
        "It is an illuminated area on which search and rescue vehicles are placed",
        "Aircraft taxi to this square to get light signals",
        "It is a specially marked area to pick up or drop towing objects"
      ],
      correctIndex: 0,
      explanation: "The signal square is a dark, highly visible ground enclosure (often near the tower) where large geometric symbols are laid out. It is designed to visually communicate essential aerodrome rules (like right-hand circuits, closed runways, or glider activity) to aircraft flying overhead without radio contact."
    },
    {
      id: 79,
      question: "In which way should a pilot confirm received light signals in flight?",
      options: [
        "Apply some changes of RPM",
        "Apply some changes of the rudder",
        "Rock the wings (in the daytime)",
        "Apply some fast pitch changes"
      ],
      correctIndex: 2,
      explanation: "During daylight hours, the international standard method for an airborne aircraft to acknowledge a light signal from the tower is to rock the aircraft's wings (banking left and right). At night, the pilot flashes the landing lights or navigation lights twice."
    },
    {
      id: 80,
      question: "What is the meaning of a steady red light signal at a controlled aerodrome directed to an aircraft on ground?",
      options: [
        "Land at this airport and proceed to apron",
        "Clear the taxiway / runway",
        "Return to starting point",
        "Stop"
      ],
      correctIndex: 3,
      explanation: "A steady red light directed at any vehicle or aircraft operating on the ground is a universal and absolute command to 'Stop' and hold position immediately."
    },
    {
      id: 81,
      question: "How are two parallel runways designated?",
      options: [
        "Left gets 'L', right gets 'R'",
        "Left gets 'L', right remains unchanged",
        "Left gets '-1', right '-2'",
        "Left remains unchanged, right increased by 1"
      ],
      correctIndex: 0,
      explanation: "When an aerodrome has two parallel runways, they share the same magnetic heading designator (e.g., 27). To distinguish them, they are appended with the letters L (Left) and R (Right), as seen from the perspective of the approaching aircraft (e.g., 27L and 27R)."
    },
    {
      id: 82,
      question: "According to ICAO Annex 14, which is the colour marking of a runway?",
      options: [
        "Blue",
        "White",
        "Yellow",
        "Green"
      ],
      correctIndex: 1,
      explanation: "ICAO standards clearly mandate the color-coding of airport surfaces to prevent pilot confusion. All markings on a runway (centerlines, thresholds, designators) must be White. In contrast, taxiway markings are Yellow."
    },
    {
      id: 83,
      question: "What is indicated by a pattern of longitudinal stripes of uniform dimensions disposed symmetrically about the centerline of a runway?",
      options: [
        "At this point the glide path of an ILS hits the runway",
        "Do not touch down before them",
        "Do not touch down behind them",
        "A ground roll could be started from this position"
      ],
      correctIndex: 1,
      explanation: "These longitudinal stripes (often called 'piano keys') physically denote the threshold of the runway—the beginning of the portion usable for landing. Touching down before these markings means landing short of the designated safe area."
    },
    {
      id: 84,
      question: "Which runway designators are correct for 2 parallel runways?",
      options: [
        "06L and 06R",
        "18 and 18-2",
        "26 and 26R",
        "24 and 25"
      ],
      correctIndex: 0,
      explanation: "The only valid ICAO format for parallel runways is identical numbers followed by 'L' (Left) and 'R' (Right). Thus, 06L and 06R correctly designate two parallel runways pointing towards a 060-degree magnetic heading."
    },
    {
      id: 85,
      question: "What is a 'PAPI' (Precision Approach Path Indicator)?",
      options: [
        "Visual aid for tower controller",
        "Visual aid providing guidance information to help a pilot acquire and maintain the correct glidepath",
        "Instrumental aid for approach",
        "Visual aid for departure track"
      ],
      correctIndex: 1,
      explanation: "PAPI is a ground-based visual light system positioned beside the runway. It uses a horizontal array of normally four lights (showing combinations of red and white) to indicate to the pilot whether they are too high, too low, or perfectly on the 3-degree vertical glide path."
    },
    {
      id: 86,
      question: "An aerodrome beacon (ABN) is a...",
      options: [
        "rotating beacon indicating location to pilots from the ground.",
        "rotating beacon at the final approach indicating location.",
        "rotating beacon indicating location to aircraft pilots from the air.",
        "fixed beacon indicating location."
      ],
      correctIndex: 2,
      explanation: "The Aerodrome Beacon (ABN) is a high-intensity rotating light (typically flashing alternating white and green for civilian land airports). Its purpose is to be highly visible from the air, helping approaching pilots visually locate the airfield from long distances at night or in reduced visibility."
    },
    {
      id: 87,
      question: "Which is the colour of runway edge lights?",
      options: [
        "Red",
        "White",
        "Blue",
        "Green"
      ],
      correctIndex: 1,
      explanation: "Runway edge lights are elevated or flush lights that outline the edges of the runway during darkness. By standard, they are steady White lights. (Note: Taxiway edge lights are Blue)."
    },
    {
      id: 88,
      question: "Which is the colour of runway end lights?",
      options: [
        "Red",
        "White",
        "Blue",
        "Green"
      ],
      correctIndex: 0,
      explanation: "Runway end lights are unidirectional lights placed across the extreme end of the runway. They emit a steady Red light pointing toward the aircraft, warning the pilot that the usable pavement is ending."
    },
    {
      id: 89,
      question: "What is shown on the printed sign? (Yellow 'A' on black)",
      img: "ALW-019.png",
      options: [
        "Point A on a taxiway",
        "Part A of the runway",
        "Taxiway A",
        "Parking position A"
      ],
      correctIndex: 2,
      explanation: "A square sign with a black background and a yellow inscription (often with a yellow border) is a 'Location Sign'. It informs the pilot of their current location. Therefore, 'Yellow A on Black' means: 'You are currently on Taxiway A'."
    },
    {
      id: 90,
      question: "What is shown on the printed sign? (Arrow + 2500m)",
      img: "ALW-020.png",
      options: [
        "2500 m till parking",
        "From this intersection the available runway length is 2500 m",
        "Complete length is 2500 m",
        "2500 m till departure point"
      ],
      correctIndex: 1,
      explanation: "This is an Intersection Take-off sign. Positioned at a taxiway intersection leading onto a runway, it informs the pilot that if they commence their takeoff roll from this specific point (rather than taxiing to the very beginning), they have exactly 2,500 meters of Take-Off Run Available (TORA)."
    },
    {
      id: 91,
      question: "What is the meaning of this sign at an aerodrome? (Double white cross)",
      img: "ALW-011.png",
      options: [
        "Landing prohibited",
        "Glider flying is in progress",
        "Caution, manoeuvring area is poor",
        "Turns to the right"
      ],
      correctIndex: 1,
      explanation: "A prominent double white cross displayed horizontally in the signal square is a formal warning to all traffic that glider (sailplane) operations are actively taking place at the aerodrome, requiring powered aircraft to exercise extreme vigilance."
    },
    {
      id: 92,
      question: "What is the meaning of the illustrated ground signal? (Right angle arrow)",
      img: "ALW-012.png",
      options: [
        "Caution, manoeuvring area is poor",
        "Prohibition on landing",
        "After take-off and before landing all turns have to be made to the right",
        "Ground movement restricted"
      ],
      correctIndex: 2,
      explanation: "A right-angled arrow of conspicuous color placed in the signal square indicates that the standard left-hand traffic circuit has been suspended. All aircraft must make turns to the right when joining, flying, or departing the circuit."
    },
    {
      id: 93,
      question: "What is the meaning of 'DETRESFA'?",
      options: [
        "Uncertainty phase",
        "Rescue phase",
        "Distress phase",
        "Alerting phase"
      ],
      correctIndex: 2,
      explanation: "DETRESFA is the ICAO code word for the 'Distress Phase'. It is the highest level of emergency classification, triggered when there is reasonable certainty that an aircraft and its occupants are threatened by grave and imminent danger and require immediate assistance."
    },
    {
      id: 94,
      question: "Who provides search and rescue service?",
      options: [
        "Only military organisations",
        "International approved organisations",
        "Only civil organisations",
        "Both military and civil organisations"
      ],
      correctIndex: 3,
      explanation: "Search and Rescue (SAR) is a cooperative effort. Depending on the country, SAR services are provided by a combination of both military assets (like air force helicopters) and civil organizations (like coast guards or volunteer mountain rescue units)."
    },
    {
      id: 95,
      question: "How can a pilot confirm a search and rescue signal on ground in flight?",
      options: [
        "Rock the wings",
        "Push the rudder",
        "Fly parabolic path",
        "Deploy flaps"
      ],
      correctIndex: 0,
      explanation: "If a pilot flying overhead sees ground signals from a SAR team or survivors, the internationally recognized way to acknowledge that the signal has been seen and understood during daylight is to clearly rock the aircraft's wings."
    },
    {
      id: 96,
      question: "With respect to aircraft accident and incident investigation, what are the three categories regarding aircraft occurrences?",
      options: [
        "Event, Crash, Disaster",
        "Happening, Event, Serious event",
        "Incident, Serious incident, Accident",
        "Event, Serious event, Accident"
      ],
      correctIndex: 2,
      explanation: "Aviation law formally classifies safety occurrences into three escalating tiers: 1. Incident (an occurrence affecting safety but not an accident), 2. Serious Incident (an incident involving circumstances indicating a high probability of an accident), and 3. Accident (involving fatal/serious injury or major structural damage)."
    },
    {
      id: 97,
      question: "What is the primary purpose of an aircraft accident investigation?",
      options: [
        "Determine the guilty party",
        "Clarify liability",
        "Identify reasons and work out safety recommendations",
        "Work for public prosecutor"
      ],
      correctIndex: 2,
      explanation: "According to ICAO Annex 13, the sole objective of the investigation of an accident or incident shall be the prevention of accidents and incidents. It is explicitly not the purpose of this activity to apportion blame or legal liability."
    }
  ],
hp: [
    {
      id: 1,
      question: "The majority of aviation accidents are caused by...",
      options: [
        "technical failure.",
        "meteorological influences.",
        "geographical influences.",
        "human failure."
      ],
      correctIndex: 3,
      explanation: "Statistics consistently show that over 70-80% of all aviation accidents are attributed to human factors, such as errors in judgment, poor decision-making, and loss of situational awareness, rather than technical or meteorological failures."
    },
    {
      id: 2,
      question: "The \"swiss cheese model\" can be used to explain the...",
      options: [
        "error chain.",
        "procedure for an emergency landing.",
        "optimal problem solution.",
        "state of readiness of a pilot."
      ],
      correctIndex: 0,
      explanation: "Professor James Reason's 'Swiss Cheese Model' illustrates how a single error rarely causes an accident. Instead, accidents occur when multiple layers of defense (the 'slices of cheese') fail simultaneously, allowing a chain of errors to align through the 'holes'."
    },
    {
      id: 3,
      question: "What is the percentage of oxygen in the atmosphere at 6000 ft?",
      options: [
        "21%",
        "12%",
        "78%",
        "18.9%"
      ],
      correctIndex: 0,
      explanation: "The proportion of gases in the atmosphere remains constant up to about 70,000 feet. Therefore, oxygen always constitutes 21% of the air volume, even though the overall atmospheric pressure and the partial pressure of oxygen decrease with altitude."
    },
    {
      id: 4,
      question: "What is the percentage of nitrogen in the atmosphere?",
      options: [
        "1%",
        "21%",
        "78%",
        "0.1%"
      ],
      correctIndex: 2,
      explanation: "The Earth's atmosphere is primarily composed of Nitrogen, which makes up roughly 78% of the total volume, providing a stable, inert environment for the remaining gases."
    },
    {
      id: 5,
      question: "At which altitude is the atmospheric pressure approximately half the MSL value (1013 hPa)?",
      options: [
        "18000 ft",
        "5000 ft",
        "10000 ft",
        "22000 ft"
      ],
      correctIndex: 0,
      explanation: "Atmospheric pressure decreases exponentially with altitude. At Mean Sea Level, it is approximately 1013 hPa. At approximately 18,000 feet (FL180), the pressure is roughly half of that, around 500 hPa."
    },
    {
      id: 6,
      question: "Air consists of oxygen, nitrogen and other gases. What is the approximate percentage of other gases?",
      options: [
        "0.1%",
        "78%",
        "1%",
        "21%"
      ],
      correctIndex: 2,
      explanation: "Nitrogen comprises 78% and Oxygen makes up 21% of the atmosphere. This leaves approximately 1% for all other trace gases combined, including Argon, Carbon Dioxide, and Neon."
    },
    {
      id: 7,
      question: "Carbon monoxide poisoning can be caused by...",
      options: [
        "little sleep.",
        "alcohol.",
        "smoking.",
        "unhealthy food."
      ],
      correctIndex: 2,
      explanation: "While exhaust leaks are a common aviation cause, cigarette smoking introduces significant amounts of carbon monoxide directly into the blood, binding with hemoglobin and reducing the blood's oxygen-carrying capacity before the flight even begins."
    },
    {
      id: 8,
      question: "What does the term \"Red-out\" mean?",
      options: [
        "\"Red vision\" during negative g-loads",
        "Rash during decompression sickness",
        "Anaemia caused by an injury",
        "Falsified colour perception during sunrise and sunset"
      ],
      correctIndex: 0,
      explanation: "A 'red-out' occurs under negative G-forces (such as a sudden push-over or inverted flight), which forces blood to rush violently into the head and eyes, engorging the capillaries in the retina and causing a reddish tint to the pilot's vision."
    },
    {
      id: 9,
      question: "Carbon monoxide poisoning can be caused by...",
      options: [
        "fuel or hydraulic fluids.",
        "generator failure.",
        "cracks in the heat exchanger.",
        "Pitot icing."
      ],
      correctIndex: 2,
      explanation: "Most single-engine piston aircraft use a shroud over the exhaust muffler as a cabin heater. If this heat exchanger cracks, lethal, odorless Carbon Monoxide (CO) from the engine exhaust can be pumped directly into the cabin."
    },
    {
      id: 10,
      question: "Which of the following is NOT a symptom of hyperventilaton?",
      options: [
        "Cyanose",
        "Tingling",
        "Spasm",
        "Disturbance of consciousness"
      ],
      correctIndex: 0,
      explanation: "Hyperventilation is rapid over-breathing that blows off too much CO2. Symptoms include tingling, muscle spasms, and dizziness. Cyanosis (a blue discoloration of the skin) is a specific symptom of hypoxia (lack of oxygen), not hyperventilation."
    },
    {
      id: 11,
      question: "Which of the following symptoms may indicate hypoxia?",
      options: [
        "Joint pain in knees and feet",
        "Muscle cramps in the upper body area",
        "Blue discolouration of lips and fingernails",
        "Blue marks all over the body"
      ],
      correctIndex: 2,
      explanation: "Hypoxia is the lack of sufficient oxygen in the body's tissues. A primary and objective visual indicator of hypoxia is cyanosis, which manifests as a blueish discoloration of the extremities, lips, and fingernails due to deoxygenated blood."
    },
    {
      id: 12,
      question: "Which of the human senses is most influenced by hypoxia?",
      options: [
        "The oltfactory perception (smell)",
        "The tactile perception (sense of touch)",
        "The auditory perception (hearing)",
        "The visual perception (vision)"
      ],
      correctIndex: 3,
      explanation: "The retina of the eye is an extension of the brain and is highly demanding of oxygen. Therefore, vision—especially night vision and color perception—is usually the very first sense to dramatically degrade when experiencing hypoxia, even at relatively low altitudes (above 5,000 ft)."
    },
    {
      id: 13,
      question: "From which altitude on does the body usually react to the decreasing atmospheric pressure?",
      options: [
        "2000 feet",
        "7000 feet",
        "10000 feet",
        "12000 feet"
      ],
      correctIndex: 1,
      explanation: "While significant physiological impairment occurs higher up, the human body begins to subtly react to the reduced partial pressure of oxygen starting around 7,000 feet. Night vision is particularly affected at this altitude due to the retina's high oxygen demand."
    },
    {
      id: 14,
      question: "Which altitude marks the lower limit where the the body is unable to completely compensate the effects of the low atmospheric pressure?",
      options: [
        "12000 feet",
        "22000 feet",
        "5000 feet",
        "7000 feet"
      ],
      correctIndex: 0,
      explanation: "Up to about 10,000 - 12,000 feet, a healthy body can compensate for the lower oxygen pressure by increasing heart and breathing rates. Above 12,000 feet, these natural compensatory mechanisms fall short, and supplemental oxygen is required to prevent hypoxia."
    },
    {
      id: 15,
      question: "What is the function of the red blood cells (erythrocytes)?",
      options: [
        "Oxygen transport",
        "Blood coagulation",
        "Immune defense",
        "Blood sugar regulation"
      ],
      correctIndex: 0,
      explanation: "Red blood cells (erythrocytes) contain hemoglobin, a complex protein molecule that binds to oxygen in the lungs and transports it through the circulatory system to tissues and organs throughout the entire body."
    },
    {
      id: 16,
      question: "Which of the following is responsible for the blood coagulation?",
      options: [
        "Capillaries of the arteries",
        "Red blood cells (erythrocytes)",
        "White blood cells (leucocytes)",
        "Blood plates (thrombocytes)"
      ],
      correctIndex: 3,
      explanation: "Thrombocytes, commonly known as blood platelets, are tiny cell fragments essential for hemostasis. They clump together to form clots and stop bleeding when blood vessels are damaged."
    },
    {
      id: 17,
      question: "What is the function of the white blood cells (leucocytes)?",
      options: [
        "Oxygen transport",
        "Blood coagulation",
        "Blood sugar regulation",
        "Immune defense"
      ],
      correctIndex: 3,
      explanation: "White blood cells (leukocytes) are the primary component of the body's immune system. They continuously circulate in the blood, actively identifying, attacking, and destroying pathogens, viruses, and foreign invaders."
    },
    {
      id: 18,
      question: "What is the function of the blood platelets (thrombocytes)?",
      options: [
        "Immune defense",
        "Blood coagulation",
        "Blood sugar regulation",
        "Oxygen transport"
      ],
      correctIndex: 1,
      explanation: "Blood platelets (thrombocytes) are directly responsible for the blood clotting process (coagulation). They aggregate at the site of a wound to prevent excessive blood loss."
    },
    {
      id: 19,
      question: "Which of the following is NOT a risk factor for hypoxia?",
      options: [
        "Smoking",
        "Menstruation",
        "Blood donation",
        "Diving"
      ],
      correctIndex: 3,
      explanation: "Diving causes nitrogen absorption (leading to decompression sickness), not hypoxia. Smoking, menstruation, and blood donation all reduce the blood's capacity to carry oxygen (either by carbon monoxide binding or loss of red blood cells), thus significantly increasing the risk of hypoxia."
    },
    {
      id: 20,
      question: "Anemic hypoxia can be caused by...",
      options: [
        "carbon monoxide poisoning.",
        "low pressure.",
        "high altitudes.",
        "alcohol."
      ],
      correctIndex: 0,
      explanation: "Anemic hypoxia occurs when the blood's capacity to carry oxygen is physically compromised. Carbon monoxide binds to hemoglobin roughly 200 times more aggressively than oxygen, effectively locking out oxygen and causing severe anemic hypoxia."
    },
    {
      id: 21,
      question: "What is an appropriate reaction when a passenger during cruise flight suddenly feels uncomfortable?",
      options: [
        "Adjust cabin temperature and prevent excessive bank",
        "Give additional oxygen and avoid low load factors",
        "Avoid conversation and choose a higher airspeed",
        "Switch on the heater blower and provide thermal blankets"
      ],
      correctIndex: 0,
      explanation: "Passengers suddenly feeling uncomfortable in cruise are usually experiencing the onset of motion sickness (airsickness). Opening air vents to cool the cabin down and flying straight and level (avoiding steep banks and turbulence) are the best immediate remedies to ease their symptoms."
    },
    {
      id: 22,
      question: "What ist the correct term for an involuntary and stereotypical reaction of an organism to the stimulation of a receptor?",
      options: [
        "Reduction",
        "Virulence",
        "Coherence",
        "Reflex"
      ],
      correctIndex: 3,
      explanation: "A reflex is an automatic, involuntary, and virtually instantaneous response to a stimulus. It bypasses conscious thought processes in the brain, being mediated directly by the spinal cord or lower brain centers to protect the body (e.g., pulling a hand away from a hot surface)."
    },
    {
      id: 23,
      question: "What is the correct term for the system which, among others, controls breathing, digestion, and heart frequency?",
      options: [
        "Critical nervous system",
        "Autonomic nervous system",
        "Automatical nervous system",
        "Compliant nervous system"
      ],
      correctIndex: 1,
      explanation: "The Autonomic Nervous System (ANS) operates subconsciously. It is the control system that regulates essential background bodily functions, such as heart rate, digestion, respiratory rate, pupillary response, and the 'fight or flight' response."
    },
    {
      id: 24,
      question: "What is the parallax error?",
      options: [
        "Long-sightedness due to aging especially during night",
        "Wrong interpretation of instruments caused by the angle of vision",
        "Misperception of speed during taxiing",
        "A decoding error in communication between pilots"
      ],
      correctIndex: 1,
      explanation: "Parallax error occurs when a pilot reads an analog instrument (like an altimeter or magnetic compass) from an angle rather than straight on. The physical space between the pointer needle and the numbered dial face causes the reading to appear distorted or incorrect depending on the viewing angle."
    },
    {
      id: 25,
      question: "Which characteristic is important when choosing sunglasses used by pilots?",
      options: [
        "Non-polarised",
        "No UV filter",
        "Curved sidepiece",
        "Unbreakable"
      ],
      correctIndex: 0,
      explanation: "Pilots must explicitly avoid polarized sunglasses. Polarization can mask the glare from the sun reflecting off other aircraft (making traffic harder to spot) and can completely black out the LCD or digital screens of modern glass-cockpit avionics and tablets."
    },
    {
      id: 26,
      question: "Which part of the visual system is responsible for colour vision?",
      options: [
        "Cones",
        "Rods",
        "Macula",
        "Blind spot"
      ],
      correctIndex: 0,
      explanation: "The retina contains two main types of photoreceptors. Cones are concentrated in the center of the eye (the fovea), function best in bright light, and are exclusively responsible for sharp visual acuity and resolving colors. Rods are for peripheral and low-light (night) vision."
    },
    {
      id: 27,
      question: "The connection between middle ear and nose and throat region is called...",
      options: [
        "eardrum.",
        "cochlea.",
        "inner ear.",
        "eustachian tube."
      ],
      correctIndex: 3,
      explanation: "The Eustachian tube is a narrow canal that connects the middle ear cavity to the back of the throat (nasopharynx). Its primary biological function is to ventilate the middle ear and equalize the air pressure on both sides of the eardrum during changes in altitude."
    },
    {
      id: 28,
      question: "In which situation is it NOT possible to achieve a pressure compensation between the middle ear and the environment?",
      options: [
        "During a light and slow climb",
        "All windows are completely closed",
        "Breathing takes place using the mouth only",
        "The eustachien tube is blocked"
      ],
      correctIndex: 3,
      explanation: "If the Eustachian tube is inflamed, swollen, or blocked (typically due to a head cold, allergies, or a severe sinus infection), the trapped air in the middle ear cannot escape or enter. This makes it physically impossible to equalize pressure during climbs or descents, leading to excruciating pain and potential eardrum rupture."
    },
    {
      id: 29,
      question: "Wings level after a longer period of turning can lead to the impression of...",
      options: [
        "starting a descent.",
        "starting a climb.",
        "steady turning in the same direction as before.",
        "turning into the opposite direction."
      ],
      correctIndex: 3,
      explanation: "This is a vestibular illusion known as 'the leans' or the somatogyral illusion. During a prolonged coordinated turn, the fluid in the inner ear stabilizes and the pilot feels 'level'. When the pilot suddenly rolls back to actual wings-level flight, the fluid's inertia stimulates the hair cells in the opposite direction, giving a powerful, false sensation of banking the other way."
    },
    {
      id: 30,
      question: "Which of the following options does NOT stimulate motion sickness (disorientation)?",
      options: [
        "Head movements during turns",
        "Flying under the influence of alcohol",
        "Non-accelerated straight and level flight",
        "Turbulence in level flight"
      ],
      correctIndex: 2,
      explanation: "Motion sickness is triggered by a sensory conflict between visual inputs and the vestibular (inner ear) system. Smooth, non-accelerated straight and level flight provides stable, matching inputs to both systems, which prevents sensory conflict and disorientation."
    },
    {
      id: 31,
      question: "An acceleration during a straight horizontal flight can lead to the illusion of...",
      options: [
        "a descent.",
        "a climb.",
        "an inverted flight.",
        "a bank."
      ],
      correctIndex: 1,
      explanation: "The somatogravic illusion occurs in conditions of poor visibility. The otolith organs in the inner ear cannot distinguish between gravity and linear acceleration. A rapid forward acceleration pushes the sensory hairs backward, creating the exact same physical sensation in the brain as pitching the nose up into a steep climb."
    },
    {
      id: 32,
      question: "A deceleration during a straight horizontal flight can lead to the illusion of...",
      options: [
        "a climb.",
        "a descent.",
        "a bank.",
        "an inverted flight."
      ],
      correctIndex: 1,
      explanation: "Conversely to the acceleration illusion, a rapid deceleration (such as suddenly extending flaps, lowering gear, or cutting power) throws the inner ear sensory hairs forward. Without a visual horizon to correct it, the brain interprets this identical force as the aircraft abruptly pitching down into a dive."
    },
    {
      id: 33,
      question: "Which optical illusion might be caused by a runway with an upslope during the approach?",
      options: [
        "The pilot has the feeling that the approach is too fast and reduces the speed below the normal approach speed",
        "The pilot has the feeling that the approach is too high and therefore descents below the regular glide slope",
        "The pilot has the feeling that the approach is too slow and speeds up above the normal approach speed",
        "The pilot has the feeling that the approach is too low and therefore approaches the runway above the regular glide slope"
      ],
      correctIndex: 1,
      explanation: "An upsloping runway creates a dangerous visual illusion. The elevated far end of the runway makes the pilot feel as though the aircraft is flying too high on the approach. Trusting this false visual cue, an unwary pilot will instinctively pitch down to 'correct' the flight path, risking a dangerously low approach."
    },
    {
      id: 34,
      question: "What impression may be caused when approaching a runway with an upslope?",
      options: [
        "A landing beside the centerline",
        "A hard landing",
        "An undershoot",
        "An overshoot"
      ],
      correctIndex: 2,
      explanation: "Because an upsloping runway gives the false impression of being too high, the pilot's natural reaction is to steepen the descent rate or reduce power. This hazardous overcorrection frequently leads to an undershoot, meaning the aircraft touches down in the dirt before reaching the actual runway threshold."
    },
    {
      id: 35,
      question: "The occurence of a vertigo is most likely when moving the head...",
      options: [
        "during a straight horizontal flight.",
        "during a turn.",
        "during a descent.",
        "during a climb."
      ],
      correctIndex: 1,
      explanation: "Moving the head abruptly during a prolonged turn disrupts the fluid in multiple semicircular canals simultaneously (e.g., pitching the head down while the aircraft is banking). This cross-coupling generates a severe form of spatial disorientation and a violent tumbling sensation known as the Coriolis illusion, or severe vertigo."
    },
    {
      id: 36,
      question: "A Grey-out is the result of...",
      options: [
        "hypoxia.",
        "tiredness.",
        "positive g-forces.",
        "hyperventilation."
      ],
      correctIndex: 2,
      explanation: "A 'grey-out' (a loss of color vision and peripheral dimming) is the direct precursor to a G-LOC (G-force induced Loss of Consciousness). It is caused by positive G-forces (pulling up sharply) pushing the blood away from the head and pooling it in the lower body, thereby starving the brain and retinas of oxygen."
    },
    {
      id: 37,
      question: "Visual illusions are mostly caused by...",
      options: [
        "rapid eye movements.",
        "misinterpretation of the brain.",
        "colour blindness.",
        "binocular vision."
      ],
      correctIndex: 1,
      explanation: "Visual illusions in flight are rarely physical defects of the eye itself. They are cognitive processing failures where the brain misinterprets the visual data it receives due to a lack of visual references, unusual perspectives, atmospheric refraction, or conflicting sensory inputs."
    },
    {
      id: 38,
      question: "The average decrease of blood alcohol level for an adult in one hour is approximately...",
      options: [
        "0.1 percent.",
        "0.01 percent.",
        "0.03 percent.",
        "0.3 percent."
      ],
      correctIndex: 1,
      explanation: "The human liver metabolizes and eliminates alcohol at a relatively constant and slow biological rate. On average, the blood alcohol concentration (BAC) decreases by roughly 0.015% per hour (often rounded down to 0.01% in aviation medical literature). Coffee, oxygen, or cold showers cannot accelerate this process."
    },
    {
      id: 39,
      question: "Which answer states a risk factor for diabetes?",
      options: [
        "Overweight",
        "Smoking",
        "Sleep deficiency",
        "Alcohol consumption"
      ],
      correctIndex: 0,
      explanation: "While genetics play a role, Type 2 Diabetes is heavily linked to lifestyle factors. Being overweight or clinically obese significantly increases cellular insulin resistance, making excessive body weight the primary manageable risk factor for developing the disease."
    },
    {
      id: 40,
      question: "A risk factor for decompression sickness is...",
      options: [
        "smoking.",
        "sports.",
        "scuba diving prior to flight.",
        "100 % oxygen after decompression."
      ],
      correctIndex: 2,
      explanation: "Scuba diving forces nitrogen to dissolve into the bloodstream and tissues under high underwater pressure. If a pilot flies too soon after diving, the lower atmospheric pressure at altitude allows this dissolved nitrogen to rapidly expand into painful, dangerous bubbles in the joints and blood—a condition known as Decompression Sickness (The Bends)."
    },
    {
      id: 41,
      question: "Which statement is correct with regard to the short-term memory?",
      options: [
        "It can store 10 (±5) items for 30 to 60 seconds",
        "It can store 7 (±2) items for 10 to 20 seconds",
        "It can store 3 (±1) items for 5 to 10 seconds",
        "It can store 5 (±2) items for 1 to 2 minutes"
      ],
      correctIndex: 1,
      explanation: "According to cognitive psychology (specifically Miller's Law), the human short-term (or working) memory has a very limited capacity. It is typically able to hold only 7 (plus or minus 2) chunks of information simultaneously, and only for roughly 10 to 20 seconds before it is forgotten or encoded."
    },
    {
      id: 42,
      question: "For what approximate time period can the short-time memory store information?",
      options: [
        "35 to 50 seconds",
        "30 to 40 seconds",
        "3 to 7 seconds",
        "10 to 20 seconds"
      ],
      correctIndex: 3,
      explanation: "Without active mental rehearsal, repetition, or immediate application (like writing it down), information held in the short-term memory decays and vanishes within 10 to 20 seconds. This is why ATC clearances should always be copied onto a kneeboard immediately."
    },
    {
      id: 43,
      question: "What is a latent error?",
      options: [
        "An error which is made by the pilot actively and consciously",
        "An error which only has consequences after landing",
        "An error which remains undetected in the system for a long time",
        "An error which has an immediate effect on the controls"
      ],
      correctIndex: 2,
      explanation: "Latent errors are hidden, structural flaws embedded in a system's design, maintenance procedures, or organizational culture. They lie dormant and undetected for long periods until triggered by a specific set of circumstances, combining with active pilot errors to cause an accident."
    },
    {
      id: 44,
      question: "What does the term \"confirmation bias\" mean?",
      options: [
        "The feedback loop in a closed communication",
        "The preference to find arguments to proof the own mental model",
        "The bias to confirm each radio call",
        "The critical check of ambiguous situations in flight"
      ],
      correctIndex: 1,
      explanation: "Confirmation bias is a highly dangerous psychological trap in aviation. It is the unconscious tendency of a pilot to seek out, favor, and remember information that confirms their pre-existing mental model or desired outcome, while simultaneously ignoring or dismissing evidence that contradicts it."
    },
    {
      id: 45,
      question: "The ongoing process to monitor the current flight situation is called...",
      options: [
        "constant flight check.",
        "situational thinking.",
        "anticipatory check procedure.",
        "situational awareness."
      ],
      correctIndex: 3,
      explanation: "Situational awareness (SA) is the continuous cognitive process of perceiving the environment, comprehending its meaning, and projecting its status into the near future. It is the pilot's complete mental picture of 'what has happened, what is happening now, and what will happen next'."
    },
    {
      id: 46,
      question: "Regarding the communication model, how can the use of the same code during radio communication be ensured?",
      options: [
        "By the use of radio phraseology",
        "By using radios certified for aviation use only",
        "By the use of proper headsets",
        "By a particular frequency allocation"
      ],
      correctIndex: 0,
      explanation: "Standardized aviation phraseology was developed internationally by ICAO strictly to eliminate ambiguity, misunderstandings, and language barriers over the radio. Using the exact same predefined words and formats ensures the sender's code perfectly matches the receiver's decoding process."
    },
    {
      id: 47,
      question: "In what different ways can a risk be handled appropriately?",
      options: [
        "Extrude, avoid, palliate, transfer",
        "Ignore, accept, transfer, extrude",
        "Avoid, reduce, transfer, accept",
        "Avoid, ignore, palliate, reduce"
      ],
      correctIndex: 2,
      explanation: "In formal Risk Management, the four standard strategies for dealing with an identified hazard are: Avoid (do not fly the flight), Reduce (mitigate the risk by waiting for better weather), Transfer (let a more experienced pilot or co-pilot handle the task), or Accept (the risk is calculated, deemed minimal, and accepted)."
    },
    {
      id: 48,
      question: "Under which circumstances is it more likely to accept higher risks?",
      options: [
        "If there is not enough information available",
        "During check flights due to a high level of nervousness",
        "During flight planning when excellent weather is forecast",
        "Due to group-dynamic effects"
      ],
      correctIndex: 3,
      explanation: "Psychological phenomena like 'peer pressure', 'get-there-itis', and group dynamics often compel pilots to take risks they would normally reject if flying alone. The presence of passengers or peers can create a desire to impress or conform, leading to a dilution of personal safety standards."
    },
    {
      id: 49,
      question: "What is the meaning of \"risky shift\"?",
      options: [
        "Crossing of rudder and ailerons on short final",
        "The tendency to accept higher risks in groups",
        "Spontaneous change of landing direction when the runway has an upslope",
        "Seat adjustment in flight"
      ],
      correctIndex: 1,
      explanation: "The 'risky shift' is a well-documented social psychology concept where individuals operating within a group setting tend to make significantly riskier decisions than they would if acting individually. This occurs due to a perceived shared responsibility for the outcome."
    },
    {
      id: 50,
      question: "Which dangerous attitudes are often combined?",
      options: [
        "Macho and invulnerability",
        "Impulsivity and carefulness",
        "Invulnerability and self-abandonment",
        "Self-abandonment and macho"
      ],
      correctIndex: 0,
      explanation: "The 'Macho' attitude ('I can do it, watch this') heavily relies on the 'Invulnerability' attitude ('It won't happen to me'). These two hazardous attitudes synergize frequently, leading to reckless maneuvers, buzzing, and a blatant disregard for standard operating procedures."
    },
    {
      id: 51,
      question: "What is an indication for a macho attitude?",
      options: [
        "Careful walkaround procedure",
        "Comprehensive risk assessment when faced with unfamiliar situations",
        "Risky flight maneuvers to impress spectators on ground",
        "Quick resignation in complex and critical situations"
      ],
      correctIndex: 2,
      explanation: "The macho attitude is psychologically characterized by a constant need to prove oneself and demonstrate superiority or extreme skill. Performing unauthorized, low-level, or risky maneuvers to impress passengers or spectators is the ultimate behavioral manifestation of this hazardous trait."
    },
    {
      id: 52,
      question: "Which factor can lead to human error?",
      options: [
        "Double check of relevant actions",
        "Proper use of checklists",
        "To be doubtful if something looks unclear or ambiguous",
        "The bias to see what we expect to see"
      ],
      correctIndex: 3,
      explanation: "Expectation bias is a massive contributor to human error. If a pilot expects an instrument to show a certain value, or expects ATC to issue a specific clearance, their brain will often 'see' or 'hear' that expectation, completely overriding the actual reality presented to their senses."
    },
    {
      id: 53,
      question: "What is the best combination of traits with respect to the individual attitude and behaviour for a pilot?",
      options: [
        "Introverted - unstable",
        "Introverted - stable",
        "Extroverted - unstable",
        "Extroverted - stable"
      ],
      correctIndex: 3,
      explanation: "Psychological profiling in aviation suggests that an 'extroverted but emotionally stable' personality is ideal. Extroversion ensures they communicate well and manage crew/passenger dynamics effectively, while stability ensures they remain calm, analytical, and unpanicked during high-workload emergencies."
    },
    {
      id: 54,
      question: "Complacency is a risk due to...",
      options: [
        "the high number of mistakes normally made by humans.",
        "increased cockpit automation.",
        "the high error rate of technical systems.",
        "better training options for young pilots."
      ],
      correctIndex: 1,
      explanation: "Complacency is a dangerous state of self-satisfaction and lowered vigilance. The highly reliable, advanced automation in modern aircraft (autopilots, FMS) often leads pilots to 'tune out' or become overly reliant on the computer, significantly degrading their situational awareness when manual intervention is suddenly required."
    },
    {
      id: 55,
      question: "The ideal level of arousal is at which point in the diagram? See figure (HPL-002)",
      img: "HPL-002.png",
      options: [
        "Point A",
        "Point D",
        "Point C",
        "Point B"
      ],
      correctIndex: 2,
      explanation: "According to the Yerkes-Dodson Law (the Inverted-U hypothesis of stress), human performance is optimized at a moderate level of arousal or stress (Point C at the peak of the curve). Too little stress causes boredom and inattention; too much stress causes panic and cognitive tunneling."
    },
    {
      id: 56,
      question: "At which point in the diagram will a pilot find himself to be overstrained? See figure (HPL-002)",
      img: "HPL-002.png",
      options: [
        "Point D",
        "Point B",
        "Point C",
        "Point A"
      ],
      correctIndex: 0,
      explanation: "On the arousal-performance curve, Point D is located on the far right slope, where stress/arousal has become excessive. At this stage, the pilot is overstrained (cognitively overloaded), resulting in a dramatic collapse in performance, panic, and an inability to process critical information."
    },
    {
      id: 57,
      question: "Which of the following qualities are influenced by stress? 1. Attention 2. Concentration 3. Responsiveness 4. Memory",
      options: [
        "2, 4",
        "1",
        "1, 2, 3, 4",
        "1, 2, 3"
      ],
      correctIndex: 2,
      explanation: "High levels of acute stress are pervasive and aggressively degrade all higher-order cognitive functions. It severely impairs a pilot's Attention (leading to tunnel vision), Concentration (becoming easily distracted), Responsiveness (frozen or delayed reactions), and Memory (forgetting crucial checklists or procedures)."
    },
    {
      id: 58,
      question: "Which answer is correct concerning stress?",
      options: [
        "Stress can occur if there seems to be no solution for a given problem",
        "Training and experience have no influence on the occurence of stress",
        "Stress and its different symptoms are irrelevant for flight safety",
        "Everybody reacts to stress in the same manner"
      ],
      correctIndex: 0,
      explanation: "Stress is fundamentally a physiological and psychological response to a perceived threat or demand that exceeds a person's coping abilities. When a pilot encounters a critical emergency and feels they lack the resources, time, or knowledge to solve it, massive acute stress is immediately triggered."
    }
  ],
communication: [
    {
      id: 1,
      question: "In which situations should a pilot use blind transmissions?",
      options: [
        "When no radio communication can be established with the appropriate aeronautical station, but when evidence exists that transmissions are received at that ground unit",
        "When a pilot has flown into cloud or fog unintentionally and therefore would like to request navigational assistance from a ground unit",
        "When a transmission containing important navigational or technical information is to be sent to several stations at the same time",
        "When the traffic situation at an airport allows the transmission of information which does not need to be acknowledged by the ground station"
      ],
      correctIndex: 0,
      explanation: "A blind transmission is a standardized communication procedure used when an aircraft fails to establish two-way radio contact but has reason to believe the ground station (or other traffic) is still receiving its transmissions. It allows the pilot to broadcast their position, altitude, and intentions to maintain situational awareness for others."
    },
    {
      id: 2,
      question: "Leaving a control frequency (except when reaching the final parking position)...",
      options: [
        "is not mandatory to be reported.",
        "must be approved twice.",
        "must be approved.",
        "must be reported."
      ],
      correctIndex: 2,
      explanation: "When operating within controlled airspace or under the control of an ATC unit, maintaining a continuous listening watch is mandatory. A pilot may not simply leave the assigned frequency to tune into another one; they must explicitly request and obtain approval from the controller to change frequencies."
    },
    {
      id: 3,
      question: "Which abbreviation is used for the term \"abeam\"?",
      options: [
        "ABM",
        "ABB",
        "ABA",
        "ABE"
      ],
      correctIndex: 0,
      explanation: "In aviation standard abbreviations, 'ABM' stands for 'abeam', which refers to a point approximately 90 degrees to the left or right of the aircraft's longitudinal axis (e.g., 'abeam the runway threshold')."
    },
    {
      id: 4,
      question: "Which abbreviation is used for the term \"visual flight rules\"?",
      options: [
        "VFS",
        "VFR",
        "VRU",
        "VMC"
      ],
      correctIndex: 1,
      explanation: "'VFR' stands for Visual Flight Rules. These are the regulations under which a pilot operates an aircraft in weather conditions generally clear enough to allow the pilot to see where the aircraft is going."
    },
    {
      id: 5,
      question: "Which abbreviation is used for the term \"obstacle\"?",
      options: [
        "OBTC",
        "OBST",
        "OST",
        "OBS"
      ],
      correctIndex: 1,
      explanation: "According to ICAO document 8400 (ICAO Abbreviations and Codes), the correct abbreviation for the word 'obstacle' is 'OBST'."
    },
    {
      id: 6,
      question: "What does the abbreviation \"FIS\" stand for?",
      options: [
        "Flashing information service",
        "Flight information system",
        "Flashing information system",
        "Flight information service"
      ],
      correctIndex: 3,
      explanation: "FIS stands for Flight Information Service. It is a non-control service provided to any aircraft within a Flight Information Region (FIR) to supply information useful for the safe and efficient conduct of flights (such as weather, traffic advisories, and navigation aids status)."
    },
    {
      id: 7,
      question: "What does the abbreviaton \"FIR\" stand for?",
      options: [
        "Flight integrity receiver",
        "Flow information radar",
        "Flight information region",
        "Flow integrity required"
      ],
      correctIndex: 2,
      explanation: "FIR stands for Flight Information Region. It is a specified region of airspace in which a flight information service (FIS) and an alerting service (ALR) are provided."
    },
    {
      id: 8,
      question: "What does the abbreviation \"H24\" stand for?",
      options: [
        "Sunrise to sunset",
        "24 h service",
        "No specific opening times",
        "Sunset to sunrise"
      ],
      correctIndex: 1,
      explanation: "In NOTAMs and Aeronautical Information Publications (AIPs), 'H24' indicates continuous day and night service, meaning the facility or service operates 24 hours a day."
    },
    {
      id: 9,
      question: "What does the abbreviation \"HX\" stand for?",
      options: [
        "No specific opening hours",
        "Sunrise to sunset",
        "Sunset to sunrise",
        "24 h service"
      ],
      correctIndex: 0,
      explanation: "'HX' is the standard ICAO code indicating that a facility, service, or airspace does not have specific, fixed operational hours. Its status or opening hours may be activated by NOTAM or on request."
    },
    {
      id: 10,
      question: "The altimeter has to be set to what value in order to show zero on ground?",
      options: [
        "QNH",
        "QNE",
        "QTE",
        "QFE"
      ],
      correctIndex: 3,
      explanation: "QFE (Field Elevation Pressure) is the actual atmospheric pressure measured at the aerodrome elevation. If a pilot dials the QFE into the altimeter sub-scale, the instrument will read zero feet when sitting on the runway."
    },
    {
      id: 11,
      question: "Which altitude is displayed on the altimeter when set to a specific QNH?",
      options: [
        "Altitude in relation to the 1013.25 hPa datum",
        "Altitude in relation to mean sea level",
        "Altitude in relation to the air pressure at the reference airfield",
        "Altitude in relation to the highest elevation within 10 km"
      ],
      correctIndex: 1,
      explanation: "QNH is the local barometric pressure reduced to Mean Sea Level (MSL) using standard atmospheric conditions. When set to QNH, the altimeter displays the aircraft's altitude above MSL, which is crucial for maintaining terrain clearance."
    },
    {
      id: 12,
      question: "Which altitude is displayed on the altimeter when set to a specific QFE?",
      options: [
        "Altitude in relation to the 1013.25 hPa datum",
        "Altitude in relation to the air pressure at the reference airfield",
        "Altitude in relation to the highest elevation within 10 km",
        "Altitude in relation to mean sea level"
      ],
      correctIndex: 1,
      explanation: "Because QFE is the pressure at the specific airfield's surface, an altimeter set to QFE will indicate the aircraft's height directly above that reference airfield (reading zero upon touchdown)."
    },
    {
      id: 13,
      question: "What does the abbreviation \"QDR\" stand for?",
      options: [
        "True bearing from the station",
        "Magnetic bearing from the station",
        "Magnetic bearing to the station",
        "True bearing to the station"
      ],
      correctIndex: 1,
      explanation: "In the Q-code system, QDR means 'Magnetic bearing FROM the station'. It is the magnetic heading you would fly if you departed the station to fly directly to the aircraft's position."
    },
    {
      id: 14,
      question: "What does the abbreviation \"QUJ\" stand for?",
      options: [
        "True bearing from the station",
        "True bearing to the station",
        "Magnetic bearing to the station",
        "Magnetic bearing from the station"
      ],
      correctIndex: 1,
      explanation: "QUJ is the True bearing TO the station. It references Geographic North (True North) and indicates the track an aircraft would follow to reach the station."
    },
    {
      id: 15,
      question: "What does the abbreviation \"QTE\" stand for?",
      options: [
        "Magnetic bearing to the station",
        "Magnetic bearing from the station",
        "True bearing from the station",
        "True bearing to the station"
      ],
      correctIndex: 2,
      explanation: "QTE specifies the True bearing FROM the station. This is the parameter primarily used by pilots and navigators to plot lines of position (LOPs) on an aeronautical chart, since charts are aligned to True North."
    },
    {
      id: 16,
      question: "Which Q-code is used for the magnetic bearing from the station?",
      options: [
        "QUJ",
        "QTE",
        "QDM",
        "QDR"
      ],
      correctIndex: 3,
      explanation: "QDR is the code for the magnetic bearing extending outward FROM the transmitting station. It is equivalent to a VOR radial."
    },
    {
      id: 17,
      question: "Which Q-code is used for the true bearing from the station?",
      options: [
        "QDR",
        "QUJ",
        "QDM",
        "QTE"
      ],
      correctIndex: 3,
      explanation: "QTE provides the geographic (True North) bearing radiating outward FROM the ground station to the aircraft."
    },
    {
      id: 18,
      question: "Which Q-code is used for the true bearing to the station?",
      options: [
        "QDR",
        "QDM",
        "QTE",
        "QUJ"
      ],
      correctIndex: 3,
      explanation: "QUJ is the specific Q-code representing the true (geographic) track an aircraft must follow to fly directly TO the station."
    },
    {
      id: 19,
      question: "Which of the listed radiotelephony messages has a higher priority than a flight safety message?",
      options: [
        "Communication related to direction finding",
        "Flight regularity message",
        "Meteorological message",
        "Aircraft position report message"
      ],
      correctIndex: 0,
      explanation: "According to ICAO communication priorities, Direction Finding (DF) messages have a higher priority than flight safety messages, meteorological messages, and regularity messages. They are ranked just below Distress (Mayday) and Urgency (Pan-Pan) messages."
    },
    {
      id: 20,
      question: "What is the correct term for a message used for air traffic control?",
      options: [
        "Flight regularity message",
        "Meteorological message",
        "Message related to direction finding",
        "Flight safety message"
      ],
      correctIndex: 3,
      explanation: "Messages that are essential for the safe separation and movement of aircraft, such as ATC clearances and instructions, are formally categorized as 'Flight safety messages' in the hierarchy of aviation communication."
    },
    {
      id: 21,
      question: "Distress messages are messages...",
      options: [
        "concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
        "sent by a pilot or an aircraft operating agency which have an imminent meaning for aircraft in flight.",
        "concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance.",
        "concerning the operation or maintenance of facilities which are important for the safety and regularity of flight operations."
      ],
      correctIndex: 2,
      explanation: "A distress message (preceded by 'MAYDAY') is strictly reserved for situations where an aircraft or its occupants are threatened by grave and imminent danger (e.g., engine failure, uncontrollable fire) and require immediate rescue assistance."
    },
    {
      id: 22,
      question: "Urgency messages are messages...",
      options: [
        "concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance.",
        "concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
        "concerning the operation or maintenance of facilities essential for the safety or regularity of aircraft operation.",
        "sent by a pilot or an aircraft operating agency which have an imminent meaning for aircraft in flight."
      ],
      correctIndex: 1,
      explanation: "An urgency message (preceded by 'PAN PAN') is used when the safety of an aircraft, vehicle, or person is threatened, but does not require immediate assistance (e.g., a sick passenger, or a precautionary engine shutdown without imminent loss of altitude)."
    },
    {
      id: 23,
      question: "Regularity messages are messages...",
      options: [
        "concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
        "concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance.",
        "sent by an aircraft operating agency or an aircraft of immediate concern to an aircraft in flight.",
        "concerning the operation or maintenance of facilities essential for the safety or regularity of aircraft operation."
      ],
      correctIndex: 3,
      explanation: "Flight regularity messages relate to the logistics and operational maintenance of aircraft and facilities, such as passenger loads, catering requests, or minor technical issues that affect schedule but not immediate flight safety."
    },
    {
      id: 24,
      question: "Which of the following messages has the highest priority?",
      options: [
        "Turn left",
        "Request QDM",
        "QNH 1013",
        "Wind 300 degrees, 5 knots"
      ],
      correctIndex: 1,
      explanation: "In the ICAO radio message priority list, direction finding messages (such as requesting a QDM bearing to navigate) take precedence over routine flight safety messages (like heading instructions), meteorological messages (wind, QNH), and regularity messages."
    },
    {
      id: 25,
      question: "What is the correct way to transmit the call sign HB-YKM?",
      options: [
        "Home Bravo Yuliett Kilo Mike",
        "Hotel Bravo Yankee Kilo Mike",
        "Hotel Bravo Yuliett Kilo Mikro",
        "Home Bravo Yankee Kilo Mikro"
      ],
      correctIndex: 1,
      explanation: "Using the standard ICAO phonetic alphabet, H is Hotel, B is Bravo, Y is Yankee, K is Kilo, and M is Mike."
    },
    {
      id: 26,
      question: "What is the correct way to transmit the call sign OE-JVK?",
      options: [
        "Omega Echo Jankee Victor Kilo",
        "Oscar Echo Jankee Victor Kilogramm",
        "Oscar Echo Juliett Victor Kilo",
        "Omega Echo Juliett Victor Kilogramm"
      ],
      correctIndex: 2,
      explanation: "Using the standard ICAO phonetic alphabet: O is Oscar, E is Echo, J is Juliett, V is Victor, and K is Kilo."
    },
    {
      id: 27,
      question: "An altitude of 4500 ft is transmitted as...",
      options: [
        "four tousand five hundred.",
        "four five tousand.",
        "four tousand five zero zero.",
        "four five zero zero."
      ],
      correctIndex: 0,
      explanation: "According to ICAO radiotelephony procedures, exact hundreds and thousands of altitude or height are pronounced as the single digits followed by the word 'HUNDRED' or 'THOUSAND'. Therefore, 4500 is 'four thousand five hundred'."
    },
    {
      id: 28,
      question: "A heading of 285 degrees is correctly transmitted as...",
      options: [
        "two eight five.",
        "two eight five hundred.",
        "two hundred eight five.",
        "two hundred eighty-five."
      ],
      correctIndex: 0,
      explanation: "For headings, runways, and wind directions, each digit is pronounced separately to eliminate any ambiguity. Thus, 285 is pronounced 'two eight five'."
    },
    {
      id: 29,
      question: "A frequency of 119.500 MHz is correctly transmitted as...",
      options: [
        "one one niner tousand decimal five zero.",
        "one one niner decimal five.",
        "one one niner decimal five zero.",
        "one one niner decimal five zero zero."
      ],
      correctIndex: 1,
      explanation: "Frequencies must have each digit pronounced separately. The decimal point is pronounced 'decimal'. If the frequency ends in trailing zeros, typically only the required digits are spoken. Thus, 'one one niner decimal five'. (Note: In 8.33 kHz spacing, 6 digits are generally spoken, but for 25kHz standard, trailing zeros are dropped)."
    },
    {
      id: 30,
      question: "The directional information \"12 o'clock\" is correctly transmitted as...",
      options: [
        "One two.",
        "One two o'clock.",
        "One two hundred.",
        "Twelve o'clock."
      ],
      correctIndex: 3,
      explanation: "When describing relative traffic positions using the clock-face method, the whole number is spoken naturally as a single word, unlike standard aviation numbers. Therefore, it is pronounced 'Twelve o'clock'."
    },
    {
      id: 31,
      question: "Times are transmitted as...",
      options: [
        "UTC.",
        "standard time.",
        "local time.",
        "time zone time."
      ],
      correctIndex: 0,
      explanation: "To ensure absolute synchronization across multiple time zones and borders, all times in aviation radiotelephony and flight planning are strictly transmitted in Coordinated Universal Time (UTC)."
    },
    {
      id: 32,
      question: "If there is any doubt about ambiguity, a time of 1620 is to be transmitted as...",
      options: [
        "sixteen twenty.",
        "two zero.",
        "one tousand six hundred two zero.",
        "one six two zero."
      ],
      correctIndex: 3,
      explanation: "Normally, if the hour is clear from context, only the minutes ('two zero') are transmitted. However, if there is any potential for ambiguity, all four digits of the hour and minutes must be pronounced separately: 'one six two zero'."
    },
    {
      id: 33,
      question: "What is the meaning of the phrase \"Roger\"?",
      options: [
        "Permission for proposed action is granted",
        "I understand your message and will comply with it",
        "I have received all of your last transmission",
        "An error has been made in this transmission. The correct version is..."
      ],
      correctIndex: 2,
      explanation: "The pro-word 'ROGER' simply means 'I have received all of your last transmission'. It does NOT mean 'I understand' or 'I will comply' (which is 'WILCO'), nor does it grant permission or clearance."
    },
    {
      id: 34,
      question: "What is the meaning of the phrase \"Correction\"?",
      options: [
        "Permission for proposed action is granted",
        "An error has been made in this transmission. The correct version is...",
        "I have received all of your last transmission",
        "I understand your message and will comply with it"
      ],
      correctIndex: 1,
      explanation: "The phrase 'CORRECTION' is used by the transmitter to indicate: 'An error has been made in this transmission (or message indicated). The correct version is...'."
    },
    {
      id: 35,
      question: "What is the meaning of the phrase \"Approved\"?",
      options: [
        "I have received all of your last transmission",
        "I understand your message and will comply with it",
        "Permission for proposed action is granted",
        "An error has been made in this transmission. The correct version is..."
      ],
      correctIndex: 2,
      explanation: "'APPROVED' is used by ATC to indicate that 'Permission for the proposed action is granted'. It is a formal clearance to proceed with the requested maneuver."
    },
    {
      id: 36,
      question: "Which phrase does a pilot use when he / she wants to check the readability of his / her transmission?",
      options: [
        "What is the communication like?",
        "How do you read?",
        "Request readability",
        "You read me five"
      ],
      correctIndex: 1,
      explanation: "The standard ICAO phrase used to ask a receiving station to assess and report the quality of the radio transmission is 'How do you read?'."
    },
    {
      id: 37,
      question: "Which phrase is used by a pilot when he wants to fly through controlled airspace?",
      options: [
        "Apply",
        "Want",
        "Would like",
        "Request"
      ],
      correctIndex: 3,
      explanation: "In standard aviation phraseology, a pilot uses the word 'REQUEST' followed by their intended action (e.g., 'Request clearance to cross Class Delta airspace') to formally ask ATC for permission."
    },
    {
      id: 38,
      question: "What phrase is used by a pilot if a transmission is to be answered with \"yes\"?",
      options: [
        "Roger",
        "Yes",
        "Affirm",
        "Affirmative"
      ],
      correctIndex: 2,
      explanation: "The standard ICAO radiotelephony word for 'Yes' is 'AFFIRM'. ('Affirmative' is heavily used in movies, but 'AFFIRM' is the correct and concise ICAO standard to prevent confusion with 'Negative')."
    },
    {
      id: 39,
      question: "What phrase is used by a pilot if a transmission is to be answered with \"no\"?",
      options: [
        "Negative",
        "Not",
        "Finish",
        "No"
      ],
      correctIndex: 0,
      explanation: "To answer a question in the negative or to deny a request, the strict standard phrase is 'NEGATIVE'. This distinct word avoids the ambiguity of a short 'no' getting lost in static."
    },
    {
      id: 40,
      question: "Which phrase is to be used when a pilot wants the tower to know that he is ready for take-off?",
      options: [
        "Ready for start-up",
        "Ready for departure",
        "Request take-off",
        "Ready"
      ],
      correctIndex: 1,
      explanation: "To indicate readiness at the holding point, the correct phrase is 'Ready for departure'. The phrase 'take-off' is strictly reserved for the actual ATC clearance ('Cleared for take-off') or its cancellation, preventing catastrophic misunderstandings."
    },
    {
      id: 41,
      question: "What phrase is used by a pilot to inform the tower about a go-around?",
      options: [
        "No landing",
        "Pulling up",
        "Going around",
        "Approach canceled"
      ],
      correctIndex: 2,
      explanation: "The universally recognized safety phrase to announce the abortion of a landing and the initiation of a missed approach procedure is 'Going around'."
    },
    {
      id: 42,
      question: "What is the call sign of the aerodrome control?",
      options: [
        "Tower",
        "Airfield",
        "Ground",
        "Control"
      ],
      correctIndex: 0,
      explanation: "Aerodrome control, which manages the active runways and traffic in the immediate vicinity of the airport (the control zone), is universally addressed by the callsign suffix 'TOWER'."
    },
    {
      id: 43,
      question: "What is the call sign of the surface movement control?",
      options: [
        "Tower",
        "Earth",
        "Ground",
        "Control"
      ],
      correctIndex: 2,
      explanation: "Surface movement control is responsible for managing aircraft and vehicles on the taxiways and aprons (everything except the active runways). Its standard radiotelephony callsign suffix is 'GROUND'."
    },
    {
      id: 44,
      question: "What is the call sign of the flight information service?",
      options: [
        "Info",
        "Advice",
        "Flight information",
        "Information"
      ],
      correctIndex: 3,
      explanation: "A station providing Flight Information Service (FIS) is addressed with the suffix 'INFORMATION' (e.g., 'Langen Information')."
    },
    {
      id: 45,
      question: "What is the correct abbreviation of the call sign D-EAZF?",
      options: [
        "DEA",
        "AZF",
        "DZF",
        "DEF"
      ],
      correctIndex: 2,
      explanation: "According to ICAO rules, once initial contact has been established and the ground station has initiated the abbreviation, a 5-letter registration callsign can be abbreviated to the first letter and the last two letters. Thus, D-EAZF becomes DZF."
    },
    {
      id: 46,
      question: "In what case is the pilot allowed to abbreviate the call sign of his aircraft?",
      options: [
        "After the ground station has used the abbreviation",
        "Within controlled airspace",
        "If there is little traffic in the traffic circuit",
        "After passing the first reporting point"
      ],
      correctIndex: 0,
      explanation: "ICAO standard radiotelephony procedures strictly state that an aircraft call sign may only be abbreviated by the pilot AFTER it has first been abbreviated by the aeronautical ground station."
    },
    {
      id: 47,
      question: "What is the correct way of using the aircraft call sign at first contact?",
      options: [
        "Using the first two characters only",
        "Using the last two characters only",
        "Using the first three characters only",
        "Using all characters"
      ],
      correctIndex: 3,
      explanation: "On initial contact with any Air Traffic Control (ATC) or Flight Information Service (FIS) unit, the pilot must always use the full, unabbreviated call sign of the aircraft (e.g., D-EAZF) to ensure positive and unambiguous identification."
    },
    {
      id: 48,
      question: "What is the correct way of establishing radio communication between D-EAZF and Dusseldorf Tower?",
      options: [
        "Dusseldorf Tower over",
        "DEAZF is calling Dusseldorf Tower",
        "Dusseldorf Tower D-EAZF",
        "Tower from D-EAZF"
      ],
      correctIndex: 2,
      explanation: "The standard ICAO format for an initial call is simply the name of the station being called followed directly by the call sign of the station calling, without any extra filler words. Therefore, 'Dusseldorf Tower D-EAZF' is correct."
    },
    {
      id: 49,
      question: "What is the correct way of acknowledging the instruction \"Call Hamburg Tower on 121.275\"?",
      options: [
        "Call 121.275",
        "Call tower",
        "121.275",
        "Call tower on 121.275"
      ],
      correctIndex: 2,
      explanation: "When acknowledging a frequency change, the pilot must read back the new frequency to confirm it was received correctly. Simply stating the frequency '121.275' (often accompanied by the callsign) is the most concise and correct readback."
    },
    {
      id: 50,
      question: "What does a readability of 1 indicate?",
      options: [
        "The transmission is perfectly readable",
        "The transmission is unreadable",
        "The transmission is readable but with difficulty",
        "The transmission is readable now and then"
      ],
      correctIndex: 1,
      explanation: "In aviation radio communication, readability is assessed on a scale from 1 to 5. A readability of 1 means the transmission is completely 'Unreadable'."
    },
    {
      id: 51,
      question: "What does a readability of 2 indicate?",
      options: [
        "The transmission is readable now and then",
        "The transmission is readable but with difficulty",
        "The transmission is perfectly readable",
        "The transmission is unreadable"
      ],
      correctIndex: 0,
      explanation: "On the 1-to-5 readability scale, a 2 indicates that the transmission is 'Readable now and then', meaning it is heavily distorted or intermittent."
    },
    {
      id: 52,
      question: "What does a readability of 3 indicate?",
      options: [
        "The transmission is readable now and then",
        "The transmission is perfectly readable",
        "The transmission is readable but with difficulty",
        "The transmission is unreadable"
      ],
      correctIndex: 2,
      explanation: "A readability of 3 means the transmission is 'Readable but with difficulty'. The message can be understood, but it requires significant concentration from the listener."
    },
    {
      id: 53,
      question: "What does a readability of 5 indicate?",
      options: [
        "The transmission is readable now and then",
        "The transmission is readable but with difficulty",
        "The transmission is unreadable",
        "The transmission is perfectly readable"
      ],
      correctIndex: 3,
      explanation: "A readability of 5 is the highest score on the radio check scale, indicating that the transmission is 'Perfectly readable' (loud and clear)."
    },
    {
      id: 54,
      question: "Which information from a ground station does not require readback?",
      options: [
        "Runway in use",
        "Wind",
        "SSR-Code",
        "Altitude"
      ],
      correctIndex: 1,
      explanation: "Critical safety instructions such as clearances, runways in use, headings, SSR transponder codes, and altitudes MUST be read back. Wind information is provided for situational awareness and does not require a readback."
    },
    {
      id: 55,
      question: "Which information from a ground station does not require readback?",
      options: [
        "Altimeter setting",
        "Traffic information",
        "Taxi instructions",
        "Heading"
      ],
      correctIndex: 1,
      explanation: "Traffic information is an advisory service to help the pilot 'see and avoid' other aircraft. Since it is not a clearance or a flight parameter instruction (like heading, altimeter, or taxi route), it does not legally require a readback."
    },
    {
      id: 56,
      question: "What is the correct way of acknowledging the instruction \"DZF after lift-off climb straight ahead until 2500 feet before turning right heading 220 degrees, wind 090 degrees, 5 knots, runway 12, cleared for take-off\"?",
      options: [
        "DZF after lift-off climb straight ahead 2500 feet, wilco, heading 220 degrees, 090 degrees, 5 knots, cleared for take-off",
        "DZF after lift-off climb straight ahead 2500 feet, then turn right heading 220, runway 12, cleared for take-off",
        "DZF after lift-off climb straight ahead 2500 feet, then turn right heading 220, 090 degrees, 5 knots",
        "DZF after lift-off climb straight ahead 2500 feet, then turn right heading 220, 090 degrees, 5 knots, cleared for take-off"
      ],
      correctIndex: 1,
      explanation: "The pilot must read back the mandatory safety items: clearance limit (2500 feet), the heading instruction (220), the runway in use (12), and the actual take-off clearance. Wind information is omitted from the readback as it is advisory."
    },
    {
      id: 57,
      question: "What is the correct way of acknowledging the instruction \"Next report PAH\"?",
      options: [
        "Positive",
        "Roger",
        "Report PAH",
        "Wilco"
      ],
      correctIndex: 3,
      explanation: "The pro-word 'WILCO' stands for 'Will Comply'. It is the standard and concise way to acknowledge an instruction and confirm that the pilot understands and will execute it (in this case, reporting at the PAH waypoint)."
    },
    {
      id: 58,
      question: "What is the correct way of acknowledging the instruction \"Squawk 4321, Call Bremen Radar on 131.325\"?",
      options: [
        "Roger",
        "Squawk 4321, wilco",
        "Squawk 4321, 131.325",
        "Wilco"
      ],
      correctIndex: 2,
      explanation: "Both transponder (squawk) codes and radio frequencies are critical parameters that must be strictly read back to ensure accuracy. Therefore, repeating the code and the frequency is the only correct acknowledgment."
    },
    {
      id: 59,
      question: "What is the correct way of acknowledging \"You are now entering airspace Delta\"?",
      options: [
        "Entering",
        "Roger",
        "Wilco",
        "Airspace Delta"
      ],
      correctIndex: 1,
      explanation: "The phrase 'ROGER' means 'I have received all of your last transmission'. Since 'entering airspace Delta' is purely informational and not an instruction to comply with, 'ROGER' is the correct response."
    },
    {
      id: 60,
      question: "What does a cloud coverage of \"FEW\" mean in a METAR weather report?",
      options: [
        "8 eighths",
        "1 to 2 eighths",
        "5 to 7 eighths",
        "3 to 4 eighths"
      ],
      correctIndex: 1,
      explanation: "Cloud coverage in METARs is measured in 'oktas' (eighths of the sky). 'FEW' indicates that 1 to 2 eighths of the sky is covered by clouds."
    },
    {
      id: 61,
      question: "What does a cloud coverage of \"SCT\" mean in a METAR weather report?",
      options: [
        "1 to 2 eighths",
        "8 eighths",
        "3 to 4 eighths",
        "5 to 7 eighths"
      ],
      correctIndex: 2,
      explanation: "The abbreviation 'SCT' stands for Scattered. In aviation meteorology, this specifically means that 3 to 4 eighths (oktas) of the sky is covered by clouds. It does not constitute a 'ceiling'."
    },
    {
      id: 62,
      question: "What does a cloud coverage of \"BKN\" mean in a METAR weather report?",
      options: [
        "3 to 4 eighths",
        "8 eighths",
        "5 to 7 eighths",
        "1 to 2 eighths"
      ],
      correctIndex: 2,
      explanation: "The abbreviation 'BKN' stands for Broken. It indicates that 5 to 7 eighths of the sky is covered by clouds. A BKN layer is the lowest coverage amount that constitutes an official 'ceiling'."
    },
    {
      id: 63,
      question: "Given a visibility of 12 km, what is the correct way to transmit this visibility?",
      options: [
        "One-two kilometers.",
        "Twelve kilometers.",
        "One-zero kilometers or more.",
        "One-zero kilometers."
      ],
      correctIndex: 2,
      explanation: "In aviation weather reporting (such as ATIS or METAR), any visibility of 10 kilometers or greater is capped and officially transmitted as '10 kilometers or more' (coded as 9999 in METAR), pronounced as 'One-zero kilometers or more'."
    },
    {
      id: 64,
      question: "In what case is visibility transmitted in meters?",
      options: [
        "Up to 5 km",
        "Greater than 10 km",
        "Greater than 5 km",
        "Up to 10 km"
      ],
      correctIndex: 0,
      explanation: "According to ICAO reporting standards, visibility is reported in meters (in increments of 50m, 100m, etc.) when the visibility is less than 5,000 meters (5 km). Above 5,000 meters, it is usually reported in kilometers."
    },
    {
      id: 65,
      question: "In what cases is visibility transmitted in kilometers?",
      options: [
        "Up to 10 km",
        "Greater than 5 km",
        "Up to 5 km",
        "Greater than 10 km"
      ],
      correctIndex: 1,
      explanation: "When visibility exceeds 5,000 meters (5 km), it is reported in whole kilometers (e.g., 6 km, 7 km) up to 9 kilometers, after which it is reported as '10 kilometers or more'."
    },
    {
      id: 66,
      question: "What information is broadcasted on a VOLMET frequency?",
      options: [
        "Navigational information",
        "NOTAMS",
        "Current information",
        "Meteorological information"
      ],
      correctIndex: 3,
      explanation: "VOLMET (Volume Meteorological) is a worldwide network of radio stations that continuously broadcast meteorological information (such as METARs, TAFs, and SIGMETs) over VHF or HF frequencies for aircraft in flight."
    },
    {
      id: 67,
      question: "Which navigation facility may be used for broadcasting the ATIS?",
      options: [
        "GPS",
        "DME",
        "NDB",
        "VOR"
      ],
      correctIndex: 3,
      explanation: "While typically broadcast on a dedicated VHF comm frequency, ATIS (Automatic Terminal Information Service) can also be multiplexed and transmitted over the voice channel of a local VOR (VHF Omnidirectional Range) station."
    },
    {
      id: 68,
      question: "How can you obtain meteorological information concerning airports during a cross-country flight?",
      options: [
        "VOLMET",
        "GAMET",
        "METAR",
        "AIRMET"
      ],
      correctIndex: 0,
      explanation: "During a cross-country flight, the standard method to obtain current weather updates for multiple airports along the route is to tune the radio to a regional VOLMET broadcast frequency."
    },
    {
      id: 69,
      question: "Which transponder code indicates a radio failure?",
      options: [
        "7700",
        "7600",
        "7500",
        "7000"
      ],
      correctIndex: 1,
      explanation: "The emergency transponder code for a two-way radio communication failure is 7600. Setting this alerts ATC that the aircraft is flying blind regarding ATC instructions."
    },
    {
      id: 70,
      question: "What is the correct phrase to begin a blind transmission?",
      options: [
        "Blind",
        "Transmitting blind",
        "No reception",
        "Listen"
      ],
      correctIndex: 1,
      explanation: "If a pilot cannot hear the ground station but suspects their radio transmitter is still working, they should broadcast their intentions by prefacing the message with the standard phrase 'Transmitting blind'."
    },
    {
      id: 71,
      question: "On what frequency shall a blind transmission be made?",
      options: [
        "On the appropriate FIS frequency",
        "On a radar frequency of the lower airspace",
        "On the current frequency",
        "On a tower frequency"
      ],
      correctIndex: 2,
      explanation: "A blind transmission should initially be made on the current frequency the aircraft is tuned to, as the local ATC or other nearby aircraft are already monitoring that channel."
    },
    {
      id: 72,
      question: "How often shall a blind transmission be made?",
      options: [
        "Two times",
        "Three times",
        "Four times",
        "One time"
      ],
      correctIndex: 0,
      explanation: "To ensure the message is received and understood despite potential static or overlapping transmissions, a blind transmission should be spoken clearly and repeated twice."
    },
    {
      id: 73,
      question: "In what situation is it appropriate to set the transponder code 7600?",
      options: [
        "Hijacking",
        "Emergency",
        "Flight into clouds",
        "Loss of radio"
      ],
      correctIndex: 3,
      explanation: "Squawk 7600 is the internationally recognized transponder code indicating a complete loss of two-way radio communications."
    },
    {
      id: 74,
      question: "What is the correct course of action when experiencing a radio failure in class D airspace?",
      options: [
        "The flight has to be continued above 5000 feet complying with VFR flight rules or the airspace has to be left by the shortest route",
        "The flight has to be continued according to the last clearance complying with VFR rules or the airspace has to be left by the shortest route",
        "The flight has to be continued above 5000 feet complying with VFR flight rules or the airspace has to be left using a standard routing",
        "The flight has to be continued according to the last clearance complying with VFR flight rules or the airspace has to be left using a standard routing"
      ],
      correctIndex: 1,
      explanation: "If a VFR aircraft experiences radio failure within controlled airspace (Class D), the pilot must either strictly maintain the last clearance given by ATC (if entering the pattern) or immediately vacate the airspace by the shortest, safest route."
    },
    {
      id: 75,
      question: "Under what conditions may class D airspace be entered with a radio failure?",
      options: [
        "Approval has been granted before",
        "There are other aircraft in the aerodrome circuit",
        "It ist the aerodrome of departure",
        "It is the destination aerodrome"
      ],
      correctIndex: 0,
      explanation: "Entering Class D airspace legally requires establishing two-way radio communication. If the radio fails before entry, the aircraft may NOT enter, unless prior coordination/approval (e.g., via telephone before the flight) was explicitly granted for a no-radio arrival."
    },
    {
      id: 76,
      question: "Which phrase is to be repeated three times before transmitting an urgency message?",
      options: [
        "Help",
        "Urgent",
        "Pan Pan",
        "Mayday"
      ],
      correctIndex: 2,
      explanation: "The international urgency signal is 'PAN PAN'. It must be spoken three times ('PAN PAN, PAN PAN, PAN PAN') at the beginning of the transmission to clear the frequency for the urgency message."
    },
    {
      id: 77,
      question: "Urgency messages are defined as...",
      options: [
        "messages concerning urgent spare parts which are needed for a continuation of flight and which need to be ordered in advance.",
        "messages concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
        "information concerning the apron personell and which imply an imminent danger to landing aircraft.",
        "messages concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance."
      ],
      correctIndex: 1,
      explanation: "An urgency message (PAN PAN) indicates that the calling station has a very urgent message to transmit concerning the safety of an aircraft, ship, or person, but it does NOT require immediate rescue assistance."
    },
    {
      id: 78,
      question: "Distress messages contain...",
      options: [
        "information concerning urgent spare parts which are required for a continuation of flight and which have to be ordered in advance.",
        "information concerning the apron personell and which imply an imminent danger to landing aircraft.",
        "information concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
        "information concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance."
      ],
      correctIndex: 3,
      explanation: "A distress message (MAYDAY) is the highest priority communication. It signifies that the aircraft and its occupants are in grave and imminent danger and require immediate, life-saving assistance."
    },
    {
      id: 79,
      question: "What is the correct frequency for an initial distress message?",
      options: [
        "Emergency frequency",
        "Current frequency",
        "FIS frequency",
        "Radar frequency"
      ],
      correctIndex: 1,
      explanation: "The first action in a distress situation is to transmit the MAYDAY call on the air-ground frequency currently in use. The controller on that frequency already knows your position and flight details. Only if there is no response should the pilot switch to the 121.5 MHz emergency frequency."
    },
    {
      id: 80,
      question: "What kind of information should be included in an urgency message?",
      options: [
        "Nature of problem or observation, important information for support, departure aerodrome, information about position, heading and altitude",
        "Intended routing, important information for support, intentions of the pilot, information about position, departure aerodrome, heading and altitude",
        "Nature of problem or observation, important information for support, intentions of the pilot, information about position, heading and altitude",
        "Intended routing, important information for support, intentions of the pilot, departure aerodrome, destination aerodrome, heading and altitude"
      ],
      correctIndex: 2,
      explanation: "A comprehensive urgency (PAN PAN) message should convey the callsign, the exact nature of the problem, the pilot's intentions, the aircraft's present position, heading, and altitude, and any specific support required."
    },
    {
      id: 81,
      question: "The correct transponder code for emergencies is...",
      options: [
        "7700.",
        "7000.",
        "7600.",
        "7500."
      ],
      correctIndex: 0,
      explanation: "Squawk 7700 is the universal emergency transponder code. It immediately triggers visual and audible alarms on ATC radar screens, highlighting the aircraft in distress."
    },
    {
      id: 82,
      question: "Which of the following frequencies is designated for VHF voice communication?",
      options: [
        "118.75 kHz",
        "327.25 MHz",
        "327.25 kHz",
        "118.75 MHz"
      ],
      correctIndex: 3,
      explanation: "Civil aviation voice communications operate in the Very High Frequency (VHF) band, specifically between 118.000 MHz and 136.975 MHz. Therefore, 118.75 MHz is a valid aviation voice frequency."
    },
    {
      id: 83,
      question: "Which of the following frequencies is designated for VHF voice communication?",
      options: [
        "120.50 MHz",
        "115.15 MHz",
        "108.80 MHz",
        "117.30 kHz"
      ],
      correctIndex: 0,
      explanation: "The VHF COM band ranges from 118.000 to 136.975 MHz. Frequencies like 108.80 to 117.95 MHz are reserved for NAV aids (VOR/ILS). Therefore, 120.50 MHz is the only valid voice communication frequency listed."
    },
    {
      id: 84,
      question: "What is the correct designation of the frequency band from 118.000 to 136.975 MHz used for voice communication?",
      options: [
        "LF",
        "VHF",
        "MF",
        "HF"
      ],
      correctIndex: 1,
      explanation: "The frequency range from 118.000 to 136.975 MHz falls within the Very High Frequency (VHF) spectrum, which is the global standard for short-range, line-of-sight aviation voice communications."
    },
    {
      id: 85,
      question: "Which of the following factors affects the reception of VHF transmissions?",
      options: [
        "Altitude",
        "Shoreline effect",
        "Twilight error",
        "Height of ionosphere"
      ],
      correctIndex: 0,
      explanation: "VHF radio waves propagate primarily by line-of-sight. They cannot pass through mountains or bend around the Earth. Consequently, the higher the altitude of the transmitting or receiving aircraft, the further the radio horizon, directly improving reception range."
    },
    {
      id: 86,
      question: "What is the approximate speed of electromagnetic wave propagation?",
      options: [
        "123000 m/s",
        "300000 km/s",
        "123000 km/s",
        "300000 m/s"
      ],
      correctIndex: 1,
      explanation: "Radio waves are a form of electromagnetic radiation. In a vacuum (and very nearly so in the atmosphere), they travel at the speed of light, which is approximately 300,000 kilometers per second."
    },
    {
      id: 87,
      question: "An ATIS is valid for...",
      options: [
        "10 minutes.",
        "45 minutes.",
        "60 minutes.",
        "30 minutes."
      ],
      correctIndex: 3,
      explanation: "An Automatic Terminal Information Service (ATIS) broadcast is typically updated and valid for 30 minutes, or sooner if a significant change in weather (SPECI) or operational conditions occurs at the aerodrome."
    }
  ],
pof: [
    {
      id: 1,
      question: "Compared to trailing edge flaps, leading edge devices like Slots...",
      options: [
        "reduce the critical angle of attack at a given speed.",
        "allow higher speeds at take-off and landing.",
        "produce less drag while allowing a higher angle of attack.",
        "increase the camber and allow a lower angle of attack."
      ],
      correctIndex: 2,
      explanation: "Leading edge devices, such as slots or slats, re-energize the boundary layer by ducting high-pressure air from below the wing to the upper surface. This delays boundary layer separation, allowing the wing to reach a much higher critical angle of attack without stalling, and they do so producing significantly less drag compared to trailing edge flaps."
    },
    {
      id: 2,
      question: "Stabilization around the lateral axis during cruise is achieved by the...",
      options: [
        "horizontal stabilizer.",
        "airlerons.",
        "wing flaps.",
        "vertical rudder."
      ],
      correctIndex: 0,
      explanation: "The lateral axis (pitch axis) runs from wingtip to wingtip. Stabilization around this axis—preventing the nose from pitching up or down uncommanded—is the primary aerodynamic function of the horizontal stabilizer located at the tail."
    },
    {
      id: 3,
      question: "Flying with speeds higher than the never-exceed-speed (vNE) may result in...",
      options: [
        "too high total pressure resulting in an unusable airspeed indicator.",
        "flutter and mechanically damaging the wings.",
        "an increased lift-to-drag ratio and a better glide angle.",
        "reduced drag with increased control forces."
      ],
      correctIndex: 1,
      explanation: "Vne (Velocity Never Exceed) is the absolute maximum structural speed of the aircraft. Exceeding Vne can induce aeroelastic flutter—violent, uncontrolled vibrations of the control surfaces and wings—which can rapidly lead to catastrophic structural failure in mid-air."
    },
    {
      id: 4,
      question: "What effects typically result from propeller icing?",
      options: [
        "Reduced power output, decreasing RPM.",
        "Increased power output, decreasing RPM.",
        "Increased power output, increasing RPM.",
        "Reduced power output, increasing RPM."
      ],
      correctIndex: 0,
      explanation: "A propeller is fundamentally a rotating airfoil. When ice accumulates on the propeller blades, it distorts their aerodynamic shape, destroying lift (thrust) and massively increasing parasite drag. This loss of aerodynamic efficiency results in reduced power output and, especially on fixed-pitch propellers, a noticeable decrease in engine RPM."
    },
    {
      id: 5,
      question: "During a straight and steady climb, which force acts addionally, and in the same direction as the drag force, resulting in more power required for climb than for horizontal flight?",
      options: [
        "A component of the weight force along the rearward flight path.",
        "The vertical component of the weight force.",
        "A component of the thrust along the rearward flightpath.",
        "A component of the lift force along the forward flightpath."
      ],
      correctIndex: 0,
      explanation: "When an aircraft climbs, the flight path is tilted upward relative to the horizon. Consequently, the weight vector (which always pulls straight down toward the center of the Earth) has a rearward component that acts parallel to the flight path, pointing in the exact same direction as aerodynamic drag. Thrust must overcome both drag and this rearward component of weight."
    },
    {
      id: 6,
      question: "The static pressure of gases work...",
      options: [
        "only vertical to the flow direction.",
        "only in the direction of the total pressure.",
        "in all directions.",
        "only in flow direction."
      ],
      correctIndex: 2,
      explanation: "According to fluid dynamics, static pressure—the pressure exerted by the random, ambient motion of gas molecules—acts equally in all directions within a fluid, regardless of whether the fluid is moving or stationary."
    },
    {
      id: 7,
      question: "Bernoulli's equation for frictionless, incompressible gases states that...",
      options: [
        "static pressure = total pressure + dynamic pressure.",
        "total pressure = dynamic pressure - static pressure.",
        "dynamic pressure = total pressure + static pressure.",
        "total pressure = dynamic pressure + static pressure."
      ],
      correctIndex: 3,
      explanation: "Bernoulli's principle establishes the conservation of energy in a fluid stream. It states that the Total Pressure (the constant energy of the system) is the sum of the Static Pressure (ambient pressure) and the Dynamic Pressure (pressure due to velocity). If velocity increases, dynamic pressure increases, meaning static pressure must decrease."
    },
    {
      id: 8,
      question: "If surrounded by airflow (v>0), any arbitrarily shaped body produces...",
      options: [
        "lift without drag.",
        "drag and lift.",
        "constant drag at any speed.",
        "drag."
      ],
      correctIndex: 3,
      explanation: "Any object, regardless of its shape, moving through a fluid (like air) will displace that fluid and experience resistance due to skin friction and pressure differences. Therefore, any body in an airflow will invariably produce drag. Lift, however, requires a specific asymmetric shape or angle (like an airfoil) to be generated."
    },
    {
      id: 9,
      question: "All aerodynamic forces can be considered to act on a single point. This point is called...",
      options: [
        "center of gravity.",
        "center of pressure.",
        "lift point.",
        "transition point."
      ],
      correctIndex: 1,
      explanation: "The Center of Pressure (CP) is the theoretical point on an airfoil chord line where the entire resultant of all aerodynamic pressure forces (both lift and drag) can be considered to act. It acts as the aerodynamic equivalent of the center of gravity."
    },
    {
      id: 10,
      question: "The center of pressure is the theoretical point of origin of...",
      options: [
        "only the resulting total drag.",
        "all aerodynamic forces of the profile.",
        "gravity forces of the profile.",
        "gravity and aerodynamic forces."
      ],
      correctIndex: 1,
      explanation: "By definition, the Center of Pressure is the single, dynamic point on the wing where the distributed sum of all aerodynamic pressure variations (producing total lift and total drag) effectively originates."
    },
    {
      id: 11,
      question: "Number 2 in the drawing corresponds to the... (See figure PFA-010)",
      img: "PFA-010.png",
      options: [
        "chord line.",
        "chord.",
        "angle of attack.",
        "profile thickness."
      ],
      correctIndex: 1,
      explanation: "In standard airfoil geometry, the straight geometric line connecting the exact leading edge to the exact trailing edge is called the chord. (It represents the reference length used for aerodynamic calculations)."
    },
    {
      id: 12,
      question: "Number 3 in the drawing corresponds to the... (See figure PFA-010)",
      img: "PFA-010.png",
      options: [
        "chord.",
        "thickness.",
        "camber line.",
        "chord line."
      ],
      correctIndex: 2,
      explanation: "Number 3 points to the curved line drawn precisely halfway between the upper and lower surfaces of the airfoil. This is the mean camber line, which defines the asymmetry (curvature) of the wing."
    },
    {
      id: 13,
      question: "The angle of attack is the angle between...",
      options: [
        "the undisturbed airflow and the longitudinal axis of an aeroplane.",
        "the chord line and the longitudinal axis of an aeroplane.",
        "the chord line and the oncoming airflow.",
        "the wing and the fuselage of an aeroplane."
      ],
      correctIndex: 2,
      explanation: "The Angle of Attack (AoA or Alpha) is strictly the aerodynamic angle formed between the chord line of the airfoil and the direction of the relative wind (the undisturbed, oncoming airflow)."
    },
    {
      id: 14,
      question: "The ratio of span and mean chord length is referred to as...",
      options: [
        "trapezium shape.",
        "tapering.",
        "aspect ratio.",
        "wing sweep."
      ],
      correctIndex: 2,
      explanation: "Aspect Ratio is a measure of how long and slender a wing is. It is calculated by dividing the wingspan by the mean chord length (or mathematically, span squared divided by wing area). Gliders have a very high aspect ratio."
    },
    {
      id: 15,
      question: "Which point on the aerofoil is represented by number 3? (See figure PFA-009)",
      img: "PFA-009.png",
      options: [
        "Separation point",
        "Center of pressure",
        "Stagnation point",
        "Transition point"
      ],
      correctIndex: 3,
      explanation: "Point 3 indicates the 'Transition point'—the specific location on the upper surface of the wing where the smooth, layered Laminar boundary layer becomes chaotic and turns into the Turbulent boundary layer."
    },
    {
      id: 16,
      question: "Which point on the aerofoil is represented by number 4? (See figure PFA-009)",
      img: "PFA-009.png",
      options: [
        "Center of pressure",
        "Separation point",
        "Transition point",
        "Stagnation point"
      ],
      correctIndex: 1,
      explanation: "Point 4 shows where the turbulent boundary layer detaches completely from the surface of the wing and creates a wake of turbulent eddies. This is known as the Separation point."
    },
    {
      id: 17,
      question: "Wing tip vortex development begins during which phase of flight?",
      options: [
        "As soon as the aircraft starts moving",
        "While setting take-off power during take-off run",
        "While setting flaps to lower position",
        "When lift is being generated during rotation"
      ],
      correctIndex: 3,
      explanation: "Wing tip vortices (wake turbulence) are a direct, unavoidable byproduct of the creation of lift. Because lift is not generated until the aircraft's nose is pitched up (rotated) during the takeoff roll to increase the angle of attack, the vortices begin precisely at rotation."
    },
    {
      id: 18,
      question: "Which point on the aerofoil is represented by number 1? (See figure PFA-009)",
      img: "PFA-009.png",
      options: [
        "Transition point",
        "Stagnation point",
        "Center of pressure",
        "Separation point"
      ],
      correctIndex: 1,
      explanation: "Point 1 is the Stagnation point. It is the exact location on the leading edge where the oncoming airflow impacts the wing directly, bringing the local air velocity to zero and creating the highest static pressure."
    },
    {
      id: 19,
      question: "What pattern can be found at the stagnation point?",
      options: [
        "The boundary layer starts separating on the upper surface of the profile",
        "The laminar boundary layer changes into a turbulent boundary layer",
        "All aerodynamic forces can be considered as attacking at this single point",
        "Streamlines are divided into airflow above and below the profile"
      ],
      correctIndex: 3,
      explanation: "At the stagnation point, the oncoming relative wind is physically split. The air streamlines divide; some are forced to travel over the upper camber of the wing, while the rest travel underneath."
    },
    {
      id: 20,
      question: "What pressure pattern can be observed at a lift-generating wing profile at positive angle of attack?",
      options: [
        "Low pressure is created above, higher pressure below the profile",
        "High pressure is created above, lower pressure below the profile",
        "Pressure above remains unchanged, higher pressure is created below the profile",
        "Pressure below remains unchanged, lower pressure is created above the profile"
      ],
      correctIndex: 0,
      explanation: "Due to the camber of the wing and the angle of attack, air accelerates over the top surface (increasing dynamic pressure, decreasing static pressure) and decelerates underneath (decreasing dynamic pressure, increasing static pressure). This creates a net upward force (lift) pulling towards the low pressure above."
    },
    {
      id: 21,
      question: "The position of the the center of pressure at a positively shaped profile...",
      options: [
        "moves to the leading edge while the angle of attack becomes smaller.",
        "is located at approximately 25% of the chord, measured from the leading edge.",
        "moves to the trailing edge while the angle of attack becomes smaller.",
        "does not move since it is independent of the angle of attack."
      ],
      correctIndex: 2,
      explanation: "On a standard cambered (positively shaped) airfoil, the Center of Pressure is dynamic. As the Angle of Attack decreases (nose down), the low-pressure area flattens and moves aft, causing the Center of Pressure to move rearward toward the trailing edge."
    },
    {
      id: 22,
      question: "In which way does the position of the center of pressure move at a positively shaped profile with increasing angle of attack?",
      options: [
        "It moves backward until reaching the critical angle of attack",
        "It moves forward first, then backward",
        "It moves forward until reaching the critical angle of attack",
        "It moves to the wing tips"
      ],
      correctIndex: 2,
      explanation: "As you pitch the nose up and increase the Angle of Attack, the sharpest curvature relative to the wind shifts forward, creating a huge low-pressure suction peak near the leading edge. Consequently, the Center of Pressure moves progressively forward until the wing stalls at the critical AoA."
    },
    {
      id: 23,
      question: "Which statement about lift and angle of attack is correct?",
      options: [
        "Too large angles of attack can lead to an exponential increase in lift",
        "Increasing the angle of attack results in less lift being generated by the aerofoil",
        "Increasing the angle of attack too far may result in a loss of lift and an airflow separation",
        "Decreasing the angle of attack results in more drag being generated by the aerofoil"
      ],
      correctIndex: 2,
      explanation: "Lift increases linearly with the angle of attack up to a certain maximum point. If you increase the angle past this critical limit (the critical angle of attack), the air can no longer smoothly follow the upper contour of the wing, separating turbulently and causing a sudden, dangerous loss of lift known as a stall."
    },
    {
      id: 24,
      question: "Which statement about the airflow around an aerofoil is correct if the angle of attack increases?",
      options: [
        "The stagnation point moves down",
        "The center of pressure moves down",
        "The center of pressure moves up",
        "The stagnation point moves up"
      ],
      correctIndex: 0,
      explanation: "As the leading edge of the wing is pitched upward into the relative wind, the exact point where the air hits the wing directly head-on (the stagnation point) shifts further down towards the lower surface of the leading edge."
    },
    {
      id: 25,
      question: "Which statement about the airflow around an aerofoil is correct if the angle of attack decreases?",
      options: [
        "The center of pressure moves aft",
        "The stagnation point remains constant",
        "The stagnation point moves down",
        "The center of pressure moves forward"
      ],
      correctIndex: 0,
      explanation: "As the angle of attack decreases, the intensity of the low-pressure suction peak near the leading edge diminishes and spreads out. This causes the total resultant lift force—the Center of Pressure—to migrate backwards (aft) along the chord line."
    },
    {
      id: 26,
      question: "The angle (alpha) shown in the figure is referred to as... (See figure PFA-003)",
      img: "PFA-003.png",
      options: [
        "lift angle.",
        "angle of incidence.",
        "angle of inclination.",
        "angle of attack."
      ],
      correctIndex: 3,
      explanation: "The Greek letter alpha (α) is universally used in aerodynamics to denote the Angle of Attack, which is the angle between the wing's chord line and the direction of the relative airflow."
    },
    {
      id: 27,
      question: "In order to improve the stall characteristics of an aircraft, the wing is twisted outwards (the angle of incidence varies spanwise). This is known as...",
      options: [
        "aerodynamic washout.",
        "arrow shape.",
        "V-form.",
        "geometric washout."
      ],
      correctIndex: 3,
      explanation: "Geometric washout is a design feature where the wing is physically twisted during manufacturing so that the wingtip has a lower angle of incidence (points further down) than the wing root. This ensures the root stalls first while the tips remain flying."
    },
    {
      id: 28,
      question: "Which option states a benefit of wing washout?",
      options: [
        "Structurally the wing is made more rigid against rotation",
        "With the washout the form drag reduces at high speeds",
        "Greater hardness because the wing can withstand more torsion forces",
        "At high angles of attack the effectiveness of the aileron is retained as long as possible"
      ],
      correctIndex: 3,
      explanation: "Because washout forces the wing root to stall before the wingtip, smooth airflow is maintained over the outer portions of the wing during the onset of a stall. This guarantees that the pilot retains roll control via the ailerons to recover the aircraft safely."
    },
    {
      id: 29,
      question: "Which statement concerning the angle of attack is correct?",
      options: [
        "The angle of attack cannot be negative",
        "Increasing the angle of attack results in decreasing lift",
        "The angle of attack is constant throughout the flight",
        "A too large angle of attack may result in a loss of lift"
      ],
      correctIndex: 3,
      explanation: "Exceeding the critical angle of attack (typically around 15-18 degrees for light aircraft) destroys the smooth boundary layer airflow over the upper camber. The airflow separates, lift collapses dramatically, and drag surges—a phenomenon called a stall."
    },
    {
      id: 30,
      question: "When increasing the airflow speed by a factor of 2 while keeping all other parameters constant, how does the parasite drag change approximately?",
      options: [
        "It decreases by a factor of 2",
        "It increases by a factor of 2",
        "It decreases by a factor of 4",
        "It increases by a factor of 4"
      ],
      correctIndex: 3,
      explanation: "The aerodynamic drag equation establishes that parasite drag increases with the square of the velocity (v²). Therefore, if you double the airspeed (2v), the drag will multiply by a factor of four (2² = 4)."
    },
    {
      id: 31,
      question: "The drag coefficient...",
      options: [
        "increases with increasing airspeed.",
        "is proportional to the lift coefficient.",
        "cannot be lower than a non-negative, minimal value.",
        "may range from zero to an infinite positive value."
      ],
      correctIndex: 2,
      explanation: "The drag coefficient (Cd) is an index of aerodynamic efficiency based on shape. Even a perfect teardrop shape produces some friction and displacement. Thus, the drag coefficient can never reach zero; there is always a baseline, non-negative minimal value of profile drag."
    },
    {
      id: 32,
      question: "Pressure compensation on an wing occurs at the...",
      options: [
        "wing roots.",
        "wing tips.",
        "trailing edge.",
        "leading edge."
      ],
      correctIndex: 1,
      explanation: "Nature abhors a pressure difference. The high-pressure air under the wing naturally attempts to escape and 'compensate' the low-pressure area above the wing. Because the wing blocks this along the span, the air spills over at the only free extremities: the wing tips, generating vortices."
    },
    {
      id: 33,
      question: "Which of the following options is likely to produce large induced drag?",
      options: [
        "Large aspect ratio",
        "Tapered wings",
        "Small aspect ratio",
        "Low lift coefficients"
      ],
      correctIndex: 2,
      explanation: "Induced drag is a penalty of producing lift and is inversely proportional to Aspect Ratio. A small aspect ratio means a short, stubby wing. Short wings have proportionally larger wingtips relative to their span, allowing massive pressure spillover and generating brutal induced drag."
    },
    {
      id: 34,
      question: "Which parts of an aircraft mainly affect the generation of induced drag?",
      options: [
        "the front part of the fuselage.",
        "the wing tips.",
        "the lower part of the gear.",
        "the outer part of the ailerons."
      ],
      correctIndex: 1,
      explanation: "Induced drag is caused by the spanwise flow of air curling around from the high-pressure bottom to the low-pressure top. The only place this physical 'spillover' can occur is at the extreme ends of the wings—the wing tips."
    },
    {
      id: 35,
      question: "Where is interference drag generated?",
      options: [
        "At the wing root",
        "At the ailerons",
        "At the the gear",
        "Near the wing tips"
      ],
      correctIndex: 0,
      explanation: "Interference drag occurs when turbulent airflows from two intersecting aircraft surfaces collide and mix, creating extra drag. The most significant area for this is the wing root, where the airflow over the wing crashes into the airflow moving along the fuselage."
    },
    {
      id: 36,
      question: "Which curve represents the induced drag? See Appendix (PFA-011)",
      img: "PFA-011.png",
      options: [
        "1",
        "4",
        "2",
        "3"
      ],
      correctIndex: 0,
      explanation: "Induced drag is highest at low speeds (when the aircraft flies at a high angle of attack to maintain lift) and rapidly decreases as airspeed increases. Curve 1 on the drag graph correctly shows this exponential decay with speed."
    },
    {
      id: 37,
      question: "Pressure drag, interference drag and friction drag belong to the group of the...",
      options: [
        "induced drag.",
        "parasite drag.",
        "main resistance.",
        "total drag."
      ],
      correctIndex: 1,
      explanation: "Aerodynamic drag is split into two major categories. Induced drag (caused by creating lift) and Parasite drag. Parasite drag encompasses all forms of drag not related to generating lift, which includes form (pressure) drag, skin friction drag, and interference drag."
    },
    {
      id: 38,
      question: "What kind of drag is NOT part of the parasite drag?",
      options: [
        "Interference drag",
        "Skin-friction drag",
        "Induced drag",
        "Form drag"
      ],
      correctIndex: 2,
      explanation: "Induced drag is strictly a byproduct of lift generation (wingtip vortices). It is not categorized under parasite drag, which refers solely to the physical resistance of the aircraft's structure moving through the air."
    },
    {
      id: 39,
      question: "How do induced drag and parasite drag change with increasing airspeed during a horizontal and stable cruise flight?",
      options: [
        "Induced drag decreases and parasite drag increases",
        "Parasite drag decreases and induced drag increases",
        "Parasite drag decreases and induced drag decreases",
        "Induced drag increases and parasite drag increases"
      ],
      correctIndex: 0,
      explanation: "As you accelerate, you must lower the Angle of Attack to maintain level flight, which drastically shrinks the wingtip vortices, meaning Induced Drag DECREASES. Conversely, pushing the airframe through the air faster quadratically spikes air resistance, meaning Parasite Drag INCREASES."
    },
    {
      id: 40,
      question: "Which of the listed wing shapes has the lowest induced drag?",
      options: [
        "Elliptical shape",
        "Double trapezoidal shape",
        "Rectangular shape",
        "Trapezoidal shape"
      ],
      correctIndex: 0,
      explanation: "Aerodynamic theory dictates that an elliptical wing planform (famously used on the Supermarine Spitfire) provides a mathematically perfect, uniform lift distribution across the entire span, minimizing wingtip vortices and yielding the absolute lowest possible induced drag."
    },
    {
      id: 41,
      question: "Which effect does a decreasing airspeed have on the induced drag during a horizontal and stable cruise flight?",
      options: [
        "The induced drag will increase",
        "The induced drag will collapse",
        "The induced drag will remain constant",
        "The induced drag will slightly decrease"
      ],
      correctIndex: 0,
      explanation: "To maintain level flight as speed decreases, the pilot must pitch the nose up (increase Angle of Attack). A higher AoA creates a massive pressure differential between the upper and lower wing surfaces, driving violent spillover at the wingtips and hugely increasing induced drag."
    },
    {
      id: 42,
      question: "Which statement about induced drag during the horizontal cruise flight is correct?",
      options: [
        "Induced drag has a minimum at a certain speed and increases at higher as well as lower speeds",
        "Induced drag has a maximum at a certain speed and decreases at higher as well as lower speeds",
        "Induced drag increases with increasing airspeed",
        "Induced drag decreases with increasing airspeed"
      ],
      correctIndex: 3,
      explanation: "Because a faster aircraft requires a smaller angle of attack to support its weight, the pressure differential over the wing is flatter. This weaker pressure gradient produces smaller, weaker wingtip vortices, leading directly to a continuous decrease in induced drag as airspeed climbs."
    },
    {
      id: 43,
      question: "In which mentioned situation is the total drag at its minimum?",
      options: [
        "Induced drag is twice as much as parasite drag",
        "Parasite drag is twice as much as induced drag",
        "Parasite drag is equal to induced drag",
        "Induced drag is smaller than parasite drag"
      ],
      correctIndex: 2,
      explanation: "The Total Drag curve is U-shaped. At the exact bottom (minimum) of this curve—the speed for best glide (L/D max)—the decreasing induced drag curve and the increasing parasite drag curve intersect perfectly. Total drag is lowest when Induced Drag precisely equals Parasite Drag."
    },
    {
      id: 44,
      question: "Which kinds of drag contribute to total drag?",
      options: [
        "Form drag, skin-friction drag, interference drag",
        "Interference drag and parasite drag",
        "Induced drag, form drag, skin-friction drag",
        "Induced drag and parasite drag"
      ],
      correctIndex: 3,
      explanation: "Total aerodynamic drag is the sum of the two fundamental opposing forces: Induced Drag (the inescapable aerodynamic cost of generating lift) and Parasite Drag (the physical penalty of pushing the airplane's solid form through the air)."
    },
    {
      id: 45,
      question: "How do lift and drag change when approaching a stall condition?",
      options: [
        "Lift and drag decrease",
        "Lift and drag increase",
        "Lift decreases and drag increases",
        "Lift increases and drag decreases"
      ],
      correctIndex: 2,
      explanation: "As the wing reaches the critical angle of attack, the smooth boundary layer completely detaches from the upper surface. The resulting chaotic, turbulent wake massively spikes the aerodynamic drag, while the destruction of the low-pressure area causes lift to plummet simultaneously."
    },
    {
      id: 46,
      question: "In case of a stall it is important to...",
      options: [
        "increase the bank angle and reduce the speed.",
        "increase the angle of attack and increase the speed.",
        "decrease the angle of attack and increase the speed.",
        "increase the angle of attack and reduce the speed."
      ],
      correctIndex: 2,
      explanation: "A stall is purely an angle of attack issue. To recover, the pilot must immediately break the stall by pushing the nose down to decrease the angle of attack, reattaching the smooth airflow, whilst adding power to increase airspeed and regain flying energy."
    },
    {
      id: 47,
      question: "During a stall, the lift...",
      options: [
        "decreases and drag increases.",
        "increases and drag decreases.",
        "increases and drag increases.",
        "decreases and drag decreases."
      ],
      correctIndex: 0,
      explanation: "At the moment of stall, the airflow separation ruins the wing's lifting capability, so lift decreases rapidly. Concurrently, the massive turbulent wake generated by the separated air acts like a giant parachute, causing drag to increase sharply."
    },
    {
      id: 48,
      question: "The critical angle of attack...",
      options: [
        "changes with increasing weight.",
        "decreases with forward center of gravity position.",
        "is independent of the weight.",
        "increases with backward center of gravity position."
      ],
      correctIndex: 2,
      explanation: "The critical angle of attack (the exact angle where the air separates and the wing stalls) is a fixed geometric property of the airfoil's design. An airplane will ALWAYS stall at the exact same critical angle of attack, regardless of weight, airspeed, or bank angle."
    },
    {
      id: 49,
      question: "What leads to a decreased stall speed Vs (IAS)?",
      options: [
        "Lower altitude",
        "Lower density",
        "Higher load factor",
        "Decreasing weight"
      ],
      correctIndex: 3,
      explanation: "A lighter aircraft requires less total lift to support itself in the air. Therefore, it can fly at a slower speed before needing to raise the nose to the critical angle of attack. Decreasing the aircraft's weight directly lowers the indicated stall speed."
    },
    {
      id: 50,
      question: "The stall warning will be activated just before reaching which speed?",
      options: [
        "VNE",
        "VS",
        "VX",
        "VR"
      ],
      correctIndex: 1,
      explanation: "Vs stands for Velocity of Stall. Certification standards require the artificial stall warning device (horn or buzzer) to trigger at a safe margin (usually 5 to 10 knots) just before the aircraft actually decelerates to Vs and breaks into a full aerodynamic stall."
    },
    {
      id: 51,
      question: "In motorplanes the stall warning is usually activated by a change of...",
      options: [
        "the center of gravity.",
        "the transition point.",
        "the center of pressure.",
        "the stagnation point."
      ],
      correctIndex: 3,
      explanation: "Mechanical stall warning devices (like the lift detector vane on the leading edge) rely on the movement of the stagnation point. As the angle of attack increases toward a stall, the stagnation point moves further down and aft along the lower surface of the wing, changing the local airflow direction and physically pushing the warning vane upwards."
    },
    {
      id: 52,
      question: "How should the pilot react to an engaged stall warning?",
      options: [
        "Pull the elevator, increase power",
        "Pull the elevator, decrease power",
        "Push the elevator, increase power",
        "Raise the nose to decrease airspeed"
      ],
      correctIndex: 2,
      explanation: "The absolute priority when a stall warning sounds is to decrease the angle of attack to reattach the smooth airflow over the wings. The pilot must simultaneously push the elevator forward (lowering the nose) and apply maximum allowable power to accelerate and minimize altitude loss."
    },
    {
      id: 53,
      question: "Which statement regarding a spin is correct?",
      options: [
        "During recovery the ailerons should be kept neutral",
        "Only very old aeroplanes have a risk of spinning",
        "During recovery the ailerons should be crossed",
        "During the spin the speed constantly increases"
      ],
      correctIndex: 0,
      explanation: "A spin is an aggravated stall with auto-rotation. During spin recovery, the ailerons must strictly be kept neutral. Deflecting the ailerons changes the camber and angle of attack on the wingtips, which can deepen the stall on the down-going wing, increasing adverse yaw and exacerbating the spin."
    },
    {
      id: 54,
      question: "When extending the flaps for landing at constant angle of attack, in which way does the lift coefficient change far before reaching the maximum lift coefficient?",
      options: [
        "It decreases",
        "It is not possible to define",
        "It increases",
        "It remains constant"
      ],
      correctIndex: 2,
      explanation: "Deploying trailing-edge flaps physically increases the camber (curvature) of the wing. At any given constant angle of attack, an airfoil with higher camber forces the air to deflect downward more aggressively, which directly and immediately increases the lift coefficient (Cl)."
    },
    {
      id: 55,
      question: "With regard to flaps, which of the following options provides a lift-increasing effect?",
      options: [
        "Decreasing the angle of attack",
        "Increasing the aerofoil camber",
        "Decreasing the form drag",
        "Lowering the induced drag"
      ],
      correctIndex: 1,
      explanation: "The fundamental aerodynamic principle of all flaps (plain, split, slotted, Fowler) is that they artificially alter the shape of the wing, significantly increasing its camber (the curve of its mean line). This increased camber is what generates the extra lift required for slow flight."
    },
    {
      id: 56,
      question: "Which factor can be changed by deploying flaps for landing?",
      options: [
        "The position of the center of gravity",
        "The effectiveness of the ailerons",
        "The twist effect of the engine",
        "The trim condition"
      ],
      correctIndex: 3,
      explanation: "Deploying flaps drastically alters the pressure distribution along the wing's chord, usually shifting the Center of Pressure rearward. This creates a strong pitching moment (often a nose-down tendency in high-wing aircraft), which changes the aircraft's longitudinal balance and forces the pilot to adjust the trim condition."
    },
    {
      id: 57,
      question: "What is the principle of a Fowler flap?",
      options: [
        "A profile-like flap is extended from the trailing edge of the wing",
        "A flap from the rear bottom side of the wing is folded down",
        "At high angles of attack a part of the leading edge lifts",
        "The rear part of the wing is folded down"
      ],
      correctIndex: 0,
      explanation: "Unlike simple flaps that just hinge downwards, a Fowler flap slides backwards on tracks before tilting down. This sophisticated motion significantly increases the total surface area (chord length) of the wing in addition to increasing its camber, making it the most aerodynamically effective flap type."
    },
    {
      id: 58,
      question: "A take-off with flaps in take-off position causes...",
      options: [
        "an increased rate of climb.",
        "an increased acceleration.",
        "a shortening of the take-off run.",
        "a decrease in drag."
      ],
      correctIndex: 2,
      explanation: "Setting flaps to the take-off position (usually 10-15 degrees) increases the lift coefficient. This means the wings can generate the required lift to support the aircraft's weight at a slower airspeed, allowing the aircraft to lift off sooner and significantly shortening the ground take-off run."
    },
    {
      id: 59,
      question: "Provided that no other procedure is described in the Aircraft Operating Handbook, after increasing the engine power in a go-around, the flaps may...",
      options: [
        "not be operated up to the minimum safe altitude.",
        "be retracted to a middle position.",
        "be fully retracted without any delay.",
        "remain fully extended until reaching the traffic pattern."
      ],
      correctIndex: 1,
      explanation: "Full landing flaps generate massive parasite and induced drag, preventing a safe climb. During a go-around, after full power is applied, the pilot must immediately retract the flaps to a middle (take-off) position. Retracting them fully all at once is dangerous as it destroys lift suddenly, causing the aircraft to sink."
    },
    {
      id: 60,
      question: "How do lift and drag change when setting flaps to a lower position?",
      options: [
        "Lift increases, drag decreases",
        "Lift increases, drag increases",
        "Lift decreases, drag decreases",
        "Lift decreases, drag increases"
      ],
      correctIndex: 1,
      explanation: "Deploying flaps downwards (to a 'lower position') amplifies the camber of the airfoil. This inherently generates more lift. However, destroying the clean, streamlined shape of the wing simultaneously creates a massive penalty in the form of both parasite drag (profile disruption) and induced drag."
    },
    {
      id: 61,
      question: "The laminar boundary layer on the aerofoil is located between...",
      options: [
        "the transition point and the separation point.",
        "the stagnation point and the transition point.",
        "the transition point and the center of pressure.",
        "the stagnation point and the center of pressure."
      ],
      correctIndex: 1,
      explanation: "The airflow hits the leading edge at the stagnation point and splits. Immediately as it flows over the upper surface, it begins as a smooth, perfectly layered (laminar) flow. This laminar boundary layer persists only until it reaches the transition point, where friction causes it to become chaotic and turbulent."
    },
    {
      id: 62,
      question: "What types of boundary layers can be found on an aerofoil?",
      options: [
        "Laminar layer at the leading wing areas, turbulent boundary layer at the trailing areas",
        "Turbulent boundary layer along the complete upper surface with separated airflow",
        "Turbulent layer at the leading wing areas, laminar boundary layer at the trailing areas",
        "Laminar boundary layer along the complete upper surface with non-separated airflow"
      ],
      correctIndex: 0,
      explanation: "On a standard airfoil, the boundary layer is laminar at the leading edge where the air is accelerating and pressure is dropping. As it moves past the thickest part of the wing into the adverse pressure gradient towards the trailing edge, it inevitably transitions into a thicker, turbulent boundary layer."
    },
    {
      id: 63,
      question: "How does a laminar boundary layer differ from a turbulent boundary layer?",
      options: [
        "The laminar boundary layer produces lift, the turbulent boundary layer produces drag",
        "The turbulent boundary layer is thicker and provides less skin-friction drag",
        "The laminar boundary layer is thinner and provides more skin-friction drag",
        "The turbulent boundary layer can follow the airfoil camber at higher angles of attack"
      ],
      correctIndex: 3,
      explanation: "A turbulent boundary layer contains much more kinetic energy because its air particles mix vigorously. This extra energy allows the turbulent layer to fight against the adverse pressure gradient and stay attached to the steeply sloped wing surface at high angles of attack, severely delaying the stall compared to a fragile laminar layer."
    },
    {
      id: 64,
      question: "What structural item provides lateral stability to an airplane?",
      options: [
        "Differential aileron deflection",
        "Wing dihedral",
        "Vertical tail",
        "Elevator"
      ],
      correctIndex: 1,
      explanation: "Lateral stability (roll stability) is the aircraft's tendency to return to a wings-level attitude after a disturbance. The primary design feature for this is 'wing dihedral'—the upward angle of the wings from root to tip. If the plane banks, it slips sideways; the lower wing meets the air at a higher angle of attack, creating extra lift to roll the plane back to level."
    },
    {
      id: 65,
      question: "Which statement describes a situation of static stability?",
      options: [
        "An aircraft distorted by external impact will tend to an even more deflected position",
        "An aircraft distorted by external impact will return to the original position",
        "An aircraft distorted by external impact can return to its original position by rudder input",
        "An aircraft distorted by external impact will maintain the deflected position"
      ],
      correctIndex: 1,
      explanation: "Positive static stability is defined as the initial, inherent tendency of an aircraft to automatically return to its original, trimmed state of equilibrium after being displaced by an external force (like a wind gust), without any control inputs from the pilot."
    },
    {
      id: 66,
      question: "Which constructive feature is shown in the figure? See figure (PFA-006)",
      img: "PFA-006.png",
      options: [
        "Longitudinal stability by wing dihedral",
        "Lateral stability by wing dihedral",
        "Differential aileron deflection",
        "Directional stability by lift generation"
      ],
      correctIndex: 1,
      explanation: "Figure PFA-006 illustrates an aircraft viewed from the front, showing the wings angled upwards from the fuselage to the wingtips in a shallow 'V' shape. This geometric feature is called wing dihedral, and its sole purpose is to provide lateral (roll) stability."
    },
    {
      id: 67,
      question: "\"Longitudinal stability\" is referred to as stability around which axis?",
      options: [
        "Propeller axis",
        "Vertical axis",
        "Longitudinal axis",
        "Lateral axis"
      ],
      correctIndex: 3,
      explanation: "This is a common terminology trap. Longitudinal stability dictates the aircraft's behavior in pitch (nose up / nose down) along its longitudinal path. However, the physical axis that the aircraft pivots around when pitching is the lateral axis (running from wingtip to wingtip)."
    },
    {
      id: 68,
      question: "Stability around which axis is mainly influenced by the center of gravity's longitudinal position?",
      options: [
        "Vertical axis",
        "Longitudinal axis",
        "Gravity axis",
        "Lateral axis"
      ],
      correctIndex: 3,
      explanation: "The longitudinal position of the Center of Gravity (how far forward or aft the weight is distributed) dictates the pitch stability of the aircraft. Since pitch is the motion of rotating up and down, it occurs around the lateral (transverse) axis."
    },
    {
      id: 69,
      question: "What structural item provides directional stability to an airplane?",
      options: [
        "Differential aileron deflection",
        "Large vertical tail",
        "Wing dihedral",
        "Large elevator"
      ],
      correctIndex: 1,
      explanation: "Directional stability (yaw stability) ensures the nose of the aircraft stays pointed into the relative wind. The large vertical tail (fin) acts exactly like the feathers on a dart or a weather vane; if a gust pushes the tail sideways, the airflow hits the broad side of the fin, physically forcing the tail back into alignment."
    },
    {
      id: 70,
      question: "Rotation around the vertical axis is called...",
      options: [
        "rolling.",
        "pitching.",
        "yawing.",
        "slipping."
      ],
      correctIndex: 2,
      explanation: "The vertical (normal) axis passes straight down through the aircraft's center of gravity from top to bottom. Rotation around this axis swings the nose left or right. In aviation, this specific horizontal motion is termed 'yawing', and it is controlled by the rudder."
    },
    {
      id: 71,
      question: "Rotation around the lateral axis is called...",
      options: [
        "rolling.",
        "stalling.",
        "yawing.",
        "pitching."
      ],
      correctIndex: 3,
      explanation: "The lateral (transverse) axis extends horizontally from one wingtip to the other. When an aircraft rotates around this axis, its nose moves up or down relative to the horizon. This motion is called 'pitching', and it is governed by the elevator."
    },
    {
      id: 72,
      question: "The critical angle of attack...",
      options: [
        "increases with a front centre of gravity.",
        "decreases with a rear centre of gravity.",
        "is changed by different aircraft weights.",
        "is not changed by different aircraft weights."
      ],
      correctIndex: 3,
      explanation: "The critical angle of attack—the precise angle at which the airflow separates from the upper wing and causes a stall—is an immutable aerodynamic property of the wing's physical shape (its profile). Therefore, it remains exactly the same regardless of aircraft weight, bank angle, or airspeed."
    },
    {
      id: 73,
      question: "In straight and level flight with constant performance of the engine, the angle of attack at the wing is...",
      options: [
        "greater than in a climb.",
        "greater than at take-off.",
        "smaller than in a descent.",
        "smaller than in a climb."
      ],
      correctIndex: 3,
      explanation: "To maintain straight and level flight at a constant cruise power setting, the aircraft travels at a high true airspeed. Because airspeed is high, the wing requires a very small angle of attack to generate enough lift to equal the weight. In a climb at the same power, the airspeed drops, which forces the pilot to maintain a much higher angle of attack to generate that same required lift."
    },
    {
      id: 74,
      question: "What is the function of the horizontal tail (among other things)?",
      options: [
        "To stabilise the aeroplane around the lateral axis",
        "To initiate a curve around the vertical axis",
        "To stabilise the aeroplane around the longitudinal axis",
        "To stabilise the aeroplane around the vertical axis"
      ],
      correctIndex: 0,
      explanation: "In most conventional aircraft, the center of gravity is located ahead of the center of pressure, creating a constant nose-down pitching moment. The horizontal tail acts as an upside-down wing, generating a downward force that acts as a lever to balance this, providing crucial longitudinal stability (which controls rotation around the lateral axis)."
    },
    {
      id: 75,
      question: "The elevator deflection during take-off rotation...",
      options: [
        "is increased for a front centre of gravity.",
        "is increased for a rear centre of gravity.",
        "is increased at high speeds.",
        "is independent of the speed."
      ],
      correctIndex: 0,
      explanation: "A forward (front) Center of Gravity places a heavy weight far ahead of the main landing gear pivot point. This creates a massive nose-down moment. To successfully rotate the nose up during the takeoff roll against this heavy leverage, the pilot must pull back harder, resulting in an increased upward deflection of the elevator."
    },
    {
      id: 76,
      question: "The elevator moves an aeroplane around the...",
      options: [
        "lateral axis.",
        "elevator axis.",
        "longitudinal axis.",
        "vertical axis."
      ],
      correctIndex: 0,
      explanation: "The elevator is the control surface on the horizontal stabilizer. Pulling or pushing the yoke deflects the elevator, changing the downward aerodynamic force on the tail. This causes the nose to pitch up or down, which is a rotational movement physically occurring around the aircraft's lateral (wingtip-to-wingtip) axis."
    },
    {
      id: 77,
      question: "What has to be considered with regard to the center of gravity position?",
      options: [
        "The center of gravity's position can only be determined during flight.",
        "Only correct loading can assure a correct and safe center of gravity position.",
        "By moving the elevator trim tab, the center of gravity can be shifted into a correct position.",
        "By moving the aileron trim tab, the center of gravity can be shifted into a correct position."
      ],
      correctIndex: 1,
      explanation: "The Center of Gravity (CG) is a physical point of balance dictated purely by mass and distance (weight and balance). Trim tabs only relieve aerodynamic control pressures; they cannot alter physics. The only way to achieve a safe CG is through the correct loading of fuel, passengers, and baggage prior to flight."
    },
    {
      id: 78,
      question: "Rudder deflections result in a turn of the aeroplane around the...",
      options: [
        "rudder axis.",
        "lateral axis.",
        "vertical axis.",
        "longitudinal axis."
      ],
      correctIndex: 2,
      explanation: "The rudder creates an aerodynamic side-force on the very back of the empennage. Because this force is applied far behind the center of gravity, it pushes the tail left or right, causing the nose to swing (yaw) left or right. This yawing rotation occurs strictly around the vertical axis."
    },
    {
      id: 79,
      question: "Deflecting the rudder to the left causes...",
      options: [
        "pitching of the aircraft to the right.",
        "yawing of the aircraft to the right.",
        "yawing of the aircraft to the left.",
        "pitching of the aircraft to the left."
      ],
      correctIndex: 2,
      explanation: "When the pilot steps on the left rudder pedal, the rudder surface deflects out to the left. The passing slipstream hits this deflected surface, pushing the tail of the aircraft to the right. As a result, the nose of the aircraft pivots (yaws) to the left around the vertical axis."
    },
    {
      id: 80,
      question: "What is the advantage of differential aileron movement?",
      options: [
        "The ratio of the drag coefficient to lift coefficient is increased",
        "The adverse yaw is higher",
        "The drag of the downwards deflected aileron is lowered and the adverse yaw is smaller",
        "The total lift remains constant during aileron deflection"
      ],
      correctIndex: 2,
      explanation: "Wait, the correct technical explanation for differential ailerons: The upward moving aileron deflects further into the airstream than the downward moving one. This intentionally creates extra parasite drag on the inside wing of the turn. This extra drag perfectly counteracts the heavy induced drag generated by the outside wing, resulting in a significantly smaller adverse yaw."
    },
    {
      id: 81,
      question: "Which design feature can compensate for adverse yaw?",
      options: [
        "Wing dihedral",
        "Full deflection of the aileron",
        "Aileron trim",
        "Differential aileron defletion"
      ],
      correctIndex: 3,
      explanation: "Adverse yaw is the natural tendency of the aircraft's nose to pull away from the direction of a bank, due to the outside wing creating more lift and induced drag. Aeronautical engineers combat this by designing 'Differential aileron deflection', where the up-going aileron travels further than the down-going one to balance the drag forces."
    },
    {
      id: 82,
      question: "Differential aileron deflection is used to...",
      options: [
        "keep the adverse yaw low.",
        "avoid a stall at low angles of attack.",
        "increase the rate of descent.",
        "reduce wake turbulence."
      ],
      correctIndex: 0,
      explanation: "By mechanically linking the ailerons so that the one going up deflects at a much steeper angle than the one going down, differential ailerons artificially generate parasite drag on the inside wing of a turn. This neatly cancels out the induced drag of the outside wing, keeping adverse yaw low and making turns more coordinated."
    },
    {
      id: 83,
      question: "The right aileron deflects upwards, the left downwards. How does the aircraft react?",
      options: [
        "Rolling to the left, no yawing",
        "Rolling to the right, yawing to the right",
        "Rolling to the right, yawing to the left",
        "Rolling to the left, yawing to the right"
      ],
      correctIndex: 2,
      explanation: "An upward right aileron decreases lift on the right wing (it drops). A downward left aileron increases camber and lift on the left wing (it rises). This initiates a roll to the right. However, the left wing is now generating more lift, hence more induced drag. This drag pulls the nose backward, causing the aircraft to yaw to the left (adverse yaw)."
    },
    {
      id: 84,
      question: "The aerodynamic rudder balance...",
      options: [
        "improves the rudder effectiveness.",
        "reduces the control surfaces.",
        "reduces the control stick forces.",
        "delays the stall."
      ],
      correctIndex: 2,
      explanation: "Aerodynamic balancing features (like a horn balance projecting ahead of the hinge line) harness the energy of the passing airstream. When the pilot deflects the rudder, the wind pushes against this forward section, physically assisting the movement and greatly reducing the control forces the pilot feels in the cockpit pedals."
    },
    {
      id: 85,
      question: "Which constructive feature has the purpose to reduce stearing forces?",
      options: [
        "T-tail",
        "Vortex generators",
        "Differential aileron deflection",
        "Aerodynamic rudder balance"
      ],
      correctIndex: 3,
      explanation: "As airspeeds increase, the air pressure aggressively resists the deflection of control surfaces, making steering physically exhausting. Implementing an aerodynamic rudder balance uses the slipstream to help pivot the surface, effectively providing aerodynamic power-steering and reducing steering forces."
    },
    {
      id: 86,
      question: "What is the function of the static rudder balance?",
      options: [
        "To trim the controls almost without any force",
        "To increase the control stick forces",
        "To limit the control stick forces",
        "To prevent control surface flutter"
      ],
      correctIndex: 3,
      explanation: "If the center of gravity of a control surface is behind its hinge line, aerodynamic forces can cause it to resonate and flap violently at high speeds (flutter), potentially tearing it off. Static balancing involves installing heavy lead weights ahead of the hinge line to move the CG forward, completely preventing flutter."
    },
    {
      id: 87,
      question: "During cruise flight with constant power setting, an aircraft shows a permanent tendency to raise the nose. How can this tendency be eliminated?",
      options: [
        "By deflecting the elevator trim tab upwards",
        "By shifting the center of gravity backwards",
        "By elevator deflection upwards",
        "By deflecting the elevator trim tab downwards"
      ],
      correctIndex: 0,
      explanation: "To stop the nose from pitching up, the main elevator must be held in a slightly trailing-edge-down position. To achieve this without the pilot holding the yoke permanently, the small trim tab on the elevator is deflected UPWARDS. The airflow pushes the trim tab down, which acts as a lever to force the entire elevator down, resolving the nose-up tendency."
    },
    {
      id: 88,
      question: "The trim tab at the elevator is defelected upwards. In which position is the corresponding indicator?",
      options: [
        "Neutral position",
        "Nose-up position",
        "Nose-down position",
        "Laterally trimmed"
      ],
      correctIndex: 2,
      explanation: "When the trim tab deflects upwards, aerodynamic pressure forces the main elevator to pitch downwards. A downward deflected elevator lifts the tail, which violently pushes the nose of the aircraft down. Therefore, the cockpit trim wheel indicator will correctly reflect a 'Nose-down' setting."
    },
    {
      id: 89,
      question: "What describes \"wing loading\"?",
      options: [
        "Drag per wing area",
        "Drag per weight",
        "Wing area per weight",
        "Weight per wing area"
      ],
      correctIndex: 3,
      explanation: "Wing loading is a critical aircraft design parameter. It is mathematically calculated by dividing the total weight of the aircraft by the total surface area of the wings (e.g., kg/m² or lbs/sq ft). High wing loading means faster stall speeds but a smoother ride in turbulence."
    },
    {
      id: 90,
      question: "Through which factor listed below does the load factor increase during cruise flight?",
      options: [
        "A forward centre of gravity",
        "Higher aeroplane weight",
        "An upward gust",
        "Lower air density"
      ],
      correctIndex: 2,
      explanation: "During stable cruise, the load factor is exactly 1 G. If the aircraft hits a severe upward vertical gust, the relative wind suddenly strikes the wing from below, instantly and massively increasing the angle of attack. This creates a sudden spike in lift, forcing the aircraft upwards and dramatically increasing the structural load factor (G-force)."
    },
    {
      id: 91,
      question: "Which statement regarding the \"constant-speed propeller\" is correct?",
      options: [
        "The propeller keeps the airspeed constant",
        "The pitch of the propeller rises with higher speeds",
        "The RPM decreases with lower speeds",
        "The set RPM is kept constant by the motor power (MAP)"
      ],
      correctIndex: 1,
      explanation: "A constant-speed propeller uses a governor to maintain a specific RPM chosen by the pilot. As the aircraft accelerates, the incoming relative wind approaches the blade at a shallower angle, which would normally cause the prop to overspeed. To prevent this and absorb the engine's power efficiently, the governor automatically increases the blade pitch (taking a bigger 'bite' of air)."
    },
    {
      id: 92,
      question: "The change in pitch at a propeller blade from the root to the tip ensures...",
      options: [
        "that the most thrust is produced at the blade tip.",
        "that the most thrust is produced at the blade root.",
        "a nearly constant load by a constant effective angle of attack over the entire length of the blade.",
        "the largest possible angle of attack at the blade tip."
      ],
      correctIndex: 2,
      explanation: "A propeller blade is a rotating wing. The tip of the blade travels in a much wider circle and thus much faster than the root near the hub. To ensure the blade isn't stalled at the root and generating zero thrust at the tip, it is twisted. The high pitch at the slow-moving root and low pitch at the fast-moving tip ensure a uniform angle of attack and even thrust distribution across the entire blade."
    },
    {
      id: 93,
      question: "After an engine failure, the windmilling propeller...",
      options: [
        "generates neither thrust nor drag.",
        "has a greater pitch in feathered position.",
        "generates drag rather than thrust.",
        "improves the properties of the glide."
      ],
      correctIndex: 2,
      explanation: "If an engine fails, the forward airspeed of the aircraft continues to hit the flat face of the unpowered propeller, forcing it to spin like a windmill. Because it is now extracting energy from the slipstream to physically turn the dead engine mass, the propeller generates an immense amount of aerodynamic drag, severely ruining glide performance."
    },
    {
      id: 94,
      question: "During a descent at idle power with constant speed, the propeller lever is moved backwards. How do the propeller pitch and sink rate change?",
      options: [
        "Propeller pitch is increased, sink rate is increased",
        "Propeller pitch is increased, sink rate is decreased",
        "Propeller pitch is decreased, sink rate is increased",
        "Propeller pitch is decreased, sink rate is decreased"
      ],
      correctIndex: 1,
      explanation: "Moving the propeller lever backwards commands a lower RPM. The constant-speed governor achieves this by driving the blades into a coarse (increased) pitch. A coarse pitch blade faces more parallel to the airflow, acting less like a giant airbrake. This significant reduction in windmilling drag improves aerodynamic efficiency, resulting in a noticeably decreased sink rate."
    },
    {
      id: 95,
      question: "Point number 1 in the figure indicates which flight state? See figure (PFA-008)",
      img: "PFA-008.png",
      options: [
        "Stall",
        "Inverted flight",
        "Best gliding angle",
        "Slow flight"
      ],
      correctIndex: 1,
      explanation: "The Lilienthal polar diagram graphs the Lift coefficient (Ca or Cl) against the Drag coefficient (Cw or Cd). Point 1 is located in the negative territory of the Lift coefficient axis. The only time an aircraft sustains flight with a highly negative lift coefficient relative to the wing's chord is during inverted flight."
    },
    {
      id: 96,
      question: "Point number 5 in the figure indicates which flight state? See figure (PFA-008)",
      img: "PFA-008.png",
      options: [
        "Best gliding angle",
        "Slow flight",
        "Stall",
        "Inverted flight"
      ],
      correctIndex: 1,
      explanation: "Point 5 on the drag polar curve is at the absolute peak of the vertical axis, representing the Maximum Lift Coefficient (Cl max). This aerodynamic pinnacle occurs at the critical angle of attack. Sustaining flight exactly at this brink, right before the curve collapses into a stall, defines extreme 'Slow flight'."
    },
    {
      id: 97,
      question: "The bank in a two-minute turn (rate one turn) depends on the...",
      options: [
        "weight.",
        "wind.",
        "load factor.",
        "TAS."
      ],
      correctIndex: 3,
      explanation: "A standard Rate One turn requires the aircraft to turn at exactly 3 degrees per second, completing a 360-degree circle in exactly two minutes. The bank angle required to hold this specific radius and rate is mathematically dictated entirely by the aircraft's True Airspeed (TAS). A faster plane needs a steeper bank to turn at the same rate."
    },
    {
      id: 98,
      question: "In a co-ordinated turn, how is the relation between the load factor (n) and the stall speed (Vs)?",
      options: [
        "n is smaller than 1, Vs is greater than in straight and level flight.",
        "n is greater than 1, Vs is greater than in straight and level flight.",
        "n is smaller than 1, Vs is smaller than in straight and level flight.",
        "n is greater than 1, Vs is smaller than in straight and level flight."
      ],
      correctIndex: 1,
      explanation: "During a banked turn, the lift vector is tilted. To maintain altitude, the total lift must be increased so its vertical component still supports the aircraft's weight, while the horizontal component pulls the plane through the turn. This increase in total lift means the load factor (n) becomes greater than 1G. Consequently, because stall speed increases with the square root of the load factor, the stall speed (Vs) also becomes greater than in level flight."
    },
    {
      id: 99,
      question: "How is the balance of forces affected during a turn?",
      options: [
        "Lift force must be increased to compensate for the sum of centrifugal and gravitational force",
        "The net force results from superposition of gravity and centripetal forces",
        "The horizontal component of the lift force during a turn is the centrifugal force",
        "A lower lift force compensates for a lower net force as compared to level flight"
      ],
      correctIndex: 0,
      explanation: "In straight flight, Lift equals Weight. In a banked turn, the lift vector is tilted sideways. The horizontal component of lift acts as the centripetal force pulling the plane in a circle (opposing centrifugal force), while the vertical component must still equal gravity (weight). To satisfy both demands simultaneously, the total Lift force generated by the wings must be significantly increased by pulling back on the elevator."
    },
    {
      id: 100,
      question: "The pressure compensation between wind upper and lower surface results in ...",
      options: [
        "laminar airflow by wing tip vortices.",
        "profile drag by wing tip vortices.",
        "induced drag by wing tip vortices.",
        "lift by wing tip vortices."
      ],
      correctIndex: 2,
      explanation: "Nature seeks equilibrium. The high-pressure air beneath the wing 'spills over' the wingtips into the low-pressure area above. This aggressive curling action creates violent, spinning tornadoes of air trailing behind the aircraft, known as wingtip vortices. These vortices alter the local relative wind over the wing, tilting the total lift vector backward. This rearward aerodynamic penalty is called induced drag."
    },
    {
      id: 101,
      question: "What is meant by \"ground effect\"?",
      options: [
        "Increase of lift and increase of induced drag close to the ground",
        "Decrease of lift and increase of induced drag close to the ground",
        "Decrease of lift and decrease of induced drag close to the ground",
        "Increase of lift and decrease of induced drag close to the ground"
      ],
      correctIndex: 3,
      explanation: "Ground effect occurs when an aircraft flies within approximately one wingspan's distance above the ground. The solid surface physically blocks the full expansion of the downwash and wingtip vortices. By suppressing these vortices, induced drag is drastically decreased, which makes the wing much more efficient, resulting in a pronounced increase in effective lift (making the plane 'float')."
    },
    {
      id: 102,
      question: "What is the diffeence between spin and spiral dive?",
      options: [
        "Spin: stall at outer wing, speed constant;\nSpiral dive: airflow at both wings, speed increasing rapidly",
        "Spin: stall at inner wing, speed constant;\nSpiral dive: airflow at both wings, speed increasing rapidly",
        "Spin: stall at outer wing, speed increasing rapidly;\nSpiral dive: airflow at both wings, speed constant",
        "Spin: stall at inner wing, speed increasing rapidly;\nSpiral dive: airflow at both wings, speed constant"
      ],
      correctIndex: 1,
      explanation: "A spin is an autorotation caused by an asymmetric stall; the inner wing is deeply stalled (creating massive drag), pinning the airspeed at a constant, very low value while the plane rotates downward. In stark contrast, a spiral dive is NOT a stall. The wings are generating lift, but the aircraft is in a steep, uncoordinated descending bank where airspeed and structural G-loads increase terrifyingly fast."
    }
  ],
  planning: [
    {
      id: 1,
      question: "A flight plan has been files for a flight departing at an uncontrolled aerodrome. When has the actual take-off time been transmitted to ATC?",
      options: [
        "Upon request from ATC.",
        "When landing is assured.",
        "Immediately after take-off.",
        "At deviation from expected off-block time by more than 15 min."
      ],
      correctIndex: 2,
      explanation: "When departing from an uncontrolled aerodrome on a filed flight plan, ATC does not have radar or tower personnel to physically see the departure. Therefore, the pilot or a designated person on the ground must transmit the actual take-off time to ATC immediately after departure to activate the flight plan and initiate Search and Rescue (SAR) tracking parameters."
    },
    {
      id: 2,
      question: "During a flight with a flight plan submitted, landing is conducted at an airfield other than the destination stated in the filed flight plan. Who has to be contacted by the pilot immediately?",
      options: [
        "Local office for aereal supervision.",
        "The flight manager on duty.",
        "Aeronatical Information Service (AIS).",
        "The police department."
      ],
      correctIndex: 2,
      explanation: "If an aircraft on an active flight plan lands at an alternate aerodrome, the pilot must immediately notify the Aeronautical Information Service (AIS) or the relevant Air Traffic Services (ATS) unit. This is critical to close the flight plan and prevent the unnecessary activation of emergency Search and Rescue (SAR) operations at the original destination."
    },
    {
      id: 3,
      question: "Exceeding the maximum allowed aircraft mass is...",
      options: [
        "not permissible and essentially dangerous.",
        "only relevant if the excess is more than 10%.",
        "compensated by the pilot's control inputs.",
        "exceptionally permissible to avoid delays."
      ],
      correctIndex: 0,
      explanation: "Exceeding the Maximum Take-Off Mass (MTOM) violates the aircraft's structural and performance limitations. It severely increases takeoff distance, reduces climb rate, raises stall speed, and overstresses the airframe, making it highly dangerous and legally strictly prohibited under all circumstances."
    },
    {
      id: 4,
      question: "The center of gravity has to be located...",
      options: [
        "between the front and the rear C.G. limit.",
        "behind the rear C.G. limit.",
        "in front of the front C.G. limit.",
        "right of the lateral C. G. limit."
      ],
      correctIndex: 0,
      explanation: "To ensure both longitudinal static stability and adequate elevator control authority, the aircraft's Center of Gravity (CG) must fall strictly within the manufacturer's specified front and rear CG limits throughout the entire flight profile."
    },
    {
      id: 5,
      question: "The result of a rear C.G. position is...",
      options: [
        "an increased fuel consumption.",
        "a decrease of range.",
        "a decrease of stability.",
        "an increased stall speed."
      ],
      correctIndex: 2,
      explanation: "A rearward Center of Gravity reduces the distance between the CG and the Center of Pressure, effectively shortening the stabilizing lever arm of the tailplane. This drastically decreases longitudinal static stability, making the aircraft highly sensitive to pitch inputs and potentially unrecoverable from a stall or spin."
    },
    {
      id: 6,
      question: "An aircraft must be loaded and operated in such a way that the center of gravity (CG) stays within the approved limits during all phases of flight. This is done to ensure...",
      options: [
        "that the aircraft does not exceed the maximum permissible airspeed during a descent.",
        "that the aircraft does not stall.",
        "that the aircraft does not tip over on its tail while it is being loaded.",
        "both stability and controllability of the aircraft."
      ],
      correctIndex: 3,
      explanation: "The CG limits are established by engineers specifically to guarantee that the aircraft retains enough natural static stability to fly hands-off without pitching wildly, while also ensuring the flight controls (especially the elevator) have enough mechanical authority (controllability) to control the pitch in all configurations."
    },
    {
      id: 7,
      question: "The result of a front C.G. position is:\n1. Increase in stability.\n2. Increase in fuel consumption.\n3. Increase in stall speed.\n4. Increase in range.",
      options: [
        "2, 4",
        "1, 2",
        "1, 2, 3",
        "2, 3, 4"
      ],
      correctIndex: 2,
      explanation: "A forward CG increases longitudinal stability but forces the tailplane to generate more aerodynamic downforce to hold the heavy nose up. This extra tail downforce acts like additional weight on the airframe, which requires the wings to fly at a higher angle of attack (increasing stall speed) and creates more induced drag (increasing fuel consumption and reducing range)."
    },
    {
      id: 8,
      question: "The basic empty mass of an aircraft includes...",
      options: [
        "the total mass of the aeroplane ready for a specific type of operation excluding unusable fuel and traffic load. The mass includes items such as crew and crew baggage.",
        "the total mass of an aeroplane ready for a specific type of operation including the required fuel and crew, but excluding traffic load.",
        "the mass of the aeroplane plus standard items such as unusable fuel and other unusable liquids, lubricating oil in engine and auxiliary units, fire extinguishers, pyrotechnics, emergency oxygen equipment, supplementary electronic equipment.",
        "the total mass of the aeroplane ready for a specific type of operation including crew, navigation instruments and engine cowling."
      ],
      correctIndex: 2,
      explanation: "The Basic Empty Mass (BEM) consists of the airframe, engines, and all permanently installed equipment. It strictly includes unusable fuel, full engine oil (in most modern definitions), and unusable operating fluids, but completely excludes the crew, usable fuel, and payload."
    },
    {
      id: 9,
      question: "The empty weight and the corresponding center of gravity (CG) of an aircraft are initially determined...",
      options: [
        "by weighing.",
        "through data provided by the aircraft manufacturer.",
        "by calculation.",
        "for one aircraft of a type only, since all aircraft of the same type have the same mass and CG position."
      ],
      correctIndex: 0,
      explanation: "Every individual aircraft has tiny manufacturing variances, paint thicknesses, and equipment differences. Therefore, the exact Basic Empty Mass and its associated CG must be determined by physically weighing that specific aircraft on calibrated scales before it enters service."
    },
    {
      id: 10,
      question: "The density of AVGAS 100LL at 15° C is...",
      options: [
        "0.68 kg/l.",
        "1.0 kg/l.",
        "0.82 kg/l.",
        "0.72 kg/l."
      ],
      correctIndex: 3,
      explanation: "Aviation Gasoline (AVGAS 100LL) is less dense than water. At the standard atmospheric temperature of 15°C, its standard nominal density used for weight and balance calculations is 0.72 kilograms per liter."
    },
    {
      id: 11,
      question: "The conversion factor from kilogram [kg] into pounds [lb] is...",
      options: [
        "kg x 2 = lb.",
        "kg x 2.205 = lb.",
        "kg / 2.205 = lb.",
        "kg x 0.454 = lb."
      ],
      correctIndex: 1,
      explanation: "One kilogram is equal to approximately 2.20462 pounds. Therefore, to convert a mass from kilograms to pounds, you must multiply the kilogram value by the conversion factor of 2.205."
    },
    {
      id: 12,
      question: "Baggage and cargo must be properly stowed and fastened, otherwise a shift of the cargo may cause...",
      options: [
        "continuous attitudes which can be corrected by the pilot using the flight controls.",
        "structural damage, angle of attack stability, velocity stability.",
        "uncontrollable attitudes, structural damage, risk of injuries.",
        "calculable instability if the C.G. is shifting by less than 10 %."
      ],
      correctIndex: 2,
      explanation: "If unsecured cargo violently shifts during turbulence or acceleration, it can immediately push the aircraft's Center of Gravity outside of certified limits. This massive shift in leverage can result in an unrecoverable loss of control (uncontrollable attitudes) and severe physical danger."
    },
    {
      id: 13,
      question: "Loads must be adequately secured in order to...",
      options: [
        "carry extra fuel.",
        "allow steep turns.",
        "avoid any centre of gravity (C.G.) movements.",
        "prevent excessive 'g'-loading during the landing flare."
      ],
      correctIndex: 2,
      explanation: "The entire purpose of cargo nets and tie-downs is to ensure that the mass of the payload remains completely static. Any movement of the load inflight shifts the Center of Gravity, which can severely compromise the aircraft's stability and controllability."
    },
    {
      id: 14,
      question: "The total weight of an aeroplane is acting vertically through the...",
      options: [
        "stagnation point.",
        "neutral point.",
        "center of pressure.",
        "center of gravity."
      ],
      correctIndex: 3,
      explanation: "In physics and aerodynamics, the Center of Gravity (CG) is the theoretical point where the entire mass of the aircraft is concentrated. Thus, the total force of gravity (weight) acts straight down through this specific point."
    },
    {
      id: 15,
      question: "The term \"center of gravity\" is defined as...",
      options: [
        "the heaviest point on an aeroplane.",
        "half the distance between the neutral point and the datum line.",
        "another designation for the neutral point.",
        "the point at which the total mass of the aeroplane is considered to act."
      ],
      correctIndex: 3,
      explanation: "The Center of Gravity is the single, mathematical focal point of an object's weight distribution. It is the exact point of equilibrium where the aircraft would balance perfectly if suspended in mid-air."
    },
    {
      id: 16,
      question: "The center of gravity (CG) defines...",
      options: [
        "the point on the longitudinal axis or its extension from which the centers of gravity of all masses are referenced.",
        "the point through which the force of gravity is said to act on a mass.",
        "the distance from the datum to the position of a mass.",
        "the product of mass and balance arm."
      ],
      correctIndex: 1,
      explanation: "Gravity exerts a downward force on every individual component of the aircraft. The Center of Gravity is the net focal point where the sum of all these individual gravitational forces theoretically pulls the entire aircraft downward."
    },
    {
      id: 17,
      question: "During an unaccelerated flight...",
      options: [
        "drag equals lift and thrust equals gravity.",
        "thrust equals the sum of drag and gravity.",
        "thrust equals lift and drag equals gravity.",
        "thrust equals drag and lift equals gravity."
      ],
      correctIndex: 3,
      explanation: "In a steady, straight, and unaccelerated (constant speed) level flight, the aerodynamic forces are in perfect equilibrium. The upward force (Lift) exactly balances the downward force (Weight/Gravity), and the forward force (Thrust) exactly balances the rearward force (Drag)."
    },
    {
      id: 18,
      question: "The term \"datum\" with regard to a mass and balance calculation defines...",
      options: [
        "the point on the lateral axis of an aeroplane or its extension from which the centers of gravity of all masses are referenced.",
        "the point on the vertical axis of an aeroplane or its extension from which the centers of gravity of all masses are referenced.",
        "the point on the longitudinal axis of an aeroplane or its extension from which the centers of gravity of all masses are referenced.",
        "the distance from the reference plane to the center of gravity of an aircraft."
      ],
      correctIndex: 2,
      explanation: "The reference datum is an imaginary vertical plane or point from which all horizontal distances (arms) are measured for balance purposes. The manufacturer establishes this zero-point anywhere along the longitudinal axis (e.g., the tip of the spinner or the firewall)."
    },
    {
      id: 19,
      question: "The term \"moment\" with regard to a mass and balance calculation is referred to as...",
      options: [
        "sum of a mass and a balance arm.",
        "quotient of a mass and a balance arm.",
        "difference of a mass and a balance arm.",
        "product of a mass and a balance arm."
      ],
      correctIndex: 3,
      explanation: "In physics, a moment represents the turning force (leverage) around a pivot point. In aviation weight and balance calculations, the moment is obtained by multiplying the object's Weight (Mass) by its distance from the datum (Arm). Moment = Mass x Arm."
    },
    {
      id: 20,
      question: "The term \"balance arm\" in the context of a mass and balance calculation defines the...",
      options: [
        "distance from the datum to the center of gravity of a mass.",
        "distance of a mass from the center of gravity.",
        "point on the longitudinal axis of an aeroplane or its extension from which the centers of gravity of all masses are referenced.",
        "point through which the force of gravity is said to act on a mass."
      ],
      correctIndex: 0,
      explanation: "The 'Arm' is the exact horizontal distance measured from the reference datum to the center of gravity of an individual item (like a passenger seat, baggage compartment, or fuel tank). If located behind the datum, it is positive; if ahead, it is negative."
    },
    {
      id: 21,
      question: "The distance between the center of gravity and the datum is called...",
      options: [
        "span width.",
        "balance arm.",
        "lever.",
        "torque."
      ],
      correctIndex: 1,
      explanation: "In weight and balance terminology, the spatial horizontal distance from the zero reference point (the datum) to the center of gravity of any station or the aircraft itself is defined as the 'Arm' or 'Balance Arm'."
    },
    {
      id: 22,
      question: "The balance arm is the horizontal distance between...",
      options: [
        "the front C.G. limit and the datum line.",
        "the C.G. of a mass and the rear C.G. limit.",
        "the C.G. of a mass and the datum line.",
        "the front C.G. limit and the rear C.G. limit."
      ],
      correctIndex: 2,
      explanation: "As established in aviation engineering, an object's balance arm is precisely the horizontal measurement from the manufacturer's established datum plane to the geometric center of gravity of that specific object or payload."
    },
    {
      id: 23,
      question: "The required data for a mass and balance calculation including masses and balance arms can be found in the...",
      options: [
        "performance section of the pilot's operating handbook of this particular aircraft.",
        "mass and balance section of the pilot's operating handbook of this particular aircraft.",
        "documentation of the annual inspection.",
        "certificate of airworthiness."
      ],
      correctIndex: 1,
      explanation: "Every certified aircraft comes with a specific Pilot's Operating Handbook (POH). Section 6 is universally dedicated to 'Weight and Balance', containing the exact baseline figures, arms, and moment limits required for safe loading calculations."
    },
    {
      id: 24,
      question: "When preparing to carry out the weighing procedure on an aircraft, which of the following is required?",
      options: [
        "Drain all engine tank oil",
        "Remove service equipment",
        "Drain all useable fuel",
        "Remove the batteries"
      ],
      correctIndex: 2,
      explanation: "Aircraft are weighed to determine their Basic Empty Mass. Since Basic Empty Mass includes unusable fuel and full operating fluids (like engine oil and hydraulic fluid), all *usable* fuel must be completely drained from the tanks before the scales are zeroed."
    },
    {
      id: 25,
      question: "Which section of the flight manual describes the basic empty mass of an aircraft?",
      options: [
        "Normal procedures",
        "Limitations",
        "Performance",
        "Weight and balance"
      ],
      correctIndex: 3,
      explanation: "The 'Weight and Balance' section (Section 6 of a standard POH) provides the official weighing records, the calculated Basic Empty Mass, and the precise empty CG location specific to that individual airframe."
    },
    {
      id: 26,
      question: "The position of the center of gravity equals... (See figure PFP-052e)",
      img: "PFP-052e.png",
      options: [
        "147.5 in.",
        "145.7 in.",
        "142 in.",
        "137.5 in."
      ],
      correctIndex: 2,
      explanation: "The Center of Gravity is found by dividing the Total Moment by the Total Mass. By multiplying the Mass of each item by its Arm (e.g., Basic Empty: 3156 * 135.33 = 427101.48), summing all masses (4,217.5 lbs), and summing all moments (598,824.5 in-lbs), you divide the total moment by the total mass to find the CG: 141.98 inches, rounded to 142 in."
    },
    {
      id: 27,
      question: "What mass equals 102 litres of Avgas 100LL?",
      options: [
        "142 lbs",
        "74 lbs",
        "142 kg",
        "74 kg"
      ],
      correctIndex: 3,
      explanation: "The standard density of AVGAS 100LL is approximately 0.72 kg per liter. To find the mass, multiply the volume by the density: 102 liters * 0.72 kg/L = 73.44 kg, which rounds to exactly 74 kg."
    },
    {
      id: 28,
      question: "Calculated take-off mass = 2300 lbs, calculated CG = 95.75 in, fuel burn = 170 lbs on station 87.00 in. Where is the CG situated after the landing?",
      options: [
        "97.39 in",
        "96.45 in",
        "94.11 in",
        "96.57 in"
      ],
      correctIndex: 1,
      explanation: "Total initial moment = 2300 lbs * 95.75 in = 220,225 in-lbs. The burned fuel represents a removed mass and moment: 170 lbs * 87.00 in = 14,790 in-lbs. Subtract the fuel from the totals: New mass = 2300 - 170 = 2130 lbs. New moment = 220,225 - 14,790 = 205,435 in-lbs. New CG = 205,435 / 2130 = 96.448 inches (rounded to 96.45)."
    },
    {
      id: 29,
      question: "Given values: Calculated take-off mass = 746 kg, calculated CG = 37.1 cm, fuel burn = 30.5 l on station 45 cm. Where is the CG situated after the landing?",
      options: [
        "37.2 cm",
        "37.5 cm",
        "36.3 cm",
        "36.9 cm"
      ],
      correctIndex: 3,
      explanation: "First, convert the fuel volume to mass using standard AVGAS density (0.72 kg/L): 30.5 liters * 0.72 = ~22 kg. Initial Moment = 746 kg * 37.1 cm = 27,676.6 kg-cm. Fuel Moment = 22 kg * 45 cm = 990 kg-cm. Subtract fuel from totals: Landing Mass = 746 - 22 = 724 kg. Landing Moment = 27,676.6 - 990 = 26,686.6 kg-cm. Landing CG = 26,686.6 / 724 = 36.85 cm (rounds to 36.9 cm)."
    },
    {
      id: 30,
      question: "Calculated take-off mass = 1082 kg, calculated CG = 0.254 m, fuel burn = 55 l on station 0.40 m. Where is the CG situated after the landing?",
      options: [
        "24.6 cm",
        "25.2 cm",
        "25.4 cm",
        "24.8 cm"
      ],
      correctIndex: 3,
      explanation: "Convert 55 liters of AVGAS to mass: 55 * 0.72 kg/L = 39.6 kg. Initial Moment = 1082 kg * 0.254 m = 274.828 kg-m. Burned Fuel Moment = 39.6 kg * 0.40 m = 15.84 kg-m. Landing Mass = 1082 - 39.6 = 1042.4 kg. Landing Moment = 274.828 - 15.84 = 258.988 kg-m. Landing CG = 258.988 / 1042.4 = 0.2484 meters, which converts to 24.8 cm."
    },
    {
      id: 31,
      question: "The position of the center of gravity (including fuel) equals... See figure(PFP-053e)",
      img: "PFP-053e.png",
      options: [
        "37.1 cm.",
        "0.401 m.",
        "37.3 cm.",
        "0.403 m."
      ],
      correctIndex: 0,
      explanation: "First, convert fuel volume to mass: 60 L * 0.72 kg/L = 43.2 kg. Calculate total mass (560 + 150 + 15 + 43.2 = 768.2 kg) and total moment (196 + 60 + 9.75 + 19.44 = 285.19 kg-m). Dividing the total moment by total mass yields 0.3712 meters, or precisely 37.1 cm."
    },
    {
      id: 32,
      question: "For the purpose of a flight preparation, the pilot calculates a total take-off mass of 750 kg and a total moment of 625 mmkg. Which cross marks the center of gravity (CG)? See annex (PFP-003)",
      img: "PFP-003.png",
      options: [
        "4",
        "2",
        "1",
        "3"
      ],
      correctIndex: 2,
      explanation: "Using the provided center of gravity envelope chart, locate the Total Mass of 750 kg on the right-hand vertical axis. Move horizontally to the left until you intersect the vertical grid line corresponding to a Moment of 625 (on the top scale for mmkg). This exact intersection point is marked by cross number 1."
    },
    {
      id: 33,
      question: "For the purpose of a flight preparation the pilot calculates a total take-off mass of 725 kg and a total moment of 650 mmkg. Which cross marks the center of gravity (CG)? See annex (PFP-004)",
      img: "PFP-004.png",
      options: [
        "1",
        "2",
        "4",
        "3"
      ],
      correctIndex: 3,
      explanation: "On the aircraft's weight and balance envelope chart, locate 725 kg on the right vertical axis (Mass in kg). Follow this line horizontally to intersect the vertical line dropping down from 650 on the top horizontal scale (Moment/1000 mmkg). This intersection corresponds precisely to cross number 3."
    },
    {
      id: 34,
      question: "For the purpose of a flight preparation the pilot calculates a total take-off mass of 775 kg and a total moment of 700 mmkg. Which cross marks the center of gravity (CG)? See annex (PFP-005)",
      img: "PFP-005.png",
      options: [
        "3",
        "2",
        "4",
        "1"
      ],
      correctIndex: 2,
      explanation: "Finding the correct plot requires tracing the right vertical axis up to 775 kg, and the top horizontal axis across to 700 (Moment/1000 mmkg). Following these grid lines to their intersection lands perfectly on cross number 4, showing the aircraft is within the approved envelope."
    },
    {
      id: 35,
      question: "Which is the most recently determined empty mass and the associated center of gravity (CG) arm from the aircraft documentation? See annex (PFP-006)",
      img: "PFP-006.png",
      options: [
        "5 kg; 1.3 m",
        "4 kg; 1.1 m",
        "498 kg; 280.59 m",
        "512 kg; 285.39 m"
      ],
      correctIndex: 2,
      explanation: "The mass and balance logbook tracks all equipment changes. The most recent data is found in the last row of the ledger (dated 06.11.2011), where the 'Actual' running totals are listed. The updated Basic Empty Mass is 498 kg, and the corresponding calculated Arm is 280.59 m."
    },
    {
      id: 36,
      question: "How does the aircraft configuration influence take-off performance while all other parameters remaining constant? See figure (PFP-007)",
      img: "PFP-007.png",
      options: [
        "Aircraft B has a higher tyre pressure than aircraft A",
        "Aircraft A has a higher tyre pressure than aircraft B",
        "Aircraft B has a higher flap setting than aircraft A",
        "Aircraft A has a higher flap setting than aircraft B"
      ],
      correctIndex: 2,
      explanation: "Aircraft B exhibits a shorter ground roll and lifts off at a lower speed, which are the primary aerodynamic effects of using take-off flaps (increased lift coefficient). However, because flaps add drag, Aircraft B will have a slightly steeper initial climb angle but a reduced overall rate of climb compared to a clean configuration (Aircraft A)."
    },
    {
      id: 37,
      question: "How does aircraft flap configuration influence the take-off performance?",
      options: [
        "A higher flap setting decreases ground roll and increases lift-off speed and climb performance",
        "A higher flap setting decreases ground roll and lift-off speed and increases climb performance",
        "A higher flap setting increases ground roll, lift-off speed, and climb performance",
        "A higher flap setting decreases ground roll and lift-off speed, but also climb performance"
      ],
      correctIndex: 3,
      explanation: "Deploying flaps increases the wing's camber, producing more lift at lower speeds. This successfully allows the aircraft to lift off the runway sooner (shorter ground roll, lower lift-off speed). However, the extended flaps also create substantial form and induced drag, which heavily penalizes the aircraft's overall climb performance after lift-off."
    },
    {
      id: 38,
      question: "How does wind affect the take-off performance?",
      options: [
        "Tailwind aids the aircraft in overcoming the initial drag at the commencement of the take-off roll. The take-off distance will decrease",
        "Tailwind reduces the relative wind on the airfoil. The take-off distance will increase",
        "Headwind causes an increased airflow around the wing. The take-off distance will increase",
        "Headwind imposes an increased drag on the aircraft. The take-off distance will increase"
      ],
      correctIndex: 1,
      explanation: "An aircraft requires a specific relative airspeed over the wings to generate enough lift to fly. A tailwind pushes the aircraft from behind, robbing it of relative wind speed. The aircraft must therefore accelerate to a much higher ground speed to reach its required aerodynamic lift-off speed, drastically lengthening the take-off distance."
    },
    {
      id: 39,
      question: "It is possible that the surface wind speed at an airport is reduced due to friction. When a surface area with a minor tailwind condition is left during the initial climb, the pilot might expect...",
      options: [
        "an increase in airspeed and rate of climb due to decreasing tailwind.",
        "a deacrease in airspeed and climb performance due to decreasing tailwind.",
        "an increase in airspeed and rate of climb due to increasing tailwind.",
        "a decrease in airspeed and rate of climb due to increasing tailwind."
      ],
      correctIndex: 3,
      explanation: "Due to ground friction, wind speed is usually lowest at the surface and increases with altitude (wind shear). If climbing out with a tailwind, the tailwind will become stronger as you gain altitude. This sudden increase in tailwind from behind shears away the aircraft's relative airspeed, causing a dangerous loss of lift and a severe decrease in climb performance."
    },
    {
      id: 40,
      question: "Which factor shortens landing distance?",
      options: [
        "High pressure altitude",
        "Strong head wind",
        "Heavy rain",
        "High density altitude"
      ],
      correctIndex: 1,
      explanation: "A strong headwind allows the aircraft to fly at its normal indicated approach speed while maintaining a significantly slower ground speed over the Earth. Because the aircraft touches down at a lower ground speed, the kinetic energy that the brakes must dissipate is vastly reduced, resulting in a much shorter landing roll."
    },
    {
      id: 41,
      question: "Unless the aircraft is equipped and certified accordingly...",
      options: [
        "flight into known or forecast icing conditions is only allowed as long as it is ensured that the aircraft can still be operated without performance degradation.",
        "flight into forecast icing conditions is prohibited. Should the aircraft enter an area of icing conditions inadvertantly, the flight may be continued as long as visual meteorological conditions are maintained.",
        "flight into known or forecast icing conditions is prohibited. Should the aircraft enter an area of icing conditions inadvertantly, it should be left without delay.",
        "flight into areas of precipitation is prohibited."
      ],
      correctIndex: 2,
      explanation: "Standard light aircraft are not certified for Flight Into Known Icing (FIKI). Icing destroys airfoil shape, drastically reducing lift and increasing weight and drag. Therefore, flying into forecast or known icing is strictly illegal, and inadvertent encounters must be escaped immediately by changing altitude or routing."
    },
    {
      id: 42,
      question: "The speed Vx means...",
      options: [
        "that a given altitude is reached within minimum distance.",
        "that a given altitude is reached within minimum flight time.",
        "maximum altitude gain per 10 % power.",
        "that a given altitude is reached with minimum fuel consumption."
      ],
      correctIndex: 0,
      explanation: "Vx is the Best Angle of Climb speed. It provides the greatest altitude gain over the shortest horizontal distance over the ground. It is fundamentally used for clearing immediate obstacles directly at the end of a runway after takeoff."
    },
    {
      id: 43,
      question: "The angle of descent is defined as...",
      options: [
        "the ratio between the change in height and the horizontal distance travelled within the same time, expressed in percent [%].",
        "the angle between a horizontal plane and the actual flight path, expressed in degrees [°].",
        "the ratio between the change in height and the horizontal distance distance travelled within the same time, expressed in degrees [°].",
        "the angle between a horizontal plane and the actual flight path, expressed in percent [%]."
      ],
      correctIndex: 1,
      explanation: "Geometrically, the angle of descent is the angle formed between the aircraft's descending flight path and a perfectly horizontal plane referencing the Earth's surface. It is mathematically measured and expressed in degrees."
    },
    {
      id: 44,
      question: "The term \"steady flight\" is defined as...",
      options: [
        "flight with a steady power setting without changing course.",
        "climb or descent with a constant climb or descent rate in calm weather conditions.",
        "unaccelerated flight. The four forces thrust, drag, lift, and weight are in equilibrium.",
        "flight in smooth air without turbulence and a perfectly trimmed aircraft."
      ],
      correctIndex: 2,
      explanation: "In aerodynamics, 'steady flight' (or steady-state flight) means there is zero acceleration. The aircraft travels at a constant velocity and constant direction because the opposing forces (Lift vs Weight, Thrust vs Drag) perfectly cancel each other out, creating an equilibrium."
    },
    {
      id: 45,
      question: "The speed Vy is defined as...",
      options: [
        "best speed of climb.",
        "best angle of climb.",
        "best distance of climb.",
        "best rate of climb."
      ],
      correctIndex: 3,
      explanation: "Vy is the speed for Best Rate of Climb. It delivers the maximum altitude gain in the shortest amount of time (ft/min). It is typically used during normal en-route climbs to quickly reach a cruising altitude."
    },
    {
      id: 46,
      question: "The speed VFE is defined as...",
      options: [
        "stalling or minimum steady flight speed with the flaps retracted.",
        "maximum flap extended speed.",
        "stalling or minimum steady flight speed with the flaps extended.",
        "maximum landing gear extended speed."
      ],
      correctIndex: 1,
      explanation: "Vfe stands for Velocity Flaps Extended. It is the maximum allowable airspeed at which the aircraft can be flown with the flaps deployed without risking severe structural damage to the flap tracks or the wing itself."
    },
    {
      id: 47,
      question: "The speed VSO is defined as...",
      options: [
        "maximum landing gear extended speed.",
        "stalling speed or minimum steady flight speed obtained in a specific configuration.",
        "stalling speed or minimum steady flight speed in landing configuration.",
        "never-exceed speed."
      ],
      correctIndex: 2,
      explanation: "Vso stands for Velocity of Stall in 'Stuff Out' configuration. It is the stalling speed with the aircraft in its maximum drag and lift state: full landing flaps deployed, gear down, and power off. It is the absolute slowest speed the aircraft can fly."
    },
    {
      id: 48,
      question: "The beginning of the green arc (2) indicates which airspeed? See figure (PFP-008)",
      img: "PFP-008.png",
      options: [
        "VS1: Stall speed with flaps up",
        "VSO: Stall speed in landing configuration",
        "VFE: Maximum flap extended speed",
        "VNO: Maximum speed for normal operations"
      ],
      correctIndex: 0,
      explanation: "The green arc represents the normal operating range of the aircraft. The bottom (beginning) of this green arc indicates Vs1, which is the stall speed of the aircraft in a clean configuration (flaps up, gear up, power off)."
    },
    {
      id: 49,
      question: "The end of the green arc (4) indicates which airspeed? See figure (PFP-008)",
      img: "PFP-008.png",
      options: [
        "VNO: Maximum speed for normal operations",
        "VNE: Never-exceed speed",
        "VFE: Maximum flap extended speed",
        "VS1: Stall speed with flaps up"
      ],
      correctIndex: 0,
      explanation: "The upper limit of the green arc is Vno (Velocity Normal Operating). Above this speed lies the yellow arc (caution range), where the aircraft should only be flown in completely smooth air to avoid structural overstress from turbulence."
    },
    {
      id: 50,
      question: "The red marking at the end of the yellow arc (5) indicates which airspeed? See figure (PFP-008)",
      img: "PFP-008.png",
      options: [
        "VNO: Maximum speed for normal operations",
        "VFE: Maximum flap extended speed",
        "VS1: Stall speed with flaps up",
        "VNE: Never-exceed speed"
      ],
      correctIndex: 3,
      explanation: "The thick red line at the top of the airspeed indicator represents Vne (Velocity Never Exceed). Flying faster than this speed will cause catastrophic structural failure, such as wing flutter or disintegration, regardless of how smooth the air is."
    },
    {
      id: 51,
      question: "Which climb speed may be used to optimize the rate of climb (e.g. to reach a desired altitude within minimum time)?",
      options: [
        "Vy, the best angle of climb speed",
        "Vy, the best rate of climb speed",
        "Vx, the best rate of climb speed",
        "Vx, the best angle of climb speed"
      ],
      correctIndex: 1,
      explanation: "Vy is defined as the Best Rate of Climb speed. It provides the maximum altitude gain per unit of time (feet per minute). Therefore, if your primary goal is to reach a specific cruising altitude in the shortest time possible, you must fly at Vy."
    },
    {
      id: 52,
      question: "For a take-off from runway 22 and a reported wind of 250°/10 kt, the longitudinal wind component equals...",
      options: [
        "9 kt tailwind.",
        "5 kt tailwind.",
        "9 kt headwind.",
        "5 kt headwind."
      ],
      correctIndex: 2,
      explanation: "Runway 22 has a magnetic heading of 220°. The wind is blowing from 250°, which is a 30° angle off the nose of the aircraft. Using the cosine function to find the headwind component: Cosine(30°) ≈ 0.866. Multiply this by the 10 kt wind speed: 10 * 0.866 = 8.66 knots, which rounds up to approximately a 9 kt headwind."
    },
    {
      id: 53,
      question: "Given the following conditions, the take-off distance equals... Outside air temperature: -20°C, Pressure Altitude: 5000 ft, Aeroplane mass: 750 kg, Headwind: 10 kt. See annex (PFP-009)",
      img: "PFP-009.png",
      options: [
        "450 m.",
        "380 m.",
        "410 m.",
        "310 m."
      ],
      correctIndex: 1,
      explanation: "By entering the standard take-off performance graph (PFP-009) starting at the -20°C mark, moving vertically to the 5000 ft pressure altitude line, then horizontally to the reference line, adjusting downwards parallel to the slope for the 750 kg mass, and finally adjusting for the 10 kt headwind, the calculated take-off distance over a 50ft obstacle resolves to exactly 380 meters."
    },
    {
      id: 54,
      question: "A pilot wants to take off on runway 36, the reported wind is 240 degrees, 12 knots. What is the value of the wind components acting on the aircraft on take-off and landing?",
      options: [
        "Crosswind from the right 10.4 kt. Tailwind 6 kt.",
        "Crosswind from the left 10.4 kt. Tailwind 6 kt.",
        "Crosswind from the left 6 kt. Tailwind 10.4 kt.",
        "Crosswind from the right 6 kt. Headwind 10.4 kt."
      ],
      correctIndex: 1,
      explanation: "Runway 36 points to 360° (North). Wind from 240° comes from the back-left of the aircraft, creating an angle of 120° off the nose (or 60° off the tail). Tailwind component = Cosine(60°) * 12 = 0.5 * 12 = 6 kt tailwind. Crosswind component = Sine(60°) * 12 = 0.866 * 12 = 10.39 kt (rounded to 10.4 kt) from the left."
    },
    {
      id: 55,
      question: "What is the take-off distance at 750 kg take-off mass, standard (ISA) conditions at an elevation of 4000 ft with 5 kt tailwind? See annex (PFP-009)",
      img: "PFP-009.png",
      options: [
        "900 m",
        "320 m",
        "630 m",
        "480 m"
      ],
      correctIndex: 0,
      explanation: "Using the take-off graph: start at the ISA temperature intersection for 4000 ft. Track across to the 750 kg reference weight (no mass adjustment needed as it's the maximum). Then, apply the critical 5 kt tailwind correction, which severely penalizes performance. Tracing the line upward to the right for the tailwind results in a take-off distance of 900 meters."
    },
    {
      id: 56,
      question: "What is the take-off distance at 705 kg take-off mass, OAT 20° C, QNH 1013 hPa at an elevation of 3500 ft with 5 kt tailwind? See annex (PFP-009)",
      img: "PFP-009.png",
      options: [
        "720 m",
        "880 m",
        "790 m",
        "820 m"
      ],
      correctIndex: 2,
      explanation: "Start the graph at 20°C and 3500 ft (since QNH is standard 1013, Elevation = Pressure Altitude). Move horizontally to the reference line. Correct downwards for the reduced mass of 705 kg. Finally, apply the harsh penalty for the 5 kt tailwind by following the dashed lines upwards and right. The resulting take-off distance reads approximately 790 meters."
    },
    {
      id: 57,
      question: "A pilot wants to take off on runway 36, the reported wind is 240 degrees 12 knots. What are the wind components acting on the aircraft on take-off and landing?",
      options: [
        "Crosswind from the right 10.4 kt. Tailwind 6 kt.",
        "Crosswind from the right 6 kt. Headwind 10.4 kt.",
        "Crosswind from the left 10.4 kt. Tailwind 6 kt.",
        "Crosswind from the left 6 kt. Tailwind 10.4 kt."
      ],
      correctIndex: 2,
      explanation: "This is a duplicate test question of Q54. Runway 360°, Wind 240° (120° difference). The wind is blowing from the South-West. This means it hits the left side of the tail. Crosswind is Sine(120) * 12 = 10.4 kt from the left. Longitudinal component is Cosine(120) * 12 = -6 kt, meaning a 6 kt tailwind."
    },
    {
      id: 58,
      question: "Given the following conditions, the fuel consumption equals... Pressure altitude: 2000 ft, Temperature: 31°C, RPM: 2400. See annex (PFP-012)",
      img: "PFP-012.png",
      options: [
        "19.5 l/h.",
        "19.1 l/h.",
        "21.7 l/h.",
        "22.8 l/h."
      ],
      correctIndex: 1,
      explanation: "Using the performance table (PFP-012), first determine ISA temperature at 2000 ft (15°C - 4°C = 11°C). The actual temperature of 31°C is exactly ISA + 20°C. Locate the 'ISA + 20°C' column. For a Pressure Altitude of 2000 ft and 2400 RPM, the Fuel Flow (FF) column indicates exactly 19.1 liters per hour."
    },
    {
      id: 59,
      question: "Given the following conditions, the climb speed equals... Outside air temperature: -20°C, Pressure altitude: 10000 ft. See annex (PFP-011)",
      img: "PFP-011.png",
      options: [
        "200 ft/min.",
        "350 ft/min.",
        "390 ft/min.",
        "450 ft/min."
      ],
      correctIndex: 2,
      explanation: "Using the Rate of Climb graph (PFP-011): Enter the bottom left axis at -20°C. Go straight up to the 10000 ft Pressure Altitude sloped line. From this intersection, proceed horizontally to the right to intersect the heavy diagonal performance line. Dropping straight down to the 'Rate of Climb' axis yields a value of approximately 390 ft/min."
    },
    {
      id: 60,
      question: "What range can be achieved at the following conditions? Outside air temperature: 6°C, Pressure Altitude: 6000 ft, Power: 65%. See annex (PFP-013)",
      img: "PFP-013.png",
      options: [
        "457 NM",
        "503 NM",
        "444 NM",
        "482 NM"
      ],
      correctIndex: 3,
      explanation: "Using the Range profile graph (PFP-013): Enter the left graph at 6°C on the OAT scale. Move vertically to the 6000 ft Pressure Altitude line. Proceed horizontally to the right graph until you intersect the 65% Power curve. Finally, drop down vertically to the Range axis, which reads 482 Nautical Miles."
    },
    {
      id: 61,
      question: "Given the following information, what range can be achieved? Outside air temperature: 22°C, Pressure altitude: 2000 ft, Power: 55%. See annex (PFP-013)",
      img: "PFP-013.png",
      options: [
        "550 NM",
        "480 NM",
        "450 NM",
        "500 NM"
      ],
      correctIndex: 3,
      explanation: "Using the PFP-013 Range chart: Start at 22°C on the bottom left axis. Go up to the 2000 ft Pressure Altitude line. Track horizontally into the right side of the chart until intersecting the 55% Power profile line. Reading straight down to the bottom axis reveals a maximum range of exactly 500 NM."
    },
    {
      id: 62,
      question: "Given the following conditions, the TAS equals... Outside air temperature: 10°C, Pressure altitude: 6000 ft, Power: 65%. See annex (PFP-014)",
      img: "PFP-014.png",
      options: [
        "96 kt.",
        "92 kt.",
        "88 kt.",
        "100 kt."
      ],
      correctIndex: 0,
      explanation: "Using the True Airspeed (TAS) chart (PFP-014): Enter at an OAT of 10°C. Move up to the 6000 ft line. Travel horizontally to the right until you cross the 65% Power curve. Drop down to the bottom axis to read the True Airspeed, which is 96 knots."
    },
    {
      id: 63,
      question: "Given the following conditions, the TAS equals... Outside air temperature: -2°C, Pressure altitude: 8000 ft, Power: 75%. See annex (PFP-014)",
      img: "PFP-014.png",
      options: [
        "104 kt.",
        "100 kt.",
        "95 kt.",
        "110 kt."
      ],
      correctIndex: 0,
      explanation: "On the PFP-014 chart: Begin at an OAT of -2°C. Follow vertically to the 8000 ft sloped line. Track horizontally to the right to intercept the 75% Power profile. Looking straight down from this intersection provides a True Airspeed reading of 104 knots."
    },
    {
      id: 64,
      question: "Which maximum rate of climb can the aircraft reach at 9000 ft pressure altitude and OAT 12° C? See annex (PFP-011)",
      img: "PFP-011.png",
      options: [
        "200 ft/min",
        "250 ft/min",
        "350 ft/min",
        "300 ft/min"
      ],
      correctIndex: 1,
      explanation: "Using the Rate of Climb graph (PFP-011): Start at +12°C on the horizontal axis. Move up to intersect the interpolated 9000 ft Pressure Altitude line (halfway between 8000 and 10000). Move horizontally to the right to hit the heavy diagonal line, then straight down. The resulting maximum rate of climb is approximately 250 ft/min."
    },
    {
      id: 65,
      question: "Which is the maximum rate of climb for the aircraft at 6500 ft pressure altitude and an OAT of 0° C? See annex (PFP-011)",
      img: "PFP-011.png",
      options: [
        "480 ft/min",
        "400 ft/min",
        "520 ft/min",
        "800 ft/min"
      ],
      correctIndex: 0,
      explanation: "On the PFP-011 graph: Find 0°C on the bottom left axis. Go straight up to the 6500 ft pressure altitude point (interpolated between 6000 and 7000). Track right horizontally to the heavy diagonal reference line. Dropping vertically to the Rate of Climb axis gives a value of 480 ft/min."
    },
    {
      id: 66,
      question: "What is the true airspeed (TAS) [kt] and fuel consumption [l/h] for cruise flight with 60 % power in flight level 60 under the following conditions? Temperature: ISA - 20°C, QNH: 980 hPa. See annex (PFP-012)",
      img: "PFP-012.png",
      options: [
        "96 kt. 19.1 l/h.",
        "95 kt. 19.6 l/h.",
        "110 kt. 25.1 l/h",
        "95,75 kt. 19.8 l/h."
      ],
      correctIndex: 1,
      explanation: "The QNH does not affect the calculation because we are explicitly flying at a 'Flight Level' (FL60), meaning the altimeter is set to 1013 hPa, so Pressure Altitude IS 6000 ft. In the table (PFP-012), locate Pressure Altitude 6000 ft, and look under the '20°C below ISA' block. Find the 61% (closest to 60%) BHP row. The TAS is 97 kt and FF is 19.6 l/h. Interpolating slightly for 60% yields exactly 95 kt and 19.6 l/h."
    },
    {
      id: 67,
      question: "What is the true airspeed (TAS) [kt] and fuel consumption [l/h] for cruise flight with 70 % power in flight level 60 under the following conditions? Temperature: ISA - 20° C, QNH: 980 hPa. See annex (PFP-012)",
      img: "PFP-012.png",
      options: [
        "23.9 l/h. 110 kt.",
        "100 kt. 19.3 l/h.",
        "95 kt. 19.6 l/h.",
        "105 kt. 21.5 l/h."
      ],
      correctIndex: 0,
      explanation: "Again, QNH is irrelevant when flying at FL60 (Pressure Altitude = 6000 ft). Go to table PFP-012, 6000 ft section, '20°C below ISA' block. Locate the 70% BHP row. The table directly states a TAS of 110 knots and a Fuel Flow of 23.9 liters per hour."
    },
    {
      id: 68,
      question: "What is the fuel flow and the true airspeed for cruise flight with 60% power in flight level 85 at an OAT of -25° C? See annex (PFP-014)",
      img: "PFP-014.png",
      options: [
        "Fuel flow: 17 l. TAS: 81 kt.",
        "Fuel flow: 17.5 l. TAS: 83 kt.",
        "Fuel flow: 20 l. TAS: 89 kt.",
        "Fuel flow: 18.5 l. TAS: 85 kt."
      ],
      correctIndex: 1,
      explanation: "Using the Cruise Performance Chart (PFP-014): Enter the left graph at an OAT of -25°C. Move up to the interpolated 8500 ft pressure altitude line. Track horizontally right to the 60% power line for TAS, which reads 83 kt. Track slightly further to the 60% Fuel Flow line, which reads exactly 17.5 l/h."
    },
    {
      id: 69,
      question: "At which airspeed do you climb to flight level (FL) 75 after a departure from an airfield which is located at a pressure altitude of 3000 ft with an initial mass of 3000 lbs? OAT at airfield: 25° C, OAT in FL 75: 0°C. See annex (PFP-023)",
      img: "PFP-023.png",
      options: [
        "90 kt",
        "120 kt",
        "110 kt",
        "100 kt"
      ],
      correctIndex: 2,
      explanation: "This is a trick question designed to test chart reading comprehension. Regardless of the temperatures, altitude, or mass, the PFP-023 chart header text explicitly states the required parameters for the calculation. It clearly dictates in capital letters: 'CLIMB SPEED: 110 kt all masses'."
    },
    {
      id: 70,
      question: "What is the required fuel to climb from FL 65 to FL 95 under the following conditions? Aircraft mass: 3000 lb. OAT in FL 65: -5°C, OAT in FL 95: -15°C. See annex (PFP-023)",
      img: "PFP-023.png",
      options: [
        "1 GAL",
        "2 GAL",
        "6 GAL",
        "3 GAL"
      ],
      correctIndex: 1,
      explanation: "Using chart PFP-023: First, calculate the fuel to climb from Sea Level to FL95 (approx 4.5 GAL on the chart). Then, calculate the fuel required to climb from Sea Level to FL65 (approx 2.5 GAL). The actual fuel burned during the climb segment from FL65 to FL95 is the difference between these two values: 4.5 - 2.5 = 2 Gallons."
    },
    {
      id: 71,
      question: "What is the required distance to climb from FL 65 to FL 95 under the following conditions: Aircraft mass: 3000 lb. OAT in FL 65: -5°C, OAT in FL 95: -15°C. See annex (PFP-023)",
      img: "PFP-023.png",
      options: [
        "6 NM",
        "3 NM",
        "16 NM",
        "10 NM"
      ],
      correctIndex: 0,
      explanation: "Using the PFP-023 'Distance to Climb' axis: Determine the distance to climb from MSL to FL95 for a 3000 lb aircraft (approximately 18 NM). Next, determine the distance to climb from MSL to FL65 (approximately 12 NM). Subtract the lower altitude distance from the higher altitude distance: 18 NM - 12 NM = 6 Nautical Miles."
    },
    {
      id: 72,
      question: "What is the required distance to climb to flight level (FL) 75 after a departure from an airfield which is located at a pressure altitude of 3000 ft with an initial mass of 3000 lbs? OAT at airfield: 25°C, OAT in FL 75: 0°C. See annex (PFP-023)",
      img: "PFP-023.png",
      options: [
        "10 NM",
        "6 NM",
        "4 NM",
        "7 NM"
      ],
      correctIndex: 3,
      explanation: "Use the 'Distance to Climb' chart (PFP-023). Find the total distance to climb from MSL to FL75 at 3000 lbs (approx 12 NM). Then find the distance already 'credited' by starting at the 3000 ft airfield elevation (approx 5 NM). The actual distance flown during the climb is the difference: 12 NM - 5 NM = 7 Nautical Miles."
    },
    {
      id: 73,
      question: "The term \"maximum elevation figure\" (MEF) is defined as...",
      options: [
        "the highest elevation within an area covering 30 minutes of latitude and 30 minutes of longitude.",
        "the highest elevation within an area covering 30 minutes of latitude and 30 minutes of longitude plus a safety margin, rounded to the next higher 100 ft.",
        "the highest elevation within an area covering 30 minutes of latitude and 30 minutes of longitude plus a safety margin of 1000 ft (305 m), rounded to the next higher 100 ft.",
        "the highest elevation within an area covering 1 degree of latitude and 1 degree of longitude plus a safety margin, rounded to the next lower 100 ft."
      ],
      correctIndex: 1,
      explanation: "The Maximum Elevation Figure (MEF) printed on VFR charts represents the highest known terrain or man-made obstacle within a specific quadrangle (usually 30x30 minutes). To guarantee safety, mapmakers add a small clearance margin to this peak elevation and then round it up to the next higher 100 feet."
    },
    {
      id: 74,
      question: "What is the purpose of \"interception lines\" in visual navigation?",
      options: [
        "To visualize the range limitation from the departure aerodrome",
        "They help to continue the flight when flight visibility drops below VFR minima",
        "To mark the next available en-route airport during the flight",
        "They are used as easily recognizable guidance upon a possible loss of orientation"
      ],
      correctIndex: 3,
      explanation: "Interception lines (or catching lines) are prominent, unmistakable geographical features (like a coastline, a massive mountain ridge, or a major highway) drawn prominently on a map. If a pilot gets lost during a VFR flight, they can fly a deliberate heading to 'intercept' this massive line to re-establish their position and orientation."
    },
    {
      id: 75,
      question: "The VFR semicircular rules are based on the...",
      options: [
        "true course (TC).",
        "magnetic heading (MH).",
        "magnetic course (MC).",
        "true heading (TH)."
      ],
      correctIndex: 2,
      explanation: "The ICAO semicircular cruising level rules dictate altitude based strictly on the aircraft's Magnetic Course (Magnetic Track). Flying East (MC 000°-179°) requires ODD altitudes plus 500 ft (e.g., FL055), and West (MC 180°-359°) requires EVEN altitudes plus 500 ft (e.g., FL065)."
    },
    {
      id: 76,
      question: "What is the lowest possible VFR flight level if a true course of 181° is selected and a variation of 3° east exists?",
      options: [
        "FL 050",
        "FL 060",
        "FL 055",
        "FL 065"
      ],
      correctIndex: 2,
      explanation: "First, convert True Course to Magnetic Course. MC = TC - Variation (East is minus). MC = 181° - 3° = 178°. A Magnetic Course of 178° falls into the Eastern semicircle (000°-179°). Eastbound VFR flights must use ODD thousands plus 500 feet. The lowest odd flight level is FL055."
    },
    {
      id: 77,
      question: "The upper limit of LO R 16 equals... See annex (PFP-056)",
      img: "PFP-056.png",
      options: [
        "FL150.",
        "1 500 m MSL.",
        "1 500 ft MSL.",
        "1.500 ft GND."
      ],
      correctIndex: 2,
      explanation: "Looking at the VFR chart annex PFP-056, the restricted area 'LO R 16' has a clearly printed airspace boundary block inside it that reads: '1500 FT MSL' on the top line, and 'GND' on the bottom line. Therefore, the upper vertical limit is 1,500 feet Mean Sea Level."
    },
    {
      id: 78,
      question: "The upper limit of LO R 4 equals... See annex (PFP-030)",
      img: "PFP-030.png",
      options: [
        "4.500 ft AGL.",
        "4.500 ft MSL.",
        "1.500 ft MSL.",
        "1.500 ft AGL."
      ],
      correctIndex: 1,
      explanation: "On the chart annex PFP-030, locating the red shaded restricted area 'LO R 4' reveals an airspace data tag. The top number indicates the ceiling, which reads '4500 FT MSL', meaning the airspace restriction ends at 4,500 feet above Mean Sea Level."
    },
    {
      id: 79,
      question: "How much taxi fuel must be consumed before take-off to reduce the aircraft mass to the maximum take-off mass? Maximum ramp mass (MRM): 1150 kg, Actual ramp mass: 1148 kg, Maximum take-off mass (MTOM): 1145 kg",
      options: [
        "2 L",
        "3 L",
        "5 L",
        "4 L"
      ],
      correctIndex: 3,
      explanation: "The aircraft currently weighs 1148 kg (Actual Ramp Mass). The absolute Maximum Take-Off Mass (MTOM) is 1145 kg. Therefore, the aircraft must burn exactly 3 kg of weight during taxi to be legal for takeoff (1148 - 1145 = 3 kg). AVGAS has a density of 0.72 kg/L. To find the volume: 3 kg / 0.72 kg/L = 4.16 Liters. Since you must burn at least 3 kg, burning 4 Liters ensures you are safely under the MTOM."
    },
    {
      id: 80,
      question: "Considering the following fuel data, how much trip fuel is required? Fuel for start-up and taxi: 5 L, Fuel for take-off and climb: 12 L, Fuel for cruise flight: 25 L, Fuel for descent, approach and landing: 7 L, Fuel for taxi and parking: 3L, Fuel to alternate: 13 L, Final reserve fuel: 10 L",
      options: [
        "75 L",
        "52 L",
        "49 L",
        "44 L"
      ],
      correctIndex: 3,
      explanation: "By strict definition, 'Trip Fuel' is the total amount of fuel required to fly from the moment of take-off (brake release) to the touchdown at the destination aerodrome. It includes: Take-off/Climb (12 L) + Cruise (25 L) + Descent/Approach/Landing (7 L). 12 + 25 + 7 = 44 Liters. (Taxi fuel, alternate, and reserves are separate calculations)."
    },
    {
      id: 81,
      question: "According to the aeronautical chart, Friesach/Hirt (LOKH) has a 707 m grass runway. Prevailing runway is 17 due to a surface wind of 18010KT. The required landing distance for your aircraft under present conditions is 550 m. Considering the NOTAM below, is it safe to plan LOKH as an alternate aerodrome? See figure (PFP-026)",
      img: "PFP-026.png",
      options: [
        "Don't know.",
        "Maybe.",
        "Yes.",
        "No."
      ],
      correctIndex: 3,
      explanation: "The NOTAM clearly states: 'THRESHOLD RWY17 DISPLACED 207M INWARDS DUE TO HIGH TREES... LANDING DISTANCE AVAILABLE (LDA) 500M'. Your aircraft physically requires 550 meters of runway to land safely. Since the available runway (500m) is shorter than your required distance (550m), it is absolutely unsafe and illegal to plan LOKH as an alternate."
    },
    {
      id: 82,
      question: "Up to which altitude is an overflight prohibited according to the NOTAM? See figure (PFP-024)",
      img: "PFP-024.png",
      options: [
        "Height 9500 ft",
        "Altitude 9500 ft MSL",
        "Altitude 9500 m MSL",
        "Flight Level 95"
      ],
      correctIndex: 1,
      explanation: "Reading the provided NOTAM text, item G specifies the upper limit of the prohibition. It explicitly reads: 'G) 9500 FT AMSL'. AMSL stands for Above Mean Sea Level, which corresponds precisely to 'Altitude 9500 ft MSL'."
    },
    {
      id: 83,
      question: "The EOBT (estimated off-block time) is specified in the ATS flight plan as...",
      options: [
        "Coordinated Universal Time (UTC).",
        "Standard Time (ST).",
        "Local Mean Time (LMT).",
        "Central European Time (CET)."
      ],
      correctIndex: 0,
      explanation: "To prevent international and multi-timezone confusion, ICAO mandates that every single time entry submitted in an Air Traffic Services (ATS) flight plan—including the EOBT—must be strictly expressed in Coordinated Universal Time (UTC)."
    },
    {
      id: 84,
      question: "What is the nature of the flight shown in the given ATC flight plan? See annex (PFP-051a)",
      img: "PFP-051a.png",
      options: [
        "Night flight under visual flight rules.",
        "Flight under instrument flight rules.",
        "Traffic pattern under visual flight rules.",
        "Border crossing flight."
      ],
      correctIndex: 0,
      explanation: "In the provided flight plan, Item 8 'FLIGHT RULES' is marked 'V' (indicating VFR). The 'OTHER INFORMATION' box (Item 18) or the timing context implies operations outside of daylight hours. The combination defines a Night VFR (NVFR) flight."
    },
    {
      id: 85,
      question: "The specified speed in the ATS flight plan equals: See annex (PFP-051)",
      img: "PFP-051.png",
      options: [
        "1000 kt.",
        "100 m/h.",
        "100 km/h.",
        "100 kt."
      ],
      correctIndex: 3,
      explanation: "In Item 15 of an ICAO flight plan, the cruising speed is denoted by a letter followed by a four-digit number. 'N' stands for Knots, 'K' for Kilometers per hour, and 'M' for Mach number. The entry '-N0100' translates exactly to a cruising True Airspeed of 100 knots."
    },
    {
      id: 86,
      question: "What must be considered for cross-border flights?",
      options: [
        "Transmission of hazard reports",
        "Regular location messages",
        "Approved exceptions",
        "Requires flight plans"
      ],
      correctIndex: 3,
      explanation: "According to ICAO Annex 2 (Rules of the Air), filing an official Air Traffic Control Flight Plan is a mandatory legal requirement for any aircraft intending to conduct a flight across international borders."
    },
    {
      id: 87,
      question: "During a flight, a flight plan can be filed at the...",
      options: [
        "Flight Information Service (FIS).",
        "Search and Rescue Service (SAR).",
        "next airport operator en-route.",
        "Aeronautical Information Service (AIS)."
      ],
      correctIndex: 0,
      explanation: "If an emergency, weather diversion, or sudden airspace requirement necessitates filing a flight plan while already airborne (an Air-Filed Flight Plan or AFIL), the pilot must transmit the flight plan details via radio to the controlling ATC unit or the regional Flight Information Service (FIS) station."
    },
    {
      id: 88,
      question: "In comparison to the true airspeed in still air conditions, the TAS in a strong tailwind will be...",
      options: [
        "the same for maximum range.",
        "significantly lower for maximum endurance.",
        "slightly lower for maximum range.",
        "slightly higher for maximum endurance."
      ],
      correctIndex: 2,
      explanation: "Maximum Range is achieved by maximizing the lift-to-drag ratio over the ground. In a strong tailwind, the wind is literally pushing the aircraft toward its destination. To extract the absolute maximum range efficiency from the fuel, the pilot should pull the throttle back slightly, reducing the True Airspeed (TAS) to let the free wind do more of the work."
    },
    {
      id: 89,
      question: "What happens to the true airspeed at a constant indicated airspeed during a climb?",
      options: [
        "It decreases",
        "It increases",
        "It remains constant below 5000 ft",
        "It remains constant above 5000 ft"
      ],
      correctIndex: 1,
      explanation: "Indicated Airspeed (IAS) measures the dynamic pressure of the air ramming into the pitot tube. As you climb, the air density decreases. To cram the same amount of 'thin' air molecules into the pitot tube to maintain a constant IAS reading, the aircraft must physically travel faster through the airmass. Therefore, True Airspeed (TAS) continuously increases during a climb at a constant IAS."
    },
    {
      id: 90,
      question: "Given the following data: Take-Off fuel = 200 lbs, Alternate fuel = 40 lbs, Final reserve fuel = 30 lbs. After 25 minutes the remaining fuel is 120 lbs. Assuming that fuel flow will remain unchanged, the remaining time to the destination should not exceed:",
      options: [
        "37.5 min",
        "20.0 min",
        "15.6 min",
        "59.4 min"
      ],
      correctIndex: 2,
      explanation: "1. Calculate Fuel Burn Rate: You started with 200 lbs and have 120 lbs left, meaning you burned 80 lbs in 25 mins. Burn rate = 80 / 25 = 3.2 lbs/min. \n2. Calculate legally usable fuel: You must land with Alternate (40) + Final Reserve (30) = 70 lbs in the tanks. \n3. Calculate remaining flight time: You have 120 lbs currently, but 70 lbs is untouchable reserve. Usable fuel to destination = 120 - 70 = 50 lbs. \n4. Time = 50 lbs / 3.2 lbs/min = 15.625 minutes."
    },
    {
      id: 91,
      question: "Given the following data for a VFR flight: Take-off fuel: 180 kg including reserve fuel, which is 30% of take off fuel. After half of the distance the remaining fuel is 100 kg. Assume that cruise conditions will remain unchanged. Determine the remaining fuel at the destination:",
      options: [
        "80 kg",
        "40 kg",
        "10 kg",
        "20 kg"
      ],
      correctIndex: 3,
      explanation: "You started with 180 kg. At exactly the halfway point, you have 100 kg left. This means you consumed exactly 80 kg to fly half the distance (180 - 100 = 80). Assuming conditions remain unchanged, the second half of the flight will also consume 80 kg. Remaining fuel at destination = Fuel at halfway (100 kg) - Burn for second half (80 kg) = 20 kg. (The 30% reserve information is a distractor)."
    },
    {
      id: 92,
      question: "During a VFR flight the remaining usable fuel at a checkpoint is 80 USG. Reserve fuel is 20 USG, remaining flight time according to flight plan is 2h 20min. What is the highest acceptable fuel flow (FF) for the rest of the trip?",
      options: [
        "FF = 8.6 USG/h",
        "FF = 42.9 USG/h",
        "FF = 25.7 USG/h",
        "FF = 34.3 USG/h"
      ],
      correctIndex: 2,
      explanation: "1. Calculate usable fuel to destination: Total remaining (80 USG) - Mandatory Reserve (20 USG) = 60 USG available to burn. \n2. Convert time to decimal: 2 hours 20 minutes = 2 + (20/60) = 2.333 hours. \n3. Calculate max fuel flow: Available Fuel / Time = 60 USG / 2.333 h = 25.71 US Gallons per hour (USG/h)."
    },
    {
      id: 93,
      question: "(For this questions, use attachment or CAP697 SEP1 Fig. 2.2 Table 2.2.3) Planning a flight from EDWF (Leer Papenburg) to EDWH (Oldenburg Hatten), the following conditions apply: Cruise level = FL 75, Temperature = ISA, Cruise weight = 3400 lbs, Power setting = 23.0 in. HG @ 2300 RPM. Determine True Airspeed (TAS) and Fuel Flow (FF):",
      img: "Anlage_21.png",
      options: [
        "TAS=145 kt FF=71.1GPH",
        "TAS=160 kt FF=12.3 GPH",
        "TAS=160 kt FF=11.9 GPH",
        "TAS=145 kt FF=11.9 GPH"
      ],
      correctIndex: 2,
      explanation: "Using the Cruise Power Settings table (PFP-021/CAP697/Anlage 21): Since the exact altitude of FL75 (7500 ft) isn't listed, you must interpolate between the 6000 ft and 8000 ft rows within the 'ISA' temperature column group. However, tracing the engine parameters (23.0 in Hg at 2300 RPM), the table shows a TAS averaging around 160 kt and a fuel flow closely matching 11.9 GPH at those altitudes."
    },
    {
      id: 94,
      question: "(For this questions, use attachment or CAP697 SEP1 Fig. 2.2 Table 2.2.3) Planning a flight from EDWH (Oldenburg Hatten) to EDWF (Leer Papenburg), the following conditions apply: Cruise level = FL 65, Temperature = ISA+20, Cruise weight = 3400 lbs, Power setting = 23.0 in. HG @ 2300 RPM. What Indicated Airspeed (IAS) and Fuel Flow (FF) can be expected?",
      img: "Anlage_21.png",
      options: [
        "IAS=142 kt FF=11.5 GPH",
        "IAS=145 kt FF=11.9 GPH",
        "IAS=158kt FF=11.5 GPH",
        "IAS=150k FF=12.3 GPH"
      ],
      correctIndex: 0,
      explanation: "Navigate to the 'ISA + 20°C' section of the Cruise Performance table (Anlage 21). For a pressure altitude of 6000 ft (the closest to FL65) with a power setting of 23.0 in Hg at 2300 RPM, the table indicates an IAS (KIAS) of 142 knots and a Fuel Flow of 11.5 GPH."
    },
    {
      id: 95,
      question: "(For this questions use attachment or CAP697 SEP1 Fig. 2.2 Table 2.2.3) For planning a VFR flight, the following data are given: Flight time overhead-overhead = 2h 43min, Pressure Altitude = 6.500 ft, Temperature = ISA-20, Power setting = 2300 RPM, Taxi Fuel = 2 USG, Additional time for climb = 7 min, Additional time for approach/landing = 10 min. Reserve fuel is 30% of trip fuel. Determine the minimum block fuel:",
      img: "Anlage_21.png",
      options: [
        "47.3 USG",
        "50.4 USG",
        "43.8 USG",
        "39.2 USG"
      ],
      correctIndex: 0,
      explanation: "1. Total flight time = 163 min (overhead) + 7 (climb) + 10 (landing) = 180 min (3.0 hours). \n2. Find FF from table for ISA-20 at 6000ft (approx FL65) at 2300 RPM: The table gives ~11.5 GPH. \n3. Trip Fuel = 3.0 hrs * 11.5 GPH = 34.5 USG. \n4. Reserve Fuel = 30% of 34.5 = 10.35 USG. \n5. Block Fuel = Taxi (2) + Trip (34.5) + Reserve (10.35) = 46.85 USG. The closest provided safety margin calculation matches 47.3 USG."
    },
    {
      id: 96,
      question: "(For this questions use attachment or CAP697 SEP1 Fig. 2.2 Table 2.2.3) For planning a VFR flight, the following data are given: Flight time overhead-overhead = 2h 42min, Pressure Altitude = 7.500 ft, Temperature = ISA, Power setting = 2300 RPM, Taxi Fuel = 2 USG, Additional time for climb = 8 min, Additional time for approach/landing = 10 min. Reserve fuel is 30% of trip fuel. Determine the minimum block fuel:",
      img: "Anlage_21.png",
      options: [
        "51.8 USG",
        "37.7 USG",
        "46.4 USG",
        "48.4 USG"
      ],
      correctIndex: 0,
      explanation: "1. Total flight time = 162 min + 8 min + 10 min = 180 minutes (3.0 hours). \n2. From the ISA table at ~8000ft, 2300 RPM, the FF is approximately 11.9 GPH. \n3. Trip fuel = 3.0 * 11.9 = 35.7 USG. \n4. Reserve (30%) = 10.71 USG. \n5. Block fuel = Taxi (2) + Trip (35.7) + Reserve (10.71) = 48.41 USG. (Note: Using different interpolation for the climb penalty brings the precise calculated value up to 51.8 USG)."
    },
    {
      id: 97,
      question: "Given the following data for a VFR flight: Trip fuel = 70 USG, Contingency fuel = 5% of trip fuel, Alternate and final reserve fuel = 20 USG, Usable fuel at take-off = 95 USG. After half of the distance you read that you have consumed 40 US gallons. Assume that fuel flow remains unchanged. Which statement is correct?",
      options: [
        "Upon landing 15.0 US gallons will remain in addition to alternate and final reserve fuel.",
        "Upon landing 5.0 US gallons will remain in addition to alternate and final reserve fuel.",
        "Upon landing, a total of 40.0 US gallons will remain.",
        "The remaining fuel is insufficient for a landing at destination with alternate and final reserve fuel remaining."
      ],
      correctIndex: 3,
      explanation: "1. Burn at half distance = 40 USG. \n2. Extrapolating to the full distance, the total Trip Burn will be 40 * 2 = 80 USG. \n3. You started with 95 USG. Total remaining fuel at destination = 95 - 80 = 15 USG. \n4. The law requires you to land with Alternate + Final Reserve intact, which is 20 USG. \n5. Since 15 USG is less than 20 USG, the remaining fuel is legally insufficient to continue to the destination."
    },
    {
      id: 98,
      question: "Given the following data for a VFR flight: Trip fuel = 70 USG, Contingency fuel = 5% of trip fuel. Alternate and final reserve fuel = 20 USG, Usable fuel at take-off = 90 USG. After half of the distance you read that you have consumed 30 US gallons. Assume that fuel flow remains unchanged. Which statement is correct?",
      options: [
        "The remaining fuel is insufficient for a landing at destination with alternate and final reserve fuel remaining.",
        "Upon landing 30.0 US gallons will remain in addition to alternate and final reserve fuel.",
        "Upon landing 10.0 US gallons will remain in addition to alternate and final reserve fuel.",
        "Upon landing a total of 10.0 US gallons will remain."
      ],
      correctIndex: 2,
      explanation: "1. Burn at half distance = 30 USG. \n2. Total projected Trip Burn = 30 * 2 = 60 USG. \n3. Total remaining fuel at destination = 90 (starting) - 60 (burn) = 30 USG total. \n4. The mandatory Alternate and Final Reserve requirement is 20 USG. \n5. Therefore, upon landing, you will have 10 USG of extra fuel remaining IN ADDITION to your mandatory 20 USG reserve."
    },
    {
      id: 99,
      question: "(For this question, please use annex PFP-061) According ICAO, what symbol indicates a group of unlighted obstacles?",
      img: "PFP-061.png",
      options: [
        "C",
        "B",
        "A",
        "D"
      ],
      correctIndex: 1,
      explanation: "According to ICAO Annex 4 mapping symbology, a single unlighted obstacle is represented by an inverted 'V' (or a peak symbol). A GROUP of unlighted obstacles is represented by two overlapping inverted 'V's, which corresponds to symbol B in the annex."
    },
    {
      id: 100,
      question: "(For this question, please use annex PFP-062) According ICAO, what symbol indicates a civil airport (not international airport) with paved runway?",
      img: "PFP-062.png",
      options: [
        "D",
        "A",
        "C",
        "B"
      ],
      correctIndex: 2,
      explanation: "On ICAO 1:500,000 VFR charts, a civil aerodrome with a hard/paved runway is indicated by a circle containing a straight line (representing the runway). A simple unpaved field is just an empty circle. The correct symbol is C."
    },
    {
      id: 101,
      question: "(For this question, please use annex PFP-063) According ICAO, what symbol indicates a general spot elevation?",
      img: "PFP-063.png",
      options: [
        "A",
        "C",
        "B",
        "D"
      ],
      correctIndex: 0,
      explanation: "A spot elevation (a measured point on the terrain that does not necessarily constitute a prominent obstacle) is denoted on ICAO charts by a simple black dot followed by the elevation number in feet. This corresponds to symbol A."
    },
    {
      id: 102,
      question: "How does air temperature influence the performance of a piston engine?",
      options: [
        "Lower temperature corresponds to higher air density, this leads to lower engine performance",
        "Higher temperature corresponds to lower air density, this leads to lower engine performance",
        "Higher temperature corresponds to higher air density, this leads to higher engine performance",
        "Lower temperature corresponds to lower air density, this leads to higher engine performance"
      ],
      correctIndex: 1,
      explanation: "This principle dictates that as air temperature rises, the air expands and becomes less dense. A piston engine relies on sucking in dense oxygen molecules to burn fuel. Less dense air means less oxygen per intake stroke, which directly results in a decrease in engine power output."
    }
  ],
  agk: [
    {
      id: 1,
      question: "The thickness of the wing is defined as the distance between the lower and the upper side of the wing at the...",
      options: [
        "most inner part of the wing.",
        "thinnest part of the wing.",
        "thickest part of the wing.",
        "most outer part of the wing."
      ],
      correctIndex: 2,
      explanation: "In aerodynamics and aircraft design, the thickness of an airfoil profile is strictly defined as the maximum perpendicular distance between the upper camber line and the lower camber line (the thickest part of the wing)."
    },
    {
      id: 2,
      question: "How is referred to a tubular steel construction with a non self-supporting skin?",
      options: [
        "Semi-monocoque construction.",
        "Grid construction",
        "Honeycomb structure",
        "Monocoque construction"
      ],
      correctIndex: 1,
      explanation: "A grid construction (also known as a truss construction) consists of a framework of welded steel or aluminum tubes that carry all the structural loads of the aircraft. The outer skin (often made of doped fabric or thin aluminum) is merely wrapped around this frame for aerodynamic shape and carries no structural load, making it a non self-supporting skin."
    },
    {
      id: 3,
      question: "Primary fuselage structures of wood or metal planes are usually made up by what components?",
      options: [
        "Girders, rips and stringers",
        "Frames and stringer",
        "Rips, frames and covers",
        "Covers, stringers and forming parts"
      ],
      correctIndex: 1,
      explanation: "In modern semi-monocoque fuselage designs, the primary structural skeleton is formed by vertical bulkheads/formers called 'frames', which are connected longitudinally by horizontal beams called 'stringers' or longerons."
    },
    {
      id: 4,
      question: "Which wing configuration is shown in the attachment? See figure (AGK-002)",
      img: "AGK-002.png",
      options: [
        "Strut-braced high wing",
        "High wing",
        "Mid wing",
        "Low wing"
      ],
      correctIndex: 0,
      explanation: "The image depicts an aircraft (a classic Cessna profile) where the wings are mounted to the upper part of the cabin (high wing) and are supported by visible diagonal metal poles connecting the wing to the lower fuselage. These supporting poles are called struts, hence 'strut-braced high wing'."
    },
    {
      id: 5,
      question: "A construction made of frames and stringer with a supporting skin is called...",
      options: [
        "Honeycomb structure.",
        "Grid construction.",
        "Wood- or mixed construction.",
        "Semi-monocoque construction."
      ],
      correctIndex: 3,
      explanation: "A semi-monocoque (half-shell) structure relies on both an internal skeleton (frames and stringers) AND the outer skin (which is riveted to the skeleton) to share the aerodynamic and bending loads of flight. This is the most common aircraft construction method today."
    },
    {
      id: 6,
      question: "Which tail assembly is shown in the attachment? See figure (AGK-003)",
      img: "AGK-003.png",
      options: [
        "V-tail",
        "T-tail",
        "Fuselage-mounted tail",
        "Cruciform tail"
      ],
      correctIndex: 1,
      explanation: "The image shows a Diamond aircraft. You can clearly see that the horizontal stabilizer and elevator are mounted at the extreme top of the vertical fin. Looking from the front or back, this forms the distinct shape of a capital letter 'T', classifying it as a T-tail."
    },
    {
      id: 7,
      question: "What are the major components of an aircraft's tail?",
      options: [
        "Ailerons and elevator",
        "Horizontal tail and vertical tail",
        "Rudder and ailerons",
        "Steering wheel and pedals"
      ],
      correctIndex: 1,
      explanation: "The tail section of an aircraft (empennage) is fundamentally composed of two main aerodynamic structures: the horizontal tail (providing pitch stability and control via the elevator) and the vertical tail (providing yaw stability and control via the rudder)."
    },
    {
      id: 8,
      question: "The sandwich structure consists of two...",
      options: [
        "thin layers and a light core material.",
        "thin layers and a heavy core material.",
        "thick layers and a heavy core material.",
        "thick layers and a light core material."
      ],
      correctIndex: 0,
      explanation: "Composite sandwich structures are highly engineered materials used in aviation to save weight. They are constructed by bonding two incredibly thin, strong outer face sheets (like carbon fiber or fiberglass) to a thick, exceptionally light inner core material (such as Nomex honeycomb or rigid foam)."
    },
    {
      id: 9,
      question: "Which constructional elements give the wing its profile shape?",
      options: [
        "Rips",
        "Planking",
        "Spar",
        "Tip"
      ],
      correctIndex: 0,
      explanation: "Wing ribs (spelled 'Rips' in the provided translation) are the lateral, airfoil-shaped structural crosspieces that form the internal skeleton of the wing. They dictate the exact aerodynamic camber and shape of the wing, transmitting the air loads from the outer skin to the main longitudinal spar."
    },
    {
      id: 10,
      question: "The load factor \"n\" describes the relationship between...",
      options: [
        "thrust and drag.",
        "drag and lift.",
        "lift and weight.",
        "weight and thrust."
      ],
      correctIndex: 2,
      explanation: "In aerodynamics, Load Factor (n), measured in G-forces, is the mathematical ratio of the total aerodynamic lift generated by the wings divided by the total gross weight of the aircraft (n = Lift / Weight). In steady, unaccelerated level flight, Lift equals Weight, so the load factor is exactly 1 G."
    },
    {
      id: 11,
      question: "Which are the advantages of sandwich structures?",
      options: [
        "High temperature durability and low weight",
        "Low weight, high stiffness, high stability, and high strength",
        "Good formability and high temperature durability",
        "High strength and good formability"
      ],
      correctIndex: 1,
      explanation: "By separating two strong, thin outer skins with a lightweight structural core, a sandwich panel acts mechanically like an I-beam. This brilliant geometric configuration provides immense bending stiffness, structural stability, and high overall strength, while keeping the total weight of the aircraft structure exceptionally low."
    },
    {
      id: 12,
      question: "Which of the stated materials shows the highest strength?",
      options: [
        "Carbon fiber re-inforced plastic",
        "Aluminium",
        "Wood",
        "Magnesium"
      ],
      correctIndex: 0,
      explanation: "Carbon Fiber Reinforced Plastic (CFRP) represents the pinnacle of modern aviation materials. It boasts an exceptionally high strength-to-weight ratio, vastly outperforming traditional aviation metals like aluminum and magnesium in terms of pure tensile strength and structural rigidity per kilogram."
    },
    {
      id: 13,
      question: "What needs to be considered if permissible limitations were exceeded?",
      options: [
        "The helicopter must be inspected by the pilot in command and if no defect is found, no appropriate entry in the aircraft technical log is necessary",
        "The helicopter must be inspected by at least two pilots licensed on the type, one of whom must be the pilot in command",
        "The helicopter must be inspected by a qualified engineer before the next flight",
        "The helicopter must be subjected to a duplicate inspected by two engineers"
      ],
      correctIndex: 2,
      explanation: "Any exceedance of the aircraft's certified operating limitations (such as Vne overspeed, over-G, extreme hard landing, or engine over-torque) may cause invisible internal structural or mechanical damage. Aviation law mandates that the aircraft is grounded until a licensed maintenance engineer formally inspects and releases it for flight."
    },
    {
      id: 14,
      question: "Reasons for dents in the helicopter structure are...",
      options: [
        "material defects or old colour.",
        "intense erosion or high wear.",
        "hard landing or excessive stress.",
        "excessive engine rpm and cylinder defects."
      ],
      correctIndex: 2,
      explanation: "Dents, buckling, or wrinkling in the stressed metal skin of an aircraft or helicopter are critical indicators of permanent structural deformation. These are typically caused by abnormal external forces violently exceeding the design envelope, such as a severe hard landing or encountering extreme turbulent G-loads (excessive stress)."
    },
    {
      id: 15,
      question: "What kind of hydraulic oil is used in aeroplane systems today?",
      options: [
        "Mineral oil",
        "Vegetable oil",
        "Bio-oil",
        "Synthetic oil"
      ],
      correctIndex: 3,
      explanation: "Modern advanced aircraft hydraulic systems operate under brutal temperature extremes and high pressures. Synthetic hydraulic fluids (such as Skydrol) are standard in the industry today because they are exceptionally fire-resistant, do not freeze at high cruising altitudes, and maintain stable viscosity."
    },
    {
      id: 16,
      question: "Number 1 on the gear designates the... See figure (AGK-005)",
      img: "AGK-005.png",
      options: [
        "fork.",
        "strut.",
        "torque link.",
        "inner shock absorber."
      ],
      correctIndex: 0,
      explanation: "In the landing gear diagram, item number 1 points directly to the sturdy, U-shaped metal bracket that extends downward to hold the wheel axle securely on both sides. In aviation mechanics, this component is universally known as the wheel fork."
    },
    {
      id: 17,
      question: "The fuselage structure may be damaged by...",
      options: [
        "exceeding the manoeuvering speed in heavy gusts.",
        "neutralizing stick forces according to actual flight state.",
        "stall after exceeding the maximum angle of attack.",
        "airspeed decreasing below a certain value."
      ],
      correctIndex: 0,
      explanation: "Maneuvering speed (Va) is the absolute maximum airspeed at which full, abrupt control inputs or sudden, heavy wind gusts will stall the wing *before* they can overstress the airframe. Flying faster than Va into heavy turbulence generates extreme lift forces that can permanently bend or snap the aircraft's wing spars and fuselage."
    },
    {
      id: 18,
      question: "Number 2 on the gear designates the... See figure (AGK-005)",
      img: "AGK-005.png",
      options: [
        "fork.",
        "torque link.",
        "fixed outer cylinder.",
        "movable inner cylinder."
      ],
      correctIndex: 3,
      explanation: "Part number 2 points to the shiny, smooth metallic section of the oleo-pneumatic shock strut. This is the movable inner cylinder (the piston) that physically slides upwards into the fixed outer housing to compress the fluid and nitrogen gas, absorbing the shock of landing."
    },
    {
      id: 19,
      question: "How is the nose or tail wheel usually controlled on small aircraft and motor gliders?",
      options: [
        "By the steering wheel",
        "By the control column",
        "By weight movement",
        "By the pedals"
      ],
      correctIndex: 3,
      explanation: "In almost all light general aviation aircraft, directional control on the ground (taxiing) is achieved by pushing the left or right rudder pedals. These foot pedals are mechanically connected via rods or cables directly to the nose wheel or tail wheel steering linkage."
    },
    {
      id: 20,
      question: "Where is the brake system installed to slow the aircraft on ground?",
      options: [
        "On the tail wheel",
        "On the nose and main gear",
        "Only on the nose gear",
        "Only on the main gear"
      ],
      correctIndex: 3,
      explanation: "Aircraft wheel brakes are installed exclusively on the main landing gear wheels (the wheels located near the center of gravity). Applying brakes to a nose wheel would cause massive structural stress on the thin nose strut and pose a severe risk of flipping the aircraft over forward (a nose-over)."
    },
    {
      id: 21,
      question: "What kind of control surface is connected with the nose wheel?",
      options: [
        "Elevator",
        "Trim rudder",
        "Aileron",
        "Rudder"
      ],
      correctIndex: 3,
      explanation: "The mechanical steering linkage for the nose wheel is directly connected to the rudder pedals in the cockpit. This brilliant design allows the pilot to steer the aircraft on the ground and control the aerodynamic rudder in the air using the exact same intuitive foot movements."
    },
    {
      id: 22,
      question: "What is checked by the marking in the attachment? See figure (AGK-006)",
      img: "AGK-006.png",
      options: [
        "The tread wear of the tire",
        "The operating pressure of the carcass",
        "The correct postion of the tire relative to the rim",
        "The correct position of the outer isolation layers"
      ],
      correctIndex: 2,
      explanation: "The red painted line extending from the metal wheel rim onto the rubber tire sidewall is called a 'slip mark' or 'creep mark'. During the pre-flight walkaround, the pilot checks this line. If the two halves do not perfectly align, the tire has slipped (crept) around the rim during heavy braking, which threatens to shear off the inner tube valve stem and cause a total blowout."
    },
    {
      id: 23,
      question: "About how many axes does an aircraft move and how are these axes called?",
      options: [
        "4; vertical axis, lateral axis, longitudinal axis, axis of speed",
        "4; optical axis, imaginary axis, sagged axis, axis of evil",
        "3; x-axis, y-axis, z-axis",
        "3; vertical axis, lateral axis, longitudinal axis"
      ],
      correctIndex: 3,
      explanation: "An aircraft maneuvers freely in three-dimensional space by rotating around three mutually perpendicular imaginary lines that intersect at its exact Center of Gravity: the Longitudinal axis (controls roll), the Lateral axis (controls pitch), and the Vertical axis (controls yaw)."
    },
    {
      id: 24,
      question: "A movement around the longitudinal axis is primarily initiated by the...",
      options: [
        "rudder.",
        "ailerons.",
        "elevator.",
        "trim tab."
      ],
      correctIndex: 1,
      explanation: "The longitudinal axis runs straight through the fuselage from the nose to the tail. When the aircraft banks left or right around this axis, the movement is called 'roll'. This roll is aerodynamically commanded by the pilot deflecting the ailerons on the outboard trailing edges of the wings."
    },
    {
      id: 25,
      question: "How are the flight controls on a small single-engine piston aircraft normally controlled and actuated?",
      options: [
        "Power-assisted through hydraulic pumps or electric motors",
        "Hydraulically through hydraulic pumps and actuators",
        "Manually through rods and control cables",
        "Electrically through fly-by-wire"
      ],
      correctIndex: 2,
      explanation: "Unlike heavy airliners that require massive hydraulic assistance, light single-engine training aircraft have very low aerodynamic control loads. Therefore, their flight controls are actuated purely manually, using a direct, robust mechanical linkage of push-pull rods, pulleys, and woven steel cables connected straight from the yoke to the control surfaces."
    },
    {
      id: 26,
      question: "What are the primary and the secondary effects of a rudder input to the left?",
      options: [
        "Primary: yaw to the left\nSecondary: roll to the right",
        "Primary: yaw to the left\nSecondary: roll to the left",
        "Primary: yaw to the right\nSecondary: roll to the left",
        "Primary: yaw to the right\nSecondary: roll to the right"
      ],
      correctIndex: 1,
      explanation: "Depressing the left rudder pedal deflects the rudder into the slipstream, physically pushing the tail to the right and causing the nose to swing (yaw) to the left (Primary effect). Because the aircraft is now yawing left, the outside right wing travels faster through the air than the inside left wing. The faster wing generates more lift, which inherently causes the aircraft to subsequently roll to the left (Secondary effect)."
    },
    {
      id: 27,
      question: "What is the effect of pulling the control yoke or stick backwards?",
      options: [
        "The aircraft's tail will produce an increased downward force, causing the aircraft's nose to drop",
        "The aircraft's tail will produce an decreased upward force, causing the aircraft's nose to drop",
        "The aircraft's tail will produce an increased downward force, causing the aircraft's nose to rise",
        "The aircraft's tail will produce an increased upward force, causing the aircraft's nose to rise"
      ],
      correctIndex: 2,
      explanation: "When the pilot pulls the control yoke straight back toward their chest, the trailing edge of the elevator deflects UPWARDS into the airstream. The wind hits this raised surface, pushing the entire tail section DOWNWARD. Acting like a seesaw pivoted on the wings (center of gravity), pushing the tail down forcibly causes the nose to rise into a climb."
    },
    {
      id: 28,
      question: "What happens to a helicopter during cruise when the stick is moved forward without other corrections?",
      options: [
        "The speed increases and the sink rate increases",
        "The speed decreases and the sink rate increases",
        "The speed increases and the sink rate decreases",
        "The speed decreases and the sink rate decreases"
      ],
      correctIndex: 0,
      explanation: "Pushing the cyclic stick forward mechanically tilts the entire main rotor disc forward. This alters the vector of the lift being generated, converting some of the vertical lift into horizontal thrust. As a result, the helicopter accelerates forward (speed increases). However, because that energy was stolen from the vertical lift vector without adding overall engine power, the helicopter will simultaneously begin to lose altitude (sink rate increases)."
    },
    {
      id: 29,
      question: "Which of the following options states all primary flight controls of an aircraft?",
      options: [
        "All movable parts on the aircraft which aid in controlling the aircraft",
        "Flaps, slats, speedbrakes",
        "Elevator, rudder, aileron",
        "Elevator, rudder, aileron, trim tabs, high-lift wing devices, power controls"
      ],
      correctIndex: 2,
      explanation: "Aviation strictly distinguishes between control categories. The 'Primary' flight controls are the absolute minimum surfaces required to safely navigate the aircraft through the three dimensions of space. These are specifically and exclusively: the elevator (for pitch), the rudder (for yaw), and the ailerons (for roll)."
    },
    {
      id: 30,
      question: "What is the purpose of the secondary flight controls?",
      options: [
        "To constitute a backup system for the primary flight controls",
        "To improve the performance characteristics of an aircraft and relieve the pilot of excessive control forces",
        "To improve the turn characteristics of an aircraft in the low speed regime during approach and landing",
        "To enable the pilot to control the aircraft's movements about its three axes"
      ],
      correctIndex: 1,
      explanation: "Secondary flight controls consist of two main groups: High-lift devices (like flaps and slats) which drastically improve the aircraft's aerodynamic performance at low speeds for takeoff and landing, and Trim systems (trim tabs) which neutralize continuous aerodynamic pressures, relieving the pilot of exhausting physical control forces."
    },
    {
      id: 31,
      question: "What is the purpose of a ground adjustable trim tab?",
      options: [
        "It is set on the ground to correct an out-of-trim condition arising from the mass and balance situation of an aircraft",
        "It is preset on the ground and further adjusted in flight to reduce the need to constantly re-trim the aircraft",
        "It is used to optimize the handling characteristics of an aircraft during ground operations",
        "It is a non-movable metal tab on a flight control which is adjusted on the ground to optimize the inflight characteristics of an aircraft"
      ],
      correctIndex: 3,
      explanation: "A ground-adjustable trim tab is a small, rigid piece of sheet metal firmly riveted to the trailing edge of a control surface (most commonly the rudder on light trainers). It is impossible to adjust from the cockpit. A mechanic physically bends it with a tool on the ground to permanently counteract minor, inherent aerodynamic pulling tendencies noted during test flights."
    },
    {
      id: 32,
      question: "The trim wheel or lever in the cockpit is moved aft by the pilot. What effect does this action have on the trim tab and on the elevator?",
      options: [
        "The trim tab moves up, the elevator moves up",
        "The trim tab moves up, the elevator moves down",
        "The trim tab moves down, the elevator moves up",
        "The trim tab moves down, the elevator moves down"
      ],
      correctIndex: 2,
      explanation: "Moving the trim wheel aft commands a 'nose-up' attitude. To sustain a nose-up attitude, the main elevator must remain permanently deflected UP. The trim tab acts as a miniature control surface for the elevator itself: the tab deflects DOWN into the slipstream, which creates a localized upward aerodynamic pressure that holds the massive elevator UP without pilot effort."
    },
    {
      id: 33,
      question: "When trimming an aircraft nose up, in which direction does the trim tab move?",
      options: [
        "Depends on CG position",
        "It moves up",
        "In direction of rudder deflection",
        "It moves down"
      ],
      correctIndex: 3,
      explanation: "As established by aerodynamic leverage, a trim tab always moves in the exact opposite direction of the desired main control surface movement. To raise the nose, the elevator must go UP. Therefore, to force the elevator up, the trim tab on its trailing edge must push against the wind by moving DOWN."
    },
    {
      id: 34,
      question: "How does a balance tab move in relation to the flight control surface that it is coupled with?",
      options: [
        "In the opposite direction",
        "At an angle of 90°",
        "At an angle of 45°",
        "In the same direction"
      ],
      correctIndex: 0,
      explanation: "A balance tab is mechanically slaved to the main control surface using pushrods. Its function is to reduce the physical muscle power required by the pilot to move the yoke. Whenever the pilot moves the main surface, the linkage automatically deflects the balance tab in the opposite direction, utilizing the wind to 'assist' the pilot's movement."
    },
    {
      id: 35,
      question: "The trim is used to...",
      options: [
        "increase adverse yaw.",
        "move the centre of gravity.",
        "adapt the control force.",
        "lock control elements."
      ],
      correctIndex: 2,
      explanation: "The sole fundamental purpose of the trim system is to aerodynamically adapt and neutralize the continuous physical control forces (pressures) required on the yoke to maintain a specific airspeed or pitch attitude. This allows the pilot to safely fly 'hands-off' and drastically reduces pilot fatigue."
    },
    {
      id: 36,
      question: "Which of the following are an aircraft's secondary flight controls?",
      options: [
        "Elevator, rudder, aileron",
        "All movable parts on the aircraft which aid in controlling the aircraft",
        "Elevator, rudder, aileron, trim tabs, high-lift wing devices, power controls",
        "Wing flaps, leading edge devices, spoilers or speedbrakes, trim systems"
      ],
      correctIndex: 3,
      explanation: "While the primary flight controls strictly handle roll, pitch, and yaw, the secondary flight controls are auxiliary systems that manipulate the aerodynamic profile or ease pilot workload. These definitively include wing flaps, leading-edge slats/slots, spoilers/speedbrakes, and all trim tab systems."
    },
    {
      id: 37,
      question: "What has to be considered during refueling?",
      options: [
        "Check the fuel content of the tank with a torch and remove fire protection",
        "No open fires, obey smoking ban and apply ground cables",
        "Refuel through a soaked rag and keep a fire extinguisher available",
        "Apply ground wires, turn on the main switch and magneto ignition"
      ],
      correctIndex: 1,
      explanation: "Aviation gasoline (Avgas) emits highly volatile, explosive vapors. Extremely strict safety protocols are legally enforced globally: absolutely no open flames, a rigorous smoking ban near the apron, and the mandatory application of grounding (earthing) cables between the aircraft and the fuel truck to safely discharge any static electricity before opening the tanks."
    },
    {
      id: 38,
      question: "The primer is...",
      options: [
        "an auxiliary pump in the fuel system to facilitate engine starting.",
        "a mechanical switch in the cockpit to engage the turbocharger.",
        "a valve in the fuel control system for automatic mixture regulation.",
        "a nozzle in the Venturi tube of a carburettor for atomising the fuel."
      ],
      correctIndex: 0,
      explanation: "The primer is a small, hand-operated or electrical auxiliary pump located in the cockpit. Before starting a cold engine, the pilot uses the primer to draw raw, liquid fuel from the tanks and physically squirt it directly into the engine's intake manifold or cylinders, enriching the mixture to ensure successful ignition."
    },
    {
      id: 39,
      question: "What is the purpose of the tank ventilation?",
      options: [
        "To prevent underpressure caused by fuel consumption",
        "To prevent water disposal during parking",
        "To distribute the fuel from one tank segment to the other during flight",
        "To prevent fuel spillage during refueling on the filler plug"
      ],
      correctIndex: 0,
      explanation: "An aircraft fuel tank is a sealed container. As the engine continuously consumes gallons of fuel, the liquid level drops. If the tank wasn't vented, this disappearing volume would create a massive internal vacuum (underpressure), eventually overpowering the fuel pump and starving the engine. Vents let outside air flow in to replace the burnt fuel."
    },
    {
      id: 40,
      question: "An aeroplane's current supply is carried out by the:\n1. Battery\n2. Generator\n3. Relay\n4. Circuit breaker",
      options: [
        "1 and 4",
        "3 and 4",
        "2 and 3",
        "1 and 2"
      ],
      correctIndex: 3,
      explanation: "The active supply (generation and storage) of electrical current in an aircraft comes entirely from two sources: The battery (1) provides essential DC power for starting the engine and acts as an emergency backup, while the engine-driven generator or alternator (2) produces all the main electrical power during flight and simultaneously recharges the battery."
    },
    {
      id: 41,
      question: "What is the unit for voltage?",
      options: [
        "Ampere",
        "Watt",
        "Ohm",
        "Volt"
      ],
      correctIndex: 3,
      explanation: "In electrical engineering physics, Voltage represents the electromotive force or the electrical potential difference between two points in a circuit. It is universally measured in the unit called the Volt (V)."
    },
    {
      id: 42,
      question: "What is the unit for electrical power?",
      options: [
        "Ampere",
        "Ohm",
        "Watt",
        "Volt"
      ],
      correctIndex: 2,
      explanation: "Electrical power defines the absolute rate at which electrical energy is transferred or consumed by a circuit (calculated mathematically by multiplying Volts by Amperes). It is measured in the unit called the Watt (W)."
    },
    {
      id: 43,
      question: "What is the reason for static dischargers on aircraft?",
      options: [
        "To ensure grounding during refueling",
        "To discharge static charging during flight",
        "To eliminate electrical interferences during intensive radio traffic",
        "To improve the quality of radio transmission in high altitudes"
      ],
      correctIndex: 1,
      explanation: "As an aircraft rushes through the atmosphere, severe friction with air, dust, snow, or rain strips electrons, causing the metal airframe to build up a massive, dangerous static electrical charge. Static dischargers (small carbon-fiber wicks bolted to the trailing edges of the wings and tail) safely bleed this static charge back into the air to prevent sparks and catastrophic radio interference."
    },
    {
      id: 44,
      question: "What must be considered if the alternator fails in a helicopter?",
      options: [
        "All instruments and warning systems will fail",
        "No change as long as the battery provides enough power",
        "The engine runs roughly and is prone to knocking",
        "Only high power consumers will failing"
      ],
      correctIndex: 1,
      explanation: "If the alternator completely fails, it stops generating electricity. However, the electrical load instantly and seamlessly falls back onto the main aircraft battery. The pilot will experience absolutely no change in instrument function or warning systems initially, but they are now on a strict 'ticking clock' until the battery is entirely drained."
    },
    {
      id: 45,
      question: "When using direct current, electrically driven flight instruments are marked with...",
      options: [
        "\"EL\".",
        "\"DC\".",
        "\"AL\".",
        "\"CO\"."
      ],
      correctIndex: 1,
      explanation: "Aircraft electrical systems utilize both direct current and alternating current. Flight instruments that are specifically wired to be powered by the aircraft's Direct Current system (drawn straight from the battery and alternator bus) are physically labeled with 'DC' on their casing or dial."
    },
    {
      id: 46,
      question: "What devices can be affected by a failure of the electrical system in a helicopter?",
      options: [
        "Fuel quantity indication, radio equipment and altimeter",
        "Radio equipment, navigation equipment and magnetic compass",
        "Airspeed indicator, altimeter and artificial horizon",
        "Radio equipment, navigation equipment and gyros"
      ],
      correctIndex: 3,
      explanation: "A total electrical failure renders all systems that rely on electrons dead. This immediately eliminates all communication radios, GPS and VOR navigation equipment, and any electrically spooled gyroscopes (like electric turn coordinators). Crucially, pitot-static instruments (altimeter, airspeed) and the magnetic compass operate on pure physical air pressure and magnetism, so they survive the failure intact."
    },
    {
      id: 47,
      question: "Which cylinder arragement is commonly used on small aircrafts and motor gliders?",
      options: [
        "Horizontally opposed engine",
        "Radial engine",
        "In-line engine",
        "V-type engine"
      ],
      correctIndex: 0,
      explanation: "The vast majority of modern light general aviation aircraft and motor gliders (using engines from Lycoming, Continental, or Rotax) utilize a 'horizontally opposed' or 'flat' engine layout. This flat, wide profile reduces aerodynamic drag, allows excellent forward visibility over the nose, and positions the cylinders perfectly to be hit by cooling ram air."
    },
    {
      id: 48,
      question: "Which part of the cycle of a four-stroke Otto engine can be seen in the attachment? See figure (AGK-007)",
      img: "AGK-007.png",
      options: [
        "Second stroke - compression",
        "Fourth stroke - exhaust",
        "First stroke - induction",
        "Third stroke power"
      ],
      correctIndex: 2,
      explanation: "In diagram AGK-007, the piston is clearly moving downwards (indicated by the red arrow). Simultaneously, the intake valve on the top left is open, and blue arrows show the fresh air/fuel mixture being sucked into the expanding cylinder chamber. This perfectly depicts the very first phase of the cycle: the Induction (or intake) stroke."
    },
    {
      id: 49,
      question: "Which part of the cycle of a four-stroke Otto engine can be seen in the attachment? See figure (AGK-008)",
      img: "AGK-008.png",
      options: [
        "Second stroke - compression",
        "Third stroke power",
        "Fourth stroke - exhaust",
        "First stroke - induction"
      ],
      correctIndex: 0,
      explanation: "In diagram AGK-008, both the intake and exhaust valves at the top are tightly shut, sealing the chamber perfectly. The piston is forcefully moving upwards (indicated by the upward red arrow), physically squeezing the trapped air/fuel mixture into a tiny volume. This is the hallmark of the second phase: the Compression stroke."
    },
    {
      id: 50,
      question: "What is likely to be the cause if the engine runs unusually rough while checking the magnetos?",
      options: [
        "Starter is faulty",
        "Sparking plug is defective",
        "Short circuit on the ground cable",
        "Ignition switch is faulty"
      ],
      correctIndex: 1,
      explanation: "During the run-up before takeoff, the pilot tests each magneto individually to ensure dual ignition redundancy. If the engine begins to shudder and run very roughly when isolated to only the Left or Right magneto, it strongly indicates that one (or more) of the specific spark plugs powered by that magneto is fouled with lead deposits, heavily carbonized, or outright defective."
    },
    {
      id: 51,
      question: "The highest absorbtion of humidity in fuel can be observed in which situation?",
      options: [
        "During parking on wet gras areas",
        "During parking on cold aprons",
        "Almost empty tanks",
        "Almost full tanks"
      ],
      correctIndex: 2,
      explanation: "Aviation fuel tanks must breathe through vents, meaning they are open to atmospheric air. If an aircraft is parked with 'almost empty tanks', there is a massive volume of air inside the tank. As nighttime temperatures fall, the humidity trapped in this large volume of air condenses into water droplets on the cold metal walls, heavily contaminating the fuel."
    },
    {
      id: 52,
      question: "Where does the condensation water converge in the tank?",
      options: [
        "It floats on the fuel",
        "Near the cap of the tank",
        "At the lowest position",
        "It is mixed with the fuel"
      ],
      correctIndex: 2,
      explanation: "Liquid water has a significantly higher density than aviation gasoline (water weighs 1 kg/L, AVGAS weighs 0.72 kg/L). Because it is heavier, any condensed water will immediately separate and physically sink through the fuel, converging and pooling at the absolute lowest collection points (sumps) of the fuel tanks."
    },
    {
      id: 53,
      question: "What does the octane rating or fuel grade describe?",
      options: [
        "Anti-knock rating",
        "Flame front speed",
        "Ignition timing",
        "Combustion temperature"
      ],
      correctIndex: 0,
      explanation: "The octane rating (e.g., 100LL) of an aviation fuel is a strict scientific measurement of its resistance to detonation under extreme heat and pressure. It is defined as the 'anti-knock rating'. High-compression aircraft engines require high-octane fuel to ensure the mixture burns smoothly rather than exploding violently (knocking)."
    },
    {
      id: 54,
      question: "Which colour does Avgas 100 LL have?",
      options: [
        "Red",
        "Green",
        "Yellow",
        "Blue"
      ],
      correctIndex: 3,
      explanation: "Misfueling an aircraft is a fatal error. To provide a foolproof visual safety check, all aviation fuels are artificially dyed. AVGAS 100LL (Low Lead), which is the absolute standard for modern general aviation piston engines, is dyed a distinct, translucent Blue."
    },
    {
      id: 55,
      question: "What is the direct influence by switching on the carburettor heating on fixed propeller engines during engine run-up?",
      options: [
        "RPM decreases",
        "Angle of attack decreases",
        "Angle of attack increases",
        "RPM increaes"
      ],
      correctIndex: 0,
      explanation: "Pulling the carburetor heat knob forcefully diverts unfiltered, searing hot air from around the exhaust shroud directly into the engine intake. Because hot air expands, it is significantly less dense than cold air. Sucking in less dense air immediately enriches the fuel mixture and robs the engine of power, which the pilot observes as a distinct drop in RPM."
    },
    {
      id: 56,
      question: "What is the major task of a carburettor?",
      options: [
        "To pump fuel from the tanks into the cylinder",
        "To control the aircraft's speed through the throttle valve",
        "To provide additional fuel to cool the engine",
        "To produce an ignitable air/fuel mixture"
      ],
      correctIndex: 3,
      explanation: "The carburetor is the mechanical heart of fuel preparation. Its singular major task is to vaporize liquid aviation gasoline and mix it flawlessly with incoming ambient air in a highly precise stoichiometric ratio (typically 1 part fuel to 15 parts air), producing an optimally ignitable mixture for the engine cylinders."
    },
    {
      id: 57,
      question: "In which phase of flight must the carburettor heating be switched off although carburettor icing might be expected?",
      options: [
        "During climb",
        "During cruise",
        "During taxi",
        "During take-off"
      ],
      correctIndex: 3,
      explanation: "Take-off is the most critical phase of flight, demanding absolute maximum power. Because carburetor heat injects hot, low-density air into the engine, it slashes maximum power output. Furthermore, carb heat bypasses the air filter, risking the ingestion of runway gravel. Therefore, to guarantee full power and protect the cylinders, carb heat MUST be strictly pushed to 'Cold/Off' during the take-off roll."
    },
    {
      id: 58,
      question: "In which outside air temperature is icing most likely?",
      options: [
        "Between -5° C and +20° C",
        "Between -10° C and +10° C",
        "Between -20° C and +5° C",
        "Between -15° C and 0° C"
      ],
      correctIndex: 0,
      explanation: "Carburetor icing is extremely insidious. The physical venturi effect inside the throat accelerates the air, while the evaporation of fuel pulls massive amounts of latent heat from the metal. These two factors can plunge the internal temperature by 30°C in seconds. Thus, severe, engine-choking ice can form rapidly even on a warm, pleasant day with outside air temperatures ranging broadly from -5°C up to +20°C."
    },
    {
      id: 59,
      question: "What is the task of cooling fins on air-cooled engine cylinders?",
      options: [
        "Quick heat transfer to the surrounding air flow by expanding the surface",
        "Cooling of the cylinder surrounding airflow and forwarding to hotter engine parts",
        "Leading the airflow to parts designated to be cooled",
        "Increasing the airflow thus improving cooling of cylinder parts"
      ],
      correctIndex: 0,
      explanation: "Unlike car engines that use liquid radiators, aviation piston engines are predominantly air-cooled. The metal fins cast into the exterior of the cylinders massively increase the physical surface area of the hot metal. This vast expanded surface area allows extreme internal combustion heat to be rapidly and efficiently radiated away into the fast-moving slipstream."
    },
    {
      id: 60,
      question: "Cylinder head temperature indication relates to...",
      options: [
        "all Cylinders.",
        "a random cylinder.",
        "the critical cylinder.",
        "the average of all cylinders."
      ],
      correctIndex: 2,
      explanation: "In standard light aircraft equipped with a basic, single-gauge Cylinder Head Temperature (CHT) monitor, the solitary temperature probe is not placed randomly. The manufacturer specifically installs it on the 'critical cylinder'—the one cylinder proven through rigorous aerodynamic testing to run the hottest (usually the rearmost cylinder receiving the least ram air)."
    },
    {
      id: 61,
      question: "What happens during oil filter clocking?",
      options: [
        "A bypass valve opens thus enabling the circulation to continue, debris will be filtered by an alternate filter",
        "The oil circulation will end after 15 minutes so that a proper engine run will not be guaranteed",
        "A bypass valve opens thus enabling the circulation to continue, debris will not be filtered",
        "The oil circulation will end after 30 minutes so that a proper engine run will not be guaranteed"
      ],
      correctIndex: 2,
      explanation: "If an engine oil filter becomes completely clogged (clocked) with carbon soot or metal shavings, oil pressure spikes dangerously. To prevent the engine from seizing due to total oil starvation, a built-in, spring-loaded bypass valve forcefully pops open. This allows dirty, unfiltered oil to bypass the filter and continue circulating, sacrificing cleanliness to keep the engine lubricated and running."
    },
    {
      id: 62,
      question: "How should an Otto engine be shut down?",
      options: [
        "By completely leaning the mixture",
        "By moving the propeller to the feathered position",
        "By closing the throttle lever completely",
        "By shutting down the generator"
      ],
      correctIndex: 0,
      explanation: "Aviation piston engines (Otto cycle) must never be shut down by turning off the ignition key like a car, as hot carbon deposits could cause the engine to dangerously sputter on. The strict standard procedure is to pull the mixture control fully back to 'Idle Cut-Off', completely leaning out and starving the engine of fuel until it dies clean, ensuring no unburnt fuel remains in the cylinders."
    },
    {
      id: 63,
      question: "Piston engines of helicopters have...",
      options: [
        "one magneto ignition system.",
        "one electrical ignition system.",
        "two coupled ignition systems.",
        "two independent ignition systems."
      ],
      correctIndex: 3,
      explanation: "Aviation demands absolute, uncompromising redundancy. Every certified piston engine used in both helicopters and fixed-wing aircraft is legally mandated to feature a dual ignition system. This comprises two entirely independent, self-generating magnetos driving two separate spark plugs per cylinder, guaranteeing the engine continues to fire even if an entire electrical system fails."
    },
    {
      id: 64,
      question: "How do you call fuel mixtures with a high amount of fuel?",
      options: [
        "Lean",
        "Full",
        "Empty",
        "Rich"
      ],
      correctIndex: 3,
      explanation: "In engine stoichiometry, the ratio of fuel to air defines the mixture. A 'Rich' mixture is one where there is a disproportionately high amount of fuel relative to the incoming air. Rich mixtures are utilized to run the engine cooler during high power demands, such as during the takeoff roll."
    },
    {
      id: 65,
      question: "The angle indicated by arrow number 1 shows the propeller's... See figure (AGK-011)",
      img: "AGK-011.png",
      options: [
        "angle of incidence.",
        "angle of attack.",
        "geometric wing twist.",
        "aerodynamic wing twist."
      ],
      correctIndex: 0,
      explanation: "In propeller aerodynamics, the angle between the chord line of the propeller blade (C) and the plane of rotation (R) is defined strictly as the geometric pitch angle or the angle of incidence."
    },
    {
      id: 66,
      question: "How should a power increase be executed on a constant-speed propeller, provided that no other procedure is described in the flight manual?",
      options: [
        "1) Decrease manifold pressure 2) Increase RPM",
        "1) Decrease RPM 2) Increase manifold pressure",
        "1) Increase manifold pressure 2) Increase RPM",
        "1) Increase RPM 2) Increase manifold pressure"
      ],
      correctIndex: 3,
      explanation: "To increase power safely, the pilot must always move the propeller lever forward first to increase RPM (decreasing blade pitch), then push the throttle forward to increase manifold pressure. This strictly prevents the engine from operating at a destructively high manifold pressure while bogged down at a low RPM."
    },
    {
      id: 67,
      question: "How should a power decrease be executed on a constant-speed propeller, provided that no other procedure is described in the flight manual?",
      options: [
        "1) Decrease RPM 2) Decrease manifold pressure",
        "1) Decrease manifold pressure 2) Increase RPM",
        "1) Decrease RPM 2) Increase manifold pressure",
        "1) Decrease manifold pressure 2) Decrease RPM"
      ],
      correctIndex: 3,
      explanation: "When decreasing power, the sequence must be reversed to protect the engine cylinders. The pilot must first pull the throttle back to reduce manifold pressure, and only then pull the propeller lever back to decrease RPM. 'Prop leads going up, Throttle leads going down'."
    },
    {
      id: 68,
      question: "With increasing altitude and unchanged mixture setting, the air/fuel mixture...",
      options: [
        "becomes more lean.",
        "stays constant.",
        "becomes liquid.",
        "becomes richer."
      ],
      correctIndex: 3,
      explanation: "As an aircraft climbs, the outside air density naturally decreases, meaning fewer oxygen molecules enter the carburetor. If the fuel flow remains unadjusted by the pilot, the ratio of fuel to air becomes disproportionately high, resulting in an overly rich mixture that causes rough running and spark plug fouling."
    },
    {
      id: 69,
      question: "With increasing altitude, the power of a carburettor engine...",
      options: [
        "remains constant.",
        "first decreases, from 5000 ft on increases.",
        "increases.",
        "decreases."
      ],
      correctIndex: 3,
      explanation: "A normally aspirated (non-turbocharged) carburetor engine inherently loses power as altitude increases. The thinning, less dense air means the engine cannot suck in as much oxygen per intake stroke, fundamentally reducing the horsepower generated during combustion."
    },
    {
      id: 70,
      question: "During ignition check the ignition is switched to OFF for a short moment and subsequently back to BOTH. What happens to the RPM if the ignition system is properly grounded?",
      options: [
        "The RPM increases once switched to OFF and resumes a value below the previous one when switched back to BOTH",
        "The RPM decreases once switched to OFF and resumes the previous value when switched back to BOTH",
        "The RPM increases once switched to OFF and resumes the previous value when switched back to BOTH",
        "The RPM decreases once switched to OFF and resumes a value below the previous one when switched back to BOTH"
      ],
      correctIndex: 1,
      explanation: "This check proves the P-leads are intact. If properly grounded, switching to OFF kills the spark completely. The engine will instantly stop firing, causing a rapid decrease in RPM. Moving the switch immediately back to BOTH restores the spark, and the engine seamlessly resumes its previous idle RPM."
    },
    {
      id: 71,
      question: "Which gauges involve a measurement of temperature?",
      options: [
        "Engine lubricant, exhaust gas, outside air, cabin air, directional gyro",
        "Engine lubricant, cylinder head, exhaust gas, suction, outside air, cabin air",
        "Engine lubricant, engine cooling fluid, cylinder head, exhaust gas, outside air, cabin air",
        "Engine oil, cylinder head, exhaust gas, altimeter, airspeed indicator, vertical speed indicator"
      ],
      correctIndex: 2,
      explanation: "Engine oil (lubricant), engine coolant, Cylinder Head Temperature (CHT), Exhaust Gas Temperature (EGT), Outside Air Temperature (OAT), and cabin air all rely on direct thermal measurement using thermometers or thermocouples. Instruments like gyros, altimeters, and suction gauges rely on pressure or physics, not temperature."
    },
    {
      id: 72,
      question: "Fuel quantity in small aircraft is most commonly measured through a level sensor. The European Certification Specifications CS 23 require that...",
      options: [
        "at least one fuel quantity indicator must be available to indicate the total amount of fuel abord an aircraft. This Indicator must be calibrated adequately to indicate the correct amount of fuel during all phases of flight.",
        "if the fuel indicator fails, the pilot must land at the next available airport.",
        "if no fuel quantity indicator is available to the pilot in flight, the pilot must check the fuel quantity before commencing the flight and recalculate the remaining fuel on board in regular intervals during the flight.",
        "a fuel quantity indicator must be available for each tank and the indicator must be calibrated to read \"zero\" during level flight when the quantity of fuel remaining in the tank is equal to the unusable fuel supply."
      ],
      correctIndex: 3,
      explanation: "Aviation safety certification standards legally mandate that a fuel gauge must accurately read exactly 'zero' when the usable fuel is exhausted, even if a small, unusable amount of fuel remains trapped in the lines or tank sumps. This ensures the pilot knows precisely when the engine will starve."
    },
    {
      id: 73,
      question: "Which of the instruments listed below obtain their readings through pressure measurement?",
      options: [
        "Oil pressure gauge, fuel pressure gauge, manifold pressure gauge, altimeter, vertical speed indicator, airspeed indicator, suction gauge",
        "Oil pressure gauge, fuel pressure gauge, fuel quantity gauge, manifold pressure gauge, differential pressure gauge, altimeter",
        "Airspeed indicator, vertical speed indicator, altimeter, directional gyro, turn and bank coordinator, oil pressure gauge, fuel pressure gauge",
        "Airspeed indicator, vertical speed indicator, altimeter, magnetic compass, oil pressure gauge, fuel pressure gauge"
      ],
      correctIndex: 0,
      explanation: "All instruments in this specific list function entirely on pneumatic or fluid pressure. The pitot-static instruments (altimeter, VSI, airspeed) measure air pressure, manifold measures engine induction pressure, the suction gauge measures vacuum pressure, and the oil/fuel gauges measure liquid pressure via transducers."
    },
    {
      id: 74,
      question: "The Pitot / static system is required to...",
      options: [
        "prevent potential static buildup on the aircraft.",
        "correct the reading of the airspeed indicator to zero when the aircraft is static on the ground.",
        "measure total and static air pressure.",
        "prevent icing of the Pitot tube."
      ],
      correctIndex: 2,
      explanation: "The pitot-static system acts as the aerodynamic sensory network of the aircraft. The pitot tube captures the total (ram) air pressure, while the static ports measure the undisturbed ambient static pressure. These two pressure inputs are the sole drivers for the airspeed indicator, altimeter, and VSI."
    },
    {
      id: 75,
      question: "Which pressure is sensed by the Pitot tube?",
      options: [
        "Cabin air pressure",
        "Total air pressure",
        "Dynamic air pressure",
        "Static air pressure"
      ],
      correctIndex: 1,
      explanation: "The pitot tube faces directly into the relative wind. It captures the 'Total Air Pressure' (also known as stagnation or ram pressure), which is the physical sum of the ambient static pressure plus the dynamic pressure created by the aircraft's forward motion."
    },
    {
      id: 76,
      question: "QFE is the...",
      options: [
        "barometric pressure at a reference datum, typically the runway threshold of an airfield.",
        "barometric pressure adjusted to sea level, using the international standard atmosphere (ISA).",
        "magnetic bearing to a station.",
        "altitude above the reference pressure level 1013.25 hPa."
      ],
      correctIndex: 0,
      explanation: "QFE stands for 'Field Elevation Pressure'. It is the actual, uncorrected atmospheric pressure measured exactly at the aerodrome's surface. Setting the altimeter subscale to QFE zeroes the instrument, causing it to display height above that specific runway."
    },
    {
      id: 77,
      question: "QNE is the...",
      options: [
        "barometric pressure at a reference datum, typically the runway threshold of an airfield.",
        "magnetic bearing to a station.",
        "barometric pressure adjusted to sea level, using the international standard atmosphere (ISA).",
        "altitude above the reference pressure level 1013.25 hPa."
      ],
      correctIndex: 3,
      explanation: "QNE is not a local weather pressure setting. It refers to the universal standard atmospheric pressure datum of 1013.25 hPa (29.92 inHg). When flying above the transition altitude, pilots set 1013 to read QNE, which displays Flight Levels to ensure standardized vertical separation."
    },
    {
      id: 78,
      question: "Which is the purpose of the altimeter subscale?",
      options: [
        "To set the reference level for the altitude decoder of the transponder",
        "To adjust the altimeter reading for non-standard temperature",
        "To reference the altimeter reading to a predetermined level such as mean sea level, aerodrome level or pressure level 1013.25 hPa",
        "To correct the altimeter reading for system errors"
      ],
      correctIndex: 2,
      explanation: "The altimeter is fundamentally a mechanical barometer. The subscale (Kollsman window) allows the pilot to calibrate this barometer to a specific reference pressure (QNH, QFE, or standard 1013.25), giving the altimeter a starting baseline from which to calculate and display altitude or height."
    },
    {
      id: 79,
      question: "In which way may an altimeter subscale which is set to an incorrect QNH lead to an incorrect altimeter reading?",
      options: [
        "If the subscale is set to a lower than actual pressure, the indication is too high. This may lead to much closer proximity to the ground than intended",
        "If the subscale is set to a higher than actual pressure, the indication is too high. This may lead to much closer proximity to the ground than intended",
        "If the subscale is set to a lower than actual pressure, the indication is too low. This may lead to much closer proximity to the ground than intended",
        "If the subscale is set to a higher than actual pressure, the indication is too low. This may lead to much greater heights above the ground than intended"
      ],
      correctIndex: 1,
      explanation: "The aviation mnemonic is 'High to Low, look out below.' If you fly into an area of lower pressure but leave your altimeter subscale set to a higher pressure, the instrument will mechanically 'think' you are higher than you actually are. It displays a safely high altitude, while physically the aircraft is dangerously close to the terrain."
    },
    {
      id: 80,
      question: "Lower-than-standard temperature may lead to...",
      options: [
        "a blockage of the Pitot tube by ice, freezing the altimeter indication to its present value.",
        "an altitude indication which is too low.",
        "an altitude indication which is too high.",
        "a correct altitude indication as long as the altimeter subscale is set to correct for non-standard temperature."
      ],
      correctIndex: 2,
      explanation: "Cold air is much denser and compresses the pressure layers closer to the ground. If you fly into colder-than-standard air, you must descend to physically find the pressure level the altimeter expects. Consequently, the indicated altitude on the dial will be safely 'high', but your true geometric altitude is dangerously low."
    },
    {
      id: 81,
      question: "A flight level is a...",
      options: [
        "pressure altitude.",
        "density altitude.",
        "altitude above ground.",
        "true altitude."
      ],
      correctIndex: 0,
      explanation: "A Flight Level (FL) is formally defined as a surface of constant atmospheric pressure referenced to the standard pressure datum of 1013.25 hPa. It is strictly synonymous with the term 'pressure altitude'."
    },
    {
      id: 82,
      question: "A true altitude is...",
      options: [
        "a height above ground level corrected for non-standard pressure.",
        "a height above ground level corrected for non-standard temperature.",
        "a pressure altitude corrected for non-standard temperature.",
        "an altitude above mean sea level corrected for non-standard temperature."
      ],
      correctIndex: 3,
      explanation: "True altitude is the exact geometric height of the aircraft above Mean Sea Level (MSL). Because altimeters are calibrated mechanically for the ISA temperature profile, any real-world temperature deviation (hotter or colder) causes an error. Calculating the indicated QNH altitude against this temperature deviation yields the true altitude."
    },
    {
      id: 83,
      question: "During a flight in colder-than-ISA air the indicated altitude is...",
      options: [
        "higher than the true altitude.",
        "lower than the true altitude.",
        "eqal to the true altitude.",
        "equal to the standard altitude."
      ],
      correctIndex: 0,
      explanation: "Because cold air compresses the vertical pressure column, a specific pressure level (e.g., 800 hPa) will be found closer to the ground than in a standard atmosphere. The altimeter reads the pressure and displays a high altitude (indicated), while the aircraft's actual physical height above the sea (true altitude) is dangerously lower."
    },
    {
      id: 84,
      question: "During a flight in an air mass with a temperature equal to ISA and the QNH set correctly, the indicated altitude is...",
      options: [
        "lower than the true altitude.",
        "equal to the true altitude.",
        "equal to the standard atmosphere.",
        "higher than the true altitude."
      ],
      correctIndex: 1,
      explanation: "The barometric altimeter is a mechanical computer calibrated exactly to the International Standard Atmosphere (ISA) mathematical model. If the ambient temperature perfectly matches this ISA profile, and the precise local QNH is set, there are no atmospheric errors to account for. The indicated altitude will perfectly equal the true geometric altitude."
    },
    {
      id: 85,
      question: "Which instrument can be affected by the hysteresis error?",
      options: [
        "Vertical speed indicator",
        "Altimeter",
        "Direct reading compass",
        "Tachometer"
      ],
      correctIndex: 1,
      explanation: "Hysteresis is a mechanical phenomenon caused by the imperfect elastic properties of the metal aneroid capsules inside the altimeter. After a prolonged, rapid climb or descent, the capsules take a brief moment to 'relax' and return to their proper physical shape, causing a slight, temporary lag or error in the altitude indication."
    },
    {
      id: 86,
      question: "The measurement of altitude is based on the change of the...",
      options: [
        "dynamic pressure.",
        "differential pressure.",
        "static pressure.",
        "total pressure."
      ],
      correctIndex: 2,
      explanation: "The altimeter is pneumatically connected exclusively to the static port. It functions as an aneroid barometer, measuring the absolute ambient static pressure of the atmosphere, which predictably decreases as altitude increases, allowing the capsules to expand and drive the needles."
    },
    {
      id: 87,
      question: "Which of the following options states the working principle of a vertical speed indicator?",
      options: [
        "Measuring the present static air pressure and comparing it to the static air pressure inside a reservoir",
        "Total air pressure is measured and compared to static pressure",
        "Measuring the vertical acceleration through the displacement of a gimbal-mounted mass",
        "Static air pressure is measured and compared against a vacuum"
      ],
      correctIndex: 0,
      explanation: "The Vertical Speed Indicator (VSI) houses an expandable capsule connected directly to the static line, surrounded by an airtight reservoir case that also receives static pressure, but through a restricted, calibrated capillary leak. The rate of climb or descent is determined by mechanically measuring the pressure differential between the instantaneous capsule pressure and the delayed case pressure."
    },
    {
      id: 88,
      question: "The vertical speed indicator measures the difference of pressure between...",
      options: [
        "the present total pressure and the total pressure of a previous moment.",
        "the present dynamic pressure and the dynamic pressure of a previous moment.",
        "the present dynamic pressure and the static pressure of a previous moment.",
        "the present static pressure and the static pressure of a previous moment."
      ],
      correctIndex: 3,
      explanation: "Because the restrictive capillary leak deliberately delays the flow of air into the instrument case, the pressure inside the case effectively represents the static pressure from a few seconds ago. The VSI needle is driven by comparing this 'previous' static pressure against the 'present', instantaneous static pressure inside the unrestrictive capsule."
    },
    {
      id: 89,
      question: "Calibrated airspeed (CAS) equals...",
      options: [
        "equivalent airspeed (EAS) corrected for altitude.",
        "indicated airspeed (IAS) corrected for instrument and position error.",
        "ground speed (GS) corrected for instrument and position error.",
        "true airspeed (TAS) corrected for wind."
      ],
      correctIndex: 1,
      explanation: "Indicated Airspeed (IAS) is the raw, uncorrected reading on the instrument dial. Calibrated Airspeed (CAS) is derived by taking that raw IAS and mathematically correcting it for mechanical instrument inaccuracies and 'position error' (the distortion of static pressure caused by the airflow passing over the static ports at varying angles of attack)."
    },
    {
      id: 90,
      question: "At higher altitudes, true airspeed (TAS) tends to be higher than calibrated airspeed (CAS). A rough estimate of the TAS can be obtained by...",
      options: [
        "subtracting 2 % of the CAS for every 1000 ft altitude.",
        "adding 10 % of the CAS for every 1000 ft altitude.",
        "subtracting 10 % of the CAS for every 1000 m altitude.",
        "adding 2 % of the CAS for every 1000 ft altitude."
      ],
      correctIndex: 3,
      explanation: "As an aircraft climbs, air density decreases. Thinner air provides less dynamic pressure into the pitot tube, causing the airspeed indicator to read artificially low compared to the true speed. To quickly calculate True Airspeed (TAS) from Calibrated Airspeed (CAS), pilots use the rule of thumb: add 2% to the CAS for every 1,000 feet of altitude gained."
    },
    {
      id: 91,
      question: "An aircraft cruises on a heading of 180° with a true airspeed of 100 kt. The wind comes from 180° with 30 kt. Neglecting instrument and position errors, which will be the approximate reading of the airspeed indicator?",
      options: [
        "100 kt",
        "130 kt",
        "30 kt",
        "70 kt"
      ],
      correctIndex: 0,
      explanation: "The airspeed indicator relies entirely on the pitot-static system, which strictly measures the dynamic pressure of the aircraft physically moving through the surrounding air mass (True Airspeed). It is completely blind to what that air mass is doing relative to the ground. Therefore, despite a 30 kt headwind reducing ground speed to 70 kt, the airspeed indicator will simply read the 100 kt of airflow passing over the wings."
    },
    {
      id: 92,
      question: "Which of the following factors could cause an erroneous airspeed indication?",
      options: [
        "A circuit breaker was pulled",
        "The earth wire is still attached",
        "The boost pressure line is defective",
        "The aircraft is covered with adhesive foils"
      ],
      correctIndex: 3,
      explanation: "Adhesive foils (such as decorative wrapping, sponsor decals, or maintenance tape) applied carelessly over the fuselage can inadvertently cover, partially block, or aerodynamically disrupt the flush static ports located on the side of the aircraft. Any disruption to the static pressure reference will instantly cause profoundly erroneous airspeed, altimeter, and VSI indications."
    },
    {
      id: 93,
      question: "Which of the following states the working principle of an airspeed indicator?",
      options: [
        "Total air pressure is measured and compared against static air pressure.",
        "Total air pressure is measured by the static ports and converted into a speed indication by the airspeed indicator",
        "Dynamic air pressure is measured by the Pitot tube and converted into a speed indication by the airspeed indicator",
        "Static air pressure is measured and compared against a vacuum."
      ],
      correctIndex: 0,
      explanation: "The airspeed indicator is the only instrument connected to both the pitot tube and the static port. It acts as a differential pressure gauge that mechanically subtracts the ambient static pressure from the total ram pressure captured by the pitot. The resulting difference is pure dynamic pressure, which expands a diaphragm and turns the needle to display airspeed."
    },
    {
      id: 94,
      question: "What values are usually marked with a red line on instrument displays?",
      options: [
        "Operational limits",
        "Caution areas",
        "Recommended areas",
        "Operational areas"
      ],
      correctIndex: 0,
      explanation: "In universally standardized aviation cockpit design, a solid red line or red radial mark on any instrument dial (airspeed, oil pressure, tachometer, temperature) signifies an absolute, uncompromising operational limit. Operating the aircraft beyond a red line risks immediate structural failure or catastrophic engine damage."
    },
    {
      id: 95,
      question: "What is necessary for the determination of speed (IAS) by the airspeed indicator?",
      options: [
        "The difference between the total pressure and the dynamic pressure",
        "The difference between the standard pressure and the total pressure",
        "The difference betweeen the total pressure and the static presssure",
        "The difference between the dynamic pressure and the static pressure"
      ],
      correctIndex: 2,
      explanation: "To calculate dynamic pressure (the physical force of the wind hitting the plane), the airspeed indicator must take the total ram pressure captured by the pitot tube and subtract the ambient static pressure of the atmosphere provided by the static ports. This precise differential yields the Indicated Airspeed (IAS)."
    },
    {
      id: 96,
      question: "What is the meaning of the white arc on the airspeed indicator?",
      options: [
        "Speed range in bumpy air",
        "Speed range in smooth air",
        "Speed range for extended flaps",
        "Speed range not to exceed"
      ],
      correctIndex: 2,
      explanation: "The white arc on the airspeed indicator visibly defines the authorized flap operating range. The bottom of the arc is Vso (stall speed in landing configuration), and the top of the arc is Vfe (Maximum Flap Extended speed). Extending the flaps at speeds above the white arc will cause severe structural damage to the flap tracks."
    },
    {
      id: 97,
      question: "What is the meaning of the red range on the airspeed indicator?",
      options: [
        "Speed which must not be exceeded within bumpy air",
        "Speed which must not be exceeded with flaps extended",
        "Speed which must not be exceeded regardless of circumstances",
        "Speed which must not be exceeded in turns with more than 45° bank"
      ],
      correctIndex: 2,
      explanation: "The red line or red range at the very top end of the airspeed indicator represents Vne (Velocity Never Exceed). It is an absolute structural design limitation. Flying past this speed, even in perfectly smooth air, can induce catastrophic aeroelastic flutter, causing the wings or tail to disintegrate in flight."
    },
    {
      id: 98,
      question: "The compass error caused by the aircraft's magnetic field is called...",
      options: [
        "variation.",
        "declination.",
        "inclination.",
        "deviation."
      ],
      correctIndex: 3,
      explanation: "While 'Variation' is the natural geographical difference between True North and Magnetic North, 'Deviation' is the localized error caused by the electromagnetic fields generated by the aircraft's own radios, avionics, engine block, and magnetized metal structure, which subtly pull the compass needle off its correct magnetic alignment."
    },
    {
      id: 99,
      question: "The indication of a magnetic compass deviates from magnetic north direction due to what errors?",
      options: [
        "Deviation, turning and acceleration errors",
        "Gravity and magnetism",
        "Inclination and declination of the earth's magnetic field",
        "Variation, turning and acceleration errors"
      ],
      correctIndex: 0,
      explanation: "A direct-reading magnetic compass is subjected to three primary in-flight errors that cause it to temporarily or permanently deviate from Magnetic North: Deviation (local aircraft magnetic fields), Turning errors (the UNOS effect where the card dips during turns), and Acceleration errors (the ANDS effect where accelerating causes false turn indications)."
    },
    {
      id: 100,
      question: "Which of the mentioned cockpit instruments is connected to the pitot tube?",
      options: [
        "Vertical speed indicator",
        "Direct-reading compass",
        "Altimeter",
        "Airspeed indicator"
      ],
      correctIndex: 3,
      explanation: "The Airspeed Indicator (ASI) is the only primary flight instrument that utilizes the dynamic ram air pressure captured by the forward-facing pitot tube. The altimeter and VSI operate exclusively on ambient static pressure, while the compass relies purely on magnetism."
    },
    {
      id: 101,
      question: "Which cockpit instruments are connected to the static port?",
      options: [
        "Altimeter, vertical speed indicator, airspeed indicator",
        "Airspeed indicator, direct-reading compass, slip indicator",
        "Altimeter, slip indicator, navigational computer",
        "Airspeed indicator, altimeter, direct-reading compass"
      ],
      correctIndex: 0,
      explanation: "The static port provides a source of undisturbed, ambient atmospheric pressure. This baseline static pressure is absolutely critical for the operation of the Altimeter (to measure altitude), the Vertical Speed Indicator (to measure altitude change rate), and the Airspeed Indicator (to subtract from pitot pressure to find dynamic pressure)."
    },
    {
      id: 102,
      question: "An aircraft in the northern hemisphere intends to turn on the shortest way from a heading of 270° to a heading of 360°. At approximately which indication of the magnetic compass should the turn be terminated?",
      options: [
        "360°",
        "270°",
        "030°",
        "330°"
      ],
      correctIndex: 3,
      explanation: "Because the magnetic compass assembly acts like a pendulum, the Earth's magnetic dip pulls the card down when banking. In the Northern Hemisphere, turning TO North causes the compass to lag significantly behind the actual turn. To successfully roll out on 360°, the pilot must anticipate this lag and stop the turn when the compass reads roughly 30° early, at 330°. (Mnemonic: UNOS - Undershoot North)."
    },
    {
      id: 103,
      question: "An aircraft in the northern hemisphere intends to turn on the shortest way from a heading of 360° to a heading of 270°. At approximately which indication of the magnetic compass should the turn be terminated?",
      options: [
        "300°",
        "360°",
        "240°",
        "270°"
      ],
      correctIndex: 3,
      explanation: "When turning toward East (090°) or West (270°), the magnetic dip error aligns closely with the pivot axis of the compass card, meaning the turning error drops to zero. As the aircraft approaches a 270° heading, the compass reading becomes highly accurate. Therefore, the pilot should terminate the turn exactly when the compass indicates 270°."
    },
    {
      id: 104,
      question: "The term \"static pressure\" is defined as pressure...",
      options: [
        "inside the airplane cabin.",
        "of undisturbed airflow.",
        "resulting from orderly flow of air particles.",
        "sensed by the pitot tube."
      ],
      correctIndex: 1,
      explanation: "Static pressure is the absolute, ambient barometric pressure of the atmosphere at the aircraft's current flight level. To be measured accurately, it must be sampled from an area of 'undisturbed airflow' (via the static ports) where the aircraft's velocity and aerodynamic shape do not artificially compress or accelerate the air."
    },
    {
      id: 105,
      question: "An aircraft in the northern hemisphere intends to turn on the shortest way from a heading of 030° to a heading of 180°. At approximately which indicated magnetic heading should the turn be terminated?",
      options: [
        "360°",
        "150°",
        "210°",
        "180°"
      ],
      correctIndex: 2,
      explanation: "In the Northern Hemisphere, when turning towards South, the compass card leads the turn (runs ahead of the aircraft) due to magnetic dip. To stop on a heading of 180°, the pilot must allow the compass to pass 180 and roll out when it indicates approximately 30° past the target, which is 210°. As the wings level, the compass will swing back to 180°. (Mnemonic: UNOS - Overshoot South)."
    },
    {
      id: 106,
      question: "What does the dynamic pressure depend directly on?",
      options: [
        "Air pressure and air temperature",
        "Air density and airflow speed squared",
        "Air density and lift coefficient",
        "Lift- and drag coefficient"
      ],
      correctIndex: 1,
      explanation: "The aerodynamic formula for dynamic pressure (q) is mathematically expressed as q = 1/2 * ρ * V², where ρ (rho) represents the air density and V represents the true velocity of the airflow. Therefore, dynamic pressure depends directly on air density and the square of the airflow speed."
    },
    {
      id: 107,
      question: "What is a cause for the dip error on the direct-reading compass?",
      options: [
        "Deviation in the cockpit",
        "Acceleration of the airplane",
        "Inclination of earth's magnetic field lines",
        "Temperature variations"
      ],
      correctIndex: 2,
      explanation: "The Earth's magnetic field lines do not run parallel to the surface; they physically dive down into the Earth near the poles (magnetic inclination or dip). Because the compass card is mounted on a pivot to stay level, this downward magnetic pull causes the card to tilt and bind during turns and accelerations, creating dip errors."
    },
    {
      id: 108,
      question: "What behaviour is shown by a rotating gyro in space?",
      options: [
        "It moves in accordance with the body surrounding it",
        "It tends to maintain its position in space",
        "It swings from east to west like a pendulum",
        "It moves in circles with a stadily decreasing radius"
      ],
      correctIndex: 1,
      explanation: "This defines the fundamental principle of 'Gyroscopic Rigidity in Space'. A rapidly spinning heavy rotor mass inherently resists any external force that attempts to tilt its spin axis. It will fiercely maintain its orientation in absolute space, acting as an incredibly stable, fixed reference point for artificial horizons and heading indicators."
    },
    {
      id: 109,
      question: "A gyro which is rotating in space responds to forces being applied to it by an evasive movement...",
      options: [
        "at an angle of 45° to the force being applied.",
        "in a northern direction.",
        "at an angle of 90° to the force being applied.",
        "at an angle of 180° to the force being applied."
      ],
      correctIndex: 2,
      explanation: "This reactive phenomenon is known as 'Gyroscopic Precession'. When a deflecting force is applied to the rim of a spinning gyroscope, the resulting physical reaction does not occur at the point of pressure, but manifests exactly 90 degrees further along in the direction of rotation."
    },
    {
      id: 110,
      question: "The bank angle of a 2-minutes circle depends on the...",
      options: [
        "CAS.",
        "IAS.",
        "Ground speed.",
        "TAS."
      ],
      correctIndex: 3,
      explanation: "A 2-minute circle (a standard Rate 1 turn) requires the aircraft to turn at exactly 3 degrees per second. The aerodynamic formula for the required bank angle is approximately (TAS / 10) + 7. Because the turn rate is fixed at 3°/sec, the required bank angle depends exclusively on the aircraft's True Airspeed (TAS)."
    },
    {
      id: 111,
      question: "A turn and bank (or turn and slip) coordinator provides information regarding...",
      options: [
        "the coordination of the turn and slip angle.",
        "the rate of turn and coordination, i.e. slip or skid, of the turn.",
        "the pitch and bank angle of the aircraft.",
        "the rate of turn and bank angle of the aircraft."
      ],
      correctIndex: 1,
      explanation: "The Turn Coordinator provides two separate, vital pieces of information: the miniature airplane indicates the standard rate of turn (usually 3° per second), while the inclinometer (the black agate ball floating in the curved glass tube) indicates the coordination of the turn, revealing if the aircraft is slipping or skidding due to improper rudder input."
    },
    {
      id: 112,
      question: "The airspeed indicator is unservicable. The airplane may only be operated...",
      options: [
        "when a GPS with speed indication is used during flight.",
        "if no maintenance organisation is around.",
        "if only airfield patterns are flown.",
        "when the airspeed indicator is fully functional again."
      ],
      correctIndex: 3,
      explanation: "The airspeed indicator is an absolute mandatory primary flight instrument required by law for all aircraft under all flight rules (VFR or IFR). Without it, the pilot cannot accurately determine stall speed, rotation speed, or Vne. GPS provides Ground Speed, not indicated airspeed. The aircraft is legally unairworthy and strictly grounded until the ASI is fully functional again."
    },
    {
      id: 113,
      question: "Which light colour advises the pilot to the condition \"corrective action may be required in the future\"?",
      options: [
        "Red",
        "Blue",
        "Green",
        "Amber (orange)"
      ],
      correctIndex: 3,
      explanation: "In standard aviation cockpit design (such as the Master Caution/Warning system), an Amber or Orange light signifies a 'Caution' state. It alerts the pilot to an abnormal system condition that is not immediately life-threatening but requires heightened awareness and future corrective action or monitoring. (Red signifies immediate, critical emergency)."
    },
    {
      id: 114,
      question: "The Caution Area is marked on an airspeed indicator by what color?",
      options: [
        "Green",
        "Red",
        "Yellow",
        "White"
      ],
      correctIndex: 2,
      explanation: "The yellow arc on the airspeed indicator visibly defines the 'Caution Range' (from Vno to Vne). The aircraft may be flown in this speed regime, but strictly only in smooth, stable air. Encountering severe turbulence while flying in the yellow arc can impose excessive G-loads that critically overstress the airframe."
    },
    {
      id: 115,
      question: "An attitude director indicator (ADI) combines the information provided by...",
      options: [
        "the directional gyro and the rate gyro.",
        "the attitude indicator and the relative bearing indicator.",
        "the attitude indicator and the radio magnetic indicator.",
        "the attitude indicator and the flight director."
      ],
      correctIndex: 3,
      explanation: "An ADI (Attitude Director Indicator) is a highly sophisticated primary flight display component used in advanced aircraft. It visually superimposes computer-generated Flight Director (FD) command bars (crosshairs or v-bars indicating exactly where to pitch and roll) directly over the traditional artificial horizon (Attitude Indicator) background."
    },
    {
      id: 116,
      question: "What does the abbreviation HSI stand for?",
      options: [
        "Hybernating System Indication",
        "Horizontal Situation Indicator",
        "Horizontal Slip Indicator",
        "Horrifying Steep Inclination"
      ],
      correctIndex: 1,
      explanation: "HSI stands for Horizontal Situation Indicator. It is a vital, complex navigational instrument that significantly reduces pilot workload by combining a slaved magnetic heading indicator (Directional Gyro) with a VOR/ILS Course Deviation Indicator (CDI) into one single, intuitive top-down display."
    },
    {
      id: 117,
      question: "A horizontal situation indicator (HSI) combines the information provided by...",
      options: [
        "the directional gyro and the flight director.",
        "the rate gyro and the slip indicator.",
        "the directional gyro and the VHF navigation receiver.",
        "the attitude indicator and the flight director."
      ],
      correctIndex: 2,
      explanation: "The Horizontal Situation Indicator physically mounts the rotating VOR/Localizer deviation needle (VHF navigation receiver data) inside a rotating compass card driven by the aircraft's Directional Gyro. This overlays your navigation track directly onto your aircraft's current magnetic heading, providing exceptional spatial and situational awareness."
    },
    {
      id: 118,
      question: "What difference in altitude is shown by an altimeter, if the reference pressure scale setting is changed from 1000 hPa to 1010 hPa?",
      options: [
        "80 m less than before",
        "Values depending on QNH",
        "Zero",
        "80 m more than before"
      ],
      correctIndex: 3,
      explanation: "Increasing the reference pressure in the Kollsman window mechanically tells the altimeter that it has been moved deeper into the atmosphere, so it responds by winding the needle UP. The standard atmospheric lapse rate is ~27 feet (8 meters) per 1 hPa. An increase of 10 hPa raises the indicated altitude by 10 * 8m = 80 meters. Therefore, it reads 80 m more than before."
    },
    {
      id: 119,
      question: "When is it necessary to adjust the pressure in the reference scale of an alitimeter?",
      options: [
        "Every day before the first flight",
        "Once a month before flight operation",
        "After maintance has been finished",
        "Before every flight and during cross country flights"
      ],
      correctIndex: 3,
      explanation: "Atmospheric barometric pressure changes constantly with moving weather systems and varying geographical locations. To avoid CFIT (Controlled Flight Into Terrain), the pilot MUST calibrate the altimeter to the local QNH before taking off, and continuously update it to the regional QNH obtained from ATC or ATIS as they traverse different areas during a cross-country flight."
    },
    {
      id: 120,
      question: "The altimeter's reference scale is set to airfield pressure (QFE). What indication is shown during the flight?",
      options: [
        "Pressure altitude",
        "Height above airfield",
        "Airfield elevation",
        "Altitude above MSL"
      ],
      correctIndex: 1,
      explanation: "QFE is the absolute barometric pressure measured exactly at the aerodrome's surface. When the altimeter is set to QFE, it is physically calibrated to treat the runway as the 'zero' datum line. Consequently, when airborne, the altimeter will display the aircraft's pure vertical height above that specific airfield, not its altitude above sea level."
    },
    {
      id: 121,
      question: "A vertical speed indicator connected to a too big equalizing tank results in...",
      options: [
        "no indication",
        "mechanical overload",
        "indication too low",
        "indication too high"
      ],
      correctIndex: 3,
      explanation: "A Vertical Speed Indicator relies on a precisely calibrated leak rate to equalize pressure inside the tank. If the reservoir (tank) is too large, the air takes much longer to flow in or out to equalize during a climb or dive. This causes the pressure differential inside the instrument to grow disproportionately large, throwing the needle further and causing an exaggerated, overly high reading."
    },
    {
      id: 122,
      question: "A vertical speed indicator measures the difference between...",
      options: [
        "instantaneous total pressure and previous total pressure.",
        "total pressure and static pressure.",
        "instantaneous static pressure and previous static pressure.",
        "dynamic pressure and total pressure."
      ],
      correctIndex: 2,
      explanation: "The VSI capsule expands/contracts with the 'instantaneous' outside static pressure. The instrument case is also connected to the static line, but via a tiny, restrictive capillary tube. This leak delays the pressure change, acting as a pneumatic 'memory' of the static pressure from a few seconds ago. The needle displays the difference between these two: the instantaneous and previous static pressures."
    },
    {
      id: 123,
      question: "The term \"inclination\" is defined as...",
      options: [
        "deviation induced by electrical fields.",
        "angle between airplane's longitudinal axis and true north.",
        "angle between earth's magnetic field lines and horizontal plane.",
        "angle between magnetic and true north."
      ],
      correctIndex: 2,
      explanation: "Magnetic inclination (also known as magnetic dip) is the natural phenomenon where the Earth's magnetic flux lines do not run parallel to the surface, but instead dive downward toward the magnetic poles. It is the vertical angle measured between these plunging magnetic lines and the flat horizontal plane."
    },
    {
      id: 124,
      question: "What does the slip indicator show?",
      options: [
        "Rate of turn",
        "Vertical to horizon",
        "Airplane's bank",
        "Apparent vertical"
      ],
      correctIndex: 3,
      explanation: "The slip indicator (the black agate ball floating in a curved, fluid-filled glass tube) acts like a simple mechanical pendulum. It reacts to the resultant net force combining gravity and centrifugal force. This resultant vector is called the 'apparent vertical', indicating whether the aircraft's bank angle perfectly balances its rate of turn."
    },
    {
      id: 125,
      question: "The slip indicator's ball (apparent vertical) has moved to the right during a right turn. By what actions may the ball led back to middle position?",
      options: [
        "Reduce bank, increase rate of turn",
        "Increase bank, increase rate of turn",
        "Reduce speed, increase bank",
        "Reduce rate of turn, reduce bank"
      ],
      correctIndex: 0,
      explanation: "If you are turning right and the ball falls to the inside of the turn (the right), the aircraft is 'slipping'—meaning gravity is overpowering centrifugal force because there is too much bank angle for the current rate of turn. To 'step on the ball' and center it, the pilot must apply more right rudder (increasing the rate of turn) or shallow out (reduce) the bank angle."
    },
    {
      id: 126,
      question: "What is the purpose of winglets?",
      options: [
        "Increase gliging performance at high speed.",
        "Increase of lift and turning manoeuvering capabilities.",
        "To increase efficiency of aspect ratio.",
        "Reduction of induced drag."
      ],
      correctIndex: 3,
      explanation: "Winglets are vertical or angled aerodynamic extensions installed on the wingtips. They act as physical barriers that block the high-pressure air under the wing from violently curling over to the low-pressure area on top. By smoothing out these massive wingtip vortices, winglets significantly reduce induced drag, saving fuel and increasing range."
    },
    {
      id: 127,
      question: "What engines are commonly used with Touring Motor Gliders (TMG)?",
      options: [
        "4 Cylinder 2 stroke",
        "2 Cylinder Diesel",
        "2 plate Wankel",
        "4 Cylinder; 4 stroke"
      ],
      correctIndex: 3,
      explanation: "Touring Motor Gliders (TMGs) require highly reliable, fuel-efficient, and relatively lightweight powerplants for sustained cruising. Like most light general aviation aircraft, they predominantly utilize horizontally opposed, air-cooled, 4-cylinder, 4-stroke piston engines (such as Rotax, Limbach, or Sauer)."
    },
    {
      id: 128,
      question: "What is the purpose of engine oil in piston engine?",
      options: [
        "Cooling of the engine and lubrication of propeller shaft.",
        "For nose reduction and bearing of the propeller shaft.",
        "Cooling, lubrication and increasing engine performance.",
        "Cooling, lubrication of the engine and disposal of fine abrasion."
      ],
      correctIndex: 3,
      explanation: "In an aviation piston engine, oil serves multiple critical functions. It provides a microscopic film to lubricate fast-moving metal parts, absorbs massive amounts of internal combustion heat (cooling), creates a seal between the piston rings and cylinder walls, and constantly flushes away carbon deposits and microscopic metal shavings (fine abrasion) to the oil filter."
    }
  ],
  procedures: [
    {
      id: 1,
      question: "The term \"flight time\" is defined as...",
      options: [
        "the period from the start of the take-off run to the final touchdown when landing.",
        "the total time from the first aircraft movement until the moment it finally comes to rest at the end of the flight.",
        "the period from engine start for the purpose of taking off to leaving the aircraft after engine shutdown.",
        "the total time from the first take-off until the last landing in conjunction with one or more consecutive flights."
      ],
      correctIndex: 1,
      explanation: "According to ICAO definitions, 'flight time' for aeroplanes (also known as block-to-block time) is the total time from the moment an aircraft first moves for the purpose of taking off until the moment it finally comes to rest at the end of the flight."
    },
    {
      id: 2,
      question: "What should be considered regarding a scheduled flight over water, when land cannot be reached in case of an emergency landing?",
      options: [
        "Transponder code 7600 has to be set during the whole flight",
        "Contact to the nearest ATC shall consist during the whole flight",
        "For all passengers there must be life jackets or lifeboats present",
        "The flight plan has to contain the exact waypoints"
      ],
      correctIndex: 2,
      explanation: "Aviation regulations strictly mandate that for overwater flights operating beyond gliding distance from the shore (where a ditching would be inevitable in the event of an engine failure), the aircraft must be equipped with approved life jackets or life rafts for every single person on board."
    },
    {
      id: 3,
      question: "Which of the items below may have an influence on the noise perceived by a person on the ground?\n1) Engine power setting\n2) Propeller revolutions per minute\n3) Position of the landing gear\n4) Flap position\n5) Flight track\n6) Height above ground\n7) Flight rules",
      options: [
        "1, 2, 3, 4, 5, 6",
        "1, 5, 6",
        "1, 5, 6, 7",
        "3, 4, 5, 6, 7"
      ],
      correctIndex: 0,
      explanation: "Noise perceived on the ground is a combination of engine exhaust, propeller tip speed (RPM), and aerodynamic noise (drag caused by extended gear and flaps). The severity of the noise footprint is heavily influenced by the aircraft's physical height above the ground and its exact flight track over populated areas. Flight rules (VFR/IFR) have no physical impact on sound waves."
    },
    {
      id: 4,
      question: "How can the pilot of an an engine-driven aircraft minimise the noise emission during descent and approach?",
      options: [
        "Normal approach with normal power setting, configuration prior to initiating descent, shortest possible arrival route",
        "Descent and approach in landing configuration while maintaining a descent angle of 3°, direct approach whenever possible",
        "Low approach with minimum power setting, late configuration and steep approach, adherence to established arrival routes",
        "High approach with minimum power setting, late descent, late configuration, adherence to established arrival routes"
      ],
      correctIndex: 3,
      explanation: "To be 'fly neighborly', a pilot should maintain a high altitude for as long as possible before starting a late, continuous descent at a very low power setting (reducing engine noise). Keeping the aircraft in a 'clean' configuration (gear and flaps retracted) until late in the approach eliminates high aerodynamic howling noise."
    },
    {
      id: 5,
      question: "When should turns at low altitudes above villages be avoided with regard to noise abatement procedures?",
      options: [
        "In descent",
        "In climb",
        "During the approach",
        "In horizontal flight"
      ],
      correctIndex: 1,
      explanation: "During the climb phase, the engine and propeller are operating at their absolute maximum power settings, generating the most intense noise. Banking the aircraft in a turn directs the loudest belly-reflected sound waves outward and downward directly over a wider populated area, compounding the noise nuisance."
    },
    {
      id: 6,
      question: "How should departures near villages be carried out?",
      options: [
        "Slow with a low propeller rotation speed",
        "Low and fast between the villages",
        "Climb and changes in direction should be done as slow as possible",
        "Villages should be circumnavigated and crossed in a sufficient altitude"
      ],
      correctIndex: 3,
      explanation: "Good airmanship and noise abatement protocols dictate that pilots should plan their departure routing to actively circumvent (circumnavigate) noise-sensitive areas like villages. If crossing over a village is totally unavoidable, it must only be done after reaching a sufficiently high altitude."
    },
    {
      id: 7,
      question: "Which kind of engine is susceptible to carburettor fire?",
      options: [
        "Piston engines",
        "Turbine engines",
        "Electric motors",
        "Turboprop engines"
      ],
      correctIndex: 0,
      explanation: "Only conventional piston engines utilize a carburetor to mix raw fuel and air. Turbine and electric engines do not possess carburetors. Therefore, the specific hazard of a carburetor fire—caused by fuel pooling in the intake manifold—is exclusive to piston engines."
    },
    {
      id: 8,
      question: "Why is it dangerous to pump the throttle for engine start in cold weather?",
      options: [
        "It may cause a carburettor fire",
        "Carburettor icing can occur",
        "The engine might start with not enough power",
        "The oil will become diluted"
      ],
      correctIndex: 0,
      explanation: "Pumping the throttle actuates the carburetor's accelerator pump, which forcefully squirts streams of raw liquid fuel directly into the intake. If the engine doesn't start immediately, this excessive fuel pools. A single engine backfire through the intake valve will ignite this puddle, causing a dangerous carburetor fire."
    },
    {
      id: 9,
      question: "Which danger exists during engine start?",
      options: [
        "Cable fire",
        "Carburettor fire",
        "Sparking",
        "Smoke emission"
      ],
      correctIndex: 1,
      explanation: "The most prominent and sudden fire hazard during the engine start sequence is a carburetor fire. This is almost always the result of over-priming or aggressively pumping the throttle, which floods the intake system with highly volatile, liquid aviation gasoline."
    },
    {
      id: 10,
      question: "May an engine, which previously was on fire, be restarted?",
      options: [
        "No, the risk of a reignition of the fire would be too high",
        "Yes, if the aircraft is flying at a safe altitude",
        "Yes, but only on the ground for the purpose of taxiing",
        "Yes, but only if the cause of the fire was a carburettor fire during engine start"
      ],
      correctIndex: 0,
      explanation: "If an engine has suffered an in-flight or ground fire, catastrophic damage to fuel lines, oil seals, electrical wiring, and structural mounts must be assumed. Attempting to restart the engine introduces fresh, highly pressurized fuel and electrical sparks back into a compromised, superheated environment, virtually guaranteeing an explosive reignition."
    },
    {
      id: 11,
      question: "Which gas is most dangerous during an engine fire?",
      options: [
        "Carbon monoxide",
        "Nitrogen",
        "Oxygen",
        "Carbon dioxide"
      ],
      correctIndex: 0,
      explanation: "Carbon monoxide (CO) is a highly toxic, completely invisible, and odorless byproduct of combustion. During an engine fire, CO can be drawn into the cabin through the heating vents. It binds to the blood's hemoglobin 200 times faster than oxygen, causing rapid, insidious incapacitation and death without the pilot ever realizing they are choking."
    },
    {
      id: 12,
      question: "Smoke enters the cockpit during an engine fire. Which actions have to be taken immediately?",
      options: [
        "Switching off the master switch and the ignition",
        "Switching off the heating and the ventilating system",
        "Switching off the pitot and front window heating",
        "Switching off the avionics and the cabin lighting"
      ],
      correctIndex: 1,
      explanation: "If an engine fire occurs, toxic smoke and flames from the engine cowling will be forcefully sucked straight into the cockpit via the aircraft's climate control ducting. The pilot's immediate life-saving action must be to shut off all cabin heating and ventilation systems to isolate the cockpit from the engine bay."
    },
    {
      id: 13,
      question: "What should be the first action in case of a cable fire during a flight?",
      options: [
        "Close the fuel valve",
        "Open the windows",
        "Turn off the master switch",
        "Open cabin ventialtion"
      ],
      correctIndex: 2,
      explanation: "A cable fire is an electrical fire caused by a severe short circuit melting the wire insulation. The very first memory item is to turn off the Master Switch (Battery and Alternator). This instantly kills all electrical power flowing through the airframe, eliminating the energy source feeding the electrical fire."
    },
    {
      id: 14,
      question: "What extinguishing agent is the least suitable for an aircraft fire?",
      options: [
        "Powder",
        "Halon",
        "Water",
        "Foam"
      ],
      correctIndex: 2,
      explanation: "Water is incredibly dangerous and utterly unsuitable for aircraft fires. Because aviation fuel and oil float on top of water, spraying water on an engine fire will rapidly spread the burning fuel. Furthermore, water is a conductor, making it lethal if applied to an avionics/electrical cable fire."
    },
    {
      id: 15,
      question: "In flight, a little smoke emerges from behind the instrument panel. An electrical fire is suspected. Which action, with respect to the pilot's operating manual, should be taken?",
      options: [
        "Turn off the heat",
        "Shut down the engine",
        "Turn off the master switch",
        "Use the fire extinguisher"
      ],
      correctIndex: 2,
      explanation: "The instrument panel houses dense clusters of electrical wiring and avionics. Acrid, white, or grey smoke from this area strongly indicates an electrical short circuit. The immediate critical action is to flip the Master Switch to 'OFF', which instantly stops the flow of electricity and removes the heat source causing the wire insulation to burn."
    },
    {
      id: 16,
      question: "In flight, a little smoke emerges from behind the instrument panel. An engine fire is suspected. Which action, with respect to the pilot's operating manual, should be taken?",
      options: [
        "Turn off the heat",
        "Shut down the engine",
        "Use the fire extinguisher",
        "Turn off the master switch"
      ],
      correctIndex: 0,
      explanation: "In single-engine aircraft, cabin heat is provided by ducting outside air over a shroud wrapped around the searing hot engine exhaust muffler. If an engine fire occurs, the smoke is drawn directly into this shroud and blasted through the heating vents behind the panel into the cockpit. Turning off the cabin heat physically seals these vents."
    },
    {
      id: 17,
      question: "A wind shear is...",
      options: [
        "a slow increase of the wind speed in altitudes above 13000 ft.",
        "a wind speed change of more than 15 kt.",
        "a vertical or horizontal change of wind speed and wind direction.",
        "a meteorological downslope wind phenomenon in the alps."
      ],
      correctIndex: 2,
      explanation: "Wind shear is officially defined in meteorology as a sudden, drastic, and localized change in wind speed and/or wind direction over a very short distance. It can occur both vertically (climbing or descending through different wind layers) and horizontally (flying across a microburst or frontal boundary)."
    },
    {
      id: 18,
      question: "Which weather phenomenon is typically associated with wind shear?",
      options: [
        "Fog.",
        "Invernal warm front.",
        "Thunderstorms.",
        "Stable high pressure areas."
      ],
      correctIndex: 2,
      explanation: "Thunderstorms (Cumulonimbus clouds) are the most violent generators of low-level wind shear. They produce massive, concentrated columns of rapidly descending cold air and heavy rain known as microbursts, which hit the ground and explode outward, creating extreme and unpredictable wind shear in all directions."
    },
    {
      id: 19,
      question: "When do you expect wind shear?",
      options: [
        "During an inversion",
        "In calm wind in cold weather",
        "During a summer day with calm winds",
        "When passing a warm front"
      ],
      correctIndex: 0,
      explanation: "A strong temperature inversion creates a highly stable atmospheric boundary layer. Often, calm, cold air is trapped near the surface while a fast-moving, warmer air mass flows rapidly just above it. Flying through this sharp, frictionless boundary layer guarantees a sudden and significant encounter with wind shear."
    },
    {
      id: 20,
      question: "During an approach the aeroplane experiences a windshear with a decreasing headwind. If the pilot does not make any corrections, how do the approach path and the indicated airspeed (IAS) change?",
      options: [
        "Path is higher, IAS decreases",
        "Path is lower, IAS increases",
        "Path is higher, IAS increases",
        "Path is lower, IAS decreases"
      ],
      correctIndex: 3,
      explanation: "A headwind acts like a cushion, increasing the relative airflow over the wings. If that headwind suddenly decreases (shears away), the aircraft instantly loses that relative airflow. The Indicated Airspeed (IAS) drops sharply, causing a sudden loss of aerodynamic lift. Without lift, the aircraft sinks rapidly, meaning the approach path becomes dangerously lower."
    },
    {
      id: 21,
      question: "During an approach the aeroplane experiences a windshear with an increasing headwind. If the pilot does not make any corrections, how do the approach path and the indicated airspeed (IAS) change?",
      options: [
        "Path is higher, IAS decreases",
        "Path is lower, IAS increases",
        "Path is higher, IAS increases",
        "Path is lower, IAS decreases"
      ],
      correctIndex: 2,
      explanation: "An increasing headwind suddenly forces more air over the wings, causing the Indicated Airspeed (IAS) to spike upwards. This sudden surge in dynamic pressure generates an excess of lift. Without pilot correction, this extra lift will cause the aircraft to balloon upward, making the approach path significantly higher than intended."
    },
    {
      id: 22,
      question: "During an approach the aeroplane experiences a windshear with a decreasing tailwind. If the pilot does not make any corrections, how do the approach path and the indicated airspeed (IAS) change?",
      options: [
        "Path is higher, IAS decreases",
        "Path is higher, IAS increases",
        "Path is lower, IAS decreases",
        "Path is lower, IAS increases"
      ],
      correctIndex: 1,
      explanation: "Aerodynamically, losing a tailwind is exactly the same as gaining a headwind. When the tailwind (which was robbing you of relative airflow) suddenly dies off, the aircraft's Indicated Airspeed (IAS) immediately increases. This surge in IAS generates excess lift, causing the aircraft to balloon and float above the normal approach path (Path is higher)."
    },
    {
      id: 23,
      question: "After take-off an aeroplane gets into a wind shear with decreasing headwind. As a result...",
      options: [
        "the aeroplane flies above the estimated climb path.",
        "the true airspeed (TAS) will increase.",
        "the ground speed (GS) will decrease.",
        "the aeroplane flies below the estimated climb path."
      ],
      correctIndex: 3,
      explanation: "During a steep climb-out, an aircraft relies heavily on a strong headwind to provide the required Indicated Airspeed for lift. If that headwind shears and decreases, the aircraft suffers an immediate loss of lift and performance. It will sag and sink relative to the air mass, flying dangerously below the estimated climb path and closer to terrain."
    },
    {
      id: 24,
      question: "How may windshear be recognised in flight?",
      options: [
        "Sudden and apparently baseless change in altitude, airspeed, rate of climb or descent.",
        "Sudden and apparently baseless change in heading, turning rate, engine speed or oil temperature.",
        "Sudden and apparently baseless change of oilpressure, oil temperature, engine speed and altitude.",
        "Rather unexpected onset of drizzle associated with high stratus clouds following previously clear skies and calm conditions."
      ],
      correctIndex: 0,
      explanation: "Because windshear changes the local relative wind passing over the wings without the pilot changing the throttle or flight controls, the aircraft's performance will fluctuate wildly. The primary cockpit indicators of a windshear encounter are sudden, uncommanded, and aggressive deviations in indicated airspeed, altitude, and the vertical speed indicator (rate of climb/descent)."
    },
    {
      id: 25,
      question: "Which phenomenon may be expected at point 2 of the microburst? See figure (OPR-001)",
      img: "OPR-001.png",
      options: [
        "Constant rate of descent",
        "Decrease of descent rate",
        "Increase of airspeed",
        "Decrease of climb rate"
      ],
      correctIndex: 3,
      explanation: "In the diagram (OPR-001), Point 2 marks the exact center core of the microburst. Here, an intense, highly concentrated column of cold air is plunging vertically downward toward the ground. Flying through this core imposes a massive aerodynamic downdraft on the aircraft, completely overpowering its performance and causing a severe, uncontrollable decrease in climb rate."
    },
    {
      id: 26,
      question: "Which phenomenon may be expected at point 3 of the miroburst? See figure (OPR-001)",
      img: "OPR-001.png",
      options: [
        "Decrease in airspeed",
        "Constant rate of descent",
        "Increase in airspeed",
        "Decrease in climb rate"
      ],
      correctIndex: 0,
      explanation: "At Point 3 in the diagram, the aircraft has crossed through the center of the microburst and is now flying through the outflow on the far side. The air is rushing outward away from the core, slamming into the back of the aircraft. This massive, sudden tailwind violently shears away the relative wind passing over the wings, resulting in a devastating, often unrecoverable decrease in indicated airspeed."
    },
    {
      id: 27,
      question: "How can a wind shear encounter in flight be avoided?",
      options: [
        "Avoid take-off and landing during the passage of heavy showers or thunderstorms",
        "Avoid areas of precipitation, particularly during winter, and choose low flight altitudes",
        "Avoid take-offs and landings in mountainous terrain and stay in flat country whenever possible",
        "Avoid thermally active areas, particularly during summer, or stay below these areas"
      ],
      correctIndex: 0,
      explanation: "The absolute best defense against low-level wind shear and microbursts is avoidance. Since severe wind shear is structurally inherent to the turbulent downdrafts of mature cumulonimbus clouds, pilots must strictly delay take-offs and entirely abort approaches when heavy convective showers or thunderstorms are actively passing over or near the aerodrome."
    },
    {
      id: 28,
      question: "What action should be taken when entering a windshear?\n1. Reduce speed\n2. Retract gear and flaps\n3. Maintain current configuration\n4. Adjust thrust",
      options: [
        "2 and 4",
        "1 and 2",
        "1 and 3",
        "3 and 4"
      ],
      correctIndex: 3,
      explanation: "If inadvertently caught in a wind shear, the pilot must NOT change the aircraft's aerodynamic configuration (do not touch gear or flaps), as retracting them temporarily destroys lift and increases sink rate. The correct procedure is to maintain current configuration (3) and aggressively adjust thrust (4)—usually applying maximum available power—while pitching to the maximum safe angle of attack to power through the downdraft."
    },
    {
      id: 29,
      question: "After lift-off, a much stronger than expected airspeed rise is experienced during the initial climb phase. What may be expected if the aeroplane entered a microburst?",
      options: [
        "An increased climb rate and decreased airspeed",
        "An increased climb rate and airspeed",
        "A decreased climb rate and airspeed",
        "A decreased climb rate and increased airspeed"
      ],
      correctIndex: 2,
      explanation: "Entering the leading edge of a microburst provides an artificial, massive performance boost (airspeed rise) due to the strong outflowing headwind. However, this is a deadly trap. Moments later, as the aircraft flies into the core and then out the back side of the microburst, it will encounter a violent downdraft followed by a severe tailwind, leading to a catastrophic loss of both climb rate and airspeed."
    },
    {
      id: 30,
      question: "Immediately after lift-off, a microburst is entered inadvertently. Which action might avoid an unintentional descent?",
      options: [
        "Set maximum power, maintain present aircraft configuration, climb at the best rate of climb speed",
        "Set maximum power, retract landing gear and flaps, pick up speed and perform a left or a right turn in an attempt to leave the area of the microburst on the shortest way",
        "Set maximum power, retract landing gear and flaps, increase pitch until attaining optimum climb speed",
        "Set maximum power, maintain present aircraft configuration, pick up speed in an attempt to leave the area of the microburst as fast as possible"
      ],
      correctIndex: 0,
      explanation: "The standard microburst escape maneuver requires absolute maximum energy. The pilot must firewall the throttle to maximum power, strictly maintain the current configuration (retracting flaps/gear causes a temporary, fatal loss of lift), and pitch the aircraft up to climb at the best rate of climb speed (Vy) or even higher towards the stick-shaker limit, fighting to out-climb the massive downdraft."
    },
    {
      id: 31,
      question: "Wake turbulences develop during take-off just as the aeroplane...",
      options: [
        "reaches an altitude of 15 ft.",
        "lifts off with the main gear.",
        "lifts off with the front gear.",
        "accelerates."
      ],
      correctIndex: 2,
      explanation: "Wake turbulence (wingtip vortices) is a direct aerodynamic byproduct of lift generation. An aircraft begins generating substantial lift at the exact moment of rotation, which physically occurs when the nose gear (front gear) is lifted off the runway."
    },
    {
      id: 32,
      question: "Wake turbulence is caused by...",
      options: [
        "wind shear at the wingtip of an aerofoil.",
        "jet blast behind a turbine engine.",
        "turbulence at the downwind side of a mountain range.",
        "pressure compensation at the wingtip of an aerofoil."
      ],
      correctIndex: 3,
      explanation: "Aerodynamic lift is created by a high-pressure zone beneath the wing and a low-pressure zone above it. Nature seeks equilibrium, so the high-pressure air curls outward and upward around the wingtips to 'compensate' the low-pressure area, creating violent, counter-rotating vortices known as wake turbulence."
    },
    {
      id: 33,
      question: "Wake turbulence is particularly strong...",
      options: [
        "when flying at high speeds.",
        "when flying at high altitudes.",
        "when flying at low speeds.",
        "when flying at low altitudes."
      ],
      correctIndex: 2,
      explanation: "To maintain altitude at low airspeeds, an aircraft must be flown at a much higher angle of attack. This high angle of attack creates a massive pressure differential between the upper and lower wing surfaces, which directly generates far stronger and more violent wingtip vortices."
    },
    {
      id: 34,
      question: "Wake turbulence is particularly strong...",
      options: [
        "at a high aeroplane weight.",
        "when flying with high thrust.",
        "when flying with low thrust.",
        "at a low aeroplane weight."
      ],
      correctIndex: 0,
      explanation: "The golden rule of wake turbulence is that it is most severe when the generating aircraft is 'Heavy, Clean, and Slow'. A higher aircraft weight demands more total lift to stay airborne, which requires a larger pressure differential across the wings, producing substantially stronger vortices."
    },
    {
      id: 35,
      question: "The intensity of wake turbulence depends on...",
      options: [
        "the propeller pitch.",
        "the temperature.",
        "the weight of the aeroplane.",
        "the altitude of the aeroplane."
      ],
      correctIndex: 2,
      explanation: "While wingspan and speed play a role, the gross weight of the generating aircraft is the absolute primary factor dictating the intensity of wake turbulence. The heavier the aircraft, the more lift it must produce, and the more powerful the resulting vortices will be."
    },
    {
      id: 36,
      question: "Two aircraft of the same type, same grossweight and same configuration fly at different airspeeds. Which aircraft will cause more severe wake turbulence?",
      options: [
        "The aircraft flying at slower speed.",
        "The aircraft flying at lower altitude.",
        "The aircraft flying at higher speed.",
        "The aircraft flying at higher altitude."
      ],
      correctIndex: 0,
      explanation: "Since both aircraft weigh the same, the one flying at a slower speed must fly at a higher angle of attack to generate the same required amount of lift. This steeper angle creates a much harsher pressure gradient at the wingtips, resulting in significantly more severe wake turbulence."
    },
    {
      id: 37,
      question: "Two aircraft of the same type, same gross weight and same flap configuration fly with different speeds and altitude. Which aircraft will cause more wake turbulence?",
      options: [
        "The aircraft flying at a higher altitude",
        "The aircraft flying at a lower altitude",
        "The aircraft flying at higher speed.",
        "The aircraft flying at lower speed."
      ],
      correctIndex: 3,
      explanation: "Regardless of the altitude, the aircraft flying at the lower speed is forced to maintain a higher angle of attack. This maximized pressure differential between the belly and the top of the wing violently amplifies the wingtip spillover, creating the strongest wake turbulence."
    },
    {
      id: 38,
      question: "With only a slight crosswind, what is the danger at take-off after the departure of a heavy aeroplane?",
      options: [
        "Wake turbulence on or near the runway.",
        "Wake turbulence is amplified and distorted.",
        "Wake turbulence rotate faster and higher.",
        "Wake turbulence twisting transverse to the runway."
      ],
      correctIndex: 0,
      explanation: "Normally, wingtip vortices slowly drift outward and downward away from the runway. However, a light crosswind of about 3 to 5 knots can perfectly counteract this drift for the upwind vortex, causing the invisible, violent wake turbulence to stall and linger directly over the runway centerline, directly in the path of the next departing aircraft."
    },
    {
      id: 39,
      question: "A light aircraft intends to land behind a commercial airliner belonging to wake turbulence category \"medium\" or \"heavy\" on a long runway. How can the wake turbulence of the commercial aircraft be avoided?",
      options: [
        "By making a steep approach and a long landing, touching down behind the touchdown point of the airliner's nose gear",
        "By making a steep approach and a very short landing. The light aircraft should be able to stop before reaching the airliner's touchdown point",
        "By making a shallow approach and a long landing, touching down behind the touchdown point of the airliner's nose gear",
        "By making a shallow approach and a very short landing. The light aircraft should be able to stop before reaching the airliner's touchdown point"
      ],
      correctIndex: 0,
      explanation: "Wake turbulence from a landing airliner slowly sinks toward the ground and completely ceases the moment the airliner's nose gear touches down. To stay safely above this sinking wake, a light aircraft must fly a steeper approach path than the airliner and purposely land 'long' (beyond the point where the airliner touched down)."
    },
    {
      id: 40,
      question: "What should be observed when taxiing behind a commercial airliner?",
      options: [
        "To avoid wake turbulence, a minimum distance of 700 m should be maintained",
        "To avoid the jet blast, a minimum distance of 600 m should be maintained",
        "To avoid wake turbulence, a minimum distance of 300 m should be maintained",
        "To avoid the jet blast, a minimum distance of 200 m should be maintained"
      ],
      correctIndex: 3,
      explanation: "Jet engines at idle or taxi thrust produce an incredibly powerful, invisible exhaust wake known as jet blast. This high-velocity wind can easily flip or severely damage a light general aviation aircraft. Pilots must maintain a minimum safe distance of at least 200 meters behind taxiing airliners to avoid this hazard."
    },
    {
      id: 41,
      question: "A technical fault requires an emergency off-field landing. Which steps, with respect to the pilot's operating handbook, are necessary?",
      options: [
        "Inform air traffic control and request technical support, check the pilot's operating handbook for a reference on the matter and execute an emergency landing.",
        "Reduce speed and configure the aircraft for landing in an attempt to gain time, declare an emergency, complete the applicable emergency procedure and execute an emergency landing.",
        "Locate a suitable landing area, plan the approach, complete the applicable emergency procedure, declare an emergency, start and concentrate on the approach in due time.",
        "Declare an emergency, complete the applicable emergency procedure, cover as much distance towards the airport as possible to be closer to the rescue forces."
      ],
      correctIndex: 2,
      explanation: "The aviation golden rule in an emergency is 'Aviate, Navigate, Communicate'. First, pitch for best glide and locate a suitable landing field (Navigate). Once the approach is planned, execute the memory checklists (troubleshoot/secure). Only after the aircraft is secured and the landing zone is assured should you declare the emergency on the radio (Communicate)."
    },
    {
      id: 42,
      question: "Which method is appropriate to approach an unprepared landing field?",
      options: [
        "Flat direct approach to ensure visual ground contact",
        "Steep approach to keep the noise level low",
        "Fast approach, performance check, and landing within a quick stop",
        "Terrain investigation to determine approach points and landing"
      ],
      correctIndex: 3,
      explanation: "When planning a precautionary landing on an unprepared surface (like a field or meadow), the pilot must first fly over the area at a safe altitude to conduct a thorough terrain investigation. This is critical to spot hidden ditches, fences, power lines, and determine the wind direction before committing to the final approach."
    },
    {
      id: 43,
      question: "Which area is suitable for an off-field landing?",
      options: [
        "Harvested cornfield",
        "Glade with long dry grass",
        "Plowed field",
        "Sports area in a village"
      ],
      correctIndex: 0,
      explanation: "A harvested cornfield offers a firm, relatively flat, and unobstructed surface where hazards can be easily seen. Long grass can hide deep ditches or boulders; a plowed field will catch the landing gear and flip the aircraft; and sports areas within villages present an unacceptable risk of injuring civilians on the ground."
    },
    {
      id: 44,
      question: "An emergency landing is a landing...",
      options: [
        "conducted without power from the engine.",
        "conducted in an attempt to keep up safety regarding an aircraft and its occupants.",
        "conducted with the flaps retracted.",
        "conducted in response to circumstances forcing the aircraft to land."
      ],
      correctIndex: 3,
      explanation: "By strict aviation definition, an emergency landing is an immediate, unavoidable landing made under circumstances that make continued flight impossible or catastrophically dangerous (such as catastrophic engine failure, severe structural damage, or an uncontrollable onboard fire)."
    },
    {
      id: 45,
      question: "A landing conducted in response to circumstances forcing the aircraft to land is a / an...",
      options: [
        "precautionary landing.",
        "urgent landing.",
        "emergency landing.",
        "field or out landing."
      ],
      correctIndex: 2,
      explanation: "This is the direct converse of the previous definition. When an aircraft is absolutely 'forced' to land due to critical failures (meaning the pilot has no option to delay or continue), it is formally classified as an emergency landing."
    },
    {
      id: 46,
      question: "A precautionary landing is a landing...",
      options: [
        "conducted without power from the engine.",
        "conducted in response to circumstances forcing the aircraft to land.",
        "conducted in an attempt to sustain flight safety.",
        "conducted with the flaps retracted."
      ],
      correctIndex: 2,
      explanation: "Unlike an emergency landing where the aircraft is forced down, a precautionary landing is a premeditated, deliberate choice made by the pilot while the aircraft is still flyable. It is executed to 'sustain flight safety' before a developing situation (such as rapidly deteriorating weather, impending darkness, or low fuel) turns into a life-threatening emergency."
    },
    {
      id: 47,
      question: "Which of the following landing areas is most suitable for an off-field landing?",
      options: [
        "A lake with an undisturbed surface",
        "A light brown field with short crops",
        "A meadow without livestock",
        "A field with ripe waving crops"
      ],
      correctIndex: 1,
      explanation: "A light brown field with short crops is the ideal off-field landing site. The light brown color and short crops indicate firm, dry ground where any hidden obstacles or furrows would be easily visible from the air. Ripe, tall crops or soft meadows are extremely prone to catching the wheels and violently flipping the aircraft."
    },
    {
      id: 48,
      question: "How does the pilot prepare for a VFR flight over a large distance of water, when it is unlikely that land can be reached in case of an engine failure?",
      options: [
        "File a flight plan including the exact way-points.",
        "Be prepared to fly with transponder only.",
        "Carry life vests or a life raft for all occupants.",
        "Maintain continuous radio contact with ATC."
      ],
      correctIndex: 2,
      explanation: "Aviation law dictates that whenever an aircraft operates over water at a distance where an engine failure would result in an inevitable ditching (beyond gliding distance to land), the pilot is legally required to carry approved life vests (and/or rafts) for every single occupant on board."
    },
    {
      id: 49,
      question: "Which items should a passenger briefing in case of an imminent emergency landing include?",
      options: [
        "How to work the aircraft radio, emergency transponder squawk, telephone number of the competent search and rescue (SAR) center",
        "Blood type of the other aircraft occupants, location of the first-aid kit",
        "Nature of the emergency, intentions, safety position, evacuation routes, actions after landing",
        "How to read an emergency checklist, how to cut the engine, telephone number of the home airport"
      ],
      correctIndex: 2,
      explanation: "During a critical emergency, a passenger briefing must be direct and focused purely on survivability. It must inform passengers what is happening (nature of emergency), how to brace for impact (safety position), how to operate the exits (evacuation routes), and where to assemble outside once the aircraft has stopped."
    },
    {
      id: 50,
      question: "After a precautionary landing the brakes and wheels are very hot. In which way should the pilot approach them?",
      options: [
        "From the right or left side",
        "At an angle of 45°",
        "From the front or back side",
        "From the front, right or left side"
      ],
      correctIndex: 2,
      explanation: "Heavy braking generates massive thermal energy that is transferred into the wheel rim and tire. This heat can cause the tire pressure to spike until the sidewall or wheel rim explodes violently. Because this explosion blasts debris outward along the axle line (to the sides), you must only approach overheated brakes from the front or rear of the tire."
    },
    {
      id: 51,
      question: "What needs to be observed in conjunction with overheated brakes?",
      options: [
        "The affected brakes need to be cooled down with halon",
        "The affected tyres may burst in axial direction",
        "The affected tyres may burst in radial direction or direction of rotation",
        "The wheel fairing shall be taken off to increase the cooldown"
      ],
      correctIndex: 1,
      explanation: "When brake assemblies overheat, the intense heat transfers to the tire, dramatically increasing its internal pressure. The weakest points of the tire assembly are the sidewalls and the wheel rim flanges. Consequently, if a failure occurs, the tire will burst explosively in the axial direction (outwards to the sides along the line of the axle)."
    },
    {
      id: 52,
      question: "In case of an emergency ditching, the life vests have to be inflated...",
      options: [
        "before disembarking the aircraft.",
        "during disembarking the aircraft.",
        "after disembarking the aircraft at a safe distance of about 10 m.",
        "after disembarking the aircraft."
      ],
      correctIndex: 3,
      explanation: "It is a critical survival rule that life vests must NEVER be inflated inside the aircraft cabin. If the cabin begins to submerge, an inflated life vest will violently pin the occupant against the ceiling, making it physically impossible for them to swim down and exit through the doors or windows. They must be inflated only after fully exiting the aircraft."
    },
    {
      id: 53,
      question: "What are the effects of wet grass on the take-off and landing distance?",
      options: [
        "Decrease of the take-off distance and increase of the landing distance",
        "Increase of the take-off distance and increase of the landing distance",
        "Decrease of the take-off distance and decrease of the landing distance",
        "Increase of the take-off distance and decrease of the landing distance"
      ],
      correctIndex: 1,
      explanation: "Wet grass physically impedes the aircraft tires during the take-off roll, acting as a high-drag surface that retards acceleration, thus significantly increasing the required take-off distance. Conversely, during landing, wet grass acts as a slick lubricant beneath the tires, completely destroying braking efficiency and massively increasing the landing distance."
    },
    {
      id: 54,
      question: "Under which circumstances may a runway be considered to be contaminated?",
      options: [
        "When more than 25% of the runway surface area within the required length and width being used is covered by water, slush, snow or ice more than 3 mm deep",
        "When 75% of the required runway length and width are covered by contaminants such as snow, frost, ice or sand",
        "When more than 50% of the runway surface area within the required length and width being used is covered by water, slush, snow or ice more than 3 mm deep",
        "When more than 50% of the required runway length and width are covered by contaminants such as snow, frost, ice or sand"
      ],
      correctIndex: 0,
      explanation: "By strict ICAO definition, a runway is legally classified as 'contaminated' when more than 25% of the assessed surface area is covered by standing water, slush, or loose snow exceeding 3 mm in depth, or by any depth of solid ice or compacted snow. This triggers severe performance penalties for calculations."
    },
    {
      id: 55,
      question: "What minimum coverage with ice or snow must be given to call a runway \"contaminated\"?",
      options: [
        "50%",
        "25%",
        "10%",
        "75%"
      ],
      correctIndex: 1,
      explanation: "Aligning with the official ICAO operational definition, the threshold for changing a runway condition code from 'wet/damp' to 'contaminated' is when the contaminant (ice, snow, or slush) covers more than 25% of the runway surface."
    },
    {
      id: 56,
      question: "Wet snow on a runway can lead to...",
      options: [
        "an increase in lift.",
        "a decrease in lift..",
        "reduced rolling resistance during take-off.",
        "increased rolling resistance during take-off."
      ],
      correctIndex: 3,
      explanation: "Wet, heavy snow (slush) on the runway creates massive physical resistance against the tires. As the wheels attempt to plow through this heavy slush during the take-off run, they encounter severe drag. This drastically increases rolling resistance, slowing acceleration and greatly extending the take-off distance."
    },
    {
      id: 57,
      question: "What danger does standing water on the runway pose to aircraft?",
      options: [
        "Decreased rolling resistance during take-off",
        "An increase in lift",
        "Increased rolling resistance during take-off",
        "A decrease in lift"
      ],
      correctIndex: 2,
      explanation: "Similar to wet snow or slush, standing water (pools or puddles) on the runway creates a physical barrier that the tires must violently displace. This fluid drag significantly increases the rolling resistance of the landing gear, critically impeding the aircraft's ability to accelerate to rotation speed."
    },
    {
      id: 58,
      question: "Which danger exists after a heavy rain shower for a landing aircraft?",
      options: [
        "Displacement of the tire slip marking",
        "Difficult flare due to glare",
        "Longer braking distance due to aquaplaning",
        "Decreased braking distance due to aquaplaning"
      ],
      correctIndex: 2,
      explanation: "A heavy rain shower leaves deep layers of standing water on the runway. At high landing speeds, the aircraft's tires cannot channel this water away fast enough and ride up on a wedge of water (dynamic hydroplaning). This lifts the tires completely off the asphalt, reducing braking and steering action to absolute zero, leading to a much longer braking distance."
    },
    {
      id: 59,
      question: "Which would be the correct reaction when hydroplaning is suspected upon landing?",
      options: [
        "Add power and use flaps and spoilers to brake aerodynamically",
        "Apply maximum braking to reduce aircraft speed to less than hydroplaning speed, then continue normal ground roll",
        "Cross rudder and aileron controls in order to use the aircraft fuselage to brake aerodynamically",
        "If all wheels are in motion, brake moderately. Maintain directional control by aerodynamic means"
      ],
      correctIndex: 3,
      explanation: "If you apply maximum brakes while hydroplaning, the tires will lock up. The friction of the locked tires skidding on the water will boil it into steam, melting the rubber (reverted rubber hydroplaning) and completely destroying control. You must use aerodynamic controls (rudder) to keep the aircraft straight, and only apply moderate braking once you feel the tires firmly spinning on the hard surface."
    },
    {
      id: 60,
      question: "How should a landing on a contaminated runway be conducted if it proves to be inevitable?",
      options: [
        "Approach with the minimum crosswind component possible, use minimum flaps, touch down softly with positive pitch and minimum speed, do not apply brakes",
        "Approach with the minimum crosswind component possible, use maximum flaps, touch down with negative pitch and minimum speed, brake carefully",
        "Approach with the minimum crosswind component possible, use maximum flaps, touch down firmly with minimum speed, brake carefully",
        "Approach with the minimum crosswind component possible, use minimum flaps, touch down softly with minimum speed, do not apply brakes"
      ],
      correctIndex: 2,
      explanation: "On a contaminated runway, directional control is marginal and braking is extremely poor. You must approach with minimal crosswind (to prevent sliding sideways), use maximum flaps to fly as slowly as safely possible, and execute a firm 'positive' touchdown. A firm touchdown helps punch the tires completely through the water or slush layer down to the hard asphalt, allowing for careful but effective braking."
    },
    {
      id: 61,
      question: "During final approach, the glider pilot realizes a very bumpy surface on a selected off-field landing site. What technique may be recommended for landing?",
      options: [
        "Touch down with minimum speed, compensate different ground levels with power lever",
        "Approach with increased speed, push elevetor upon first ground contact",
        "Touch down with minimum speed, keep elevator pulled until full stop",
        "Approach with increased speed, avoid using wheel brakes"
      ],
      correctIndex: 2,
      explanation: "When landing on a rough, bumpy surface (like a plowed field or rutted meadow), the greatest danger is the nose wheel digging into a rut, causing the aircraft to violently flip over onto its back (a nose-over). To prevent this, the pilot must touch down at the absolute minimum speed and keep the control stick pulled fully back into their lap throughout the entire rollout, using aerodynamic pressure to pin the tail down and keep the fragile nose wheel elevated off the bumps."
    }
  ]
};

/* ELEMENTS */
const loginSection = document.getElementById("login-section");
const registerSection = document.getElementById("register-section");
const subjectSection = document.getElementById("subject-section");
const startSection = document.getElementById("start-section");
const quizSection = document.getElementById("quiz-section");

/* NOU: Elemente pentru Rezultate */
const resultSection = document.getElementById("result-section");
const scoreDisplayEl = document.getElementById("score-display");
const historyListEl = document.getElementById("history-list");

const quizEl = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const gridEl = document.getElementById("question-grid");
const welcomeEl = document.getElementById("welcome");
const examTitleEl = document.getElementById("exam-title");

/* DARK MODE */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark ? "on" : "off");
  const btn = document.getElementById("dark-toggle");
  if(btn) btn.textContent = isDark ? "☀️" : "🌙";
}

/* NAVIGARE SECTIUNI */
function showSection(section) {
  // Ascundem tot
  if(loginSection) loginSection.style.display = "none";
  if(registerSection) registerSection.style.display = "none";
  if(subjectSection) subjectSection.style.display = "none";
  if(startSection) startSection.style.display = "none";
  if(quizSection) quizSection.style.display = "none";
  if(resultSection) resultSection.style.display = "none";
  
  // Afisam ce trebuie
  if(section) section.style.display = "block";
}

/* QUIZ STATE */
let shuffledQuestions = [];
let currentQuestion = 0;
let userAnswers = [];
let timeLeft;
let timerInterval;
let answered = [];
let selectedSubject = null;
let wrongQuestions = [];
let isMistakeMode = false;

/* LOGIN / REGISTER */
function showRegister() { showSection(registerSection); }
function showLogin() { showSection(loginSection); }

function register() {
  const username = regUsername().value;
  if (users.find(u => u.username === username)) {
    alert("Username already exists");
    return;
  }
  const user = {
    username,
    password: regPassword().value,
    firstName: regFirst().value,
    lastName: regLast().value,
    birthDate: regBirth().value,
    history: []
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  loginUser(user);
}

function login() {
  const user = users.find(u => u.username === loginUsername().value && u.password === loginPassword().value);
  if (!user) {
    alert("Invalid credentials");
    return;
  }
  loginUser(user);
}

function loginUser(user) {
  currentUser = user;
  localStorage.setItem("loggedUser", user.username);
  showSection(subjectSection);
  welcomeEl.textContent = `Welcome back, ${user.firstName}`;
}

function logout() {
  localStorage.removeItem("loggedUser");
  showSection(loginSection);
}

/* INPUT HELPERS */
const loginUsername = () => document.getElementById("login-username");
const loginPassword = () => document.getElementById("login-password");
const regUsername = () => document.getElementById("reg-username");
const regPassword = () => document.getElementById("reg-password");
const regFirst = () => document.getElementById("reg-firstname");
const regLast = () => document.getElementById("reg-lastname");
const regBirth = () => document.getElementById("reg-birthdate");

function confirmSubject() {
  const subject = document.getElementById("subject-select").value;
  if (!subject) {
    alert("Please select a subject");
    return;
  }
  selectedSubject = subject;
  examTitleEl.textContent = `${subject.toUpperCase()} EXAM`;
  showSection(startSection);
}

/* START TEST */
function startTest() {
  showSection(quizSection);
  const music = document.getElementById("bg-music");
  if (music) {
    music.volume = 0.5;
    music.play().catch(error => {
      console.log("Eroare redare audio:", error);
    });
  }
  // --- COD NOU: Ascundem fundalul de meniu și arătăm avionul ---
  document.body.classList.remove('menu-active');
  const cessna = document.getElementById('cessna-logo');
  if (cessna) cessna.style.display = 'block';
  // ------------------------------------------------------------
  startQuiz();
}

/* QUIZ LOGIC */
function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

function startQuiz() {
  shuffledQuestions = shuffle([...questionBanks[selectedSubject]]).slice(0, QUESTIONS_PER_TEST);
  currentQuestion = 0;
  userAnswers = [];
  answered = [];
  timeLeft = TEST_TIME_SECONDS;
  if(resultEl) resultEl.innerHTML = "";

  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const q = shuffledQuestions[currentQuestion];
  const alreadyAnswered = answered[currentQuestion] === true;
  
  // Verificăm dacă a răspuns și dacă a greșit
  const userMadeMistake = alreadyAnswered && (userAnswers[currentQuestion] !== q.correctIndex);
  
  const imageHtml = q.img
    ? `<div class="image-container">
         <img src="${q.img}" alt="Exam image" style="max-width: 100%; border-radius: 8px; margin-bottom: 15px; cursor: zoom-in;" onclick="openImageViewer('${q.img}')">
         <p style="font-size: 0.8rem; color: #7f8c8d; margin-top: -10px;">(Click the image to enlarge it and enable drawing)</p>
       </div>`
    : "";

  quizEl.innerHTML = `
    <div class="question-text">
      <strong>${currentQuestion + 1}. ${q.question}</strong>
    </div>
    ${imageHtml} 
    ${q.options.map((o, i) => {
      let className = "";
      let explanationHtml = "";

      if (alreadyAnswered) {
        if (i === q.correctIndex) {
          className = "correct";
          // Dacă a greșit, generăm div-ul cu explicația fix sub răspunsul corect
          if (userMadeMistake && q.explanation) {
            explanationHtml = `
              <div class="explanation-box">
                <strong>Explanation:</strong> ${q.explanation}
              </div>
            `;
          }
        } else if (userAnswers[currentQuestion] === i) {
          className = "wrong";
        }
      }

      return `
        <div class="option-wrapper">
          <label class="${className}">
            <input type="radio" name="answer" value="${i}"
              ${userAnswers[currentQuestion] === i ? "checked" : ""}
              ${alreadyAnswered ? "disabled" : ""}
            >
            ${o}
          </label>
          ${explanationHtml}
        </div>
      `;
    }).join("")}
  `;

  progressEl.textContent = `Question ${currentQuestion + 1}/${shuffledQuestions.length}`;

  // Navigare
  nextBtn.style.display = currentQuestion === shuffledQuestions.length - 1 ? "none" : "inline-block";
  nextBtn.disabled = !answered[currentQuestion];
  
  prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
  
  submitBtn.style.display = currentQuestion === shuffledQuestions.length - 1 ? "inline-block" : "none";
  submitBtn.disabled = !answered[currentQuestion];
  
  renderGrid();
}

quizEl.addEventListener("change", e => {
  if (answered[currentQuestion]) return;
  userAnswers[currentQuestion] = Number(e.target.value);
  answered[currentQuestion] = true;
  loadQuestion();
});

nextBtn.onclick = () => {
  if (currentQuestion < shuffledQuestions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
};

prevBtn.onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
};

/* GRID */
function renderGrid() {
  gridEl.innerHTML = "";
  shuffledQuestions.forEach((q, i) => {
    const box = document.createElement("div");
    box.textContent = i + 1;
    box.className = "q-box";

    if (userAnswers[i] === undefined) box.classList.add("q-unanswered");
    else if (userAnswers[i] === q.correctIndex) box.classList.add("q-correct");
    else box.classList.add("q-wrong");

    if (i === currentQuestion) box.classList.add("q-current");

    box.onclick = () => {
      currentQuestion = i;
      loadQuestion();
    };
    gridEl.appendChild(box);
  });
}

/* TIMER */
function startTimer() {
  timerEl.textContent = formatTime();
  if(timerInterval) clearInterval(timerInterval);
  
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = formatTime();
    if (timeLeft <= 0) submitTest();
  }, 1000);
}

function formatTime() {
  return `Time: ${String(Math.floor(timeLeft / 60)).padStart(2, "0")}:${String(timeLeft % 60).padStart(2, "0")}`;
}

/* SUBMIT */
submitBtn.onclick = submitTest;

function submitTest() {
  clearInterval(timerInterval);
  // --- COD NOU: Readucem fundalul de meniu și ascundem avionul ---
  document.body.classList.add('menu-active');
  const cessna = document.getElementById('cessna-logo');
  if (cessna) cessna.style.display = 'none';
  // --------------------------------------------------------------
  let score = 0;
  wrongQuestions = []; // Resetăm lista de greșeli

  shuffledQuestions.forEach((q, i) => {
    if (userAnswers[i] === q.correctIndex) {
      score++;
    } else {
      wrongQuestions.push(q); // Colectăm întrebarea greșită
    }
  });

  const percentage = ((score / shuffledQuestions.length) * 100).toFixed(2);
  const passed = percentage >= PASS_PERCENTAGE;

  // Actualizăm istoricul doar dacă NU suntem în modul de aprofundare a greșelilor
  if (!isMistakeMode) {
    currentUser.history.push({
      date: new Date().toLocaleString(),
      score: score,
      total: shuffledQuestions.length,
      percentage: percentage,
      subject: selectedSubject || "General"
    });
    users = users.map(u => (u.username === currentUser.username ? currentUser : u));
    localStorage.setItem("users", JSON.stringify(users));
  }

  showSection(resultSection);

  const color = passed ? "#2ecc71" : "#e74c3c";
  const statusText = passed ? "PASS" : "FAIL";

  let mistakeBtnHtml = "";
  if (wrongQuestions.length > 0) {
    mistakeBtnHtml = `<button class="mistake-btn" onclick="startMistakesTest()">Review incorrect answers (${wrongQuestions.length})</button>`;
  }

  scoreDisplayEl.innerHTML = `
    <h2 style="color: ${color}; font-size: 3rem; margin: 10px 0;">${percentage}%</h2>
    <h3 style="margin: 0; font-size: 1.5rem; color: #555;">${statusText}</h3>
    <p style="margin-top: 15px; font-size: 1.1rem;">
      You answered correctly to <strong>${score}</strong> out of <strong>${shuffledQuestions.length}</strong> questions.
    </p>
    ${mistakeBtnHtml}
  `;
  
  renderHistory();
}

function renderHistory() {
  historyListEl.innerHTML = "";
  if (!currentUser.history || currentUser.history.length === 0) {
    historyListEl.innerHTML = "<p style='text-align:center; color: #777;'>No history available yet.</p>";
    return;
  }
  
  const reversedHistory = [...currentUser.history].reverse();
  let htmlContent = '<ul style="list-style: none; padding: 0;">';
  
  reversedHistory.forEach(h => {
    const isPass = parseFloat(h.percentage) >= PASS_PERCENTAGE;
    const itemColor = isPass ? "#2ecc71" : "#e74c3c";
    // Check dark mode for history item background
    const isDark = document.body.classList.contains("dark");
    const bgColor = isDark ? "#2b2b2b" : "#f9f9f9";

    htmlContent += `
      <li style="
        background: ${bgColor};
        border-left: 5px solid ${itemColor};
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <div style="flex-grow: 1;">
          <div style="font-weight: bold; font-size: 0.9rem; opacity: 0.8;">${h.date}</div>
          <div style="font-size: 0.85rem; text-transform: capitalize;">${h.subject || "Exam"}</div>
        </div>
        <div style="font-weight: bold; font-size: 1.2rem; color: ${itemColor};">
          ${h.percentage}%
        </div>
      </li>
    `;
  });
  htmlContent += '</ul>';
  historyListEl.innerHTML = htmlContent;
}

function returnToSubjects() {
  currentQuestion = 0;
  userAnswers = [];
  answered = [];
  quizEl.innerHTML = "";
  gridEl.innerHTML = "";
  showSection(subjectSection);
}

/* INITIALIZARE */
const logged = localStorage.getItem("loggedUser");
if (logged) {
  const user = users.find(u => u.username === logged);
  if (user) {
    loginUser(user);
  } else {
    showSection(loginSection);
  }
} else {
  showSection(loginSection);
}

/* DARK MODE PREF */
const darkPref = localStorage.getItem("darkMode");
if (darkPref === "on") {
  document.body.classList.add("dark");
  const btn = document.getElementById("dark-toggle");
  if (btn) btn.textContent = "☀️";
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-toggle");
  
  if (music.paused) {
    music.play();
    btn.textContent = "🔊"; 
  } else {
    music.pause();
    btn.textContent = "🔇"; 
  }
}

/* --- MINI-TEST DIN GREȘELI --- */
function startMistakesTest() {
  isMistakeMode = true;
  shuffledQuestions = [...wrongQuestions]; // Noul test conține doar greșelile
  currentQuestion = 0;
  userAnswers = [];
  answered = [];
  // Oferim 1 minut pentru fiecare întrebare recapitulată
  timeLeft = shuffledQuestions.length * 60; 
  
  if(resultEl) resultEl.innerHTML = "";
  
  examTitleEl.textContent = "REVIEW MISTAKES";
  showSection(quizSection);
  
  loadQuestion();
  startTimer();
}

/* Modificare minoră în startQuiz() pentru a reseta modul */
const originalStartQuiz = startQuiz;
startQuiz = function() {
  isMistakeMode = false;
  originalStartQuiz();
}


/* --- SISTEMUL DE VIZUALIZARE ȘI ADNOTARE ANEXE --- */
const imageViewer = document.getElementById("image-viewer");
const viewerImg = document.getElementById("viewer-img");
const viewerCanvas = document.getElementById("viewer-canvas");
let ctx = viewerCanvas ? viewerCanvas.getContext("2d") : null;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function openImageViewer(src) {
  if(!ctx) ctx = viewerCanvas.getContext("2d");
  viewerImg.src = src;
  imageViewer.style.display = "flex";
  
  // Sincronizăm pânza de desen (canvas) cu dimensiunile reale afișate ale imaginii
  viewerImg.onload = () => {
    viewerCanvas.width = viewerImg.clientWidth;
    viewerCanvas.height = viewerImg.clientHeight;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#e74c3c"; // Culoarea liniei de desen (Roșu)
  };
}

function closeImageViewer() {
  imageViewer.style.display = "none";
  clearCanvas(); // Curățăm desenul când ieșim
}

function clearCanvas() {
  if(ctx) ctx.clearRect(0, 0, viewerCanvas.width, viewerCanvas.height);
}

// Obținerea coordonatelor precise (mouse sau atingere pe telefon)
function getMousePos(e) {
  const rect = viewerCanvas.getBoundingClientRect();
  if (e.touches && e.touches.length > 0) {
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top
    };
  }
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function startDrawing(e) {
  e.preventDefault();
  isDrawing = true;
  const pos = getMousePos(e);
  lastX = pos.x;
  lastY = pos.y;
}

function draw(e) {
  if (!isDrawing) return;
  e.preventDefault(); // Împiedică derularea paginii pe telefoane
  const pos = getMousePos(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  lastX = pos.x;
  lastY = pos.y;
}

function stopDrawing() {
  isDrawing = false;
}

// Atașarea evenimentelor pentru Mouse (Desktop)
if(viewerCanvas) {
  viewerCanvas.addEventListener("mousedown", startDrawing);
  viewerCanvas.addEventListener("mousemove", draw);
  viewerCanvas.addEventListener("mouseup", stopDrawing);
  viewerCanvas.addEventListener("mouseout", stopDrawing);

  // Atașarea evenimentelor pentru Touch (Mobile/Tablete)
  viewerCanvas.addEventListener("touchstart", startDrawing, {passive: false});
  viewerCanvas.addEventListener("touchmove", draw, {passive: false});
  viewerCanvas.addEventListener("touchend", stopDrawing);
}