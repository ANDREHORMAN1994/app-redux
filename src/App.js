import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { saveTask } from './redux/actions';

class App extends React.Component {
  state = {
    localTask: '',
  }

  handleClick = () => {
    const { localTask } = this.state;
    const { dispatch } = this.props;
    dispatch(saveTask(localTask));
  }

  handleChange = ({ target }) => {
    this.setState({
      localTask: target.value,
    })
  }

  render() {
    const { taskList } = this.props;

    return (
      <div className="App">
        <h1>Testando o Redux</h1>

        <input type="text" onChange={ this.handleChange }  />
        <button onClick={ this.handleClick } >Salvar</button>

        <ul>
          {
            taskList.map((t, i) => (
              <li key={i} >{t}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ todo: { task, taskList } }) => ({
  task,
  taskList,
})

export default connect(mapStateToProps)(App);
