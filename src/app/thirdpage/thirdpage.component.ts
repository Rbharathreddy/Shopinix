import { Component } from '@angular/core';

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css']
})
export class ThirdpageComponent {
  data={
    head:"",
    description:""
  }
  imageSrc: any;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.imageSrc = event.target.result;
    };

    reader.readAsDataURL(file);
  }

}
