gdjs.GameLevel2Code = {};
gdjs.GameLevel2Code.forEachIndex4 = 0;

gdjs.GameLevel2Code.forEachObjects4 = [];

gdjs.GameLevel2Code.forEachTemporary4 = null;

gdjs.GameLevel2Code.forEachTotalCount4 = 0;

gdjs.GameLevel2Code.GDDindingObjects1= [];
gdjs.GameLevel2Code.GDDindingObjects2= [];
gdjs.GameLevel2Code.GDDindingObjects3= [];
gdjs.GameLevel2Code.GDDindingObjects4= [];
gdjs.GameLevel2Code.GDDindingObjects5= [];
gdjs.GameLevel2Code.GDHalanganObjects1= [];
gdjs.GameLevel2Code.GDHalanganObjects2= [];
gdjs.GameLevel2Code.GDHalanganObjects3= [];
gdjs.GameLevel2Code.GDHalanganObjects4= [];
gdjs.GameLevel2Code.GDHalanganObjects5= [];
gdjs.GameLevel2Code.GDPemainObjects1= [];
gdjs.GameLevel2Code.GDPemainObjects2= [];
gdjs.GameLevel2Code.GDPemainObjects3= [];
gdjs.GameLevel2Code.GDPemainObjects4= [];
gdjs.GameLevel2Code.GDPemainObjects5= [];
gdjs.GameLevel2Code.GDLantaiObjects1= [];
gdjs.GameLevel2Code.GDLantaiObjects2= [];
gdjs.GameLevel2Code.GDLantaiObjects3= [];
gdjs.GameLevel2Code.GDLantaiObjects4= [];
gdjs.GameLevel2Code.GDLantaiObjects5= [];
gdjs.GameLevel2Code.GDTombolObjects1= [];
gdjs.GameLevel2Code.GDTombolObjects2= [];
gdjs.GameLevel2Code.GDTombolObjects3= [];
gdjs.GameLevel2Code.GDTombolObjects4= [];
gdjs.GameLevel2Code.GDTombolObjects5= [];
gdjs.GameLevel2Code.GDKunciObjects1= [];
gdjs.GameLevel2Code.GDKunciObjects2= [];
gdjs.GameLevel2Code.GDKunciObjects3= [];
gdjs.GameLevel2Code.GDKunciObjects4= [];
gdjs.GameLevel2Code.GDKunciObjects5= [];
gdjs.GameLevel2Code.GDPintuObjects1= [];
gdjs.GameLevel2Code.GDPintuObjects2= [];
gdjs.GameLevel2Code.GDPintuObjects3= [];
gdjs.GameLevel2Code.GDPintuObjects4= [];
gdjs.GameLevel2Code.GDPintuObjects5= [];
gdjs.GameLevel2Code.GDResultObjects1= [];
gdjs.GameLevel2Code.GDResultObjects2= [];
gdjs.GameLevel2Code.GDResultObjects3= [];
gdjs.GameLevel2Code.GDResultObjects4= [];
gdjs.GameLevel2Code.GDResultObjects5= [];
gdjs.GameLevel2Code.GDNextLevelBtnObjects1= [];
gdjs.GameLevel2Code.GDNextLevelBtnObjects2= [];
gdjs.GameLevel2Code.GDNextLevelBtnObjects3= [];
gdjs.GameLevel2Code.GDNextLevelBtnObjects4= [];
gdjs.GameLevel2Code.GDNextLevelBtnObjects5= [];
gdjs.GameLevel2Code.GDTryAgainBtnObjects1= [];
gdjs.GameLevel2Code.GDTryAgainBtnObjects2= [];
gdjs.GameLevel2Code.GDTryAgainBtnObjects3= [];
gdjs.GameLevel2Code.GDTryAgainBtnObjects4= [];
gdjs.GameLevel2Code.GDTryAgainBtnObjects5= [];
gdjs.GameLevel2Code.GDUpOnscreenObjects1= [];
gdjs.GameLevel2Code.GDUpOnscreenObjects2= [];
gdjs.GameLevel2Code.GDUpOnscreenObjects3= [];
gdjs.GameLevel2Code.GDUpOnscreenObjects4= [];
gdjs.GameLevel2Code.GDUpOnscreenObjects5= [];
gdjs.GameLevel2Code.GDDownOnscreenObjects1= [];
gdjs.GameLevel2Code.GDDownOnscreenObjects2= [];
gdjs.GameLevel2Code.GDDownOnscreenObjects3= [];
gdjs.GameLevel2Code.GDDownOnscreenObjects4= [];
gdjs.GameLevel2Code.GDDownOnscreenObjects5= [];
gdjs.GameLevel2Code.GDLeftOnscreenObjects1= [];
gdjs.GameLevel2Code.GDLeftOnscreenObjects2= [];
gdjs.GameLevel2Code.GDLeftOnscreenObjects3= [];
gdjs.GameLevel2Code.GDLeftOnscreenObjects4= [];
gdjs.GameLevel2Code.GDLeftOnscreenObjects5= [];
gdjs.GameLevel2Code.GDRightOnscreenObjects1= [];
gdjs.GameLevel2Code.GDRightOnscreenObjects2= [];
gdjs.GameLevel2Code.GDRightOnscreenObjects3= [];
gdjs.GameLevel2Code.GDRightOnscreenObjects4= [];
gdjs.GameLevel2Code.GDRightOnscreenObjects5= [];

