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

{"from":" ","to":" ","value":15,"color":"#FFFFFF"},
{"from":"Ophiopsila hartmeyeri","to":"Ophiopsila hartmeyeri","value":0,"color":"#AC71B0"},
{"from":"Ophionereis olivacea","to":"Ophionereis olivacea","value":0,"color":"#AC71B0"},
{"from":"Ophiomastix wendtii","to":"Ophiomastix wendtii","value":0,"color":"#AC71B0"},
{"from":"Ophioderma cinereum","to":"Ophioderma cinereum","value":0,"color":"#AC71B0"},
{"from":"Ophiactis muelleri","to":"Ophiactis muelleri","value":0,"color":"#AC71B0"},
{"from":"Isostichopus badionotus","to":"Isostichopus badionotus","value":0,"color":"#AC71B0"},
{"from":"Amphipholis squamata","to":"Amphipholis squamata","value":0,"color":"#AC71B0"},
{"from":"Ophiothrix lineata","to":"Ophiothrix lineata","value":0,"color":"#AC71B0"},
{"from":"Ophiolepis impressa","to":"Ophiolepis impressa","value":0,"color":"#AC71B0"},
{"from":"Echinometra lucunter","to":"Echinometra lucunter","value":0,"color":"#AC71B0"},
{"from":"Ophiactis quinqueradia","to":"Ophiactis quinqueradia","value":0,"color":"#AC71B0"},
{"from":"Ophiothrix (Ophiothrix) angulata","to":"Ophiothrix (Ophiothrix) angulata","value":0,"color":"#AC71B0"},
{"from":"Ophiothrix (Acanthophiothrix) suensoni","to":"Ophiothrix (Acanthophiothrix) suensoni","value":0,"color":"#AC71B0"},
{"from":"Ophiocomella pumila","to":"Ophiocomella pumila","value":0,"color":"#AC71B0"},
{"from":"Ophiactis savignyi","to":"Ophiactis savignyi","value":0,"color":"#AC71B0"},
{"from":"Ophiothrix (Ophiothrix) oerstedii","to":"Ophiothrix (Ophiothrix) oerstedii","value":0,"color":"#AC71B0"},
{"from":"  ","to":"  ","value":8,"color":"#FFFFFF"},
{"from":"Haplosclerida","to":"Haplosclerida","value":4,"color":"#FFFFFF"},
{"from":"Callyspongia (Cladochalina) aculeata","to":"Callyspongia (Cladochalina) aculeata","value":0,"color":"#FBAF4F"},
{"from":"Niphates digitalis","to":"Niphates digitalis","value":0,"color":"#FBAF4F"},
{"from":"Callyspongia (Cladochalina) plicifera","to":"Callyspongia (Cladochalina) plicifera","value":0,"color":"#FBAF4F"},
{"from":"Callyspongia (Callyspongia) fallax","to":"Callyspongia (Callyspongia) fallax","value":0,"color":"#FBAF4F"},
{"from":"Amphimedon compressa","to":"Amphimedon compressa","value":0,"color":"#FBAF4F"},
{"from":"Haliclona (Haliclona) oculata","to":"Haliclona (Haliclona) oculata","value":0,"color":"#FBAF4F"},
{"from":"Neopetrosia rosariensis","to":"Neopetrosia rosariensis","value":0,"color":"#FBAF4F"},
{"from":"Niphates erecta","to":"Niphates erecta","value":0,"color":"#FBAF4F"},
{"from":"Verongiida","to":"Verongiida","value":2.5,"color":"#FFFFFF"},
{"from":"Aiolochroia crassa","to":"Aiolochroia crassa","value":0,"color":"#A570AF"},
{"from":"Aplysina archeri","to":"Aplysina archeri","value":0,"color":"#A570AF"},
{"from":"Aplysina cauliformis","to":"Aplysina cauliformis","value":0,"color":"#A570AF"},
{"from":"Aplysina fulva","to":"Aplysina fulva","value":0,"color":"#A570AF"},
{"from":"Aplysina lacunosa","to":"Aplysina lacunosa","value":0,"color":"#A570AF"},
{"from":"Dictyoceratida","to":"Dictyoceratida","value":1.5,"color":"#FFFFFF"},
{"from":"Ircinia strobilina","to":"Ircinia strobilina","value":0,"color":"#F37941"},
{"from":"Ircinia felix","to":"Ircinia felix","value":0,"color":"#F37941"},
{"from":"Ircinia campana","to":"Ircinia campana","value":0,"color":"#F37941"},
{"from":"Axinellida","to":"Axinellida","value":.5,"color":"#FFFFFF"},
{"from":"Dragmacidon lunaecharta","to":"Dragmacidon lunaecharta","value":0,"color":"#849DB0"},
{"from":"Poecilosclerida","to":"Poecilosclerida","value":.5,"color":"#FFFFFF"},
{"from":"Iotrochota birotulata","to":"Iotrochota birotulata","value":0,"color":"#B66353"},
{"from":"Amphipholis squamata","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Echinometra lucunter","to":"Ircinia felix","value":1},
{"from":"Echinometra lucunter","to":"Ircinia strobilina","value":1},
{"from":"Isostichopus badionotus","to":"Ircinia strobilina","value":1},
{"from":"Ophiactis muelleri","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Ophiactis quinqueradia","to":"Callyspongia (Callyspongia) fallax","value":1},
{"from":"Ophiactis quinqueradia","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Ophiactis quinqueradia","to":"Ircinia strobilina","value":1},
{"from":"Ophiactis savignyi","to":"Amphimedon compressa","value":1},
{"from":"Ophiactis savignyi","to":"Aplysina lacunosa","value":1},
{"from":"Ophiactis savignyi","to":"Callyspongia (Callyspongia) fallax","value":1},
{"from":"Ophiactis savignyi","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Ophiactis savignyi","to":"Dragmacidon lunaecharta","value":1},
{"from":"Ophiactis savignyi","to":"Ircinia felix","value":1},
{"from":"Ophiactis savignyi","to":"Ircinia strobilina","value":1},
{"from":"Ophiocomella pumila","to":"Aiolochroia crassa","value":1},
{"from":"Ophiocomella pumila","to":"Amphimedon compressa","value":1},
{"from":"Ophiocomella pumila","to":"Callyspongia (Callyspongia) fallax","value":1},
{"from":"Ophiocomella pumila","to":"Dragmacidon lunaecharta","value":1},
{"from":"Ophiocomella pumila","to":"Ircinia felix","value":1},
{"from":"Ophiocomella pumila","to":"Ircinia strobilina","value":1},
{"from":"Ophioderma cinereum","to":"Ircinia strobilina","value":1},
{"from":"Ophiolepis impressa","to":"Ircinia felix","value":1},
{"from":"Ophiolepis impressa","to":"Ircinia strobilina","value":1},
{"from":"Ophiomastix wendtii","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Ophionereis olivacea","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Ophiopsila hartmeyeri","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Ophiothrix (Acanthophiothrix) suensoni","to":"Aplysina archeri","value":1},
{"from":"Ophiothrix (Acanthophiothrix) suensoni","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Ophiothrix (Acanthophiothrix) suensoni","to":"Callyspongia (Cladochalina) plicifera","value":1},
{"from":"Ophiothrix (Acanthophiothrix) suensoni","to":"Niphates digitalis","value":1},
{"from":"Ophiothrix (Ophiothrix) angulata","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Ophiothrix (Ophiothrix) angulata","to":"Haliclona (Haliclona) oculata","value":1},
{"from":"Ophiothrix (Ophiothrix) angulata","to":"Ircinia campana","value":1},
{"from":"Ophiothrix (Ophiothrix) angulata","to":"Niphates digitalis","value":1},
{"from":"Ophiothrix (Ophiothrix) oerstedii","to":"Aplysina cauliformis","value":1},
{"from":"Ophiothrix (Ophiothrix) oerstedii","to":"Aplysina fulva","value":1},
{"from":"Ophiothrix (Ophiothrix) oerstedii","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Ophiothrix (Ophiothrix) oerstedii","to":"Callyspongia (Cladochalina) plicifera","value":1},
{"from":"Ophiothrix (Ophiothrix) oerstedii","to":"Iotrochota birotulata","value":1},
{"from":"Ophiothrix (Ophiothrix) oerstedii","to":"Neopetrosia rosariensis","value":1},
{"from":"Ophiothrix (Ophiothrix) oerstedii","to":"Niphates digitalis","value":1},
{"from":"Ophiothrix (Ophiothrix) oerstedii","to":"Niphates erecta","value":1},
{"from":"Ophiothrix lineata","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Ophiothrix lineata","to":"Niphates digitalis","value":1}








]



chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 1;
chart.minNodeSize = 0.001;
chart.startAngle = 65;
chart.endAngle = chart.startAngle + 360;
chart.fontSize = 12;



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
