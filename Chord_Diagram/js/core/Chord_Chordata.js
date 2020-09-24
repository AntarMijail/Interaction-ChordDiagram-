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

{"from":"  ","to":"  ","value":10,"color":"#FFFFFF"},
{"from":"Thalassoma bifasciatum","to":"Thalassoma bifasciatum","value":0,"color":"#187E3E"},
{"from":"Starksia lepicoelia","to":"Starksia lepicoelia","value":0,"color":"#187E3E"},
{"from":"Starksia hassi","to":"Starksia hassi","value":0,"color":"#187E3E"},
{"from":"Priolepis hipoliti","to":"Priolepis hipoliti","value":0,"color":"#187E3E"},
{"from":"Phaeoptyx pigmentaria","to":"Phaeoptyx pigmentaria","value":0,"color":"#187E3E"},
{"from":"Pariah scotius","to":"Pariah scotius","value":0,"color":"#187E3E"},
{"from":"Gobiesox strumosus","to":"Gobiesox strumosus","value":0,"color":"#187E3E"},
{"from":"Evermannichthys spongicola","to":"Evermannichthys spongicola","value":0,"color":"#187E3E"},
{"from":"Evermannichthys silus","to":"Evermannichthys silus","value":0,"color":"#187E3E"},
{"from":"Evermannichthys metzelaari","to":"Evermannichthys metzelaari","value":0,"color":"#187E3E"},
{"from":"Evermannichthys convictor","to":"Evermannichthys convictor","value":0,"color":"#187E3E"},
{"from":"Elacatinus lori","to":"Elacatinus lori","value":0,"color":"#187E3E"},
{"from":"Apogon quadrisquamatus","to":"Apogon quadrisquamatus","value":0,"color":"#187E3E"},
{"from":"Elacatinus chancei","to":"Elacatinus chancei","value":0,"color":"#187E3E"},
{"from":"Risor ruber","to":"Risor ruber","value":0,"color":"#187E3E"},
{"from":"Phaeoptyx xenus","to":"Phaeoptyx xenus","value":0,"color":"#187E3E"},
{"from":"Elacatinus horsti","to":"Elacatinus horsti","value":0,"color":"#187E3E"},
{"from":"Elacatinus louisae","to":"Elacatinus louisae","value":0,"color":"#187E3E"},
{"from":"Elacatinus colini","to":"Elacatinus colini","value":0,"color":"#187E3E"},
{"from":"Elacatinus xanthiprora","to":"Elacatinus xanthiprora","value":0,"color":"#187E3E"},
{"from":"   ","to":"   ","value":10,"color":"#FFFFFF"},
{"from":"Haplosclerida","to":"Haplosclerida","value":3,"color":"#FFFFFF"},
{"from":"Callyspongia (Cladochalina) aculeata","to":"Callyspongia (Cladochalina) aculeata","value":0,"color":"#FBAF4F"},
{"from":"Callyspongia (Callyspongia) fallax","to":"Callyspongia (Callyspongia) fallax","value":0,"color":"#FBAF4F"},
{"from":"Callyspongia (Cladochalina) plicifera","to":"Callyspongia (Cladochalina) plicifera","value":0,"color":"#FBAF4F"},
{"from":"Xestospongia muta","to":"Xestospongia muta","value":0,"color":"#FBAF4F"},
{"from":"Amphimedon compressa","to":"Amphimedon compressa","value":0,"color":"#FBAF4F"},
{"from":"Niphates digitalis","to":"Niphates digitalis","value":0,"color":"#FBAF4F"},
{"from":"Verongiida","to":"Verongiida","value":2.5,"color":"#FFFFFF"},
{"from":"Aplysina fistularis","to":"Aplysina fistularis","value":0,"color":"#A570AF"},
{"from":"Aplysina archeri","to":"Aplysina archeri","value":0,"color":"#A570AF"},
{"from":"Aplysina lacunosa","to":"Aplysina lacunosa","value":0,"color":"#A570AF"},
{"from":"Aiolochroia crassa","to":"Aiolochroia crassa","value":0,"color":"#A570AF"},
{"from":"Aplysina fulva","to":"Aplysina fulva","value":0,"color":"#A570AF"},
{"from":"Dictyoceratida","to":"Dictyoceratida","value":2.5,"color":"#FFFFFF"},
{"from":"Ircinia strobilina","to":"Ircinia strobilina","value":0,"color":"#F37941"},
{"from":"Ircinia campana","to":"Ircinia campana","value":0,"color":"#F37941"},
{"from":"Sarcotragus fasciculatus","to":"Sarcotragus fasciculatus","value":0,"color":"#F37941"},
{"from":"Spongia (Spongia) barbara","to":"Spongia (Spongia) barbara","value":0,"color":"#F37941"},
{"from":"Clionaida","to":"Clionaida","value":1,"color":"#FFFFFF"},
{"from":"Spheciospongia vesparium","to":"Spheciospongia vesparium","value":0,"color":"#638B66"},
{"from":"Spirastrella coccinea","to":"Spirastrella coccinea","value":0,"color":"#638B66"},
{"from":"Agelasida","to":"Agelasida","value":1,"color":"#FFFFFF"},
{"from":"Agelas conifera","to":"Agelas conifera","value":0,"color":"#4F6980"},
{"from":"Agelas dispar","to":"Agelas dispar","value":0,"color":"#4F6980"},
{"from":"Biemnida","to":"Biemnida","value":.5,"color":"#FFFFFF"},
{"from":"Neofibularia nolitangere","to":"Neofibularia nolitangere","value":0,"color":"#A1CDA9"},
{"from":"Apogon quadrisquamatus","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Elacatinus chancei","to":"Aplysina archeri","value":1},
{"from":"Elacatinus chancei","to":"Aplysina fistularis","value":1},
{"from":"Elacatinus chancei","to":"Aplysina lacunosa","value":1},
{"from":"Elacatinus colini","to":"Amphimedon compressa","value":1},
{"from":"Elacatinus colini","to":"Aplysina fulva","value":1},
{"from":"Elacatinus colini","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Elacatinus colini","to":"Callyspongia (Cladochalina) plicifera","value":1},
{"from":"Elacatinus colini","to":"Neofibularia nolitangere","value":1},
{"from":"Elacatinus colini","to":"Niphates digitalis","value":1},
{"from":"Elacatinus colini","to":"Spirastrella coccinea","value":1},
{"from":"Elacatinus colini","to":"Xestospongia muta","value":1},
{"from":"Elacatinus horsti","to":"Agelas conifera","value":1},
{"from":"Elacatinus horsti","to":"Aplysina archeri","value":1},
{"from":"Elacatinus horsti","to":"Aplysina lacunosa","value":1},
{"from":"Elacatinus horsti","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Elacatinus horsti","to":"Neofibularia nolitangere","value":1},
{"from":"Elacatinus lori","to":"Aplysina fistularis","value":1},
{"from":"Elacatinus louisae","to":"Agelas conifera","value":1},
{"from":"Elacatinus louisae","to":"Aiolochroia crassa","value":1},
{"from":"Elacatinus louisae","to":"Aplysina archeri","value":1},
{"from":"Elacatinus louisae","to":"Aplysina fistularis","value":1},
{"from":"Elacatinus louisae","to":"Aplysina lacunosa","value":1},
{"from":"Elacatinus louisae","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Elacatinus xanthiprora","to":"Agelas dispar","value":1},
{"from":"Elacatinus xanthiprora","to":"Aiolochroia crassa","value":1},
{"from":"Elacatinus xanthiprora","to":"Aplysina fistularis","value":1},
{"from":"Elacatinus xanthiprora","to":"Callyspongia (Callyspongia) fallax","value":1},
{"from":"Elacatinus xanthiprora","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Elacatinus xanthiprora","to":"Ircinia campana","value":1},
{"from":"Elacatinus xanthiprora","to":"Ircinia strobilina","value":1},
{"from":"Elacatinus xanthiprora","to":"Sarcotragus fasciculatus","value":1},
{"from":"Elacatinus xanthiprora","to":"Spheciospongia vesparium","value":1},
{"from":"Evermannichthys convictor","to":"Spongia (Spongia) barbara","value":1},
{"from":"Evermannichthys metzelaari","to":"Spheciospongia vesparium","value":1},
{"from":"Evermannichthys silus","to":"Ircinia strobilina","value":1},
{"from":"Evermannichthys spongicola","to":"Spheciospongia vesparium","value":1},
{"from":"Gobiesox strumosus","to":"Spheciospongia vesparium","value":1},
{"from":"Pariah scotius","to":"Spheciospongia vesparium","value":1},
{"from":"Phaeoptyx pigmentaria","to":"Aplysina archeri","value":1},
{"from":"Phaeoptyx xenus","to":"Agelas conifera","value":1},
{"from":"Phaeoptyx xenus","to":"Aplysina archeri","value":1},
{"from":"Phaeoptyx xenus","to":"Aplysina fistularis","value":1},
{"from":"Phaeoptyx xenus","to":"Callyspongia (Cladochalina) aculeata","value":1},
{"from":"Phaeoptyx xenus","to":"Callyspongia (Cladochalina) plicifera","value":1},
{"from":"Priolepis hipoliti","to":"Ircinia strobilina","value":1},
{"from":"Risor ruber","to":"Aplysina fistularis","value":1},
{"from":"Risor ruber","to":"Callyspongia (Callyspongia) fallax","value":1},
{"from":"Risor ruber","to":"Ircinia campana","value":1},
{"from":"Risor ruber","to":"Ircinia strobilina","value":1},
{"from":"Risor ruber","to":"Xestospongia muta","value":1},
{"from":"Starksia hassi","to":"Aplysina lacunosa","value":1},
{"from":"Starksia lepicoelia","to":"Ircinia strobilina","value":1},
{"from":"Thalassoma bifasciatum","to":"Aplysina fistularis","value":1}








]



chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 1;
chart.minNodeSize = 0.001;
chart.startAngle = 80;
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
