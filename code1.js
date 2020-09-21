gdjs.GameLevel1Code = {};
gdjs.GameLevel1Code.forEachIndex4 = 0;

gdjs.GameLevel1Code.forEachObjects4 = [];

gdjs.GameLevel1Code.forEachTemporary4 = null;

gdjs.GameLevel1Code.forEachTotalCount4 = 0;

gdjs.GameLevel1Code.GDDindingObjects1= [];
gdjs.GameLevel1Code.GDDindingObjects2= [];
gdjs.GameLevel1Code.GDDindingObjects3= [];
gdjs.GameLevel1Code.GDDindingObjects4= [];
gdjs.GameLevel1Code.GDDindingObjects5= [];
gdjs.GameLevel1Code.GDHalanganObjects1= [];
gdjs.GameLevel1Code.GDHalanganObjects2= [];
gdjs.GameLevel1Code.GDHalanganObjects3= [];
gdjs.GameLevel1Code.GDHalanganObjects4= [];
gdjs.GameLevel1Code.GDHalanganObjects5= [];
gdjs.GameLevel1Code.GDPemainObjects1= [];
gdjs.GameLevel1Code.GDPemainObjects2= [];
gdjs.GameLevel1Code.GDPemainObjects3= [];
gdjs.GameLevel1Code.GDPemainObjects4= [];
gdjs.GameLevel1Code.GDPemainObjects5= [];
gdjs.GameLevel1Code.GDLantaiObjects1= [];
gdjs.GameLevel1Code.GDLantaiObjects2= [];
gdjs.GameLevel1Code.GDLantaiObjects3= [];
gdjs.GameLevel1Code.GDLantaiObjects4= [];
gdjs.GameLevel1Code.GDLantaiObjects5= [];
gdjs.GameLevel1Code.GDTombolObjects1= [];
gdjs.GameLevel1Code.GDTombolObjects2= [];
gdjs.GameLevel1Code.GDTombolObjects3= [];
gdjs.GameLevel1Code.GDTombolObjects4= [];
gdjs.GameLevel1Code.GDTombolObjects5= [];
gdjs.GameLevel1Code.GDKunciObjects1= [];
gdjs.GameLevel1Code.GDKunciObjects2= [];
gdjs.GameLevel1Code.GDKunciObjects3= [];
gdjs.GameLevel1Code.GDKunciObjects4= [];
gdjs.GameLevel1Code.GDKunciObjects5= [];
gdjs.GameLevel1Code.GDPintuObjects1= [];
gdjs.GameLevel1Code.GDPintuObjects2= [];
gdjs.GameLevel1Code.GDPintuObjects3= [];
gdjs.GameLevel1Code.GDPintuObjects4= [];
gdjs.GameLevel1Code.GDPintuObjects5= [];
gdjs.GameLevel1Code.GDResultObjects1= [];
gdjs.GameLevel1Code.GDResultObjects2= [];
gdjs.GameLevel1Code.GDResultObjects3= [];
gdjs.GameLevel1Code.GDResultObjects4= [];
gdjs.GameLevel1Code.GDResultObjects5= [];
gdjs.GameLevel1Code.GDNextLevelBtnObjects1= [];
gdjs.GameLevel1Code.GDNextLevelBtnObjects2= [];
gdjs.GameLevel1Code.GDNextLevelBtnObjects3= [];
gdjs.GameLevel1Code.GDNextLevelBtnObjects4= [];
gdjs.GameLevel1Code.GDNextLevelBtnObjects5= [];
gdjs.GameLevel1Code.GDTryAgainBtnObjects1= [];
gdjs.GameLevel1Code.GDTryAgainBtnObjects2= [];
gdjs.GameLevel1Code.GDTryAgainBtnObjects3= [];
gdjs.GameLevel1Code.GDTryAgainBtnObjects4= [];
gdjs.GameLevel1Code.GDTryAgainBtnObjects5= [];
gdjs.GameLevel1Code.GDUpOnscreenObjects1= [];
gdjs.GameLevel1Code.GDUpOnscreenObjects2= [];
gdjs.GameLevel1Code.GDUpOnscreenObjects3= [];
gdjs.GameLevel1Code.GDUpOnscreenObjects4= [];
gdjs.GameLevel1Code.GDUpOnscreenObjects5= [];
gdjs.GameLevel1Code.GDDownOnscreenObjects1= [];
gdjs.GameLevel1Code.GDDownOnscreenObjects2= [];
gdjs.GameLevel1Code.GDDownOnscreenObjects3= [];
gdjs.GameLevel1Code.GDDownOnscreenObjects4= [];
gdjs.GameLevel1Code.GDDownOnscreenObjects5= [];
gdjs.GameLevel1Code.GDLeftOnscreenObjects1= [];
gdjs.GameLevel1Code.GDLeftOnscreenObjects2= [];
gdjs.GameLevel1Code.GDLeftOnscreenObjects3= [];
gdjs.GameLevel1Code.GDLeftOnscreenObjects4= [];
gdjs.GameLevel1Code.GDLeftOnscreenObjects5= [];
gdjs.GameLevel1Code.GDRightOnscreenObjects1= [];
gdjs.GameLevel1Code.GDRightOnscreenObjects2= [];
gdjs.GameLevel1Code.GDRightOnscreenObjects3= [];
gdjs.GameLevel1Code.GDRightOnscreenObjects4= [];
gdjs.GameLevel1Code.GDRightOnscreenObjects5= [];

