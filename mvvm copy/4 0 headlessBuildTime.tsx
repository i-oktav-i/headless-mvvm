const Card = () =&gt; {
  const {
    card: { Container, Title, Button },
  } = useContext(ComponentsContext);

  return (
    &lt;Container&gt;
      &lt;Title&gt;{title}&lt;/Title&gt;

      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;
    &lt;/Container&gt;
  );
};

const Screen = () =&gt; {
  const {
    screen: { Container, Card },
  } = useContext(ComponentsContext);

  return (
    &lt;Container&gt;
      &lt;Card /&gt;
    &lt;/Container&gt;
  );
};

const components = {
  CardContainer,
  CardTitle,
  CardButton,
  Card,
  ScreenContainer,
  Screen,
};
