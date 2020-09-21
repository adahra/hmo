gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDDindingObjects1= [];
gdjs.MainMenuCode.GDDindingObjects2= [];
gdjs.MainMenuCode.GDDindingObjects3= [];
gdjs.MainMenuCode.GDDindingObjects4= [];
gdjs.MainMenuCode.GDHalanganObjects1= [];
gdjs.MainMenuCode.GDHalanganObjects2= [];
gdjs.MainMenuCode.GDHalanganObjects3= [];
gdjs.MainMenuCode.GDHalanganObjects4= [];
gdjs.MainMenuCode.GDPemainObjects1= [];
gdjs.MainMenuCode.GDPemainObjects2= [];
gdjs.MainMenuCode.GDPemainObjects3= [];
gdjs.MainMenuCode.GDPemainObjects4= [];
gdjs.MainMenuCode.GDLantaiObjects1= [];
gdjs.MainMenuCode.GDLantaiObjects2= [];
gdjs.MainMenuCode.GDLantaiObjects3= [];
gdjs.MainMenuCode.GDLantaiObjects4= [];
gdjs.MainMenuCode.GDTombolObjects1= [];
gdjs.MainMenuCode.GDTombolObjects2= [];
gdjs.MainMenuCode.GDTombolObjects3= [];
gdjs.MainMenuCode.GDTombolObjects4= [];
gdjs.MainMenuCode.GDKunciObjects1= [];
gdjs.MainMenuCode.GDKunciObjects2= [];
gdjs.MainMenuCode.GDKunciObjects3= [];
gdjs.MainMenuCode.GDKunciObjects4= [];
gdjs.MainMenuCode.GDPintuObjects1= [];
gdjs.MainMenuCode.GDPintuObjects2= [];
gdjs.MainMenuCode.GDPintuObjects3= [];
gdjs.MainMenuCode.GDPintuObjects4= [];
gdjs.MainMenuCode.GDResultObjects1= [];
gdjs.MainMenuCode.GDResultObjects2= [];
gdjs.MainMenuCode.GDResultObjects3= [];
gdjs.MainMenuCode.GDResultObjects4= [];
gdjs.MainMenuCode.GDNextLevelBtnObjects1= [];
gdjs.MainMenuCode.GDNextLevelBtnObjects2= [];
gdjs.MainMenuCode.GDNextLevelBtnObjects3= [];
gdjs.MainMenuCode.GDNextLevelBtnObjects4= [];
gdjs.MainMenuCode.GDTryAgainBtnObjects1= [];
gdjs.MainMenuCode.GDTryAgainBtnObjects2= [];
gdjs.MainMenuCode.GDTryAgainBtnObjects3= [];
gdjs.MainMenuCode.GDTryAgainBtnObjects4= [];
gdjs.MainMenuCode.GDUpOnscreenObjects1= [];
gdjs.MainMenuCode.GDUpOnscreenObjects2= [];
gdjs.MainMenuCode.GDUpOnscreenObjects3= [];
gdjs.MainMenuCode.GDUpOnscreenObjects4= [];
gdjs.MainMenuCode.GDDownOnscreenObjects1= [];
gdjs.MainMenuCode.GDDownOnscreenObjects2= [];
gdjs.MainMenuCode.GDDownOnscreenObjects3= [];
gdjs.MainMenuCode.GDDownOnscreenObjects4= [];
gdjs.MainMenuCode.GDLeftOnscreenObjects1= [];
gdjs.MainMenuCode.GDLeftOnscreenObjects2= [];
gdjs.MainMenuCode.GDLeftOnscreenObjects3= [];
gdjs.MainMenuCode.GDLeftOnscreenObjects4= [];
gdjs.MainMenuCode.GDRightOnscreenObjects1= [];
gdjs.MainMenuCode.GDRightOnscreenObjects2= [];
gdjs.MainMenuCode.GDRightOnscreenObjects3= [];
gdjs.MainMenuCode.GDRightOnscreenObjects4= [];
gdjs.MainMenuCode.GDMainMenuBgObjects1= [];
gdjs.MainMenuCode.GDMainMenuBgObjects2= [];
gdjs.MainMenuCode.GDMainMenuBgObjects3= [];
gdjs.MainMenuCode.GDMainMenuBgObjects4= [];
gdjs.MainMenuCode.GDPlayBtnObjects1= [];
gdjs.MainMenuCode.GDPlayBtnObjects2= [];
gdjs.MainMenuCode.GDPlayBtnObjects3= [];
gdjs.MainMenuCode.GDPlayBtnObjects4= [];
gdjs.MainMenuCode.GDAboutBtnObjects1= [];
gdjs.MainMenuCode.GDAboutBtnObjects2= [];
gdjs.MainMenuCode.GDAboutBtnObjects3= [];
gdjs.MainMenuCode.GDAboutBtnObjects4= [];
gdjs.MainMenuCode.GDExitBtnObjects1= [];
gdjs.MainMenuCode.GDExitBtnObjects2= [];
gdjs.MainMenuCode.GDExitBtnObjects3= [];
gdjs.MainMenuCode.GDExitBtnObjects4= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayBtnObjects3Objects = Hashtable.newFrom({"PlayBtn": gdjs.MainMenuCode.GDPlayBtnObjects3});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameLevel1", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayBtnObjects2Objects = Hashtable.newFrom({"PlayBtn": gdjs.MainMenuCode.GDPlayBtnObjects2});gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MainMenuCode.GDPlayBtnObjects3);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayBtnObjects3Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayBtnObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayBtnObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayBtnObjects3[i].setAnimationName("On");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBtn"), gdjs.MainMenuCode.GDPlayBtnObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayBtnObjects2Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayBtnObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayBtnObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayBtnObjects2[i].setAnimationName("Off");
}
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDAboutBtnObjects3Objects = Hashtable.newFrom({"AboutBtn": gdjs.MainMenuCode.GDAboutBtnObjects3});gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AboutMenu", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDAboutBtnObjects2Objects = Hashtable.newFrom({"AboutBtn": gdjs.MainMenuCode.GDAboutBtnObjects2});gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AboutBtn"), gdjs.MainMenuCode.GDAboutBtnObjects3);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDAboutBtnObjects3Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDAboutBtnObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDAboutBtnObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDAboutBtnObjects3[i].setAnimationName("On");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AboutBtn"), gdjs.MainMenuCode.GDAboutBtnObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDAboutBtnObjects2Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDAboutBtnObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDAboutBtnObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDAboutBtnObjects2[i].setAnimationName("Off");
}
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDExitBtnObjects2Objects = Hashtable.newFrom({"ExitBtn": gdjs.MainMenuCode.GDExitBtnObjects2});gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDExitBtnObjects1Objects = Hashtable.newFrom({"ExitBtn": gdjs.MainMenuCode.GDExitBtnObjects1});gdjs.MainMenuCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ExitBtn"), gdjs.MainMenuCode.GDExitBtnObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDExitBtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDExitBtnObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDExitBtnObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitBtnObjects2[i].setAnimationName("On");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitBtn"), gdjs.MainMenuCode.GDExitBtnObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDExitBtnObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDExitBtnObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDExitBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDExitBtnObjects1[i].setAnimationName("Off");
}
}}

}


};gdjs.MainMenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList1(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList3(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList5(runtimeScene);
}


};gdjs.MainMenuCode.eventsList7 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList6(runtimeScene);
}


};gdjs.MainMenuCode.eventsList8 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList7(runtimeScene);
}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDDindingObjects1.length = 0;
gdjs.MainMenuCode.GDDindingObjects2.length = 0;
gdjs.MainMenuCode.GDDindingObjects3.length = 0;
gdjs.MainMenuCode.GDDindingObjects4.length = 0;
gdjs.MainMenuCode.GDHalanganObjects1.length = 0;
gdjs.MainMenuCode.GDHalanganObjects2.length = 0;
gdjs.MainMenuCode.GDHalanganObjects3.length = 0;
gdjs.MainMenuCode.GDHalanganObjects4.length = 0;
gdjs.MainMenuCode.GDPemainObjects1.length = 0;
gdjs.MainMenuCode.GDPemainObjects2.length = 0;
gdjs.MainMenuCode.GDPemainObjects3.length = 0;
gdjs.MainMenuCode.GDPemainObjects4.length = 0;
gdjs.MainMenuCode.GDLantaiObjects1.length = 0;
gdjs.MainMenuCode.GDLantaiObjects2.length = 0;
gdjs.MainMenuCode.GDLantaiObjects3.length = 0;
gdjs.MainMenuCode.GDLantaiObjects4.length = 0;
gdjs.MainMenuCode.GDTombolObjects1.length = 0;
gdjs.MainMenuCode.GDTombolObjects2.length = 0;
gdjs.MainMenuCode.GDTombolObjects3.length = 0;
gdjs.MainMenuCode.GDTombolObjects4.length = 0;
gdjs.MainMenuCode.GDKunciObjects1.length = 0;
gdjs.MainMenuCode.GDKunciObjects2.length = 0;
gdjs.MainMenuCode.GDKunciObjects3.length = 0;
gdjs.MainMenuCode.GDKunciObjects4.length = 0;
gdjs.MainMenuCode.GDPintuObjects1.length = 0;
gdjs.MainMenuCode.GDPintuObjects2.length = 0;
gdjs.MainMenuCode.GDPintuObjects3.length = 0;
gdjs.MainMenuCode.GDPintuObjects4.length = 0;
gdjs.MainMenuCode.GDResultObjects1.length = 0;
gdjs.MainMenuCode.GDResultObjects2.length = 0;
gdjs.MainMenuCode.GDResultObjects3.length = 0;
gdjs.MainMenuCode.GDResultObjects4.length = 0;
gdjs.MainMenuCode.GDNextLevelBtnObjects1.length = 0;
gdjs.MainMenuCode.GDNextLevelBtnObjects2.length = 0;
gdjs.MainMenuCode.GDNextLevelBtnObjects3.length = 0;
gdjs.MainMenuCode.GDNextLevelBtnObjects4.length = 0;
gdjs.MainMenuCode.GDTryAgainBtnObjects1.length = 0;
gdjs.MainMenuCode.GDTryAgainBtnObjects2.length = 0;
gdjs.MainMenuCode.GDTryAgainBtnObjects3.length = 0;
gdjs.MainMenuCode.GDTryAgainBtnObjects4.length = 0;
gdjs.MainMenuCode.GDUpOnscreenObjects1.length = 0;
gdjs.MainMenuCode.GDUpOnscreenObjects2.length = 0;
gdjs.MainMenuCode.GDUpOnscreenObjects3.length = 0;
gdjs.MainMenuCode.GDUpOnscreenObjects4.length = 0;
gdjs.MainMenuCode.GDDownOnscreenObjects1.length = 0;
gdjs.MainMenuCode.GDDownOnscreenObjects2.length = 0;
gdjs.MainMenuCode.GDDownOnscreenObjects3.length = 0;
gdjs.MainMenuCode.GDDownOnscreenObjects4.length = 0;
gdjs.MainMenuCode.GDLeftOnscreenObjects1.length = 0;
gdjs.MainMenuCode.GDLeftOnscreenObjects2.length = 0;
gdjs.MainMenuCode.GDLeftOnscreenObjects3.length = 0;
gdjs.MainMenuCode.GDLeftOnscreenObjects4.length = 0;
gdjs.MainMenuCode.GDRightOnscreenObjects1.length = 0;
gdjs.MainMenuCode.GDRightOnscreenObjects2.length = 0;
gdjs.MainMenuCode.GDRightOnscreenObjects3.length = 0;
gdjs.MainMenuCode.GDRightOnscreenObjects4.length = 0;
gdjs.MainMenuCode.GDMainMenuBgObjects1.length = 0;
gdjs.MainMenuCode.GDMainMenuBgObjects2.length = 0;
gdjs.MainMenuCode.GDMainMenuBgObjects3.length = 0;
gdjs.MainMenuCode.GDMainMenuBgObjects4.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects1.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects2.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects3.length = 0;
gdjs.MainMenuCode.GDPlayBtnObjects4.length = 0;
gdjs.MainMenuCode.GDAboutBtnObjects1.length = 0;
gdjs.MainMenuCode.GDAboutBtnObjects2.length = 0;
gdjs.MainMenuCode.GDAboutBtnObjects3.length = 0;
gdjs.MainMenuCode.GDAboutBtnObjects4.length = 0;
gdjs.MainMenuCode.GDExitBtnObjects1.length = 0;
gdjs.MainMenuCode.GDExitBtnObjects2.length = 0;
gdjs.MainMenuCode.GDExitBtnObjects3.length = 0;
gdjs.MainMenuCode.GDExitBtnObjects4.length = 0;

gdjs.MainMenuCode.eventsList8(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