gdjs.GameLevel1Code.conditionTrue_0 = {val:false};
gdjs.GameLevel1Code.condition0IsTrue_0 = {val:false};
gdjs.GameLevel1Code.condition1IsTrue_0 = {val:false};


gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDLeftOnscreenObjects4Objects = Hashtable.newFrom({"LeftOnscreen": gdjs.GameLevel1Code.GDLeftOnscreenObjects4});gdjs.GameLevel1Code.eventsList0 = function(runtimeScene) {

{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects4[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects4[i].setAnimationName("Kiri");
}
}}

}


};gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDRightOnscreenObjects4Objects = Hashtable.newFrom({"RightOnscreen": gdjs.GameLevel1Code.GDRightOnscreenObjects4});gdjs.GameLevel1Code.eventsList1 = function(runtimeScene) {

{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects4[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects4[i].setAnimationName("Kanan");
}
}}

}


};gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDUpOnscreenObjects4Objects = Hashtable.newFrom({"UpOnscreen": gdjs.GameLevel1Code.GDUpOnscreenObjects4});gdjs.GameLevel1Code.eventsList2 = function(runtimeScene) {

{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects4[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects4[i].setAnimationName("Belakang");
}
}}

}


};gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDDownOnscreenObjects3Objects = Hashtable.newFrom({"DownOnscreen": gdjs.GameLevel1Code.GDDownOnscreenObjects3});gdjs.GameLevel1Code.eventsList3 = function(runtimeScene) {

{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects3);
{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects3[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects3[i].setAnimationName("Depan");
}
}}

}


};gdjs.GameLevel1Code.eventsList4 = function(runtimeScene) {

{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DownOnscreen"), gdjs.GameLevel1Code.GDDownOnscreenObjects4);
gdjs.copyArray(runtimeScene.getObjects("LeftOnscreen"), gdjs.GameLevel1Code.GDLeftOnscreenObjects4);
gdjs.copyArray(runtimeScene.getObjects("RightOnscreen"), gdjs.GameLevel1Code.GDRightOnscreenObjects4);
gdjs.copyArray(runtimeScene.getObjects("UpOnscreen"), gdjs.GameLevel1Code.GDUpOnscreenObjects4);
{for(var i = 0, len = gdjs.GameLevel1Code.GDUpOnscreenObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDUpOnscreenObjects4[i].hide(false);
}
for(var i = 0, len = gdjs.GameLevel1Code.GDDownOnscreenObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDDownOnscreenObjects4[i].hide(false);
}
for(var i = 0, len = gdjs.GameLevel1Code.GDLeftOnscreenObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDLeftOnscreenObjects4[i].hide(false);
}
for(var i = 0, len = gdjs.GameLevel1Code.GDRightOnscreenObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDRightOnscreenObjects4[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftOnscreen"), gdjs.GameLevel1Code.GDLeftOnscreenObjects4);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDLeftOnscreenObjects4Objects, runtimeScene, true, false);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameLevel1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightOnscreen"), gdjs.GameLevel1Code.GDRightOnscreenObjects4);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDRightOnscreenObjects4Objects, runtimeScene, true, false);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameLevel1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpOnscreen"), gdjs.GameLevel1Code.GDUpOnscreenObjects4);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDUpOnscreenObjects4Objects, runtimeScene, true, false);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameLevel1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DownOnscreen"), gdjs.GameLevel1Code.GDDownOnscreenObjects3);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDDownOnscreenObjects3Objects, runtimeScene, true, false);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameLevel1Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameLevel1Code.eventsList5 = function(runtimeScene) {

{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects4[i].setAnimationName("Kiri");
}
}}

}


