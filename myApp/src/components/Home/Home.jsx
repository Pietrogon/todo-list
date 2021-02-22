import {
  IonApp, IonContent, IonInput, IonItem, IonLabel, IonButton, IonButtons, IonCard, IonCardContent, IonToast, IonTabBar, IonTitle, IonToolbar, IonText, IonTextarea
} from '@ionic/react';
import React, { Component } from 'react';
import './Home.css';
import ListTask from '../ListTask/ListTask';

class Home extends React.Component{

  constructor(props){
    super(props);
    this.task = {userId: 5, categoryId: 1}
    this.state = {
      tasks:[],
      openNewTask: false
    }
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    fetch('http://localhost:3300/api/tasks',
      {
        method: "GET",
        mode: "cors"
      }
    ).then(async res => {  
      let tasks = await res.json(); 
      const novoEstado = {
        ...this.state,
        tasks: tasks
      };
      this.setState(novoEstado);
    });
  }

  handleInput = (event) => {
    this.task = {...this.task,[event.target.name]: event.target.value};
  }

  openNewTask(){
    const novoEstado = {
      openNewTask: true
    };
    this.setState(novoEstado);
  }

  async saveNewTask(){
    await fetch('http://localhost:3300/api/tasks',
      {
        method: "POST",
        mode: "cors",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.task)
      }
    )
    this.getTasks();
    const novoEstado = {
      openNewTask: false
    };
    this.setState(novoEstado);
  }

  renderNewTask(){
    return (
      <div className='home-light'>
        <IonItem color='light' lines='none' key={1}>
          <IonLabel position='floating'>Título</IonLabel>
          <IonInput name='title' onIonChange={(event) => this.handleInput(event)}></IonInput>
        </IonItem>
        <IonItem color='light' className="home-textarea" lines='none' key={2}>
          <IonLabel position='floating'>Task</IonLabel>
          <IonTextarea name='task' onIonChange={(event) => this.handleInput(event)} rows={6} className="home-textarea"></IonTextarea>
        </IonItem>
        <IonItem color='light'>
          <IonButtons slot='end'>
            <IonButton onClick={this.saveNewTask.bind(this)} color='success' fill='solid'>
              Salvar
            </IonButton>
          </IonButtons>
        </IonItem>
      </div>
    );
  }
  
  render(){
    return (
      <IonContent color='primary'>
        <IonToolbar color='secondary'>
          <IonTitle>Lista de Tarefas</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={this.openNewTask.bind(this)}>
              <IonLabel>
                Nova Task
              </IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        {this.state.openNewTask && this.renderNewTask()}
        <ListTask deleteClick={this.getTasks.bind(this)} tasks={this.state.tasks}></ListTask>
      </IonContent>
    )
  }
  
}

export default Home;