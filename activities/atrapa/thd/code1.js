gdjs.MainMenu2Code = {};
gdjs.MainMenu2Code.GDGameTitleObjects1= [];
gdjs.MainMenu2Code.GDGameTitleObjects2= [];
gdjs.MainMenu2Code.GDGameTitleObjects3= [];
gdjs.MainMenu2Code.GDButtonStartObjects1= [];
gdjs.MainMenu2Code.GDButtonStartObjects2= [];
gdjs.MainMenu2Code.GDButtonStartObjects3= [];
gdjs.MainMenu2Code.GDinstructions3Objects1= [];
gdjs.MainMenu2Code.GDinstructions3Objects2= [];
gdjs.MainMenu2Code.GDinstructions3Objects3= [];
gdjs.MainMenu2Code.GDinstructions2Objects1= [];
gdjs.MainMenu2Code.GDinstructions2Objects2= [];
gdjs.MainMenu2Code.GDinstructions2Objects3= [];
gdjs.MainMenu2Code.GDinstructionsObjects1= [];
gdjs.MainMenu2Code.GDinstructionsObjects2= [];
gdjs.MainMenu2Code.GDinstructionsObjects3= [];
gdjs.MainMenu2Code.GDComojugarObjects1= [];
gdjs.MainMenu2Code.GDComojugarObjects2= [];
gdjs.MainMenu2Code.GDComojugarObjects3= [];
gdjs.MainMenu2Code.GDBGObjects1= [];
gdjs.MainMenu2Code.GDBGObjects2= [];
gdjs.MainMenu2Code.GDBGObjects3= [];
gdjs.MainMenu2Code.GDBGFloorObjects1= [];
gdjs.MainMenu2Code.GDBGFloorObjects2= [];
gdjs.MainMenu2Code.GDBGFloorObjects3= [];
gdjs.MainMenu2Code.GDBNTRightObjects1= [];
gdjs.MainMenu2Code.GDBNTRightObjects2= [];
gdjs.MainMenu2Code.GDBNTRightObjects3= [];
gdjs.MainMenu2Code.GDBNTLeftObjects1= [];
gdjs.MainMenu2Code.GDBNTLeftObjects2= [];
gdjs.MainMenu2Code.GDBNTLeftObjects3= [];
gdjs.MainMenu2Code.GDcubetaObjects1= [];
gdjs.MainMenu2Code.GDcubetaObjects2= [];
gdjs.MainMenu2Code.GDcubetaObjects3= [];
gdjs.MainMenu2Code.GDcubetax2Objects1= [];
gdjs.MainMenu2Code.GDcubetax2Objects2= [];
gdjs.MainMenu2Code.GDcubetax2Objects3= [];
gdjs.MainMenu2Code.GDBTNcomenzarObjects1= [];
gdjs.MainMenu2Code.GDBTNcomenzarObjects2= [];
gdjs.MainMenu2Code.GDBTNcomenzarObjects3= [];
gdjs.MainMenu2Code.GDTimerObjects1= [];
gdjs.MainMenu2Code.GDTimerObjects2= [];
gdjs.MainMenu2Code.GDTimerObjects3= [];
gdjs.MainMenu2Code.GDmainbackgroundObjects1= [];
gdjs.MainMenu2Code.GDmainbackgroundObjects2= [];
gdjs.MainMenu2Code.GDmainbackgroundObjects3= [];
gdjs.MainMenu2Code.GDtimebarObjects1= [];
gdjs.MainMenu2Code.GDtimebarObjects2= [];
gdjs.MainMenu2Code.GDtimebarObjects3= [];
gdjs.MainMenu2Code.GDNewObjectObjects1= [];
gdjs.MainMenu2Code.GDNewObjectObjects2= [];
gdjs.MainMenu2Code.GDNewObjectObjects3= [];
gdjs.MainMenu2Code.GDObstacle2Objects1= [];
gdjs.MainMenu2Code.GDObstacle2Objects2= [];
gdjs.MainMenu2Code.GDObstacle2Objects3= [];
gdjs.MainMenu2Code.GDObstacleObjects1= [];
gdjs.MainMenu2Code.GDObstacleObjects2= [];
gdjs.MainMenu2Code.GDObstacleObjects3= [];
gdjs.MainMenu2Code.GDNewObject2Objects1= [];
gdjs.MainMenu2Code.GDNewObject2Objects2= [];
gdjs.MainMenu2Code.GDNewObject2Objects3= [];
gdjs.MainMenu2Code.GDTEXTBG2Objects1= [];
gdjs.MainMenu2Code.GDTEXTBG2Objects2= [];
gdjs.MainMenu2Code.GDTEXTBG2Objects3= [];
gdjs.MainMenu2Code.GDBTNBackObjects1= [];
gdjs.MainMenu2Code.GDBTNBackObjects2= [];
gdjs.MainMenu2Code.GDBTNBackObjects3= [];

