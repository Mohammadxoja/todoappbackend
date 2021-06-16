import Data from './data.js'; 

const createBtn =  document.querySelector('.fa-plus-square');
const createdListDiv = document.querySelector('.createdListDiv');
const checked = document.querySelector('#checked'); 

class Todo extends Data{

  showData(...a) {    
    let html;
    const data = [...a]; 
    console.log(data.length); 

    data.forEach((e) => {
       html+=`
      <div class="anotherDiv"> 
        <div>${e.name}</div> 
        <button class="trashButton"><i class="fas fa-trash" aria-hidden="true"></i></button>
        <button class="checkedButton"><i class="fas fa-check" aria-hidden="true"></i></button>
      </div>
     `  
    })    
    createdListDiv.innerHTML=html; 
    this.checkedElement = document.querySelector(".checkedButton"); 
    this.trashButton = document.querySelector(".trashButton"); 
    this.anotherDiv = document.querySelector('.anotherDiv');  
 } 

  checkedFunc() {
      this.checkedElement.addEventListener('click', (e) => {
         e.preventDefault();
         this.anotherDiv.classList.toggle('checkedElem');
      })
  }

  trashFunc() {
    this.trashButton.addEventListener('click', (e) => {
      e.preventDefault();
      if(this.anotherDiv.classList.contains('checkedElem')) {
            console.log('false');
        }else {
          console.log('true');
            this.anotherDiv.remove();
        }
     })
  }
}

const list = new Todo();
list.showData();
list.selectData();

const todoComponents = () => {
  list.createList(); 
} 

createBtn.addEventListener('click', () => {  
  todoComponents(); 
});

// document.addEventListener('keypress', (e) => {
//    if(e.keyCode == 48){
//    	   e.preventDefault();
//        createList();
//    }
//    console.log(e.keyCode);
// })    э


// add deleted notes to todo app