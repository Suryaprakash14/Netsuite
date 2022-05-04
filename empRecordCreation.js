/**
 * @NApiVersion 2.x
 * @NScriptType Restlet
 * @NModuleScope SameAccount
 */
define(['N/https'],

function(https) {

	 /**
     * Version 2.0
     * Date    04 FEB 2022
     * Author  Suryaprakash Ragavan
     *
     * Script Description : Creation Employee Record by passing values from ClientScript
     **/
    function doGet(requestParams) {

    }


    function doPut(requestBody) {

    }

    function doPost(requestBody) {
    	log.debug('post method call',datain);
    	var firstname = datain.firstname;
    	var lastname = datain.lastname;
    	var email = datain.email;
    	log.debug('post request',"firstname => "+firstname+" lastname => "+lastname+" emailid ");

   	 var scriptDeployment = record.create({
		    type: record.Type.Employee,
		    isDynamic: true,
		    defaultValues: {
		    	firstname:firstname,
		    	lastname:lastname,
		    	email:email,
		    	subsidiary:3
		        	}
		});
   	var recordId = scriptDeployment.save({
   	    enableSourcing: true,
   	    ignoreMandatoryFields: true
   	});

    }

    function doDelete(requestParams) {

    }

    return {
        'get': doGet,
        'put': doPut,
        'post': doPost,
        'delete': doDelete
    };
    
});