gdjs.GameLevel2Code.conditionTrue_0 = {val:false};
gdjs.GameLevel2Code.condition0IsTrue_0 = {val:false};
gdjs.GameLevel2Code.condition1IsTrue_0 = {val:false};


gdjs.GameLevel2Code.eventsList0 = function(runtimeScene) {

};gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDLeftOnscreenObjects4Objects = Hashtable.newFrom({"LeftOnscreen": gdjs.GameLevel2Code.GDLeftOnscreenObjects4});gdjs.GameLevel2Code.eventsList1 = function(runtimeScene) {

{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects4[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects4[i].setAnimationName("Kiri");
}
}}

}


};gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDRightOnscreenObjects4Objects = Hashtable.newFrom({"RightOnscreen": gdjs.GameLevel2Code.GDRightOnscreenObjects4});gdjs.GameLevel2Code.eventsList2 = function(runtimeScene) {

{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects4[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects4[i].setAnimationName("Kanan");
}
}}

}


};gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDUpOnscreenObjects4Objects = Hashtable.newFrom({"UpOnscreen": gdjs.GameLevel2Code.GDUpOnscreenObjects4});gdjs.GameLevel2Code.eventsList3 = function(runtimeScene) {

{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects4[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects4[i].setAnimationName("Belakang");
}
}}

}


};gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDDownOnscreenObjects3Objects = Hashtable.newFrom({"DownOnscreen": gdjs.GameLevel2Code.GDDownOnscreenObjects3});gdjs.GameLevel2Code.eventsList4 = function(runtimeScene) {

{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects3);
{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects3[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects3[i].setAnimationName("Depan");
}
}}

}


};gdjs.GameLevel2Code.eventsList5 = function(runtimeScene) {

{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects4[i].setAnimationName("Kiri");
}
}}

}


{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects4[i].setAnimationName("Kanan");
}
}}

}


{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects4[i].setAnimationName("Belakang");
}
}}

}


{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects4[i].setAnimationName("Depan");
}
}}

}


{


gdjs.GameLevel2Code.eventsList0(runtimeScene);
}


