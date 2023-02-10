import { useContext } from "react";
import AuthenticationContext from "../utils/auth";

const DebugButton = () => {
  const { accessToken } = useContext(AuthenticationContext);

  return (
    <button onClick={() => {
      fetch('http://localhost:8080/api/v1/private/health', {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }})
        .then(resp => resp.json())
        .then(json => console.log(JSON.stringify(json)))
        .catch(err => console.log(err?.message))
    }}>
      Debug
    </button>
  )
};

export default DebugButton;
