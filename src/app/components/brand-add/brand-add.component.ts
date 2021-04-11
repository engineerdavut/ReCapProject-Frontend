import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brandAddForm:FormGroup;
  constructor(private brandService: BrandService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }
  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
      brandDescription: ['', Validators.required],
    });
  }
  add() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.add(brandModel).subscribe(
        (response) => {
          this.toastrService.success(
            response.messages,
            'Markanız eklendi. Başarılı'
          );
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Dogrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Bilgiler eksik girildi.', 'Dikkat');
    }
  }

}