{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DownOnscreen"), gdjs.GameLevel2Code.GDDownOnscreenObjects4);
gdjs.copyArray(runtimeScene.getObjects("LeftOnscreen"), gdjs.GameLevel2Code.GDLeftOnscreenObjects4);
gdjs.copyArray(runtimeScene.getObjects("RightOnscreen"), gdjs.GameLevel2Code.GDRightOnscreenObjects4);
gdjs.copyArray(runtimeScene.getObjects("UpOnscreen"), gdjs.GameLevel2Code.GDUpOnscreenObjects4);
{for(var i = 0, len = gdjs.GameLevel2Code.GDUpOnscreenObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDUpOnscreenObjects4[i].hide(false);
}
for(var i = 0, len = gdjs.GameLevel2Code.GDDownOnscreenObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDDownOnscreenObjects4[i].hide(false);
}
for(var i = 0, len = gdjs.GameLevel2Code.GDLeftOnscreenObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDLeftOnscreenObjects4[i].hide(false);
}
for(var i = 0, len = gdjs.GameLevel2Code.GDRightOnscreenObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDRightOnscreenObjects4[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftOnscreen"), gdjs.GameLevel2Code.GDLeftOnscreenObjects4);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDLeftOnscreenObjects4Objects, runtimeScene, true, false);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameLevel2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightOnscreen"), gdjs.GameLevel2Code.GDRightOnscreenObjects4);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDRightOnscreenObjects4Objects, runtimeScene, true, false);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameLevel2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpOnscreen"), gdjs.GameLevel2Code.GDUpOnscreenObjects4);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDUpOnscreenObjects4Objects, runtimeScene, true, false);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameLevel2Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DownOnscreen"), gdjs.GameLevel2Code.GDDownOnscreenObjects3);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDDownOnscreenObjects3Objects, runtimeScene, true, false);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameLevel2Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPemainObjects3Objects = Hashtable.newFrom({"Pemain": gdjs.GameLevel2Code.GDPemainObjects3});gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDDindingObjects3Objects = Hashtable.newFrom({"Dinding": gdjs.GameLevel2Code.GDDindingObjects3});gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDDindingObjects3Objects = Hashtable.newFrom({"Dinding": gdjs.GameLevel2Code.GDDindingObjects3});gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPemainObjects3Objects = Hashtable.newFrom({"Pemain": gdjs.GameLevel2Code.GDPemainObjects3});gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDHalanganObjects3Objects = Hashtable.newFrom({"Halangan": gdjs.GameLevel2Code.GDHalanganObjects3});gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDHalanganObjects3Objects = Hashtable.newFrom({"Halangan": gdjs.GameLevel2Code.GDHalanganObjects3});gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPemainObjects3Objects = Hashtable.newFrom({"Pemain": gdjs.GameLevel2Code.GDPemainObjects3});gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDTombolObjects3Objects = Hashtable.newFrom({"Tombol": gdjs.GameLevel2Code.GDTombolObjects3});gdjs.GameLevel2Code.eventsList6 = function(runtimeScene) {

};gdjs.GameLevel2Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Halangan"), gdjs.GameLevel2Code.GDHalanganObjects3);

