gdjs.EndSceneCode = {};
gdjs.EndSceneCode.GDMonsterObjects1= [];
gdjs.EndSceneCode.GDMonsterObjects2= [];
gdjs.EndSceneCode.GDShape1Objects1= [];
gdjs.EndSceneCode.GDShape1Objects2= [];
gdjs.EndSceneCode.GDShape2Objects1= [];
gdjs.EndSceneCode.GDShape2Objects2= [];
gdjs.EndSceneCode.GDShape3Objects1= [];
gdjs.EndSceneCode.GDShape3Objects2= [];
gdjs.EndSceneCode.GDShape8Objects1= [];
gdjs.EndSceneCode.GDShape8Objects2= [];
gdjs.EndSceneCode.GDShape7Objects1= [];
gdjs.EndSceneCode.GDShape7Objects2= [];
gdjs.EndSceneCode.GDShape6Objects1= [];
gdjs.EndSceneCode.GDShape6Objects2= [];
gdjs.EndSceneCode.GDShape5Objects1= [];
gdjs.EndSceneCode.GDShape5Objects2= [];
gdjs.EndSceneCode.GDShape4Objects1= [];
gdjs.EndSceneCode.GDShape4Objects2= [];
gdjs.EndSceneCode.GDScoreObjects1= [];
gdjs.EndSceneCode.GDScoreObjects2= [];
gdjs.EndSceneCode.GDObstacleObjects1= [];
gdjs.EndSceneCode.GDObstacleObjects2= [];
gdjs.EndSceneCode.GDLifeObjects1= [];
gdjs.EndSceneCode.GDLifeObjects2= [];
gdjs.EndSceneCode.GDGameOverObjects1= [];
gdjs.EndSceneCode.GDGameOverObjects2= [];
gdjs.EndSceneCode.GDButtonTryAgainObjects1= [];
gdjs.EndSceneCode.GDButtonTryAgainObjects2= [];
gdjs.EndSceneCode.GDButtonMainMenuObjects1= [];
gdjs.EndSceneCode.GDButtonMainMenuObjects2= [];
gdjs.EndSceneCode.GDToolExplosionObjects1= [];
gdjs.EndSceneCode.GDToolExplosionObjects2= [];
gdjs.EndSceneCode.GDBGFloorObjects1= [];
gdjs.EndSceneCode.GDBGFloorObjects2= [];
gdjs.EndSceneCode.GDBgArrObjects1= [];
gdjs.EndSceneCode.GDBgArrObjects2= [];
gdjs.EndSceneCode.GDTimerObjects1= [];
gdjs.EndSceneCode.GDTimerObjects2= [];
gdjs.EndSceneCode.GDtimebarObjects1= [];
gdjs.EndSceneCode.GDtimebarObjects2= [];
gdjs.EndSceneCode.GDPuntajeObjects1= [];
gdjs.EndSceneCode.GDPuntajeObjects2= [];
gdjs.EndSceneCode.GDTimeBarsObjects1= [];
gdjs.EndSceneCode.GDTimeBarsObjects2= [];
gdjs.EndSceneCode.GDCubetaFinalObjects1= [];
gdjs.EndSceneCode.GDCubetaFinalObjects2= [];
gdjs.EndSceneCode.GDParticleConsObjects1= [];
gdjs.EndSceneCode.GDParticleConsObjects2= [];
gdjs.EndSceneCode.GDmainbackgroundObjects1= [];
gdjs.EndSceneCode.GDmainbackgroundObjects2= [];
gdjs.EndSceneCode.GDFelicidadesObjects1= [];
gdjs.EndSceneCode.GDFelicidadesObjects2= [];
gdjs.EndSceneCode.GDTEXTBG3Objects1= [];
gdjs.EndSceneCode.GDTEXTBG3Objects2= [];
gdjs.EndSceneCode.GDPuntajeTextObjects1= [];
gdjs.EndSceneCode.GDPuntajeTextObjects2= [];

gdjs.EndSceneCode.conditionTrue_0 = {val:false};
gdjs.EndSceneCode.condition0IsTrue_0 = {val:false};
gdjs.EndSceneCode.condition1IsTrue_0 = {val:false};


gdjs.EndSceneCode.userFunc0x8f7a70 = function(runtimeScene) {
"use strict";
if (runtimeScene.getTimeManager().isFirstFrame()) {
    var finalscore = runtimeScene.getGame().getVariables().get("FinalScore");
    var herramientas = runtimeScene.getGame().getVariables().get("Herramientas");
    var rocas = runtimeScene.getGame().getVariables().get("Rocas");
    //window.top.postMessage(JSON.stringify({ score: finalscore, tools: herramientas, rocks: rocas}), '*');
    console.log(endGame)
    endGame( { score: finalscore, tools: herramientas, rocks: rocas} );
}
};
gdjs.EndSceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndSceneCode.condition0IsTrue_0.val = false;
{
gdjs.EndSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PuntajeText"), gdjs.EndSceneCode.GDPuntajeTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.EndSceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.EndSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.EndSceneCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + gdjs.evtTools.string.newLine() + "PUNTOS");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "finished.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs.EndSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.EndSceneCode.GDScoreObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.EndSceneCode.GDPuntajeTextObjects1.length ;i < len;++i) {
    gdjs.EndSceneCode.GDPuntajeTextObjects1[i].setBBText("[b][spacing=10]" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + "[/spacing][b]\n[size=60]PUNTOS[/size]");
}
}}

}


