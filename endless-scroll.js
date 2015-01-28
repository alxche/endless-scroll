


// Write your package code
    EndlessScroll = {};
    EndlessScroll.subscribe =function(collectionName,templateName,elementName,increment) {
        self.ITEMS_INCREMENT = increment;
        self.elementName = elementName;
        Session.setDefault('itemsLimit', self.ITEMS_INCREMENT);
        Deps.autorun(function () {
            Meteor.subscribe(collectionName, Session.get('itemsLimit'));
        });
        Template[templateName].rendered = function () {

            // whenever #showMoreResults becomes visible, retrieve more results
            function showMoreVisible() {
                var threshold, target = $("#"+self.elementName  );

                if (!target.length) return;

                threshold = $(window).scrollTop() + $(window).height() - target.height();
                //console.log(threshold);
                if (target.offset().top < threshold) {
                    if (!target.data("visible")) {
                        //  console.log("target became visible (inside viewable area)");
                        target.data("visible", true);

                        Session.set("itemsLimit", Session.get("itemsLimit") + self.ITEMS_INCREMENT);
                    }
                } else {
                    if (target.data("visible")) {
                        //console.log("target became invisible (below viewable arae)");
                        target.data("visible", false);
                    }
                }
            }

// run the above func every time the user scrolls
            $(window).scroll(showMoreVisible);
        }
    }