for(gdjs.GameLevel2Code.forEachIndex4 = 0;gdjs.GameLevel2Code.forEachIndex4 < gdjs.GameLevel2Code.GDHalanganObjects3.length;++gdjs.GameLevel2Code.forEachIndex4) {
gdjs.GameLevel2Code.GDHalanganObjects4.length = 0;


gdjs.GameLevel2Code.forEachTemporary4 = gdjs.GameLevel2Code.GDHalanganObjects3[gdjs.GameLevel2Code.forEachIndex4];
gdjs.GameLevel2Code.GDHalanganObjects4.push(gdjs.GameLevel2Code.forEachTemporary4);
gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameLevel2Code.GDHalanganObjects4.length;i<l;++i) {
    if ( gdjs.GameLevel2Code.GDHalanganObjects4[i].isCollidingWithPoint(64, 176) ) {
        gdjs.GameLevel2Code.condition0IsTrue_0.val = true;
        gdjs.GameLevel2Code.GDHalanganObjects4[k] = gdjs.GameLevel2Code.GDHalanganObjects4[i];
        ++k;
    }
}
gdjs.GameLevel2Code.GDHalanganObjects4.length = k;}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameLevel2Code.GDHalanganObjects4.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDHalanganObjects4[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPemainObjects3Objects = Hashtable.newFrom({"Pemain": gdjs.GameLevel2Code.GDPemainObjects3});gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDKunciObjects3Objects = Hashtable.newFrom({"Kunci": gdjs.GameLevel2Code.GDKunciObjects3});gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPemainObjects2Objects = Hashtable.newFrom({"Pemain": gdjs.GameLevel2Code.GDPemainObjects2});gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPintuObjects2Objects = Hashtable.newFrom({"Pintu": gdjs.GameLevel2Code.GDPintuObjects2});gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPintuObjects2Objects = Hashtable.newFrom({"Pintu": gdjs.GameLevel2Code.GDPintuObjects2});gdjs.GameLevel2Code.eventsList8 = function(runtimeScene) {

{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "Pintu");
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NextLevelBtn"), gdjs.GameLevel2Code.GDNextLevelBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Result"), gdjs.GameLevel2Code.GDResultObjects2);
gdjs.copyArray(runtimeScene.getObjects("TryAgainBtn"), gdjs.GameLevel2Code.GDTryAgainBtnObjects2);
{for(var i = 0, len = gdjs.GameLevel2Code.GDResultObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDResultObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameLevel2Code.GDNextLevelBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDNextLevelBtnObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameLevel2Code.GDTryAgainBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDTryAgainBtnObjects2[i].hide(false);
}
}}

}


};gdjs.GameLevel2Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameLevel2Code.GDPemainObjects2, gdjs.GameLevel2Code.GDPemainObjects3);


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameLevel2Code.GDPemainObjects3.length;i<l;++i) {
    if ( gdjs.GameLevel2Code.GDPemainObjects3[i].getVariableNumber(gdjs.GameLevel2Code.GDPemainObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.GameLevel2Code.condition0IsTrue_0.val = true;
        gdjs.GameLevel2Code.GDPemainObjects3[k] = gdjs.GameLevel2Code.GDPemainObjects3[i];
        ++k;
    }
}
gdjs.GameLevel2Code.GDPemainObjects3.length = k;}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel2Code.GDPemainObjects3 */
gdjs.copyArray(gdjs.GameLevel2Code.GDPintuObjects2, gdjs.GameLevel2Code.GDPintuObjects3);

{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects3[i].returnVariable(gdjs.GameLevel2Code.GDPemainObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.GameLevel2Code.GDPintuObjects3.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPintuObjects3[i].setAnimationName("Terbuka");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pintu");
}}

}


