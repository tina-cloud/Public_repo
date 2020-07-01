'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    
    var outputMessage = "";
    if (event.paymentSuccess === true){
         outputMessage = "We have received your order and working on it...";
    }else{
        outputMessage = "Sorry your payment didn't go through, please try again...";
       
    }
    
    callback(null, {"orderstatusText": outputMessage});  
    
};
