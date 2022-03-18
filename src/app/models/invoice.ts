export class InvoiceData {
    id?: number;
    number?: String;
    date?: String;
    name_agency?: String|null;
    name_client?: String;
    email_client?: String;
    address?: String;
    reservation_number?: String;
    reservation_duration?: String;
    car_brand?: String;
    car_num_plate?: String;
    rantal_price?: String;
    equipment_price?: String;
    total_amount?: number;
    pay_within_day?: String;
    bank_details?: String;
    bank_name?: String;
    bank_teller?: String;
    bank_key?: String;
}