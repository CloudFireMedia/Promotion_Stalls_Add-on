var SCRIPT_NAME = "Promotion Stalls Bound Script"
var SCRIPT_VERSION = "v1.6"

var PROPERTIES = PropertiesService.getDocumentProperties()
var LOCK = LockService.getDocumentLock()

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

function saturday()                  {PromotionStalls.saturday                  (null, null, PROPERTIES, LOCK)}
function sunday()                    {PromotionStalls.sunday                    (null, null, PROPERTIES, LOCK)}
function startNotificationTriggers() {PromotionStalls.startNotificationTriggers (null, null, PROPERTIES, LOCK)}
function stopNotificationTriggers()  {PromotionStalls.stopNotificationTriggers  (null, null, PROPERTIES, LOCK)}
function hideEmptyColumns()          {PromotionStalls.hideEmptyColumns          (null, null, PROPERTIES, LOCK)}
function unHideAllColumns()          {PromotionStalls.unHideAllColumns          (null, null, PROPERTIES, LOCK)}
function deleteExpiredRows()         {PromotionStalls.deleteExpiredRows         (null, null, PROPERTIES, LOCK)}
function addNewRow()                 {PromotionStalls.addNewRow                 (null, null, PROPERTIES, LOCK)}