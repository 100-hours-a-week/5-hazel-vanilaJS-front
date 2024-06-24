document.getElementById('button1').addEventListener('click', async (event) => {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
          window.location.href = '/main';
      } else {
          alert(`로그인 실패: ${data.message}`);
      }
  } catch (error) {
      console.error('Error:', error);
      alert('서버에 연결할 수 없습니다.');
  }
});
