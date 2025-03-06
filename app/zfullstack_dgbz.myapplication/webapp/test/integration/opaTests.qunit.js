sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zfullstackdgbz/myapplication/test/integration/FirstJourney',
		'zfullstackdgbz/myapplication/test/integration/pages/Main'
    ],
    function(JourneyRunner, opaJourney, Main) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zfullstackdgbz/myapplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMain: Main
                }
            },
            opaJourney.run
        );
    }
);