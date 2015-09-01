/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

;(function( $, window, document, undifened ){
    "use strict";
    
    var pluginName = 'accordion',
        defaults = {
            multiple: false,
            accTitle: '.acc-title'
        };
        
    function Plugin( element, options ){
        this.element = element;
        this.options = $.extend( {}, defaults, options );
        
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    
    /* propertios */
    $.extend( Plugin.prototype, {
        /* initialize */
        init: function(){
            /* isMultiple */
            if(this.options.multiple){
                this.single();
            }
            else
                this.multiple();
        },
        multiple: function(){
            $(this.options.accTitle).on("click", function(){
                $(this).toggleClass("opened").next().toggle();
            })
        },
        single: function(){
            var _this = this;
            $(this.options.accTitle).on("click", function(){
                
                if( $(this).hasClass("opened") ){
                    $(_this.options.accTitle).removeClass("opened").next().hide();
                    $(this).next().hide();
                }
                else{
                    $(_this.options.accTitle).removeClass("opened").next().hide();
                    $(this).addClass("opened").next().show();
                }
            });
        }
    });
    
    $.fn[pluginName] = function ( options ){
        return this.each(function(){
            if(!$.data(this, 'plugin_' + pluginName )){
                $.data(this, 'plugin_' + pluginName, 
                    new Plugin( this, options ));
            }
        });
    }
    
})( jQuery, window, document );