<code>declare module '@tokens' {,</code>
<code>  export const Container: FC & amp;,</code>
<code>  lt;,</code>
<code>  ContainerProps & amp;,</code>
<code>  gt;,</code>
<code>  export const Title: FC & amp;,</code>
<code>  lt;,</code>
<code>  TitleProps & amp;,</code>
<code>  gt;,</code>
<code>  export const Button: FC & amp;,</code>
<code>  lt;,</code>
<code>  ButtonProps & amp;,</code>
<code>  gt;,</code>
<code>},</code>

<code>export default {,</code>
<code>  resolve: {,</code>
<code>    alias: {,</code>
<code>      '@tokens': path.join(/* ... */),,</code>
<code>    },,</code>
<code>  },,</code>
<code>};,</code>
