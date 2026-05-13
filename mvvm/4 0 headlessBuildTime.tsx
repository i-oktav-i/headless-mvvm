<code>const Card = () =&gt; {,</code>
<code>  const {,</code>
<code>    card: { Container, Title, Button },,</code>
<code>  } = useContext(ComponentsContext);,</code>

<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Title&gt;{title}&lt;/Title&gt;,</code>

<code>      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const Screen = () =&gt; {,</code>
<code>  const {,</code>
<code>    screen: { Container, Card },,</code>
<code>  } = useContext(ComponentsContext);,</code>

<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Card /&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const components = {,</code>
<code>  CardContainer,,</code>
<code>  CardTitle,,</code>
<code>  CardButton,,</code>
<code>  Card,,</code>
<code>  ScreenContainer,,</code>
<code>  Screen,,</code>
<code>};,</code>
