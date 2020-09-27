// tslint:disable
const questionnaireOutput = [
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
];

export default questionnaireOutput;
