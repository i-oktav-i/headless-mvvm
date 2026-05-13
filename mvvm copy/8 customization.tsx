const Card = ({ overrides, ...props }) =&gt; (
  &lt;HeadlessCard
    {...props}
    Container={CardContainer}
    Title={CardTitle}
    Button={CardButton}
    {...overrides}
  /&gt;
);

const Card = ({ overrides, ...props }) =&gt; (
  &lt;HeadlessCard
    {...props}
    Container={CardContainer}
    Title={CardTitle}
    Button={CardButton}
    {...{
      Title: AnotherTitle,
    }}
  /&gt;
);

const Card = (props) =&gt; (
  &lt;HeadlessCard
    {...props}
    Container={CardContainer}
    Title={CardTitle}
    Button={CardButton}
  /&gt;
);
const Card = (props) =&gt; (
  &lt;HeadlessCard
    {...props}
    Container={CardContainer}
    Title={CardTitle}
    Button={CardButton}
    Title={AnotherTitle}
  /&gt;
);

const node = (
  &lt;Card
    {...cardProps}
    overrides={{
      Title: AnotherTitle,
    }}
  /&gt;
);

const Screen = (props) =&gt; (
  &lt;HeadlessScreen {...props} Card={Card} Container={ScreenContainer} /&gt;
);

const Screen = ({ overrides, ...props }) =&gt; (
  &lt;HeadlessScreen
    {...props}
    Card={Card}
    Container={ScreenContainer}
    {...overrides}
  /&gt;
);

const overrides = {
  Container: () =&gt; &lt;&gt;&lt;/&gt;,
  Card: () =&gt; &lt;&gt;&lt;/&gt;,
};
const components = {
  Container: () =&gt; &lt;&gt;&lt;/&gt;,
  Card: () =&gt; &lt;&gt;&lt;/&gt;,
};

const HeadlessScreen = ({ cardProps, Container, Card, overrides }) =&gt; {
  return (
    &lt;Container&gt;
      &lt;Card {...cardProps} overrides={overrides.Card} /&gt;
    &lt;/Container&gt;
  );
};

getComponentsAndOverrides({ Card: AnotherCard });

const a = {
  tokensOverrides: { Card: AnotherCard },
  tokensPartsOverrides: {},
};

getComponentsAndOverrides({ Card: { Title } });

const a = {
  tokensOverrides: {},
  tokensPartsOverrides: { Card: { Title } },
};

const Screen = ({ overrides, ...props }) =&gt; {
  const { tokensOverrides, tokensPartsOverrides } =
    getComponentsAndOverrides(overrides);

  return (
    &lt;HeadlessScreen
      {...props}
      Card={Card}
      Container={ScreenContainer}
      {...tokensOverrides}
      overrides={tokensPartsOverrides}
    /&gt;
  );
};

const Screen = ({ overrides, ...props }) =&gt; {
  const { components, overridesProps } = getComponentsAndOverrides(
    { Card, Container },
    overrides,
  );

  return &lt;HeadlessScreen {...props} {...components} {...overridesProps} /&gt;;
};

&lt;Screen
  overrides={{
    Card: {
      Title: AnotherTitle,
    },
  }}
/&gt;;
