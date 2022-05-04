/**
* @NApiVersion 2.x
* @NScriptType ScheduledScript
* @NModuleScope SameAccount
*/
define(['N/search', 'N/record'],



function(search, record) {

/**
* Definition of the Scheduled script trigger point.
*
* @param {Object} scriptContext
* @param {string} scriptContext.type - The context in which the script is executed. It is one of the values from the scriptContext.InvocationType enum.
* @Since 2015.2
*/
function execute(context) {
	 /**
     * Version 2.0
     * Date   01 FEB 2022
     * Author Suryaprakash Ragavan
     * 
     * Script Description : Updating a custom field created in functional way with same text 
     **/
try
{
var searchCustomer = search.create({
type: search.Type.Customer,
columns: [{
name: 'custentity_schedule_script_comment'
}],
});

var searchResult = searchCustomer.run();
if(searchResult.length>0)
{

log.debug({title:'searchResult',details:searchResult.length});

for(var i =0 ; i<searchResult.length;i++)
{
var value =searchResult[i];

var id = record.submitFields({
type: record.Type.SALES_ORDER,
id: value,
values: {
	custentity_schedule_script_comment: 'memo updated'
},
options: {
enableSourcing: false,
ignoreMandatoryFields : true
}

});
}
}
}
catch(ex)
{
log.debug({title : "Exception", details : ex});
}
}



return {
execute: execute
};

});