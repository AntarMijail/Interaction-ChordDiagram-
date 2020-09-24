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

{"from":" ","to":" ","value":13,"color":"#FFFFFF"},
{"from":"Tagelus sp.","to":"Tagelus sp.","value":0,"color":"#95722A"},
{"from":"Scissula similis","to":"Scissula similis","value":0,"color":"#95722A"},
{"from":"Pisania pusio","to":"Pisania pusio","value":0,"color":"#95722A"},
{"from":"Parviturboides interruptus","to":"Parviturboides interruptus","value":0,"color":"#95722A"},
{"from":"Mitrella ocellata","to":"Mitrella ocellata","value":0,"color":"#95722A"},
{"from":"Meioceras nitidum","to":"Meioceras nitidum","value":0,"color":"#95722A"},
{"from":"Macoma sp. 3","to":"Macoma sp. 3","value":0,"color":"#95722A"},
{"from":"Macoma sp. 2","to":"Macoma sp. 2","value":0,"color":"#95722A"},
{"from":"Lithophaga antillarum","to":"Lithophaga antillarum","value":0,"color":"#95722A"},
{"from":"Leiosolenus aristatus","to":"Leiosolenus aristatus","value":0,"color":"#95722A"},
{"from":"Lampanella minima","to":"Lampanella minima","value":0,"color":"#95722A"},
{"from":"Geukensia demissa","to":"Geukensia demissa","value":0,"color":"#95722A"},
{"from":"Eoacmaea pustulata","to":"Eoacmaea pustulata","value":0,"color":"#95722A"},
{"from":"Diodora cayenensis","to":"Diodora cayenensis","value":0,"color":"#95722A"},
{"from":"Cotonopsis lafresnayi","to":"Cotonopsis lafresnayi","value":0,"color":"#95722A"},
{"from":"Astyris lunata","to":"Astyris lunata","value":0,"color":"#95722A"},
{"from":"Arca zebra","to":"Arca zebra","value":0,"color":"#95722A"},
{"from":"Acmaea sp.","to":"Acmaea sp.","value":0,"color":"#95722A"},
{"from":"Macoma sp. 1","to":"Macoma sp. 1","value":0,"color":"#95722A"},
{"from":"Barbatia candida","to":"Barbatia candida","value":0,"color":"#95722A"},
{"from":"Isognomon bicolor","to":"Isognomon bicolor","value":0,"color":"#95722A"},

{"from":"  ","to":"  ","value":10.5,"color":"#FFFFFF"},
{"from":"Dictyoceratida","to":"Dictyoceratida","value":1.5,"color":"#FFFFFF"},
{"from":"Ircinia strobilina","to":"Ircinia strobilina","value":0,"color":"#F37941"},
{"from":"Ircinia felix","to":"Ircinia felix","value":0,"color":"#F37941"},
{"from":"Ircinia campana","to":"Ircinia campana","value":0,"color":"#F37941"},
{"from":"Haplosclerida","to":"Haplosclerida","value":1,"color":"#FFFFFF"},
{"from":"Callyspongia (Callyspongia) fallax","to":"Callyspongia (Callyspongia) fallax","value":0,"color":"#FBAF4F"},
{"from":"Amphimedon compressa","to":"Amphimedon compressa","value":0,"color":"#FBAF4F"},
{"from":"Verongiida","to":"Verongiida","value":1,"color":"#FFFFFF"},
{"from":"Aplysina lacunosa","to":"Aplysina lacunosa","value":0,"color":"#A570AF"},
{"from":"Aiolochroia crassa","to":"Aiolochroia crassa","value":0,"color":"#A570AF"},
{"from":"Axinellida","to":"Axinellida","value":.5,"color":"#FFFFFF"},
{"from":"Dragmacidon lunaecharta","to":"Dragmacidon lunaecharta","value":0,"color":"#849DB0"},
{"from":"Clionaida","to":"Clionaida","value":.5,"color":"#FFFFFF"},
{"from":"Cliona celata","to":"Cliona celata","value":0,"color":"#638B66"},
{"from":"Acmaea sp.","to":"Ircinia felix","value":1},
{"from":"Arca zebra","to":"Dragmacidon lunaecharta","value":1},
{"from":"Astyris lunata","to":"Cliona celata","value":1},
{"from":"Barbatia candida","to":"Callyspongia (Callyspongia) fallax","value":1},
{"from":"Barbatia candida","to":"Dragmacidon lunaecharta","value":1},
{"from":"Barbatia candida","to":"Ircinia felix","value":1},
{"from":"Cotonopsis lafresnayi","to":"Cliona celata","value":1},
{"from":"Diodora cayenensis","to":"Ircinia felix","value":1},
{"from":"Eoacmaea pustulata","to":"Callyspongia (Callyspongia) fallax","value":1},
{"from":"Geukensia demissa","to":"Ircinia strobilina","value":1},
{"from":"Isognomon bicolor","to":"Amphimedon compressa","value":1},
{"from":"Isognomon bicolor","to":"Dragmacidon lunaecharta","value":1},
{"from":"Isognomon bicolor","to":"Ircinia felix","value":1},
{"from":"Isognomon bicolor","to":"Ircinia strobilina","value":1},
{"from":"Lampanella minima","to":"Aplysina lacunosa","value":1},
{"from":"Leiosolenus aristatus","to":"Dragmacidon lunaecharta","value":1},
{"from":"Lithophaga antillarum","to":"Ircinia strobilina","value":1},
{"from":"Macoma sp. 1","to":"Ircinia felix","value":1},
{"from":"Macoma sp. 1","to":"Ircinia strobilina","value":1},
{"from":"Macoma sp. 2","to":"Ircinia felix","value":1},
{"from":"Macoma sp. 3","to":"Aiolochroia crassa","value":1},
{"from":"Meioceras nitidum","to":"Aplysina lacunosa","value":1},
{"from":"Mitrella ocellata","to":"Ircinia strobilina","value":1},
{"from":"Parviturboides interruptus","to":"Ircinia campana","value":1},
{"from":"Pisania pusio","to":"Aplysina lacunosa","value":1},
{"from":"Scissula similis","to":"Ircinia strobilina","value":1},
{"from":"Tagelus sp.","to":"Ircinia strobilina","value":1}








]



chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 1.5;
chart.minNodeSize = 0.001;
chart.startAngle = 55;
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
