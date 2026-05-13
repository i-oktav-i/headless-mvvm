const Card = (props) =&gt; {
  const CardButton = flag ? First : Second;

  return (
    &lt;HeadlessCard
      {...props}
      Container={CardContainer}
      Title={CardTitle}
      Button={CardButton}
    /&gt;
  );
};

const Screen = (props) =&gt; {
  const Card = flag ? First : Second;

  return &lt;HeadlessScreen {...props} Card={Card} Container={ScreenContainer} /&gt;;
};
