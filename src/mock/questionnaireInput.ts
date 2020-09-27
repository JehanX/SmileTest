// tslint:disable
const questionnaireInput = {
    "resourceType": "Questionnaire",
    "id": "f201",
    "url": "http://hl7.org/fhir/Questionnaire/f201",
    "status": "active",
    "subjectType": [
        "Patient"
    ],
    "date": "2010",
    "item": [
        {
            "linkId": "1",
            "text": "Do you have allergies?",
            "type": "boolean"
        },
        {
            "linkId": "2",
            "text": "General questions",
            "type": "group",
            "item": [
                {
                    "linkId": "2.1",
                    "text": "What is your gender?",
                    "type": "string"
                },
                {
                    "linkId": "2.2",
                    "text": "What is your date of birth?",
                    "type": "date"
                },
                {
                    "linkId": "2.3",
                    "text": "What is your country of birth?",
                    "type": "string"
                },
                {
                    "linkId": "2.4",
                    "text": "What is your marital status?",
                    "type": "string"
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
                    "type": "boolean"
                },
                {
                    "linkId": "3.2",
                    "text": "Do you drink alchohol?",
                    "type": "boolean"
                }
            ]
        }
    ]
};

export default questionnaireInput;
