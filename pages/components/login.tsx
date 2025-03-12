import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

function Login() {
  const { setUser } = useGlobalContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault();

    // Пример проверки; в реальном приложении выполняйте проверку на сервере
    if (username === 'admin' && password === 'password') {
      setUser({ role: 'admin' });
      // Дополнительно: перенаправление пользователя на защищенную страницу
    } else {
      alert('Неверное имя пользователя или пароль.');
    }
  };

  return (
    <div className="login">
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <div className="" style={{ marginBottom: '10px' }}>
            <input
              type="text"
              name="username"
              placeholder="Имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="" style={{ marginBottom: '10px' }}>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className=""><button type="submit">Войти</button></div>
      </form>
    </div>
  );
}

export default Login;
