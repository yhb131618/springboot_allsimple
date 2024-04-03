import React, { useEffect, useState } from 'react';

function Hello() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.text())
      .then(message => setMessage(message));
  }, []);

  return (

        <div>
          Message from Spring Boot: {message} 연동확인 ok!
       </div>

  );
}

export default Hello;
