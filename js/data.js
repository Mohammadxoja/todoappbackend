import CreateList from "./createList.js"; 

class Data extends CreateList{
    async selectData() {
     const data = await fetch("http://localhost:4000/select"); 
     const text = await data.text(); 
     this.json = JSON.parse(text);
     this.showData(...this.json); 
    } 
}   

export default Data; 