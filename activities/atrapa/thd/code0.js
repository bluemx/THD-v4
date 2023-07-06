gdjs._481MainMenuCode = {};
gdjs._481MainMenuCode.GDGameTitleObjects1= [];
gdjs._481MainMenuCode.GDGameTitleObjects2= [];
gdjs._481MainMenuCode.GDGameTitleObjects3= [];
gdjs._481MainMenuCode.GDButtonStartObjects1= [];
gdjs._481MainMenuCode.GDButtonStartObjects2= [];
gdjs._481MainMenuCode.GDButtonStartObjects3= [];
gdjs._481MainMenuCode.GDinstructionsDeskObjects1= [];
gdjs._481MainMenuCode.GDinstructionsDeskObjects2= [];
gdjs._481MainMenuCode.GDinstructionsDeskObjects3= [];
gdjs._481MainMenuCode.GDinstructionsMovObjects1= [];
gdjs._481MainMenuCode.GDinstructionsMovObjects2= [];
gdjs._481MainMenuCode.GDinstructionsMovObjects3= [];
gdjs._481MainMenuCode.GDinstructions3Objects1= [];
gdjs._481MainMenuCode.GDinstructions3Objects2= [];
gdjs._481MainMenuCode.GDinstructions3Objects3= [];
gdjs._481MainMenuCode.GDinstructions2Objects1= [];
gdjs._481MainMenuCode.GDinstructions2Objects2= [];
gdjs._481MainMenuCode.GDinstructions2Objects3= [];
gdjs._481MainMenuCode.GDinstructionsObjects1= [];
gdjs._481MainMenuCode.GDinstructionsObjects2= [];
gdjs._481MainMenuCode.GDinstructionsObjects3= [];
gdjs._481MainMenuCode.GDComojugarObjects1= [];
gdjs._481MainMenuCode.GDComojugarObjects2= [];
gdjs._481MainMenuCode.GDComojugarObjects3= [];
gdjs._481MainMenuCode.GDBGObjects1= [];
gdjs._481MainMenuCode.GDBGObjects2= [];
gdjs._481MainMenuCode.GDBGObjects3= [];
gdjs._481MainMenuCode.GDBGFloorObjects1= [];
gdjs._481MainMenuCode.GDBGFloorObjects2= [];
gdjs._481MainMenuCode.GDBGFloorObjects3= [];
gdjs._481MainMenuCode.GDBNTRightObjects1= [];
gdjs._481MainMenuCode.GDBNTRightObjects2= [];
gdjs._481MainMenuCode.GDBNTRightObjects3= [];
gdjs._481MainMenuCode.GDBNTLeftObjects1= [];
gdjs._481MainMenuCode.GDBNTLeftObjects2= [];
gdjs._481MainMenuCode.GDBNTLeftObjects3= [];
gdjs._481MainMenuCode.GDcubetaObjects1= [];
gdjs._481MainMenuCode.GDcubetaObjects2= [];
gdjs._481MainMenuCode.GDcubetaObjects3= [];
gdjs._481MainMenuCode.GDcubetax2Objects1= [];
gdjs._481MainMenuCode.GDcubetax2Objects2= [];
gdjs._481MainMenuCode.GDcubetax2Objects3= [];
gdjs._481MainMenuCode.GDBTNcomenzarObjects1= [];
gdjs._481MainMenuCode.GDBTNcomenzarObjects2= [];
gdjs._481MainMenuCode.GDBTNcomenzarObjects3= [];
gdjs._481MainMenuCode.GDTimerObjects1= [];
gdjs._481MainMenuCode.GDTimerObjects2= [];
gdjs._481MainMenuCode.GDTimerObjects3= [];
gdjs._481MainMenuCode.GDmainbackgroundObjects1= [];
gdjs._481MainMenuCode.GDmainbackgroundObjects2= [];
gdjs._481MainMenuCode.GDmainbackgroundObjects3= [];
gdjs._481MainMenuCode.GDShape3Objects1= [];
gdjs._481MainMenuCode.GDShape3Objects2= [];
gdjs._481MainMenuCode.GDShape3Objects3= [];
gdjs._481MainMenuCode.GDShape2Objects1= [];
gdjs._481MainMenuCode.GDShape2Objects2= [];
gdjs._481MainMenuCode.GDShape2Objects3= [];
gdjs._481MainMenuCode.GDShape1Objects1= [];
gdjs._481MainMenuCode.GDShape1Objects2= [];
gdjs._481MainMenuCode.GDShape1Objects3= [];
gdjs._481MainMenuCode.GDtimebarObjects1= [];
gdjs._481MainMenuCode.GDtimebarObjects2= [];
gdjs._481MainMenuCode.GDtimebarObjects3= [];
gdjs._481MainMenuCode.GDicPhoneObjects1= [];
gdjs._481MainMenuCode.GDicPhoneObjects2= [];
gdjs._481MainMenuCode.GDicPhoneObjects3= [];
gdjs._481MainMenuCode.GDicComputerObjects1= [];
gdjs._481MainMenuCode.GDicComputerObjects2= [];
gdjs._481MainMenuCode.GDicComputerObjects3= [];
gdjs._481MainMenuCode.GDBTNBackObjects1= [];
gdjs._481MainMenuCode.GDBTNBackObjects2= [];
gdjs._481MainMenuCode.GDBTNBackObjects3= [];
gdjs._481MainMenuCode.GDTEXTBGObjects1= [];
gdjs._481MainMenuCode.GDTEXTBGObjects2= [];
gdjs._481MainMenuCode.GDTEXTBGObjects3= [];

