  const toggleBtn = document.getElementById('toggleDarkMode');

  // Función para aplicar modo oscuro según localStorage
  function applyDarkModeSetting() {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      toggleBtn.textContent = '🌞 Modo claro';
    } else {
      document.body.classList.remove('dark-mode');
      toggleBtn.textContent = '🌙 Modo oscuro';
    }
  }

  // Al cargar la página, aplicar modo oscuro si está activado
  applyDarkModeSetting();

  // Al hacer click, cambiar el modo y guardar en localStorage
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      toggleBtn.textContent = '🌞 Modo claro';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      toggleBtn.textContent = '🌙 Modo oscuro';
    }
  });