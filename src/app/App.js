import React , {Component} from 'react';


class App extends Component{
  
  
  
    constructor() {
        super();
        this.state = {
          title: '',
          description: '',
          _id:'',
          tasks:[]
        };

      this.handleChange = this.handleChange.bind(this);
      this.addTask = this.addTask.bind(this);
    }  
  
    addTask(e){
        e.preventDefault();
        if(this.state._id) {
          fetch(`/api/task/${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify({
              title: this.state.title,
              description: this.state.description
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              window.M.toast({html: 'Comentario Actualizado'});
              this.setState({_id: '', title: '', description: ''});
              this.fetchTask();
            });

        } else {
          fetch('/api/task', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              window.M.toast({html: 'Comentario guardado'});
              this.setState({title: '', description: ''});
              this.fetchTask();
            })
            .catch(err => console.error(err));
        }
    
      }

    componentDidMount(){
       this.fetchTask();
    }

    fetchTask(){
    fetch('/api/task')
    .then (res => res.json())
    .then(data => {
        
        this.setState({tasks: data});
        console.log(this.state.tasks);

   });
    }

    editTask(id){

    fetch(`/api/task/${id}`)
    .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          title: data.title,
          description: data.description,
          _id: data._id
        });
      });


    }

    deleteTask(id){

    if(confirm('La censura es para las perras, ¿Me deseas Eliminar?')){
        fetch(`/api/task/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            M.toast({html: 'Comentario Eliminado'});
            this.fetchTask();
          });
      }
    }
    

    handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    }

    render(){

        return(

            <div>
               <nav  className="light-blue darken-4">
                   <div className= "container">
                       <a className="brand-logo" href="/">
                           Twittercito.
                       </a>

                   </div>
               </nav>

               <div className="container">
                   <div className = "row">
                      <div className = "col s5">
                          <div className ="card">
                              <div className= "card-content">

                                  <form onSubmit={this.addTask}>
                                      <div className ="row">
                                          <div className="input-field col s12">
                                              <input name ="title" onChange={this.handleChange} type = "text" placeholder= "titulo" value ={this.state.title}></input>
                                          </div>
                                      </div>

                                      <div className ="row">
                                          <div className="input-field col s12">
                                              <textarea name="description" onChange={this.handleChange} placeholder="Comentario" value={this.state.description}></textarea>
                                          </div>
                                      </div>                             
                                      
                                    <button type ="submit" className = "btn ligth-blue darken-4">
                                        Comentar
                                    </button>

                                  </form>

                              </div>

                          </div>

                       </div>

                       <div className = "col s7">
                           <table>
                               <thead>
                                   <tr>
                                       <th>Title</th>
                                       <th>description</th>                               

                                   </tr>

                               </thead>

                               <tbody>                            
                                                                        
                               {
                                         this.state.tasks.map(task =>{
                                        return(
                                            <tr key = {task._id}>
                                                <td>{task.title}</td>
                                                <td>{task.description}</td>
                                                <td>
                                                    <button className="btn ligth-blue darken-4" style=
                                                    {{margin:'4px'}} onClick = {()=>this.deleteTask(task._id)}> 
                                                    <i className="material-icons">delete</i>
                                                    </button>

                                                    <button className="btn ligth-blue darken-4"  style=
                                                    {{margin:'4px'}}>
                                                    <i className="material-icons" onClick={() => this.editTask(task._id)}>edit</i> 
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                     
                                    }
                                

                               </tbody>
                           </table>

                       </div>

                   </div>
          
               </div>
            </div>
        )
    }
}

export default App;