gdjs._481MainMenuCode.conditionTrue_0 = {val:false};
gdjs._481MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs._481MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs._481MainMenuCode.condition2IsTrue_0 = {val:false};
gdjs._481MainMenuCode.condition3IsTrue_0 = {val:false};
gdjs._481MainMenuCode.condition4IsTrue_0 = {val:false};
gdjs._481MainMenuCode.conditionTrue_1 = {val:false};
gdjs._481MainMenuCode.condition0IsTrue_1 = {val:false};
gdjs._481MainMenuCode.condition1IsTrue_1 = {val:false};
gdjs._481MainMenuCode.condition2IsTrue_1 = {val:false};
gdjs._481MainMenuCode.condition3IsTrue_1 = {val:false};
gdjs._481MainMenuCode.condition4IsTrue_1 = {val:false};


gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs._481MainMenuCode.GDButtonStartObjects1});gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDBTNcomenzarObjects1Objects = Hashtable.newFrom({"BTNcomenzar": gdjs._481MainMenuCode.GDBTNcomenzarObjects1});gdjs._481MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs._481MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs._481MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._481MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs._481MainMenuCode.GDBTNcomenzarObjects1, gdjs._481MainMenuCode.GDBTNcomenzarObjects2);

{for(var i = 0, len = gdjs._481MainMenuCode.GDBTNcomenzarObjects2.length ;i < len;++i) {
    gdjs._481MainMenuCode.GDBTNcomenzarObjects2[i].setAnimationName("click");
}
}}

}


{


gdjs._481MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs._481MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs._481MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu2", false);
}}

}


};gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDBTNBackObjects1Objects = Hashtable.newFrom({"BTNBack": gdjs._481MainMenuCode.GDBTNBackObjects1});gdjs._481MainMenuCode.userFunc0x83e640 = function(runtimeScene) {
"use strict";
//window.top.postMessage(JSON.stringify({ close: true }), '*');
console.log('closeGame')
closeGame()
};
gdjs._481MainMenuCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs._481MainMenuCode.userFunc0x83e640(runtimeScene);

}


};gdjs._481MainMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs._481MainMenuCode.GDButtonStartObjects1);

gdjs._481MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs._481MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, true);
}if (gdjs._481MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs._481MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs._481MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs._481MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTNcomenzar"), gdjs._481MainMenuCode.GDBTNcomenzarObjects1);

gdjs._481MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs._481MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDBTNcomenzarObjects1Objects, runtimeScene, true, false);
}if (gdjs._481MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs._481MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs._481MainMenuCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("BGFloor"), gdjs._481MainMenuCode.GDBGFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs._481MainMenuCode.GDinstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructions2"), gdjs._481MainMenuCode.GDinstructions2Objects1);
gdjs.copyArray(runtimeScene.getObjects("instructions3"), gdjs._481MainMenuCode.GDinstructions3Objects1);
gdjs.copyArray(runtimeScene.getObjects("instructionsDesk"), gdjs._481MainMenuCode.GDinstructionsDeskObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructionsMov"), gdjs._481MainMenuCode.GDinstructionsMovObjects1);
{for(var i = 0, len = gdjs._481MainMenuCode.GDBGObjects1.length ;i < len;++i) {
    gdjs._481MainMenuCode.GDBGObjects1[i].drawRoundedRectangle(0, 0, 576, 790, 10);
}
}{for(var i = 0, len = gdjs._481MainMenuCode.GDBGFloorObjects1.length ;i < len;++i) {
    gdjs._481MainMenuCode.GDBGFloorObjects1[i].drawRectangle(0, 0, gdjs.evtTools.window.getWindowInnerWidth(), 160);
}
}{for(var i = 0, len = gdjs._481MainMenuCode.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs._481MainMenuCode.GDinstructionsObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs._481MainMenuCode.GDinstructions2Objects1.length ;i < len;++i) {
    gdjs._481MainMenuCode.GDinstructions2Objects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs._481MainMenuCode.GDinstructionsMovObjects1.length ;i < len;++i) {
    gdjs._481MainMenuCode.GDinstructionsMovObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs._481MainMenuCode.GDinstructions3Objects1.length ;i < len;++i) {
    gdjs._481MainMenuCode.GDinstructions3Objects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs._481MainMenuCode.GDinstructionsDeskObjects1.length ;i < len;++i) {
    gdjs._481MainMenuCode.GDinstructionsDeskObjects1[i].setTextAlignment("center");
}
}}

}


