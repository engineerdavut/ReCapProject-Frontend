import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandId:number;
  brandUpdateForm:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService:BrandService,

    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createBrandUpdateForm();
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.brandId = params["brandId"];
      }
    })
  }
  createBrandUpdateForm(){
    this.formBuilder.group({

      brandName: ['', Validators.required],

      brandDescription: ['', Validators.required],
    })
  }
  update(){
    if(this.brandUpdateForm.valid){

      let brandUpdateModel = Object.assign({}, this.brandUpdateForm.value);

      brandUpdateModel.brandId = this.brandId;

      if(typeof(brandUpdateModel.brandId) == "string"){
        brandUpdateModel.brandId = parseInt(brandUpdateModel.brandId);
      }

      this.brandService.update(brandUpdateModel)
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
