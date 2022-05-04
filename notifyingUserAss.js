/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/runtime','N/error'],

function(runtime,error) {

	 /**
     * Version 2.0
     * Date    03 FEB 2022
     * Author  Suryaprakash Ragavan
     *
     * Script Description : Notify user that he cannot create a Sales Order when logged in as a admin role.
     **/
    function beforeLoad(scriptContext) {
var userRole = runtime.getCurrentUser();
    	log.debug('The role is '+userRole.role);
    	   if(userRole.role == 3 && scriptContext.Type.CREATE ){
var errorReq = error.create({
  name:'Notification Error',
  message:'Cannot create SO with login role as Admin',
  notifyOff:false
});
log.debug("Error text "+ errorReq);
      }
    }


    function beforeSubmit(scriptContext) {
    	var userRole = runtime.getCurrentUser();
    	log.debug('The role is '+userRole.role);
      if(userRole.role == 3 && scriptContext.Type.CREATE ){
var errorReq = error.create({
  name:'Notification Error',
  message:'Cannot create SO with login role as Admin',
  notifyOff:false
});
log.debug("Error text "+ errorReq);
      }

    }


    function afterSubmit(scriptContext) {

    }

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit,
        afterSubmit: afterSubmit
    };

});
