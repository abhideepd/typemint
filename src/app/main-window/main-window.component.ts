import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-window',
  imports: [CommonModule, FormsModule],
  templateUrl: './main-window.component.html',
  styleUrl: './main-window.component.css'
})
export class MainWindowComponent implements OnInit {
  current_random_text='';
  current_user_input='';

  constructor(private route:ActivatedRoute, private router:Router){

  }

  ngOnInit() {
      this.route.paramMap.subscribe(()=>{
      this.startGame();
    });
  }

  startGame(){
    this.current_random_text=getRandomText();
    this.current_user_input='';
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
    if(randomText===userInput){
      setTimeout(()=>{this.startGame();}, 1000);
    }
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
  return text[randomNumber];
}

function getRandomNumbers(min:number, max:number):number{
  return Math.floor(Math.random()*(max-min+1))+min;
}
