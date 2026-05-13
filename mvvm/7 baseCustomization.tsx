<code>const Card = (props) =&gt; {,</code>
<code>  const CardButton = flag ? First : Second;,</code>

<code>  return (,</code>
<code>    &lt;HeadlessCard,</code>
<code>      {...props},</code>
<code>      Container={CardContainer},</code>
<code>      Title={CardTitle},</code>
<code>      Button={CardButton},</code>
<code>    /&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const Screen = (props) =&gt; {,</code>
<code>  const Card = flag ? First : Second;,</code>

<code>  return &lt;HeadlessScreen {...props} Card={Card} Container={ScreenContainer} /&gt;;,</code>
<code>};,</code>
