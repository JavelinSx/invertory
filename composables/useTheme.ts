import { ref, onMounted } from 'vue';

export const useTheme = () => {
  const theme = ref('light');

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    updateTheme();
    localStorage.setItem('theme', theme.value);
  };

  const updateTheme = () => {
    document.documentElement.setAttribute('data-theme', theme.value);
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme.value = savedTheme;
      updateTheme();
    }
  });

  return {
    theme,
    toggleTheme,
    updateTheme,
  };
};
