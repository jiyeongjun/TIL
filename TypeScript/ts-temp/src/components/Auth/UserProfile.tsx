import styled from 'styled-components';

const UserProfile = () => {
  return (
    <StyledUserProfile>
      <h2>My User Profile</h2>
    </StyledUserProfile>
  );
};

export default UserProfile;

const StyledUserProfile = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  max-width: 40rem;
  min-width: 20rem;

  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;

  h2 {
    font-size: 30px;
    font-weight: bold;
  }
`