{


gdjs._481MainMenuCode.condition0IsTrue_0.val = false;
gdjs._481MainMenuCode.condition1IsTrue_0.val = false;
gdjs._481MainMenuCode.condition2IsTrue_0.val = false;
{
gdjs._481MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs._481MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs._481MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs._481MainMenuCode.condition1IsTrue_0.val ) {
{
gdjs._481MainMenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
}}
}
if (gdjs._481MainMenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScene", false);
}}

}


{


gdjs._481MainMenuCode.condition0IsTrue_0.val = false;
gdjs._481MainMenuCode.condition1IsTrue_0.val = false;
gdjs._481MainMenuCode.condition2IsTrue_0.val = false;
{
gdjs._481MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs._481MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs._481MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs._481MainMenuCode.condition1IsTrue_0.val ) {
{
gdjs._481MainMenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}}
}
if (gdjs._481MainMenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(15999);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTNBack"), gdjs._481MainMenuCode.GDBTNBackObjects1);

gdjs._481MainMenuCode.condition0IsTrue_0.val = false;
gdjs._481MainMenuCode.condition1IsTrue_0.val = false;
gdjs._481MainMenuCode.condition2IsTrue_0.val = false;
gdjs._481MainMenuCode.condition3IsTrue_0.val = false;
{
gdjs._481MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDBTNBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs._481MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs._481MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs._481MainMenuCode.condition1IsTrue_0.val ) {
{
gdjs._481MainMenuCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "BackButtonTimer");
}if ( gdjs._481MainMenuCode.condition2IsTrue_0.val ) {
{
{gdjs._481MainMenuCode.conditionTrue_1 = gdjs._481MainMenuCode.condition3IsTrue_0;
gdjs._481MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8131300);
}
}}
}
}
if (gdjs._481MainMenuCode.condition3IsTrue_0.val) {

{ //Subevents
gdjs._481MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs._481MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs._481MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._481MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BackButtonTimer");
}}

}


{


{
}

}


};

