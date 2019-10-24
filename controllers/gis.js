let turf = require('@turf/turf');
const d3 = require('d3-geo');
const GeoJsonGeometriesLookup = require('geojson-geometries-lookup');

let dataManagement = require('./data');
exports.testPoint = function(req, res, next) {
    let point = {type: "Point", coordinates: [req.query.lat, req.query.long]};
    const lookup = new GeoJsonGeometriesLookup(dataManagement.getdata());

    // let data = dataManagement.getdata()
    // console.log(data)
    // data.forEach(item => {
    //     if (d3.geoContains(item,point)) {
    //         polygons.concat(item.properties.name)
    //     }
    // })
    let ret = lookup.getContainers(point).features;
    var polygons = []
    ret.forEach(item => {
        polygons.push(item.properties.name)
    })
    res.json({"polygons": polygons});
}

exports.addPolygon = function(req, res, next) {
    let response = dataManagement.addData(req.body)
    res.json({success: response})
}