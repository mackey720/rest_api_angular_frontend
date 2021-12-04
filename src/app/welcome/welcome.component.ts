import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message: string = 'Some Welcome Message'
  welcomeMessageFromService : string = ''
  name = ''

  constructor(private route: ActivatedRoute, 
    private service: WelcomeDataService) { }

  ngOnInit() {

    console.log(this.message)
   this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  getWelcomeMessageWithPath(){
    this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message

  }

  handleErrorResponse(error: { error: { message: string; }; })
  {
    this.welcomeMessageFromService = error.error.message;
    
  }

}
