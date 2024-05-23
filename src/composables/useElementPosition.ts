// useElementPosition.ts
import { ref, onMounted, onUnmounted } from 'vue';

export const useElementPosition = () => {
  const divRef = ref<HTMLDivElement | null>(null);
  const x = ref(0);
  const y = ref(0);

  const updatePosition = () => {
    if (divRef.value) {
      const rect = divRef.value.getBoundingClientRect();
      x.value = rect.left + window.scrollX;
      y.value = rect.top + window.scrollY;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    updatePosition();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', updatePosition);
    window.removeEventListener('resize', updatePosition);
  });

  return {
    divRef,
    x,
    y
  };
};
