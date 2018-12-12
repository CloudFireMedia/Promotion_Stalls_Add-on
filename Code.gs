var SCRIPT_NAME = "Promotion Stalls Bound Script"
var SCRIPT_VERSION = "v1.7"

function onInstall() {
  startNotificationTriggers()
  onOpen()
}

function onOpen() {

  SpreadsheetApp.getUi()
    .createMenu('CloudFire')
    .addItem('Hide Empty Columns', 'hideEmptyColumns')
    .addItem('unHide Empty Columns', 'unHideAllColumns')
    .addSeparator()
	.addItem('Initialize notification triggers', 'startNotificationTriggers')
	.addItem('Stop notification triggers', 'stopNotificationTriggers')    
    .addSeparator()
	.addItem('Send Saturday notifications', 'saturday')    
	.addItem('Send Sunday notifications', 'sunday')    
    .addSeparator()
	.addItem('Delete expired rows', 'deleteExpiredRows')    
//	.addItem('Add new rows', 'addNewRow') // TODO - https://trello.com/c/I6fx54K8   
    .addToUi();   
}

function saturday()                  {PromotionStalls.saturday                  ()}
function sunday()                    {PromotionStalls.sunday                    ()}
function startNotificationTriggers() {PromotionStalls.startNotificationTriggers ()}
function stopNotificationTriggers()  {PromotionStalls.stopNotificationTriggers  ()}
function hideEmptyColumns()          {PromotionStalls.hideEmptyColumns          ()}
function unHideAllColumns()          {PromotionStalls.unHideAllColumns          ()}
function deleteExpiredRows()         {PromotionStalls.deleteExpiredRows         ()}
function addNewRow()                 {PromotionStalls.addNewRow                 ()}