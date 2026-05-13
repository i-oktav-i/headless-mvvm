<code>const Card = ({ overrides, ...props }) =&gt; (,</code>
<code>  &lt;HeadlessCard,</code>
<code>    {...props},</code>
<code>    Container={CardContainer},</code>
<code>    Title={CardTitle},</code>
<code>    Button={CardButton},</code>
<code>    {...overrides},</code>
<code>  /&gt;,</code>
<code>);,</code>

<code>const Card = ({ overrides, ...props }) =&gt; (,</code>
<code>  &lt;HeadlessCard,</code>
<code>    {...props},</code>
<code>    Container={CardContainer},</code>
<code>    Title={CardTitle},</code>
<code>    Button={CardButton},</code>
<code>    {...{,</code>
<code>      Title: AnotherTitle,,</code>
<code>    }},</code>
<code>  /&gt;,</code>
<code>);,</code>

<code>const Card = (props) =&gt; (,</code>
<code>  &lt;HeadlessCard,</code>
<code>    {...props},</code>
<code>    Container={CardContainer},</code>
<code>    Title={CardTitle},</code>
<code>    Button={CardButton},</code>
<code>    Title={AnotherTitle},</code>
<code>  /&gt;,</code>
<code>);,</code>

<code>const node = (,</code>
<code>  &lt;Card,</code>
<code>    {...cardProps},</code>
<code>    overrides={{,</code>
<code>      Title: AnotherTitle,,</code>
<code>    }},</code>
<code>  /&gt;,</code>
<code>);,</code>

<code>const Screen = (props) =&gt; (,</code>
<code>  &lt;HeadlessScreen {...props} Card={Card} Container={ScreenContainer} /&gt;,</code>
<code>);,</code>

<code>const Screen = ({ overrides, ...props }) =&gt; (,</code>
<code>  &lt;HeadlessScreen,</code>
<code>    {...props},</code>
<code>    Card={Card},</code>
<code>    Container={ScreenContainer},</code>
<code>    {...overrides},</code>
<code>  /&gt;,</code>
<code>);,</code>

<code>const overrides = {,</code>
<code>  Container: () =&gt; &lt;&gt;&lt;/&gt;,,</code>
<code>  Card: () =&gt; &lt;&gt;&lt;/&gt;,,</code>
<code>};,</code>
<code>const components = {,</code>
<code>  Container: () =&gt; &lt;&gt;&lt;/&gt;,,</code>
<code>  Card: () =&gt; &lt;&gt;&lt;/&gt;,,</code>
<code>};,</code>

<code>const HeadlessScreen = ({ cardProps, Container, Card, overrides }) =&gt; {,</code>
<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      &lt;Card {...cardProps} overrides={overrides.Card} /&gt;,</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>getComponentsAndOverrides({ Card: AnotherCard });,</code>

<code>const a = {,</code>
<code>  tokensOverrides: { Card: AnotherCard },,</code>
<code>  tokensPartsOverrides: {},,</code>
<code>};,</code>

<code>getComponentsAndOverrides({ Card: { Title } });,</code>

<code>const a = {,</code>
<code>  tokensOverrides: {},,</code>
<code>  tokensPartsOverrides: { Card: { Title } },,</code>
<code>};,</code>

<code>const Screen = ({ overrides, ...props }) =&gt; {,</code>
<code>  const { tokensOverrides, tokensPartsOverrides } =,</code>
<code>    getComponentsAndOverrides(overrides);,</code>

<code>  return (,</code>
<code>    &lt;HeadlessScreen,</code>
<code>      {...props},</code>
<code>      Card={Card},</code>
<code>      Container={ScreenContainer},</code>
<code>      {...tokensOverrides},</code>
<code>      overrides={tokensPartsOverrides},</code>
<code>    /&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const Screen = ({ overrides, ...props }) =&gt; {,</code>
<code>  const { components, overridesProps } = getComponentsAndOverrides(,</code>
<code>    { Card, Container },,</code>
<code>    overrides,,</code>
<code>  );,</code>

<code>  return &lt;HeadlessScreen {...props} {...components} {...overridesProps} /&gt;;,</code>
<code>};,</code>

<code>&lt;Screen,</code>
<code>  overrides={{,</code>
<code>    Card: {,</code>
<code>      Title: AnotherTitle,,</code>
<code>    },,</code>
<code>  }},</code>
<code>/&gt;;,</code>
