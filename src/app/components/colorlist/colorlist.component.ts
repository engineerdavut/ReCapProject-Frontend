import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colorlist',
  templateUrl: './colorlist.component.html',
  styleUrls: ['./colorlist.component.css']
})
export class ColorlistComponent implements OnInit {

  colors:Color[]=[];
  constructor(private httpClient:HttpClient,private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }


  getColors(){
    this.colorService.getColor().subscribe(response=>{
      this.colors=response.data;
    })
  }

}
