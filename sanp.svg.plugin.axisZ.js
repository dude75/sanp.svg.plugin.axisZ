/**
 * Created by dude75 on 04/08/16.
 * Detail see in https://github.com/adobe-webplatform/Snap.svg/issues/121
 */
//'use strict';
(function() {
    Snap.plugin(function (Snap, Element, Paper, glob) {
        var elproto = Element.prototype;
        elproto.toBack = function () {
            this.prependTo(this.paper);
        };
        elproto.toFront = function () {
            this.appendTo(this.paper);
        };
    });
})();