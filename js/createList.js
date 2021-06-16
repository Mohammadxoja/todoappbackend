class CreateList {
    
    createList() {
        this.createInputClass = document.querySelector('.create > input'); 
        const data = {
           name: this.createInputClass.value  
        }; 
    
        const options = {
           method: 'POST', 
           headers: {
             'Content-Type': 'application/json' 
           }, 
           body: JSON.stringify(data) 
        }
    
        fetch('http://localhost:4000/insert', options); 
    }
} 

export default CreateList; 