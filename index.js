// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const data = [
         'सूरज से दूर होने के बावजूद, Venus का तापमान Mercury से ज़्यादा होता हैं',
        'Earth के तुलना से Mars में सूरज का size तक़रीबन आधा हैं',
        'सारे ग्रहों में Jupiter का दिन सबसे कम हैं',
        'सूरज का shape एकदम गेंद आकार में हैं',
        'यदि आप जमीन से kangaroo की पूंछ उठाते हैं तो यह असंभव है.',
        ' $ चिन्ह की शुरूआत 1788 से हुई.',
        'मानव इतिहास में आज तक कुल मिलाकर 100 अरब से ज्यादा लोगो की मृत्यु हुई है.',
        'Saudi Arabia मीट के लिए ऑस्ट्रेलिया से ऊंटों का आयात करता है.रता है.',
        'हर सेकंड अमेरिका में 100 पाउंड चॉकलेट खाई जाती है.',
        'दुनिया में 50 % से ज्यादा Football अकेला pakistan बनाता है.',
        'धरती पर इतना Gold है, जो5 फीट की गहराई तक इसकी पूरी सतह को ढंक सकता है.',
        'हाथ़ी साफ सुथरा रहना पसंद करते हैं और हर रोज नहाते हैं.',
        'सांप साल में कम से कम तीन बार अपनी पूरी चमड़ी निकालते हैं.',
        'गूगल की 90% से अधिक कमाई  Advertisements से होती है.',
        'Singapore दुनिया का बहुत ही महंगा देश है यहाँ हर छठा आदमी मिलिनेयर है।',
        'Giraffe एक दिन का 80 फीसदी वक्त खाने में बिताते हैं।',
        'Facebook हर महीने 3 करोड़ डॉलर सिर्फ hosting पर ही खर्च करता है.',
       'Subash Chandra Bose जी को नेताजी कहने वाला पहला शख्स Adolf Hitler ही था.',
        'कुत्तोंको हरे और लाल रंग में अंतर नही पता लगता.',
        'मेढ़क हमारी तरह पानी नही पीते, बल्कि त्वचा के द्वारा सोख लेते है.',
        'जानवरों में सबसे लंबी याददाश्त Dolphin की ही होती है.',
        'चार हफ्ते की प्रेग्नेंसी के बाद बच्चे का दिल धड़कना शुरू हो जाता है.',
        'बंदरों और मनुष्यों का 98 प्रतीशत DNA आपस में मिलता है.',
        'यदि आप पुदीना खाते समय अपनी नाक बंद कर लोगे तो आप उसका टेस्ट नही ले पाएगे.',
         'मनुष्य के द्वारा सबसे ज्यादा गहराई तक खोदा जाने वाला गड्ढा 1989 में रूस में खोदा गया था जिसकी गहराई 262 किलोमीटर थी.',
         '1907 में पहली बार “Television” शब्द अस्तित्व में आया और Dictionary में जोड़ा गया.',
        'Eiffel Tower को अब तक कुल 25 करोड़ लोग देख चुके हैं। और हर साल इसे देखने के लिए 70 लाख लोग आते है'
];

/* 
        'बुध ग्रह में एक साल में केवल अठासी दिन होते हैं',
        'सूरज से दूर होने के बावजूद, Venus का तापमान Mercury से ज़्यादा होता हैं',
        'Earth के तुलना से Mars में सूरज का size तक़रीबन आधा हैं',
        'सारे ग्रहों में Jupiter का दिन सबसे कम हैं',
        'सूरज का shape एकदम गेंद आकार में हैं'
*/ 
const GET_FACT_MESSAGE = "यह रहा आपका fact  ";

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'नमस्ते, आप hello या help कह सकते हो. आप क्या करना चाहेंगे?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speechText = 'नमस्ते दोस्त';
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const GetNewFactIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GetNewFactIntent';
    },
    handle(handlerInput) {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;


        const speechText = speechOutput;
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        GetNewFactIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();
