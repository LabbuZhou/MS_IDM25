const figures = [
  {
    title: 'Research framework', file: 'Framework.png', wide: true,
    caption: 'The workflow used to construct the archived bibliometric analysis and systematic literature review.',
    note: 'Read from left to right: database retrieval and screening define the evidence base before bibliometric mapping and thematic synthesis. The diagram documents the historical study design; it is not a PRISMA flow count.'
  },
  {
    title: 'Relevant publications, 2000-2024', file: 'NoP.png', wide: true,
    caption: 'Annual publication counts in the target-journal subset and the broader Web of Science citation set.',
    note: 'The figure shows a clear acceleration after 2010 and especially after 2021. The two series answer different questions and should not be treated as interchangeable sample sizes; the focused review corpus contains 313 screened papers.'
  },
  {
    title: 'Bibliographic coupling of journals', file: 'Journal.png',
    caption: 'VOSviewer map of journals connected by shared references.',
    note: 'Larger nodes indicate more IDM-related publications; thicker links indicate stronger coupling. TR-C and IEEE-TITS occupy central positions, reflecting connections across traffic-flow, vehicle-control, and intelligent-transportation research.'
  },
  {
    title: 'Bibliographic coupling of countries', file: 'Country.png',
    caption: 'Country-level coupling network for the archived corpus.',
    note: "Node size reflects publication volume, link strength reflects shared reference patterns, and colors are algorithmic clusters. The map describes the dataset's collaboration and citation structure, not national research quality."
  },
  {
    title: 'Bibliographic coupling of authors', file: 'Author.png',
    caption: 'Author-level coupling network generated with full counting and a three-paper threshold.',
    note: 'Seventy of 856 observed authors met the display threshold. Proximity and links reveal similarity in cited knowledge bases; disconnected or omitted authors may still make important contributions.'
  },
  {
    title: 'Keyword co-occurrence network', file: 'Key.png',
    caption: 'Co-occurrence map of author and index keywords in the archived records.',
    note: 'Clusters summarize recurring vocabularies around traffic flow, connected and automated vehicles, control, safety, and emissions. Keywords depend on indexing practice and terminology, so cluster boundaries are descriptive rather than definitive.'
  },
  {
    title: 'Classification of IDM-related literature', file: 'Review.png', wide: true,
    caption: 'Taxonomy used to organize the systematic review.',
    note: 'The framework separates fundamentals, theoretical uses, practical applications, and extensions. Some papers span several branches; assignment to a primary category was a reading aid rather than a claim of mutual exclusivity.'
  },
];

