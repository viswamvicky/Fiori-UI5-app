sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.app.demoproject.controller.View1", {
            onInit: function () {

            },
            // changes:function () {
            //     alert("changed")
            // },
            // onClick:function() {
            //     let str=prompt()
            //     alert(str);
            // }
            onCalculate: function(oEvent){
                const oView = this.getView(); iFirstNumber = presentInt(oView.byId("idFirstNumber").getvalue())
                const oView2 = this.getView(); iSecoundNumber = presentInt(oView2.byId("idSecoundNumber").getvalue())
            }
        });
    });
