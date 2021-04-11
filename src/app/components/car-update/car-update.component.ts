import { ActivatedRoute } from '@angular/router';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  carId:number;
  colorId:Color[];
  brandId:Brand[];
  colors:Color[]
  brands:Brand[]
  carUpdateForm: FormGroup;
  constructor(   private carService: CarService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService:BrandService,
    private colorService:ColorService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.createCarUpdateForm();
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.carId = params["carId"];
      }
    })


  }
  getColor() {
    this.colorService.getColor().subscribe((response) => {
      this.colorId = response.data;

    });
  }
  getBrand() {
    this.brandService.getBrand().subscribe((response) => {
      this.brandId = response.data;

    });
  }
  createCarUpdateForm(){
    this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      carName: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      carDescription: ['', Validators.required],
    })
  }
  update(){
    if(this.carUpdateForm.valid){

      let carUpdateModel = Object.assign({}, this.carUpdateForm.value);

      carUpdateModel.carId = this.carId;

      if(typeof(carUpdateModel.brandId) == "string"){
        carUpdateModel.brandId = parseInt(carUpdateModel.brandId);
      }

      if(typeof(carUpdateModel.colorId) == "string"){
        carUpdateModel.colorId = parseInt(carUpdateModel.colorId);
      }

      if(typeof(carUpdateModel.carId) == "string"){
        carUpdateModel.carId = parseInt(carUpdateModel.carId);
      }

      this.carService.update(carUpdateModel)
        .subscribe((response) => {
          this.toastrService.success(response.messages, "Başarı")
        }, responseError => {
          console.log(responseError);

          if(responseError.error.Errors.length > 0){

            for (let i = 0; i < responseError.error.Errors.length; i++) {

              this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Hata")

            }

          }
        })

    }
  }

}
