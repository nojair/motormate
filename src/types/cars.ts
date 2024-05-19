export enum CarPlaceKeys {
  CarDealer = "car_dealer",
  CarRental = "car_rental",
  CarRepair = "car_repair",
  CarWash = "car_wash",
  Parking = "parking",
  GasStation = "gas_station"
}

export interface CarServicesOptions {
  key: CarPlaceKeys;
  label: string
}
