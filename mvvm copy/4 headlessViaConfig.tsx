const Card = ({ title, onClick, buttonText }) =&gt; {
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

const Screen = ({ cardProps }) =&gt; {
  const {
    screen: { Container, Card },
  } = useContext(ComponentsContext);

  return (
    &lt;Container&gt;
      &lt;Card {...cardProps} /&gt;
    &lt;/Container&gt;
  );
};

const components = {
  card: {
    Container: CardContainer,
    Title: CardTitle,
    Button: CardButton,
  },
  screen: {
    Card: Card,
    Container: ScreenContainer,
  },
};