const topPapers = [
  [1,'TR-C',880,'Influence of Connected and Autonomous Vehicles on Traffic Flow Stability and Throughput','Talebpour & Mahmassani (2016)',97.78,1],
  [2,'TR-C',690,'Modeling Cooperative and Autonomous Adaptive Cruise Control Dynamic Responses Using Experimental Data','Milan\u00e9s & Shladover (2014)',62.73,2],
  [3,'TR-C',419,'Adaptive Cruise Control Design for Active Congestion Avoidance','Kesting et al. (2008)',24.65,16],
  [4,'Physica A',375,'Delays, Inaccuracies and Anticipation in Microscopic Traffic Models','Treiber et al. (2006)',19.74,32],
  [5,'TR-C',307,'Modeling Car-Following Behavior on Urban Expressways in Shanghai: A Naturalistic Driving Study','Zhu et al. (2018)',43.86,3],
  [6,'TR-C',306,'Incorporating Human Factors in Car-Following Models: A Review of Recent Developments and Research Needs','Saifuzzaman & Zheng (2014)',27.82,12],
  [7,'TR-C',238,'Eco Approaching at an Isolated Signalized Intersection under Partially Connected and Automated Vehicles Environment','Jiang et al. (2017)',29.75,7],
  [8,'IEEE-TITS',231,'Platooning with IVC-enabled autonomous vehicles: Strategies to mitigate communication delays, improve safety and traffic flow','Fernandes & Nunes (2012)',17.77,37],
  [9,'TR-C',214,'Rolling Horizon Control Framework for Driver Assistance Systems. Part II: Cooperative Sensing and Cooperative Control','Wang et al. (2014)',19.45,33],
  [10,'TR-B',205,'Trajectory Data Reconstruction and Simulation-Based Validation against Macroscopic Traffic Patterns','Montanino & Punzo (2015)',20.50,28],
  [11,'IEEE-TITS',203,'Capturing car-following behaviors by deep learning','Wang et al. (2018)',29.00,8],
  [12,'TR-C',203,'Variable Speed Limit: A Microscopic Analysis in a Connected Vehicle Environment','Khondaker & Kattan (2015)',20.30,29],
  [13,'AAP',202,"Longitudinal Safety Evaluation of Connected Vehicles' Platooning on Expressways",'Rahman et al. (2018)',28.86,9],
  [14,'TR-C',200,'A Recurrent Neural Network Based Microscopic Car Following Model to Predict Traffic Oscillation','Zhou et al. (2017)',25.00,15],
  [15,'IEEE-TITS',196,'On the impact of cooperative autonomous vehicles in improving freeway merging: a modified intelligent driver model-based approach','Zhou et al. (2017)',24.50,17],
  [16,'TR-C',194,'Isolated Intersection Control for Various Levels of Vehicle Technology: Conventional, Connected, and Automated Vehicles','Yang et al. (2016)',21.56,26],
  [17,'IEEE-TITS',181,'Development of an Efficient Driving Strategy for Connected and Automated Vehicles at Signalized Intersections: A Reinforcement Learning Approach','Zhou et al. (2020)',36.20,4],
  [18,'IEEE-TITS',181,'Optimal control of connected vehicle systems with communication delay and driver reaction time','Ge & Orosz (2017)',22.63,21],
  [19,'IEEE-TITS',173,'Analysis of recurrent neural networks for probabilistic modeling of driver behavior','Morton et al. (2017)',21.63,25],
  [20,'TR-C',171,'Human-like Autonomous Car-Following Model with Deep Reinforcement Learning','Zhu et al. (2018)',24.43,18],
  [21,'TR-C',166,'Joint Optimization of Vehicle Trajectories and Intersection Controllers with Connected Automated Vehicles: Combined Dynamic Programming and Shooting Heuristic Approach','Guo et al. (2019)',27.67,13],
  [22,'Applied Energy',163,'Jointly Dampening Traffic Oscillations and Improving Energy Consumption with Electric, Connected and Automated Vehicles: A Reinforcement Learning Based Approach','Qu et al. (2020)',32.60,5],
  [23,'TR-B',162,'On Some Experimental Features of Car-Following Behavior and How to Model Them','Jiang et al. (2015)',16.20,38],
  [24,'AAP',161,'Evaluation of the Impacts of Cooperative Adaptive Cruise Control on Reducing Rear-End Collision Risks on Freeways','Li et al. (2017)',20.13,31],
  [25,'TR-C',155,'Unravelling Effects of Cooperative Adaptive Cruise Control Deactivation on Traffic Flow Characteristics at Merging Bottlenecks','Xiao et al. (2018)',22.14,24],
  [26,'TR-C',153,'Heterogeneity in Car-Following Behavior: Theory and Empirics','Ossen & Hoogendoorn (2011)',10.93,41],
  [27,'PLOS ONE',152,'Traffic experiment reveals the nature of car-following','Jiang et al. (2014)',13.82,39],
  [28,'AAP',151,'Evaluating the Safety Impact of Adaptive Cruise Control in Traffic Oscillations on Freeways','Li et al. (2017)',18.88,34],
  [29,'IEEE-TIV',150,'Combining Planning and Deep Reinforcement Learning in Tactical Decision Making for Autonomous Driving','Hoel et al. (2020)',30.00,6],
  [30,'TR-B',149,'Three-Phase Traffic Theory and Two-Phase Models with a Fundamental Diagram in the Light of Empirical Stylized Facts','Treiber et al. (2010)',9.93,42],
  [31,'IEEE-TITS',145,'Heterogeneous traffic mixing regular and connected vehicles: Modeling and stabilization','Xie et al. (2019)',24.17,19],
  [32,'CACIE',142,'How Reaction Time, Update Time, and Adaptation Time Influence the Stability of Traffic Flow','Kesting & Treiber (2008)',8.35,47],
  [33,'IEEE-TITS',139,'A decentralized approach for anticipatory vehicle routing using delegate multiagent systems','Claes et al. (2011)',9.93,43],
  [34,'PRE',122,'Understanding widely scattered traffic flows, the capacity drop, and platoons as effects of variance-driven time gaps','Treiber & Helbing (2006)',6.42,48],
  [35,'TR-C',121,'Simultaneous Modeling of Car-Following and Lane-Changing Behaviors Using Deep Learning','Zhang et al. (2019)',20.17,30],
  [36,'TR-C',116,'Integrated Macroscopic Traffic Flow, Emission, and Fuel Consumption Model for Control Purposes','Zegeye et al. (2013)',9.67,44],
  [37,'TR-C',115,'A Survey on Autonomous Vehicle Control in the Era of Mixed-Autonomy: From Physics-Based to AI-guided Driving Policy Learning','Di & Shi (2021)',28.75,10],
  [38,'Physica A',115,'Linear Stability Analysis of Heterogeneous Traffic Flow Considering Degradations of Connected Automated Vehicles and Reaction Time','Yao et al. (2021)',28.75,11],
  [39,'PRE',113,'Memory effects in microscopic traffic models and wide scattering in flow-density data','Treiber et al. (2003)',5.14,50],
  [40,'IEEE-TITS',113,'Cooperative Eco-Driving at Signalized Intersections in a Partially Connected and Automated Vehicle Environment','Wang et al. (2020)',22.60,22],
  [41,'TR-D',95,'Eco-Driving-Based Cooperative Adaptive Cruise Control of Connected Vehicles Platoon at Signalized Intersections','Ma et al. (2021)',23.75,20],
  [42,'IEEE-TITS',92,'Do we really need to calibrate all the parameters? Variance-based sensitivity analysis to simplify microscopic traffic flow models','Punzo et al. (2015)',9.20,45],
  [43,'TR-C',90,'Modeling and Analyzing Cyberattack Effects on Connected Automated Vehicular Platoons','Wang et al. (2020)',18.00,35],
  [44,'TR-C',89,'Analytical Analysis of the Effect of Maximum Platoon Size of Connected and Automated Vehicles','Zhou et al. (2021)',22.25,23],
  [45,'IEEE-TITS',89,'Cooperative Lane Changing Strategies to Improve Traffic Operation and Safety Nearby Freeway Off-Ramps in a Connected and Automated Vehicles Environment','Zheng et al. (2020)',17.80,36],
  [46,'TR-B',87,'Revisiting the Task-Capability Interface Model for Incorporating Human Factors into Car-Following Models','Saifuzzaman et al. (2015)',8.70,46],
  [47,'Energy',85,'Fuel Consumption and Transportation Emissions Evaluation of Mixed Traffic Flow with Connected Automated Vehicles and Human-Driven Vehicles on Expressway','Yao et al. (2021)',21.25,27],
  [48,'IEEE-TITS',85,'Cooperative intersection control based on virtual platooning','Medina et al. (2018)',12.14,40],
  [49,'IEEE-TITS',83,'On the impact of virtual traffic lights on carbon emissions mitigation','Ferreira et al. (2012)',6.38,49],
  [50,'IEEE-TITS',81,'Driving Behavior Modeling Using Naturalistic Human Driving Data with Inverse Reinforcement Learning','Huang et al. (2022)',27.00,14]
];

