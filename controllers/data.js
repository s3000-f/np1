const fs = require('fs');
let turf = require('@turf/turf');
let raw = fs.readFileSync("data.geojson");
let data = JSON.parse(raw);

exports.getdata = function () {
    return data
}

exports.addData = function (single) {
    data.features.push(single);
    console.log(data)
    let rawData = JSON.stringify(data);
    try {
        fs.writeFile('data.geojson', rawData, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
        return true
    } catch (e) {
        console.log(e);
        return false
    }
}