<code>const useCardProps = ({ itemId }) =&gt; {,</code>
<code>  /*  */,</code>
<code>  return { title, onClick, buttonText };,</code>
<code>};,</code>

<code>const Card = ({ itemId }) =&gt; {,</code>
<code>  const { title, onClick, buttonText } = useCardProps(itemId);,</code>

<code>  return (,</code>
<code>    &lt;Cell className="container"&gt;,</code>
<code>      &lt;Heading className="title" level={2}&gt;,</code>
<code>        {title},</code>
<code>      &lt;/Heading&gt;,</code>

<code>      &lt;Button onClick={onClick} variant="primary" fullWidth className="button"&gt;,</code>
<code>        {buttonText},</code>
<code>      &lt;/Button&gt;,</code>
<code>    &lt;/Cell&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const Card = ({ itemId }) =&gt; {,</code>
<code>  const { title, onClick, buttonText } = useCardProps(itemId);,</code>

<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Title&gt;{title}&lt;/Title&gt;,</code>

<code>      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const CardContainer = ({ children }) =&gt; (,</code>
<code>  &lt;Cell className="container"&gt;{children}&lt;/Cell&gt;,</code>
<code>);,</code>
<code>const CardTitle = ({ children }) =&gt; (,</code>
<code>  &lt;Heading level={2} className="title"&gt;,</code>
<code>    {children},</code>
<code>  &lt;/Heading&gt;,</code>
<code>);,</code>
<code>const CardTitle = ({ onClick, children }) =&gt; (,</code>
<code>  &lt;Button onClick={onClick} variant="primary" fullWidth className="button"&gt;,</code>
<code>    {children},</code>
<code>  &lt;/Button&gt;,</code>
<code>);,</code>
