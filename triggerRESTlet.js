/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define([],

function() {
    
   
    function pageInit(scriptContext) {
        var dataGetFromRestlets=https.get('/app/site/hosting/restlet.nl?script=1496&deploy=1')
        alert("hero");
    var id = scriptContext.get
    	var data={};
    	data={
    			"firstname":"Surya",
    			"lastname": "prakash",
    			"email":"something@demo.in"
    	}
    	var headerObj ={
    			name:'Accept-Language',
    			value:'en-us'
    	}
    	var response = https.post({
    		url:'/app/site/hosting/restlet.nl?script=1496&deploy=1',
    		body:data,
    		headers:headerObj
    	});
    log.debug(data);
    }

    

    return {
        pageInit: pageInit,
        
    };
    
});
