gdjs.LevelMenuCode = {};
gdjs.LevelMenuCode.GDDindingObjects1= [];
gdjs.LevelMenuCode.GDDindingObjects2= [];
gdjs.LevelMenuCode.GDHalanganObjects1= [];
gdjs.LevelMenuCode.GDHalanganObjects2= [];
gdjs.LevelMenuCode.GDPemainObjects1= [];
gdjs.LevelMenuCode.GDPemainObjects2= [];
gdjs.LevelMenuCode.GDLantaiObjects1= [];
gdjs.LevelMenuCode.GDLantaiObjects2= [];
gdjs.LevelMenuCode.GDTombolObjects1= [];
gdjs.LevelMenuCode.GDTombolObjects2= [];
gdjs.LevelMenuCode.GDKunciObjects1= [];
gdjs.LevelMenuCode.GDKunciObjects2= [];
gdjs.LevelMenuCode.GDPintuObjects1= [];
gdjs.LevelMenuCode.GDPintuObjects2= [];
gdjs.LevelMenuCode.GDResultObjects1= [];
gdjs.LevelMenuCode.GDResultObjects2= [];
gdjs.LevelMenuCode.GDNextLevelBtnObjects1= [];
gdjs.LevelMenuCode.GDNextLevelBtnObjects2= [];
gdjs.LevelMenuCode.GDTryAgainBtnObjects1= [];
gdjs.LevelMenuCode.GDTryAgainBtnObjects2= [];
gdjs.LevelMenuCode.GDUpOnscreenObjects1= [];
gdjs.LevelMenuCode.GDUpOnscreenObjects2= [];
gdjs.LevelMenuCode.GDDownOnscreenObjects1= [];
gdjs.LevelMenuCode.GDDownOnscreenObjects2= [];
gdjs.LevelMenuCode.GDLeftOnscreenObjects1= [];
gdjs.LevelMenuCode.GDLeftOnscreenObjects2= [];
gdjs.LevelMenuCode.GDRightOnscreenObjects1= [];
gdjs.LevelMenuCode.GDRightOnscreenObjects2= [];
gdjs.LevelMenuCode.GDLevelSelectObjects1= [];
gdjs.LevelMenuCode.GDLevelSelectObjects2= [];
gdjs.LevelMenuCode.GDLevelObjects1= [];
gdjs.LevelMenuCode.GDLevelObjects2= [];

gdjs.LevelMenuCode.conditionTrue_0 = {val:false};
gdjs.LevelMenuCode.condition0IsTrue_0 = {val:false};
gdjs.LevelMenuCode.condition1IsTrue_0 = {val:false};


gdjs.LevelMenuCode.mapOfGDgdjs_46LevelMenuCode_46GDLevelObjects1Objects = Hashtable.newFrom({"Level": gdjs.LevelMenuCode.GDLevelObjects1});gdjs.LevelMenuCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.LevelMenuCode.GDLevelObjects1 */

gdjs.LevelMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelMenuCode.GDLevelObjects1.length;i<l;++i) {
    if ( gdjs.LevelMenuCode.GDLevelObjects1[i].isCollidingWithPoint(95, 127) ) {
        gdjs.LevelMenuCode.condition0IsTrue_0.val = true;
        gdjs.LevelMenuCode.GDLevelObjects1[k] = gdjs.LevelMenuCode.GDLevelObjects1[i];
        ++k;
    }
}
gdjs.LevelMenuCode.GDLevelObjects1.length = k;}if (gdjs.LevelMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameLevel1", false);
}}

}


};gdjs.LevelMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.LevelMenuCode.condition0IsTrue_0.val = false;
{
gdjs.LevelMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.LevelMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LevelMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.LevelMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.LevelMenuCode.GDLevelObjects1);

gdjs.LevelMenuCode.condition0IsTrue_0.val = false;
{
gdjs.LevelMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LevelMenuCode.mapOfGDgdjs_46LevelMenuCode_46GDLevelObjects1Objects, runtimeScene, true, false);
}if (gdjs.LevelMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LevelMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.LevelMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelMenuCode.GDDindingObjects1.length = 0;
gdjs.LevelMenuCode.GDDindingObjects2.length = 0;
gdjs.LevelMenuCode.GDHalanganObjects1.length = 0;
gdjs.LevelMenuCode.GDHalanganObjects2.length = 0;
gdjs.LevelMenuCode.GDPemainObjects1.length = 0;
gdjs.LevelMenuCode.GDPemainObjects2.length = 0;
gdjs.LevelMenuCode.GDLantaiObjects1.length = 0;
gdjs.LevelMenuCode.GDLantaiObjects2.length = 0;
gdjs.LevelMenuCode.GDTombolObjects1.length = 0;
gdjs.LevelMenuCode.GDTombolObjects2.length = 0;
gdjs.LevelMenuCode.GDKunciObjects1.length = 0;
gdjs.LevelMenuCode.GDKunciObjects2.length = 0;
gdjs.LevelMenuCode.GDPintuObjects1.length = 0;
gdjs.LevelMenuCode.GDPintuObjects2.length = 0;
gdjs.LevelMenuCode.GDResultObjects1.length = 0;
gdjs.LevelMenuCode.GDResultObjects2.length = 0;
gdjs.LevelMenuCode.GDNextLevelBtnObjects1.length = 0;
gdjs.LevelMenuCode.GDNextLevelBtnObjects2.length = 0;
gdjs.LevelMenuCode.GDTryAgainBtnObjects1.length = 0;
gdjs.LevelMenuCode.GDTryAgainBtnObjects2.length = 0;
gdjs.LevelMenuCode.GDUpOnscreenObjects1.length = 0;
gdjs.LevelMenuCode.GDUpOnscreenObjects2.length = 0;
gdjs.LevelMenuCode.GDDownOnscreenObjects1.length = 0;
gdjs.LevelMenuCode.GDDownOnscreenObjects2.length = 0;
gdjs.LevelMenuCode.GDLeftOnscreenObjects1.length = 0;
gdjs.LevelMenuCode.GDLeftOnscreenObjects2.length = 0;
gdjs.LevelMenuCode.GDRightOnscreenObjects1.length = 0;
gdjs.LevelMenuCode.GDRightOnscreenObjects2.length = 0;
gdjs.LevelMenuCode.GDLevelSelectObjects1.length = 0;
gdjs.LevelMenuCode.GDLevelSelectObjects2.length = 0;
gdjs.LevelMenuCode.GDLevelObjects1.length = 0;
gdjs.LevelMenuCode.GDLevelObjects2.length = 0;

gdjs.LevelMenuCode.eventsList2(runtimeScene);
return;

}

gdjs['LevelMenuCode'] = gdjs.LevelMenuCode;