gdjs.MainMenu2Code.conditionTrue_0 = {val:false};
gdjs.MainMenu2Code.condition0IsTrue_0 = {val:false};
gdjs.MainMenu2Code.condition1IsTrue_0 = {val:false};
gdjs.MainMenu2Code.condition2IsTrue_0 = {val:false};
gdjs.MainMenu2Code.condition3IsTrue_0 = {val:false};


gdjs.MainMenu2Code.mapOfGDgdjs_46MainMenu2Code_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenu2Code.GDButtonStartObjects1});gdjs.MainMenu2Code.mapOfGDgdjs_46MainMenu2Code_46GDBTNcomenzarObjects1Objects = Hashtable.newFrom({"BTNcomenzar": gdjs.MainMenu2Code.GDBTNcomenzarObjects1});gdjs.MainMenu2Code.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenu2Code.condition0IsTrue_0.val = false;
{
gdjs.MainMenu2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenu2Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenu2Code.GDBTNcomenzarObjects1, gdjs.MainMenu2Code.GDBTNcomenzarObjects2);

{for(var i = 0, len = gdjs.MainMenu2Code.GDBTNcomenzarObjects2.length ;i < len;++i) {
    gdjs.MainMenu2Code.GDBTNcomenzarObjects2[i].setAnimationName("click");
}
}}

}


{


gdjs.MainMenu2Code.condition0IsTrue_0.val = false;
{
gdjs.MainMenu2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenu2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.MainMenu2Code.mapOfGDgdjs_46MainMenu2Code_46GDBTNBackObjects1Objects = Hashtable.newFrom({"BTNBack": gdjs.MainMenu2Code.GDBTNBackObjects1});gdjs.MainMenu2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenu2Code.GDButtonStartObjects1);

gdjs.MainMenu2Code.condition0IsTrue_0.val = false;
{
gdjs.MainMenu2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenu2Code.mapOfGDgdjs_46MainMenu2Code_46GDButtonStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenu2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenu2Code.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenu2Code.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenu2Code.GDButtonStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTNcomenzar"), gdjs.MainMenu2Code.GDBTNcomenzarObjects1);

gdjs.MainMenu2Code.condition0IsTrue_0.val = false;
{
gdjs.MainMenu2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenu2Code.mapOfGDgdjs_46MainMenu2Code_46GDBTNcomenzarObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenu2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenu2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MainMenu2Code.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("BGFloor"), gdjs.MainMenu2Code.GDBGFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs.MainMenu2Code.GDinstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructions2"), gdjs.MainMenu2Code.GDinstructions2Objects1);
gdjs.copyArray(runtimeScene.getObjects("instructions3"), gdjs.MainMenu2Code.GDinstructions3Objects1);
{for(var i = 0, len = gdjs.MainMenu2Code.GDBGObjects1.length ;i < len;++i) {
    gdjs.MainMenu2Code.GDBGObjects1[i].drawRoundedRectangle(0, 0, 576, 790, 10);
}
}{for(var i = 0, len = gdjs.MainMenu2Code.GDBGFloorObjects1.length ;i < len;++i) {
    gdjs.MainMenu2Code.GDBGFloorObjects1[i].drawRectangle(0, 0, gdjs.evtTools.window.getWindowInnerWidth(), 160);
}
}{for(var i = 0, len = gdjs.MainMenu2Code.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs.MainMenu2Code.GDinstructionsObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.MainMenu2Code.GDinstructions2Objects1.length ;i < len;++i) {
    gdjs.MainMenu2Code.GDinstructions2Objects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.MainMenu2Code.GDinstructions3Objects1.length ;i < len;++i) {
    gdjs.MainMenu2Code.GDinstructions3Objects1[i].setTextAlignment("center");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTNBack"), gdjs.MainMenu2Code.GDBTNBackObjects1);

gdjs.MainMenu2Code.condition0IsTrue_0.val = false;
gdjs.MainMenu2Code.condition1IsTrue_0.val = false;
gdjs.MainMenu2Code.condition2IsTrue_0.val = false;
{
gdjs.MainMenu2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenu2Code.mapOfGDgdjs_46MainMenu2Code_46GDBTNBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenu2Code.condition0IsTrue_0.val ) {
{
gdjs.MainMenu2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainMenu2Code.condition1IsTrue_0.val ) {
{
gdjs.MainMenu2Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "BackButtonTimer");
}}
}
if (gdjs.MainMenu2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "01MainMenu", false);
}}

}


{


gdjs.MainMenu2Code.condition0IsTrue_0.val = false;
{
gdjs.MainMenu2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenu2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BackButtonTimer");
}}

}


};

