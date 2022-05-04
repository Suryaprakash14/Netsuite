/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/currentRecord'],

function(currentRecord) {
   
    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {string} scriptContext.type - Trigger type
     * @param {Form} scriptContext.form - Current form
     * @Since 2015.2
     */
    function beforeLoad(scriptContext) {
        var currenRec=scriptContext.newRecord;
        var vendorN = currenRec.getValue({
          fieldId:'entity'
        });

        if(vendorN == 13439){
          currenRec.setValue({
          fieldId:'memo',
          value:'CS training Session'
          });
        }
        var memoval=currenRec.getValue({
          fieldId:'memo'
        });

        log.debug({
          title: 'Vendor Name',
          details: 'value of vendorName is: '+vendorN
      });
        log.debug({
          title: 'Memo Value',
          details: 'value of Memo Value After submit is: '+memoval
      });

    }

    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {Record} scriptContext.oldRecord - Old record
     * @param {string} scriptContext.type - Trigger type
     * @Since 2015.2
     */
    function beforeSubmit(scriptContext) {

    }

    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {Record} scriptContext.oldRecord - Old record
     * @param {string} scriptContext.type - Trigger type
     * @Since 2015.2
     */
    function afterSubmit(scriptContext) {

    }

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit,
        afterSubmit: afterSubmit
    };
    
});