{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects4[i].setAnimationName("Kanan");
}
}}

}


{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects4[i].setAnimationName("Belakang");
}
}}

}


{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects4);
{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects4[i].setAnimationName("Depan");
}
}}

}


{


gdjs.GameLevel1Code.eventsList4(runtimeScene);
}


};gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPemainObjects3Objects = Hashtable.newFrom({"Pemain": gdjs.GameLevel1Code.GDPemainObjects3});gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDDindingObjects3Objects = Hashtable.newFrom({"Dinding": gdjs.GameLevel1Code.GDDindingObjects3});gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDDindingObjects3Objects = Hashtable.newFrom({"Dinding": gdjs.GameLevel1Code.GDDindingObjects3});gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPemainObjects3Objects = Hashtable.newFrom({"Pemain": gdjs.GameLevel1Code.GDPemainObjects3});gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDHalanganObjects3Objects = Hashtable.newFrom({"Halangan": gdjs.GameLevel1Code.GDHalanganObjects3});gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDHalanganObjects3Objects = Hashtable.newFrom({"Halangan": gdjs.GameLevel1Code.GDHalanganObjects3});gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPemainObjects3Objects = Hashtable.newFrom({"Pemain": gdjs.GameLevel1Code.GDPemainObjects3});gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDTombolObjects3Objects = Hashtable.newFrom({"Tombol": gdjs.GameLevel1Code.GDTombolObjects3});gdjs.GameLevel1Code.eventsList6 = function(runtimeScene) {

};gdjs.GameLevel1Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Halangan"), gdjs.GameLevel1Code.GDHalanganObjects3);

