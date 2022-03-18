export class RentalData {
    id?: number;
    confirmed?: boolean;
    car_id?: number;
    agency_id?: number;
    startdate?: String;
    enddate?: String;
    typerental?:String;
    create_at?: String;
    customerName?: String;
    type_of_contract?: String;
    customer_type?: String;
    // For rental_client
    client_id?: number;
    // Extra data
    name?: String;
    car_image?: String;
    plate_number?: String;

}