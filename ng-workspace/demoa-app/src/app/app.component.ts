 import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location = 'Theni';
  total: number=1000;

onBoxvaluChange(paramData: any)
{
  console.log("app component: " + paramData.value);
}
}

