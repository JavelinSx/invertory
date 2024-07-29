import { useTheme } from '~/composables/useTheme';

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const { updateTheme } = useTheme();
    updateTheme();
  }
});
