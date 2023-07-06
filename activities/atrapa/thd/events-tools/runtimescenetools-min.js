gdjs.evtTools.runtimeScene=gdjs.evtTools.runtimeScene||{},gdjs.evtTools.runtimeScene.sceneJustBegins=function(e){return e.getTimeManager().isFirstFrame()},gdjs.evtTools.runtimeScene.sceneJustResumed=function(e){return e.sceneJustResumed()},gdjs.evtTools.runtimeScene.getSceneName=function(e){return e.getName()},gdjs.evtTools.runtimeScene.setBackgroundColor=function(e,t){var n=t.split(";");n.length<3||e.setBackgroundColor(parseInt(n[0]),parseInt(n[1]),parseInt(n[2]))},gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds=function(e){return e.getTimeManager().getElapsedTime()/1e3},gdjs.evtTools.runtimeScene.setTimeScale=function(e,t){return e.getTimeManager().setTimeScale(t)},gdjs.evtTools.runtimeScene.getTimeScale=function(e){return e.getTimeManager().getTimeScale()},gdjs.evtTools.runtimeScene.timerElapsedTime=function(e,t,n){var r=e.getTimeManager();return r.hasTimer(n)?r.getTimer(n).getTime()/1e3>=t:(r.addTimer(n),!1)},gdjs.evtTools.runtimeScene.timerPaused=function(e,t){var n=e.getTimeManager();return!!n.hasTimer(t)&&n.getTimer(t).isPaused()},gdjs.evtTools.runtimeScene.resetTimer=function(e,t){var n=e.getTimeManager();n.hasTimer(t)?n.getTimer(t).reset():n.addTimer(t)},gdjs.evtTools.runtimeScene.pauseTimer=function(e,t){var n=e.getTimeManager();n.hasTimer(t)||n.addTimer(t),n.getTimer(t).setPaused(!0)},gdjs.evtTools.runtimeScene.unpauseTimer=function(e,t){var n=e.getTimeManager();return n.hasTimer(t)||n.addTimer(t),n.getTimer(t).setPaused(!1)},gdjs.evtTools.runtimeScene.removeTimer=function(e,t){e.getTimeManager().removeTimer(t)},gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds=function(e,t){var n=e.getTimeManager();return n.hasTimer(t)?n.getTimer(t).getTime()/1e3:0},gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds=function(e){return e.getTimeManager().getTimeFromStart()/1e3},gdjs.evtTools.runtimeScene.getTime=function(e,t){if("timestamp"===t)return Date.now();var n=new Date;if("hour"===t)return n.getHours();if("min"===t)return n.getMinutes();if("sec"===t)return n.getSeconds();if("mday"===t)return n.getDate();if("mon"===t)return n.getMonth();if("year"===t)return n.getFullYear()-1900;if("wday"===t)return n.getDay();if("yday"===t){var r=new Date(n.getFullYear(),0,0),i=n-r,s=864e5;return Math.floor(i/864e5)}return 0},gdjs.evtTools.runtimeScene.replaceScene=function(e,t,n){e.getGame().getSceneData(t)&&e.requestChange(n?gdjs.RuntimeScene.CLEAR_SCENES:gdjs.RuntimeScene.REPLACE_SCENE,t)},gdjs.evtTools.runtimeScene.pushScene=function(e,t){e.getGame().getSceneData(t)&&e.requestChange(gdjs.RuntimeScene.PUSH_SCENE,t)},gdjs.evtTools.runtimeScene.popScene=function(e){e.requestChange(gdjs.RuntimeScene.POP_SCENE)},gdjs.evtTools.runtimeScene.stopGame=function(e){e.requestChange(gdjs.RuntimeScene.STOP_GAME)},gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout=function(e,t,n,r){var i=e.getGame().getExternalLayoutData(t);null!==i&&e.createObjectsFrom(i.instances,n,r,!1)};