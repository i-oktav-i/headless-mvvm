<code>import { Container, Title, Button } from '@tokens';,</code>

<code>const Card = ({ title, onClick, buttonText }) =&gt; {,</code>
<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Title&gt;{title}&lt;/Title&gt;,</code>

<code>      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>
