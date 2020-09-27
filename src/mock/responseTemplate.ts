const responseTemplate = {
    resourceType: 'QuestionnaireResponse',
    id: '', // Unique id for this set of answers
    basedOn: [{ reference: '#question' }], // Request fulfilled by this QuestionnaireResponse
    partOf: [{ reference: 'Procedure/f201' }], // Part of this action
    status: 'completed', // R!  in-progress | completed | amended | entered-in-error | stopped
    subject: { reference: '#patsub' }, // The subject of the questions
    encounter: { reference: 'Encounter/example' }, // Encounter created as part of
    authored: '2013-02-19T14:15:00-05:00', // Date the answers were gathered
    author: { reference: '#questauth' }, // Person who received and recorded the answers
    source: { reference: '#source' }, // The person who answered the questions
    item: [
        {
            "linkId": "1",
            "text": "Do you have allergies?",
            "type": "boolean",
            "answer": [
                {
                    "valueBoolean": true
                }
            ]
        },
        {
            "linkId": "2",
            "text": "General questions",
            "type": "group",
            "item": [
                {
                    "linkId": "2.1",
                    "text": "What is your gender?",
                    "type": "string",
                    "answer": [
                        {
                            "valueString": ""
                        }
                    ]
                },
                {
                    "linkId": "2.2",
                    "text": "What is your date of birth?",
                    "type": "date",
                    "answer": [
                        {
                            "valueDate": null
                        }
                    ]
                },
                {
                    "linkId": "2.3",
                    "text": "What is your country of birth?",
                    "type": "string",
                    "answer": [
                        {
                            "valueString": ""
                        }
                    ]
                },
                {
                    "linkId": "2.4",
                    "text": "What is your marital status?",
                    "type": "string",
                    "answer": [
                        {
                            "valueString": ""
                        }
                    ]
                }
            ]
        },
        {
            "linkId": "3",
            "text": "Intoxications",
            "type": "group",
            "item": [
                {
                    "linkId": "3.1",
                    "text": "Do you smoke?",
                    "type": "boolean",
                    "answer": [
                        {
                            "valueBoolean": true
                        }
                    ]
                },
                {
                    "linkId": "3.2",
                    "text": "Do you drink alchohol?",
                    "type": "boolean",
                    "answer": [
                        {
                            "valueBoolean": true
                        }
                    ]
                }
            ]
        }
    ]
};

export default responseTemplate;