for(gdjs.GameLevel1Code.forEachIndex4 = 0;gdjs.GameLevel1Code.forEachIndex4 < gdjs.GameLevel1Code.GDHalanganObjects3.length;++gdjs.GameLevel1Code.forEachIndex4) {
gdjs.GameLevel1Code.GDHalanganObjects4.length = 0;


gdjs.GameLevel1Code.forEachTemporary4 = gdjs.GameLevel1Code.GDHalanganObjects3[gdjs.GameLevel1Code.forEachIndex4];
gdjs.GameLevel1Code.GDHalanganObjects4.push(gdjs.GameLevel1Code.forEachTemporary4);
gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameLevel1Code.GDHalanganObjects4.length;i<l;++i) {
    if ( gdjs.GameLevel1Code.GDHalanganObjects4[i].isCollidingWithPoint(16, 224) ) {
        gdjs.GameLevel1Code.condition0IsTrue_0.val = true;
        gdjs.GameLevel1Code.GDHalanganObjects4[k] = gdjs.GameLevel1Code.GDHalanganObjects4[i];
        ++k;
    }
}
gdjs.GameLevel1Code.GDHalanganObjects4.length = k;}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameLevel1Code.GDHalanganObjects4.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDHalanganObjects4[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPemainObjects3Objects = Hashtable.newFrom({"Pemain": gdjs.GameLevel1Code.GDPemainObjects3});gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDKunciObjects3Objects = Hashtable.newFrom({"Kunci": gdjs.GameLevel1Code.GDKunciObjects3});gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPemainObjects2Objects = Hashtable.newFrom({"Pemain": gdjs.GameLevel1Code.GDPemainObjects2});gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPintuObjects2Objects = Hashtable.newFrom({"Pintu": gdjs.GameLevel1Code.GDPintuObjects2});gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPintuObjects2Objects = Hashtable.newFrom({"Pintu": gdjs.GameLevel1Code.GDPintuObjects2});gdjs.GameLevel1Code.eventsList8 = function(runtimeScene) {

{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "Pintu");
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NextLevelBtn"), gdjs.GameLevel1Code.GDNextLevelBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Result"), gdjs.GameLevel1Code.GDResultObjects2);
gdjs.copyArray(runtimeScene.getObjects("TryAgainBtn"), gdjs.GameLevel1Code.GDTryAgainBtnObjects2);
{for(var i = 0, len = gdjs.GameLevel1Code.GDResultObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDResultObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameLevel1Code.GDNextLevelBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDNextLevelBtnObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GameLevel1Code.GDTryAgainBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDTryAgainBtnObjects2[i].hide(false);
}
}}

}


};gdjs.GameLevel1Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameLevel1Code.GDPemainObjects2, gdjs.GameLevel1Code.GDPemainObjects3);


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameLevel1Code.GDPemainObjects3.length;i<l;++i) {
    if ( gdjs.GameLevel1Code.GDPemainObjects3[i].getVariableNumber(gdjs.GameLevel1Code.GDPemainObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.GameLevel1Code.condition0IsTrue_0.val = true;
        gdjs.GameLevel1Code.GDPemainObjects3[k] = gdjs.GameLevel1Code.GDPemainObjects3[i];
        ++k;
    }
}
gdjs.GameLevel1Code.GDPemainObjects3.length = k;}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel1Code.GDPemainObjects3 */
gdjs.copyArray(gdjs.GameLevel1Code.GDPintuObjects2, gdjs.GameLevel1Code.GDPintuObjects3);

{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects3[i].returnVariable(gdjs.GameLevel1Code.GDPemainObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.GameLevel1Code.GDPintuObjects3.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPintuObjects3[i].setAnimationName("Terbuka");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pintu");
}}

}


