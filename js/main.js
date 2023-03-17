const { createApp } = Vue

  createApp({
    data() {
      return {
        newTask:"",
        taskList:[
          {
            text:'mansione 1',
            done:false
          },
          {
            text:'mansione 2',
            done:true
          },
          {
            text:'mansione 3',
            done:false
          },
        ]
      }
    },
    methods:{
      removeTask(index){
        this.taskList.splice(index,1);
      },
      addTask(){
        if(this.newTask.length > 0){
          this.taskList.push({text:this.newTask,done:false});
          this.newTask="";
        }
      },
      checker(element){
        if(element.done==false){
          element.done = true;
        }else{
          element.done = false;
        }
        
      }
    }
  }).mount('#app')