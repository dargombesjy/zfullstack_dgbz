using { dgbz.cap as my } from '../db/schema.cds';

/**
 * Service used by administrators to manage customers and incidents.
 */
service AdminService
{
    entity Customers as
        projection on my.Customers;

    entity Incidents as
        projection on my.Incidents;

}

/**
 * Service used by support personell, i.e. the incidents' 'processors'.
 */
service ProcessorService
{
    @odata.draft.enabled
    entity Incidents as
        projection on my.Incidents;

    entity Customers as
        projection on my.Customers;

}
