gdjs.AboutMenuCode = {};
gdjs.AboutMenuCode.GDDindingObjects1= [];
gdjs.AboutMenuCode.GDDindingObjects2= [];
gdjs.AboutMenuCode.GDHalanganObjects1= [];
gdjs.AboutMenuCode.GDHalanganObjects2= [];
gdjs.AboutMenuCode.GDPemainObjects1= [];
gdjs.AboutMenuCode.GDPemainObjects2= [];
gdjs.AboutMenuCode.GDLantaiObjects1= [];
gdjs.AboutMenuCode.GDLantaiObjects2= [];
gdjs.AboutMenuCode.GDTombolObjects1= [];
gdjs.AboutMenuCode.GDTombolObjects2= [];
gdjs.AboutMenuCode.GDKunciObjects1= [];
gdjs.AboutMenuCode.GDKunciObjects2= [];
gdjs.AboutMenuCode.GDPintuObjects1= [];
gdjs.AboutMenuCode.GDPintuObjects2= [];
gdjs.AboutMenuCode.GDResultObjects1= [];
gdjs.AboutMenuCode.GDResultObjects2= [];
gdjs.AboutMenuCode.GDNextLevelBtnObjects1= [];
gdjs.AboutMenuCode.GDNextLevelBtnObjects2= [];
gdjs.AboutMenuCode.GDTryAgainBtnObjects1= [];
gdjs.AboutMenuCode.GDTryAgainBtnObjects2= [];
gdjs.AboutMenuCode.GDUpOnscreenObjects1= [];
gdjs.AboutMenuCode.GDUpOnscreenObjects2= [];
gdjs.AboutMenuCode.GDDownOnscreenObjects1= [];
gdjs.AboutMenuCode.GDDownOnscreenObjects2= [];
gdjs.AboutMenuCode.GDLeftOnscreenObjects1= [];
gdjs.AboutMenuCode.GDLeftOnscreenObjects2= [];
gdjs.AboutMenuCode.GDRightOnscreenObjects1= [];
gdjs.AboutMenuCode.GDRightOnscreenObjects2= [];
gdjs.AboutMenuCode.GDAboutBgObjects1= [];
gdjs.AboutMenuCode.GDAboutBgObjects2= [];

gdjs.AboutMenuCode.conditionTrue_0 = {val:false};
gdjs.AboutMenuCode.condition0IsTrue_0 = {val:false};
gdjs.AboutMenuCode.condition1IsTrue_0 = {val:false};


gdjs.AboutMenuCode.mapOfGDgdjs_46AboutMenuCode_46GDAboutBgObjects1Objects = Hashtable.newFrom({"AboutBg": gdjs.AboutMenuCode.GDAboutBgObjects1});gdjs.AboutMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.AboutMenuCode.condition0IsTrue_0.val = false;
{
gdjs.AboutMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.AboutMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.AboutMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AboutBg"), gdjs.AboutMenuCode.GDAboutBgObjects1);

gdjs.AboutMenuCode.condition0IsTrue_0.val = false;
{
gdjs.AboutMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AboutMenuCode.mapOfGDgdjs_46AboutMenuCode_46GDAboutBgObjects1Objects, runtimeScene, true, false);
}if (gdjs.AboutMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.AboutMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.AboutMenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.AboutMenuCode.eventsList1(runtimeScene);
}


};

gdjs.AboutMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AboutMenuCode.GDDindingObjects1.length = 0;
gdjs.AboutMenuCode.GDDindingObjects2.length = 0;
gdjs.AboutMenuCode.GDHalanganObjects1.length = 0;
gdjs.AboutMenuCode.GDHalanganObjects2.length = 0;
gdjs.AboutMenuCode.GDPemainObjects1.length = 0;
gdjs.AboutMenuCode.GDPemainObjects2.length = 0;
gdjs.AboutMenuCode.GDLantaiObjects1.length = 0;
gdjs.AboutMenuCode.GDLantaiObjects2.length = 0;
gdjs.AboutMenuCode.GDTombolObjects1.length = 0;
gdjs.AboutMenuCode.GDTombolObjects2.length = 0;
gdjs.AboutMenuCode.GDKunciObjects1.length = 0;
gdjs.AboutMenuCode.GDKunciObjects2.length = 0;
gdjs.AboutMenuCode.GDPintuObjects1.length = 0;
gdjs.AboutMenuCode.GDPintuObjects2.length = 0;
gdjs.AboutMenuCode.GDResultObjects1.length = 0;
gdjs.AboutMenuCode.GDResultObjects2.length = 0;
gdjs.AboutMenuCode.GDNextLevelBtnObjects1.length = 0;
gdjs.AboutMenuCode.GDNextLevelBtnObjects2.length = 0;
gdjs.AboutMenuCode.GDTryAgainBtnObjects1.length = 0;
gdjs.AboutMenuCode.GDTryAgainBtnObjects2.length = 0;
gdjs.AboutMenuCode.GDUpOnscreenObjects1.length = 0;
gdjs.AboutMenuCode.GDUpOnscreenObjects2.length = 0;
gdjs.AboutMenuCode.GDDownOnscreenObjects1.length = 0;
gdjs.AboutMenuCode.GDDownOnscreenObjects2.length = 0;
gdjs.AboutMenuCode.GDLeftOnscreenObjects1.length = 0;
gdjs.AboutMenuCode.GDLeftOnscreenObjects2.length = 0;
gdjs.AboutMenuCode.GDRightOnscreenObjects1.length = 0;
gdjs.AboutMenuCode.GDRightOnscreenObjects2.length = 0;
gdjs.AboutMenuCode.GDAboutBgObjects1.length = 0;
gdjs.AboutMenuCode.GDAboutBgObjects2.length = 0;

gdjs.AboutMenuCode.eventsList2(runtimeScene);
return;

}

gdjs['AboutMenuCode'] = gdjs.AboutMenuCode;
