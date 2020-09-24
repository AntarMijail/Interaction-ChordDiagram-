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
{"from":"Actiniaria sp.","to":"Actiniaria sp.","value":0,"color":"#DFCC87"},
{"from":"Bergia cutressi","to":"Bergia cutressi","value":0,"color":"#DFCC87"},
{"from":"Bergia puertoricense","to":"Bergia puertoricense","value":0,"color":"#DFCC87"},
{"from":"Bergia catenularis","to":"Bergia catenularis","value":0,"color":"#DFCC87"},
{"from":"Parazoanthus swiftii","to":"Parazoanthus swiftii","value":0,"color":"#DFCC87"},
{"from":"Umimayanthus parasiticus","to":"Umimayanthus parasiticus","value":0,"color":"#DFCC87"},
{"from":"  ","to":"  ","value":5,"color":"#FFFFFF"},
{"from":"Haplosclerida","to":"Haplosclerida","value":7,"color":"#FFFFFF"},
{"from":"Callyspongia (Cladochalina) aculeata","to":"Callyspongia (Cladochalina) aculeata","value":0,"color":"#FBAF4F"},
{"from":"Neopetrosia proxima","to":"Neopetrosia proxima","value":0,"color":"#FBAF4F"},
{"from":"Niphates erecta","to":"Niphates erecta","value":0,"color":"#FBAF4F"},
{"from":"Cribrochalina vasculum","to":"Cribrochalina vasculum","value":0,"color":"#FBAF4F"},
{"from":"Neopetrosia rosariensis","to":"Neopetrosia rosariensis","value":0,"color":"#FBAF4F"},
{"from":"Neopetrosia subtriangularis","to":"Neopetrosia subtriangularis","value":0,"color":"#FBAF4F"},
{"from":"Niphates digitalis","to":"Niphates digitalis","value":0,"color":"#FBAF4F"},
{"from":"Xestospongia muta","to":"Xestospongia muta","value":0,"color":"#FBAF4F"},
{"from":"Cribrochalina dura","to":"Cribrochalina dura","value":0,"color":"#FBAF4F"},
{"from":"Petrosia (Petrosia) pellasarca","to":"Petrosia (Petrosia) pellasarca","value":0,"color":"#FBAF4F"},
{"from":"Petrosia sp.","to":"Petrosia sp.","value":0,"color":"#FBAF4F"},
{"from":"Callyspongia (Cladochalina) armigera","to":"Callyspongia (Cladochalina) armigera","value":0,"color":"#FBAF4F"},
{"from":"Gelliodes ramosa","to":"Gelliodes ramosa","value":0,"color":"#FBAF4F"},
{"from":"Niphates caycedoi","to":"Niphates caycedoi","value":0,"color":"#FBAF4F"},
{"from":"Clionaida","to":"Clionaida","value":3.5,"color":"#FFFFFF"},
{"from":"Cliona aprica","to":"Cliona aprica","value":0,"color":"#638B66"},
{"from":"Cliona caribbaea","to":"Cliona caribbaea","value":0,"color":"#638B66"},
{"from":"Cliona delitrix","to":"Cliona delitrix","value":0,"color":"#638B66"},
{"from":"Cliona varians","to":"Cliona varians","value":0,"color":"#638B66"},
{"from":"Cliona vermifera","to":"Cliona vermifera","value":0,"color":"#638B66"},
{"from":"Spirastrella coccinea","to":"Spirastrella coccinea","value":0,"color":"#638B66"},
{"from":"Spirastrella sp.","to":"Spirastrella sp.","value":0,"color":"#638B66"},
{"from":"Agelasida","to":"Agelasida","value":2.5,"color":"#FFFFFF"},
{"from":"Agelas conifera","to":"Agelas conifera","value":0,"color":"#4F6980"},
{"from":"Agelas dispar","to":"Agelas dispar","value":0,"color":"#4F6980"},
{"from":"Agelas clathrodes","to":"Agelas clathrodes","value":0,"color":"#4F6980"},
{"from":"Agelas sceptrum","to":"Agelas sceptrum","value":0,"color":"#4F6980"},
{"from":"Agelas sventres","to":"Agelas sventres","value":0,"color":"#4F6980"},
{"from":"Poecilosclerida","to":"Poecilosclerida","value":2,"color":"#FFFFFF"},
{"from":"Iotrochota birotulata","to":"Iotrochota birotulata","value":0,"color":"#B66353"},
{"from":"Desmapsamma anchorata","to":"Desmapsamma anchorata","value":0,"color":"#B66353"},
{"from":"Clathria (Thalysias) curacaoensis","to":"Clathria (Thalysias) curacaoensis","value":0,"color":"#B66353"},
{"from":"Tedania (Tedania) ignis","to":"Tedania (Tedania) ignis","value":0,"color":"#B66353"},
{"from":"Suberitida","to":"Suberitida","value":1,"color":"#FFFFFF"},
{"from":"Topsentia ophiraphidites","to":"Topsentia ophiraphidites","value":0,"color":"#7E756D"},
{"from":"Topsentia sp.","to":"Topsentia sp.","value":0,"color":"#7E756D"},
{"from":"Axinellida","to":"Axinellida","value":1,"color":"#FFFFFF"},
{"from":"Ectyoplasia ferox","to":"Ectyoplasia ferox","value":0,"color":"#849DB0"},
{"from":"Ptilocaulis walpersii","to":"Ptilocaulis walpersii","value":0,"color":"#849DB0"},
{"from":"Scopalinida","to":"Scopalinida","value":.5,"color":"#FFFFFF"},
{"from":"Svenzea zeai","to":"Svenzea zeai","value":0,"color":"#D6CE9F"},
{"from":"Dictyoceratida","to":"Dictyoceratida","value":.5,"color":"#FFFFFF"},
{"from":"Ircinia campana","to":"Ircinia campana","value":0,"color":"#F37941"},
{"from":"Actiniaria sp.","to":"Ircinia campana","value":1},
{"from":"Bergia catenularis","to":"Cribrochalina dura","value":1},
{"from":"Bergia catenularis","to":"Cribrochalina vasculum","value":1},
{"from":"Bergia catenularis","to":"Neopetrosia proxima","value":1},
{"from":"Bergia catenularis","to":"Neopetrosia rosariensis","value":1},
{"from":"Bergia catenularis","to":"Neopetrosia subtriangularis","value":1},
{"from":"Bergia catenularis","to":"Petrosia (Petrosia) pellasarca","value":1},
{"from":"Bergia catenularis","to":"Petrosia sp.","value":1},
{"from":"Bergia catenularis","to":"Xestospongia muta","value":1},
{"from":"Bergia cutressi","to":"Cribrochalina dura","value":1},
{"from":"Bergia cutressi","to":"Cribrochalina vasculum","value":1},
{"from":"Bergia puertoricense","to":"Agelas conifera","value":1},
{"from":"Bergia puertoricense","to":"Agelas dispar","value":1},
{"from":"Bergia puertoricense","to":"Agelas sceptrum","value":1},
{"from":"Bergia puertoricense","to":"Svenzea zeai","value":1},
{"from":"Parazoanthus swiftii","to":"Agelas clathrodes","value":1},
{"from":"Parazoanthus swiftii","to":"Agelas dispar","value":1},
{"from":"Parazoanthus swiftii","to":"Agelas sventres","value":1},
{"from":"Parazoanthus swiftii","to":"Clathria (Thalysias) curacaoensis","value":1},
{"from":"Parazoanthus swiftii","to":"Desmapsamma anchorata","value":1},
{"from":"Parazoanthus swiftii","to":"Ectyoplasia ferox","value":1},
{"from":"Parazoanthus swiftii","to":"Iotrochota birotulata","value":1},
{"from":"Parazoanthus swiftii","to":"Ptilocaulis walpersii","value":1},
{"from":"Parazoanthus swiftii","to":"Tedania (Tedania) ignis","value":1},
{"from":"Parazoanthus swiftii","to":"Topsentia ophiraphidites","value":1},
{"from":"Parazoanthus swiftii","to":"Topsentia sp.","value":1},
{"from":"Umimayanthus parasiticus","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Umimayanthus parasiticus","to":"Callyspongia (Cladochalina) armigera","value":1},
{"from":"Umimayanthus parasiticus","to":"Cliona aprica","value":1},
{"from":"Umimayanthus parasiticus","to":"Cliona caribbaea","value":1},
{"from":"Umimayanthus parasiticus","to":"Cliona delitrix","value":1},
{"from":"Umimayanthus parasiticus","to":"Cliona varians","value":1},
{"from":"Umimayanthus parasiticus","to":"Cliona vermifera","value":1},
{"from":"Umimayanthus parasiticus","to":"Gelliodes ramosa","value":1},
{"from":"Umimayanthus parasiticus","to":"Neopetrosia proxima","value":1},
{"from":"Umimayanthus parasiticus","to":"Neopetrosia rosariensis","value":1},
{"from":"Umimayanthus parasiticus","to":"Niphates caycedoi","value":1},
{"from":"Umimayanthus parasiticus","to":"Niphates digitalis","value":1},
{"from":"Umimayanthus parasiticus","to":"Niphates erecta","value":1},
{"from":"Umimayanthus parasiticus","to":"Spirastrella coccinea","value":1},
{"from":"Umimayanthus parasiticus","to":"Spirastrella sp.","value":1}







]



chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 1;
chart.minNodeSize = 0.001;
chart.startAngle = 75;
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
