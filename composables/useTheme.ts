export default function useTheme() {
  const { isDark } = useDark()

  const head = computed(() => ({
    link: [
      {
        rel: 'stylesheet',
        href: isDark.value ? darkTheme : lightTheme,
      },
      {
        rel: 'stylesheet',
        href: mainTheme,
      },
    ],
  }))
  useHead(head)
}
