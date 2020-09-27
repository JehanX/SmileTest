// tslint:disable
const getPatientsDefaultOutput = {
    "resourceType": "Bundle",
    "id": "0ee3ca41-d46d-40de-9a86-64c3c402540d",
    "meta": {
        "lastUpdated": "2020-09-27T06:29:47.996+00:00"
    },
    "type": "searchset",
    "total": 253,
    "link": [
        {
            "relation": "self",
            "url": "http://hapi.fhir.org/baseR4/Patient?birthdate=ge1960-01-01&birthdate=le1965-12-31"
        },
        {
            "relation": "next",
            "url": "http://hapi.fhir.org/baseR4?_getpages=0ee3ca41-d46d-40de-9a86-64c3c402540d&_getpagesoffset=20&_count=20&_pretty=true&_bundletype=searchset"
        }
    ],
    "entry": [
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1203",
            "resource": {
                "resourceType": "Patient",
                "id": "1203",
                "meta": {
                    "versionId": "14",
                    "lastUpdated": "2020-09-04T19:21:43.309+00:00",
                    "source": "#DaNQToCvaCx46SEM"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"> <div class=\"hapiHeaderText\">Aaron <b>HANK </b> </div> <table class=\"hapiPropertyTable\"> <tbody> <tr> <td>Identifier</td> <td>5911bfd0-687e-4ac9-ab37-04e8815e4f0d</td> </tr> <tr> <td>Address</td> <td> <span>UK </span> </td> </tr> <tr> <td>Date of birth</td> <td> <span>18 February 1960</span> </td> </tr> </tbody> </table> </div>"
                },
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/v2/0203",
                                    "code": "MR"
                                }
                            ]
                        },
                        "value": "5911bfd0-687e-4ac9-ab37-04e8815e4f0d"
                    }
                ],
                "name": [
                    {
                        "family": "Hank",
                        "given": [
                            "Aaron"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "email",
                        "value": "hank.aaron@appexinnovation.com",
                        "use": "work"
                    },
                    {
                        "system": "phone",
                        "value": "0612789638",
                        "use": "home"
                    },
                    {
                        "system": "phone",
                        "value": "069562639",
                        "use": "work"
                    }
                ],
                "gender": "male",
                "birthDate": "1961-02-10",
                "address": [
                    {
                        "city": "UK"
                    }
                ],
                "generalPractitioner": [
                    {
                        "reference": "Practitioner/1058",
                        "display": "Guru-General Practitioner"
                    }
                ],
                "managingOrganization": {
                    "reference": "Organization/1621",
                    "display": "PHARMACIE DU GINKGO"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1208",
            "resource": {
                "resourceType": "Patient",
                "id": "1208",
                "meta": {
                    "versionId": "14",
                    "lastUpdated": "2020-08-28T16:16:24.623+00:00",
                    "source": "#UY8oBpT5pCSacrWA"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Murali <b>A </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Address</td><td><span>undefined </span><br/><span>Mumbai </span></td></tr><tr><td>Date of birth</td><td><span>10 November 1992</span></td></tr></tbody></table></div>"
                },
                "name": [
                    {
                        "family": "A",
                        "given": [
                            "Murali "
                        ]
                    }
                ],
                "gender": "male",
                "birthDate": "1964-11-10",
                "address": [
                    {
                        "line": [
                            "undefined"
                        ],
                        "city": "Mumbai",
                        "postalCode": "undefined"
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/592728",
            "resource": {
                "resourceType": "Patient",
                "id": "592728",
                "meta": {
                    "versionId": "2",
                    "lastUpdated": "2020-08-31T12:28:44.151+00:00",
                    "source": "#VHXZAnnseQer2bFt"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Violet <b>DSOUZA </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>5911bfd0-687e-4ac9-ab37-04e8815e4f0d</td></tr><tr><td>Address</td><td><span>PleasantVille </span></td></tr><tr><td>Date of birth</td><td><span>25 December 1964</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "type": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/v2/0203",
                                    "code": "MR"
                                }
                            ]
                        },
                        "value": "5911bfd0-687e-4ac9-ab37-04e8815e4f0d"
                    }
                ],
                "name": [
                    {
                        "family": "dsouza",
                        "given": [
                            "Violet"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "email",
                        "value": "roshni.dsouza@gmail.com",
                        "use": "work"
                    },
                    {
                        "system": "phone",
                        "value": "5553535987",
                        "use": "home"
                    },
                    {
                        "system": "phone",
                        "value": "0648644144",
                        "use": "work"
                    }
                ],
                "gender": "female",
                "birthDate": "1964-12-25",
                "address": [
                    {
                        "city": "PleasantVille"
                    }
                ],
                "generalPractitioner": [
                    {
                        "reference": "Practitioner/1058",
                        "display": "Guru-General Practitioner"
                    }
                ],
                "managingOrganization": {
                    "reference": "Organization/358",
                    "display": "PHARMACIE DU GINKGO"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1168182",
            "resource": {
                "resourceType": "Patient",
                "id": "1168182",
                "meta": {
                    "versionId": "422",
                    "lastUpdated": "2020-09-24T21:30:03.822+00:00",
                    "source": "#HkX8TkIQHuj5fbnN",
                    "profile": [
                        "http://www.saude.ba.gov.br/fhir/r4/StructureDefinition/BAPaciente-1.0"
                    ]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Lotário Novaes </div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>01983287024</td></tr><tr><td>Address</td><td><span>Rua Mato Grosso </span><br/><span>37 </span><br/><span>Apto 201 </span><br/><span>Pituba </span><br/><span>Salvador </span><span>BA </span></td></tr><tr><td>Date of birth</td><td><span>29 April 1965</span></td></tr></tbody></table></div>"
                },
                "extension": [
                    {
                        "url": "http://www.saude.ba.gov.br/fhir/r4/StructureDefinition/BARacaCor-1.0",
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://www.saude.ba.gov.br/fhir/r4/CodeSystem/BARacaCor",
                                    "code": "03",
                                    "display": "PARDA"
                                }
                            ]
                        }
                    },
                    {
                        "url": "http://hl7.org/fhir/StructureDefinition/patient-birthPlace",
                        "valueAddress": {
                            "city": "SALVADOR",
                            "state": "BA"
                        }
                    },
                    {
                        "url": "http://hl7.org/fhir/StructureDefinition/patient-nationality",
                        "extension": [
                            {
                                "url": "code",
                                "valueCodeableConcept": {
                                    "text": "BRASILEIRO"
                                }
                            }
                        ]
                    },
                    {
                        "url": "http://www.saude.ba.gov.br/fhir/r4/StructureDefinition/BAParente-1.0",
                        "extension": [
                            {
                                "url": "relationship",
                                "valueCoding": {
                                    "system": "http://www.saude.ba.gov.br/fhir/r4/CodeSystem/BAParentesco",
                                    "code": "MTH",
                                    "display": "Mãe"
                                }
                            },
                            {
                                "url": "relativeName",
                                "valueString": "Catarina de Souza e Sousa"
                            }
                        ]
                    },
                    {
                        "url": "http://www.saude.ba.gov.br/fhir/r4/StructureDefinition/BAParente-1.0",
                        "extension": [
                            {
                                "url": "relationship",
                                "valueCoding": {
                                    "system": "http://www.saude.ba.gov.br/fhir/r4/CodeSystem/BAParentesco",
                                    "code": "FTH",
                                    "display": "Pai"
                                }
                            },
                            {
                                "url": "relativeName",
                                "valueString": "Astrolábio da Silva"
                            }
                        ]
                    }
                ],
                "identifier": [
                    {
                        "system": "http://rnds.saude.gov.br/fhir/r4/NamingSystem/cpf",
                        "value": "01983287024"
                    },
                    {
                        "system": "http://rnds.saude.gov.br/fhir/r4/NamingSystem/cns",
                        "value": "010203040506070"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "text": "Novaes",
                        "given": [
                            "Lotário Novaes"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "value": "71988774545",
                        "rank": 1
                    },
                    {
                        "system": "phone",
                        "value": "7165874411",
                        "rank": 2
                    }
                ],
                "gender": "male",
                "birthDate": "1965-04-29",
                "address": [
                    {
                        "extension": [
                            {
                                "url": "http://www.saude.ba.gov.br/fhir/r4/StructureDefinition/BACodigoIbgeEndereco",
                                "extension": [
                                    {
                                        "url": "codIbgeMunicipio",
                                        "valuePositiveInt": 2927408
                                    },
                                    {
                                        "url": "codIbgeUF",
                                        "valuePositiveInt": 29
                                    }
                                ]
                            }
                        ],
                        "use": "home",
                        "line": [
                            "Rua Mato Grosso",
                            "37",
                            "Apto 201",
                            "Pituba"
                        ],
                        "city": "Salvador",
                        "state": "BA",
                        "postalCode": "41830150"
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1168247",
            "resource": {
                "resourceType": "Patient",
                "id": "1168247",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-19T01:47:44.592+00:00",
                    "source": "#R1RZOQgt46dr8tWI"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">ANN <b>DOE </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>urn:id:999994</td></tr><tr><td>Date of birth</td><td><span>01 March 1960</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "system": "http://mghpathology.org/identifiers/patients",
                        "value": "urn:id:999994"
                    }
                ],
                "name": [
                    {
                        "family": "DOE",
                        "given": [
                            "ANN"
                        ]
                    }
                ],
                "gender": "female",
                "birthDate": "1960-03-01T00:00:00"
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1168624",
            "resource": {
                "resourceType": "Patient",
                "id": "1168624",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-19T08:57:24.684+00:00",
                    "source": "#a1IjCWNlJlWiK2GV",
                    "tag": [
                        {
                            "system": "urn:userId",
                            "code": "987"
                        },
                        {
                            "system": "urn:tenantId",
                            "code": "ABC"
                        }
                    ]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Manfred <b>MUSTERMANN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>111-11A</td></tr><tr><td>Date of birth</td><td><span>01 January 1965</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "system": "urn:patientId",
                        "value": "111-11A",
                        "assigner": {
                            "display": "client2"
                        }
                    }
                ],
                "active": true,
                "name": [
                    {
                        "extension": [
                            {
                                "url": "https://simplifier.net/extensionexperiment/namerepresentation",
                                "valueCode": "Alphabetic"
                            }
                        ],
                        "use": "official",
                        "family": "Mustermann",
                        "given": [
                            "Manfred"
                        ]
                    }
                ],
                "gender": "male",
                "birthDate": "1965-01-01"
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1168877",
            "resource": {
                "resourceType": "Patient",
                "id": "1168877",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T07:03:15.718+00:00",
                    "source": "#CLk3YLxYg5B8VamW",
                    "tag": [
                        {
                            "system": "urn:userId",
                            "code": "987"
                        },
                        {
                            "system": "urn:tenantId",
                            "code": "ABC"
                        }
                    ]
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Manfred <b>MUSTERMANN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>111-11AA</td></tr><tr><td>Date of birth</td><td><span>01 January 1963</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "system": "urn:patientId",
                        "value": "111-11AA",
                        "assigner": {
                            "reference": "client2"
                        }
                    }
                ],
                "active": true,
                "name": [
                    {
                        "extension": [
                            {
                                "url": "https://simplifier.net/extensionexperiment/namerepresentation",
                                "valueCode": "Alphabetic"
                            }
                        ],
                        "use": "official",
                        "family": "Mustermann",
                        "given": [
                            "Manfred"
                        ]
                    }
                ],
                "gender": "male",
                "birthDate": "1963-01-01"
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1168953",
            "resource": {
                "resourceType": "Patient",
                "id": "1168953",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T09:20:47.881+00:00",
                    "source": "#vwAzFNh9e918bEUz"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Rebecca <b>MCMAHON </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>14</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>02 August 1965</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "14"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Mcmahon",
                        "given": [
                            "Rebecca"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "female",
                "birthDate": "1965-08-02",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1168957",
            "resource": {
                "resourceType": "Patient",
                "id": "1168957",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T09:20:50.741+00:00",
                    "source": "#pyWw8VDdd2KW7vTJ"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Paul <b>WELLS </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>18</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>07 June 1961</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "18"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Wells",
                        "given": [
                            "Paul"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "male",
                "birthDate": "1961-06-07",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1168960",
            "resource": {
                "resourceType": "Patient",
                "id": "1168960",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T09:20:53.021+00:00",
                    "source": "#paKMkjUfaw0dHOom"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Margie <b>CARUTHERS </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>21</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>28 July 1962</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "21"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Caruthers",
                        "given": [
                            "Margie"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "female",
                "birthDate": "1962-07-28",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1168969",
            "resource": {
                "resourceType": "Patient",
                "id": "1168969",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T09:20:59.401+00:00",
                    "source": "#eRPox4xKKyl7YHgp"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Craig <b>TURNER </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>30</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>22 January 1963</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "30"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Turner",
                        "given": [
                            "Craig"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "male",
                "birthDate": "1963-01-22",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1168984",
            "resource": {
                "resourceType": "Patient",
                "id": "1168984",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T09:21:10.081+00:00",
                    "source": "#t5bEdnJgjWgjXunl"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Phillip <b>OWEN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>45</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>03 December 1962</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "45"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Owen",
                        "given": [
                            "Phillip"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "female",
                "birthDate": "1962-12-03",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1169003",
            "resource": {
                "resourceType": "Patient",
                "id": "1169003",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T09:22:32.247+00:00",
                    "source": "#54xCZEPUMWnxXNr6"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Rebecca <b>MCMAHON </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>14</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>02 August 1965</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "14"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Mcmahon",
                        "given": [
                            "Rebecca"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "female",
                "birthDate": "1965-08-02",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1169007",
            "resource": {
                "resourceType": "Patient",
                "id": "1169007",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T09:22:34.942+00:00",
                    "source": "#bPwwn27yvC29LT3r"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Paul <b>WELLS </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>18</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>07 June 1961</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "18"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Wells",
                        "given": [
                            "Paul"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "male",
                "birthDate": "1961-06-07",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1169010",
            "resource": {
                "resourceType": "Patient",
                "id": "1169010",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T09:22:36.961+00:00",
                    "source": "#ebMxvWmyX2iZpjXB"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Margie <b>CARUTHERS </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>21</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>28 July 1962</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "21"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Caruthers",
                        "given": [
                            "Margie"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "female",
                "birthDate": "1962-07-28",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1169019",
            "resource": {
                "resourceType": "Patient",
                "id": "1169019",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T09:22:43.122+00:00",
                    "source": "#HNGixJAjJyr2XHuJ"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Craig <b>TURNER </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>30</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>22 January 1963</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "30"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Turner",
                        "given": [
                            "Craig"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "male",
                "birthDate": "1963-01-22",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1169034",
            "resource": {
                "resourceType": "Patient",
                "id": "1169034",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T09:22:53.416+00:00",
                    "source": "#6dTh3c19pLwsCVDF"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Phillip <b>OWEN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>45</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>03 December 1962</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "45"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Owen",
                        "given": [
                            "Phillip"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "female",
                "birthDate": "1962-12-03",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1169060",
            "resource": {
                "resourceType": "Patient",
                "id": "1169060",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T10:07:34.375+00:00",
                    "source": "#AWY1eudIhLIWmUuU"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Rebecca <b>MCMAHON </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>14</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>02 August 1965</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "14"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Mcmahon",
                        "given": [
                            "Rebecca"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "female",
                "birthDate": "1965-08-02",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1169064",
            "resource": {
                "resourceType": "Patient",
                "id": "1169064",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T10:07:37.230+00:00",
                    "source": "#yIqQ5uGGH6mmkDig"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Paul <b>WELLS </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>18</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>07 June 1961</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "18"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Wells",
                        "given": [
                            "Paul"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "male",
                "birthDate": "1961-06-07",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "http://hapi.fhir.org/baseR4/Patient/1169067",
            "resource": {
                "resourceType": "Patient",
                "id": "1169067",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-05-20T10:07:39.306+00:00",
                    "source": "#hTH38NanlBvBk8ka"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Margie <b>CARUTHERS </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>21</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>28 July 1962</span></td></tr></tbody></table></div>"
                },
                "identifier": [
                    {
                        "use": "usual",
                        "value": "21"
                    }
                ],
                "active": true,
                "name": [
                    {
                        "use": "official",
                        "family": "Caruthers",
                        "given": [
                            "Margie"
                        ]
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "use": "mobile"
                    }
                ],
                "gender": "female",
                "birthDate": "1962-07-28",
                "deceasedBoolean": false,
                "address": [
                    {
                        "use": "home"
                    }
                ],
                "contact": [
                    {
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/patient-contact-relationship"
                                    }
                                ]
                            }
                        ],
                        "telecom": [
                            {
                                "system": "phone"
                            }
                        ],
                        "address": {
                            "use": "home"
                        }
                    }
                ]
            },
            "search": {
                "mode": "match"
            }
        }
    ]
};

export default getPatientsDefaultOutput;