const tables = [
  {
    title: 'Classic car-following models',
    description: 'Citation comparison for ten well-known microscopic car-following models in the Web of Science Core Collection as of December 2024; the Wiedemann value came from Google Scholar because the report was not indexed in Web of Science.',
    columns: ['Citations','Model','Foundational publication','Source','Citations/year','CPY rank'], numeric: [0,4,5],
    rows: [
      [2786,'Intelligent Driver Model (IDM)','Congested Traffic States in Empirical Observations and Microscopic Simulations','Physical Review E',111.44,1],
      [2307,'Optimal Velocity Model','Dynamical model of traffic congestion and numerical simulation','Physical Review E',76.90,2],
      [1425,'Gipps model','A behavioural car-following model for computer simulation','Transportation Research Part B',32.39,4],
      [1139,'Full Velocity Difference Model','Full velocity difference model for a car-following theory','Physical Review E',47.46,3],
      [957,'GHR model','Nonlinear follow-the-leader models of traffic flow','Operations Research',14.95,6],
      [904,'General Motors model','Traffic dynamics: studies in car following','Operations Research',13.49,8],
      [902,'Newell nonlinear model','Nonlinear effects in the dynamics of car following','Operations Research',14.09,7],
      [851,'Pipes model','An operational analysis of traffic dynamics','Journal of Applied Physics',11.82,9],
      [609,'Newell simplified model','A simplified car-following theory: a lower order model','Transportation Research Part B',26.48,5],
      [349,'Wiedemann model','Microscopic traffic simulation: the simulation system MISSION','Project ICARUS (V1052) Final Report',10.58,10]
    ],
    note: 'The IDM leads this archived comparison in both total citations and annualized citation rate. Counts are database- and date-dependent; CPY also favors more recent publications relative to raw totals.'
  },
  {
    title: 'Classic transportation models',
    description: 'Citation comparison between the IDM and foundational models from several traffic-flow traditions, frozen in December 2024.',
    columns: ['Citations','Model','Foundational publication','Source','Citations/year','CPY rank'], numeric: [0,4,5],
    rows: [
      [2786,'IDM','Congested traffic states in empirical observations and microscopic simulations','Physical Review E',111.44,1],
      [3382,'Nagel-Schreckenberg (NaSch)','A cellular automaton model for freeway traffic','Journal de Physique',102.48,2],
      [2216,'Cell Transmission Model (CTM)','The cell transmission model: a dynamic representation of highway traffic consistent with the hydrodynamic theory','Transportation Research Part B',71.48,3],
      [3231,'Lighthill-Whitham-Richards (LWR)','On kinematic waves II. A theory of traffic flow on long crowded roads','Proceedings of the Royal Society of London',46.16,4],
      [1519,"Vickrey's bottleneck model",'Congestion theory and transport investment','American Economic Review',27.13,5]
    ],
    note: 'The IDM does not have the highest raw citation total in this cross-paradigm set, but it has the highest archived citations-per-year value. The models differ substantially in scale and purpose, so the comparison indicates reach rather than substitutability.'
  },
  {
    title: 'Top journals by related-paper count',
    description: 'Journals with at least four publications in the archived IDM-related corpus.',
    columns: ['Rank','Journal','Abbreviation','Relevant papers'], numeric: [0,3],
    rows: [
      [1,'IEEE Transactions on Intelligent Transportation Systems','IEEE-TITS',114], [2,'Transportation Research Part C','TR-C',84],
      [3,'IEEE Transactions on Vehicular Technology','IEEE-TVT',25], [4,'Transportation Research Part B','TR-B',23],
      [5,'Accident Analysis and Prevention','AAP',14], [6,'IEEE Transactions on Intelligent Vehicles','IEEE-TIV',12],
      [7,'Physica A','-',8], [8,'Computer-Aided Civil and Infrastructure Engineering','CACIE',6],
      [9,'Energy','-',5], [9,'Physical Review E','PRE',5], [11,'Applied Energy','-',4], [11,'Transportation Research Part D','TR-D',4]
    ],
    note: 'Publication volume is concentrated in intelligent-transportation and transportation-methodology journals, with additional energy, safety, physics, and civil-engineering outlets. The table measures corpus volume, not journal prestige.'
  },
  {
    title: 'Top 50 most-cited IDM-related papers',
    description: 'The fifty most-cited papers in the archived analysis. Total citations (TC) and citations per year (CPY) were reported from the historical database snapshot.',
    columns: ['TC rank','Journal','TC','Title','Authors / year','CPY','CPY rank'], numeric: [0,2,5,6], rows: topPapers, filter: true,
    note: 'The table shows strong representation from TR-C and IEEE-TITS and a thematic shift toward connected/automated vehicles, control, and data-driven car following. Citation rankings are sensitive to publication age, database coverage, and field size.'
  },
  {
    title: 'Top countries by related-paper count',
    description: 'Countries contributing at least ten papers to the archived focused corpus. Mainland China, Hong Kong, and Taiwan were aggregated in the source table.',
    columns: ['Rank','Country','Relevant papers'], numeric: [0,2],
    rows: [[1,'China (mainland, Hong Kong and Taiwan)',159],[2,'United States',110],[3,'Australia',28],[4,'Germany',23],[5,'England',17],[5,'Netherlands',17],[6,'Italy',16],[7,'Sweden',11],[8,'Canada',10]],
    note: 'China and the United States dominate publication volume in the archived corpus. Values are full counts and do not normalize for population, research expenditure, or multi-country authorship.'
  },
  {
    title: 'Leading authors with at least five papers',
    description: 'Twenty-eight authors ranked by total publications (TP), with total citations (TC) and mean citations per paper (TC/TP). Affiliations reproduce the archived snapshot.',
    columns: ['TP rank','Author','Institute and country','TP','TC','TC/TP','TC/TP rank'], numeric: [0,3,4,5,6],
    rows: [
      [1,'Jiang R.','Beijing Jiaotong University, China',17,882,51.88,19], [2,'Treiber M.','Dresden University of Technology, Germany',14,1277,91.21,4],
      [3,'Zheng Z.','University of Queensland, Australia',13,832,64.00,14], [4,'Sun J.','Tongji University, China',12,302,25.17,24],
      [5,'Ran B.','University of Wisconsin-Madison, USA',10,302,30.20,22], [6,'Jia B.','Beijing Jiaotong University, China',9,597,66.33,12],
      [7,'Wang H.','Southeast University, China',8,562,70.25,9], [8,'Wang W.','Southeast University, China',8,553,69.13,11],
      [9,'Li Y.','Central South University, China',8,472,59.00,16], [10,'Van Arem B.','Delft University of Technology, Netherlands',7,485,69.29,10],
      [11,'Xing L.','Southeast University, China',7,449,64.14,13], [12,'Li X.','University of Wisconsin-Madison, USA',7,403,57.57,17],
      [13,'Kesting A.','Dresden University of Technology, Germany',6,889,148.17,2], [14,'Montanino M.','University of Naples Federico II, Italy',6,513,85.50,6],
      [15,'Punzo V.','University of Naples Federico II, Italy',6,513,85.50,7], [16,'Gao Z.','Beijing Jiaotong University, China',6,506,84.33,8],
      [17,'Kochenderfer M. J.','Stanford University, USA',6,381,63.50,15], [18,'Tian J.','Tianjin University, China',6,258,43.00,21],
      [19,'Stern R.','University of Minnesota, USA',6,90,15.00,26], [20,'Qu X.','Tsinghua University, China',5,741,148.20,1],
      [21,'Wang M.','Delft University of Technology, Netherlands',5,646,129.20,3], [22,'Zhang H. M.','University of California, Davis, USA',5,440,88.00,5],
      [23,'Bhaskar A.','Queensland University of Technology, Australia',5,279,55.80,18], [24,'Ciuffo B.','European Commission Joint Research Centre, Italy',5,229,45.80,20],
      [25,'Shi H.','University of Wisconsin-Madison, USA',5,139,27.80,23], [26,'Shang M.','University of Minnesota, USA',5,114,22.80,25],
      [27,'Tian Y.','Tongji University, China',5,63,12.60,27], [28,'Wang S.','University of Minnesota, USA',5,61,12.20,28]
    ],
    note: 'TP highlights sustained activity, whereas TC/TP can be driven by a small number of highly cited articles. Name disambiguation and affiliation changes are common bibliometric limitations, so these values should not be used as individual-performance scores.'
  },
  {
    title: 'Abbreviations used in the archived review',
    description: 'Abbreviations and full names used throughout the old systematic literature review.',
    columns: ['Abbreviation','Full name'], numeric: [],
    rows: [['ACC','Adaptive Cruise Control'],['CACC','Cooperative Adaptive Cruise Control'],['HV','Human-driven Vehicle'],['AV','Autonomous Vehicle'],['CV','Connected Vehicle'],['CAV','Connected and Autonomous Vehicle'],['RL','Reinforcement Learning'],['V2X','Vehicle to Everything'],['FF','Free Flow'],['CF','Car Following'],['MCMC','Markov Chain Monte Carlo'],['VANET','Vehicular Ad-hoc Network'],['VSL','Variable Speed Limits']],
    note: 'Terminology follows the archived manuscript. Some communities use variants such as "automated vehicle" for AV or distinguish connected automated vehicles from connected and autonomous vehicles.'
  }
];

