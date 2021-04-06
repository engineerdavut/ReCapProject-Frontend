import { RentDetail } from "./rentDetail";
import { ResponseModule } from "./responseModule";

export interface RentDetailResponseModule extends ResponseModule{
  data:RentDetail[]
}