{

/* Reuse gdjs.GameLevel2Code.GDPintuObjects2 */

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameLevel2Code.GDPintuObjects2.length;i<l;++i) {
    if ( gdjs.GameLevel2Code.GDPintuObjects2[i].isCurrentAnimationName("Terbuka") ) {
        gdjs.GameLevel2Code.condition0IsTrue_0.val = true;
        gdjs.GameLevel2Code.GDPintuObjects2[k] = gdjs.GameLevel2Code.GDPintuObjects2[i];
        ++k;
    }
}
gdjs.GameLevel2Code.GDPintuObjects2.length = k;}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameLevel2Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameLevel2Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dinding"), gdjs.GameLevel2Code.GDDindingObjects3);
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects3);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPemainObjects3Objects, gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDDindingObjects3Objects, false, runtimeScene, false);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel2Code.GDDindingObjects3 */
/* Reuse gdjs.GameLevel2Code.GDPemainObjects3 */
{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects3[i].separateFromObjectsList(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDDindingObjects3Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Halangan"), gdjs.GameLevel2Code.GDHalanganObjects3);
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects3);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPemainObjects3Objects, gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDHalanganObjects3Objects, false, runtimeScene, false);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel2Code.GDHalanganObjects3 */
/* Reuse gdjs.GameLevel2Code.GDPemainObjects3 */
{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects3[i].separateFromObjectsList(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDHalanganObjects3Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects3);
gdjs.copyArray(runtimeScene.getObjects("Tombol"), gdjs.GameLevel2Code.GDTombolObjects3);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPemainObjects3Objects, gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDTombolObjects3Objects, false, runtimeScene, false);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel2Code.GDTombolObjects3 */
{for(var i = 0, len = gdjs.GameLevel2Code.GDTombolObjects3.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDTombolObjects3[i].setAnimationName("On");
}
}
{ //Subevents
gdjs.GameLevel2Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kunci"), gdjs.GameLevel2Code.GDKunciObjects3);
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects3);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPemainObjects3Objects, gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDKunciObjects3Objects, false, runtimeScene, false);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel2Code.GDKunciObjects3 */
/* Reuse gdjs.GameLevel2Code.GDPemainObjects3 */
{for(var i = 0, len = gdjs.GameLevel2Code.GDKunciObjects3.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDKunciObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects3[i].returnVariable(gdjs.GameLevel2Code.GDPemainObjects3[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pintu"), gdjs.GameLevel2Code.GDPintuObjects2);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPemainObjects2Objects, gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPintuObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel2Code.GDPemainObjects2 */
/* Reuse gdjs.GameLevel2Code.GDPintuObjects2 */
{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects2[i].separateFromObjectsList(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDPintuObjects2Objects, false);
}
}
{ //Subevents
gdjs.GameLevel2Code.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameLevel2Code.eventsList11 = function(runtimeScene) {

{


gdjs.GameLevel2Code.eventsList5(runtimeScene);
}


{


gdjs.GameLevel2Code.eventsList10(runtimeScene);
}


};gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDNextLevelBtnObjects3Objects = Hashtable.newFrom({"NextLevelBtn": gdjs.GameLevel2Code.GDNextLevelBtnObjects3});gdjs.GameLevel2Code.eventsList12 = function(runtimeScene) {

{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameLevel3", false);
}}

}


};gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDNextLevelBtnObjects2Objects = Hashtable.newFrom({"NextLevelBtn": gdjs.GameLevel2Code.GDNextLevelBtnObjects2});gdjs.GameLevel2Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NextLevelBtn"), gdjs.GameLevel2Code.GDNextLevelBtnObjects3);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDNextLevelBtnObjects3Objects, runtimeScene, true, false);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel2Code.GDNextLevelBtnObjects3 */
{for(var i = 0, len = gdjs.GameLevel2Code.GDNextLevelBtnObjects3.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDNextLevelBtnObjects3[i].setAnimationName("On");
}
}
{ //Subevents
gdjs.GameLevel2Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextLevelBtn"), gdjs.GameLevel2Code.GDNextLevelBtnObjects2);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDNextLevelBtnObjects2Objects, runtimeScene, true, true);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel2Code.GDNextLevelBtnObjects2 */
{for(var i = 0, len = gdjs.GameLevel2Code.GDNextLevelBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDNextLevelBtnObjects2[i].setAnimationName("Off");
}
}}

}


};gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDTryAgainBtnObjects2Objects = Hashtable.newFrom({"TryAgainBtn": gdjs.GameLevel2Code.GDTryAgainBtnObjects2});gdjs.GameLevel2Code.eventsList14 = function(runtimeScene) {

{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameLevel2", false);
}}

}


};gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDTryAgainBtnObjects1Objects = Hashtable.newFrom({"TryAgainBtn": gdjs.GameLevel2Code.GDTryAgainBtnObjects1});gdjs.GameLevel2Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TryAgainBtn"), gdjs.GameLevel2Code.GDTryAgainBtnObjects2);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDTryAgainBtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel2Code.GDTryAgainBtnObjects2 */
{for(var i = 0, len = gdjs.GameLevel2Code.GDTryAgainBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDTryAgainBtnObjects2[i].setAnimationName("On");
}
}
{ //Subevents
gdjs.GameLevel2Code.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TryAgainBtn"), gdjs.GameLevel2Code.GDTryAgainBtnObjects1);

gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel2Code.mapOfGDgdjs_46GameLevel2Code_46GDTryAgainBtnObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel2Code.GDTryAgainBtnObjects1 */
{for(var i = 0, len = gdjs.GameLevel2Code.GDTryAgainBtnObjects1.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDTryAgainBtnObjects1[i].setAnimationName("Off");
}
}}

}


};gdjs.GameLevel2Code.eventsList16 = function(runtimeScene) {

{


gdjs.GameLevel2Code.eventsList13(runtimeScene);
}


{


gdjs.GameLevel2Code.eventsList15(runtimeScene);
}


};gdjs.GameLevel2Code.eventsList17 = function(runtimeScene) {

{


gdjs.GameLevel2Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameLevel2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DownOnscreen"), gdjs.GameLevel2Code.GDDownOnscreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftOnscreen"), gdjs.GameLevel2Code.GDLeftOnscreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextLevelBtn"), gdjs.GameLevel2Code.GDNextLevelBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel2Code.GDPemainObjects2);
gdjs.copyArray(runtimeScene.getObjects("Result"), gdjs.GameLevel2Code.GDResultObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightOnscreen"), gdjs.GameLevel2Code.GDRightOnscreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("TryAgainBtn"), gdjs.GameLevel2Code.GDTryAgainBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("UpOnscreen"), gdjs.GameLevel2Code.GDUpOnscreenObjects2);
{for(var i = 0, len = gdjs.GameLevel2Code.GDResultObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDResultObjects2[i].hide();
}
for(var i = 0, len = gdjs.GameLevel2Code.GDNextLevelBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDNextLevelBtnObjects2[i].hide();
}
for(var i = 0, len = gdjs.GameLevel2Code.GDTryAgainBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDTryAgainBtnObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameLevel2Code.GDUpOnscreenObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDUpOnscreenObjects2[i].hide();
}
for(var i = 0, len = gdjs.GameLevel2Code.GDDownOnscreenObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDDownOnscreenObjects2[i].hide();
}
for(var i = 0, len = gdjs.GameLevel2Code.GDLeftOnscreenObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDLeftOnscreenObjects2[i].hide();
}
for(var i = 0, len = gdjs.GameLevel2Code.GDRightOnscreenObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDRightOnscreenObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameLevel2Code.GDPemainObjects2.length ;i < len;++i) {
    gdjs.GameLevel2Code.GDPemainObjects2[i].returnVariable(gdjs.GameLevel2Code.GDPemainObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{


gdjs.GameLevel2Code.eventsList11(runtimeScene);
}


{


gdjs.GameLevel2Code.eventsList16(runtimeScene);
}


};gdjs.GameLevel2Code.eventsList18 = function(runtimeScene) {

{


gdjs.GameLevel2Code.eventsList17(runtimeScene);
}


};

gdjs.GameLevel2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameLevel2Code.GDDindingObjects1.length = 0;
gdjs.GameLevel2Code.GDDindingObjects2.length = 0;
gdjs.GameLevel2Code.GDDindingObjects3.length = 0;
gdjs.GameLevel2Code.GDDindingObjects4.length = 0;
gdjs.GameLevel2Code.GDDindingObjects5.length = 0;
gdjs.GameLevel2Code.GDHalanganObjects1.length = 0;
gdjs.GameLevel2Code.GDHalanganObjects2.length = 0;
gdjs.GameLevel2Code.GDHalanganObjects3.length = 0;
gdjs.GameLevel2Code.GDHalanganObjects4.length = 0;
gdjs.GameLevel2Code.GDHalanganObjects5.length = 0;
gdjs.GameLevel2Code.GDPemainObjects1.length = 0;
gdjs.GameLevel2Code.GDPemainObjects2.length = 0;
gdjs.GameLevel2Code.GDPemainObjects3.length = 0;
gdjs.GameLevel2Code.GDPemainObjects4.length = 0;
gdjs.GameLevel2Code.GDPemainObjects5.length = 0;
gdjs.GameLevel2Code.GDLantaiObjects1.length = 0;
gdjs.GameLevel2Code.GDLantaiObjects2.length = 0;
gdjs.GameLevel2Code.GDLantaiObjects3.length = 0;
gdjs.GameLevel2Code.GDLantaiObjects4.length = 0;
gdjs.GameLevel2Code.GDLantaiObjects5.length = 0;
gdjs.GameLevel2Code.GDTombolObjects1.length = 0;
gdjs.GameLevel2Code.GDTombolObjects2.length = 0;
gdjs.GameLevel2Code.GDTombolObjects3.length = 0;
gdjs.GameLevel2Code.GDTombolObjects4.length = 0;
gdjs.GameLevel2Code.GDTombolObjects5.length = 0;
gdjs.GameLevel2Code.GDKunciObjects1.length = 0;
gdjs.GameLevel2Code.GDKunciObjects2.length = 0;
gdjs.GameLevel2Code.GDKunciObjects3.length = 0;
gdjs.GameLevel2Code.GDKunciObjects4.length = 0;
gdjs.GameLevel2Code.GDKunciObjects5.length = 0;
gdjs.GameLevel2Code.GDPintuObjects1.length = 0;
gdjs.GameLevel2Code.GDPintuObjects2.length = 0;
gdjs.GameLevel2Code.GDPintuObjects3.length = 0;
gdjs.GameLevel2Code.GDPintuObjects4.length = 0;
gdjs.GameLevel2Code.GDPintuObjects5.length = 0;
gdjs.GameLevel2Code.GDResultObjects1.length = 0;
gdjs.GameLevel2Code.GDResultObjects2.length = 0;
gdjs.GameLevel2Code.GDResultObjects3.length = 0;
gdjs.GameLevel2Code.GDResultObjects4.length = 0;
gdjs.GameLevel2Code.GDResultObjects5.length = 0;
gdjs.GameLevel2Code.GDNextLevelBtnObjects1.length = 0;
gdjs.GameLevel2Code.GDNextLevelBtnObjects2.length = 0;
gdjs.GameLevel2Code.GDNextLevelBtnObjects3.length = 0;
gdjs.GameLevel2Code.GDNextLevelBtnObjects4.length = 0;
gdjs.GameLevel2Code.GDNextLevelBtnObjects5.length = 0;
gdjs.GameLevel2Code.GDTryAgainBtnObjects1.length = 0;
gdjs.GameLevel2Code.GDTryAgainBtnObjects2.length = 0;
gdjs.GameLevel2Code.GDTryAgainBtnObjects3.length = 0;
gdjs.GameLevel2Code.GDTryAgainBtnObjects4.length = 0;
gdjs.GameLevel2Code.GDTryAgainBtnObjects5.length = 0;
gdjs.GameLevel2Code.GDUpOnscreenObjects1.length = 0;
gdjs.GameLevel2Code.GDUpOnscreenObjects2.length = 0;
gdjs.GameLevel2Code.GDUpOnscreenObjects3.length = 0;
gdjs.GameLevel2Code.GDUpOnscreenObjects4.length = 0;
gdjs.GameLevel2Code.GDUpOnscreenObjects5.length = 0;
gdjs.GameLevel2Code.GDDownOnscreenObjects1.length = 0;
gdjs.GameLevel2Code.GDDownOnscreenObjects2.length = 0;
gdjs.GameLevel2Code.GDDownOnscreenObjects3.length = 0;
gdjs.GameLevel2Code.GDDownOnscreenObjects4.length = 0;
gdjs.GameLevel2Code.GDDownOnscreenObjects5.length = 0;
gdjs.GameLevel2Code.GDLeftOnscreenObjects1.length = 0;
gdjs.GameLevel2Code.GDLeftOnscreenObjects2.length = 0;
gdjs.GameLevel2Code.GDLeftOnscreenObjects3.length = 0;
gdjs.GameLevel2Code.GDLeftOnscreenObjects4.length = 0;
gdjs.GameLevel2Code.GDLeftOnscreenObjects5.length = 0;
gdjs.GameLevel2Code.GDRightOnscreenObjects1.length = 0;
gdjs.GameLevel2Code.GDRightOnscreenObjects2.length = 0;
gdjs.GameLevel2Code.GDRightOnscreenObjects3.length = 0;
gdjs.GameLevel2Code.GDRightOnscreenObjects4.length = 0;
gdjs.GameLevel2Code.GDRightOnscreenObjects5.length = 0;

gdjs.GameLevel2Code.eventsList18(runtimeScene);
return;

}

gdjs['GameLevel2Code'] = gdjs.GameLevel2Code;