gdjs.MainMenu2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenu2Code.GDGameTitleObjects1.length = 0;
gdjs.MainMenu2Code.GDGameTitleObjects2.length = 0;
gdjs.MainMenu2Code.GDGameTitleObjects3.length = 0;
gdjs.MainMenu2Code.GDButtonStartObjects1.length = 0;
gdjs.MainMenu2Code.GDButtonStartObjects2.length = 0;
gdjs.MainMenu2Code.GDButtonStartObjects3.length = 0;
gdjs.MainMenu2Code.GDinstructions3Objects1.length = 0;
gdjs.MainMenu2Code.GDinstructions3Objects2.length = 0;
gdjs.MainMenu2Code.GDinstructions3Objects3.length = 0;
gdjs.MainMenu2Code.GDinstructions2Objects1.length = 0;
gdjs.MainMenu2Code.GDinstructions2Objects2.length = 0;
gdjs.MainMenu2Code.GDinstructions2Objects3.length = 0;
gdjs.MainMenu2Code.GDinstructionsObjects1.length = 0;
gdjs.MainMenu2Code.GDinstructionsObjects2.length = 0;
gdjs.MainMenu2Code.GDinstructionsObjects3.length = 0;
gdjs.MainMenu2Code.GDComojugarObjects1.length = 0;
gdjs.MainMenu2Code.GDComojugarObjects2.length = 0;
gdjs.MainMenu2Code.GDComojugarObjects3.length = 0;
gdjs.MainMenu2Code.GDBGObjects1.length = 0;
gdjs.MainMenu2Code.GDBGObjects2.length = 0;
gdjs.MainMenu2Code.GDBGObjects3.length = 0;
gdjs.MainMenu2Code.GDBGFloorObjects1.length = 0;
gdjs.MainMenu2Code.GDBGFloorObjects2.length = 0;
gdjs.MainMenu2Code.GDBGFloorObjects3.length = 0;
gdjs.MainMenu2Code.GDBNTRightObjects1.length = 0;
gdjs.MainMenu2Code.GDBNTRightObjects2.length = 0;
gdjs.MainMenu2Code.GDBNTRightObjects3.length = 0;
gdjs.MainMenu2Code.GDBNTLeftObjects1.length = 0;
gdjs.MainMenu2Code.GDBNTLeftObjects2.length = 0;
gdjs.MainMenu2Code.GDBNTLeftObjects3.length = 0;
gdjs.MainMenu2Code.GDcubetaObjects1.length = 0;
gdjs.MainMenu2Code.GDcubetaObjects2.length = 0;
gdjs.MainMenu2Code.GDcubetaObjects3.length = 0;
gdjs.MainMenu2Code.GDcubetax2Objects1.length = 0;
gdjs.MainMenu2Code.GDcubetax2Objects2.length = 0;
gdjs.MainMenu2Code.GDcubetax2Objects3.length = 0;
gdjs.MainMenu2Code.GDBTNcomenzarObjects1.length = 0;
gdjs.MainMenu2Code.GDBTNcomenzarObjects2.length = 0;
gdjs.MainMenu2Code.GDBTNcomenzarObjects3.length = 0;
gdjs.MainMenu2Code.GDTimerObjects1.length = 0;
gdjs.MainMenu2Code.GDTimerObjects2.length = 0;
gdjs.MainMenu2Code.GDTimerObjects3.length = 0;
gdjs.MainMenu2Code.GDmainbackgroundObjects1.length = 0;
gdjs.MainMenu2Code.GDmainbackgroundObjects2.length = 0;
gdjs.MainMenu2Code.GDmainbackgroundObjects3.length = 0;
gdjs.MainMenu2Code.GDtimebarObjects1.length = 0;
gdjs.MainMenu2Code.GDtimebarObjects2.length = 0;
gdjs.MainMenu2Code.GDtimebarObjects3.length = 0;
gdjs.MainMenu2Code.GDNewObjectObjects1.length = 0;
gdjs.MainMenu2Code.GDNewObjectObjects2.length = 0;
gdjs.MainMenu2Code.GDNewObjectObjects3.length = 0;
gdjs.MainMenu2Code.GDObstacle2Objects1.length = 0;
gdjs.MainMenu2Code.GDObstacle2Objects2.length = 0;
gdjs.MainMenu2Code.GDObstacle2Objects3.length = 0;
gdjs.MainMenu2Code.GDObstacleObjects1.length = 0;
gdjs.MainMenu2Code.GDObstacleObjects2.length = 0;
gdjs.MainMenu2Code.GDObstacleObjects3.length = 0;
gdjs.MainMenu2Code.GDNewObject2Objects1.length = 0;
gdjs.MainMenu2Code.GDNewObject2Objects2.length = 0;
gdjs.MainMenu2Code.GDNewObject2Objects3.length = 0;
gdjs.MainMenu2Code.GDTEXTBG2Objects1.length = 0;
gdjs.MainMenu2Code.GDTEXTBG2Objects2.length = 0;
gdjs.MainMenu2Code.GDTEXTBG2Objects3.length = 0;
gdjs.MainMenu2Code.GDBTNBackObjects1.length = 0;
gdjs.MainMenu2Code.GDBTNBackObjects2.length = 0;
gdjs.MainMenu2Code.GDBTNBackObjects3.length = 0;

gdjs.MainMenu2Code.eventsList1(runtimeScene);
return;

}

gdjs['MainMenu2Code'] = gdjs.MainMenu2Code;
