<code>const Card = ({ itemId }) =&gt; {,</code>
<code>  const { title, onClick, buttonText } = useCardProps(itemId);,</code>

<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Title&gt;{title}&lt;/Title&gt;,</code>

<code>      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const Screen = () =&gt; {,</code>
<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Card itemId={itemId} /&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>
