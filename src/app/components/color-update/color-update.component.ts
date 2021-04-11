import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
  colorId:number;
  colorUpdateForm:FormGroup;
  constructor(    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService:ColorService,

    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createColorUpdateForm();
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.colorId = params["colorId"];
      }
    })
  }
  createColorUpdateForm(){
    this.formBuilder.group({

      colorName: ['', Validators.required],

    })
  }
  update(){
    if(this.colorUpdateForm.valid){

      let colorUpdateModel = Object.assign({}, this.colorUpdateForm.value);

      colorUpdateModel.colorId = this.colorId;

      if(typeof(colorUpdateModel.colorId) == "string"){
        colorUpdateModel.colorId = parseInt(colorUpdateModel.colorId);
      }

      this.colorService.update(colorUpdateModel)
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
