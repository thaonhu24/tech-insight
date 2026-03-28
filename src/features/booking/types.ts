export enum ETypeOfLoading {
  FCL = "FCL",
  FTL = "FTL",
  LTL = "LTL",
}
export enum EBookingType {
  EXPORT = "EXPORT",
  DOMESTIC = "DOMESTIC",
  IMPORT = "IMPORT",
}

export enum EShipmentStatus {
  DRAFT = "DRAFT",
  CONFIRMED = "CONFIRMED",
  PROCESSING = "PROCESSING",
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
}

export type TBookingCustomer = {
  id: string;
  name: string;
  ref_organization_id?: string;
};

export type TBookingDriver = {
  id: string;
  full_name?: string;
  username: string;
};

export type TBookingRoutePoint = {
  leg_route_point_id: string;
  name: string;
  address: string;
  commitment_date: Date;
  latitude: number;
  longitude: number;
};

export type TBookingVehicle = {
  id: string;
  license_plate: string;
};

export type TBookingOrganization = {
  id: string;
  name: string;
};

export interface IBooking {
  booking_id: string;
  delivery_order_id: string;
  booking_note?: string;
  booking_title: string;
  booking_type: EBookingType;
  cargo_route_point?: TBookingRoutePoint;
  container_number?: string;
  conveyance_id: string;
  customer: TBookingCustomer;
  delivery_container_route_point: TBookingRoutePoint;
  driver?: TBookingDriver;
  shipment_id: string;
  main_vehicle?: TBookingVehicle;
  pick_container_route_point: TBookingRoutePoint;
  reference_code?: string;
  shipment_status: EShipmentStatus;
  sub_vehicle?: TBookingVehicle;
  uom_code: string;
  total_weight?: string;
  total_volume: number;
  seal_number?: string;
}

export type GroupedBooking = {
  date: string;
  items: IBooking[];
};

export type TableRow =
  | {
      type: "group";
      key: string;
      date: string;
      count: number;
    }
  | (IBooking & {
      type: "item";
      key: string;
    });