{

/* Reuse gdjs.GameLevel1Code.GDPintuObjects2 */

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameLevel1Code.GDPintuObjects2.length;i<l;++i) {
    if ( gdjs.GameLevel1Code.GDPintuObjects2[i].isCurrentAnimationName("Terbuka") ) {
        gdjs.GameLevel1Code.condition0IsTrue_0.val = true;
        gdjs.GameLevel1Code.GDPintuObjects2[k] = gdjs.GameLevel1Code.GDPintuObjects2[i];
        ++k;
    }
}
gdjs.GameLevel1Code.GDPintuObjects2.length = k;}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameLevel1Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameLevel1Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dinding"), gdjs.GameLevel1Code.GDDindingObjects3);
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects3);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPemainObjects3Objects, gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDDindingObjects3Objects, false, runtimeScene, false);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel1Code.GDDindingObjects3 */
/* Reuse gdjs.GameLevel1Code.GDPemainObjects3 */
{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects3[i].separateFromObjectsList(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDDindingObjects3Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Halangan"), gdjs.GameLevel1Code.GDHalanganObjects3);
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects3);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPemainObjects3Objects, gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDHalanganObjects3Objects, false, runtimeScene, false);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel1Code.GDHalanganObjects3 */
/* Reuse gdjs.GameLevel1Code.GDPemainObjects3 */
{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects3[i].separateFromObjectsList(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDHalanganObjects3Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects3);
gdjs.copyArray(runtimeScene.getObjects("Tombol"), gdjs.GameLevel1Code.GDTombolObjects3);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPemainObjects3Objects, gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDTombolObjects3Objects, false, runtimeScene, false);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel1Code.GDTombolObjects3 */
{for(var i = 0, len = gdjs.GameLevel1Code.GDTombolObjects3.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDTombolObjects3[i].setAnimationName("On");
}
}
{ //Subevents
gdjs.GameLevel1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kunci"), gdjs.GameLevel1Code.GDKunciObjects3);
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects3);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPemainObjects3Objects, gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDKunciObjects3Objects, false, runtimeScene, false);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel1Code.GDKunciObjects3 */
/* Reuse gdjs.GameLevel1Code.GDPemainObjects3 */
{for(var i = 0, len = gdjs.GameLevel1Code.GDKunciObjects3.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDKunciObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects3.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects3[i].returnVariable(gdjs.GameLevel1Code.GDPemainObjects3[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pintu"), gdjs.GameLevel1Code.GDPintuObjects2);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPemainObjects2Objects, gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPintuObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel1Code.GDPemainObjects2 */
/* Reuse gdjs.GameLevel1Code.GDPintuObjects2 */
{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects2[i].separateFromObjectsList(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDPintuObjects2Objects, false);
}
}
{ //Subevents
gdjs.GameLevel1Code.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameLevel1Code.eventsList11 = function(runtimeScene) {

{


gdjs.GameLevel1Code.eventsList5(runtimeScene);
}


{


gdjs.GameLevel1Code.eventsList10(runtimeScene);
}


};gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDNextLevelBtnObjects3Objects = Hashtable.newFrom({"NextLevelBtn": gdjs.GameLevel1Code.GDNextLevelBtnObjects3});gdjs.GameLevel1Code.eventsList12 = function(runtimeScene) {

{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameLevel2", false);
}}

}


};gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDNextLevelBtnObjects2Objects = Hashtable.newFrom({"NextLevelBtn": gdjs.GameLevel1Code.GDNextLevelBtnObjects2});gdjs.GameLevel1Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NextLevelBtn"), gdjs.GameLevel1Code.GDNextLevelBtnObjects3);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDNextLevelBtnObjects3Objects, runtimeScene, true, false);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel1Code.GDNextLevelBtnObjects3 */
{for(var i = 0, len = gdjs.GameLevel1Code.GDNextLevelBtnObjects3.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDNextLevelBtnObjects3[i].setAnimationName("On");
}
}
{ //Subevents
gdjs.GameLevel1Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextLevelBtn"), gdjs.GameLevel1Code.GDNextLevelBtnObjects2);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDNextLevelBtnObjects2Objects, runtimeScene, true, true);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel1Code.GDNextLevelBtnObjects2 */
{for(var i = 0, len = gdjs.GameLevel1Code.GDNextLevelBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDNextLevelBtnObjects2[i].setAnimationName("Off");
}
}}

}


};gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDTryAgainBtnObjects2Objects = Hashtable.newFrom({"TryAgainBtn": gdjs.GameLevel1Code.GDTryAgainBtnObjects2});gdjs.GameLevel1Code.eventsList14 = function(runtimeScene) {

{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameLevel1", false);
}}

}


};gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDTryAgainBtnObjects1Objects = Hashtable.newFrom({"TryAgainBtn": gdjs.GameLevel1Code.GDTryAgainBtnObjects1});gdjs.GameLevel1Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TryAgainBtn"), gdjs.GameLevel1Code.GDTryAgainBtnObjects2);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDTryAgainBtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel1Code.GDTryAgainBtnObjects2 */
{for(var i = 0, len = gdjs.GameLevel1Code.GDTryAgainBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDTryAgainBtnObjects2[i].setAnimationName("On");
}
}
{ //Subevents
gdjs.GameLevel1Code.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TryAgainBtn"), gdjs.GameLevel1Code.GDTryAgainBtnObjects1);

gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameLevel1Code.mapOfGDgdjs_46GameLevel1Code_46GDTryAgainBtnObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GameLevel1Code.GDTryAgainBtnObjects1 */
{for(var i = 0, len = gdjs.GameLevel1Code.GDTryAgainBtnObjects1.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDTryAgainBtnObjects1[i].setAnimationName("Off");
}
}}

}


};gdjs.GameLevel1Code.eventsList16 = function(runtimeScene) {

{


gdjs.GameLevel1Code.eventsList13(runtimeScene);
}


{


gdjs.GameLevel1Code.eventsList15(runtimeScene);
}


};gdjs.GameLevel1Code.eventsList17 = function(runtimeScene) {

{


gdjs.GameLevel1Code.condition0IsTrue_0.val = false;
{
gdjs.GameLevel1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameLevel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DownOnscreen"), gdjs.GameLevel1Code.GDDownOnscreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftOnscreen"), gdjs.GameLevel1Code.GDLeftOnscreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextLevelBtn"), gdjs.GameLevel1Code.GDNextLevelBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pemain"), gdjs.GameLevel1Code.GDPemainObjects2);
gdjs.copyArray(runtimeScene.getObjects("Result"), gdjs.GameLevel1Code.GDResultObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightOnscreen"), gdjs.GameLevel1Code.GDRightOnscreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("TryAgainBtn"), gdjs.GameLevel1Code.GDTryAgainBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("UpOnscreen"), gdjs.GameLevel1Code.GDUpOnscreenObjects2);
{for(var i = 0, len = gdjs.GameLevel1Code.GDResultObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDResultObjects2[i].hide();
}
for(var i = 0, len = gdjs.GameLevel1Code.GDNextLevelBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDNextLevelBtnObjects2[i].hide();
}
for(var i = 0, len = gdjs.GameLevel1Code.GDTryAgainBtnObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDTryAgainBtnObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameLevel1Code.GDUpOnscreenObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDUpOnscreenObjects2[i].hide();
}
for(var i = 0, len = gdjs.GameLevel1Code.GDDownOnscreenObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDDownOnscreenObjects2[i].hide();
}
for(var i = 0, len = gdjs.GameLevel1Code.GDLeftOnscreenObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDLeftOnscreenObjects2[i].hide();
}
for(var i = 0, len = gdjs.GameLevel1Code.GDRightOnscreenObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDRightOnscreenObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameLevel1Code.GDPemainObjects2.length ;i < len;++i) {
    gdjs.GameLevel1Code.GDPemainObjects2[i].returnVariable(gdjs.GameLevel1Code.GDPemainObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{


gdjs.GameLevel1Code.eventsList11(runtimeScene);
}


{


gdjs.GameLevel1Code.eventsList16(runtimeScene);
}


};gdjs.GameLevel1Code.eventsList18 = function(runtimeScene) {

{


gdjs.GameLevel1Code.eventsList17(runtimeScene);
}


};

gdjs.GameLevel1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameLevel1Code.GDDindingObjects1.length = 0;
gdjs.GameLevel1Code.GDDindingObjects2.length = 0;
gdjs.GameLevel1Code.GDDindingObjects3.length = 0;
gdjs.GameLevel1Code.GDDindingObjects4.length = 0;
gdjs.GameLevel1Code.GDDindingObjects5.length = 0;
gdjs.GameLevel1Code.GDHalanganObjects1.length = 0;
gdjs.GameLevel1Code.GDHalanganObjects2.length = 0;
gdjs.GameLevel1Code.GDHalanganObjects3.length = 0;
gdjs.GameLevel1Code.GDHalanganObjects4.length = 0;
gdjs.GameLevel1Code.GDHalanganObjects5.length = 0;
gdjs.GameLevel1Code.GDPemainObjects1.length = 0;
gdjs.GameLevel1Code.GDPemainObjects2.length = 0;
gdjs.GameLevel1Code.GDPemainObjects3.length = 0;
gdjs.GameLevel1Code.GDPemainObjects4.length = 0;
gdjs.GameLevel1Code.GDPemainObjects5.length = 0;
gdjs.GameLevel1Code.GDLantaiObjects1.length = 0;
gdjs.GameLevel1Code.GDLantaiObjects2.length = 0;
gdjs.GameLevel1Code.GDLantaiObjects3.length = 0;
gdjs.GameLevel1Code.GDLantaiObjects4.length = 0;
gdjs.GameLevel1Code.GDLantaiObjects5.length = 0;
gdjs.GameLevel1Code.GDTombolObjects1.length = 0;
gdjs.GameLevel1Code.GDTombolObjects2.length = 0;
gdjs.GameLevel1Code.GDTombolObjects3.length = 0;
gdjs.GameLevel1Code.GDTombolObjects4.length = 0;
gdjs.GameLevel1Code.GDTombolObjects5.length = 0;
gdjs.GameLevel1Code.GDKunciObjects1.length = 0;
gdjs.GameLevel1Code.GDKunciObjects2.length = 0;
gdjs.GameLevel1Code.GDKunciObjects3.length = 0;
gdjs.GameLevel1Code.GDKunciObjects4.length = 0;
gdjs.GameLevel1Code.GDKunciObjects5.length = 0;
gdjs.GameLevel1Code.GDPintuObjects1.length = 0;
gdjs.GameLevel1Code.GDPintuObjects2.length = 0;
gdjs.GameLevel1Code.GDPintuObjects3.length = 0;
gdjs.GameLevel1Code.GDPintuObjects4.length = 0;
gdjs.GameLevel1Code.GDPintuObjects5.length = 0;
gdjs.GameLevel1Code.GDResultObjects1.length = 0;
gdjs.GameLevel1Code.GDResultObjects2.length = 0;
gdjs.GameLevel1Code.GDResultObjects3.length = 0;
gdjs.GameLevel1Code.GDResultObjects4.length = 0;
gdjs.GameLevel1Code.GDResultObjects5.length = 0;
gdjs.GameLevel1Code.GDNextLevelBtnObjects1.length = 0;
gdjs.GameLevel1Code.GDNextLevelBtnObjects2.length = 0;
gdjs.GameLevel1Code.GDNextLevelBtnObjects3.length = 0;
gdjs.GameLevel1Code.GDNextLevelBtnObjects4.length = 0;
gdjs.GameLevel1Code.GDNextLevelBtnObjects5.length = 0;
gdjs.GameLevel1Code.GDTryAgainBtnObjects1.length = 0;
gdjs.GameLevel1Code.GDTryAgainBtnObjects2.length = 0;
gdjs.GameLevel1Code.GDTryAgainBtnObjects3.length = 0;
gdjs.GameLevel1Code.GDTryAgainBtnObjects4.length = 0;
gdjs.GameLevel1Code.GDTryAgainBtnObjects5.length = 0;
gdjs.GameLevel1Code.GDUpOnscreenObjects1.length = 0;
gdjs.GameLevel1Code.GDUpOnscreenObjects2.length = 0;
gdjs.GameLevel1Code.GDUpOnscreenObjects3.length = 0;
gdjs.GameLevel1Code.GDUpOnscreenObjects4.length = 0;
gdjs.GameLevel1Code.GDUpOnscreenObjects5.length = 0;
gdjs.GameLevel1Code.GDDownOnscreenObjects1.length = 0;
gdjs.GameLevel1Code.GDDownOnscreenObjects2.length = 0;
gdjs.GameLevel1Code.GDDownOnscreenObjects3.length = 0;
gdjs.GameLevel1Code.GDDownOnscreenObjects4.length = 0;
gdjs.GameLevel1Code.GDDownOnscreenObjects5.length = 0;
gdjs.GameLevel1Code.GDLeftOnscreenObjects1.length = 0;
gdjs.GameLevel1Code.GDLeftOnscreenObjects2.length = 0;
gdjs.GameLevel1Code.GDLeftOnscreenObjects3.length = 0;
gdjs.GameLevel1Code.GDLeftOnscreenObjects4.length = 0;
gdjs.GameLevel1Code.GDLeftOnscreenObjects5.length = 0;
gdjs.GameLevel1Code.GDRightOnscreenObjects1.length = 0;
gdjs.GameLevel1Code.GDRightOnscreenObjects2.length = 0;
gdjs.GameLevel1Code.GDRightOnscreenObjects3.length = 0;
gdjs.GameLevel1Code.GDRightOnscreenObjects4.length = 0;
gdjs.GameLevel1Code.GDRightOnscreenObjects5.length = 0;

gdjs.GameLevel1Code.eventsList18(runtimeScene);
return;

}

gdjs['GameLevel1Code'] = gdjs.GameLevel1Code;
