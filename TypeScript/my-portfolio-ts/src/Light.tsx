import {useState} from 'react';

function Light({ name }:any) {
  const [light, setLight] = useState(false);

  return (
    <div>
      <h1>
        {name} {light ? 'ON' : 'OFF'}{' '}
      </h1>
      <button
        onClick={() => setLight(true)}
        disabled={light ? true : false}
      >
        ON
      </button>
      <button
        onClick={() => setLight(false)}
        disabled={!light ? true : false}
      >
        OFF
      </button>
    </div>
  );
}

export default Light;
