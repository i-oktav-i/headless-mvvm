<code>const useCardProps = () =&gt; {,</code>
<code>  /*  */,</code>
<code>  return { title, onClick, buttonText };,</code>
<code>};,</code>

<code>const Card = () =&gt; {,</code>
<code>  const { title, onClick, buttonText } = useCardProps();,</code>

<code>  return (,</code>
<code>    &lt;div className="container"&gt;,</code>
<code>      &lt;h2 className="title"&gt;{title}&lt;/h2&gt;,</code>

<code>      &lt;button className="button" onClick={onClick}&gt;,</code>
<code>        {buttonText},</code>
<code>      &lt;/button&gt;,</code>
<code>    &lt;/div&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const Card2 = () =&gt; {,</code>
<code>  const { title, onClick, buttonText } = useCardProps();,</code>

<code>  return (,</code>
<code>    &lt;div className="container2"&gt;,</code>
<code>      &lt;h2 className="title2"&gt;{title}&lt;/h2&gt;,</code>

<code>      &lt;button className="button2" onClick={onClick}&gt;,</code>
<code>        {buttonText},</code>
<code>      &lt;/button&gt;,</code>
<code>    &lt;/div&gt;,</code>
<code>  );,</code>
<code>};,</code>
