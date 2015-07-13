
; (function ($, window, document, undefined) {

    "use strict";
    var pluginName = "accordion",
            defaults = {
                multiple: true,
                accTitle: ".accTitle",
                accContent: ".accContent",
                locationData: "locData"
            };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {
            this.closeAll(this.element);
            this.locationSetControl(this.element);
            this.thisOpen(this.element, document.location.hash);
            this.onClick();
        },
        closeAll: function (elem) {
            $(elem).find(defaults.accTitle).attr("data", "ui-accordion-close");
            $(elem).find(defaults.accTitle).parent().attr("acildim", "kapali");
            $(elem).find(defaults.accContent).slideUp();
        },
        thisOpen: function (elem,thisId) {
            var test = $(elem).find(defaults.accTitle);
            $(test).each(function () {
                var _thisId = "#" + $(this).attr(defaults.locationData);
                if (_thisId == thisId) {
                    $(this).parent().attr("acildim", "open");
                    $(this).attr("data", "ui-accordion-open");
                    $(this).next().slideDown();
                }
            });
        },
        onClick: function () {
            var _elem = $(this.element);
            var _multiple = this.settings.multiple;

            $(_elem).find(defaults.accTitle).on("click", function () {
                console.log($(this).index());
                if (!_multiple) {
                    $(defaults.accTitle).each(function () {
                        if ($(this).parent().attr("acildim") == "open") {
                            $(this).next().slideUp();
                            $(this).parent().attr("acildim", "kapali");
                        }
                    });
                    //Plugin.prototype.closeAll(_elem);
                }
                if ($(this).attr("data") == "ui-accordion-close") {
                    Plugin.prototype.onClickOpen(this);
                }
                else
                    Plugin.prototype.onClickClose(this);
                Plugin.prototype.locationSet($(this).attr(defaults.locationData));
            });
        },
        onClickOpen: function (elem) {
            $(elem).parent().attr("acildim", "open");
            $(elem).next().slideDown();
            $(elem).attr("data", "ui-accordion-open");
        },
        onClickClose: function (elem) {
            $(elem).next().slideUp();
            $(elem).parent().attr("acildim", "kapali");
            $(elem).attr("data", "ui-accordion-close");
        },
        locationSetControl: function (elem) {
            var test = $(elem).find(defaults.accTitle);
            $(test).each(function () {
                if ($(this).attr(defaults.locationData) == null || $(this).attr(defaults.locationData) == undefined) {
                    console.log(defaults.locationData);
                    $(this).attr(defaults.locationData, $(this).text());
                }
            });
        },
        locationSet: function (veri) {
            document.location.hash = veri;
        }
    });

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
