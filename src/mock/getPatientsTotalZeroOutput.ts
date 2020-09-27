// tslint:disable
const getPatientsTotalZeroOutput = {
    "resourceType": "Bundle",
    "id": "0ee3ca41-d46d-40de-9a86-64c3c402540d",
    "meta": {
        "lastUpdated": "2020-09-27T06:29:47.996+00:00"
    },
    "type": "searchset",
    "total": 0,
    "link": [
        {
            "relation": "self",
            "url": "http://hapi.fhir.org/baseR4/Patient?birthdate=ge1960-01-01&birthdate=le1965-12-31"
        },
        {
            "relation": "next",
            "url": "http://hapi.fhir.org/baseR4?_getpages=0ee3ca41-d46d-40de-9a86-64c3c402540d&_getpagesoffset=20&_count=20&_pretty=true&_bundletype=searchset"
        }
    ]
};

export default getPatientsTotalZeroOutput;