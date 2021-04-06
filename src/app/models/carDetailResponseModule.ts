import { CarDetail } from "./carDetail";
import { ResponseModule } from "./responseModule";

export interface CarDetailResponseModule extends ResponseModule{
 data:CarDetail[]
}
