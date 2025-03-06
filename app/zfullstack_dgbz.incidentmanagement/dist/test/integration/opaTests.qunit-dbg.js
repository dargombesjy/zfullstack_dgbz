sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zfullstackdgbz/incidentmanagement/test/integration/FirstJourney',
		'zfullstackdgbz/incidentmanagement/test/integration/pages/IncidentsList',
		'zfullstackdgbz/incidentmanagement/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zfullstackdgbz/incidentmanagement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);