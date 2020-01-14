/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/demo/tutorial/sapDevTutorial/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});