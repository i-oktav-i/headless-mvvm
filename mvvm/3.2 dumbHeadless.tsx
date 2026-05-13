<code>const Card = ({ title, onClick, buttonText }) =&gt; {,</code>
<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Title&gt;{title}&lt;/Title&gt;,</code>

<code>      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const Screen = ({ cardProps }) =&gt; {,</code>
<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Card {...cardProps} /&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const ScreenDataProvider = () =&gt; {,</code>
<code>  const cardProps = useCardProps();,</code>

<code>  return &lt;Screen cardProps={cardProps} /&gt;;,</code>
<code>};,</code>

<code>const CardDataProvider = () =&gt; {,</code>
<code>  const cardProps = useCardProps();,</code>

<code>  return &lt;Card {...cardProps} /&gt;;,</code>
<code>};,</code>