{


gdjs.EndSceneCode.userFunc0x8f7a70(runtimeScene);

}


};

gdjs.EndSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndSceneCode.GDMonsterObjects1.length = 0;
gdjs.EndSceneCode.GDMonsterObjects2.length = 0;
gdjs.EndSceneCode.GDShape1Objects1.length = 0;
gdjs.EndSceneCode.GDShape1Objects2.length = 0;
gdjs.EndSceneCode.GDShape2Objects1.length = 0;
gdjs.EndSceneCode.GDShape2Objects2.length = 0;
gdjs.EndSceneCode.GDShape3Objects1.length = 0;
gdjs.EndSceneCode.GDShape3Objects2.length = 0;
gdjs.EndSceneCode.GDShape8Objects1.length = 0;
gdjs.EndSceneCode.GDShape8Objects2.length = 0;
gdjs.EndSceneCode.GDShape7Objects1.length = 0;
gdjs.EndSceneCode.GDShape7Objects2.length = 0;
gdjs.EndSceneCode.GDShape6Objects1.length = 0;
gdjs.EndSceneCode.GDShape6Objects2.length = 0;
gdjs.EndSceneCode.GDShape5Objects1.length = 0;
gdjs.EndSceneCode.GDShape5Objects2.length = 0;
gdjs.EndSceneCode.GDShape4Objects1.length = 0;
gdjs.EndSceneCode.GDShape4Objects2.length = 0;
gdjs.EndSceneCode.GDScoreObjects1.length = 0;
gdjs.EndSceneCode.GDScoreObjects2.length = 0;
gdjs.EndSceneCode.GDObstacleObjects1.length = 0;
gdjs.EndSceneCode.GDObstacleObjects2.length = 0;
gdjs.EndSceneCode.GDLifeObjects1.length = 0;
gdjs.EndSceneCode.GDLifeObjects2.length = 0;
gdjs.EndSceneCode.GDGameOverObjects1.length = 0;
gdjs.EndSceneCode.GDGameOverObjects2.length = 0;
gdjs.EndSceneCode.GDButtonTryAgainObjects1.length = 0;
gdjs.EndSceneCode.GDButtonTryAgainObjects2.length = 0;
gdjs.EndSceneCode.GDButtonMainMenuObjects1.length = 0;
gdjs.EndSceneCode.GDButtonMainMenuObjects2.length = 0;
gdjs.EndSceneCode.GDToolExplosionObjects1.length = 0;
gdjs.EndSceneCode.GDToolExplosionObjects2.length = 0;
gdjs.EndSceneCode.GDBGFloorObjects1.length = 0;
gdjs.EndSceneCode.GDBGFloorObjects2.length = 0;
gdjs.EndSceneCode.GDBgArrObjects1.length = 0;
gdjs.EndSceneCode.GDBgArrObjects2.length = 0;
gdjs.EndSceneCode.GDTimerObjects1.length = 0;
gdjs.EndSceneCode.GDTimerObjects2.length = 0;
gdjs.EndSceneCode.GDtimebarObjects1.length = 0;
gdjs.EndSceneCode.GDtimebarObjects2.length = 0;
gdjs.EndSceneCode.GDPuntajeObjects1.length = 0;
gdjs.EndSceneCode.GDPuntajeObjects2.length = 0;
gdjs.EndSceneCode.GDTimeBarsObjects1.length = 0;
gdjs.EndSceneCode.GDTimeBarsObjects2.length = 0;
gdjs.EndSceneCode.GDCubetaFinalObjects1.length = 0;
gdjs.EndSceneCode.GDCubetaFinalObjects2.length = 0;
gdjs.EndSceneCode.GDParticleConsObjects1.length = 0;
gdjs.EndSceneCode.GDParticleConsObjects2.length = 0;
gdjs.EndSceneCode.GDmainbackgroundObjects1.length = 0;
gdjs.EndSceneCode.GDmainbackgroundObjects2.length = 0;
gdjs.EndSceneCode.GDFelicidadesObjects1.length = 0;
gdjs.EndSceneCode.GDFelicidadesObjects2.length = 0;
gdjs.EndSceneCode.GDTEXTBG3Objects1.length = 0;
gdjs.EndSceneCode.GDTEXTBG3Objects2.length = 0;
gdjs.EndSceneCode.GDPuntajeTextObjects1.length = 0;
gdjs.EndSceneCode.GDPuntajeTextObjects2.length = 0;

gdjs.EndSceneCode.eventsList0(runtimeScene);
return;

}

gdjs['EndSceneCode'] = gdjs.EndSceneCode;
