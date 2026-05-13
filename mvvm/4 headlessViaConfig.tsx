<code>const Card = ({ title, onClick, buttonText }) =&gt; {,</code>
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

<code>const Screen = ({ cardProps }) =&gt; {,</code>
<code>  const {,</code>
<code>    screen: { Container, Card },,</code>
<code>  } = useContext(ComponentsContext);,</code>

<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Card {...cardProps} /&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const components = {,</code>
<code>  card: {,</code>
<code>    Container: CardContainer,,</code>
<code>    Title: CardTitle,,</code>
<code>    Button: CardButton,,</code>
<code>  },,</code>
<code>  screen: {,</code>
<code>    Card: Card,,</code>
<code>    Container: ScreenContainer,,</code>
<code>  },,</code>
<code>};,</code>
