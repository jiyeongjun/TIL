import styled from 'styled-components';
import Button from "../style/Button";

const StyledAuth = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;

  & .control {
    margin-bottom: 0.5rem;
  }

  & .control label {
    display: block;
    color: #616161;
    text-transfrom: uppercase;
    margin-bottom: 0.5rem;
  }

  & .control input {
    display: block;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #ccc;
  }
`

const Auth = () => {

  return (
    <StyledAuth>
      <section>
        <form>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input type="password" id='password'/>
          </div>
          <Button>Login</Button>
        </form>
      </section>
    </StyledAuth>
  );
}

export default Auth;
