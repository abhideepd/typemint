import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'typemint';

  current_random_text=getRandomText();
  current_user_input='';

  constructor(private route:ActivatedRoute, private router:Router){

  }

  onTouchTyping(event:Event){
    const userInput = event.target as HTMLInputElement | null;
    const xyz=String(userInput?.value);
    this.current_user_input=xyz;
  }
  newGame(){
    this.router.navigate(['']);
  }
  compare(randomLetter:string, enteredLetter:string): string{
    if(!enteredLetter){
      return 'pending';
    }
    return randomLetter===enteredLetter ? 'correct' : 'incorrect';
  }
  successValidator(){
    const userInput=this.current_user_input;
    const randomText=this.current_random_text;
    return (randomText===userInput);
  }
}
function getRandomText() {
  const text:any[]=[];
  text[0] = 'Randomly generated text should go!! here';
  text[1] = 'This is the land of the romeo';
  text[2] = 'Will I ever get the chance to go to boomtown';
  text[3] = 'Do psycadelics and chill';
  text[4] = 'be successful and win capitalism';
  text[5] = 'the world is your oyster';
  const randomNumber:number=getRandomNumbers(0, text.length-1);
  console.log("Random No.: ",randomNumber);
  return text[randomNumber];
}

function getRandomNumbers(min:number, max:number):number{
  return Math.floor(Math.random()*(max-min+1))+min;
}
