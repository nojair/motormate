import { ref, onMounted, onUnmounted } from 'vue';

export const useViewport = () => {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const updateDimensions = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => window.addEventListener('resize', updateDimensions));
  onUnmounted(() => window.removeEventListener('resize', updateDimensions));

  return { width, height };
};
