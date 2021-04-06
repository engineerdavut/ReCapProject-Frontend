import { RentalsDetail } from "./rentalsDetail";
import { ResponseModule } from "./responseModule";

export interface RentalsDetailResponseModule extends ResponseModule{
  data:RentalsDetail[]
}
