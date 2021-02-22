import React, { Component } from 'react';
import {
  IonApp, IonContent, IonInput, IonItem, IonLabel, IonButton, IonButtons, IonCard, IonCardContent, IonToast, IonTabBar, IonTitle, IonToolbar, IonText, IonList, IonIcon, IonCardHeader
} from '@ionic/react';
import './ListTask.css';

class ListTask extends Component {

  deleteTask(id) {
    console.log('Deletado: '+id);
    fetch('http://localhost:3300/api/tasks/'+id,
      {
        method: "DELETE",
        mode: "cors"
      }
    ).then(res => {
      this.props.deleteClick();
    });
  }

  render(){
    return (
      <IonContent color='primary' className='ion-no-padding'>
        <div className='listTask-content'>
          {this.props.tasks.map((task, key) =>
            <IonCard color='light' className='listTask-card' key={key}>
              <IonCardHeader className='ion-no-padding'>
                <IonItem lines='none' color='light'>
                  <IonTitle>{task.title}</IonTitle>
                  <IonButtons slot='end'>
                    <IonButton onClick={() => this.deleteTask(task.pk_id)} fill='clear' color='danger'>
                      <IonIcon name='close'></IonIcon>
                    </IonButton>
                  </IonButtons>
                </IonItem>
              </IonCardHeader>
              <IonCardContent>
              {task.task}
              </IonCardContent>
            </IonCard>
          )}
        </div>
      </IonContent>
    );
  }
}

export default ListTask;