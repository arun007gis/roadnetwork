ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8344497.509666, 886212.033284, 8682932.135062, 1073297.012539]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Road_Start_EndNodes_2 = new ol.format.GeoJSON();
var features_Road_Start_EndNodes_2 = format_Road_Start_EndNodes_2.readFeatures(json_Road_Start_EndNodes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_Start_EndNodes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_Start_EndNodes_2.addFeatures(features_Road_Start_EndNodes_2);cluster_Road_Start_EndNodes_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Road_Start_EndNodes_2
});
var lyr_Road_Start_EndNodes_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Road_Start_EndNodes_2, 
                style: style_Road_Start_EndNodes_2,
                popuplayertitle: "Road_Start_End Nodes",
                interactive: true,
                title: '<img src="styles/legend/Road_Start_EndNodes_2.png" /> Road_Start_End Nodes'
            });
var format_WholeNetwork231124_3 = new ol.format.GeoJSON();
var features_WholeNetwork231124_3 = format_WholeNetwork231124_3.readFeatures(json_WholeNetwork231124_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WholeNetwork231124_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WholeNetwork231124_3.addFeatures(features_WholeNetwork231124_3);
var lyr_WholeNetwork231124_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WholeNetwork231124_3, 
                style: style_WholeNetwork231124_3,
                popuplayertitle: "Whole Network23-11-24",
                interactive: true,
    title: 'Whole Network23-11-24<br />\
    <img src="styles/legend/WholeNetwork231124_3_0.png" /> Amaravila - Ottashekaramangalam Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_1.png" /> Amarvila-Karakkonam Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_2.png" /> Arattukuzhi-Amboori-Neyyardam Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_3.png" /> Attingal-Venjaramoode Road(SH47)<br />\
    <img src="styles/legend/WholeNetwork231124_3_4.png" /> Balaramapuram-Kattakkada Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_5.png" /> Balaramapuram-Vizhinjam Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_6.png" /> Cheruvarakkonam Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_7.png" /> Kattakada-Kottor Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_8.png" /> Kilimanoor-Alamcode Road(SH46)<br />\
    <img src="styles/legend/WholeNetwork231124_3_9.png" /> Kovalam First Approach Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_10.png" /> Kovalam Second Approach Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_11.png" /> Kundamankadavu Mandapathinkadavu Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_12.png" /> Nagaroor-Kallambalam Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_13.png" /> Nedumangad-Vembayam Road(SH47)<br />\
    <img src="styles/legend/WholeNetwork231124_3_14.png" /> Nedumangadu Town Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_15.png" /> Nedumangadu-Shorlacode Road(SH03)<br />\
    <img src="styles/legend/WholeNetwork231124_3_16.png" /> Pallipuram-Vembayam Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_17.png" /> Parashala-Panachamoodu Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_18.png" /> Parassala-Kollengode Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_19.png" /> Paripaly-Madathara Road(SH64)<br />\
    <img src="styles/legend/WholeNetwork231124_3_20.png" /> Perumkidavila-Kunnathukal Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_21.png" /> Poojapura-Kundamankadavu Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_22.png" /> Poovar-Sankurutty Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_23.png" /> Poovar-Vizhinjam Raod<br />\
    <img src="styles/legend/WholeNetwork231124_3_24.png" /> Thiruvananthapuram-Thenmala Road(SH02)<br />\
    <img src="styles/legend/WholeNetwork231124_3_25.png" /> Thriuvananthapuram-Ponmudi Road(SH-45)<br />\
    <img src="styles/legend/WholeNetwork231124_3_26.png" /> Trivandrum-Neyyardam Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_27.png" /> Trivandrum-Vizhinjam Road 1<br />\
    <img src="styles/legend/WholeNetwork231124_3_28.png" /> Trivandrum-Vizhinjam Road 2<br />\
    <img src="styles/legend/WholeNetwork231124_3_29.png" /> Trivandrum-Vizhinjam Road 3<br />\
    <img src="styles/legend/WholeNetwork231124_3_30.png" /> Trivandrum-Vizhinjam Road 4<br />\
    <img src="styles/legend/WholeNetwork231124_3_31.png" /> Vamanapuram-Chittar Road<br />\
    <img src="styles/legend/WholeNetwork231124_3_32.png" /> Varkala-Paripally Road(SH64)<br />\
    <img src="styles/legend/WholeNetwork231124_3_33.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_Road_Start_EndNodes_2.setVisible(true);lyr_WholeNetwork231124_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,lyr_Road_Start_EndNodes_2,lyr_WholeNetwork231124_3];
lyr_Road_Start_EndNodes_2.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Northing': 'Northing', 'Easting': 'Easting', 'Elevation': 'Elevation', 'Fid': 'Fid', 'Road_Name': 'Road_Name', 'Node_Type': 'Node_Type', 'Locatn_Nam': 'Locatn_Nam', 'CoomonNode': 'CoomonNode', });
lyr_WholeNetwork231124_3.set('fieldAliases', {'Road_Name': 'Road_Name', 'Road_Type': 'Road_Type', 'Road_Num': 'Road_Num', 'Rd_Str_Loc': 'Rd_Str_Loc', 'Rd_End_Loc': 'Rd_End_Loc', 'Fid': 'Fid', 'Dig_Length': 'Dig_Length', 'layer': 'layer', 'path': 'path', });
lyr_Road_Start_EndNodes_2.set('fieldImages', {'Name': 'TextEdit', 'Code': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Elevation': 'TextEdit', 'Fid': 'TextEdit', 'Road_Name': 'TextEdit', 'Node_Type': 'TextEdit', 'Locatn_Nam': 'TextEdit', 'CoomonNode': 'TextEdit', });
lyr_WholeNetwork231124_3.set('fieldImages', {'Road_Name': 'TextEdit', 'Road_Type': 'TextEdit', 'Road_Num': 'TextEdit', 'Rd_Str_Loc': 'TextEdit', 'Rd_End_Loc': 'TextEdit', 'Fid': 'TextEdit', 'Dig_Length': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Road_Start_EndNodes_2.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Elevation': 'no label', 'Fid': 'no label', 'Road_Name': 'inline label - visible with data', 'Node_Type': 'inline label - visible with data', 'Locatn_Nam': 'inline label - visible with data', 'CoomonNode': 'inline label - visible with data', });
lyr_WholeNetwork231124_3.set('fieldLabels', {'Road_Name': 'inline label - always visible', 'Road_Type': 'inline label - always visible', 'Road_Num': 'inline label - always visible', 'Rd_Str_Loc': 'no label', 'Rd_End_Loc': 'no label', 'Fid': 'no label', 'Dig_Length': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_WholeNetwork231124_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});