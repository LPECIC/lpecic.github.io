/*jslint browser: true*/
/*global $, jQuery, alert, console*/

var u = {
    IDExists: function (id) {
        "use strict";
        if (document.getElementById(id)) {
            return true;
        } else {
            return false;
        }
    },

    id: function (id) {
        "use strict";
        return "#" + id;
    },

    cls: function (cls) {
        "use strict";
        return "." + cls;
    }
};

var esy = {
    nav: {
        HOOK_PARENT: "esy-nav",
        HOOK_CHILDREN: "esy-nav-dropdown",
        Limit: 0,
        NavStatus: {},
        
        buildClickHandler: function (i) {
            "use strict";
            return function (e) {
                if (esy.nav.NavStatus["menu-" + i]) {
                    // is true, that is, the menu was clicked to close it
                    esy.nav.closeAll();
                    return;
                }
                esy.nav.closeAll();
                esy.nav.NavStatus["menu-" + i] = true;
                $(u.id("esy-menu-dropdown-" + i)).slideDown();
                $(u.id("esy-menu-target-" + i)).addClass("active");
                return;
            };
        },
        closeAll: function () {
            "use strict";
            var i = 0;
            
            for (i; i < esy.nav.Limit; i += 1) {
                $(u.id("esy-menu-dropdown-" + i)).slideUp();
                $(u.id("esy-menu-target-" + i)).removeClass("active");
                esy.nav.NavStatus["menu-" + i] = false;
            }
            //$(".esy-nav").removeClass("open");
        },
        closeSidebar: function () {
            "use strict";
            esy.nav.closeAll();
            $(".esy-nav").removeClass("open");
        },
        init: function () {
            "use strict";
            // 1. Find all the Elements.
            var Hooks = $(u.cls(esy.nav.HOOK_PARENT) + " " + u.cls(esy.nav.HOOK_CHILDREN)), i;
            
            // 2. Put IDs in each element, and dropdown.
            for (i = 0; i < Hooks.length; i += 1) {
                Hooks.eq(i).attr("id", "esy-menu-dropdown-" + i);
                Hooks.eq(i).parent().attr("id", "esy-menu-target-" + i);
                
                // 3. Register a Click Event.
                $(u.id("esy-menu-target-" + i)).click(esy.nav.buildClickHandler(i));
                
                // 4. Put the Status in Status queue.
                esy.nav.NavStatus["menu-" + i] = false;
            }
            
            // 5. Tell the Limit about how many elements are there.
            esy.nav.Limit = Hooks.length;
            
            esy.nav.preventClicks();
            
            $(".esy-init-nav a").click(function () {
                esy.nav.openSidebar();
            });
            
            $(".esy-small-header").click(function () {
                esy.nav.closeSidebar();
            });
            
            
            
            // Done.
        },
        openSidebar: function () {
            "use strict";
            $(".esy-nav").addClass("open");
        },
        preventClicks: function (ids) {
            "use strict";
            $(document).click(function (e) {
                var container_1 = $(".esy-nav");
                if (!container_1.is(e.target) && container_1.has(e.target).length === 0) {
                    console.log("nav");
                    esy.nav.closeAll();
                }
            });
        }
    }
};

esy.nav.init();