function renderFigures() {
  const grid = document.querySelector('#figure-grid');
  figures.forEach((figure, index) => {
    const card = document.createElement('figure');
    card.className = `figure-card${figure.wide ? ' wide' : ''}`;
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'image-button';
    button.dataset.src = `figures/${figure.file}`; button.dataset.title = figure.title;
    const image = document.createElement('img');
    image.src = `figures/${figure.file}`; image.alt = figure.title; image.loading = index < 2 ? 'eager' : 'lazy';
    button.append(image);
    const caption = document.createElement('figcaption');
    caption.innerHTML = `<span class="figure-index">Figure ${index + 1}</span><h3>${figure.title}</h3><p>${figure.caption}</p><p class="interpretation"><strong>How to read it.</strong> ${figure.note}</p>`;
    card.append(button, caption); grid.append(card);
  });
}

function renderTable(table, index) {
  const card = document.createElement('article'); card.className = 'table-card';
  const heading = document.createElement('div'); heading.className = 'table-heading';
  heading.innerHTML = `<span class="figure-index">Table ${index + 1}</span><h3>${table.title}</h3><p>${table.description}</p>`;
  let input;
  if (table.filter) {
    const tools = document.createElement('div'); tools.className = 'table-tools';
    input = document.createElement('input'); input.type = 'search'; input.placeholder = 'Filter titles, authors, or journals...'; input.setAttribute('aria-label', `Filter ${table.title}`);
    tools.append(input); heading.append(tools);
  }
  const scroll = document.createElement('div'); scroll.className = 'table-scroll';
  const element = document.createElement('table');
  const thead = document.createElement('thead'); const headerRow = document.createElement('tr');
  table.columns.forEach(column => { const th = document.createElement('th'); th.scope = 'col'; th.textContent = column; headerRow.append(th); });
  thead.append(headerRow); element.append(thead);
  const tbody = document.createElement('tbody');
  const populate = (rows) => {
    tbody.replaceChildren();
    rows.forEach(row => {
      const tr = document.createElement('tr');
      row.forEach((value, columnIndex) => {
        const td = document.createElement('td'); td.textContent = value;
        if (table.numeric.includes(columnIndex)) td.className = 'numeric';
        tr.append(td);
      });
      tbody.append(tr);
    });
  };
  populate(table.rows); element.append(tbody); scroll.append(element);
  const note = document.createElement('p'); note.className = 'table-note'; note.innerHTML = `<strong>Interpretation and caveat.</strong> ${table.note}`;
  card.append(heading, scroll, note);
  if (input) input.addEventListener('input', () => { const query = input.value.trim().toLowerCase(); populate(table.rows.filter(row => row.join(' ').toLowerCase().includes(query))); });
  return card;
}

function setupLightbox() {
  const dialog = document.querySelector('#lightbox'); const image = dialog.querySelector('img'); const caption = dialog.querySelector('p');
  document.querySelectorAll('.image-button').forEach(button => button.addEventListener('click', () => {
    image.src = button.dataset.src; image.alt = button.dataset.title; caption.textContent = button.dataset.title; dialog.showModal();
  }));
  dialog.querySelector('.close-button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}

function setupMenu() {
  const button = document.querySelector('.menu-button'); const nav = document.querySelector('nav');
  button.addEventListener('click', () => { const open = nav.classList.toggle('open'); button.setAttribute('aria-expanded', String(open)); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); button.setAttribute('aria-expanded','false'); }));
}

renderFigures();
const list = document.querySelector('#table-list'); tables.forEach((table, index) => list.append(renderTable(table, index)));
setupLightbox(); setupMenu();

