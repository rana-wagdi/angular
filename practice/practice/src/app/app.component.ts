import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbels = false;
  password = '';


  
  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbels() {
    this.includeSymbels = !this.includeSymbels;
  }

  onButtonClick() {
    // console.log(`About to generate a password with the follweing:
    // Includes Letter: ${this.includeLetters}`);
    // this.password = 'MY PASSWORD!!';
    // console.log('Button was Clicked');
    
    const numbers ='1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    
    let vaildChars = '';
    
    if(this.includeLetters){
        
      vaildChars += letters;
    }
    if(this.includeNumbers){
      
      vaildChars += numbers
    }
    if(this.includeSymbels){
              
      vaildChars += symbols
    }
    
    let generatedPassword = "";
    
    for(let i = 0; i< this.length; i++){
      const index = Math.floor(Math.random() * vaildChars.length)
      
      generatedPassword += vaildChars[index]
    }
    
   this.password = generatedPassword;

  }
}