gdjs._481MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._481MainMenuCode.GDGameTitleObjects1.length = 0;
gdjs._481MainMenuCode.GDGameTitleObjects2.length = 0;
gdjs._481MainMenuCode.GDGameTitleObjects3.length = 0;
gdjs._481MainMenuCode.GDButtonStartObjects1.length = 0;
gdjs._481MainMenuCode.GDButtonStartObjects2.length = 0;
gdjs._481MainMenuCode.GDButtonStartObjects3.length = 0;
gdjs._481MainMenuCode.GDinstructionsDeskObjects1.length = 0;
gdjs._481MainMenuCode.GDinstructionsDeskObjects2.length = 0;
gdjs._481MainMenuCode.GDinstructionsDeskObjects3.length = 0;
gdjs._481MainMenuCode.GDinstructionsMovObjects1.length = 0;
gdjs._481MainMenuCode.GDinstructionsMovObjects2.length = 0;
gdjs._481MainMenuCode.GDinstructionsMovObjects3.length = 0;
gdjs._481MainMenuCode.GDinstructions3Objects1.length = 0;
gdjs._481MainMenuCode.GDinstructions3Objects2.length = 0;
gdjs._481MainMenuCode.GDinstructions3Objects3.length = 0;
gdjs._481MainMenuCode.GDinstructions2Objects1.length = 0;
gdjs._481MainMenuCode.GDinstructions2Objects2.length = 0;
gdjs._481MainMenuCode.GDinstructions2Objects3.length = 0;
gdjs._481MainMenuCode.GDinstructionsObjects1.length = 0;
gdjs._481MainMenuCode.GDinstructionsObjects2.length = 0;
gdjs._481MainMenuCode.GDinstructionsObjects3.length = 0;
gdjs._481MainMenuCode.GDComojugarObjects1.length = 0;
gdjs._481MainMenuCode.GDComojugarObjects2.length = 0;
gdjs._481MainMenuCode.GDComojugarObjects3.length = 0;
gdjs._481MainMenuCode.GDBGObjects1.length = 0;
gdjs._481MainMenuCode.GDBGObjects2.length = 0;
gdjs._481MainMenuCode.GDBGObjects3.length = 0;
gdjs._481MainMenuCode.GDBGFloorObjects1.length = 0;
gdjs._481MainMenuCode.GDBGFloorObjects2.length = 0;
gdjs._481MainMenuCode.GDBGFloorObjects3.length = 0;
gdjs._481MainMenuCode.GDBNTRightObjects1.length = 0;
gdjs._481MainMenuCode.GDBNTRightObjects2.length = 0;
gdjs._481MainMenuCode.GDBNTRightObjects3.length = 0;
gdjs._481MainMenuCode.GDBNTLeftObjects1.length = 0;
gdjs._481MainMenuCode.GDBNTLeftObjects2.length = 0;
gdjs._481MainMenuCode.GDBNTLeftObjects3.length = 0;
gdjs._481MainMenuCode.GDcubetaObjects1.length = 0;
gdjs._481MainMenuCode.GDcubetaObjects2.length = 0;
gdjs._481MainMenuCode.GDcubetaObjects3.length = 0;
gdjs._481MainMenuCode.GDcubetax2Objects1.length = 0;
gdjs._481MainMenuCode.GDcubetax2Objects2.length = 0;
gdjs._481MainMenuCode.GDcubetax2Objects3.length = 0;
gdjs._481MainMenuCode.GDBTNcomenzarObjects1.length = 0;
gdjs._481MainMenuCode.GDBTNcomenzarObjects2.length = 0;
gdjs._481MainMenuCode.GDBTNcomenzarObjects3.length = 0;
gdjs._481MainMenuCode.GDTimerObjects1.length = 0;
gdjs._481MainMenuCode.GDTimerObjects2.length = 0;
gdjs._481MainMenuCode.GDTimerObjects3.length = 0;
gdjs._481MainMenuCode.GDmainbackgroundObjects1.length = 0;
gdjs._481MainMenuCode.GDmainbackgroundObjects2.length = 0;
gdjs._481MainMenuCode.GDmainbackgroundObjects3.length = 0;
gdjs._481MainMenuCode.GDShape3Objects1.length = 0;
gdjs._481MainMenuCode.GDShape3Objects2.length = 0;
gdjs._481MainMenuCode.GDShape3Objects3.length = 0;
gdjs._481MainMenuCode.GDShape2Objects1.length = 0;
gdjs._481MainMenuCode.GDShape2Objects2.length = 0;
gdjs._481MainMenuCode.GDShape2Objects3.length = 0;
gdjs._481MainMenuCode.GDShape1Objects1.length = 0;
gdjs._481MainMenuCode.GDShape1Objects2.length = 0;
gdjs._481MainMenuCode.GDShape1Objects3.length = 0;
gdjs._481MainMenuCode.GDtimebarObjects1.length = 0;
gdjs._481MainMenuCode.GDtimebarObjects2.length = 0;
gdjs._481MainMenuCode.GDtimebarObjects3.length = 0;
gdjs._481MainMenuCode.GDicPhoneObjects1.length = 0;
gdjs._481MainMenuCode.GDicPhoneObjects2.length = 0;
gdjs._481MainMenuCode.GDicPhoneObjects3.length = 0;
gdjs._481MainMenuCode.GDicComputerObjects1.length = 0;
gdjs._481MainMenuCode.GDicComputerObjects2.length = 0;
gdjs._481MainMenuCode.GDicComputerObjects3.length = 0;
gdjs._481MainMenuCode.GDBTNBackObjects1.length = 0;
gdjs._481MainMenuCode.GDBTNBackObjects2.length = 0;
gdjs._481MainMenuCode.GDBTNBackObjects3.length = 0;
gdjs._481MainMenuCode.GDTEXTBGObjects1.length = 0;
gdjs._481MainMenuCode.GDTEXTBGObjects2.length = 0;
gdjs._481MainMenuCode.GDTEXTBGObjects3.length = 0;

gdjs._481MainMenuCode.eventsList2(runtimeScene);
return;

}

gdjs['_481MainMenuCode'] = gdjs._481MainMenuCode;
