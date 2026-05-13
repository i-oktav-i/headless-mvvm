declare module '@tokens' {
  export const Container: ComponentType&lt;ContainerProps&gt;;
  export const Title: ComponentType&lt;TitleProps&gt;;
  export const Button: ComponentType&lt;ButtonProps&gt;;
}

export default {
  resolve: {
    alias: {
      '@tokens': path.join(/* ... */),
    },
  },
};
