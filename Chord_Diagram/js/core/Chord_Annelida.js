/**
 * --------------------------------------------------------
 * This demo was created using amCharts V4 preview release./**
 * --------------------------------------------------------
 * This demo was created using amCharts V4 preview release.
 * 
 * V4 is the latest installement in amCharts data viz
 * library family, to be released in the first half of
 * 2018.
 *
 * For more information and documentation visit:
 * https://www.amcharts.com/docs/v4/
 * --------------------------------------------------------
 */


am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4charts.ChordDiagram);


// colors of main characters
chart.colors.saturation = 0.40;
chart.colors.step = 0;
var colors = {}



chart.data = [
// node property fields take data from data items where they are first mentioned, that's 
// why we add empty data items at the beginning and set colors here

// real data

{"from":"  ","to":"  ","value":50,"color":"#FFFFFF"},
{"from":"Trypanosyllis zebra","to":"Trypanosyllis zebra","value":0,"color":"#9F3721"},
{"from":"Trypanosyllis vittigera","to":"Trypanosyllis vittigera","value":0,"color":"#9F3721"},
{"from":"Trypanosyllis sp.","to":"Trypanosyllis sp.","value":0,"color":"#9F3721"},
{"from":"Syllis variegata","to":"Syllis variegata","value":0,"color":"#9F3721"},
{"from":"Syllis sp.","to":"Syllis sp.","value":0,"color":"#9F3721"},
{"from":"Syllis gracilis","to":"Syllis gracilis","value":0,"color":"#9F3721"},
{"from":"Syllis armillaris","to":"Syllis armillaris","value":0,"color":"#9F3721"},
{"from":"Semiodera inflata","to":"Semiodera inflata","value":0,"color":"#9F3721"},
{"from":"Scionides sp.","to":"Scionides sp.","value":0,"color":"#9F3721"},
{"from":"Pterocirrus macroceros","to":"Pterocirrus macroceros","value":0,"color":"#9F3721"},
{"from":"Pseudopotamilla sp.","to":"Pseudopotamilla sp.","value":0,"color":"#9F3721"},
{"from":"Polydora colonia","to":"Polydora colonia","value":0,"color":"#9F3721"},
{"from":"Phyllodoce sp.","to":"Phyllodoce sp.","value":0,"color":"#9F3721"},
{"from":"Phyllodoce madeirensis","to":"Phyllodoce madeirensis","value":0,"color":"#9F3721"},
{"from":"Panousea africana","to":"Panousea africana","value":0,"color":"#9F3721"},
{"from":"Odontosyllis enopla","to":"Odontosyllis enopla","value":0,"color":"#9F3721"},
{"from":"Notomastus latericeus","to":"Notomastus latericeus","value":0,"color":"#9F3721"},
{"from":"Nereis sp.","to":"Nereis sp.","value":0,"color":"#9F3721"},
{"from":"Nereiphylla fragilis","to":"Nereiphylla fragilis","value":0,"color":"#9F3721"},
{"from":"Lepidonotus variabilis","to":"Lepidonotus variabilis","value":0,"color":"#9F3721"},
{"from":"Lepidametria commensalis","to":"Lepidametria commensalis","value":0,"color":"#9F3721"},
{"from":"Inermosyllis curacaoensis","to":"Inermosyllis curacaoensis","value":0,"color":"#9F3721"},
{"from":"Hydroides parva","to":"Hydroides parva","value":0,"color":"#9F3721"},
{"from":"Hermodice carunculata","to":"Hermodice carunculata","value":0,"color":"#9F3721"},
{"from":"Haplosyllis niphatesicola","to":"Haplosyllis niphatesicola","value":0,"color":"#9F3721"},
{"from":"Haplosyllis navasi","to":"Haplosyllis navasi","value":0,"color":"#9F3721"},
{"from":"Haplosyllis chaetafusorata","to":"Haplosyllis chaetafusorata","value":0,"color":"#9F3721"},
{"from":"Haplosyllis cephalata","to":"Haplosyllis cephalata","value":0,"color":"#9F3721"},
{"from":"Haplosyllis agelas","to":"Haplosyllis agelas","value":0,"color":"#9F3721"},
{"from":"Exogone dispar","to":"Exogone dispar","value":0,"color":"#9F3721"},
{"from":"Eunoe sp.","to":"Eunoe sp.","value":0,"color":"#9F3721"},
{"from":"Dorvillea sp.","to":"Dorvillea sp.","value":0,"color":"#9F3721"},
{"from":"Dorvillea sociabilis","to":"Dorvillea sociabilis","value":0,"color":"#9F3721"},
{"from":"Diopatra cuprea","to":"Diopatra cuprea","value":0,"color":"#9F3721"},
{"from":"Chrysopetalum occidentale","to":"Chrysopetalum occidentale","value":0,"color":"#9F3721"},
{"from":"Chone infundibuliformis","to":"Chone infundibuliformis","value":0,"color":"#9F3721"},
{"from":"Ceratonereis (Composetia) irritabilis","to":"Ceratonereis (Composetia) irritabilis","value":0,"color":"#9F3721"},
{"from":"Amphitrite rubra","to":"Amphitrite rubra","value":0,"color":"#9F3721"},
{"from":"Alitta succinea","to":"Alitta succinea","value":0,"color":"#9F3721"},
{"from":"Acromegalomma lobiferum","to":"Acromegalomma lobiferum","value":0,"color":"#9F3721"},
{"from":"Thormora sp.","to":"Thormora sp.","value":0,"color":"#9F3721"},
{"from":"Terebella rubra","to":"Terebella rubra","value":0,"color":"#9F3721"},
{"from":"Polycirrus sp.","to":"Polycirrus sp.","value":0,"color":"#9F3721"},
{"from":"Megalomma sp.","to":"Megalomma sp.","value":0,"color":"#9F3721"},
{"from":"Marphysa regalis","to":"Marphysa regalis","value":0,"color":"#9F3721"},
{"from":"Lumbrineris sp.","to":"Lumbrineris sp.","value":0,"color":"#9F3721"},
{"from":"Litocorsa antennata","to":"Litocorsa antennata","value":0,"color":"#9F3721"},
{"from":"Leodice rubra","to":"Leodice rubra","value":0,"color":"#9F3721"},
{"from":"Laeonereis culveri","to":"Laeonereis culveri","value":0,"color":"#9F3721"},
{"from":"Eurythoe complanata","to":"Eurythoe complanata","value":0,"color":"#9F3721"},
{"from":"Eunice sp.","to":"Eunice sp.","value":0,"color":"#9F3721"},
{"from":"Nicidion longula","to":"Nicidion longula","value":0,"color":"#9F3721"},
{"from":"Lysidice ninetta","to":"Lysidice ninetta","value":0,"color":"#9F3721"},
{"from":"Lumbrineris coccinea","to":"Lumbrineris coccinea","value":0,"color":"#9F3721"},
{"from":"Eupolymnia nebulosa","to":"Eupolymnia nebulosa","value":0,"color":"#9F3721"},
{"from":"Dipolydora socialis","to":"Dipolydora socialis","value":0,"color":"#9F3721"},
{"from":"Oxydromus obscurus","to":"Oxydromus obscurus","value":0,"color":"#9F3721"},
{"from":"Oenone fulgida","to":"Oenone fulgida","value":0,"color":"#9F3721"},
{"from":"Branchiosyllis oculata","to":"Branchiosyllis oculata","value":0,"color":"#9F3721"},
{"from":"Syllis alternata","to":"Syllis alternata","value":0,"color":"#9F3721"},
{"from":"Spirobranchus giganteus","to":"Spirobranchus giganteus","value":0,"color":"#9F3721"},
{"from":"Nereis splendida","to":"Nereis splendida","value":0,"color":"#9F3721"},
{"from":"Podarke sp.","to":"Podarke sp.","value":0,"color":"#9F3721"},
{"from":"Loimia medusa","to":"Loimia medusa","value":0,"color":"#9F3721"},
{"from":"Haplosyllis aplysinicola","to":"Haplosyllis aplysinicola","value":0,"color":"#9F3721"},
{"from":"Haplosyllis spongicola","to":"Haplosyllis spongicola","value":0,"color":"#9F3721"},
{"from":" ","to":" ","value":50,"color":"#FFFFFF"},
{"from":"Verongiida","to":"Verongiida","value":4.5,"color":"#FFFFFF"},
{"from":"Aplysina fistularis","to":"Aplysina fistularis","value":0,"color":"#A570AF"},
{"from":"Aiolochroia crassa","to":"Aiolochroia crassa","value":0,"color":"#A570AF"},
{"from":"Aplysina fulva","to":"Aplysina fulva","value":0,"color":"#A570AF"},
{"from":"Aplysina insularis","to":"Aplysina insularis","value":0,"color":"#A570AF"},
{"from":"Aplysina lacunosa","to":"Aplysina lacunosa","value":0,"color":"#A570AF"},
{"from":"Aplysina bathyphila","to":"Aplysina bathyphila","value":0,"color":"#A570AF"},
{"from":"Aplysina cauliformis","to":"Aplysina cauliformis","value":0,"color":"#A570AF"},
{"from":"Verongula rigida","to":"Verongula rigida","value":0,"color":"#A570AF"},
{"from":"Haplosclerida","to":"Haplosclerida","value":3,"color":"#FFFFFF"},
{"from":"Callyspongia (Callyspongia) fallax","to":"Callyspongia (Callyspongia) fallax","value":0,"color":"#FBAF4F"},
{"from":"Amphimedon compressa","to":"Amphimedon compressa","value":0,"color":"#FBAF4F"},
{"from":"Amphimedon viridis","to":"Amphimedon viridis","value":0,"color":"#FBAF4F"},
{"from":"Callyspongia (Cladochalina) aculeata","to":"Callyspongia (Cladochalina) aculeata","value":0,"color":"#FBAF4F"},
{"from":"Haliclona (Haliclona) oculata","to":"Haliclona (Haliclona) oculata","value":0,"color":"#FBAF4F"},
{"from":"Niphates erecta","to":"Niphates erecta","value":0,"color":"#FBAF4F"},
{"from":"Dictyoceratida","to":"Dictyoceratida","value":2,"color":"#FFFFFF"},
{"from":"Ircinia strobilina","to":"Ircinia strobilina","value":0,"color":"#F37941"},
{"from":"Ircinia felix","to":"Ircinia felix","value":0,"color":"#F37941"},
{"from":"Ircinia campana","to":"Ircinia campana","value":0,"color":"#F37941"},
{"from":"Ircinia ramosa","to":"Ircinia ramosa","value":0,"color":"#F37941"},
{"from":"Poecilosclerida","to":"Poecilosclerida","value":2,"color":"#FFFFFF"},
{"from":"Lissodendoryx (Anomodoryx) sigmata","to":"Lissodendoryx (Anomodoryx) sigmata","value":0,"color":"#B66353"},
{"from":"Desmapsamma anchorata","to":"Desmapsamma anchorata","value":0,"color":"#B66353"},
{"from":"Monanchora arbuscula","to":"Monanchora arbuscula","value":0,"color":"#B66353"},
{"from":"Tedania (Tedania) ignis","to":"Tedania (Tedania) ignis","value":0,"color":"#B66353"},
{"from":"Axinellida","to":"Axinellida","value":.5,"color":"#FFFFFF"},
{"from":"Dragmacidon lunaecharta","to":"Dragmacidon lunaecharta","value":0,"color":"#849DB0"},
{"from":"Tetractinellida","to":"Tetractinellida","value":.5,"color":"#FFFFFF"},
{"from":"Geodia gibberosa","to":"Geodia gibberosa","value":0,"color":"#7E756D"},
{"from":"Clionaida","to":"Clionaida","value":.5,"color":"#FFFFFF"},
{"from":"Spheciospongia vesparium","to":"Spheciospongia vesparium","value":0,"color":"#638B66"},
{"from":"Biemnida","to":"Biemnida","value":.5,"color":"#FFFFFF"},
{"from":"Neofibularia nolitangere","to":"Neofibularia nolitangere","value":0,"color":"#A1CDA9"},
{"from":"Agelasida","to":"Agelasida","value":.5,"color":"#FFFFFF"},
{"from":"Agelas dispar","to":"Agelas dispar","value":0,"color":"#4F6980"},
{"from":"Acromegalomma lobiferum","to":"Ircinia campana","value":1},
{"from":"Alitta succinea","to":"Ircinia campana","value":1},
{"from":"Amphitrite rubra","to":"Ircinia felix","value":1},
{"from":"Branchiosyllis oculata","to":"Aplysina fistularis","value":1},
{"from":"Branchiosyllis oculata","to":"Ircinia felix","value":1},
{"from":"Branchiosyllis oculata","to":"Ircinia strobilina","value":1},
{"from":"Branchiosyllis oculata","to":"Spheciospongia vesparium","value":1},
{"from":"Ceratonereis (Composetia) irritabilis","to":"Ircinia campana","value":1},
{"from":"Chone infundibuliformis","to":"Ircinia campana","value":1},
{"from":"Chrysopetalum occidentale","to":"Dragmacidon lunaecharta","value":1},
{"from":"Diopatra cuprea","to":"Amphimedon viridis","value":1},
{"from":"Dipolydora socialis","to":"Ircinia campana","value":1},
{"from":"Dipolydora socialis","to":"Ircinia ramosa","value":1},
{"from":"Dipolydora socialis","to":"Lissodendoryx (Anomodoryx) sigmata","value":1},
{"from":"Dorvillea sociabilis","to":"Ircinia campana","value":1},
{"from":"Dorvillea sp.","to":"Dragmacidon lunaecharta","value":1},
{"from":"Eunice sp.","to":"Ircinia felix","value":1},
{"from":"Eunice sp.","to":"Ircinia strobilina","value":1},
{"from":"Eunoe sp.","to":"Ircinia strobilina","value":1},
{"from":"Eupolymnia nebulosa","to":"Aplysina fistularis","value":1},
{"from":"Eupolymnia nebulosa","to":"Ircinia felix","value":1},
{"from":"Eupolymnia nebulosa","to":"Ircinia strobilina","value":1},
{"from":"Eurythoe complanata","to":"Callyspongia (Callyspongia) fallax","value":1},
{"from":"Eurythoe complanata","to":"Ircinia strobilina","value":1},
{"from":"Exogone dispar","to":"Ircinia campana","value":1},
{"from":"Haplosyllis agelas","to":"Agelas dispar","value":1},
{"from":"Haplosyllis aplysinicola","to":"Aplysina bathyphila","value":1},
{"from":"Haplosyllis aplysinicola","to":"Aplysina cauliformis","value":1},
{"from":"Haplosyllis aplysinicola","to":"Aplysina fistularis","value":1},
{"from":"Haplosyllis aplysinicola","to":"Aplysina fulva","value":1},
{"from":"Haplosyllis aplysinicola","to":"Aplysina insularis","value":1},
{"from":"Haplosyllis aplysinicola","to":"Aplysina lacunosa","value":1},
{"from":"Haplosyllis cephalata","to":"Ircinia campana","value":1},
{"from":"Haplosyllis chaetafusorata","to":"Verongula rigida","value":1},
{"from":"Haplosyllis navasi","to":"Ircinia strobilina","value":1},
{"from":"Haplosyllis niphatesicola","to":"Niphates erecta","value":1},
{"from":"Haplosyllis spongicola","to":"Amphimedon compressa","value":1},
{"from":"Haplosyllis spongicola","to":"Aplysina fistularis","value":1},
{"from":"Haplosyllis spongicola","to":"Dragmacidon lunaecharta","value":1},
{"from":"Haplosyllis spongicola","to":"Geodia gibberosa","value":1},
{"from":"Haplosyllis spongicola","to":"Haliclona (Haliclona) oculata","value":1},
{"from":"Haplosyllis spongicola","to":"Ircinia campana","value":1},
{"from":"Haplosyllis spongicola","to":"Ircinia felix","value":1},
{"from":"Haplosyllis spongicola","to":"Ircinia ramosa","value":1},
{"from":"Haplosyllis spongicola","to":"Lissodendoryx (Anomodoryx) sigmata","value":1},
{"from":"Hermodice carunculata","to":"Ircinia felix","value":1},
{"from":"Hydroides parva","to":"Ircinia felix","value":1},
{"from":"Inermosyllis curacaoensis","to":"Ircinia strobilina","value":1},
{"from":"Laeonereis culveri","to":"Geodia gibberosa","value":1},
{"from":"Laeonereis culveri","to":"Ircinia campana","value":1},
{"from":"Leodice rubra","to":"Geodia gibberosa","value":1},
{"from":"Leodice rubra","to":"Lissodendoryx (Anomodoryx) sigmata","value":1},
{"from":"Lepidametria commensalis","to":"Ircinia campana","value":1},
{"from":"Lepidonotus variabilis","to":"Ircinia campana","value":1},
{"from":"Litocorsa antennata","to":"Ircinia felix","value":1},
{"from":"Litocorsa antennata","to":"Ircinia strobilina","value":1},
{"from":"Loimia medusa","to":"Aplysina fistularis","value":1},
{"from":"Loimia medusa","to":"Callyspongia (Callyspongia) fallax","value":1},
{"from":"Loimia medusa","to":"Dragmacidon lunaecharta","value":1},
{"from":"Loimia medusa","to":"Ircinia campana","value":1},
{"from":"Loimia medusa","to":"Ircinia felix","value":1},
{"from":"Loimia medusa","to":"Ircinia strobilina","value":1},
{"from":"Lumbrineris coccinea","to":"Geodia gibberosa","value":1},
{"from":"Lumbrineris coccinea","to":"Ircinia campana","value":1},
{"from":"Lumbrineris coccinea","to":"Lissodendoryx (Anomodoryx) sigmata","value":1},
{"from":"Lumbrineris sp.","to":"Ircinia felix","value":1},
{"from":"Lumbrineris sp.","to":"Ircinia strobilina","value":1},
{"from":"Lysidice ninetta","to":"Ircinia campana","value":1},
{"from":"Lysidice ninetta","to":"Ircinia felix","value":1},
{"from":"Lysidice ninetta","to":"Ircinia strobilina","value":1},
{"from":"Marphysa regalis","to":"Geodia gibberosa","value":1},
{"from":"Marphysa regalis","to":"Lissodendoryx (Anomodoryx) sigmata","value":1},
{"from":"Megalomma sp.","to":"Ircinia felix","value":1},
{"from":"Megalomma sp.","to":"Ircinia strobilina","value":1},
{"from":"Nereiphylla fragilis","to":"Ircinia campana","value":1},
{"from":"Nereis sp.","to":"Ircinia strobilina","value":1},
{"from":"Nereis splendida","to":"Aiolochroia crassa","value":1},
{"from":"Nereis splendida","to":"Callyspongia (Callyspongia) fallax","value":1},
{"from":"Nereis splendida","to":"Dragmacidon lunaecharta","value":1},
{"from":"Nereis splendida","to":"Ircinia felix","value":1},
{"from":"Nereis splendida","to":"Ircinia strobilina","value":1},
{"from":"Nicidion longula","to":"Geodia gibberosa","value":1},
{"from":"Nicidion longula","to":"Ircinia campana","value":1},
{"from":"Nicidion longula","to":"Lissodendoryx (Anomodoryx) sigmata","value":1},
{"from":"Notomastus latericeus","to":"Ircinia campana","value":1},
{"from":"Odontosyllis enopla","to":"Dragmacidon lunaecharta","value":1},
{"from":"Oenone fulgida","to":"Ircinia campana","value":1},
{"from":"Oenone fulgida","to":"Ircinia felix","value":1},
{"from":"Oenone fulgida","to":"Ircinia ramosa","value":1},
{"from":"Oenone fulgida","to":"Ircinia strobilina","value":1},
{"from":"Oxydromus obscurus","to":"Dragmacidon lunaecharta","value":1},
{"from":"Oxydromus obscurus","to":"Geodia gibberosa","value":1},
{"from":"Oxydromus obscurus","to":"Ircinia campana","value":1},
{"from":"Oxydromus obscurus","to":"Ircinia strobilina","value":1},
{"from":"Panousea africana","to":"Ircinia felix","value":1},
{"from":"Phyllodoce madeirensis","to":"Ircinia strobilina","value":1},
{"from":"Phyllodoce sp.","to":"Ircinia strobilina","value":1},
{"from":"Podarke sp.","to":"Aiolochroia crassa","value":1},
{"from":"Podarke sp.","to":"Amphimedon compressa","value":1},
{"from":"Podarke sp.","to":"Aplysina fistularis","value":1},
{"from":"Podarke sp.","to":"Dragmacidon lunaecharta","value":1},
{"from":"Podarke sp.","to":"Ircinia felix","value":1},
{"from":"Podarke sp.","to":"Ircinia strobilina","value":1},
{"from":"Polycirrus sp.","to":"Ircinia felix","value":1},
{"from":"Polycirrus sp.","to":"Ircinia strobilina","value":1},
{"from":"Polydora colonia","to":"Tedania (Tedania) ignis","value":1},
{"from":"Pseudopotamilla sp.","to":"Ircinia strobilina","value":1},
{"from":"Pterocirrus macroceros","to":"Dragmacidon lunaecharta","value":1},
{"from":"Scionides sp.","to":"Aiolochroia crassa","value":1},
{"from":"Semiodera inflata","to":"Ircinia strobilina","value":1},
{"from":"Spirobranchus giganteus","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Spirobranchus giganteus","to":"Desmapsamma anchorata","value":1},
{"from":"Spirobranchus giganteus","to":"Ircinia felix","value":1},
{"from":"Spirobranchus giganteus","to":"Monanchora arbuscula","value":1},
{"from":"Spirobranchus giganteus","to":"Neofibularia nolitangere","value":1},
{"from":"Syllis alternata","to":"Aplysina fistularis","value":1},
{"from":"Syllis alternata","to":"Callyspongia (Callyspongia) fallax","value":1},
{"from":"Syllis alternata","to":"Dragmacidon lunaecharta","value":1},
{"from":"Syllis alternata","to":"Ircinia felix","value":1},
{"from":"Syllis alternata","to":"Ircinia strobilina","value":1},
{"from":"Syllis armillaris","to":"Ircinia strobilina","value":1},
{"from":"Syllis gracilis","to":"Ircinia felix","value":1},
{"from":"Syllis sp.","to":"Dragmacidon lunaecharta","value":1},
{"from":"Syllis variegata","to":"Ircinia campana","value":1},
{"from":"Terebella rubra","to":"Ircinia ramosa","value":1},
{"from":"Terebella rubra","to":"Lissodendoryx (Anomodoryx) sigmata","value":1},
{"from":"Thormora sp.","to":"Ircinia felix","value":1},
{"from":"Thormora sp.","to":"Ircinia strobilina","value":1},
{"from":"Trypanosyllis sp.","to":"Ircinia strobilina","value":1},
{"from":"Trypanosyllis vittigera","to":"Dragmacidon lunaecharta","value":1},
{"from":"Trypanosyllis zebra","to":"Ircinia felix","value":1}








]



chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 1;
chart.minNodeSize = 0.001;
chart.startAngle = 60;
chart.endAngle = chart.startAngle + 360;
chart.fontSize = 10;



var nodeTemplate = chart.nodes.template;
// nodeTemplate.readerTitle = "Click to show/hide nodes";
nodeTemplate.showTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{from}->{total}";
nodeTemplate.draggable= false;
nodeTemplate.clickable=false;


// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function(event) {    
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })

    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    }) 

    node.label.isHover = true;   
})


// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function(event) {
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {        
        if(dataItem.toNode){
            dataItem.link.isHover = false;                
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
           dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.relativeRotation = 90;
label.fillOpacity = 0.5;
let labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;
nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// this adapter makes non-main character nodes to be filled with color of the main character which he/she kissed most

  

// link template 
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.75;
//linkTemplate.tooltipText = "{fromTotal} guest of {value}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = .9;
hoverState.properties.strokeOpacity = 1;






// data credit label
var creditLabel = chart.chartContainer.createChild(am4core.TextLink);
creditLabel.text = "Data source Pérez-Botello & Simões, 2019";
creditLabel.url = "https://zenodo.org/record/3333023";
creditLabel.y = am4core.percent(99);
creditLabel.x = am4core.percent(99);
creditLabel.horizontalCenter = "right";
creditLabel.verticalCenter = "bottom";
creditLabel.fontSize= "12px"; 


            chart.exporting.menu = new am4core.ExportMenu();
            chart.exporting.menu.items = [{
                "label": "...",
                "menu": [
                    {
                        "label": "Imagen",
                        "menu": [
                            { "type": "svg", "label": "SVG" },
                            { "type": "png", "label": "PNG" },
                            { "type": "jpg", "label": "JPG" },
                            { "type": "gif", "label": "GIF" },
                            { "type": "pdf", "label": "PDF" }
                        ]
                    }, 
                    {
                        "label": "Imprimir", "type": "print"
                    }
                ]
            }];
