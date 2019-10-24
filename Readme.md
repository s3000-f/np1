# Internet Engineering Project 1
This repository contains the project as stated in [This Page](https://github.com/sehsanm/sbu-ieng-98).
The project is developed using [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/).

The project is also Live at [Heroku](https://np1.herokuapp.com/).

Two API endpoints are available as listed below:
```
/gis/testpoint
Query Parameters: lat -> latitude format
                  long -> longtitude format
``` 
```JSON
/gis/addpolygon
JSON Body Sample:
{
    "type": "Feature",
    "properties": {
    "name": "تهران"
    },
    "geometry": {
    "type": "Polygon",
    "coordinates": [
        [
        [
            53.514404296875,
            34.59704151614417
        ],
        [
            51.416015625,
            34.854382885097905
        ],
        [
            51.6851806640625,
            33.82023008524739
        ],
        [
            53.514404296875,
            34.59704151614417
        ]
        ]
    ]
    }
}
```
Artillery load test can be viewed [here](https://github.com/s3000-f/np1/blob/master/artillery_log.txt).