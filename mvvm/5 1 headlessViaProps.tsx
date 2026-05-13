<code>const HeadlessCard = ({,</code>
<code>  title,,</code>
<code>  onClick,,</code>
<code>  buttonText,,</code>

<code>  Container,,</code>
<code>  Title,,</code>
<code>  Button,,</code>
<code>}) =&gt; {,</code>
<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Title&gt;{title}&lt;/Title&gt;,</code>

<code>      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const HeadlessScreen = ({ cardProps, Container, Card }) =&gt; {,</code>
<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Card {...cardProps} /&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const Card = ({ props }) =&gt; (,</code>
<code>  &lt;HeadlessCard,</code>
<code>    {...props},</code>
<code>    Container={CardContainer},</code>
<code>    Title={CardTitle},</code>
<code>    Button={CardButton},</code>
<code>  /&gt;,</code>
<code>);,</code>

<code>const Screen = (props) =&gt; (,</code>
<code>  &lt;HeadlessScreen {...props} Card={Card} Container={ScreenContainer} /&gt;,</code>
<code>);,</code>

<code>const ScreenDataProvider = ({ ScreenLayout }) =&gt; {,</code>
<code>  const cardProps = useCardProps();,</code>

<code>  return &lt;ScreenLayout cardProps={cardProps} /&gt;;,</code>
<code>};,</code>

<code>const ScreenWidget = () =&gt; &lt;ScreenDataProvider ScreenLayout={Screen} /&gt;;,</code>
