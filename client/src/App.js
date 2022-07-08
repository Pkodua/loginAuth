
import './App.scss';

function App() {
  return (
    <form>
      <div className="register">
      <h3 className="register__header">Register</h3>
      <label className="register__label">Username</label>
      <input className="register__input"></input>
      <label  className="register__label" >Password</label>
      <input className="register__input"></input>
      <button className="register__button">registration</button>

      </div>
      <div className="login">
      <h3 className="login__header">Login</h3>
      <label className="login__label">Username</label>
      <input className="login__input"></input>
      <label  className="login__label" >Password</label>
      <input className="login__input"></input>
      <button className="login__button">login</button>

      </div>

      
    </form>
    
  );
}

export default App;
