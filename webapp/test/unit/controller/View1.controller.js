sap.ui.define([
    "calculator/controller/View1.controller",
    "sap/ui/core/mvc/View",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/core/ComponentContainer",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function (View1Controller, View, XMLView, ComponentContainer) {
    "use strict";

    QUnit.module("View1 Controller Tests", {
        beforeEach: function (assert) {
            var done = assert.async();

            // Mock view creation
            XMLView.create({
                viewName: "calculator.view.View1"
            }).then(function (oView) {
                this.oView = oView;
                this.oController = this.oView.getController();
                this.oView.placeAt("qunit-fixture");
                sap.ui.getCore().applyChanges();
                done();
            }.bind(this));
        },
        afterEach: function () {
            this.oView.destroy();
        }
    });

    QUnit.test("Test onSum function", function (assert) {
        this.oView.byId("num1").setValue("2");
        this.oView.byId("num2").setValue("3");
        this.oController.onSum();
        var result = this.oView.byId("ans_inp").getValue();
        assert.strictEqual(result, "5", "Sum function works correctly");
    });

    QUnit.test("Test onSub function", function (assert) {
        this.oView.byId("num1").setValue("5");
        this.oView.byId("num2").setValue("3");
        this.oController.onSub();
        var result = this.oView.byId("ans_inp").getValue();
        assert.strictEqual(result, "2", "Subtraction function works correctly");
    });

    QUnit.test("Test onMul function", function (assert) {
        this.oView.byId("num1").setValue("2");
        this.oView.byId("num2").setValue("3");
        this.oController.onMul();
        var result = this.oView.byId("ans_inp").getValue();
        assert.strictEqual(result, "6", "Multiplication function works correctly");
    });

    QUnit.test("Test onDiv function", function (assert) {
        this.oView.byId("num1").setValue("6");
        this.oView.byId("num2").setValue("3");
        this.oController.onDiv();
        var result = this.oView.byId("ans_inp").getValue();
        assert.strictEqual(result, "2", "Division function works correctly");
    });

    QUnit.test("Test onClear function", function (assert) {
        this.oView.byId("num1").setValue("2");
        this.oView.byId("num2").setValue("3");
        this.oView.byId("ans_inp").setValue("5");
        this.oController.onClear();
        assert.strictEqual(this.oView.byId("num1").getValue(), "", "Clear function works correctly on num1");
        assert.strictEqual(this.oView.byId("num2").getValue(), "", "Clear function works correctly on num2");
        assert.strictEqual(this.oView.byId("ans_inp").getValue(), "", "Clear function works correctly on ans_inp");
    });
});
