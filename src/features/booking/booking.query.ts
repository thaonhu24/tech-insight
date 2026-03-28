export const GET_BOOKINGS = `query GetFCLBookingSheet(
    $filter: IGetFCLBookingSheetFilter!
    $search: String
  ) {
    list: get_fcl_booking_sheet(filter: $filter, search: $search) {
      booking_type
      booking_note
      reference_code
      booking_title
      shipment_status
      booking_id
      conveyance_id
      delivery_order_id
      shipment_id
      seal_number
      
      customer {
        id
        name
        ref_organization_id
      }
      container_number
      uom_code
      total_weight
      total_volume
      
      driver {
        id
        full_name
        username
      }
      main_vehicle {
        id
        license_plate
      }
      sub_vehicle {
        id
        license_plate
      }
      
    }
  }
`;
